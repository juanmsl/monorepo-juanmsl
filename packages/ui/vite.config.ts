import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@juanmsl/helpers': '/src/helpers',
      '@juanmsl/hooks': '/src/hooks',
    },
  },
});
