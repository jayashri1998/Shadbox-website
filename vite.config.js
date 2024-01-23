import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const {VITE_API_ENDPOINT} =process.env;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.shadbox.com',
        changeOrigin:'true'
      },
    },
  },
})
