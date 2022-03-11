<template>
  <div>
    <div class='bg-cetro-green py-20 mx-auto flex justify-center'>
      <h2
        class='uppercase font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'
      >
        {{ newsBlockTitle }}
      </h2>
    </div>
    <div
      class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
    >
      <div
        class='grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'
      >
        <div
          class='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'
        >
          <img :src='article.image' alt='' class='object-cover w-full h-64' />
          <div class='p-5 border border-t-0'>
            <p class='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <span class='text-gray-600'>{{ article.created_at }}</span>
            </p>
            <a
              :href='article.slug'
              aria-label='Category'
              class='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-cetro-green'
              title='Visit the East'
            >{{ article.title }}</a
            >
            <p class='mb-2 text-gray-700'>
              {{ article.text }}
            </p>
            <a
              :href='article.slug'
              aria-label=''
              class='inline-flex items-center font-semibold transition-colors duration-200 text-cetro-green hover:text-cetro-green'
            >{{ /*content.newsBlock.buttonTitle*/ }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'ArticlePage',
  mixins: [uploadContent],
  props: {
    articleId: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      article: {}
    }
  },
  computed: {
    newsBlockArticles () {
      return (this.content.newsPage || {}).articles
    },
    newsBlockTitle () {
      return (this.content.newsBlock || {}).title
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      console.log('**************************************************')
      const arr = ((this.content || {}).newsPage || {}).articles
      const filteredArr = arr && arr.filter((el) => el.id === this.articleId)
      console.log(filteredArr)
      const selectedArticle = (filteredArr || [])[0]
      // this.activateFirstQuestion(questions)
      console.log(selectedArticle)
      this.article = selectedArticle
      return selectedArticle
    }
  }
}
</script>

<style scoped></style>
