import { inject } from 'vue'
import { UseAnnouncerReturn, VueAnnouncerProvide } from '../types'
import { ProvideKey } from '../util';

export default function useAnnouncer (): UseAnnouncerReturn {
  const { data, ...rest } = <VueAnnouncerProvide>inject(ProvideKey)
  return rest
}