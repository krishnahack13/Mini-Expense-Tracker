// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group large dependencies into separate chunks
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          recharts: ['recharts'],
        },
      },
    },
  },
});
