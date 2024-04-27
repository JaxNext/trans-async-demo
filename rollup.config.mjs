import babel from '@rollup/plugin-babel'

export default {
  input: './index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel.default({
      babelHelpers: 'bundled',
      presets: [
        [
          (await import ('@babel/preset-env')).default,
          {
            exclude: [
              // 'transform-async-to-generator',
            ],
          }
        ]
      ],
      comments: true,
    })
  ],
}