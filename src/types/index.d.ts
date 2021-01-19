import { Ref } from 'vue'

export declare type Politeness = 'off' | 'assertive' | 'polite'
export declare type RouteComplement = string
export declare type HasRouter = boolean
export declare type Message = string

export declare interface VueAnnouncerOptions {
  message?: Message
  politeness?: Politeness
  routeComplement?: RouteComplement
  router?: HasRouter
}

export declare interface VueAnnouncerData extends VueAnnouncerOptions, Ref {}

export declare interface VueAnnouncerMeta extends VueAnnouncerData {
  skip: boolean
}

export declare interface VueAnnouncerProvide {
  data: VueAnnouncerData
  reset: () => VueAnnouncerData
}

export declare interface UseAnnouncerReturn {
  polite: (message: Message) => void
  assertive: (message: Message) => void
  setRouteComplement: (routeComplement: RouteComplement) => void
  announce: (message: Message, politeness: Politeness) => void
}