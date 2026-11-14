import type { APIResponse, ImageUploadData } from './waline-client.types';
import { init as walineInit, type WalineInitOptions } from '@waline/client';
import '@waline/client/waline.css';

const readAsDataURL = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    if (typeof reader.result === 'string') {
      resolve(reader.result);
    } else {
      reject(new TypeError('读取图片失败哟 qwq'));
    }
  });
  reader.addEventListener('error', () => reject(reader.error ?? new TypeError('读取图片失败哟 qwq')));
  reader.addEventListener('abort', () => reject(new TypeError('图片读取已取消哟 qwq')));
  reader.readAsDataURL(file);
});

const uploadImage = async (file: File): Promise<string> => {
  if (file.size > 4500000) { // API 限制请求主体大小不能超过 4,500,000 字节
    throw new TypeError('文件大小不能超过 4.29 MB 哟 qwq');
  }
  if (file.size <= 0) {
    throw new TypeError('不能选择空文件哟 qwq');
  }
  if (file.size <= 4096) { // 图片大小不超过 4 KB 时，直接转为 Base64
    return readAsDataURL(file);
  }

  try {
    // 此 API 接收原始文件字节；multipart/form-data 由服务端转发给图床时构造
    const response = await fetch('https://api.yumeharu.top/api/modules?id=upload&type=json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream' },
      body: file,
    });
    const ujson = <APIResponse<ImageUploadData> | null> await response.json();
    if (!response.ok || ujson?.code !== 0) {
      const message = ujson?.code !== 0 && typeof ujson?.message === 'string' && ujson.message
        ? ujson.message
        : `图片上传失败（HTTP ${response.status}）`;
      throw new TypeError(message);
    }
    const url = ujson.data?.url;
    if (typeof url !== 'string' || !['http:', 'https:'].includes(new URL(url).protocol)) {
      throw new TypeError('图片上传接口返回了无效的图片链接哟 qwq');
    }
    return url;
  } catch (error) {
    console.error(error);
    if (file.size > 131072) throw error;
    // 上传失败且图片不超过 128 KB 时，保留 Base64 回退。
    return readAsDataURL(file);
  }
};

export const init = (options: WalineInitOptions) => walineInit({
  ...options,
  imageUploader: options.imageUploader === false || typeof options.imageUploader === 'function'
    ? options.imageUploader
    : uploadImage,
});
