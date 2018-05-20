<template>
  <div
    id="announcer"
    class="announcer"
    aria-live="polite"
    aria-atomic="true"
    v-text="content">
  </div>
</template>

<script>
export default {
  name: 'VueA11yAnnouncer',
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.$announcer.data = this.$data
  }
}
</script>

<style scoped>
.announcer {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
