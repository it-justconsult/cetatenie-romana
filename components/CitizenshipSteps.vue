<template>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-20
    "
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        class="
          max-w-lg
          mb-6
          font-sans
          text-4xl
          font-bold
          tracking-tight
          text-cetro-green
          sm:text-6xl
          md:mx-auto
          font-tungsten
          capitalize
          text-center
        "
      >
        {{ citizenshipStepsTitle }}
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        {{ citizenshipStepsSubtitle }}
      </p>
    </div>
    <div
      class="
        relative
        grid
        gap-8
        row-gap-5
        mb-8
        md:row-gap-8
        lg:grid-cols-4
        sm:grid-cols-1
      "
    >
      <div
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          sm:hidden
          lg:flex
        "
      >
        <div class="w-px h-full bg-gray-300 lg:w-full lg:h-px"></div>
      </div>
      <nuxt-link
        :to="'/step/' + step.short_slug"
        class="
          p-5
          duration-300
          transform
          bg-white
          border
          rounded
          shadow-sm
          hover:-translate-y-2
          cursor-pointer
          group
        "
        v-for="(step, id) in citizenshipSteps"
        v-bind:key="id"
      >
        <div class="flex items-center justify-center mb-2">
          <!-- <p class="text-lg text-grey-400 ">{{ step.title }}</p> -->
          <p
            class="
              animate-pulse
              flex
              items-center
              justify-center
              h-12
              font-bold
              rounded
              text-lg text-cetro-black
              bg-gray-100
              px-4
            "
          >
            <fa icon="fa-solid fa-shoe-prints " />
            <span class="pl-2 ">{{step.title}}</span>
          </p>
        </div>
        <p
          class="
            font-bold
            text-3xl
            leading-6
            text-cetro-green
            py-10
            h-20
            md:h-40
            text-center
            font-tungsten
          "
        >
          {{ step.short }}
        </p>
        <p
          class="
            mt-10
            text-center text-gray-400
            hover:text-cetro-green
            group-hover:text-cetro-green
            
          "
        >
          Vezi soluția
          <fa icon="fa-solid fa-chevron-right" />
        </p>
        <div
          class="
            mt-2
            w-full
            h-1
            ml-auto
            duration-300
            origin-left
            transform
            scale-x-0
            bg-cetro-green
            group-hover:scale-x-100
          "
        ></div>
      </nuxt-link>
    </div>
    <div class="text-center">
      <!-- <a
        href="/"
        class="
          inline-flex
          items-center
          justify-center
          w-full
          h-12
          px-6
          font-medium
          tracking-wide
          text-white
          transition
          duration-200
          rounded
          shadow-md
          md:w-auto
          bg-deep-purple-accent-400
          hover:bg-deep-purple-accent-700
          focus:shadow-outline focus:outline-none
        "
      >
        Learn more
      </a> -->
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'CitizenshipSteps',
  mixins: [hasContentProps],
  computed: {
    citizenshipStepsTitle() {
      return (this.content.mainPage || {}).stepsTitle
    },
    citizenshipStepsSubtitle() {
      return (this.content.citizenshipSteps || {}).subtitle
    },
    citizenshipSteps() {
      return (this.content || {}).steps
    },
  },
}
</script>
<style>
.citizenship-step:last-of-type .arrow-to-right {
  display: none;
}
</style>
