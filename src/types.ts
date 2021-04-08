import { Ref } from 'vue'

export type Politeness = 'off' | 'assertive' | 'polite'
export type RouteComplement = string
export type Message = string

export interface VueAnnouncerOptions {
  message?: Message
  politeness?: Politeness
  routeComplement?: RouteComplement
  router?: any
}

export interface VueAnnouncerData extends VueAnnouncerOptions, Ref {}

export interface VueAnnouncerMeta extends VueAnnouncerData {
  skip: boolean
}

export interface VueAnnouncerProvide extends UseAnnouncerReturn {
  data: VueAnnouncerData
}

export interface UseAnnouncerReturn {
  announce: (message: Message, politeness: Politeness) => void
  polite: (message: Message) => void
  assertive: (message: Message) => void
  setRouteComplement: (routeComplement: RouteComplement) => void
}