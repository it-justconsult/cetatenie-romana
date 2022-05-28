<template>
  <div>
    <QuestionPage :slug='slug'></QuestionPage>
  </div>
</template>

<script>
import QuestionPage from '~/components/pages/QuestionPage'

export default {
  components: { QuestionPage },
  async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
  }
}
</script>

<style scoped>

</style>
