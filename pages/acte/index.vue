<template>
  <div>
    <DocumentsPage></DocumentsPage>
  </div>
</template>
<script>
import DocumentsPage from '~/components/pages/DocumentsPage'
import uploadContent from '~/mixins/uploadContent'
export default {
  components: { DocumentsPage },
  mixins: [uploadContent],
  computed: {
    pageTitle() {
      if (!this.content.documentsPage) {
        return ''
      }
      return this.content.documentsPage.title
    },
  },

  // methods: {

  // },
}
</script>
