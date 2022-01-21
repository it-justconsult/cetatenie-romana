export default {
  data () {
   return {
     content: {}
   }
 },
 async beforeMount () {
   await this.$axios.$get(
     `http://localhost/api/cockpit/getContent?token=${this.$config.apiToken}`
   ).then((res) => {
     this.content = res.data
   })
 }
}
