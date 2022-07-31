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
        {{ content.newsPage ? content.newsPage.title : '' }}
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
        v-if="newsObject"
      >
        <nuxt-link
          :to="'/news/' + getUrl(article)"
          v-for="(article, id) in newsObject.entries"
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
          <img
            :src="imgBase + article.image.path"
            :alt="article.title"
            class="object-cover w-full h-64"
            loading="lazy"
          />
          <div class="p-5 border border-t-0">
            <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span class="text-gray-600">
                <fa icon="fa-solid fa-calendar-days" />
                {{ article.date ? article.date : toDate(article._created) }}
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
            >
              Vezi detalii
            </p>
          </div>
        </nuxt-link>
      </div>
      <div class="mt-10 flex justify-center cursor-pointer">
        <div
          class="
            py-2
            px-4
            hover:shadow-xl
            drop-shadow-lg
            shadow-lg
            text-center
            font-bold
          "
          v-if="page >= 3 && totalPages > 3"
          @click="changePage(1)"
        >
          1
        </div>
        <div class="py-2 ml-2 mr-2" v-if="page >= 3 && totalPages > 3">...</div>

        <div
          v-for="item in pages"
          v-bind:key="item"
          class="
            py-2
            px-4
            hover:shadow-xl
            drop-shadow-lg
            shadow-lg
            text-center
            font-bold
          "
          :class="{ 'text-cetro-green': item === page }"
          @click="changePage(item)"
        >
          {{ item }}
        </div>

        <div class="py-2 ml-2 mr-2" v-if="page < totalPages - 2">...</div>
        <div
          class="
            py-2
            px-4
            hover:shadow-xl
            drop-shadow-lg
            shadow-lg
            text-center
            font-bold
          "
          v-if="totalPages > 4 && page < totalPages - 2"
          :class="{ 'text-cetro-green': totalPages === page }"
          @click="changePage(totalPages)"
        >
          {{ totalPages }}
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
  mixins: [uploadContent],
  data: function () {
    return {
      newsObject: null,
      limit: 5,
      page: 1,
      total: 0,
      pages: [1],
      totalPages: 0,
    }
  },
  head: {
    title: 'Cetățenie Română'
  },
  methods: {
    changePage: async function (page) {
      this.page = page
      this.newsObject = await this.loadNews()
      this.calculatePagination()
    },
    /**
     * Load news list
     */
    async loadNews() {
      //Set limit and skip values
      let skip = 0
      let limit = this.limit
      if (this.page > 1) {
        skip = (this.page - 1) * limit
      }

      let res = await fetch(
        `${this.apiBase}api/collections/get/news?filter[public]=true&token=${this.apiToken}`,
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            limit: parseInt(limit),
            skip: skip,
            sort: { _created: -1 },
            populate: 1,
          }),
        }
      )
      const news = await res.json()

      if (news.total) {
        this.total = news.total
      }

      return news
    },
    calculatePagination() {
      let start = 1
      this.totalPages = Math.ceil(this.total / this.limit)

      let end = 1

      if (this.page > 1) {
        start = this.page - 1
      }

      if (this.page === this.totalPages - 2) {
        end = this.totalPages
      } else {
        if (this.page + 2 < this.totalPages) {
          end = start + 2
        } else {
          end = this.totalPages
        }
      }

      if (this.page === this.totalPages && this.totalPages > 2) {
        start = this.totalPages - 2
        end = this.totalPages
      }

      this.pages = [...Array(end - start + 1).keys()].map((x) => x + start)
    },
  },
  async mounted() {
    this.newsObject = await this.loadNews()
    this.calculatePagination()
  },
}
</script>

<style scoped></style>
