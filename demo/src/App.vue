<template>
  <div id="app">
    <!-- data-va is used for internal testing, it is not required -->
    <VueAnnouncer data-va="announcer" />
    <header>
      <router-link
        to="/"
        title="Vue.js logo"
        aria-label="Go to home page"
      >
        <img
          src="./assets/logo.png"
          alt="Vue.js logo"
        >
      </router-link>
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <nav>
        <ul>
          <li>
            <router-link
              to="login"
              title="Go to example login page"
              aria-label="Go to example login page"
            >
              Login
            </router-link>
          </li>
          <li>
            <router-link
              to="/posts/1"
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
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  color: #227952;
}
.msg-error {
  color: #d4351c;
  padding: 10px;
  font-weight: bold;
}
</style>
