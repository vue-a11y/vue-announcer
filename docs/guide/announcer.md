# Announce

The `$announcer.set` method is available on the property injected into the Vue instance, so it is available everywhere in your application.
With it it is possible to announce any necessary information and in real time to a person with a screen reader.

### Method ($announcer.set)

```vue
<template>
  <div>
    <button
      type="button"
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
  name: '...',
  data () {
    return {
      errorMessage: null
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
```

[Learn more about the politeness settings and when to use.](/guide/accessibility.md)