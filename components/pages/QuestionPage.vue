<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Quick, brown fox jumps over a lazy dog
        </h2>
        <p class="text-base text-gray-700 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
      </div>
      <div class="space-y-4">
        <div  v-for='question in getQuestions()' :key='question.id' class="border-b">
          <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
            <p class="text-lg font-medium">{{question.title}}</p>
            <!-- Add "transform rotate-180" classes on svg, if is open" -->
            <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200">
              <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
            </svg>
          </button>
          <!-- Show content if is open
          <div class="p-4 pt-0"><p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'QuestionPage',
  props: {
    categoryId: {
      type: Number,
      default: 0
    },
  },
  mixins: [uploadContent],
  computed: {

  },
  mounted () {
    // console.log(this.categoryId)
  },
  methods: {
    getQuestions () {
      // console.log('**************************************************')
      const  arr = ((this.content || {}).questionsPage || {}).questionsByCategories
      const filteredArr = arr && arr.filter((el) => el.id === this.categoryId)
      console.log(filteredArr)
      console.log('--------------------------------------------------')
      // return (this.content.questionsPage.questionsByCategories || {}).filter((el) => console.log(el))
      return []
    }
  }
}
</script>

<style scoped>
</style>
