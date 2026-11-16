export interface APIResponse<T> {
  /** 返回值 */
  code: number;
  /** 错误信息 */
  message: string;
  /** 回复数据本体 */
  data: T | null;
  /** 扩展信息 */
  extInfo: Record<string, unknown>;
}

export interface ImageUploadData {
  /** 图片名称 */
  filename: string;
  /** 图片链接 */
  url: string;
  /** 图片大小 */
  size: number;
  /** 图片宽度 */
  width: number;
  /** 图片高度 */
  height: number;
}
