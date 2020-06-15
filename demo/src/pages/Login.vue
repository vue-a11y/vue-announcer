<template>
  <div class="login-container">
    <h2>Login Page</h2>

    <form
      id="form-login"
      name="form-login"
    >
      <div>
        <label for="email">
          <span style="display: block;text-align:left;">Email</span>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
          >
        </label>
      </div>
      <div>
        <label for="password">
          <span style="display: block;text-align:left;">Password</span>
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
          >
        </label>
        <button
          type="button"
          @click="$announcer.plugins.spell(password)"
        >
          Spell the password
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    email: null,
    password: null,
    spelling: false
  }),

  watch: {
    password (val) {
      if (this.spelling) this.$announcer.assertive(val.substr(-1, 1))
    }
  }
}
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
}

#form-login > div {
  margin-bottom: 20px;
}

#form-login label > span {
  display: block;
  text-align:left;
  margin-bottom: 6px;
}

#form-login input {
  width: 100%;
  padding: 10px;
}

#form-login button {
  padding: 4px;
  margin-top: 10px;
}
</style>
