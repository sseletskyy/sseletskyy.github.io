import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react';

const ENV = process.env.NODE_ENV || 'development';
const IS_DEV = ENV === 'development';
console.log(`ENV = ${ENV}`);
const adapterMode = IS_DEV
  ? {
      adapter: node({
        mode: 'standalone',
      }),
    }
  : {};

// https://astro.build/config
export default defineConfig({
  site: 'https://sseletskyy.github.io',
  base: '/',
  output: IS_DEV ? 'server' : 'static',

  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  ...adapterMode,
});
