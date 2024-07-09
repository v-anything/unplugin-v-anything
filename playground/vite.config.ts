import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Components from 'unplugin-vue-components/vite'
import VAnythingResolver from '../src'

export default defineConfig({
  plugins: [
    vue(),
    Inspect(),
    Components({
      resolvers: [VAnythingResolver()],
    }),
  ],
})
