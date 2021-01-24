<template>
  <header>
    <router-link to="/" aria-label="Go to home page">
      <img src="./assets/vue-a11y-logo.png" alt="Vue.js logo">
    </router-link>
    <button @click="setError">
      Error
    </button>
    <h1>
      <a
        href="https://github.com/vue-a11y/vue-announcer/tree/next"
        title="Vue Announcer for Vue 3"
        rel="noopener noreferer"
      >
        @vue-a11y/announcer
      </a>
    </h1>
    <h2>Browse links with the screen reader enabled</h2>
    <nav>
      <ul>
        <li>
          <router-link
            to="/post/1"
            title="Go to post one page"
            aria-label="Go to example post page"
          >
            My post
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            title="Go to about page"
            aria-label="Go to about page"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            title="Go to contact page"
            aria-label="Go to contact page"
          >
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <main class="main">
    <hr>
    <router-view/>
  </main>
  
  <VueAnnouncer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  methods: {
    setError () {
      this.$announcer.assertive('deu erro aqui')
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

img {
  width: 150px;
}

a {
  color: #227952;
}
.msg-error {
  color: #d4351c;
  padding: 10px;
  font-weight: bold;
}
</style>