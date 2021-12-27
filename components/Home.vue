<template>
  <div class="wrapper">
    <div class="mx-auto">
      <MainHeader
        :content = content
      />
      <main>
        <SectionHeader
          :content = content
        />
        <CitizenshipSteps
          :content = content
        />
        <SearchDossier
          :content = content
        />
        <SectionNews
          :content = content
        />
        <SectionPartners
          :content = content
        />
      </main>
    </div>
    <footer>
      <!--<FooterComponent></FooterComponent> -->
    </footer>
  </div>
</template>

<script>
import * as data from '../content.json'
import MainHeader from '~/components/MainHeader'
import SectionHeader from '~/components/SectionHeader'
import CitizenshipSteps from '~/components/CitizenshipSteps'
import SearchDossier from '~/components/SearchDossier'
import SectionNews from '~/components/SectionNews'
import SectionPartners from '~/components/SectionPartners'
import FooterComponent from '~/components/FooterComponent'


export default {
  name: 'HomeComponent',
  layout: 'default',
  components: { SectionPartners, SectionNews, SearchDossier, CitizenshipSteps, SectionHeader, MainHeader, FooterComponent },
  data: () => ({
    posts: [],
    ip: null,
    content: {}
  }),
  created () {
    this.content = this.getContent()
  },
  mounted () {
    this.content = this.getContent()
  },
  methods:{
    async fetchSomething() {
      // const ip = await this.$axios.$get('http://icanhazip.com')
      // const data = await this.$axios.$get('http://localhost/api/collections/get/menu?token=af7d2f20a484eddc8ad3e612cd9527')
      // const content = await this.getContent()
      // this.ip = ip
    },
    getContent() {
      return data.data
    }
  }
}
</script>

