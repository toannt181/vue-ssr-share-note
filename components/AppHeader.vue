<template lang="pug">
div.header.columns
  div.column.is-3.brand.container LogoBrand
  div.column.header-nav
    input.input.input-search(placeholder="Search")
    div.nav-list
      div.nav-item News
      div.nav-item Public
      div.nav-item Private
    div
      user-avatar(:name="name" :color="color")
</template>

<script>
import UserAvatar from './UserAvatar'

export default {
  name: 'AppHeader',
  components: { UserAvatar },
  data() {
    return { name: 'TrilBrad', color: '#31AEFD' }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";

.header {
  .brand {
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid $super-light-grey;
  }
  &-nav {
    padding: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input-search {
      border: none;
      box-shadow: none;
      margin-right: auto;
    }
    .nav-list {
      display: flex;
      justify-content: space-between;
      .nav-item {
        font-weight: bold;
        margin-right: 60px;
        padding: 8px;
      }
    }
  }
}
</style>
