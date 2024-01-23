import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://www.shadbox.com',
        changeOrigin: true,
      },
    },
  },
});
