<template>
  <template v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </template>
  <template v-if="error">
    <h2 class="msg-error">{{ error }}</h2>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAnnouncer } from '../../../src'

export default defineComponent({
  name: 'Post',

  setup () {
    const post: any = ref(null)
    const error: any = ref(null)
    const { polite, assertive } = useAnnouncer()

    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        if (!res.ok) throw Error(res.statusText || "Error loading the post");
        return res.json();
      })
      .then(res => {
        post.value = { ...res };
        polite(`${post.value.title} page has loaded`);
      })
      .catch(e => {
        error.value = e.message;
        assertive(error.value);
      });

    return { post, error }
  }
})
</script>
