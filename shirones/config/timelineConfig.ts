import type { TimelineConfig } from '@/types/timelineConfig';
import { withUserConfig } from '@/utils/config-overlay.ts';

/**
 * 时间线页行为与展示配置。
 *
 * 遵循「配置管行为，数据管内容」原则：
 * - enable：页面总开关；false 时导航入口同步隐藏，访问 /timeline/ 跳转 404；
 * - categories：筛选分类清单（数组顺序即页面顶部 Chips 顺序）；
 * - order：排序方向，默认为 'desc'（时间倒序，最新在前）；可选 'asc'（正序）；
 * - disabledTitles：可选被禁用的事件标题列表；
 *
 * 注：时间线的具体节点数据（标题、日期、经历描述、要点列表、关联链接等）请在 `shirones/config/data/timeline.ts` 中维护。
 */
export const timelineConfig: TimelineConfig = withUserConfig('timeline', {
  enable: true,
  title: '$t:timeline',
  description: '这里是我的视频创作、账号足迹、粉丝里程碑与成长经历哟 (｡･ω･｡)ﾉ♡',
  categories: [
    { key: 'video', label: '视频创作', icon: 'material-symbols:movie-outline-rounded' },
    { key: 'account', label: '账号足迹', icon: 'material-symbols:person-outline-rounded' },
    { key: 'milestone', label: '粉丝与播放里程碑', icon: 'material-symbols:flag-outline-rounded' },
    { key: 'project', label: '程序与工具', icon: 'material-symbols:code-outline-rounded' },
    { key: 'education', label: '学习成长', icon: 'material-symbols:school-outline-rounded' },
    { key: 'life', label: '生活记录', icon: 'material-symbols:favorite-outline-rounded' },
  ],
  order: 'desc',
  // disabledTitles: [],
});
