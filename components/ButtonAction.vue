<template lang="pug">
button(class="button is-primary" title="Create new post" @click="$emit('click')")
  i(class="fas fa-pen-alt")
</template>
<script>
export default {
  name: 'ButtonAction'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/mixins";

.button {
  position: fixed;
  @include box-shadow();
  right: 16px;
  bottom: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
</style>
