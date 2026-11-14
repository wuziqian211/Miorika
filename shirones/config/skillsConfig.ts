import type { SkillsConfig } from '@/types/skillsConfig';
import { withUserConfig } from '@/utils/config-overlay.ts';

/**
 * 技能页行为与展示配置。
 *
 * 遵循「配置管行为，数据管内容」原则：
 * - enable：页面总开关；false 时导航入口同步隐藏，访问 /skills/ 跳转 404；
 * - categories：筛选分类清单（数组顺序即页面顶部 Chips 顺序）；
 * - disabledNames：可选被禁用的技能名称列表（例如 ['PHP']）；
 *
 * 注：技能的具体内容数据（技能名称、熟练度等级、图标、描述等）请在 `shirones/config/data/skills.ts` 中维护。
 */
export const skillsConfig: SkillsConfig = withUserConfig('skills', {
  enable: true,
  title: '$t:skills',
  description: '记录编程语言、Web 开发与日常工具的学习和实践，展示逐步积累的技能。',
  categories: [
    { key: 'language', label: '编程语言', icon: 'material-symbols:code-rounded' },
    { key: 'frontend', label: '前端开发', icon: 'material-symbols:web-outline-rounded' },
    { key: 'backend', label: '后端开发', icon: 'material-symbols:dns-outline-rounded' },
    { key: 'tooling', label: '开发工具', icon: 'material-symbols:construction-outline-rounded' },
    { key: 'system', label: '操作系统', icon: 'material-symbols:desktop-windows-outline-rounded' },
    { key: 'deployment', label: '部署托管', icon: 'material-symbols:cloud-upload-outline-rounded' },
    { key: 'documentation', label: '文档写作', icon: 'material-symbols:description-outline-rounded' },
  ],
  // disabledNames: [],
});
