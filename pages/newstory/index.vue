<template lang="pug">
div.container
  h3.title.is-4 Create new story
  div.field
    div.control
      input.input.is-large.input-form.title(type="text" placeholder="Title")
    div.control
      input.input.is-large.input-form(type="text" placeholder="Link")
    div.control
      textarea.is-large.textarea.input-form(placeholder="Tell your story...")
</template>

<script>
import Vue from 'vue'

export default {
  name: 'NewStory',
}
</script>

<style lang="scss" scoped>
.input-form {
  border: none;
  box-shadow: none;
}
.title {
  font-weight: bold;
}
</style>
