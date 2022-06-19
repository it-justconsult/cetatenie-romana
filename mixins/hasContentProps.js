export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    }
  },
  data: function(){
    return {
      imgBase: 'https://cp.cetatenieromana.md/storage/uploads'
    }
  }
}