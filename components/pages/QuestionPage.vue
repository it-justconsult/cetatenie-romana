<template>
  <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
    <div class='max-w-xl sm:mx-auto lg:max-w-2xl'>
      <div class='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2
          class='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          Quick, brown fox jumps over a lazy dog
        </h2>
        <p class='text-base text-gray-700 md:text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.</p>
      </div>
      <div class='space-y-4'>
        <div v-for='question in getQuestions' :key='question.id' class='border-b'>
          <button
            aria-label='Open item' class='flex items-center justify-between w-full p-4 focus:outline-none'
            title='Open item'
            type='button'
            @click='openQuestion(question.id)'
          >
            <p class='text-lg font-medium'>{{ question.title }}</p>
            <!-- Add "transform rotate-180" classes on svg, if is open" -->
            <svg
              :class="isActiveQuestion(question.id)? 'transform rotate-180': ''"
              class='w-3 text-gray-600 transition-transform duration-900'
              viewBox='0 0 24 24'
            >
              <polyline
                fill='none' points='2,7 12,17 22,7' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'
                stroke-miterlimit='10' stroke-width='2'></polyline>
            </svg>
          </button>
          <div v-if='question.id === activeQuestion' class='p-4 pt-0'><p class='text-gray-700'>{{question.answer}}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'QuestionPage',
  mixins: [uploadContent],
  props: {
    categoryId: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      activeQuestion: 0,
      questions: []
    }
  },
  computed: {
    getQuestions () {
      const arr = ((this.content || {}).questionsPage || {}).questionsByCategories
      const filteredArr = arr && arr.filter((el) => el.id === this.categoryId)
      const questions = ((filteredArr || [])[0] || {}).questions
      this.activateFirstQuestion(questions)
      return questions
    }
  },
  mounted () {
    // console.log(this.categoryId)
  },
  updated () {
    // console.log(this.categoryId)
  },
  methods: {
    isActiveQuestion (currentQuestionId) {
      return this.activeQuestion === currentQuestionId
    },
    openQuestion (questionId) {
      if (this.activeQuestion !== questionId) {
        this.activeQuestion = questionId
      } else {
        this.activeQuestion = null
      }
    },
    activateFirstQuestion (questions) {
      this.activeQuestion = ((questions || [])[0] || {}).id
    }
  }
}
</script>

<style scoped>
</style>
