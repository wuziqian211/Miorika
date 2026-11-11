/** B 站 API 返回的 JSON 数据结构 */
export interface APIResponse<T> {
  /** 返回值 */
  code: number;
  /** 错误信息 */
  message: string;
  ttl: number;
  /** 信息本体 */
  data: T;
}

/** 表情 API 主体数据 */
export interface EmoteData {
  /** 表情包设置 */
  setting: {
    /** 最近使用的表情显示上限 */
    recent_limit: number;
    attr: number;
    focus_pkg_id: number;
    /** 表情管理 url */
    schema: string;
  };
  /** 表情包列表 */
  packages: EmojiPackage[];
}

/** 表情包信息 */
interface EmojiPackage {
  /** 表情包 id */
  id: number;
  /** 表情包名称 */
  text: string;
  /** 表情包标志图片 url */
  url: string;
  /** 表情包创建时间（秒级时间戳） */
  mtime: number;
  /** 表情包类型 */
  type: 1/* 普通 */ | 2/* 会员专属 */ | 3/* 购买所得 */ | 4/* 颜文字 */ | 6/* （？） */ | 12/* 包月充电 */ | 13/* 收藏 */;
  /** 表情包属性 */
  attr: number;
  /** 表情包元数据 */
  meta: {
    /** 表情尺寸 */
    size: 1/* 小表情 */ | 2/* 大表情 */;
    /** 标签文字 */
    label_text?: string;
    /** 表情颜色 */
    label_color?: string;
    /** 购买物品 id */
    item_id?: number;
    /** 购买物品页面 url */
    item_url?: string;
    asset_id?: number;
  };
  /** 表情列表 */
  emote?: EmoteItem[];
  /** 表情包标志 */
  flags: {
    /** 是否禁用 */
    no_access?: true;
    /** 是否已添加 */
    added?: true;
    preview?: true;
    recommend?: true;
  };
  /** 表情包标签 */
  label: null | {
    /** 标签文字颜色 */
    font_color: string;
    /** 标签背景颜色 */
    background_color: string;
    /** 标签文字 */
    text: string;
  };
  package_sub_title: '';
  expire_time: 0;
  /** 表情包所属用户 mid */
  ref_mid: number;
  resource_type: 0 | 1;
}

/** 单个表情信息 */
interface EmoteItem {
  /** 表情 id */
  id: number;
  /** 表情包 id */
  package_id: number;
  /** 表情转义符 */
  text: `[${string}]`; // 不考虑 type 为 4（颜文字）的情况
  /** 表情图片 url */
  url: string;
  /** 表情 gif 图片 url */
  gif_url?: string;
  /** 表情创建时间（秒级时间戳） */
  mtime: number;
  /** 表情类型 */
  type: 1/* 普通 */ | 2/* 会员专属 */ | 3/* 购买所得 */ | 4/* 颜文字 */ | 8/* （？） */;
  /** 表情属性 */
  attr: number;
  /** 表情元数据 */
  meta: {
    /** 表情尺寸 */
    size: 1/* 小表情 */ | 2/* 大表情 */;
    /** 匹配表情推荐的关键词 */
    suggest?: string[];
    /** 表情别名 */
    alias: string;
  };
  /** 表情标志 */
  flags: {
    /** 是否已解锁 */
    unlocked: boolean;
  };
  /** 关联活动信息 */
  activity: null | {
    /** 活动标题 */
    title: string;
    /** 活动开始时间（秒级时间戳） */
    start_time: number;
    /** 活动结束时间（秒级时间戳） */
    end_time: number;
    /** 活动 url */
    jump_url: string;
    /** 解锁条件说明 */
    unlock_descs: string[];
    /** 按钮文字 */
    jump_btn_desc: string;
  };
}

/** Waline 自定义表情信息 */
export interface WalineEmojiInfo {
  /** 选项卡上的 Emoji 名称 */
  name: string;
  /** 所在文件夹链接 */
  folder?: string;
  /** Emoji 通用路径前缀 */
  prefix?: string;
  /** Emoji 图片的类型，会作为文件扩展名使用 */
  type?: string;
  /** 选项卡显示的 Emoji 图标 */
  icon: string;
  /** Emoji 图片列表 */
  items: string[];
}
