import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/my-little-wishlist/' : '/',
  plugins: [
    vueDevTools({ launchEditor: 'code' }),
    vue(),
  ],
}))