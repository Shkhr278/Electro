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
  },

  // Build optimizations
  build: {
    // increase the warning threshold (in KB) to avoid frequent warnings while you optimize
    chunkSizeWarningLimit: 1500,

    // use Rollup manualChunks to split vendor code into separate bundles
    rollupOptions: {
      output: {
        // function-based manualChunks better handles multiple libraries
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('three')) return 'vendor-three';
            // fallback: group remaining node_modules into a general vendor chunk
            return 'vendor';
          }
        },
      },
    },
  },
});
