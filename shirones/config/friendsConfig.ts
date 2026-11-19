import type { FriendsConfig } from '@/types/friendsConfig.ts';
import { withUserConfig } from '@/utils/config-overlay.ts';

export const friendsConfig: FriendsConfig = withUserConfig('friends', {
  enable: true,
  title: '$t:friends',
  description: '欢迎大家交换友链哟~',
});

// Keep page icons in the config directory so the theme collects them for offline rendering.
export const friendsPageIcons = {
  websites: 'material-symbols:language-outline-rounded',
  bilibiliUsers: 'fa7-brands:bilibili',
  application: 'material-symbols:handshake-outline-rounded',
} as const;
