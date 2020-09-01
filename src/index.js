import VueAnnouncer from './vue-announcer.vue'
import { draf, defaultOptions } from './utils'

const announcerPlugins = {}

export default function install (Vue, options = {}, router = null) {
  if (install.installed) return
  install.installed = true

  // merge options
  options = {
    ...defaultOptions,
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
      draf(() => {
        this.data.politeness = politeness || this.data.politeness
        this.data.content = message
      })
    },

    polite (message) {
      return this.set(message, 'polite')
    },

    assertive (message) {
      return this.set(message, 'assertive')
    },

    reset () {
      this.data.content = ''
      this.data.politeness = this.options.politeness
    },

    plugins: announcerPlugins,

    setComplementRoute (complementRoute) {
      if (typeof complementRoute !== 'string') return
      options.complementRoute = complementRoute
    }
  }

  // Register plugins
  if (options.plugins.length) {
    options.plugins.forEach(({ name, handler }) => {
      announcerPlugins[name] = handler.bind(Vue.prototype.$announcer)
    })
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
      // Tested on Vuepress and Nuxt
      if (Vue.prototype.$isServer) return
      setTimeout(() => {
        draf(() => {
          const msg = announcer.message || document.title.trim()
          const complement = announcer.complementRoute || options.complementRoute
          const politeness = announcer.politeness || null
          Vue.prototype.$announcer.set(`${msg} ${complement}`, politeness)
        })
      }, 500)
    })
  }
}

// Auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
