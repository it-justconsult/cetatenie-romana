<template>
    <div>
      <ArticlePage :articleId="articleId"></ArticlePage>
    </div>
</template>
<script>
import ArticlePage from '~/components/pages/ArticlePage'
export default {
  components: { ArticlePage },
  asyncData({ params }) {
    const articleId = parseInt(params.id)
    return { articleId }
  }
}
</script>
