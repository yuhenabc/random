import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/random.ts',
  output: [
    {
      file: 'dist/random.cjs',
      format: 'cjs',
      exports: 'default',
    },
    {
      file: 'dist/random.umd.js',
      format: 'umd',
      name: 'random',
      exports: 'default',
    },
    {
      file: 'dist/random.mjs',
      format: 'es',
      exports: 'default',
    },
  ],
  plugins: [typescript()],
};
