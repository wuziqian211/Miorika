import type { ProfileConfig } from '@/types/config';
import { withUserConfig } from '@/utils/config-overlay.ts';

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig('profile', {
  avatar: '/assets/images/face.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '晨叶梦春',
  bio: 'Not for the best, just for the better.',
  links: [
    {
      name: 'Bilibili',
      icon: 'fa6-brands:bilibili', // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://space.bilibili.com/425503913',
    },
    { name: 'GitHub', icon: 'fa6-brands:github', url: 'https://github.com/wuziqian211' },
    { name: 'QQ', icon: 'fa6-brands:qq', url: 'https://qm.qq.com/q/9aDPrarwC6' },
    { name: 'X', icon: 'fa6-brands:x-twitter', url: 'https://x.com/wuziqian211' },
    { name: 'Steam', icon: 'fa6-brands:steam', url: 'https://steamcommunity.com/id/wuziqian211/' },
    { name: 'Pixiv', icon: 'fa6-brands:pixiv', url: 'https://www.pixiv.net/users/77695887' },
    { name: 'Email', icon: 'fa6-solid:envelope', url: 'mailto:wuziqian211@126.com' },
  ],
});
