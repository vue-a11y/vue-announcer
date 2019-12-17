# vue-announcer

Imagine browsing pages (routes), receiving alerts and notifications, having a countdown timer on the page, a progress bar or a loading, among others. Now imagine all this happening to people who have visual disabilities and who use screen readers.

The idea of this plugin is to tell the screen reader what is happening and primarily if you use single-page application.  
Inspired by others in the community like:  
https://haltersweb.github.io/Accessibility/spa.html *(Example of how creating an accessible single-page application)*  
https://github.com/ember-a11y/a11y-announcer *(Ember A11y community)*  


## Install package
#### NPM
```shell
npm install -S vue-announcer
```

#### Yarn
```shell
yarn add vue-announcer
```
---

## How to use
In your `main.js`
```javascript
import Vue from 'vue'
import VueAnnouncer from 'vue-announcer'

Vue.use(VueAnnouncer)
```

In your `App.vue`
Example using `vue-toasted`
```vue
<template>
  <div id="app">
    <vue-announcer />

    <h2>App page</h2>
    
    <button type="button" data-va="toasted" @click="notify">
      trigger notification
    </button>
  </div>
</template>
<script>
export default {
  name: 'app'
  methods: {
    notify () {
      let message = `Hi, it's a toasted notification`
      this.$toasted.success(message)
      this.$announcer.set(message) // Sets the message that will be read by the screen reader automatically.
    }
  }
}
</script>
```
See this example:   
[Example link](https://github.com/vue-a11y/vue-announcer/blob/master/example/src/pages/About.vue)

## Announce route changes
For page changes (routes) to be announced automatically, you only need to pass the router object as a parameter at the time of installation.

```javascript
import Vue from 'vue'
import router from './router'
import VueAnnouncer from 'vue-announcer'

Vue.use(VueAnnouncer, {}, router) 
```

### Options
Key                | Data Type  | default      |
------------------ | ---------- | ------------ |
`complementRoute`  | String     | `has loaded` |


Example:
```javascript
Vue.use(VueAnnouncer, {
  complementRoute: 'ha cargado' // e.g. in spanish
}, router) 
```

### Methods
**Note: These methods are registered on the `$announcer` property injected into the Vue instance**

#### `$announcer.setComplementRoute(complementRoute)`

If you need to set the `complementRoute` option dynamically without reloading the application, for example if you're
dynamically loading translations, you can use this method to update it.

```javascript
export default {
  onTranslationsUpdated (translations) {
    this.$announcer.setComplementRoute(translations.complementRouteKey /* = 'ha cargado' */)
  }
}
```

### Custom message to each page (optional)
You can set a property on the meta object, which will serve as information to get the message that will be announced to the screen reader on each page. e.g.:
```javascript
{
  name: 'home',
  path: '/',
  component: Home,
  meta: {
    announcer: 'Página de inicio'
  }
}
```

When the page loads, the screen reader user will hear:
```shell
Página de inicio ha cargado
```



**Note:**
- The plugin checks whether it was defined in the meta object, otherwise, without any problems, the title of the page being loaded will be used.
- The vue-announcer uses the global after hooks `router.afterEach` to announce the route changes.

## Check live demo
https://vue-announcer.surge.sh/

## Run the tests
```shell
git clone https://github.com/vue-a11y/vue-announcer.git vue-announcer

// Run plugin
cd vue-announcer
npm install
npm run dev

// Run example
cd examples
npm install
npm run dev
cd ..

// Run Cypress testing
npm run test
```

Or run Cypress on interactive mode
```shell
npm run test:open
```

It is a simple webpack template already installed and configured.
After the commands just access the http://localhost:8080/


## Contributing
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

If you want a faster communication, find me on [@ktquez](https://twitter.com/ktquez)
And follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Thank you**
