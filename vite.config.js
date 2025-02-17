import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const isProduction = process.env.VITE_APP_MODE === "production";
const basename = isProduction ? "/portfolio25" : "/";

export default defineConfig({
  plugins: [react(), svgr()],
  base: basename,
});
