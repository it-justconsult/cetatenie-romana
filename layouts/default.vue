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
import FooterComponent from '~/components/FooterComponent'
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'DefaultLayout',
  components: { FooterComponent, MainHeader },
  mixins: [uploadContent]
}
</script>
