<template>
  <div>
    <ArticlePage :slug="slug"></ArticlePage>
  </div>
</template>
<script>
import ArticlePage from '~/components/pages/ArticlePage'
export default {
  components: { ArticlePage },
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
 

}
</script>
