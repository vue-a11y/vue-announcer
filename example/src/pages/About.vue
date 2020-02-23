<template>
  <div>
    <h2>About Page</h2>
    <!-- data-va is used for internal testing, it is not required -->
    <button
      type="button"
      data-va="toasted"
      @click="notify"
    >
      show error
    </button>
    <div class="msg-error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: '',
      errorMessage: null
    }
  },
  head () {
    return {
      title: {
        inner: this.title
      }
    }
  },
  created () {
    // get data post in server
    setTimeout(() => {
      this.title = 'Title of my awesome post'
      this.$emit('updateHead')
      this.$announcer.set(`${this.title} has loaded`, 'polite') // It's also possible to use the default complementRoute (this.$announcer.options.complementRoute)
    }, 2000)
  },
  methods: {
    notify () {
      this.errorMessage = 'It\'s error message'
      this.$announcer.set(this.errorMessage, 'assertive')
    }
  }
}
</script>

<style scoped>
.msg-error {
  color: #d4351c;
  padding: 10px;
  font-weight: bold;
}
</style>
