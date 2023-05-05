<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Title"
          >
        </div>
      </div>

      <div class="field">
        <label class="label">Input</label>
        <div class="control">
          <textarea v-model="post.content" class="textarea" placeholder="..." />
        </div>
      </div>

      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input
            v-model="post.creator"
            class="input"
            type="text"
            placeholder="Name"
          >
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['post', 'submitForm'],
}
</script>

<style></style>
