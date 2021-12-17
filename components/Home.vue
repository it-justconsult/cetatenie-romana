<template>
  <div class="wrapper">
    <div class="container mx-auto">
      <MainHeader/>
      <main>
        <SectionHeader/>
        <CitizenshipSteps/>
        <SearchDossier/>
        <SectionNews/>
        <SectionPartners/>
      </main>
    </div>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<script>
import * as content from '../content.json'
import MainHeader from '~/components/MainHeader'
import SectionHeader from '~/components/SectionHeader'
import CitizenshipSteps from '~/components/CitizenshipSteps'
import SearchDossier from '~/components/SearchDossier'
import SectionNews from '~/components/SectionNews'
import SectionPartners from '~/components/SectionPartners'

export default {
  name: 'HomeComponent',
  components: { SectionPartners, SectionNews, SearchDossier, CitizenshipSteps, SectionHeader, MainHeader },
  data: () => ({
    posts: [],
    ip: null
  }),
  async mounted () {
    await this.fetchSomething()
    console.log(this.ip)
  },
  methods:{
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      // const data = await this.$axios.$get('http://localhost/api/collections/get/menu?token=af7d2f20a484eddc8ad3e612cd9527')
      const content = await this.getContent()
      this.ip = ip
      // console.log(data)
      console.log(content)
    },
    async getContent() {
      return await content
    }
  },
}
</script>

