<template lang="pug">
div.modal
  div.modal-background(ref="background" @click="clickBackground")
  div.modal-content
    div.content-wrapper
      h3.title.is-4 Create new post
      div.field
        label.label Title
        div.control
          input.input(type="text" placeholder="Title")
        label.label Link
        div.control
          input.input(type="text" placeholder="Link")
        label.label Message
        div.control
          textarea.textarea(placeholder="Message")
      div.text-right
        button.button.is-success(@click="$emit('post')") Publish
  button.modal-close.is-large(aria-label="close" @click="$emit('close')")
</template>

<script>
export default {
  name: 'ModalArticle',
  mounted() {
    document.querySelector('html').classList.add('overflow-hidden')
  },
  destroyed() {
    document.querySelector('html').classList.remove('overflow-hidden')
  },
  methods: {
    clickBackground(e) {
      if (e.target === this.$refs.background) {
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
}
.content-wrapper {
  margin-top: 64px;
  background: white;
  padding: 32px;
  border-radius: 4px;
}
.title {
  margin-bottom: 16px;
}
.control {
  margin-bottom: 8px;
}
</style>
