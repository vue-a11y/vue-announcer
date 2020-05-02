import VueAnnouncer from '../../dist/vue-announcer.esm'

export default ({ Vue, router, isServer }) => {
  if (!isServer) {
    Vue.use(VueAnnouncer, {}, router)
  }
}
