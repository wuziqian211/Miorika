import { copyFile, readdir } from 'node:fs/promises';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import shirones from 'shirones';
import icon from 'astro-icon';

// Site-level settings (site URL, base, title, theme colour, fonts, …) live in
// `shirones/config/` so they stay typed and version-controlled with your
// content. This file only wires the theme in.
export default defineConfig({
  adapter: vercel({ imageService: true, isr: true }),
  integrations: [
    shirones({
      // Override individual components by mirroring the theme's structure in
      // `src/components/`, or point at them explicitly:
      // components: { 'atoms/blog/PostCard': './src/components/PostCard.astro' },
    }),
    icon(),
    {
      name: 'vercel-sitemap-output',
      hooks: {
        'astro:config:setup': ({ command, config, updateConfig }) => {
          if (command !== 'build') return;

          const staticDir = new URL('.vercel/output/static/', config.root);
          // The adapter copies static files before Shirones generates its sitemap.
          // Append this hook after the theme's bundled sitemap integration.
          updateConfig({
            integrations: [{
              name: 'vercel-sitemap-copy',
              hooks: {
                'astro:build:done': async ({ dir }) => {
                  const files = await readdir(dir);
                  await Promise.all(files
                    .filter(file => /^sitemap.*\.xml$/.test(file))
                    .map(file => copyFile(new URL(file, dir), new URL(file, staticDir))));
                },
              },
            }],
          });
        },
      },
    },
    {
      name: 'vercel-image-endpoint-route',
      hooks: {
        'astro:config:setup': ({ command, updateConfig }) => {
          if (command === 'dev') {
            updateConfig({ trailingSlash: 'ignore' });
          }
        },
      },
    },
  ],
  server: { host: true, port: 20211 },
});
