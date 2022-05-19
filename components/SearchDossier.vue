<template>
  <!--    <section class="search-dossier flex justify-center items-center mt-3">
      <div class="dossier-block ml-3">
        <form action="">
          <div class="input-block">
            <input
              id="dossier_number"
              class="dossier_number placeholder-gray
              bg-gray-700 rounded w-full py-2 px-4 text-2xl focus:outline-none focus:bg-white" name="dossier_number"
              placeholder="Numărul dosarului" type="text">
          </div>
          <div class="get-info-block bg-cetro-black text-2xl text-cetro-white text-white text-center">
            <p class="questions">{{ content.searchDossier.title }}</p>
            <p class="questions">{{ content.searchDossier.subtitle }}</p>
            <img alt="Link to partners" class="get-info-image min-w-[140] min-h-[140]" src="">
            <button class="get-info-button text-black bg-cetro-green text-2xl rounded-2xl p-2" type="submit">{{ content.searchDossier.buttonTitle }}</button>
          </div>
        </form>
        <form class="w-full max-w-sm">
          <div class="md:flex flex-col md:items-center mb-6">
            <div class="">
              <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Introduceti dosar/ordin
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" value="Jane Doe">
            </div>
          </div>
          <div class="md:flex flex-col md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <label class="md:w-2/3 block text-gray-500 font-bold">
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="text-sm">
        Send me your newsletter!
      </span>
            </label>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="shadow bg-green-500 hover:bg-deep-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                {{ content.searchDossier.buttonTitle }}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="order-block flex flex-col justify-between ml-3 bg-cetro-black text-2xl text-white text-center">
        <form action="">
          <div class="input-block">
            <input
              class="dossier_number bg-gray-700 rounded w-full py-2 px-4 text-2xl focus:outline-none focus:bg-white focus:border-purple-500"
              name="order_number" placeholder="Numărul ordinului" type="text">
          </div>

          <div class="text-block">
            <p>{{ content.searchOrder.title }}</p>
            <p>{{ content.searchOrder.subtitle }}</p>
          </div>
          <div class="subscribe-block flex flex-col items-center justify-between">
            <input class="subscribe-block__item mt-3 text-black placeholder-black" placeholder="Nume Prenume" type="text">
            <input class="subscribe-block__item mt-3 text-black placeholder-black" placeholder="Număr de contact" type="tel">
            <input class="subscribe-block__item mt-3 text-black placeholder-black" placeholder="Email" type="email">
            <button class="subscribe-block__item subscribe-button p-1 text-black text-2xl rounded-2xl bg-cetro-green" type="submit">{{ content.searchOrder.buttonTitle }}</button>
          </div>
        </form>
      </div>
    </section>-->
  <div class="relative">
    <img
      src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75">
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
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <!-- <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              The quick, brown fox <br class="hidden md:block" />
              jumps over a <span class="text-teal-accent-400">lazy dog</span>
            </h2>
            <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a href="/" aria-label="" class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
              Learn more
              <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a>
          </div> -->
          <div class="w-full max-w-full">
            <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3
                class="
                  mb-4
                  text-lg
                  font-bold
                  uppercase
                  sm:text-center sm:mb-6 sm:text-2xl
                  font-bold
                  text-cetro-green
                "
              >
                Verifică Stadiu dosar
              </h3>
              <p class="text-center text-xl lg:px-40">
                Primește o înștiințare despre apariția ordinului Autorității
                Naționale pentru Cetățenie (ANC) privind acordarea cetățeniei
                române. Pentru aceasta este suficient să completezi formularul.
              </p>

              <div
                class="
                  relative
                  grid
                  gap-8
                  row-gap-5
                  mb-8
                  pt-10
                  md:row-gap-8
                  lg:grid-cols-2
                  sm:grid-cols-1
                "
              >
                <div>
                  <button
                    class="
                      inline-flex
                      items-center
                      justify-center
                      w-full
                      h-12
                      px-6
                      py-10
                      uppercase
                      font-medium
                      tracking-wide
                      text-white
                      transition
                      duration-200
                      rounded
                      shadow-md
                      bg-cetro-green
                      hover:bg-cetro-black
                      focus:shadow-outline focus:outline-none
                    "
                  >
                    Am număr de dosar
                  </button>
                </div>
                <div>
                  <button
                    class="
                      inline-flex
                      items-center
                      justify-center
                      w-full
                      h-12
                      px-6
                      py-10
                      uppercase
                      font-medium
                      tracking-wide
                      text-white
                      transition
                      duration-200
                      rounded
                      shadow-md
                      bg-cetro-green
                      hover:bg-cetro-black
                      focus:shadow-outline focus:outline-none
                    "
                  >
                    Nu am număr de dosar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'SearchDossier',
  mixins: [hasContentProps],
}
</script>
