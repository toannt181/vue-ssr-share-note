<template lang="pug">
div(:class="['user-avatar', className, size, shape]" @click="$emit('click')" :style="styleBg")
  span(v-if="!urlAvatar" class="user-avatar-text") {{ name[0] }}
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    color: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    urlAvatar: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    shape: {
      type: String,
      default: 'circle',
    },
  },
  computed: {
    styleBg() {
      return {
        backgroundColor: this.color,
        backgroundImage: `url(${this.urlAvatar})`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.user-avatar {
  width: 48px;
  height: 48px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &.circle {
    border-radius: 50%;
  }

  &-text {
    font-size: 20px;
  }

  &.big {
    width: 90px;
    height: 90px;
  }
}
</style>
