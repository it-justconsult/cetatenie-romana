<template>
  <div>
    <div class="bg-cetro-green py-20  justify-center">
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
            to="/"
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
              {{ step ? step.title : '' }} <br />
              "{{ step ? step.text : '' }}"
            </h2>
          </div>
        </div>
        <div class="lg:w-96"></div>
      </div>
    </div>
    <!-- 
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
          text-center
          font-tungsten
        "
      >
        {{ step ? step.title : '' }} <br />
        "{{ step ? step.text : '' }}"
      </h2>
    </div> -->

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
        lg:px-8 lg:py-2
        justify-between
      "
    >
      <div class="w-full text-cetro-black lg:max-w-screen-lg lg:mr-10">
        <div class="py-4 text-lg" v-html="step.description"></div>
        <img
          class="w-full object-contain mx-auto mt-4 mb-4"
          :src="step.image"
        />

        <!-- Questions -->

        <div
          class="border rounded shadow-sm mb-1"
          v-for="(item, id) in step.steps"
          v-bind:key="id"
        >
          <button
            @click="changeTab(id)"
            type="button"
            :aria-label="item.title"
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
            <p class="text-xl font-medium text-cetro-green">
              <fa
                icon="fa-solid fa-circle-chevron-right"
                v-if="selectedElement === id"
              />
              {{ item.title }}
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
                {{ item.description }}
              </p>
            </div>
          </transition>
        </div>
        <!-- End Questions -->

        <div class="px-0 py-10 mx-auto w-full md:px-24 lg:px-8 lg:py-10">
          <div class="max-w-screen-xl sm:text-center sm:mx-auto">
            <h2
              class="
                font-sans
                text-xl
                font-bold
                tracking-tight
                text-cetro-black
                sm:text-2xl sm:leading-none
                uppercase
                text-center
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
              <span class="text-4xl font-bold text-cetro-green pl-4 lg:w-auto">
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

        <div class="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
          <nuxt-link
            :to="'/acte/' + document.slug"
            v-for="(document, id) in documents"
            v-bind:key="id"
            class="
              flex flex-col
              justify-between
              overflow-hidden
              text-left
              transition-shadow
              duration-200
              bg-white
              rounded
              shadow-xl
              group
              hover:shadow-2xl
              cursor-pointer
            "
          >
            <div class="p-5">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  mb-4
                  rounded-full
                  bg-indigo-50
                  text-xl text-cetro-green
                "
              >
                <fa icon="fa-solid fa-book" />
              </div>
              <p class="mb-2 font-bold text-center text-cetro-green uppercase">
                {{ document.title }}
              </p>
              <p class="text-sm leading-5 text-gray-900">
                {{ document.short }}
              </p>
            </div>
            <div
              class="
                w-full
                h-1
                ml-auto
                duration-300
                origin-left
                transform
                scale-x-0
                bg-cetro-green
                group-hover:scale-x-100
              "
            ></div>
          </nuxt-link>
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
      </div>
    </div>
  </div>
</template>
<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'StepItem',
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
  data: function () {
    return {
      selectedElement: 0,
      form: {},
    }
  },
  mixins: [uploadContent],

  computed: {
    documents: function () {
      if (!this.content.documentsPage) return {}
      return this.content.documentsPage.items
    },
    step: function () {
      if (!this.content.citizenshipSteps) return {}
      let items = this.content.citizenshipSteps.steps.filter((obj) => {
        return obj.slug === this.slug
      })
      return items[0] ? items[0] : {}
    },
  },
  methods: {
    sendForm: function () {},
    changeTab: function (element) {
      this.selectedElement = element
    },
  },
}
</script>