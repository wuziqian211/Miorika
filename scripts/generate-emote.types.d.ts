/** B 站 API 返回的 JSON 数据结构 */
export interface APIResponse<T> {
  code: number;
  message: string;
  ttl: number;
  data: T;
}

/** 表情 API 主体数据 */
export interface EmoteData {
  setting: {
    recent_limit: number;
    attr: number;
    focus_pkg_id: number;
    schema: string;
  };
  packages: EmojiPackage[];
}

/** 表情包 */
interface EmojiPackage {
  id: number;
  text: string;
  url: string;
  mtime: number;
  type: number;
  attr: number;
  meta: { size: 1 | 2; item_id: number; item_url?: string; asset_id?: number };
  emote: EmoteItem[];
  flags: { added: true; preview?: true };
  label: null;
  package_sub_title: string;
  expire_time: number;
  ref_mid: 0;
  resource_type: 0;
}

/** 单个表情 */
interface EmoteItem {
  id: number;
  package_id: number;
  text: `[${string}]`; // 不考虑 type 为 4（颜文字）的情况
  url: string;
  gif_url?: string;
  mtime: number;
  type: number;
  attr: number;
  meta: { size: 1 | 2; suggest?: string[]; alias: string };
  flags: { unlocked: boolean };
  activity: null;
}
