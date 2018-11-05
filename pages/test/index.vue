<template lang="pug">
div.container
  h1.title entry point [{{ data.length }}]
  div.flex
    span http://localhost:3333/api/
    input.input(placeholder="seaching url" v-model="url")
    button.button.is-primary(@click = "search") Find
  table.table.is-fullwidth(v-if="data[0]")
    thead
      tr
        th(v-for="key in Object.keys(data[0])" :key="key") {{ key }}
    tbody
      tr(v-for="item in data" :key="item.id")
        td(v-for="(value, index) in Object.values(item)" :key="index") {{ value }}
</template>

<script>
import Vue from 'vue'
import * as UserApi from '@/api/UserApi'

export default {
  name: 'Test',
  data: () => ({
    data: [],
    url: 'users',
  }),
  async asyncData() {
    // return { data: [] }
  },
  methods: {
    async search() {
      const data = await UserApi.getUrl({ url: this.url })
      this.data = data
    },
  },
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
