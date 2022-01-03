<template>
  <div>
    <div class="bg-cetro-green py-20 mx-auto flex justify-center">
      <h2
        class="
          uppercase
          font-sans
          text-3xl
          font-bold
          leading-none
          tracking-tight
          text-white
          sm:text-4xl
          md:mx-auto
        "
      >
        {{ content.newsBlock.title }}
      </h2>
    </div>
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
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="
            uppercase
            max-w-lg
            mb-6
            font-sans
            text-3xl
            font-bold
            leading-none
            tracking-tight
            text-gray-900
            sm:text-4xl
            md:mx-auto
          "
        >
          {{ content.newsBlock.title }}
        </h2>
      </div>
      <div
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <div
          v-for="article in content.newsPage.articles"
          :key="article.id"
          class="
            overflow-hidden
            transition-shadow
            duration-300
            bg-white
            rounded
          "
        >
          <a href="/" aria-label="Article"
            ><img
              :src="article.image"
              class="object-cover w-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              {{ article.created_at }}
            </p>
            <a
              href="/"
              aria-label="Article"
              class="
                inline-block
                mb-3
                text-black
                transition-colors
                duration-200
                hover:text-deep-purple-accent-700
              "
              ><p class="text-2xl font-bold leading-5">
                {{ article.title }}
              </p></a
            >
            <p class="mb-4 text-gray-700">
              {{ article.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SectionNews from '~/components/SectionNews'
import * as data from '~/content.json'

export default {
  name: 'NewsPage',
  // components: { SectionNews },
  data() {
    return {
      content: {},
    }
  },
  mounted() {
    this.content = this.getContent()
  },
  created() {
    this.content = this.getContent()
  },
  methods: {
    getContent() {
      return data.data
    },
  },
}
</script>

<style scoped>
</style>
