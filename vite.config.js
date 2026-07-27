import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://nume-proiect.github.io',
      dynamicRoutes: ['/'],
      generateRobotsTxt: true,
      robots: [{ userAgent: '*', allow: '/' }],
      outDir: 'dist'
    })
  ],
  build: {
    target: 'es2015',
    emptyOutDir: true,
    outDir: 'dist'
  }
});
