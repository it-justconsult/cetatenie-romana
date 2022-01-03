<template>
  <div>
    <!--    <section class='citizenship-steps bg-cetro-green'>-->
    <!--      <h2 class='citizenship-steps__title font-bold text-4xl text-center'>-->
    <!--        {{ content.citizenshipSteps.title }}-->
    <!--      </h2>-->
    <!--      <h3 class='citizenship-steps__subtitle text-center'>-->
    <!--        {{ content.citizenshipSteps.subtitle }}-->
    <!--      </h3>-->
    <!--      <div class='citizenship-steps-wrapper text-center p-2 flex flex-auto justify-between'>-->
    <!--        <div-->
    <!--v-for='step in content.citizenshipSteps.steps'-->
    <!--             :key='step.stepstepTitle'-->
    <!--             class='citizenship-steps__step bg-cetro-white mr-8 last:mr-0'>-->
    <!--          <h3 class='title text-2xl font-bold'>{{ step.stepTitle }}</h3>-->
    <!--          <p class='text'>{{ step.stepText }}</p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <div
      class="
        px-4
        py-6
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-8
      "
    >
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="
            max-w-lg
            mb-6
            font-sans
            text-3xl
            font-bold
            leading-none
            tracking-tight
            text-gray-900
            sm:text-4xl
            md:mx-auto
          "
        >
          {{ content.citizenshipSteps.title }}
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          {{ content.citizenshipSteps.subtitle }}
        </p>
      </div>
      <div class="grid gap-8 row-gap-0 lg:grid-cols-4">
        <a
          v-for="step in content.citizenshipSteps.steps"
          :key="step.id"
          href="#"
          class="
            citizenship-step
            relative
            text-center
            flex flex-col
            items-center
          "
        >
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mx-auto
              mb-4
              rounded-full
              bg-indigo-50
              sm:w-20 sm:h-20
            "
          >
            <svg
              class="w-12 h-12 text-green sm:w-16 sm:h-16"
              stroke="green"
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
            aria-label=""
            class="
              justify-self-end
              items-end
              align-self-end
              font-semibold
              transition-colors
              duration-200
              text-deep-purple-accent-400
              hover:text-deep-purple-800
            "
            href="/"
            >Learn more</a
          >
          <div
            class="
              arrow-to-left
              top-0
              right-0
              flex
              items-center
              justify-center
              h-24
              lg:-mr-8 lg:absolute
            "
          >
            <svg
              class="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
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
        <!--        <div class='relative text-center'>
                  <div
                    class='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20'>
                    <svg
        class='w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16' stroke='currentColor'
                         viewBox='0 0 52 52'>
                      <polygon
        fill='none' points='29 13 14 29 25 29 23 39 38 23 27 23' stroke-linecap='round' stroke-linejoin='round'
                               stroke-width='3'></polygon>
                    </svg>
                  </div>
                  <h6 class='mb-2 text-2xl font-extrabold'>Step 2</h6>
                  <p class='max-w-md mb-3 text-sm text-gray-900 sm:mx-auto'>
                    They urge you to put down your sword and come join the winners. In 22 years the only 'winners'
                  </p>
                  <a
        aria-label='' class='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
                     href='/'>Learn
                    more</a>
                  <div class='top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute'>
                    <svg
        class='w-8 text-gray-700 transform rotate-90 lg:rotate-0' stroke='currentColor' stroke-linecap='round'
                         stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'>
                      <line fill='none' stroke-miterlimit='10' x1='2' x2='22' y1='12' y2='12'></line>
                      <polyline fill='none' points='15,5 22,12 15,19 ' stroke-miterlimit='10'></polyline>
                    </svg>
                  </div>
                </div>
                <div class='relative text-center'>
                  <div
                    class='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20'>
                    <svg
        class='w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16' stroke='currentColor'
                         viewBox='0 0 52 52'>
                      <polygon
        fill='none' points='29 13 14 29 25 29 23 39 38 23 27 23' stroke-linecap='round' stroke-linejoin='round'
                               stroke-width='3'></polygon>
                    </svg>
                  </div>
                  <h6 class='mb-2 text-2xl font-extrabold'>Step 3</h6>
                  <p class='max-w-md mb-3 text-sm text-gray-900 sm:mx-auto'>
                    Tell them I hate them. Is the Space Pope reptilian!? Tell her she looks thin. Hello, little man
                  </p>
                  <a
        aria-label='' class='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
                     href='/'>Learn
                    more</a>
                </div>-->
      </div>
    </div>

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
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="
            max-w-lg
            mb-6
            font-sans
            text-3xl
            font-bold
            leading-none
            tracking-tight
            text-gray-900
            sm:text-4xl
            md:mx-auto
          "
        >
          {{ content.citizenshipSteps.title }}
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          {{ content.citizenshipSteps.subtitle }}
        </p>
      </div>
      <a
        class="
          relative
          grid
          gap-8
          row-gap-5
          mb-8
          md:row-gap-8
          lg:grid-cols-4
          sm:grid-cols-2
        "
        href="#"
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
        <div
          class="
            p-5
            duration-300
            transform
            bg-white
            border
            rounded
            shadow-sm
            hover:-translate-y-2
          "
        >
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Believe</p>
            <p
              class="
                flex
                items-center
                justify-center
                w-6
                h-6
                font-bold
                rounded
                text-deep-purple-accent-400
                bg-indigo-50
              "
            >
              1
            </p>
          </div>
          <p class="text-sm text-gray-900">
            Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
            flail 180 berm.
          </p>
        </div>
        <div
          class="
            p-5
            duration-300
            transform
            bg-white
            border
            rounded
            shadow-sm
            hover:-translate-y-2
          "
        >
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Be yourself</p>
            <p
              class="
                flex
                items-center
                justify-center
                w-6
                h-6
                font-bold
                rounded
                text-deep-purple-accent-400
                bg-indigo-50
              "
            >
              2
            </p>
          </div>
          <p class="text-sm text-gray-900">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped.
          </p>
        </div>
        <div
          class="
            p-5
            duration-300
            transform
            bg-white
            border
            rounded
            shadow-sm
            hover:-translate-y-2
          "
        >
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Just do it</p>
            <p
              class="
                flex
                items-center
                justify-center
                w-6
                h-6
                font-bold
                rounded
                text-deep-purple-accent-400
                bg-indigo-50
              "
            >
              3
            </p>
          </div>
          <p class="text-sm text-gray-900">
            Chase ball of string eat plants, meow, and throw up because I ate
            plants going.
          </p>
        </div>
        <div
          class="
            p-5
            duration-300
            transform
            bg-white
            border
            rounded
            shadow-sm
            hover:-translate-y-2
          "
        >
          <div class="flex items-center justify-between mb-2">
            <p class="text-lg font-bold leading-5">Eat that</p>
            <p
              class="
                flex
                items-center
                justify-center
                w-6
                h-6
                font-bold
                rounded
                text-deep-purple-accent-400
                bg-indigo-50
              "
            >
              4
            </p>
          </div>
          <p class="text-sm text-gray-900">
            Bro ipsum dolor sit amet gaper backside single track, manny Bike
            epic clipless.
          </p>
        </div>
      </a>
      <div class="text-center">
        <a
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
          href="/"
        >
          Learn more
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CitizenshipSteps',
  props: {
    content: {
      type: Object,
      default: () => {
        return {}
      },
      required: false,
    },
  },
}
</script>
<style>
section.citizenship-steps {
  //background-color: #72BB5D;
}

.citizenship-steps__title {
  //text-align: center; //font-size: 36px; //font-weight: bold;
}

.citizenship-steps__subtitle {
  //text-align: center;
}

.citizenship-steps-wrapper {
  //text-align: center; //padding: 8px; //display: flex; //flex: 1 1 auto; //justify-content: space-between;
}

.citizenship-steps__step {
  //background-color: #fff; //margin-right: 120px;
}

.citizenship-steps__step:last-child {
  //margin-right: 0;
}

.citizenship-steps__step .title {
  //font-size: 24px; //font-weight: bold;
}

.citizenship-steps__step .text {
}

.citizenship-step:last-of-type .arrow-to-left {
  display: none;
}

.arrow-to-left {
}
</style>
