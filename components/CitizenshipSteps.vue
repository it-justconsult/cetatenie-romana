<template>
  <div class="bg-cetro-gray">
    <div
      class="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"
    >
      <div
        class="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto"
        >
          {{ citizenshipStepsTitle }}
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          {{ citizenshipStepsSubtitle }}
        </p>
      </div>
      <div class="grid gap-8 row-gap-0 lg:grid-cols-4">
        <a
          v-for="step in citizenshipSteps"
          :key="step.id"
          :href="step.stepUrl"
          class="citizenship-step relative text-center flex flex-col items-center"
        >
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20"
          >
            <svg
              class="w-12 h-12 text-green sm:w-16 sm:h-16"
              stroke="#72BB5D"
              viewBox="0 0 52 52"
            >
              <polygon
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              ></polygon>
            </svg>
          </div>
          <h6 class="mb-2 text-2xl font-extrabold">{{ step.stepTitle }}</h6>
          <p class="max-w-md flex-grow mb-3 text-sm text-green sm:mx-auto">
            {{ step.stepText }}
          </p>
          <a
            :href="step.stepUrl"
            aria-label=""
            class="justify-self-end items-end align-self-end font-semibold transition-colors duration-200 text-cetro-green hover:text-cetro-green"
            >Learn more</a
          >
          <div
            class="arrow-to-right top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute"
          >
            <svg
              class="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="#72BB5D"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                stroke-miterlimit="10"
                x1="2"
                x2="22"
                y1="12"
                y2="12"
              ></line>
              <polyline
                fill="none"
                points="15,5 22,12 15,19 "
                stroke-miterlimit="10"
              ></polyline>
            </svg>
          </div>
        </a>
      </div>
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
      return (this.content.citizenshipSteps || {}).title
    },
    citizenshipStepsSubtitle() {
      return (this.content.citizenshipSteps || {}).subtitle
    },
    citizenshipSteps() {
      return (this.content.citizenshipSteps || {}).steps
    },
  },
}
</script>
<style>
.citizenship-step:last-of-type .arrow-to-right {
  display: none;
}
</style>
