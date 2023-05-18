import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".ttf"],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@comp': path.resolve(__dirname, './src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_mixins.scss";
        `
      }
    }
  }
})
