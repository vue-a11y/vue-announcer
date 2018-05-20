<template>
  <div id="app">
    <vue-announcer />
    <router-link to="/" title="Vue.js logo">
      <img src="./assets/logo.png" alt="Vue.js logo">
    </router-link>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/about" title="Go to about page">About</router-link>
      </li>
      <li>
        <router-link to="/contact" title="Go to contact page">Contact</router-link>
      </li>
    </ul>

    <div class="main" role="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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

a {
  color: #42b983;
}
</style>
