# Introduction

Imagine browsing pages (routes), receiving alerts and notifications, having a countdown timer on the page, a progress bar, a loading or a change of route in a SPA. Now imagine all this happening to people who have visual disabilities and who use screen readers.  

The [vue-announcer](https://github.com/vue-a11y/vue-announcer) provides an easy way to really tell what’s going on in your application to people using screen readers.

Inspired by others in the community like:  
- [Example of how creating an accessible single-page application](https://haltersweb.github.io/Accessibility/spa.html)
- [Ember A11y community](https://github.com/ember-a11y/a11y-announcer)

### Links

- [Documentation](https://announcer.vue-a11y.com/)
- [Demos](https://announcer.vue-a11y.com/demos/)

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

# Installation

## Package

#### NPM
```shell
npm install -S vue-announcer
```

#### Yarn
```shell
yarn add vue-announcer
```

## Basic usage

```javascript
import Vue from 'vue'
import VueAnnouncer from 'vue-announcer'

Vue.use(VueAnnouncer)
```

In your `App.vue`
```vue
<template>
  <div>
    <vue-announcer />
    <!-- header code -->
    <!-- router-view -->
    <!-- footer code -->
  </div>
</template>
```

[see more in the documentation](https://announcer.vue-a11y.com/)

## Check live demo
https://vue-announcer.surge.sh/

## Run the tests
```shell
git clone https://github.com/vue-a11y/vue-announcer.git vue-announcer

# Run plugin
cd vue-announcer
npm install
npm run dev

# Run example
cd examples
npm install
npm run dev
cd ..

# Run Cypress testing
npm run test
```

Or run Cypress on interactive mode
```shell
npm run test:open
```

It is a simple webpack template already installed and configured.
After the commands just access the http://localhost:8080/


## Contributing
- From typos in documentation to coding new features;
- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found;
- Fork repository, make changes and send a pull request;

Follow us on Twitter [@vue_a11y](https://twitter.com/vue_a11y)

**Thank you**
