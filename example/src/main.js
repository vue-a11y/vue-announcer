import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import VueHead from 'vue-head'
import Toasted from 'vue-toasted'
import VueAnnounce from '../vue-a11y-announcer'

Vue.use(VueHead)
Vue.use(Toasted, {
  duration: 6000 // Long duration 
})
Vue.use(VueAnnounce, {}, router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
