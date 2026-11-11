/**
 * 为 Waline 评论系统生成表情包
 * @author 晨叶梦春
 * @license MIT
 */

import type { APIResponse, EmoteData, WalineEmojiInfo } from './generate-emote.types';

import fs from 'node:fs/promises';

const { SESSDATA: sessionData, CSRF: csrfToken, MID: mid } = process.env; // 登录信息
const headers = { // 请求标头
  Cookie: `SESSDATA=${sessionData}; bili_jct=${csrfToken}; DedeUserID=${mid}`,
  Origin: 'https://www.bilibili.com',
  Referer: 'https://www.bilibili.com/',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36',
};
const emojiList: WalineEmojiInfo[] = [];

const ejson = await (await fetch('https://api.bilibili.com/x/emote/user/panel/web?business=reply', { headers })).json() as APIResponse<EmoteData>;

await fs.rm('./public/assets/images/emote/', { force: true, recursive: true }); // 删除旧的表情包文件夹
await fs.mkdir('./public/assets/images/emote/'); // 创建新的表情包文件夹

for (const p of ejson.data.packages) {
  if (!p.emote?.length || p.type === 4) continue; // 排除空表情和颜文字
  await fs.mkdir(`./public/assets/images/emote/${p.text}`);

  const indexImgName = `index.${new URL(p.url).pathname.split('.').at(-1)}`,
        indexImg = Buffer.from(await (await fetch(p.url, { headers, keepalive: true })).arrayBuffer());
  fs.writeFile(`./public/assets/images/emote/${p.text}/${indexImgName}`, indexImg);

  (async () => { // 此处使用异步 IIFE，以避免阻塞主线程，加快执行速度
    for (const e of p.emote!) {
      const imgName = `${e.text.replace(/^\[(?<name>.+)\]$/, '$1')}.${new URL(e.url).pathname.split('.').at(-1)}`,
            img = Buffer.from(await (await fetch(e.url, { headers, keepalive: true })).arrayBuffer());
      fs.writeFile(`./public/assets/images/emote/${p.text}/${imgName}`, img);

      if (e.gif_url) { // 存在 GIF 表情时，也写入 GIF 文件
        const gifImgName = `${e.text.replace(/^\[(?<name>.+)\]$/, '$1')}.${new URL(e.gif_url).pathname.split('.').at(-1)}`,
              gifImg = Buffer.from(await (await fetch(e.gif_url, { headers, keepalive: true })).arrayBuffer());
        fs.writeFile(`./public/assets/images/emote/${p.text}/${gifImgName}`, gifImg);
      }

      console.log(`./public/assets/images/emote/${p.text}/${imgName}`);
    }
  })();

  emojiList.push({
    name: p.text,
    folder: `/assets/images/emote/${p.text}`,
    prefix: '',
    type: '',
    icon: indexImgName,
    items: p.emote.map(e => `${e.text.replace(/^\[(?<name>.+)\]$/, '$1')}.${new URL(e.gif_url || e.url).pathname.split('.').at(-1)}`),
  });
}

fs.writeFile('./shirones/config/data/emoteList.json', JSON.stringify(emojiList, null, 2));
