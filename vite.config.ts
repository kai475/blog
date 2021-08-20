/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: 'ie >= 11',
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "./src/assets/styles/common"',
        javascriptEnabled: true,
      },
    },
  },
});
