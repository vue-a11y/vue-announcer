import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnnouncer from '../../src'

createApp(App)
  .use(VueAnnouncer, { router: true })
  .use(router)
  .mount('#app')
