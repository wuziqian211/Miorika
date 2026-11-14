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
];

/** 获取所有设备数据列表 */
export const getDevicesList = (): DeviceItem[] => devicesData;
