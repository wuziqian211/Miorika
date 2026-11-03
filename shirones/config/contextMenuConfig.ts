import type { ContextMenuConfig } from '@/types/contextMenuConfig';
import { withUserConfig } from '@/utils/config-overlay.ts';

/** Optional desktop context-menu enhancement. */
export const contextMenuConfig: ContextMenuConfig = withUserConfig(
  'contextMenu',
  { enable: false, actions: ['copySelection', 'backToTop', 'sharePageLink'] },
);
