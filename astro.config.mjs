import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://sseletskyy.github.io',
  base: '/',
  output: 'static',

  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    preact(),
  ],

  adapter: node({
    mode: 'standalone',
  }),
});
