import type { DevicesConfig } from '@/types/devicesConfig';
import { withUserConfig } from '@/utils/config-overlay.ts';

/**
 * 设备展示页行为与展示配置。
 *
 * 遵循「配置管行为，数据管内容」原则：
 * - enable：页面总开关；false 时导航入口同步隐藏，访问 /devices/ 跳转 404；
 * - categories：场景分类清单（数组顺序即页面顶部 Chips 顺序）；
 * - disabledIds：可选被禁用的设备 ID 列表；
 *
 * 注：设备的具体清单数据（设备名、品牌、规格、感受说明、图片等）请在 `src/data/devices.ts` 中维护。
 */
export const devicesConfig: DevicesConfig = withUserConfig('devices', {
  enable: true,
  title: '$t:devices',
  description: '$t:devicesBanner',
  categories: [
    {
      key: 'desktop',
      label: '桌面设备',
      icon: 'material-symbols:desktop-windows-outline-rounded',
      description: '笔记本电脑与工作站',
    },
    {
      key: 'mobile',
      label: '移动设备',
      icon: 'material-symbols:mobile-3-outline-rounded',
      description: '平板电脑与智能手机',
    },
    {
      key: 'audio',
      label: '音频设备',
      icon: 'material-symbols:headphones-outline-rounded',
      description: '耳机、音箱与麦克风',
    },
    {
      key: 'peripheral',
      label: '外设',
      icon: 'material-symbols:keyboard-outline-rounded',
      description: '鼠标、键盘与其他外设',
    },
  ],
  // disabledIds: [],
});
