import VueAnnouncer from './vue-announcer.vue'

const draf = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb))

export default function install (Vue, options = {}, router = null) {
  // merge options
  options = {
    politeness: 'polite',
    complementRoute: 'has loaded',
    ...options
  }

  // Register vue-announcer component
  Vue.component('VueAnnouncer', VueAnnouncer)

  Vue.prototype.$announcer = {
    data: null,
    options,

    set (message, politeness) {
      if (!this.data) return
      this.reset()
      if (politeness) {
        this.data.politeness = politeness
      }
      draf(() => {
        this.data.content = message
      })
    },

    reset () {
      this.data.content = ''
      this.data.politeness = this.options.politeness
    },

    setComplementRoute (complementRoute) {
      if (typeof complementRoute !== 'string') return
      options.complementRoute = complementRoute
    }
  }

  // If set the router, will be announced the change of route
  if (router) {
    router.afterEach(to => {
      const announcer = to.meta.announcer || {}

      // Skip: Used, for example, when an async title exists, in which case the announcement is made manually by the set method.
      // It is also possible to achieve the same result, using politeness: 'off', but it will be necessary
      // to set the "assertive" or "polite" when using the set method.
      // for example: this.$announcer.set('my async title', 'polite')
      if (announcer.skip) return

      // draf: Resolves the problem of getting the correct document.title when the meta announcer is not passed
      // Tested on Vuepress
      draf(() => {
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
