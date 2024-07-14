import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['md-elevated-button','md-filled-text-field','md-filter-chip','md-outlined-button','md-filled-tonal-button','md-switch','md-text-button','md-outlined-text-field','md-outlined-icon-button','md-icon','md-filled-icon-button', 'md-icon-button'].includes(tag),
      }
    }
  })],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
    }
    }
  },
})
