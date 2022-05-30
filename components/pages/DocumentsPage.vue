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
        {{ documentsPageTitle }}
      </h2>
    </div>
    <!-- <div>
    <div class='bg-cetro-green py-20 mx-auto flex justify-center'>
      <h2
        class='uppercase font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'
      >{{ documentsPageTitle }}
      </h2>
    </div>
    <div
      class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
    >
      <div
        class='grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'
      >
        <div>
          <h3 class="">Linkuri</h3>
          <ul>
            <li v-for='document in documents' :key='document.id'>
              <a :href='document.slug'>{{ document.title }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
    <div
      class="
        relative
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
      <div class="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-4">
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
    documentsPageTitle() {
      return (this.content.documentsPage || {}).title
    },
    documents() {
      return (this.content.documentsPage || {}).items
    },
  },
}
</script>
