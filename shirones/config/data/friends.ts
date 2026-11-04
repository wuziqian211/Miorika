/**
 * 友情链接数据配置（结构与 Mizuki 同款，便于互相迁移）。
 * 用于管理友情链接页面的数据：src/pages/friends.astro → organisms/FriendSection。
 *
 * 添加友链：在 friendsData 中追加一项即可，页面 / 筛选标签自动生成。
 * tags 会聚合为页面顶部的筛选 chip（OR 命中：选中多个标签时命中任一即显示）。
 */
export interface FriendItem {
  id: number;
  title: string;
  imgurl: string;
  desc: string;
  siteurl: string;
  tags: string[];
}

export interface APIResponse {
  code: number;
  message: string;
  data: { n: UserItem[]; d?: UserItem[]; m: number };
  extInfo: Record<string, unknown>;
}

export interface UserItem {
  a: string;
  i?: 0 | 1 | 2;
  n?: 0 | 1;
  o?: string;
  c?: string;
  t: string;
  d: string;
  l: string;
}

const shuffleArray = <T> (array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
};

const linksData: FriendItem[] = [
  {
    id: -1,
    title: '水水的小屋🏡~',
    imgurl: 'https://www.happycola.top/img/avatar.png',
    desc: '学而不思则罔，思而不学则殆。',
    siteurl: 'https://www.happycola.top/',
    tags: ['网站', '技术'],
  },
  {
    id: -2,
    title: 'Kegongteng',
    imgurl: 'https://weavatar.com/avatar/0b01396273cca253aa6876c020449b655a9cc12e75f921b38ac088569e814b5e',
    desc: 'Blogger / Technophile / Student',
    siteurl: 'https://kegongteng.cn/',
    tags: ['网站', '技术'],
  },
  {
    id: -3,
    title: '小盒子',
    imgurl: 'https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e',
    desc: '盒沐子の日常',
    siteurl: 'https://blog.nichijou.moe/',
    tags: ['网站', '技术'],
  },
  {
    id: -4,
    title: "SuzuhaYuki's Blog",
    imgurl: 'https://yuk1.uk/assets/img/favicon.webp',
    desc: 'Time goes by, and the years go by.',
    siteurl: 'https://blog.yuk1.uk/',
    tags: ['网站', '技术'],
  },
  {
    id: -5,
    title: '易姐的博客',
    imgurl: '/assets/images/friendship-links/shakaianee-top.jpg',
    desc: '给岁月以文明，而不是给文明以岁月。',
    siteurl: 'https://shakaianee.top/',
    tags: ['网站', '技术'],
  },
  {
    id: -6,
    title: '松坂日记',
    imgurl: '/assets/images/friendship-links/blog-mysqil-com.png',
    desc: '一个基于内容分享,创作与灵感结合折腾的笔记博客',
    siteurl: 'https://blog.mysqil.com/',
    tags: ['网站', '技术'],
  },
  {
    id: -7,
    title: "GoForceX's Blog",
    imgurl: '/assets/images/friendship-links/goforcex-top.jpeg',
    desc: '摆烂的小站',
    siteurl: 'https://goforcex.top/',
    tags: ['网站', '技术'],
  },
  {
    id: -8,
    title: 'Microhard Demo',
    imgurl: '/assets/images/friendship-links/microharddemo-github-io.svg',
    desc: '逸一时，误一世，逸久逸久罢已龄！',
    siteurl: 'https://microharddemo.github.io/',
    tags: ['网站', '技术'],
  },
  {
    id: -9,
    title: 'SESSのB10GTE5T',
    imgurl: '/assets/images/friendship-links/sess-moe.jpg',
    desc: 'Session 的个人博客, 这里有各种类型的有趣的文章内容, 网站使用纯 JavaScript 构建',
    siteurl: 'https://sess.moe/',
    tags: ['网站', '技术'],
  },
  {
    id: -10,
    title: 'Cuite Piglin’s Blog',
    imgurl: 'https://i1.hdslb.com/bfs/face/91059220b13f2bcfcd90fb8b9d699b126dc77543.jpg',
    desc: '成分极为复杂的高中生',
    siteurl: 'https://blog.piglin.eu.org/',
    tags: ['网站', '技术'],
  },
  {
    id: -11,
    title: 'Ra小小特的小站',
    imgurl: '/assets/images/friendship-links/raxxt-top.png',
    desc: 'B 站用户 “爱玩电脑的特兰克斯” 的个人网站',
    siteurl: 'https://raxxt.top/',
    tags: ['网站', '技术'],
  },
  {
    id: -12,
    title: '我汐了_233 的小站',
    imgurl: 'https://api.yumeharu.top/api/getuser?mid=474683920&type=avatar_redirect',
    desc: 'B 站用户 “我汐了_233” 的个人网站',
    siteurl: 'https://woxile.rth3.xyz/',
    tags: ['网站', '技术'],
  },
  {
    id: -13,
    title: 'KittySite',
    imgurl: '/assets/images/friendship-links/blog-konpaku-cn.webp',
    desc: '魂恋白楼三尺剑，飞花影里斩春风',
    siteurl: 'https://blog.konpaku.cn/',
    tags: ['网站', '技术', '医学'],
  },
  {
    id: -14,
    title: 'Xiaoyu 的软件下载站',
    imgurl: 'https://api.yumeharu.top/api/getuser?mid=444309392&type=avatar_redirect',
    desc: '这里是 Xiaoyu 的软件下载站！',
    siteurl: 'https://iamxiaoyu233.rth3.xyz/',
    tags: ['网站', '技术'],
  },
  {
    id: -15,
    title: '是鱼干~',
    imgurl: '/assets/images/friendship-links/fish1000-top.png',
    desc: '永远永远喜欢你！!',
    siteurl: 'https://fish1000.top/',
    tags: ['网站', '技术'],
  },
  {
    id: -16,
    title: '北浅的小窝',
    imgurl: 'https://beiqian.fun/images/avatar.png',
    desc: '不积跬步无以至千里，不积小流无以成江海。',
    siteurl: 'https://beiqian.fun/',
    tags: ['网站', '技术', '动漫'],
  },
  {
    id: -17,
    title: '家乡印象⛽',
    imgurl: '/assets/images/friendship-links/nxdaolin-dpdns-org.gif',
    desc: '一个记录家乡故事的小站',
    siteurl: 'https://nxdaolin.dpdns.org/',
    tags: ['网站', '生活'],
  },
  {
    id: -18,
    title: 'TV768の个人网站',
    imgurl: '/assets/images/friendship-links/tv768-xyz.jpg',
    desc: '精彩的768 让生活添色彩',
    siteurl: 'https://www.tv768.xyz/',
    tags: ['网站', '放送'],
  },
  {
    id: -19,
    title: '弹幕塚',
    imgurl: '/assets/images/friendship-links/danmaku-site.png',
    desc: '某野生的神弹幕存档站ヽ(✿ﾟ▽ﾟ)ノ',
    siteurl: 'https://danmaku.site/',
    tags: ['网站', '技术'],
  },
];
const unavailableLinksData: FriendItem[] = [
  {
    id: -1001,
    title: '365云栈',
    imgurl: '/images/friendship-links/blog-365sites-top.png',
    desc: '初阅不明言外意，重温方觉字中情',
    siteurl: 'https://blog.365sites.top/',
    tags: ['网站', '技术', '失效/注销'],
  },
  {
    id: -1002,
    title: '朋友圈实验室',
    imgurl: '/images/friendship-links/aperturelaboratories-icoc-vc.png',
    desc: '一个古朴的化学实验室',
    siteurl: 'https://aperturelaboratories.icoc.vc/',
    tags: ['网站', '放送', '失效/注销'],
  },
  {
    id: -1003,
    title: '知心她们工作室',
    imgurl: '/images/friendship-links/shuxincm-jzfkw-net.png',
    desc: '知心她们，心情美好。',
    siteurl: 'https://shuxincm.jzfkw.net/',
    tags: ['网站', '放送', '失效/注销'],
  },
  {
    id: -1004,
    title: '值关大众放送工作室',
    imgurl: '/images/friendship-links/zhiguanmedia-jzfkw-net.png',
    desc: '做有情怀的媒体',
    siteurl: 'https://zhiguanmedia.jzfkw.net/',
    tags: ['网站', '放送', '失效/注销'],
  },
  {
    id: -1005,
    title: '社凤迷工作室',
    imgurl: '/images/friendship-links/shefengmi-10-jzfkw-net.jpg',
    desc: '看着社会与法 听着凤凰传奇',
    siteurl: 'https://shefengmi-10.jzfkw.net/',
    tags: ['网站', '放送', '失效/注销'],
  },
  {
    id: -1006,
    title: '铭琛天宏互娱工作室',
    imgurl: '/images/friendship-links/mingchen2485-jzfkw-net.png',
    desc: '我们不做视频，我们只是央视网的搬运工。',
    siteurl: 'https://mingchen2485.jzfkw.net/',
    tags: ['网站', '放送', '失效/注销'],
  },
  {
    id: -1007,
    title: 'wuziqian211 的网站（旧）',
    imgurl: '/images/friendship-links/wuziqian211-icoc-vc.png',
    desc: '梦春酱的旧网站，已不再更新',
    siteurl: 'https://wuziqian211.icoc.vc/',
    tags: ['网站', '技术', '失效/注销'],
  },
];

