/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 shirones/config/timelineConfig.ts 控制。
 * 日期使用点分格式，兼容主题对单日和时间范围的排序。
 */
import type { TimelineItem } from '@/types/timelineConfig';

export const timelineData: TimelineItem[] = [
  {
    title: '网站迁移到 Astro Shirone',
    date: '2026.11.15',
    category: 'project',
    description: '将网站由 Hexo NexT 主题迁移到 Astro Shirone 主题。',
    tags: ['博客', 'Astro', 'Shirone'],
    icon: 'material-symbols:language-outline-rounded',
    featured: true,
  },
  {
    title: '参加高考',
    date: '2026.06.07 – 2026.06.09',
    category: 'education',
    description: '参加普通高等学校招生全国统一考试。',
  },
  {
    title: '再次通过硬核会员测试',
    date: '2024.09.22',
    category: 'account',
    description: '重新参加哔哩哔哩硬核会员测试，获得 92 分，比上一次提高了 7 分。',
    links: [
      { label: '查看动态', url: 'https://t.bilibili.com/979993219195469825', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '改名为「晨叶梦春」',
    date: '2024.08.28',
    category: 'account',
    description: '05:30，将 B 站昵称从「wuziqian211」改为「晨叶梦春」。',
    links: [
      { label: '改名动态', url: 'https://t.bilibili.com/980179685240471570', icon: 'simple-icons:bilibili' },
    ],
    featured: true,
  },
  {
    title: '换上现在的头像',
    date: '2024.07.09',
    category: 'life',
    description: '06:00，更换为现在使用的头像。',
  },
  {
    title: '升到 6 级并成为硬核会员',
    date: '2023.09.23',
    category: 'account',
    description: '注册 B 站账号四年后升到 6 级，并以 85 分通过硬核会员测试。',
    links: [
      { label: '查看动态', url: 'https://t.bilibili.com/844569481582739481', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '记录上海与 BW 之旅',
    date: '2023.07.14 – 2023.07.24',
    category: 'life',
    location: '上海',
    description: '陆续发布前往上海、游览外滩与参加 Bilibili World 时拍摄的照片。',
    links: [
      { label: '上海外滩', url: 'https://t.bilibili.com/820796618546610276', icon: 'simple-icons:bilibili' },
      { label: 'BW 会场', url: 'https://t.bilibili.com/821019578895171617', icon: 'simple-icons:bilibili' },
      { label: 'BW 演唱会', url: 'https://t.bilibili.com/821608006583058439', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '分享中考成绩',
    date: '2023.07.10',
    category: 'education',
    description: '分享自己的中考成绩：总分 588 分，满分 680 分。',
    links: [
      { label: '成绩动态', url: 'https://t.bilibili.com/814216672796737552', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '参加中考',
    date: '2023.06.20 – 2023.06.22',
    category: 'education',
    location: '湖北武汉',
    description: '参加武汉市初中毕业生学业考试，此前因备考而暂时停更。',
    links: [
      { label: '备考停更说明', url: 'https://www.bilibili.com/read/cv21428003/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '分享创作者年度报告与粉丝合影',
    date: '2023.01.18',
    category: 'life',
    description: '发布创作者年度报告，并将与自己「近地环绕」的 100 名粉丝整理在一张图里。',
    links: [
      { label: '年度报告动态', url: 'https://t.bilibili.com/752532915357745176', icon: 'simple-icons:bilibili' },
      { label: '100 名粉丝合影', url: 'https://dl.yumeharu.top/2022-loyal-followers.html', icon: 'material-symbols:download-outline-rounded' },
    ],
  },
  {
    title: '发布《摇动 Windows 的任务栏图标！》',
    date: '2022.12.31',
    category: 'video',
    description: '展示自己编写的摇动任务栏图标程序。',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1T44y1d7wB/', icon: 'simple-icons:bilibili' },
      { label: '下载程序', url: 'https://dl.yumeharu.top/%E6%91%87%E5%8A%A8%E4%BB%BB%E5%8A%A1%E6%A0%8F%E5%9B%BE%E6%A0%87.exe', icon: 'material-symbols:download-outline-rounded' },
    ],
  },
  {
    title: '联合投稿《用B站用户名演绎“告白气球”》',
    date: '2022.12.30',
    category: 'video',
    description: '与夜雨浅秋联合投稿。',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1w24y1U77D/', icon: 'simple-icons:bilibili' },
      { label: '夜雨浅秋的主页', url: 'https://space.bilibili.com/513778858', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '更换《夜明けの海》头像',
    date: '2022.12.19',
    category: 'life',
    description: '换用基于 WERI 作品《夜明けの海》修改的头像。',
  },
  {
    title: '发布《如果禁用电脑的显示适配器会怎样？》',
    date: '2022.11.27',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1SG4y1d7SR/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '开放 B 站注册时间私信查询',
    date: '2022.10.16',
    category: 'project',
    description: '用户私信「#注册时间」即可查询自己的 B 站注册时间，这项功能带来了约 50 名新粉丝。',
    links: [
      { label: '功能介绍', url: 'https://t.bilibili.com/717535146654302273', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '粉丝数回升到 2000',
    date: '2022.10.15',
    category: 'milestone',
    description: '随着下半年视频的发布，B 站粉丝数重新回到 2000，同时分享工作环境与粉丝合影。',
    links: [
      { label: '纪念动态', url: 'https://t.bilibili.com/716979665661591558', icon: 'simple-icons:bilibili' },
      { label: '当时的粉丝列表', url: 'https://dl.yumeharu.top/followers-20221015.html' },
    ],
    featured: true,
  },
  {
    title: '发布《在U盘中安装并运行Win98/Win2000会怎样？》',
    date: '2022.10.14',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1ke4y1E7BD/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《如果把虚拟内存转移到U盘会发生什么？》',
    date: '2022.10.02',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV128411s7P2/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '视频总播放量突破 5 万',
    date: '2022.09.08',
    category: 'milestone',
    description: 'B 站视频累计播放量超过 50000。',
  },
  {
    title: '发布《这就是wuziqian211的2022夏日总结~》',
    date: '2022.09.06',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1nY4y1M7MB/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《在Ubuntu运行时拔掉硬盘会怎样？》',
    date: '2022.08.13',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV11B4y167qA/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《一张13.1GB的GIF？？？》',
    date: '2022.07.31',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV12Y4y1P7e9/', icon: 'simple-icons:bilibili' },
      { label: '下载 GIF（提取码：Rick）', url: 'https://pan.baidu.com/s/1xJPmAFrLfrWQoUDgpCleBA?pwd=Rick', icon: 'material-symbols:download-outline-rounded' },
    ],
  },
  {
    title: '发布《360加速球：诶，你就是点不着我！》',
    date: '2022.01.30',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1CS4y1y7vk/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《wuziqian211的2021 UP主荣誉年报》',
    date: '2021.12.29',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1jr4y1S7a9/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《我把我的2021做成了影片！再见，2021正式上映！》',
    date: '2021.12.25',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1k3411x7Wv/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '搭建 Hexo NexT 网站',
    date: '2021.09.16',
    category: 'project',
    description: '使用 Hexo NexT 主题搭建个人网站。',
    tags: ['博客', 'Hexo', 'NexT'],
    icon: 'material-symbols:language-outline-rounded',
    featured: true,
  },
  {
    title: '更换魂魄妖梦头像',
    date: '2021.07.25',
    category: 'life',
    description: '20:50，换用以香风智乃原图修改而成的魂魄妖梦头像。',
  },
  {
    title: '发布《把桌面的位置更改为一个无法访问的文件夹会怎样？》',
    date: '2021.07.07',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1Yy4y1K7da/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《【wuziqian211的许愿之旅】来把好运打在公屏上！》',
    date: '2021.05.03',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1e64y127Hf/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '入站两周年',
    date: '2021.05.02',
    category: 'account',
    description: '将 B 站账号的注册日期设为自己的公开「生日」。',
  },
  {
    title: '发布《看看是哪个小机灵鬼解答了@wuziqian211 的人生问题？！》',
    date: '2021.04.01',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1ZZ4y1F7wH/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: 'B 站账号升到 5 级',
    date: '2021.01.10',
    category: 'account',
    links: [
      { label: '升级动态', url: 'https://t.bilibili.com/478336095517934566', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《【年度报告】wuziqian211的2020时光机》',
    date: '2021.01.01',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1Qo4y1Z7jV/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '注册现在使用的 QQ 账号',
    date: '2020.08.26',
    category: 'account',
    description: '注册 QQ 账号 2300393122。这并非自己的第一个 QQ 账号。',
  },
  {
    title: '粉丝数首次达到 2000',
    date: '2020.08.23',
    category: 'milestone',
    description: 'B 站粉丝数首次达到 2000。',
    links: [
      { label: '纪念动态', url: 'https://t.bilibili.com/426575730931956529', icon: 'simple-icons:bilibili' },
    ],
    featured: true,
  },
  {
    title: '联合投稿《[整人必备]冻结Windows里面的进程！》',
    date: '2020.07.31',
    category: 'video',
    description: '与肥宅水水呀联合投稿，视频中的程序由自己编写。',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV13h411Z7MC/', icon: 'simple-icons:bilibili' },
      { label: '肥宅水水呀的主页', url: 'https://space.bilibili.com/324042405', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '入站一周年',
    date: '2020.05.02',
    category: 'account',
    description: '注册 B 站账号满一年，次日发布纪念动态。注册时间与通过入站答题的时间相差一天。',
    links: [
      { label: '周年动态（5 月 3 日发布）', url: 'https://t.bilibili.com/385052957779309317', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《wuziqian211 的片头》',
    date: '2020.04.05',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1664y1M7Fz/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '更换 33 娘头像',
    date: '2020.03.27',
    category: 'life',
    description: '换用 B 站 33 娘头像，来自「噗尼噗尼元宵节特别企划」。',
  },
  {
    title: '粉丝数达到 1000',
    date: '2020.03.24',
    category: 'milestone',
    description: '不到 40 天，B 站粉丝数从 40 增长到 1000；同时开启私信自动回复，并拥有了粉丝勋章。',
    featured: true,
  },
  {
    title: '发布哔哩哔哩 AV 号与 BV 号互转程序',
    date: '2020.03.23',
    category: 'project',
    description: '在 B 站启用 BV 号的几小时内发布工具，通过调用 B 站 API 查询 AV 号与 BV 号的对应关系，当天带来了约 100 名新粉丝。',
    links: [
      { label: '发布动态', url: 'https://t.bilibili.com/369859347759990180', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《如果迫害wuziqian211会怎样？》',
    date: '2020.03.19',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1T7411R7pZ/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《网络天才能不能猜到wuziqian211？》',
    date: '2020.03.09',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1AE411u7yx/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布两个小视频',
    date: '2020.03.01',
    category: 'video',
    links: [
      { label: '《第一个小视频~》', url: 'https://www.bilibili.com/video/BV17A411J7aP/', icon: 'simple-icons:bilibili' },
      { label: '《承接上一个小视频~》', url: 'https://www.bilibili.com/video/BV12V411m75c/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《把WinXP和Vista的启动管理器名称相互替换会怎么样？》',
    date: '2019.08.22',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1b441197gH/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《【伴奏】Bad Apple!!》',
    date: '2019.08.20',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1P4411Z7Vq/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《3 0 秒 开 机 ， 3 秒 死 机》',
    date: '2019.07.08',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1M4411F7ma/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布《在U盘里安装Windows 3.1会怎么样？》',
    date: '2019.07.07',
    category: 'video',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV12x411f75Y/', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '发布第一个视频《我只是更新一下Windows 10而已，结果我播放了Bad Apple!!》',
    date: '2019.05.05',
    category: 'video',
    description: '在 B 站发布自己的第一个视频。',
    links: [
      { label: '观看视频', url: 'https://www.bilibili.com/video/BV1M4411i71w/', icon: 'simple-icons:bilibili' },
    ],
    featured: true,
  },
  {
    title: '成为 B 站正式会员',
    date: '2019.05.03',
    category: 'account',
    description: '以 71 分通过入站答题，成为正式会员。',
    links: [
      { label: '答题动态', url: 'https://t.bilibili.com/249235771072460827', icon: 'simple-icons:bilibili' },
    ],
  },
  {
    title: '注册哔哩哔哩账号',
    date: '2019.05.02',
    category: 'account',
    description: '18:28:06，为了让自己创作的视频被更多人看到，注册 B 站账号，最初昵称为「wuziqian211」，UID 为 425503913。',
    links: [
      { label: 'B 站主页', url: 'https://space.bilibili.com/425503913', icon: 'simple-icons:bilibili' },
    ],
    featured: true,
  },
  {
    title: '注册《我的世界》中国版账号',
    date: '2017.12.17',
    category: 'account',
    description: '注册《我的世界》中国版账号，并开始使用「wuziqian211」这个昵称。',
  },
  {
    title: '第一次接触 B 站',
    date: '2011 – 2013',
    category: 'life',
    description: '大约在 2011 至 2013 年间第一次接触 B 站并观看视频，当时没有注册账号，具体时间已不确定。',
  },
];

/** 获取所有时间线数据列表 */
export const getTimelineList = (): TimelineItem[] => timelineData;
