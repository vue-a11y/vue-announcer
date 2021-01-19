import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnnouncer from '../../src'

createApp(App)
  .use(VueAnnouncer, { router })
  .use(router)
  .mount('#app')
