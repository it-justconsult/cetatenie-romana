export default {
  data() {
    return {
      content: {},
      imgBase: 'https://cp.cetatenieromana.md/storage/uploads',
      apiBase: 'https://cp.cetatenieromana.md/',
      apiToken: '6f4c2998fb9f347cab13ae26ba69ef'
    }
  },
  async beforeMount() {
    let res = await this.$axios.$get(`https://cp.cetatenieromana.md/content.json`)
    this.content = res
  },
  methods: {
    toDate(timestamp) {
      var date = new Date(timestamp * 1000)
      return this.formatDate(date)
    },
    padTo2Digits(num) {
      return num.toString().padStart(2, '0')
    },
    formatDate(date) {
      return [
        this.padTo2Digits(date.getDate()),
        this.padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/')
    },
    getUrl(article) {
      if (!article.url) {
        return article.title_slug
      }
      return article.url
    },
  }

}
