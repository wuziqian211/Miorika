import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';

// Exercise the browser wrapper without mounting Vue or making live uploads.
const { outputFiles } = await build({
  entryPoints: [new URL('../src/scripts/waline-client.ts', import.meta.url).pathname],
  bundle: true,
  format: 'iife',
  globalName: 'WalineTest',
  write: false,
  loader: { '.css': 'empty' },
  plugins: [{
    name: 'waline-init-capture',
    setup(plugin) {
      plugin.onResolve({ filter: /^@waline\/client$/ }, () => ({ path: 'waline', namespace: 'test' }));
      plugin.onLoad({ filter: /.*/, namespace: 'test' }, () => ({
        contents: 'export const init = options => globalThis.capture(options);',
      }));
    },
  }],
});
const source = outputFiles[0].text;

class TestFileReader extends EventTarget {
  result = null;
  error = null;

  readAsDataURL(file) {
    file.arrayBuffer().then(buffer => {
      this.result = `data:${file.type};base64,${Buffer.from(buffer).toString('base64')}`;
      this.dispatchEvent(new Event('load'));
    }).catch(error => {
      this.error = error;
      this.dispatchEvent(new Event('error'));
    });
  }
}

const createClient = (overrides = {}) => {
  const sandbox = {
    URL,
    FileReader: TestFileReader,
    capture: options => options,
    fetch: () => Promise.reject(new Error('Unexpected upload')),
    console: { error: () => undefined },
    ...overrides,
  };
  runInNewContext(source, sandbox);
  return sandbox.WalineTest;
};
const image = size => new File([new Uint8Array(size)], 'test.png', { type: 'image/png' });
const jsonResponse = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json' },
});
const imageURL = 'https://files.seeusercontent.com/test/image.png';
const success = { code: 0, message: 'OK', data: { url: imageURL } };

test('preserves disabled uploads, caller callbacks, and other Waline options', async () => {
  const client = createClient();
  const callback = () => Promise.resolve('https://example.com/custom.png');
  for (const imageUploader of [false, callback]) {
    const options = Object.freeze({ serverURL: 'https://waline.example.com', imageUploader, lang: 'zh-CN' });
    const resolved = client.init(options);
    assert.equal(resolved.imageUploader, imageUploader);
    assert.equal(resolved.serverURL, options.serverURL);
    assert.equal(resolved.lang, options.lang);
  }
  assert.equal(await client.init({ imageUploader: callback }).imageUploader(image(1)), 'https://example.com/custom.png');
});

test('true and omitted imageUploader use the site uploader; images up to 4 KiB stay inline', async () => {
  const client = createClient({ fetch: () => assert.fail('Small images must not be uploaded') });
  for (const options of [{ imageUploader: true }, {}]) {
    const result = await client.init(options).imageUploader(image(4096));
    assert.equal(result, `data:image/png;base64,${Buffer.alloc(4096).toString('base64')}`);
  }
});

test('rejects empty and oversized files before making a request', async () => {
  const { imageUploader } = createClient({ fetch: () => assert.fail('Invalid files must not be uploaded') }).init({});
  await assert.rejects(imageUploader(image(0)), /空文件/);
  await assert.rejects(imageUploader(image(4500001)), /4\.29 MB/);
});

test('posts raw file bytes as application/octet-stream and returns data.url', async () => {
  const file = image(4097);
  let requests = 0;
  const client = createClient({ fetch: (url, options) => {
    requests++;
    assert.equal(url, 'https://api.yumeharu.top/api/modules?id=upload&type=json');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/octet-stream');
    assert.equal(options.body, file);
    assert.equal(options.credentials, undefined);
    return Promise.resolve(jsonResponse(success));
  } });
  assert.equal(await client.init({ imageUploader: true }).imageUploader(file), imageURL);
  assert.equal(requests, 1);
});

test('accepts the maximum 4,500,000-byte raw request body', async () => {
  const client = createClient({ fetch: () => Promise.resolve(jsonResponse(success)) });
  assert.equal(await client.init({}).imageUploader(image(4500000)), imageURL);
});

test('upload failures fall back at 128 KiB and reject larger images', async context => {
  const failures = [
    ['network failure', () => Promise.reject(new TypeError('Network failed'))],
    ['API failure over HTTP 200', () => Promise.resolve(jsonResponse({ code: -400, message: 'API failed', data: null }))],
    ['API failure over HTTP 400', () => Promise.resolve(jsonResponse({ code: -400, message: '请求错误', data: null }, 400))],
    ['HTTP failure with success-shaped JSON', () => Promise.resolve(jsonResponse(success, 500))],
    ['non-JSON response', () => Promise.resolve(new Response('<html>Error</html>', { status: 502 }))],
    ['null response', () => Promise.resolve(jsonResponse(null))],
    ['missing data', () => Promise.resolve(jsonResponse({ code: 0 }))],
    ['missing URL', () => Promise.resolve(jsonResponse({ code: 0, data: {} }))],
    ['empty URL', () => Promise.resolve(jsonResponse({ code: 0, data: { url: '' } }))],
    ['relative URL', () => Promise.resolve(jsonResponse({ code: 0, data: { url: '/image.png' } }))],
    ['invalid URL protocol', () => Promise.resolve(jsonResponse({ code: 0, data: { url: 'data:image/png;base64,AA==' } }))],
  ];
  for (const [name, fetch] of failures) {
    await context.test(name, async () => {
      const { imageUploader } = createClient({ fetch }).init({});
      assert.equal(await imageUploader(image(131072)), `data:image/png;base64,${Buffer.alloc(131072).toString('base64')}`);
      await assert.rejects(imageUploader(image(131073)));
    });
  }
});

test('keeps the API error message for images too large for Base64 fallback', async () => {
  const client = createClient({ fetch: () => Promise.resolve(jsonResponse({ code: -400, message: '请求错误', data: null }, 400)) });
  await assert.rejects(client.init({}).imageUploader(image(131073)), /请求错误/);
});

test('FileReader errors and cancellation reject instead of leaving uploads pending', { timeout: 2000 }, async context => {
  for (const event of ['error', 'abort']) {
    await context.test(event, async () => {
      class FailingFileReader extends TestFileReader {
        readAsDataURL() {
          queueMicrotask(() => this.dispatchEvent(new Event(event)));
        }
      }
      const { imageUploader } = createClient({ FileReader: FailingFileReader }).init({});
      await assert.rejects(imageUploader(image(4096)), /读取/);
      await assert.rejects(imageUploader(image(4097)), /读取/);
    });
  }
});
