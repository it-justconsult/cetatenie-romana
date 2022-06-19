<template>
  <div>
    <div class="bg-cetro-green py-20 justify-center">
      <div
        class="
          lg:flex
          px-4
          py-4
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8 lg:py-4
          justify-start
        "
      >
        <div class="hover:text-cetro-green text-white">
          <nuxt-link
            to="/news"
            class="text-6xl hover:bg-white h-xl absolute top-48 lg:mt-12 mt-2"
          >
            <fa icon="fa-solid fa-chevron-left " class="h-15 pl-1" />
          </nuxt-link>
        </div>
        <div
          class="
            lg:flex
            px-4
            py-4
            sm:max-w-xl
            md:max-w-full
            lg:max-w-screen-xl
            md:px-24
            mx-auto
            lg:px-8 lg:py-4
            justify-between
          "
        >
          <div class="lg:flex">
            <h2
              class="
                uppercase
                font-sans
                text-4xl
                font-bold
                leading-none
                tracking-tight
                text-white
                sm:text-6xl
                md:mx-auto
                font-tungsten
                text-center
              "
            >
              {{ article ? article.title : '' }}
            </h2>
          </div>
        </div>
        <div class="lg:w-96"></div>
      </div>
    </div>

    <div
      class="
        lg:flex
        px-4
        py-10
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-10
        justify-between
      "
    >
      <div class="text-md w-full text-cetro-black lg:max-w-screen-lg lg:mr-10">
        <img
          v-if="article.image"
          loading="lazy"
          class="mx-auto mt-4 max-h-80 object-cover w-full"
          :src="imgBase + (article.image ? article.image.path : '')"
        />

        <p
          class="py-4 text-md font text-cetro-black tracking-wider"
          v-html="article.text"
        ></p>
        <div class="px-0 py-10 mx-auto w-full md:px-24 lg:px-8 lg:py-10">
          <div class="max-w-screen-xl sm:text-center sm:mx-auto">
            <h2
              class="
                font-sans
                text-xl
                font-bold
                tracking-tight
                text-cetro-black
                sm:text-4xl sm:leading-none
                uppercase
                font-tungsten
              "
            >
              Obține asistența în procesul de redobândire a cetățeniei române și
              perfectare a actelor românești
            </h2>
            <div
              class="
                lg:inline-flex
                items-center
                justify-center
                mt-5
                py-4
                px-4
                shadow-lg
                w-2xl
              "
            >
              <span
                class="
                  text-4xl
                  font-bold
                  text-cetro-green
                  pl-4
                  w-full
                  lg:w-auto
                "
              >
                {{ content.mainPage ? content.mainPage.ctaPhone : '' }}
              </span>
              <button
                class="
                  w-full
                  lg:w-auto lg:inline-flex
                  items-center
                  justify-center
                  mt-4
                  md:ml-14 md:mt-0
                  h-12
                  px-6
                  font-medium
                  tracking-wide
                  text-white
                  transition
                  duration-200
                  rounded
                  shadow-md
                  md:w-auto
                  bg-cetro-green
                  hover:bg-cetro-gray hover:text-cetro-green
                  focus:shadow-outline focus:outline-none
                  animate-pulse
                "
              >
                SUNĂ ACUM
              </button>
            </div>
          </div>
        </div>
        <nuxt-link
          :to="'/news'"
          class="
            inline-flex
            items-center
            justify-center
            w-full
            px-6
            py-4
            mt-4
            uppercase
            font-medium
            text-cetro-green
            transition
            duration-200
            rounded-lg
            shadow-md shadow-cetro-green
            bg-white
            hover:bg-cetro-green hover:text-white
            focus:shadow-outline focus:outline-none
            font-bold
          "
        >
          TOATE ARTICOLELE
        </nuxt-link>
      </div>

      <div class="text-base w-full lg:w-96 py-2 px-2">
        <div class="form shadow-xl px-4 py-4">
          <h2
            class="
              text-cetro-green text-xl
              font-bold
              uppercase
              text-center
              py-5
            "
          >
            Obține consultația gratuită a unui expert în redobândirea cetățeniei
            române
          </h2>
          <p
            class="text-center font-bold text-xs mb-5 max-w-md text-cetro-black"
          >
            Completează câmpurile de mai jos și noi te vom contacta!
          </p>
          <div class="input-container mt-2 mb-2">
            <span class="font-semibold text-cetro-text-gray"
              >Nume / Prenume:</span
            >
            <input
              autocomplete="off"
              class="
                bg-white
                placeholder:text-slate-400
                block
                w-full
                border border-cetro-green
                rounded-md
                py-4
                pl-9
                pr-3
                shadow-sm
                focus:outline-none
                focus:border-cetro-green
                focus:ring-cetro-green
                focus:ring-1
                sm:text-md
                font-bold
              "
              placeholder="Ex. Ciobanu Cristina"
              type="text"
              name="name"
              v-model="form.name"
            />
          </div>

          <div class="input-container">
            <span class="font-semibold text-cetro-text-gray"
              >Număr de telefon:</span
            >
            <input
              autocomplete="off"
              class="
                bg-white
                placeholder:text-slate-400
                block
                w-full
                border border-cetro-green
                rounded-md
                py-4
                pl-9
                pr-3
                shadow-sm
                focus:outline-none
                focus:border-cetro-green
                focus:ring-cetro-green
                focus:ring-1
                sm:text-md
                font-bold
              "
              placeholder="Ex. 068112233"
              type="text"
              name="phone"
              v-model="form.phone"
            />
          </div>

          <div class="input-container">
            <button
              class="
                inline-flex
                items-center
                justify-center
                w-full
                px-6
                py-4
                mt-4
                uppercase
                font-medium
                tracking-wide
                text-white
                transition
                duration-200
                rounded-lg
                shadow-md
                bg-cetro-green
                hover:bg-cetro-black
                focus:shadow-outline focus:outline-none
              "
              @click="sendForm"
            >
              Trimite
            </button>
          </div>
        </div>
        <h3
          class="
            text-cetro-green
            font-bold
            text-3xl
            uppercase
            mt-20
            font-tungsten
            text-center
            md:text-left
          "
        >
          Articole Recomandate
        </h3>
        <hr class="my-2 border-cetro-green border-2" />

        <div
          class="grid gap-8 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-full"
        >
          <nuxt-link
            :to="'/news/' + getUrl(item)"
            v-for="(item, id) in article.related"
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
              loading="lazy"
              :src="imgBase + (item.image ? item.image.path : '')"
              :alt="item.title"
              class="object-cover w-full h-64"
            />
            <div class="p-5 border border-t-0">
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
                {{ item.title }}
              </h3>
              <p class="mb-2 text-gray-700">
                {{ item.short }}
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
      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'ArticlePage',
  mixins: [uploadContent],
  data() {
    return {
      form: {},
      article: {},
    }
  },
  props: {
    slug: {
      type: String,
      default: '',
    },
  },

  methods: {
    sendForm: function () {},
    loadArticle: async function () {
      let response = await fetch(
        `${this.apiBase}api/collections/get/news?token=${this.apiToken}`,
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            filter: { title_slug: this.slug },
            populate: 1,
          }),
        }
      )

      let article = await response.json()
      return article
    },
    getUrl(article) {
      if (!article.url) {
        return article.title_slug
      }
      return article.url
    },
  },
  async mounted() {
    let articlesObject = await this.loadArticle()
    if (articlesObject.entries[0]) {
      this.article = articlesObject.entries[0]
    }
    console.log(this.article)
  },
}
</script>

<style scoped></style>
