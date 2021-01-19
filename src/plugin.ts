import { App, ref } from 'vue'
import { defaultOptions, ProvideKey } from './util'
import { VueAnnouncerData, VueAnnouncerOptions } from './types'

import VueAnnouncer from './components/Announcer.vue'

export default function install (app: App, options: VueAnnouncerOptions = {}) {
  options = { ...defaultOptions, ...options }
  app.component('VueAnnouncer', VueAnnouncer)
  
  const data = ref<VueAnnouncerData|null>(null)
  const generateDefaultData = () => ({ message: '', ...options })

  data.value = generateDefaultData()

  app.provide(ProvideKey, {
    data,
    reset: generateDefaultData
  })
}
