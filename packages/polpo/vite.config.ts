import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@polpo/ui': '/src',
      '@polpo/helpers': '/src/helpers',
      '@polpo/hooks': '/src/hooks',
    },
  },
});
