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
        {{ newsBlockTitle }}
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
        class="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <nuxt-link
          :to="'/news/'+ article.slug"
          v-for="(article, id) in newsBlockArticles"
          :key="id"
          class="
            bg-white
            rounded
            shadow-sm
            duration-300
            transform
            hover:-translate-y-4
            cursor-pointer
            group
          "
        >
          <img :src="article.image" alt="" class="object-cover w-full h-64" />
          <div class="p-5 border border-t-0">
            <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span class="text-gray-600">
                <fa icon="fa-solid fa-calendar-days" />
                {{ article.created_at }}
              </span>
            </p>
            <h3
              aria-label="Category"
              class="
                inline-block
                mb-3
                text-2xl
                font-bold
                leading-5
                transition-colors
                duration-300
                text-cetro-black
                group-hover:text-cetro-green
              "
            >
              {{ article.title }}
            </h3>
            <p class="mb-2 text-gray-700">
              {{ article.short }}
            </p>
            <p
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
              
              >{{ content.newsBlock.buttonTitle }}</p
            >
          </div>
        </nuxt-link>
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
      return (this.content.news || {}).title
    },
    newsBlockArticles() {
      return (this.content.news || {}).items
    },
  },
}
</script>

<style scoped></style>
