import { App, ref } from 'vue'
import { defaultOptions, draf, ProvideKey } from './util'
import { Politeness, VueAnnouncerData, VueAnnouncerOptions } from './types'

import VueAnnouncer from './components/Announcer.vue'

export default function install (app: App, options: VueAnnouncerOptions = {}) {
  options = { ...defaultOptions, ...options }
  app.component('VueAnnouncer', VueAnnouncer)
  
  const data = ref<VueAnnouncerData|null>(null)
  const generateDefaultData = () => ({ message: '', ...options })
  const currentRouteComplement = ref<string>(options.routeComplement!)

  data.value = generateDefaultData()

  function set (message: string, politeness: Politeness|null) {
    data.value = generateDefaultData()
    if (politeness) {
      data.value.politeness = politeness
    }
    draf(() => {
      data.value.routeComplement = currentRouteComplement.value || data.value.routeComplement
      data.value.message = message.trim()
    })
  }

  function polite (message: string) {
    return set(message, 'polite')
  }

  function assertive (message: string) {
    return set(message, 'assertive')
  }

  function setRouteComplement (routeComplement: string): void {
    if (typeof routeComplement !== 'string') return
    currentRouteComplement.value = routeComplement
  }

  app.provide(ProvideKey, { data, set, polite, assertive, setRouteComplement })
  app.config.globalProperties.$announcer = { set, polite, assertive, setRouteComplement }
}
