# [@vue-a11y/announcer](https://github.com/vue-a11y/vue-announcer/tree/next)

---
🔥 HEADS UP! You are in the Vue 3 compatible branch, [check the branch for Vue 2 support](https://github.com/vue-a11y/vue-announcer).

---

## Introduction

Imagine browsing pages (routes), receiving alerts and notifications, having a countdown timer on the page, a progress bar, a loading or a change of route in a SPA. Now imagine all this happening to people who have visual disabilities and who use screen readers.  

The [@vue-a11y/announcer@next](https://github.com/vue-a11y/vue-announcer/tree/next) (v3.*) for Vue 3 provides an easy way to really tell what’s going on in your application to people using screen readers.

## Links
- [Demo](https://vue-announcer.surge.sh/)
- [ARIA live regions](#aria-live-regions)

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
import '@vue-a11y/announcer/dist/index.css'

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

### Style
You can import the style via the `@vue-a11y/announcer/dist/index.css` path as in the previous one.

However, if you are using a CSS tool like TailwindCSS or Bootstrap, you don't need to import the @vue-a11y/announcer style, as you just add the `sr-only` class to the component.

```vue
<template>
  <VueAnnouncer class="sr-only" />
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

## Change routeComplement

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
import '@vue-a11y/announcer/dist/index.css'

createApp(App)
  .use(VueAnnouncer, { router })
  .use(router)
  .mount('#app')
```
### options
Key                | Data Type     | data                   | default      |
------------------ | ------------- | ---------------------- | ------------ |
`router`           | Router        |                        | false        |
`message`          | String        |                        | ''           |
`politeness`       | String        | polite, assertive, off | `polite`     |
`complementRoute`  | String        |                        | `has loaded` |

## Custom announcer (object meta)

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

### Note
- The plug-in checks whether the message to be announced has been defined in the meta.announcer object, otherwise the document title to be loaded will be announced.
- The `@vue-a11y/announcer@next` uses the global after hooks `router.afterEach` to announce the route changes.

## Skip in specific route
Necessary for dynamic content pages that require asynchronous data to compose the page title.

The skip property on the `meta.announcer` object is used to `skip` the automatic announcement made on the `router.afterEach`, that way you can announce when the asynchronous data is available.

For example:

In you [`routes.js`](/demo/src/router/routes.ts)

```js
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

## ARIA live regions

"Using JavaScript, it is possible to dynamically change parts of a page without requiring the entire page to reload — for instance, to update a list of search results on the fly, or to display a discreet alert or notification which does not require user interaction. While these changes are usually visually apparent to users who can see the page, they may not be obvious to users of assistive technologies. ARIA live regions fill this gap and **provide a way to programmatically expose dynamic content changes in a way that can be announced by assistive technologies.**"

--- [ARIA live regions - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

## Politeness settings

You can use the options `polite`, `assertive` and `off`, if no configuration is defined, the default is `off`.

### polite
It is used in most situations that present new information to users.  
The notification will take place at the next available point, without interruptions.

---
NOTE: `polite` is default

---

### assertive
It is used in situations where the notification is important enough to communicate it immediately, for example, error messages or alerts.


```javascript
const { assertive } = useAnnouncer()
assertive('My notification error')
```

### off
Is the default and prevent assistive technology from keeping up with changes.


### Referencies

- [ARIA live regions - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [Using aria-live - Bitsofcode](https://bitsofco.de/using-aria-live/)

## Browser Testing

Vue Announcer was tested and works as expected in the latest versions of:

- NVDA (Chrome) ✔️
- ChromeVox (Chrome extension) ✔️

### To test

- Android TalkBack
- JAWS
- iOS VoiceOver (Safari)

## Contributing
- From typos in documentation to coding new features;
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

Follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Thank you**
