<template>
  <div
    id="announcer"
    class="announcer"
    aria-atomic="true"
    :aria-live="data.politeness"
    v-html="data.message"
  />
</template>

<script lang="ts">
import useAnnouncer from "../composable/useAnnouncer"
import { inject, defineComponent, ref } from 'vue'
import { VueAnnouncerMeta, VueAnnouncerProvide } from '../types'
import { draf, isClient, ProvideKey } from '../util'

export default defineComponent({
  name: 'VueAnnouncer',

  setup () {
    const { data } = <VueAnnouncerProvide>inject(ProvideKey)
    const { announce } = useAnnouncer()

    if (data.value.router) {
      if ('afterEach' in data.value.router) {
        data.value.router.afterEach((to: any) => {
          const announcer = ref<VueAnnouncerMeta>({...to.meta.announcer} || {})
          if (announcer.value.skip || !isClient) return

          setTimeout(() => {
            draf(() => {
              const msg = (announcer.value.message || document.title).trim()
              const complement = (announcer.value.routeComplement || data.value.routeComplement).trim()
              const politeness = announcer.value.politeness || null
              announce(`${msg} ${complement}`, politeness)
            })
          }, 500)
        })
      } elseif ('on' in data.value.router) {
        data.value.router.on('navigate', () => {
          if (!isClient) return

          setTimeout(() => {
            draf(() => {
              const msg = document.title.trim()
              const complement = data.value.routeComplement.trim()
              announce(`${msg} ${complement}`)
            })
          }, 500)
        })
      }
    }

    return { data }
  }
})
</script>

<style scoped>
.announcer {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
