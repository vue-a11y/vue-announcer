import { OPTIONS } from './constants'
import VueAnnouncer from './vue-announcer.vue'

const draf = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb))

export default function install (Vue, options = {}, router = null) {
  options = { ...OPTIONS, ...options }

  Vue.component('VueAnnouncer', VueAnnouncer)
  Vue.prototype.$announcer = {
    options,

    set (message, politeness) {
      if (this.data) {
        this.reset()
        if (politeness) {
          this.data.politeness = politeness
        }
        draf(() => {
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
      draf(() => { // Resolves the problem of getting the correct title when the meta announcer is not passed
        const announcer = to.meta.announcer || {}
        const msg = announcer.message || document.title.trim()
        const complement = announcer.complementRoute || options.complementRoute
        const politeness = announcer.politeness || null
        Vue.prototype.$announcer.set(`${msg} ${complement}`, politeness)
      })
    })
  }
}

// Auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
