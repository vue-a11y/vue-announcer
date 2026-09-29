import { inject, ref } from 'vue'
import { UseAnnouncerReturn, VueAnnouncerProvide } from '../types'
import { defaultOptions, ProvideKey } from '../util'

export default function useAnnouncer (): UseAnnouncerReturn {
  const context = inject<VueAnnouncerProvide | undefined>(ProvideKey, undefined)

  if (!context) {
    const noop = () => {}
    return {
      announce: noop,
      set: noop,
      reset: noop,
      polite: noop,
      assertive: noop,
      setRouteComplement: noop,
      data: ref({ content: '', ...defaultOptions })
    }
  }

  const { data, set, reset, ...rest } = context
  return {
    data,
    set: set || context.announce,
    reset: reset || (() => {}),
    ...rest
  }
}