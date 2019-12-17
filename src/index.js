import VueAnnouncer from './vue-announcer.vue'
import { OPTIONS } from './constants'

export default function install (Vue, options = {}, router = null) {
  options = {...OPTIONS, ...options}

  Vue.component('VueAnnouncer', VueAnnouncer)
  Vue.prototype.$announcer = {
    set (message) {
      if (this.data) {
        this.data.content = ''
        Vue.nextTick()
          .then(() => {
            this.data.content = message
          })
      }
    },

    setComplementRoute (complementRoute) {
      if (typeof (complementRoute) !== 'string') {
        return
      }

      options.complementRoute = complementRoute
    },
    data: null
  }

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
