import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import butternut from 'rollup-plugin-butternut'
import buble from 'rollup-plugin-buble'

export default {
  input: 'src/index.js',
  plugins: [
    VueLoader({
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign',
      jsx: 'h'
    }),
    butternut(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: [
    {
      file: 'dist/vue-announcer.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-announcer.es.js',
      format: 'es'
    },
    {
      file: 'dist/vue-announcer.amd.js',
      format: 'amd'
    },
    {
      name: 'VueAnnouncer',
      file: 'dist/vue-announcer.js',
      format: 'umd'
    }
  ]
}
