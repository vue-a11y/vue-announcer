import VueA11yAnnouncer from './vue-a11y-announcer.vue'
import { OPTIONS } from './constants'
import { set } from './utils'

export default function install (Vue, options = {}, router = null) {
  options = {...options, ...OPTIONS}

  Vue.component('VueAnnouncer', VueA11yAnnouncer)
  Vue.prototype.$announcer = { set, data: null }

  // If set the router, will be announced the change of route
  if (router) {
    router.afterEach(to => {
      Vue.prototype.$announcer.set(`${to.meta.announcer || document.title.trim()} ${options.complementRoute}`)
    })
  }
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
