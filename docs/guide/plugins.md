---

announcer: Announcer plugins page has loaded

---

# Plugins

Plugin is an interesting resource for you to create different ways to use the announcer and adapt to a specific problem in your app.


```javascript
// e.g. plugins/announcer/myPlugin.js
export default {
  name: 'myPlugin',
  handler () {
    console.log('myPlugin')
  }
}
```

::: warning
The handler function takes `$announcer` as a context (this), so you can use `this.assertive('my text')`
:::

```javascript
// src/main.js
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'

import myPlugin from '@plugins/announcer/myPlugin'

Vue.use(VueAnnouncer, {
  plugins: [myPlugin]
})
```

```javascript
// e.g. component.vue
export default {
  name: 'myComponent'
  
  methods: {
    test () {
      this.$announcer.plugins.myPlugin()
    }
  }
}
```