// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://certabooks.ca',
  // base: 'certabooks',
  vite: {
    plugins: [tailwindcss()]
  }
});