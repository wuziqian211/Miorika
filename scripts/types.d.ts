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
  packages: null | EmojiPackage[];
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

/** 多用户信息 API 主体数据 */
export type UsersInfoData = UsersInfoItem[];

/** 单个用户信息 */
export interface UsersInfoItem {
  /** mid */
  mid: number;
  /** 昵称 */
  name: string;
  /** 性别 */
  sex: string;
  /** 头像 */
  face: string;
  /** 个性签名 */
  sign: string;
  /** 用户权限等级 */
  rank: number;
  /** 等级 */
  level: number;
  /** 封禁状态 */
  silence: 0 | 1;
  /** 大会员信息 */
  vip: {
    /** 会员类型 */
    type: number;
    /** 会员状态 */
    status: 0 | 1;
    /** 会员过期时间（毫秒级时间戳） */
    due_date: number;
    /** 支付类型 */
    vip_pay_type: 0 | 1;
    theme_type: 0;
    /** 会员标签 */
    label: {
      path: string;
      /** 会员类型文案 */
      text: string;
      /** 会员标签 */
      label_theme: string;
      /** 会员标签文字颜色 */
      text_color: string;
      bg_style: 0 | 1;
      /** 会员标签背景颜色 */
      bg_color: string;
      /** 会员标签边框颜色 */
      border_color: string;
      use_img_label: true;
      img_label_uri_hans: string;
      img_label_uri_hant: string;
      /** 大会员牌子图片（简体版） */
      img_label_uri_hans_static: string;
      /** 大会员牌子图片（繁体版） */
      img_label_uri_hant_static: string;
      label_id: number;
      label_goto: null | { mobile: string; pc_web: string };
      img_label_uri_i18n: string;
      img_label_uri_i18n_static: string;
      label_type: number;
    };
    /** 是否显示会员图标 */
    avatar_subscript: number;
    /** 会员昵称颜色 */
    nickname_color: string;
    /** 大会员类型 */
    role: number;
    /** 大会员角标地址 */
    avatar_subscript_url: string;
    /** 电视大会员状态 */
    tv_vip_status: 0 | 1;
    /** 电视大会员支付类型 */
    tv_vip_pay_type: 0 | 1;
    /** 电视大会员过期时间（秒级时间戳） */
    tv_due_date: number;
    /** 大会员角标信息 */
    avatar_icon: { icon_type?: number; icon_resource: {} };
    ott_info: { vip_type: number; pay_type: number; pay_channel_id: string; status: number; overdue_time: number };
    super_vip: { is_super_vip: boolean };
  };
  /** 认证信息 */
  official: {
    /** 认证类型 */
    role: number;
    /** 认证信息 */
    title: string;
    /** 认证备注 */
    desc: string;
    /** 是否认证 */
    type: -1/* 无 */ | 0/* UP 主认证 */ | 1/* 机构认证 */;
  };
  /** 是否已注销 */
  is_deleted: 0 | 1;
  /** 是否为数字藏品头像 */
  face_nft: 0 | 1;
  face_nft_new: 0 | 1;
  /** 是否为硬核会员 */
  is_senior_member: 0 | 1;
  [key: string]: unknown; // 其他字段
}
