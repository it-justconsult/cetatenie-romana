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
            to="/acte"
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
              {{ document ? document.title : '' }}
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
        py-4
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-4
        justify-between
      "
    >
      <div class="text-lg w-full text-cetro-black lg:max-w-screen-lg lg:mr-10">
        <div class="py-4 text-lg" v-html="document.description"></div>
        <img
          v-if="document.image"
          class="w-full object-contain mx-auto mt-4"
          :src="imgBase + document.image.path"
        />
        <div class="px-0 py-10 mx-auto w-full md:px-24 lg:px-8 lg:py-10">
          <div class="max-w-screen-xl sm:text-center sm:mx-auto">
            <h2
              class="
                font-sans
                text-xl
                font-bold
                text-cetro-black
                sm:text-4xl
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
                text-center
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
                  font-tungsten
                  text-2xl
                "
              >
                SUNĂ ACUM
              </button>
            </div>
          </div>
        </div>

        <!-- Questions -->

        <div
          class="border rounded shadow-sm mb-2"
          v-for="(item, id) in document.questions"
          v-bind:key="id"
        >
          <button
            @click="changeTab(id)"
            type="button"
            :aria-label="item.value.title"
            :title="item.title"
            class="
              flex
              items-center
              justify-between
              w-full
              p-4
              focus:outline-none
            "
          >
            <p class="text-xl font-medium text-cetro-green font-montserrat">
              <fa
                icon="fa-solid fa-circle-chevron-right"
                v-if="selectedElement === id"
              />
              {{ item.value.title }}
            </p>
            <div
              class="
                flex
                items-center
                justify-center
                w-8
                h-8
                border
                rounded-full
              "
            >
              <!-- Add "transform rotate-180" classes on svg, if is open" -->
              <svg
                viewBox="0 0 24 24"
                class="w-3 text-gray-600 transition-transform duration-500"
                v-bind:class="
                  selectedElement === id ? 'transform rotate-180' : ''
                "
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  points="2,7 12,17 22,7"
                  stroke-linejoin="round"
                ></polyline>
              </svg>
            </div>
          </button>

          <transition
            enter-active-class="duration-600 delay-100 ease-out   "
            enter-class="-translate-x-full opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-active-class="duration-600 ease-in "
            leave-class="translate-x-0 opacity-100"
            leave-to-class="-translate-x-full opacity-0 "
          >
            <div
              class="p-4 pt-0 transition duration-300 ease-in-out"
              v-show="selectedElement === id"
            >
              <p class="text-gray-700">
                {{ item.value.description }}
              </p>
            </div>
          </transition>
        </div>
      </div>

      <div class="text-base w-full lg:w-96 py-2 px-2">
        <div class="form shadow-xl px-4 py-4 sticky top-1">
          <h2
            class="
              text-cetro-green text-xl
              font-bold
              uppercase
              text-center
              py-5
              text-2xl
              font-tungsten
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
                font-bold
              "
              @click="sendForm"
            >
              Trimite
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  computed: {
    documents: function () {
      if (!this.content.acte) return {}
      return this.content.acte
    },
    document: function () {
      if (!this.content.acte) return {}
      let items = this.content.acte.filter((obj) => {
        return obj.title_slug === this.slug || obj.url === this.slug
      })
      return items[0] ? items[0] : {}
    },
  },
  mixins: [uploadContent],
  data: function () {
    return {
      form: {},
      selectedElement: 0,
    }
  },
  methods: {
    sendForm: function () {},
    changeTab: function (element) {
      this.selectedElement = element
    },
  },
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
}
</script>