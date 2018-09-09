<template lang="pug">
div.article(:class="[size]")
  div.image(:style="articleCover")
  div.body
    h2.title The Loneliness of Superheroes
    div.content
      p.sub-title No one ever thought to look for me there. I was safe from parents, and siblings, and supervillains.
    div.actions
      div.author By David Haswell at 12-12-2012
      div
        i(class="far fa-bookmark icon")
        i(class="far fa-heart icon")
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    articleCover() {
      return {
        backgroundImage: 'url(https://cdn-images-1.medium.com/max/2000/1*ylv-L8kzeOKZ_N7F4mzIIg.jpeg)'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/variables";
@import "~@/assets/mixins";

.article {
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    @include box-shadow();
  }
  .body {
    padding: 8px 16px;
      flex-grow: 1;
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 8px;
    }
    .content {
      flex-grow: 1;
    }
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        margin-left: 6px;
        font-size: 18px;
      }
      .author {
        margin-top: 8px;
        font-size: 12px;
        color: $light-grey;
      }      
    }
  }
  .image {
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }
  &.big {
    .title {
      font-size: 28px;
    }
    .sub-title {
      font-size: 16px;
    }
    .image {
      height: 240px;
      margin-bottom: 8px;
    }
    .body {
      height: 240px;
    }
  }
  &.small {
    .title {
      font-size: 18px;
    }
    .sub-title {
      font-size: 14px;
    }
    display: flex;
    height: 150px;
    .image {
      height: 100%;
      flex-shrink: 0;
      flex-basis: 150px;
    }
  }
}
</style>
