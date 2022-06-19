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
          lg:text-6xl
          md:mx-auto
          font-tungsten
        "
      >
        {{ this.content.faq ? this.content.faq.title : '' }}
      </h2>
    </div>

    <div
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-scren-2xl
        md:px-24
        lg:px-8 lg:py-20 lg:mb-40
      "
    >
      <div class="max-w-xl px-4 sm:mx-auto lg:max-w-screen-xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <a href="/" class="mb-6 sm:mx-auto"> </a>
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2
              class="
                max-w-full
                mb-6
                font-sans
                text-3xl
                font-bold
                leading-none
                tracking-tight
                text-cetro-green
                sm:text-6xl
                md:mx-auto
                font-tungsten
                text-center
              "
            >
              {{ question.title }}
            </h2>
            <p class="text-base text-gray-700 md:text-lg text-center">
              {{ question.description }}
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <div
            class="border rounded shadow-sm"
            v-for="(item, id) in question.questions"
            v-bind:key="id"
          >
            <button
              @click="changeTab(id)"
              type="button"
              aria-label="Open item"
              title="Open item"
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
      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'QuestionPage',
  mixins: [uploadContent],
  props: {
    slug: {
      type: String,
      default: 'another',
    },
  },
  data() {
    return {
      activeQuestion: 0,
      questions: [],
      selectedElement: 0,
    }
  },
  computed: {
    question() {
      if (!this.content.faq) return {}
      let items = this.content.faq.filter((obj) => {
        return obj.title_slug === this.slug
      })
      return items[0] ? items[0] : {}
    },
  },
  afterCreated() {},
  methods: {
    changeTab: function (element) {
      this.selectedElement = element
    },
  },
}
</script>

<style scoped>
</style>
