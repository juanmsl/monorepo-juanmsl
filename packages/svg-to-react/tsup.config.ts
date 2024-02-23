import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  format: ['esm', 'cjs'],

  esbuildOptions: options => {
    options.external = ['xml2js'];
  },
});
