import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: true,
  },

  resolve: {
    alias: {
      '@': '/src',
    },
    dedupe: ['react', 'react-dom']
  },

  build: {
    chunkSizeWarningLimit: 1500,

    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
