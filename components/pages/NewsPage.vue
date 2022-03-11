<template>
  <div>
    <div class="bg-cetro-green py-20 mx-auto flex justify-center">
      <h2
        class="uppercase font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto"
      >
        {{ newsBlockTitle }}
      </h2>
    </div>
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <div
          v-for="article in newsBlockArticles"
          :key="article.id"
          class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        >
          <img :src="article.image" alt="" class="object-cover w-full h-64" />
          <div class="p-5 border border-t-0">
            <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span class="text-gray-600">{{ article.created_at }}</span>
            </p>
            <a
              aria-label="Category"
              class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-cetro-green"
              :href="article.slug"
              title="Visit the East"
              >{{ article.title }}</a
            >
            <p class="mb-2 text-gray-700">
              {{ article.text }}
            </p>
            <a
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 text-cetro-green hover:text-cetro-green"
              :href="article.slug"
              >{{ content.newsBlock.buttonTitle }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SectionNews from '~/components/SectionNews'
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'NewsPage',
  // components: { SectionNews },
  mixins: [uploadContent],
  computed: {
    newsBlockTitle() {
      return (this.content.newsBlock || {}).title
    },
    newsBlockArticles() {
      return (this.content.newsPage || {}).articles
    },
  },
}
</script>

<style scoped></style>
