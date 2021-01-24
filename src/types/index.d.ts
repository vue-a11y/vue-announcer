import { Ref } from 'vue'

export declare type Politeness = 'off' | 'assertive' | 'polite'
export declare type RouteComplement = string
export declare type Message = string

export declare interface VueAnnouncerOptions {
  message?: Message
  politeness?: Politeness
  routeComplement?: RouteComplement
  router?: any
}

export declare interface VueAnnouncerData extends VueAnnouncerOptions, Ref {}

export declare interface VueAnnouncerMeta extends VueAnnouncerData {
  skip: boolean
}

export declare interface VueAnnouncerProvide extends UseAnnouncerReturn {
  data: VueAnnouncerData
}

export declare interface UseAnnouncerReturn {
  announce: (message: Message, politeness: Politeness) => void
  polite: (message: Message) => void
  assertive: (message: Message) => void
  setRouteComplement: (routeComplement: RouteComplement) => void
}

export { }