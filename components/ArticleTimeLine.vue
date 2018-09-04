<template lang="pug">
div.container
  article-feature-item(size="small" class="item")
  article-feature-item(size="small" class="item")
  article-feature-item(size="small" class="item")
</template>

<script>
import ArticleFeatureItem from './ArticleFeatureItem'

export default {
  name: 'ArticleTimeLine',
  components: { ArticleFeatureItem },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 64px;
  .item {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
