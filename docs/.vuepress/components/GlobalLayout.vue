<template>
  <div id="global-layout">
    <VueAnnouncer />
    <component :is="layout"/>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) return this.$frontmatter.layout
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>
