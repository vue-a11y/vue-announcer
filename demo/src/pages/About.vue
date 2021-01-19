<template>
  <h2>About Page</h2>
  <button type="button" data-va="handler-error-button" @click="notify">show error</button>
  <div class="msg-error" data-va="msg-error">{{ errorMessage }}</div>
</template>

<script lang="ts">
import { useAnnouncer } from '../../../dist/announcer.es'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'About',

  setup () {
    const errorMessage: any = ref(null)
    const { assertive } = useAnnouncer()

    function notify () {
      errorMessage.value = "It's error message"
      assertive(errorMessage.value)
    }

    onMounted(() => {
      document.title = 'About page'
    })

    return {
      notify,
      errorMessage
    }
  }
})
</script>