<template lang="pug">
.container
  article-feature
  article-time-line
  button-action(@click="redirectToNewStory")
</template>

<script>
import Vue from 'vue'
import ArticleFeature from '@/components/ArticleFeature'
import ArticleTimeLine from '@/components/ArticleTimeLine'
import ButtonAction from '@/components/ButtonAction'

export default {
  name: 'Home',
  components: { ArticleFeature, ArticleTimeLine, ButtonAction },
  methods: {
    redirectToNewStory() {
      this.$router.push('/newstory')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 16px;
}
</style>
