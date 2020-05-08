# Vuepress

Add the vue-announcer to your `enhanceApp.js`

```javascript
import VueAnnouncer from "@vue-a11y/announcer";

export default ({ Vue, router, isServer }) => {
  if (!isServer) {
    Vue.use(VueAnnouncer, {}, router);
  }
};
```

Ok, now just insert the component `<VueAnnouncer />` in your main layout.

```vue
<template>
  <div>
    <ClientOnly>
      <VueAnnouncer /> <!-- You can place it anywhere in your application -->
    </ClientOnly>
    ...
  </div>
</template>
```

<br />

---

### Example using theme-default

<br />

<iframe
    src="https://codesandbox.io/embed/vue-announcer-vuepress-bp60e?fontsize=14&hidenavigation=1&module=%2F.vuepress%2FenhanceApp.js&theme=dark&view=editor"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="example vue-announcer to vuepress projects"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<a href="https://codesandbox.io/s/vue-announcer-vuepress-bp60e" target="_blank" rel="noopener">Open sandbox example</a>