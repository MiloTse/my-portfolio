import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',

  },
  server: {
    port: 5173,
  },
  preview: {
    port: 8082,
    host: '127.0.0.1',
  }
})
