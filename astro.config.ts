import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import shirones from 'shirones';

// Site-level settings (site URL, base, title, theme colour, fonts, …) live in
// `shirones/config/` so they stay typed and version-controlled with your
// content. This file only wires the theme in.
export default defineConfig({
  adapter: vercel({ isr: true }),
  integrations: [
    shirones({
      // Override individual components by mirroring the theme's structure in
      // `src/components/`, or point at them explicitly:
      // components: { 'atoms/blog/PostCard': './src/components/PostCard.astro' },
    }),
  ],
  server: { host: true, port: 20211 },
});
