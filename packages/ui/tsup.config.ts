import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  bundle: true,
  treeshake: true,
  target: 'node18',
  format: ['esm', 'cjs'],

  esbuildOptions: options => {
    options.external = [
      'react',
      'react-dom',
      'styled-components',
      '@hookform/resolvers',
      'axios',
      'color',
      'react-hook-form',
      'yup',
    ];
  },
});
