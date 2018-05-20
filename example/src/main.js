import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './router.js'
import VueAnnounce from '../vue-a11y-announcer'

Vue.use(VueHead)
Vue.use(VueAnnounce, {}, router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
