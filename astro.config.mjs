import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambiar `site` por el dominio real antes de publicar.
// Se usa para el canonical, las etiquetas Open Graph y el sitemap.
export default defineConfig({
  site: 'https://hoteleldescanso.cr',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
