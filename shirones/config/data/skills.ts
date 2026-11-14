/**
 * 技能页数据源（纯内容）
 * 页面展示与筛选规则由 shirones/config/skillsConfig.ts 控制
 * 按 expert、advanced、intermediate、beginner 顺序维护
 */
import type { SkillItem } from '@/types/skillsConfig';

export const skillsData: SkillItem[] = [
  // Expert
  {
    name: 'TypeScript',
    description: '运用类型建模、泛型与类型推导，编写结构清晰、易于维护的应用代码',
    icon: 'simple-icons:typescript',
    category: 'language',
    level: 'expert',
  },
  {
    name: 'JavaScript',
    description: '运用现代语法、异步编程与事件处理，实现页面交互和脚本逻辑',
    icon: 'simple-icons:javascript',
    category: 'language',
    level: 'expert',
  },
  {
    name: 'Markdown',
    description: '使用标题、列表、表格与代码块，编写博客和技术文档',
    icon: 'simple-icons:markdown',
    category: 'documentation',
    level: 'expert',
  },
  // Advanced
  {
    name: 'Node.js',
    description: '编写命令行脚本、构建工具与后端服务，串联内容处理流程',
    icon: 'simple-icons:nodedotjs',
    category: 'backend',
    level: 'advanced',
  },
  {
    name: 'Python',
    description: '编写自动化脚本，处理文本、文件与结构化数据，简化重复工作',
    icon: 'simple-icons:python',
    category: 'language',
    level: 'advanced',
  },
  {
    name: 'VS Code',
    description: '配置开发环境，结合扩展、调试与快捷键提升编码效率',
    icon: 'simple-icons:visualstudiocode',
    category: 'tooling',
    level: 'advanced',
  },
  {
    name: 'Windows',
    description: '熟悉桌面环境配置、软件管理与常见问题排查，维护日常开发环境',
    icon: 'simple-icons:windows',
    category: 'system',
    level: 'advanced',
  },
  {
    name: 'Vercel',
    description: '配置网站构建、预览部署与自定义域名，持续发布博客和 Web 应用',
    icon: 'simple-icons:vercel',
    category: 'deployment',
    level: 'advanced',
  },
  {
    name: 'HTML',
    description: '使用语义化标签、表单与文档结构，构建易于理解和访问的网页',
    icon: 'simple-icons:html5',
    category: 'frontend',
    level: 'advanced',
  },
  {
    name: 'CSS',
    description: '运用 Flexbox、Grid、媒体查询与动画，构建响应式页面布局',
    icon: 'simple-icons:css3',
    category: 'frontend',
    level: 'advanced',
  },
  {
    name: 'npm',
    description: '管理依赖、版本与项目脚本，维护 JavaScript 项目的开发和构建流程',
    icon: 'simple-icons:npm',
    category: 'tooling',
    level: 'advanced',
  },
  {
    name: 'GitHub',
    description: '管理代码仓库、Issue 与 Pull Request，参与项目协作和开源交流',
    icon: 'simple-icons:github',
    category: 'deployment',
    level: 'advanced',
  },
  // Intermediate
  {
    name: '正则表达式',
    description: '使用字符类、分组与量词，完成文本匹配、提取、替换和格式校验',
    icon: 'material-symbols:regular-expression-outline-rounded',
    category: 'tooling',
    level: 'intermediate',
  },
  {
    name: 'Astro',
    description: '使用组件、内容集合与 MDX 构建博客，按需添加交互功能',
    icon: 'simple-icons:astro',
    category: 'frontend',
    level: 'intermediate',
  },
  {
    name: 'Git',
    description: '使用提交、分支与合并管理代码变更，处理常见冲突并回溯历史',
    icon: 'simple-icons:git',
    category: 'tooling',
    level: 'intermediate',
  },
  {
    name: 'Linux',
    description: '使用命令行管理文件、进程与权限，配置基础开发环境',
    icon: 'simple-icons:linux',
    category: 'system',
    level: 'intermediate',
  },
  // Beginner
  {
    name: 'C++',
    description: '学习基础语法、标准库容器与面向对象编程，练习编写小型程序',
    icon: 'simple-icons:cplusplus',
    category: 'language',
    level: 'beginner',
  },
  {
    name: 'C',
    description: '学习基础语法、指针与内存管理，通过小程序理解程序运行过程',
    icon: 'simple-icons:c',
    category: 'language',
    level: 'beginner',
  },
];

/** 获取所有技能数据列表 */
export const getSkillsList = (): SkillItem[] => skillsData;
