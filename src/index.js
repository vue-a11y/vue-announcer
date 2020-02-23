import VueForceNextTick from 'vue-force-next-tick'
import { OPTIONS } from './constants'
import VueAnnouncer from './vue-announcer.vue'

export default function install (Vue, options = {}, router = null) {
  options = { ...OPTIONS, ...options }

  Vue.use(VueForceNextTick)
  Vue.component('VueAnnouncer', VueAnnouncer)
  Vue.prototype.$announcer = {
    options,

    set (message, politeness) {
      if (this.data) {
        this.reset()
        if (politeness) {
          this.data.politeness = politeness
        }
        Vue.$forceNextTick(() => {
          this.data.content = message
        })
      }
    },

    reset () {
      this.data = Object.assign(this.data, {
        content: '',
        politeness: this.options.politeness
      })
    },

    setComplementRoute (complementRoute) {
      if (typeof complementRoute !== 'string') return
      options.complementRoute = complementRoute
    },

    data: null
  }

  // If set the router, will be announced the change of route
  if (router) {
    router.afterEach(to => {
      const msg = to.meta.announcer.message || document.title.trim()
      const complement = to.meta.announcer.complementRoute || options.complementRoute
      const politeness = to.meta.announcer.politeness || null
      Vue.prototype.$announcer.set(`${msg} ${complement}`, politeness)
    })
  }
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