const usersData: FriendItem[] = [],
      deletedUsersData: FriendItem[] = [],
      fjson = <APIResponse> await (await fetch('https://api.yumeharu.top/api/modules?id=friends&version=3&type=json')).json();
if (fjson.code === 0) {
  usersData.push(...fjson.data.n.map(f => ({ id: +f.l.split('/').at(-1)!, title: f.t, imgurl: f.a, desc: f.d, siteurl: f.l, tags: ['B 站朋友'] })));
  if (fjson.data.d?.length) {
    deletedUsersData.push(...fjson.data.d.map(f => ({ id: +f.l.split('/').at(-1)!, title: f.t, imgurl: f.a, desc: f.d, siteurl: f.l, tags: ['B 站朋友', '失效/注销'] })));
  }
}

// 友情链接数据
export const friendsData: FriendItem[] = [...shuffleArray(linksData), ...shuffleArray(usersData), ...shuffleArray(deletedUsersData), ...shuffleArray(unavailableLinksData)];

// 获取所有友情链接数据（稳定顺序，测试可复现）
export const getFriendsList = (): FriendItem[] => friendsData;

// 获取随机排序的友情链接数据（避免固定排序，按需使用）
export const getShuffledFriendsList = (): FriendItem[] => {
  const shuffled = [...friendsData];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
};
