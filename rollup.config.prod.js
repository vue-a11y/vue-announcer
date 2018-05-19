import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import butternut from 'rollup-plugin-butternut'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      include: [
        'node_modules/vue-template-es2015-compiler'
      ],
      exclude: 'node_modules/**'
    }),
    butternut(),
    resolve(),
    VueLoader(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: [
    {
      file: 'dist/vue-a11y-announcer.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-a11y-announcer.es.js',
      format: 'es'
    },
    {
      file: 'dist/vue-a11y-announcer.amd.js',
      format: 'amd'
    },
    {
      name: 'VueA11yAnnouncer',
      file: 'dist/vue-a11y-announcer.js',
      format: 'umd'
    }
  ]
}
