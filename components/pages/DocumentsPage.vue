<template>
  <div>
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
    documentsPageTitle () {
      return (this.content.documentsPage || {}).title
    },
    documents () {
      return (this.content.documentsPage || {}).documents
    }
  }
}
</script>
