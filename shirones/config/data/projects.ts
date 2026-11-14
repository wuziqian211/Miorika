/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from '@/types/projectsConfig';

export const projectsData: ProjectItem[] = [
  {
    key: 'miorika',
    title: 'Miorika',
    summary: '基于 Astro 与 Shirone 的个人博客，记录技术与日常',
    category: 'website',
    phase: 'building',
    technologies: ['Astro', 'Shirone', 'Svelte', 'TypeScript', 'Tailwind CSS'],
    icon: 'material-symbols:deployed-code-outline-rounded',
    cover: '/assets/images/screenshot.webp',
    coverAlt: 'Miorika 博客首页预览',
    featured: true,
    website: 'https://www.yumeharu.top/',
    repository: 'https://github.com/wuziqian211/Miorika',
    year: '2026',
  },
  {
    key: 'tchmaterial-parser',
    title: 'tchMaterial-parser',
    summary: '国家中小学智慧教育平台 电子课本下载工具，支持批量下载与 PDF 书签',
    category: 'tools',
    phase: 'shipped',
    technologies: ['Python', 'Tkinter', 'sv-ttk', 'Requests', 'pypdf'],
    icon: 'material-symbols:download-rounded',
    cover: '/assets/images/projects/tchMaterial-parser.png',
    coverAlt: 'tchMaterial-parser 项目预览',
    website: 'https://github.com/happycola233/tchMaterial-parser/releases',
    repository: 'https://github.com/happycola233/tchMaterial-parser',
    year: '2023',
  },
  {
    key: 'website-api',
    title: 'website-api',
    summary: '博客数据接口，提供 B 站信息、友链与图片上传',
    category: 'website',
    phase: 'shipped',
    technologies: ['TypeScript', 'Node.js', 'Vercel', 'Upstash Redis'],
    icon: 'material-symbols:api-rounded',
    website: 'https://api.yumeharu.top/api/',
    repository: 'https://github.com/wuziqian211/website-api',
    year: '2021',
  },
  {
    key: 'website-src',
    title: 'website-src',
    summary: '基于 Hexo 与 NexT 的旧版博客，保留文章与主题配置',
    category: 'website',
    phase: 'archived',
    technologies: ['Hexo', 'NexT', 'Node.js', 'Stylus'],
    icon: 'material-symbols:history-rounded',
    cover: '/assets/images/screenshot-old.webp',
    coverAlt: '旧版「晨叶梦春的小屋」博客首页预览',
    repository: 'https://github.com/wuziqian211/website-src',
    year: '2021',
  },
  {
    key: 'bilibili-api-collect',
    title: 'bilibili-API-collect',
    summary: 'B 站接口文档合集，原仓库已停止维护并归档',
    category: 'bilibili',
    phase: 'archived',
    technologies: ['Markdown', 'HTTP API'],
    icon: 'simple-icons:bilibili',
    cover: '/assets/images/projects/bilibili-API-collect.png',
    coverAlt: 'bilibili-API-collect 项目预览',
    repository: 'https://github.com/SocialSisterYi/bilibili-API-collect',
    year: '2020',
  },
];

/** 获取所有项目数据列表 */
export const getProjectsList = (): ProjectItem[] => projectsData;
