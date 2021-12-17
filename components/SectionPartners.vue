<template>
  <section class="partners mt-4">
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
  </section>
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
