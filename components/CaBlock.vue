<template>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-2xl
      md:px-24
      lg:px-8 lg:py-20
    "
  >
    <div class="max-w-screen-xl text-center mx-auto">
      <div class="inline-block mb-5 rounded-full mx-auto">
        <div
          class="
            flex
            items-center
            justify-center
            w-16
            h-16
            mb-4
            rounded-full
            bg-cetro-gray
            text-cetro-green text-2xl
            mx-auto
          "
        >
          <fa icon="fa-solid fa-phone-volume" />
        </div>
      </div>
      <h2
        class="
          mb-4
          font-tungsten
          text-4xl
          font-bold
          tracking-tight
          text-cetro-black
          sm:text-5xl sm:leading-none
          uppercase
        "
      >
        {{ content.mainPage ? content.mainPage.ctaTitle : '' }}
      </h2>
      <div
        class="
          lg:inline-flex
          items-center
          justify-center
          mt-10
          py-4
          px-4
          shadow-lg
          w-2xl
        "
      >
        <span class="text-4xl font-bold text-cetro-green pl-4 w-full lg:w-auto">
          {{ content.mainPage ? content.mainPage.ctaPhone : '' }}
        </span>
        <button
          class="
            w-full
            lg:w-auto lg:inline-flex
            items-center
            justify-center
            mt-4
            md:ml-14 md:mt-0
            h-12
            px-6
            font-bold
            tracking-wide
            text-white
            transition
            duration-200
            rounded
            shadow-md
            md:w-auto
            bg-cetro-green
            hover:bg-cetro-gray hover:text-cetro-green
            focus:shadow-outline focus:outline-none
            animate-pulse
          "
        >
          SUNĂ ACUM
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'CABlock',
  mixins: [hasContentProps],
}
</script>