<template>
  <section class="hero flex justify-end">
    <div class="hero-block flex flex-col justify-center items-start">
      <h1 class="hero-block__message font-bold text-size text-5xl">
        Lorem ipsum dolor sit amet.
      </h1>
      <h5 class="hero-block__subtitle flex font-bold">Lorem ipsum dolor sit amet, consectetur.</h5>
      <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
    <div class="hero-image">
      <div class="hero-image__image">
        <img src="~/assets/media/hero-image.png" alt="Promo image">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionHeader'
}
</script>
<style scoped>

.hero {
  //display: flex;
  //justify-content: flex-end;
}

.hero-block {
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: flex-start;
}

h1.hero-block__message {
  //font-size: 60px;
  //font-weight: bold;
}

.hero-block__subtitle {
  //justify-content: flex-end;
}
</style>
