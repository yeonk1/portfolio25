import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [react(), svgr(),],
  base: '/portfolio25/',
  build: {
    rollupOptions: {
      input: 'index.html', // 빌드할 HTML 파일 명시
    },
  },
});