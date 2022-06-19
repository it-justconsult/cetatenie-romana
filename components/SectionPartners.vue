<template>
  <div
    class="
      px-4
      py-8
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-10
    "
  >
    <div class="mx-auto mb-10 lg:max-w-xl text-center"></div>
    <div class="max-w-xl sm:mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
      <h2
        class="
          max-w-lg
          mb-6
          font-sans
          text-4xl
          font-bold
          text-cetro-green
          sm:text-6xl
          md:mx-auto
          font-tungsten
        "
      >
        {{ partnersBlockTitle }}
      </h2>
    </div>
    <div
      class="
        grid
        gap-10
        mx-auto
        lg:max-w-screen-lg
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      <a
        :href="partner.value.url"
        v-for="partner in partnersBlockPartners"
        :key="partner.id"
        class="flex flex-col items-center"
      >
        <img
          :src="imgBase + partner.value.image.path"
          alt="Person"
          class="object-cover w-40 h-40 px-2 py-2 mb-6 rounded-2xl shadow"
        />
        <div class="flex flex-col items-center">
          <p class="text-sm font-bold">{{ partner.value.title }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'SectionPartners',
  mixins: [hasContentProps],
  data: function () {
    return {}
  },
  computed: {
    partnersBlockTitle() {
      if (!this.content) return ''
      return (this.content.mainPage || {}).partnersTitle
    },
    partnersBlockPartners() {
      return (this.content.mainPage || {}).partners
    },
  },
}
</script>