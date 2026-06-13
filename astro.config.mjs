import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [astroIcon()],
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        '@': '/src', // <-- Ini memastikan Vite paham tanda @/ saat memproses CSS & Komponen
      },
    },
  },
});