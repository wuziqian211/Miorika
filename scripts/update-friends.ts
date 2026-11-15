/**
 * 更新 B 站朋友数据
 * @author 晨叶梦春
 * @license MIT
 */

import type { APIResponse, UsersInfoData, UsersInfoItem } from './types';

import fs from 'node:fs/promises';
import { friends } from '../src/data/custom/friendsList.ts';

const { SESSDATA: sessionData, CSRF: csrfToken, MID: mid } = process.env; // 登录信息
const headers = { // 请求标头
  Cookie: `SESSDATA=${sessionData}; bili_jct=${csrfToken}; DedeUserID=${mid}`,
  Origin: 'https://www.bilibili.com',
  Referer: 'https://www.bilibili.com/',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36',
};

const restUsers = [...friends], usersInfo: UsersInfoItem[] = [], jsonList: Promise<APIResponse<UsersInfoData>>[] = [];
while (restUsers.length) {
  jsonList.push(fetch(`https://api.vc.bilibili.com/x/im/user_infos?uids=${restUsers.splice(0, 50).join(',')}`, { headers }).then(resp => resp.json() as Promise<APIResponse<UsersInfoData>>));
}

for await (const json of jsonList) {
  if (json.code !== 0 || !json.data?.length) {
    throw new TypeError(`获取用户信息失败，错误码：${json.code}，错误信息：${json.message}`);
  }
  usersInfo.push(...Object.values(json.data));
}

fs.writeFile('./src/data/custom/friendsInfo.json', JSON.stringify({ modifiedTimestamp: Date.now(), usersInfo }, null, 2));

let friendsListText = await fs.readFile('./src/data/custom/friendsList.ts', { encoding: 'utf8' });
friendsListText = friendsListText
  .replace(
    /\/\/ 共 \d+（正常用户）＋\d+（已注销）＝\d+ 位用户/,
    `// 共 ${usersInfo.filter(i => !i.is_deleted).length}（正常用户）＋${usersInfo.filter(i => i.is_deleted).length}（已注销）＝${usersInfo.length} 位用户`,
  )
  .replace(
    /(?<=const friends = \[.*\n)(?: {2}\d+, \/\/ [^\n]*\n)+/s,
    `${usersInfo.filter(i => !i.is_deleted).sort((a, b) => a.mid - b.mid).map(i => `  ${i.mid}, // ${i.name}`).join('\n')}\n`,
  );
fs.writeFile('./src/data/custom/friendsList.ts', friendsListText);
