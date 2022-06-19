<template>
  <div class="bg-cetro-green">
    <div
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2
          class="
            max-w-lg
            mb-6
            font-sans
            text-4xl
            font-bold
            leading-none
            text-cetro-white
            sm:text-6xl
            mx-auto
            font-tungsten
          "
        >
          {{ newsBlockTitle }}
        </h2>
      </div>
      <div
        class="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <nuxt-link
          :to="'/news/' + getUrl(article)"
          v-for="article in newsBlockLastNews"
          :key="article.id"
          class="
            bg-white
            rounded
            shadow-sm
            duration-300
            transform
            hover:-translate-y-4
            cursor-pointer
          "
        >
          <img
            :src="imgBase + article.image.path"
            alt=""
            class="object-cover w-full h-64"
          />
          <div class="p-5 border-t-0">
            <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span class="text-gray-600">
                <fa icon="fa-solid fa-calendar-days" />
                {{ toDate(article._created) }}
              </span>
            </p>
            <h3
              aria-label="Category"
              class="
                inline-block
                mb-3
                text-xl
                font-bold
                leading-5
                transition-colors
                duration-200
                hover:text-cetro-green
                font-montserrat
              "
              href="/"
              :title="article.title"
            >
              {{ article.title }}
            </h3>
            <p class="mb-2 text-gray-700" v-html="article.short"></p>
            <span
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                transition-colors
                duration-200
                text-cetro-green
                hover:text-cetro-green
              "
              ><span class="mr-1">Vezi detalii</span>
              <fa icon="fa-solid fa-chevron-right"
            /></span>
          </div>
        </nuxt-link>
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
    newsBlockTitle() {
      return (this.content.mainPage || {}).newsTitle
    },
    newsBlockLastNews() {
      return (this.content || {}).news
    },
  },
  methods: {
    toDate(timestamp) {
      var date = new Date(timestamp * 1000)
      return this.formatDate(date)
    },
    padTo2Digits(num) {
      return num.toString().padStart(2, '0')
    },
    formatDate(date) {
      return [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/')
    },
    getUrl(article) {
      if (!article.url) {
        return article.title_slug
      }
      return article.url
    },
  },
}
</script>
<style>
</style>
