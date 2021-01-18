import { inject, ref } from 'vue'
import { ProvideKey } from '../index'
import { UseAnnouncerReturn, VueAnnouncerProvide, Politeness } from '../types'
import { draf } from '../util';

const currentRouteComplement = ref<string|null>(null)

export default function useAnnouncer (): UseAnnouncerReturn {
  const { data, reset } = <VueAnnouncerProvide>inject(ProvideKey)

  function announce (message: string, politeness: Politeness|null) {
    data.value = reset()
    if (politeness) {
      data.value.politeness = politeness
    }
    draf(() => {
      data.value.routeComplement = currentRouteComplement.value || data.value.routeComplement
      data.value.message = message.trim()
    })
  }

  function polite (message: string) {
    return announce(message, 'polite')
  }

  function assertive (message: string) {
    return announce(message, 'assertive')
  }

  function setRouteComplement (routeComplement: string): void {
    if (typeof routeComplement !== 'string') return
    currentRouteComplement.value = routeComplement
  }

  return {
    polite,
    announce,
    assertive,
    setRouteComplement
  }
}