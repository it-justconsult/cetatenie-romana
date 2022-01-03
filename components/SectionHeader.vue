<template>
<!--  <section class="hero flex justify-end">
    <div class="hero-block flex flex-col justify-center items-start">
      <h1 class="hero-block__message font-bold text-size text-5xl">{{ content.heroBlock.title }}</h1>
      <h5 class="hero-block__subtitle flex font-bold">{{ content.heroBlock.subtitle }}</h5>
      <button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
    <div class="hero-image">
      <div class="hero-image__image">
        <img :src="content.heroBlock.image" alt="Promo image">
      </div>
    </div>
  </section>-->

  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <div class="max-w-xl mb-6">
<!--          <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider rounded-full">
              Brand new
            </p>
          </div>-->
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-cetro-green sm:text-4xl sm:leading-none">
            {{ content.heroBlock.title }}
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            {{ content.heroBlock.subtitle }}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center lg:w-1/2">
        <div class="">
          <img class="object-cover" :src="content.heroBlock.image" alt="" />
        </div>
      </div>
    </div>
    <a
      href="/"
      aria-label="Scroll down"
      class="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  name: 'SectionHeader',
  props: {
    content: {
      type: Object, default: () => {
        return {}
      }, required: false
    }
  }
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
