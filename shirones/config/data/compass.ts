/**
 * 站点罗盘数据（本地数据源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 * 添加站点：往对应 Shelf.entries 追加一项；数组顺序即展示顺序。
 * - icon：Iconify 名（material-symbols:xxx）或图片 URL（http(s)/绝对路径）；
 *   省略时瓷砖显示 label 首字母 tonal 块（不自动抓取 favicon）。
 * - image：用户自定义图片 URL（http(s)/绝对路径），优先于 icon 渲染；
 *   加载失败自动降级为首字母块。
 */

/** 单条站点记录 */
export interface CompassEntry {
  /** 站点名（瓷砖标题） */
  label: string;
  /** 外链地址 */
  href: string;
  /** 一句话说明（瓷砖副行；省略则显示域名） */
  note?: string;
  /** 图标：Iconify 名或图片 URL；省略 = 首字母兜底 */
  icon?: string;
  /** 用户自定义图片（http(s)/绝对路径）：优先于 icon 渲染；省略则走 icon/首字母 */
  image?: string;
}

/** 分组（Shelf = 罗盘上的收纳格） */
export interface CompassShelf {
  /** 锚点 id（字母数字，作分组定位与跳转） */
  key: string;
  /** 分组名 */
  name: string;
  /** 分组图标（Iconify 名，SectionTitle 行首） */
  icon?: string;
  /** 分组副文案（标题下弱文本，可选） */
  blurb?: string;
  entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
  {
    key: 'dev',
    name: '开发与部署',
    icon: 'material-symbols:code-rounded',
    blurb: '查阅文档、协作开发与部署网站的常用入口',
    entries: [
      {
        label: 'GitHub',
        href: 'https://github.com/',
        note: '代码托管与协作',
        icon: 'simple-icons:github',
      },
      {
        label: 'MDN',
        href: 'https://developer.mozilla.org/',
        note: 'Web 开发文档',
        icon: 'simple-icons:mdnwebdocs',
      },
      {
        label: 'Vercel',
        href: 'https://vercel.com/',
        note: '网站托管与部署',
        icon: 'simple-icons:vercel',
      },
      {
        label: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        note: '带类型语法的 JS',
        icon: 'simple-icons:typescript',
      },
    ],
  },
  {
    key: 'design',
    name: '框架与主题',
    icon: 'material-symbols:layers-outline-rounded',
    blurb: '构建本站所用的 Web 框架与博客主题',
    entries: [
      {
        label: 'Astro',
        href: 'https://astro.build/',
        note: '网站构建框架',
        icon: 'simple-icons:astro',
      },
      {
        label: 'Shirone',
        href: 'https://shirone.mysqil.com/',
        note: 'M3E 博客主题',
        icon: 'material-symbols:palette-outline-rounded',
      },
    ],
  },
  {
    key: 'reaction',
    name: '评论与互动',
    icon: 'material-symbols:forum-outline-rounded',
    blurb: '用评论交流想法，让看板娘陪伴阅读',
    entries: [
      {
        label: 'Waline',
        href: 'https://waline.js.org/',
        note: '轻量博客评论系统',
        icon: 'material-symbols:forum-outline-rounded',
      },
      {
        label: 'Live2D',
        href: 'https://github.com/stevenjoezhang/live2d-widget',
        note: '网页互动看板娘',
        icon: 'material-symbols:face-outline-rounded',
      },
      {
        label: 'S.EE',
        href: 'https://s.ee/',
        note: '链接与文件管理',
        icon: 'material-symbols:image-outline-rounded',
      },
    ],
  },
  {
    key: 'github',
    name: 'GitHub',
    icon: 'fa7-brands:github',
    blurb: '我的 GitHub 主页与开源仓库',
    entries: [
      {
        label: 'wuziqian211',
        href: 'https://github.com/wuziqian211',
        note: '个人主页与开源项目',
        icon: 'material-symbols:person-outline-rounded',
      },
      {
        label: 'Miorika',
        href: 'https://github.com/wuziqian211/Miorika',
        note: '本站源码与配置',
        icon: 'material-symbols:language-outline-rounded',
      },
      {
        label: 'tchMaterial-parser',
        href: 'https://github.com/happycola233/tchMaterial-parser',
        note: '电子课本解析与下载',
        icon: 'material-symbols:school-outline-rounded',
      },
      {
        label: 'website-api',
        href: 'https://github.com/wuziqian211/website-api',
        note: '本站 API 服务',
        icon: 'material-symbols:cloud-outline-rounded',
      },
      {
        label: 'website-src',
        href: 'https://github.com/wuziqian211/website-src',
        note: '旧 Blog 源码',
        icon: 'material-symbols:globe-2-cancel-outline-rounded',
      },
      {
        label: 'bilibili-API-collect',
        href: 'https://github.com/SocialSisterYi/bilibili-API-collect',
        note: 'B 站 API 文档（停更）',
        icon: 'simple-icons:bilibili',
      },
    ],
  },
];
