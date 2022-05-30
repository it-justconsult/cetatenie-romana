import content from '../static/content.json'
export default {
  data () {
   return {
     content: {}
   }
 },
 async beforeMount () {
   await this.$axios.$get(
     `/content.json`
   ).then((res) => {
     this.content = res.data
   })
 }
}
