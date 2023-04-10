import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
        alias: {
          "@": normalizePath(path.resolve("./src")),
        },
      },
      server:{
        port:3000,
        proxy:{
          '/api':'http://localhost:8000',
          '/imgs':'http://localhost:8000'
        }
      }
})
