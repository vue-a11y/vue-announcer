# Announce

The `$announcer` is available on the property injected into the Vue instance, so it is available everywhere in your application. With it it is possible to announce any necessary information and in real time to a person with a screen reader.

## Methods

### `$announcer.set(message, politiness)`

The `$announcer.set` method is directly responsible for making changes to the announcer.

| Argument          | Type      | Description                                          
| ----------------- | --------- | ----------------------------------------------------
| `message`         | String    | Text to be announced.                                
| `politiness`      | String    | Defines the priority of how updates will be handled. ([read more about live regions](/guide/accessibility.html))

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

### `$announcer.polite(message)`

The `$announcer.polite` is a wrapper of the "set" method that defines the politeness setting as `polite`

```javascript
// e.g.
this.$announcer.polite(this.message)
```

### `$announcer.assertive(message)`

The `$announcer.assertive` is a wrapper of the "set" method that defines the politeness setting as `assertive`

```javascript
// e.g.
this.$announcer.assertive(this.errorMessage)
```

[Learn more about the politeness settings and when to use.](/guide/accessibility.md)