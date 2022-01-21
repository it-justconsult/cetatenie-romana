<template>
  <div>
    <QuestionPage :categoryId='categoryId'></QuestionPage>
  </div>
</template>

<script>
import QuestionPage from '~/components/pages/QuestionPage'

export default {
  components: { QuestionPage },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ params }) {
    const categoryId = parseInt(params.id)
    return { categoryId }
  }
}
</script>

<style scoped>

</style>
