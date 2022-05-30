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
          sm:text-6xl
          md:mx-auto
          font-tungsten
        "
      >
        {{ faq.title }}
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
      <h2 class="text-xl text-center text-cetro-black font-bold">
        Am adunat pentru tine cele mai frecvente întrebări cu privire la
        situațiile care pot avea loc în procesul de redobândire a cetățeniei
        române.
      </h2>
      <p class="mb-10 text-center text-lg text-cetro-green">
        Iar dacă nu ai găsit aici răspunsul căutat, te încurajăm să ne
        contactezi utilizând formularul de contact sau apelându-ne la numărul
        telefon 0 22 xx xx xx.
      </p>
      <div class="grid gap-8 row-gap-5 lg:grid-cols-2 lg:mb-44">
        <div
          v-for="(category, id) in faq.items"
          :key="id"
          class="
            relative
            p-px
            overflow-hidden
            transition
            duration-300
            transform
            border
            rounded
            shadow-sm
            hover:scale-105
            group
            hover:shadow-lg
          "
        >
          <div
            class="
              absolute
              bottom-0
              left-0
              w-full
              h-1
              duration-300
              origin-left
              transform
              scale-x-0
              bg-cetro-green
              group-hover:scale-x-100
            "
          ></div>
          <div
            class="
              absolute
              bottom-0
              left-0
              w-1
              h-full
              duration-300
              origin-bottom
              transform
              scale-y-0
              bg-cetro-green
              group-hover:scale-y-100
            "
          ></div>
          <div
            class="
              absolute
              top-0
              left-0
              w-full
              h-1
              duration-300
              origin-right
              transform
              scale-x-0
              bg-cetro-green
              group-hover:scale-x-100
            "
          ></div>
          <div
            class="
              absolute
              bottom-0
              right-0
              w-1
              h-full
              duration-300
              origin-top
              transform
              scale-y-0
              bg-cetro-green
              group-hover:scale-y-100
            "
          ></div>
          <nuxt-link :to="'/faq/' + category.slug" aria-label="" class="group">
            <div class="relative h-40 p-5 bg-white rounded-sm flex-grow">
              <div
                class="
                  flex flex-col
                  mb-2
                  justify-center
                  items-center
                  lg:justify-between lg:items-center lg:flex-row
                "
              >
                <div
                  class="
                    flex
                    lg:order-2
                    items-center
                    justify-center
                    w-12
                    h-12
                    mb-4
                    mr-2
                    rounded-full
                    bg-cetro-gray
                    group-hover:bg-indigo-50
                    lg:mb-0
                  "
                >
                  <svg
                    class="h-10"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 281.232 281.232"
                    style="enable-background: new 0 0 281.232 281.232"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        style="fill: #72bb5d"
                        d="M231.634,79.976v-0.751C231.634,30.181,192.772,0,137.32,0c-31.987,0-57.415,9.018-77.784,22.98
		c-11.841,8.115-12.907,25.906-4.232,37.355l6.326,8.349c8.675,11.444,24.209,12.532,36.784,5.586
		c11.46-6.331,23.083-9.758,34-9.758c18.107,0,28.294,7.919,28.294,20.75v0.375c0,16.225-15.469,39.411-59.231,43.181l-1.507,1.697
		c-0.832,0.936,0.218,13.212,2.339,27.413l1.741,11.58c2.121,14.201,14.065,25.71,26.668,25.71s23.839-5.406,25.08-12.069
		c1.256-6.668,2.268-12.075,2.268-12.075C199.935,160.882,231.634,127.513,231.634,79.976z"
                      />
                      <path
                        style="fill: #72bb5d"
                        d="M118.42,217.095c-14.359,0-25.993,11.64-25.993,25.999v12.14c0,14.359,11.64,25.999,25.993,25.999
		h22.322c14.359,0,25.999-11.64,25.999-25.999v-12.14c0-14.359-11.645-25.999-25.999-25.999H118.42z"
                      />
                    </g>
                  </svg>
                </div>
                <h6 class="font-bold text-4xl leading-5 font-tungsten text-cetro-green">
                  {{ category.title }}
                </h6>
              </div>
              <p class="mb-2 text-md text-gray-900 text-center md:text-left">
                {{ category.description }}
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
  name: 'QuestionsPage',
  mixins: [uploadContent],
  computed: {
    faq() {
      return this.content.faq ? this.content.faq : []
    },
  },
  methods: {
    goTo(user) {
      this.$router.push('/questions/' + user)
    },
  },
}
</script>

<style scoped>
</style>
