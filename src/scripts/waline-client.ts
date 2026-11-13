import type { APIResponse, ImageUploadData } from './waline-client.types';
import { init as walineInit, type WalineInitOptions } from '@waline/client';
import '@waline/client/waline.css';

export const init = (options: WalineInitOptions) => walineInit({
  ...options,
  imageUploader: options.imageUploader === false ? false : async (file: File): Promise<string> => {
    const { promise, resolve, reject } = Promise.withResolvers<string>();

    if (file.size > 4500000) { // API 限制请求主体大小不能超过 4,500,000 字节
      reject(new TypeError('文件大小不能超过 4.29 MB 哟 qwq'));
    } else if (file.size <= 0) {
      reject(new TypeError('不能选择空文件哟 qwq'));
    } else if (file.size <= 4096) { // 图片大小小于 4 KB 时，直接转为 Base64
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(<string> reader.result));
      reader.readAsDataURL(file);
    } else {
      try {
        const ujson = <APIResponse<ImageUploadData>> await (await fetch('https://api.yumeharu.top/api/modules?id=upload&type=json', { method: 'POST', headers: { 'Content-Type': 'application/octet-stream' }, body: file })).json();
        if (ujson.code === 0) {
          resolve(ujson.data.url);
        } else {
          throw new TypeError(ujson.message);
        }
      } catch (e) {
        console.error(e);

        if (file.size > 131072) {
          reject(e);
        } else { // 转为 Base64
          const reader = new FileReader();
          reader.addEventListener('load', () => resolve(<string> reader.result));
          reader.readAsDataURL(file);
        }
      }
    }
    return promise;
  },
});
