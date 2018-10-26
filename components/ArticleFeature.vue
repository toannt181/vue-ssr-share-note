<template lang="pug">
div.columns
  div.column.is-two-fifths.column-left
    article-feature-item(size="big")
  div.column.is-three-fifths.column-right
    article-feature-item(size="small" class="item")
    article-feature-item(size="small" class="item")
    article-feature-item(size="small" class="item")
</template>

<script>
import ArticleFeatureItem from './ArticleFeatureItem'

export default {
  name: 'ArticleFeature',
  components: { ArticleFeatureItem },
}
</script>

<style lang="scss" scoped>
.column {
  &-left {
    padding-right: 16px;
  }
  &-right {
    padding-left: 48px;
    .item {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
