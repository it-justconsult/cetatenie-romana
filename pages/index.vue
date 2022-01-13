<template>
  <HomeComponent />
</template>

<script>
import HomeComponent from '~/components/Home'
export default {
  name: 'IndexPage',
  components: { HomeComponent },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
