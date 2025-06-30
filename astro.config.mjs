// @ts-check


 //https://astro.build/config




import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel({}),
  output: 'server',
 // service: null, // Désactiver l'optimisation des images
});

