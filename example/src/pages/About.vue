<template>
  <div>
    <h2>About Page</h2>
    <button type="button" @click="notify">
      trigger notification
    </button>
  </div>
</template>

<script>
  export default {
    name: 'About',
    head: {
      title: {
        inner: 'About page'
      }
    },
    methods: {
      notify () {
        let message = `Hi, it's a toasted notification`
        this.$toasted.success(message)
        this.$announcer.set(message)
      }
    }
  }
</script>

<style>

</style>