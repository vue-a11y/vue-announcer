import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import chokidar from 'chokidar'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    eslint({
      include: './src/**'
    }),
    babel({
      include: [
        'node_modules/vue-template-es2015-compiler'
      ],
      exclude: './node_modules/**'
    }),
    resolve(),
    VueLoader(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  output: [
    {
      name: 'VueA11yAnnouncer',
      file: 'example/vue-a11y-announcer.js',
      format: 'umd'
    }
  ]
}
