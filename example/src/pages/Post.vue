<template>
  <div>    
    <template v-show="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </template>
    <template v-show="error">
      <h2 class="msg-error">{{ error }}</h2>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      post: {},
      error: null
    }
  },
  created () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
      .then(res => {
        if (!res.ok) throw Error(res.statusText || 'Error loading the post')
        return res.json()
      })
      .then(res => {
        this.post = { ...res }
        this.$announcer.set(`${this.post.title} has loaded`)
      })
      .catch(e => {
        this.error = e.message
        this.$announcer.set(this.error, 'assertive')
      })
  }
}
</script>
