import Vue from 'vue'
import VueHead from 'vue-head'
import VueAnnouncer from '../vue-announcer'
import App from './App.vue'
import router from './router.js'

import spell from './plugins/announcer/spell'

Vue.use(VueHead)
Vue.use(VueAnnouncer, { plugins: [spell] }, router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
