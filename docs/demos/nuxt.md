# Nuxt.js

The first step is to create your plugin in Nuxt `plugins/vue-announcer.js`

```javascript
import Vue from "vue";
import VueAnnouncer from "@vue-a11y/announcer";

export default ({ app }) => {
  Vue.use(VueAnnouncer, {}, app.router);
};
```

After creating the plugin you need to add it in the nuxt settings, in the `nuxt.config.js` file, you can [learn more about it here](https://nuxtjs.org/api/configuration-plugins#__layout).

```javascript
export default {
  // ...
  plugins: [
    { src: "~/plugins/vue-announcer.js", mode: "client" }
  ],
}
```

Now just add `<VueAnnouncer />` in your default layout.

In your `layouts/default.vue`
```vue
<template>
  <div>
    <VueAnnouncer /> <!-- You can place it anywhere in your application -->
    ...
  </div>
</template>
```

<br />

---

### Demo
<br />

<iframe
  src="https://codesandbox.io/embed/vue-announcer-nuxt-project-breih?fontsize=14&hidenavigation=1&module=%2Fplugins%2Fvue-announcer.js&theme=dark&view=editor"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="vue-announcer-nuxt-project"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

   <a href="https://codesandbox.io/s/vue-announcer-nuxt-project-breih" target="_blank" rel="noopener">Open sandbox example</a>