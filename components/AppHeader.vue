<template lang="pug">
.header.columns
  .column.is-3.brand LogoBrand
  .column.header-nav
    input.input.input-search(placeholder="Search")
    .nav-list
      nuxt-link(to="/")
        .nav-item Trending
      nuxt-link(to="/collection")
        .nav-item Collections
    .avatar
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
    .avatar {
      padding: 8px;
    }
  }
}
</style>
