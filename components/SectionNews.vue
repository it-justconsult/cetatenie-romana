<template>
  <div class='bg-cetro-green'>
    <div class='px-4 py-16   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div class='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2
          class='uppercase max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-cetro-white sm:text-4xl md:mx-auto'>
          {{ newsBlockTitle }}
        </h2>
      </div>
      <div class='grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div
          v-for='article in newsBlockLastNews' :key='article.id'
          class='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img
            :src='article.image'
            alt='' class='object-cover w-full h-64' />
          <div class='p-5 border border-t-0'>
            <p class='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <span class='text-gray-600'>{{ article.created_at }}</span>
            </p>
            <a
              aria-label='Category'
              class='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-cetro-green'
              href='/'
              title='Visit the East'>{{ article.title }}</a>
            <p class='mb-2 text-gray-700'>
              {{ article.text }}
            </p>
            <a
              aria-label=''
              class='inline-flex items-center font-semibold transition-colors duration-200 text-cetro-green hover:text-cetro-green'
              href='/'>{{ newsBlockButtonTitle }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'SectionNews',
  mixins: [hasContentProps],
  computed: {
    newsBlockTitle () {
      return (this.content.newsBlock || {}).title
    },
    newsBlockLastNews () {
      return (this.content.newsBlock || {}).lastNews
    },
    newsBlockButtonTitle () {
      return (this.content.newsBlock || {}).buttonTitle
    }
  }
}
</script>
<style>
</style>
