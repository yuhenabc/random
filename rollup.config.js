import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/random.ts',
  output: [
    {
      file: 'index.js',
      format: 'cjs',
      name: 'random',
      exports: 'default',
    },
    {
      file: 'dist/random.js',
      format: 'umd',
      name: 'random',
      exports: 'default',
    },
  ],
  plugins: [typescript()],
};
