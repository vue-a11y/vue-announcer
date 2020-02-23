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
      errorMessage: null
    }
  },
  head () {
    return {
      title: {
        inner: 'About page'
      }
    }
  },
  methods: {
    notify () {
      this.errorMessage = 'It\'s error message'
      this.$announcer.set(this.errorMessage, 'assertive')
    }
  }
}
</script>
