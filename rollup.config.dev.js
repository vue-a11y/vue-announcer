import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
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
    VueLoader({
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign',
      jsx: 'h'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  output: [
    {
      name: 'VueAnnouncer',
      file: 'example/vue-announcer.js',
      format: 'umd'
    }
  ]
}
