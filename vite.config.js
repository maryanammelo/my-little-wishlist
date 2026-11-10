import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vueDevTools({ launchEditor: 'code' }),
    vue(),
  ],
})
