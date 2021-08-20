/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

const srcPath = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': srcPath,
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
        additionalData: '@import "./src/assets/styles/index"',
      },
    },
  },
});
