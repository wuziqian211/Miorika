/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 '/assets/games/xxx.webp'，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from '@/types/gamesConfig';

export const gamesData: GameItem[] = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    developer: 'Mojang Studios',
    category: 'sandbox',
    status: 'playing',
    cover: '/assets/images/games/Minecraft.jpg',
    icon: 'material-symbols:deployed-code-outline-rounded',
    rating: 5,
    platform: 'Windows / Linux / Mac / Android / iOS / Switch / PlayStation / Xbox',
    year: '2011',
    tags: ['沙盒游戏', '生存', '建造'],
    description: '一款沙盒建造游戏，玩家可以在一个由方块组成的开放世界中自由探索、建造和生存，支持多人联机，拥有丰富的模组和社区内容',
    link: 'https://www.minecraft.net/',
    featured: true,
  },
  {
    id: 'dancing-line',
    name: '跳舞的线',
    developer: 'Cheetah Mobile / Boombit',
    category: 'casual',
    status: 'completed',
    cover: '/assets/images/games/Dancing-Line.png',
    icon: 'material-symbols:music-note-outline-rounded',
    rating: 4.5,
    platform: 'Android / iOS / Windows',
    year: '2016',
    tags: ['休闲游戏', '音乐', '节奏'],
    description: '一款音乐节奏类游戏，玩家需要控制一条线在不同的轨道上跳跃和旋转，跟随音乐的节奏完成各种挑战，具有丰富的关卡和独特的艺术风格',
    link: 'https://dlfm-wiki.top/wiki/%E8%B7%B3%E8%88%9E%E7%9A%84%E7%BA%BF',
  },
];
