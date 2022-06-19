<template>
  <div class="relative z-30 hero-video">
    <video
      autoplay
      loop
      muted
      class="w-auto min-w-full xl:max-w-none blur-2xl opacity-30"
    >
      <!-- TODO: source from server(heroBlockVideo) -->
      <source class="" src="@/assets/media/europe.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div
      class="
        z-20
        absolute
        flex
        justify-between
        top-0
        left-0
        right-0
        bottom-0
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
      <div
        class="
          flex flex-col
          items-center
          justify-between
          w-full
          mb-10
          lg:flex-row
        "
      >
        <div class="mb-16 lg:mb-0 lg:max-w-2xl lg:pr-5">
          <div class="max-w-2xl mb-6">
            <h2
              class="
                max-w-lg
                mb-6
                font-sans
                text-xl
                font-bold
                tracking-tight
                text-cetro-green
                sm:text-6xl sm:leading-none
                font-tungsten
              "
            >
              {{ heroBlockTitle }}
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              {{ heroBlockSubtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'SectionHero',
  mixins: [hasContentProps],
  computed: {
    heroBlockTitle() {
      if (!this.content) return ''
      return (this.content.mainPage || {}).title
    },
    heroBlockSubtitle() {
      return (this.content.mainPage || {}).description
    },
    heroBlockVideo() {
      return (this.content.heroBlock || {}).video_background
    },
  },
}
</script>
<style>
.hero-video {
  max-height: 100vh;
  overflow: hidden;
}
</style>
