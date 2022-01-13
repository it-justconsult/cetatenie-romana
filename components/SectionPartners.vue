<template>
<!--  <section class="partners mt-4">
    <div class="partners-wrapper flex">
      <div class="partners-wrapper__image w-1/4 p-1 rounded-3xl overflow-hidden">
        <img class="w-auto object-fill min-h-full" src="~/assets/media/partners/apple.png" alt="">
      </div>
      <div class="partners-wrapper__image w-1/4 p-1 rounded-2xl overflow-hidden">
        <img class="w-auto object-fill min-h-full" src="~/assets/media/partners/bmw.png" alt="">
      </div>
      <div class="partners-wrapper__image w-1/4 p-1 rounded-2xl overflow-hidden">
        <img class="w-auto object-fill min-h-full" src="~/assets/media/partners/porsche.png" alt="">
      </div>
      <div class="partners-wrapper__image w-1/4 p-1 rounded-2xl overflow-hidden">
        <img class="w-auto object-fill min-h-full" src="~/assets/media/partners/zaporojets.png" alt="">
      </div>
    </div>
  </section>-->
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="mx-auto mb-10 lg:max-w-xl sm:text-center">
    </div>
    <div class='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
      <h2
        class='capitalize max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
        {{ content.partnersBlock.title }}
      </h2>
    </div>
    <div class="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="partner in content.partnersBlock.partners" :key="partner.id" class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-6 rounded-2xl shadow" :src="partner.image" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-sm font-bold">{{partner.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SectionPartners',
  props: {
    content: {
      type: Object, default: () => {
        return {}
      }, required: false
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
  //width: 25%;
  //padding: 2px;
  //border-radius: 22%;
  //overflow: hidden;
}

.partners-wrapper__image img {
  //width: auto;
  //min-height: 100%;
  //object-fit: fill;
}
</style>
