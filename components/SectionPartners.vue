<template>
  <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
    <div class='mx-auto mb-10 lg:max-w-xl sm:text-center'>
    </div>
    <div class='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
      <h2
        class='capitalize max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
        {{ partnersBlockTitle }}
      </h2>
    </div>
    <div class='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4'>
      <div v-for='partner in partnersBlockPartners' :key='partner.id' class='flex flex-col items-center'>
        <img :src='partner.image' alt='Person' class='object-cover w-60 h-60 mb-6 rounded-2xl shadow' />
        <div class='flex flex-col items-center'>
          <p class='text-sm font-bold'>{{ partner.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'SectionPartners',
  mixins: [hasContentProps],
  computed: {
    partnersBlockTitle () {
      return (this.content.partnersBlock || {}).title
    },
    partnersBlockPartners () {
      return (this.content.partnersBlock || {}).partners
    }
  }
}
</script>
<style>


.partners {
//margin-top: 30px;
}

.partners-wrapper {
//display: flex;
}

.partners-wrapper__image {
//width: 25%; //padding: 2px; //border-radius: 22%; //overflow: hidden;
}

.partners-wrapper__image img {
//width: auto; //min-height: 100%; //object-fit: fill;
}
</style>
