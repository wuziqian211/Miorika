/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from '@/types/devicesConfig';

export const devicesData: DeviceItem[] = [
  {
    id: 'redmi-turbo-5',
    name: 'Redmi Turbo 5',
    brand: '红米',
    category: 'mobile',
    status: 'active',
    specs: '天玑 8500-Ultra / 16GB / 512GB',
    description: '高性能旗舰手机，搭载高刷新率屏幕与大容量电池，适合长时间游戏与多任务处理',
    image: '/assets/images/devices/Redmi-Turbo-5.png',
    icon: 'material-symbols:mobile-3-outline-rounded',
    link: 'https://www.mi.com/prod/redmi-turbo-5',
    featured: true,
    year: '2026',
  },
  {
    id: 'xiaomi-book-pro-14',
    name: 'Xiaomi Book Pro 14',
    brand: '小米',
    category: 'desktop',
    status: 'active',
    specs: 'Intel Ultra X7 / 32GB / 1TB',
    description: '用于开发、日常办公与大型游戏的高性能笔记本电脑，搭载高刷新率屏幕与轻薄机身',
    image: '/assets/images/devices/Xiaomi-Book-Pro-14.png',
    icon: 'material-symbols:laptop-windows-outline-rounded',
    link: 'https://www.mi.com/prod/xiaomi-book-pro-14',
    featured: true,
    year: '2026',
  },
  {
    id: 'redmi-note-11t-pro-plus',
    name: 'Redmi Note 11T Pro+',
    brand: '红米',
    category: 'mobile',
    status: 'backup',
    specs: '天玑 8100 / 8GB / 512GB',
    description: '中高端智能手机，适合日常使用与游戏，搭载高刷新率屏幕，目前作为备用机使用',
    image: '/assets/images/devices/Redmi-Note-11T-Pro-Plus.png',
    icon: 'material-symbols:mobile-arrow-down-outline-rounded',
    link: 'https://www.mi.com/redminote11t-pro',
    year: '2022',
  },
  {
    id: 'xiaomi-air-13',
    name: '小米笔记本 Air 13.3"',
    brand: '小米',
    category: 'desktop',
    status: 'archived',
    specs: 'Intel Core i5-8250U / 8GB / 256GB',
    description: '轻薄笔记本电脑，适合日常办公与学习，目前已停用',
    image: '/assets/images/devices/Xiaomi-Air-13.png',
    icon: 'material-symbols:computer-cancel-outline-rounded',
    link: 'https://www.mi.com/mibookair-13',
    year: '2016~2026',
  },
];

/** 获取所有设备数据列表 */
export const getDevicesList = (): DeviceItem[] => devicesData;
