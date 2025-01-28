import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    ui: './src/index.ts',
    hooks: './src/hooks/index.ts',
    helpers: './src/helpers/index.ts',
  },
  outDir: './dist',
  dts: true,
  bundle: true,
  minify: true,
  sourcemap: true,
  target: 'node20',
  format: ['cjs', 'esm'],
  banner: {js: '"use client";'},
  exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
  esbuildOptions: options => {
    options.packages = 'external'
  },
});
