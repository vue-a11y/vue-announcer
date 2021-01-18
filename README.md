# Introduction

Imagine browsing pages (routes), receiving alerts and notifications, having a countdown timer on the page, a progress bar, a loading or a change of route in a SPA. Now imagine all this happening to people who have visual disabilities and who use screen readers.  

The [@vue-a11y/announcer@next](https://github.com/vue-a11y/vue-announcer/tree/next) (v3.*) for Vue 3 provides an easy way to really tell what’s going on in your application to people using screen readers.

> For vue-announcer version 2.* you can access [this link](https://github.com/vue-a11y/vue-announcer/tree/master)

## Setup

### Installation

```shell
npm install -S @vue-a11y/announcer@next
# or
yarn add -D @vue-a11y/announcer@next
```

### Basic usage

In your `main.(js|ts)`
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueAnnouncer from '@vue-a11y/announcer'
import '@vue-a11y/announcer/index.css'

createApp(App)
  .use(VueAnnouncer)
  .use(router)
  .mount('#app')
```

In your `App.vue`

```vue
<template>
  <VueAnnouncer />
  ...
</template>
```

## useAnnouncer

We provide the Vue composition `useAnnouncer` to announce to a person with a screen reader any information needed, anywhere in your app and in real time.

```js
// e.g.
const { assertive } = useAnnouncer()
// or 
const { polite } = useAnnouncer()
```

### Change routeComplement

If you need to set the `routeComplement` option dynamically without reloading the application, for example if you're dynamically loading translations, you can use this method to update it.

```js
// e.g.
const { setRouteComplement } = useAnnouncer()
setRouteComplement(translations.routeComplementKey)
```

## Announce route changes

For page changes (routes) to be announced automatically, you only need to pass the router object as a parameter at the time of installation.

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnnouncer from '@vue-a11y/announcer'

createApp(App)
  .use(VueAnnouncer, { router: true })
  .use(router)
  .mount('#app')
```

### Custom announcer (object meta)

You can customize the message by defining the announcer on the "meta" object for each specific route.

```js
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
Página de inicio se ha cargado.
```

Key                | Data Type  | data                      | default                             |
------------------ | ---------- | ------------------------- | ----------------------------------- |
`message`          | String     |                           | document.title                      |
`politeness`       | String     | polite, assertive, off    | polite                              |
`skip`             | Boolean    |                           | false                               |
`routeComplement`  | String     |                           | `has loaded` or set at installation |

#### Note
- The plug-in checks whether the message to be announced has been defined in the meta.announcer object, otherwise the document title to be loaded will be announced.
- The `@vue-a11y/announcer@next` uses the global after hooks `router.afterEach` to announce the route changes.

### Skip in specific route
Necessary for dynamic content pages that require asynchronous data to compose the page title.

The skip property on the `meta.announcer` object is used to `skip` the automatic announcement made on the `router.afterEach`, that way you can announce when the asynchronous data is available.

For example:

In you [`routes.js`](/demo/src/router/routes.ts)

```js
// ...
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
// ...
```

In you [`Post.vue`](/demo/src/pages/Post.vue)

```vue
<template>
  <template v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </template>
  <template v-if="error">
    <h2 class="msg-error">{{ error }}</h2>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAnnouncer } from '@vue-a11y/announcer'

export default defineComponent({
  name: 'Post',

  setup () {
    const post: any = ref(null)
    const error: any = ref(null)
    const { polite, assertive } = useAnnouncer()

    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        if (!res.ok) throw Error(res.statusText || "Error loading the post");
        return res.json();
      })
      .then(res => {
        post.value = { ...res };
        polite(`${post.value.title} page has loaded`);
      })
      .catch(e => {
        error.value = e.message;
        assertive(error.value);
      });

    return { post, error }
  }
})
</script>
```

# Browser Testing

Vue Announcer was tested and works as expected in the latest versions of:

- NVDA (Chrome) ✔️
- ChromeVox (Chrome extension) ✔️

## To test

- Android TalkBack
- JAWS
- iOS VoiceOver (Safari)

## Contributing
- From typos in documentation to coding new features;
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

Follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Thank you**
