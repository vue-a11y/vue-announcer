<template>
  <div>
    <h2>About Page</h2>
    <!-- data-va is used for internal testing, it is not required -->
    <button
      type="button"
      data-va="handler-error-button"
      @click="notify"
    >
      show error
    </button>
    <div
      class="msg-error"
      data-va="msg-error"
    >
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
  methods: {
    notify () {
      this.errorMessage = 'It\'s error message'
      this.$announcer.assertive(this.errorMessage)
    }
  },
  head () {
    return {
      title: {
        inner: 'About page'
      }
    }
  }
}
</script>
