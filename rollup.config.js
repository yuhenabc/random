import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/random.ts',
  output: [
    {
      file: 'index.js',
      format: 'cjs',
      name: 'random',
    },
    {
      file: 'dist/random.js',
      format: 'umd',
      name: 'random',
    },
  ],
  plugins: [typescript()],
};
