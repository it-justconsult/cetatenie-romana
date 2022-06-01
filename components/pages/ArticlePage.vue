<template>
  <div>
    <div class="bg-cetro-green py-20 mx-auto flex justify-center">
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
        "
      >
        {{ article ? article.title : '' }}
      </h2>
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
          class="mx-auto mt-4 max-h-80 object-cover w-full"
          :src="article.image"
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
                022 84-84-22
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
            :to="'/news/' + item.slug"
            v-for="(item, id) in article.featured"
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
            <img :src="item.image" alt="" class="object-cover w-full h-64" />
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
                {{ content.newsBlock.buttonTitle }}
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
  props: {
    slug: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    article: function () {
      if (!this.content.news) return []
      let items = this.content.news.items.filter((obj) => {
        return obj.slug === this.slug
      })
      return items[0] ? items[0] : {}
    },
  },
  data: function () {
    return {
      form: {},
    }
  },
  methods: {
    sendForm: function () {},
  },
}
</script>

<style scoped></style>
