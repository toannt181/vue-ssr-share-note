<template lang="pug">
div.page
  app-header
  article-feature
  article-time-line
  button-action(@click="toggleModal")
  modal-article(v-if="isShowModal" @close="toggleModal")
</template>

<script>
import Vue from 'vue'
import AppHeader from '@/components/AppHeader'
import ArticleFeature from '@/components/ArticleFeature'
import ArticleTimeLine from '@/components/ArticleTimeLine'
import ButtonAction from '@/components/ButtonAction'
import ModalArticle from '@/components/ModalArticle'

export default {
  name: 'Home',
  components: { AppHeader, ArticleFeature, ArticleTimeLine, ButtonAction, ModalArticle },
  data() {
    return { isShowModal: false }
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 16px;
}
</style>
