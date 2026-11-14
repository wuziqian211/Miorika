import { isUnifiedProcessor, unified } from '@astrojs/markdown-remark';
import type { AstroIntegration } from 'astro';
import rehypeExternalLinks, { type Options } from 'rehype-external-links';

const externalRel = ['noopener', 'external', 'nofollow', 'noreferrer'];

/** Register after Shirones so its existing Markdown and MDX plugins are retained. */
export default function markdownExternalLinks(): AstroIntegration {
  return {
    name: 'site-markdown-external-links',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        const processor = config.markdown.processor;
        if (!processor || !isUnifiedProcessor(processor)) {
          throw new Error('External links require the Shirones unified Markdown processor.');
        }

        const site = config.site ? new URL(config.site) : undefined;
        const options: Options = {
          target: '_blank',
          rel(node) {
            const rel: unknown = node.properties.rel;
            const existing = Array.isArray(rel) ? rel.map(String)
              : typeof rel === 'string' ? rel.split(/\s+/).filter(Boolean) : [];
            return [...new Set([...externalRel, ...existing])];
          },
          test(node) {
            const { href, target } = node.properties;
            if (typeof href !== 'string' || (target && target !== '_blank')) return false;

            try {
              const url = new URL(href, site ?? 'https://localhost/');
              return (url.protocol === 'http:' || url.protocol === 'https:')
                && url.origin !== site?.origin;
            } catch {
              return false;
            }
          },
        };

        updateConfig({
          markdown: {
            processor: unified({
              ...processor.options,
              rehypePlugins: [
                ...processor.options.rehypePlugins,
                [rehypeExternalLinks, options],
              ],
            }),
          },
        });
      },
    },
  };
}
