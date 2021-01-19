const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({ isProduction: true })
  ],
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src'),
      name: 'VueAnnouncer',
      formats: ['es', 'cjs', 'iife']
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vue-router': 'vueRouter'
        }
      }
    }
  }
})
