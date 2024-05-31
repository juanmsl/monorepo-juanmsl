import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: './dist',
  dts: true,
  bundle: true,
  minify: true,
  sourcemap: true,
  treeshake: true,
  target: 'node20',
  format: ['esm', 'cjs'],

  esbuildOptions: options => {
    options.packages = 'external'
  },
});
