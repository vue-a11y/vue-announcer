# Announce route changes

For page changes (routes) to be announced automatically, you only need to pass the router object as a parameter at the time of installation.

## Install

```javascript
import Vue from 'vue'
import router from './router'
import VueAnnouncer from '@vue-a11y/announcer'

Vue.use(VueAnnouncer, {}, router) 
```

## Options
Key                | Data Type  | default      |
------------------ | ---------- | ------------ |
`politeness`       | String     | `polite`     |
`complementRoute`  | String     | `has loaded` |


Example:
```javascript
Vue.use(VueAnnouncer, {
  complementRoute: 'ha cargado' // e.g. in spanish
}, router) 
```

## Methods
**Note: These methods are registered on the `$announcer` property injected into the Vue instance**

#### `$announcer.setComplementRoute(complementRoute)`

If you need to set the `complementRoute` option dynamically without reloading the application, for example if you're
dynamically loading translations, you can use this method to update it.

```javascript
export default {
  onTranslationsUpdated (translations) {
    /* 'Foi carregada' e.g. in portuguese */
    this.$announcer.setComplementRoute(translations.complementRouteKey)
  }
}
```

## Custom announcer (object meta)

You can customize the message by defining the announcer on the "meta" object for each specific route.  

```javascript
{
  name: 'home',
  path: '/',
  component: Home,
  meta: {
    announcer: {
      message: 'Página de inicio se'
    }
  }
}
```

When the page loads, the screen reader user will hear:
```shell
Página de inicio se ha cargado
```

In the "meta" object you can also modify the route complement and also the politeness settings.

### Announcer in object meta

Key                | Data Type  | data                      | default                             |
------------------ | ---------- | ------------------------- | ----------------------------------- |
`message`          | String     |                           | document.title                      |
`politeness`       | String     | polite, assertive, off    | polite                              |
`skip`             | Boolean    |                           | false                               |
`complementRoute`  | String     |                           | `has loaded` or set at installation |


::: tip Note
- The plug-in checks whether the message to be announced has been defined in the meta.announcer object, otherwise the document title to be loaded will be announced.
- The @vue-a11y/announcer uses the global after hooks `router.afterEach` to announce the route changes.
:::

## Skip in specific route

Necessary for dynamic content pages that require asynchronous data to compose the page title.

The `skip` property on the `meta.announcer` object is used to skip the automatic announcement made on the `router.afterEach`, that way you can announce when the asynchronous data is available. 

For example:

In you `routes.js` 
```javascript
{
  name: 'post',
  path: '/posts/:id',
  component: Post,
  meta: {
    announcer: {
      skip: true
    }
  }
}
```
See this example:   
[Example link](https://github.com/vue-a11y/vue-announcer/blob/master/example/src/router.js)

---

In you `Post.vue`
```vue
<template>
  <div>
    <template v-show="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </template>
    <template v-show="error">
      <h2 class="msg-error">
        {{ error }}
      </h2>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      post: {},
      error: null
    }
  },
  created () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      .then(res => {
        if (!res.ok) throw Error(res.statusText || 'Error loading the post')
        return res.json()
      })
      .then(res => {
        this.post = { ...res }
        this.$announcer.set(`${this.post.title} has loaded`)
      })
      .catch(e => {
        this.error = e.message
        this.$announcer.set(this.error, 'assertive')
      })
  }
}
</script>
```

See this example:   
[Example link](https://github.com/vue-a11y/vue-announcer/blob/master/example/src/pages/Post.vue)