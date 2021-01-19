import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnnouncer from '../../dist/announcer.es'
import '../../dist/index.css'

createApp(App)
  .use(VueAnnouncer, { router: true })
  .use(router)
  .mount('#app')
