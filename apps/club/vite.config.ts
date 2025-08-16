import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@design-system': path.resolve(__dirname, '../../packages/design-system/src'),
      '@api-client': path.resolve(__dirname, '../../packages/api-client/src'),
      '@shared-hooks': path.resolve(__dirname, '../../packages/shared-hooks/src'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});