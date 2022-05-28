<template>
  <div class="wrapper">
    <div class="mx-auto">
      <main>
        <SectionHeader :content="content" />
        <CitizenshipSteps :content="content" />
        <SearchDossier :content="content" />
        <CaBlock :content="content" />
        <SectionNews :content="content" />
        <SectionPartners :content="content" />
      </main>
    </div>
    <footer>
      <!--<FooterComponent></FooterComponent> -->
    </footer>
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHero'
import CitizenshipSteps from '~/components/CitizenshipSteps'
import SearchDossier from '~/components/SearchDossier'
import SectionNews from '~/components/SectionNews'
import SectionPartners from '~/components/SectionPartners'
import uploadContent from '~/mixins/uploadContent'
import CaBlock from '~/components/CaBlock.vue'

export default {
  name: 'HomeComponent',
  // eslint-disable-next-line vue/no-unused-components
  components: {
    SectionPartners,
    SectionNews,
    SearchDossier,
    CitizenshipSteps,
    SectionHeader,
    CaBlock,
  },
  mixins: [uploadContent],
  layout: 'default',
  methods: {
    // async fetchSomething () {
    // const ip = await this.$axios.$get('http://icanhazip.com')
    // const data = await this.$axios.$get('http://localhost/api/collections/get/menu?token=af7d2f20a484eddc8ad3e612cd9527')
    // const content = await this.getContent()
    // this.ip = ip
    // },
  },
}
</script>
