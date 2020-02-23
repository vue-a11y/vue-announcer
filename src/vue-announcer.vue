<template>
  <div
    id="announcer"
    class="announcer"
    :aria-live="announcer.politeness"
    v-text="announcer.content"
  />
</template>

<script>
export default {
  name: 'VueAnnouncer',
  data () {
    return {
      announcer: {
        content: '',
        politeness: 'polite'
      }
    }
  },
  created () {
    this.announcer.politeness = this.$announcer.options.politeness
    this.$announcer.data = this.announcer
  }
}
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
