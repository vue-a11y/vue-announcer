# Installation

## Package

#### NPM
```shell
npm install -S @vue-a11y/announcer
```

#### Yarn
```shell
yarn add @vue-a11y/announcer
```

## Basic usage

```javascript
import Vue from 'vue'
import VueAnnouncer from '@vue-a11y/announcer'

Vue.use(VueAnnouncer)
```

In your `App.vue`
```vue
<template>
  <div>
    <VueAnnouncer /> <!-- You can place it anywhere in your application -->
    ...
  </div>
</template>
```

