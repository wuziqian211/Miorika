import type { AnnouncementConfig } from '@/types/announcementConfig';
import { withUserConfig } from '@/utils/config-overlay.ts';

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
  'announcement',
  {
    title: '', // 公告标题，填空使用 i18n 字符串 Key.announcement
    content: '本网站已迁移至 Shirone 主题，欢迎各位尝鲜哟~', // 公告内容
    closable: true, // 允许用户关闭公告
    link: {
      enable: true, // 启用链接
      text: '查看详情', // 链接文本
      url: '/archives/2026/11/15/migrated-to-shirone/', // 链接 URL
      external: false, // 外部链接
    },
  },
);
