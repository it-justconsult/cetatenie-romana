<template>
  <div>
    <div class='bg-cetro-green py-20 mx-auto flex justify-center'>
      <h2
        class='uppercase font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'
      >{{ questionsPageTitle }}
      </h2>
    </div>
    <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div class='grid gap-8 row-gap-5 lg:grid-cols-2'>
        <div
          v-for='category in questionCategories' :key='category.id'
          class='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-lg'>
          <div
            class='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-cetro-green group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-cetro-green group-hover:scale-y-100'></div>
          <div
            class='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-cetro-green group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-cetro-green group-hover:scale-y-100'></div>
          <div class='relative h-full p-5 bg-white rounded-sm flex-grow'>
            <div class='flex flex-col mb-2 lg:justify-between lg:items-center lg:flex-row'>
              <div
                class='flex lg:order-2  items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0'>
                <svg class='w-8 h-8 text-deep-purple-accent-400' stroke='currentColor' viewBox='0 0 52 52'>
                  <polygon
                    fill='none' points='29 13 14 29 25 29 23 39 38 23 27 23' stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='3'></polygon>
                </svg>
              </div>
              <h6 class='font-semibold leading-5'>{{ category.title }}</h6>
            </div>
            <p class='mb-2 text-sm text-gray-900'>{{ category.description }}</p>
            <a
              @click.prevent='goTo(category.id)'
              href='#' aria-label=''
              class='inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>Learn
              more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'QuestionsPage',
  mixins: [uploadContent],
  computed: {
    questionsPageTitle () {
      return (this.content.questionsPage || {}).title
    },
    questionCategories () {
      return (this.content.questionsPage || {}).questionCategories
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/questions/' + user)
    },
  }
}
</script>

<style scoped>
</style>
