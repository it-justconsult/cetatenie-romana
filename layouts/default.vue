<template>
  <div>
    <MainHeader
      :content="content"
    ></MainHeader>
    <Nuxt :content="content" />
    <FooterComponent
      :content="content"
    ></FooterComponent>
  </div>
</template>
<script>
import MainHeader from '~/components/MainHeader'
import * as data from '~/content.json'
import FooterComponent from '~/components/FooterComponent'

export default {
  name: 'DefaultLayout',
  components: { FooterComponent, MainHeader },
  data () {
    return {
      content: {}
    }
  },
  mounted () {
    this.content = this.getContent()
  },
  created () {
    this.content = this.getContent()
  },
  methods: {
    getContent () {
      return data.data
    }
  }
}
</script>
