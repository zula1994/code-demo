import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import path from 'path';
// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '^': path.join(__dirname, 'assets')
    }
  },
})
