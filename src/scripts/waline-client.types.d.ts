export interface APIResponse<T> {
  code: number;
  message: string;
  data: T;
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
