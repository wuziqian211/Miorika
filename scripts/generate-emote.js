import fs from 'node:fs/promises';

const { SESSDATA: sessionData, CSRF: csrfToken, MID: mid } = process.env;
const headers = {
  Cookie: `SESSDATA=${sessionData}; bili_jct=${csrfToken}; DedeUserID=${mid}`,
  Origin: 'https://www.bilibili.com',
  Referer: 'https://www.bilibili.com/',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36',
};

await fs.rm('./public/assets/images/emote/', { force: true, recursive: true });
await fs.mkdir('./public/assets/images/emote/');

const ejson = await (await fetch('https://api.bilibili.com/x/emote/user/panel/web?business=reply', { headers })).json();
for (const p of ejson.data.packages) {
  if (!p.emote || p.type === 4) continue;
  await fs.mkdir(`./public/assets/images/emote/${p.text}`);

  const indexImg = Buffer.from(await (await fetch(p.url, { headers, keepalive: true })).arrayBuffer());
  fs.writeFile(`./public/assets/images/emote/${p.text}/index.png`, indexImg);

  (async () => {
    for (const e of p.emote) {
      const name = e.text.slice(1, -1),
            img = Buffer.from(await (await fetch(e.url, { headers, keepalive: true })).arrayBuffer());
      fs.writeFile(`./public/assets/images/emote/${p.text}/${name}.png`, img);

      if (e.gif_url) {
        const gifImg = Buffer.from(await (await fetch(e.gif_url, { headers, keepalive: true })).arrayBuffer());
        fs.writeFile(`./public/assets/images/emote/${p.text}/${name}.gif`, gifImg);
      }
      console.log(`./public/assets/images/emote/${p.text}/${name}.png`);
    }
  })();
}

fs.writeFile(
  './shirones/config/data/emoteList.json',
  JSON.stringify(
    ejson.data.packages.filter(p => p.emote && p.type !== 4)
      .map(p => p.emote.every(e => !e.gif_url)
        ? { name: p.text, folder: `/assets/images/emote/${p.text}`, prefix: '', type: 'png', icon: 'index', items: p.emote.map(e => e.text.slice(1, -1)) }
        : { name: p.text, folder: `/assets/images/emote/${p.text}`, prefix: '', type: '', icon: 'index.png', items: p.emote.map(e => `${e.text.slice(1, -1)}${e.gif_url ? '.gif' : '.png'}`) }),
    null,
    2,
  ),
);
