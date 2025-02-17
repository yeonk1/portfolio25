import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import HtmlPlugin from 'vite-plugin-html';


export default defineConfig({
  plugins: [react(),
    svgr(),
    HtmlPlugin({
      inject: {
        injectFavicon: '/portfolio25/favicon.png', // 파비콘 경로 수정
      },
    }),],
  base: '/portfolio25/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});