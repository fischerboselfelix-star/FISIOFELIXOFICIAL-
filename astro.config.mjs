import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://fisiofelix.business',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de', 'fr', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@i18n': '/src/i18n',
      },
    },
  },
});
