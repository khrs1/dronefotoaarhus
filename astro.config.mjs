import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dronefotoaarhus.dk',
  build: {
    inlineStylesheets: 'always',
  },
});
