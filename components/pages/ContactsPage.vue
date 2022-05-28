<template>
  <div>
    <div class="bg-cetro-green py-20 mx-auto flex justify-center">
      <h2
        class="
          uppercase
          font-sans
          text-3xl
          font-bold
          leading-none
          tracking-tight
          text-white
          sm:text-4xl
          md:mx-auto
        "
      >
        {{ contacts ? contacts.title : '' }}
      </h2>
    </div>

    <div
      class="
        px-4
        py-10
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-10
      "
    >
      <h2 class="text-center text-4xl font-bold pb-8">
        <span class="text-just-red">JustConsult</span> -
        <span class="text-cetro-black"> partener oficial al</span>
        <span class="text-cetro-green">cetatenieromana.md</span>
      </h2>

      <div
        class="border rounded shadow-sm"
        v-for="(item, id) in contacts.items"
        v-bind:key="id"
      >
        <button
          @click="changeTab(id)"
          type="button"
          :aria-label="item.title"
          :title="item.title"
          class="
            flex
            items-center
            justify-between
            w-full
            p-4
            focus:outline-none
          "
        >
          <p class="text-xl font-bold text-just-red uppercase">
            <fa
              icon="fa-solid fa-circle-chevron-right"
              v-if="selectedElement === id"
            />
            {{ item.title }}
          </p>
          <div
            class="flex items-center justify-center w-8 h-8 border rounded-full"
          >
            <!-- Add "transform rotate-180" classes on svg, if is open" -->
            <svg
              viewBox="0 0 24 24"
              class="w-3 text-gray-600 transition-transform duration-500"
              v-bind:class="
                selectedElement === id ? 'transform rotate-180' : ''
              "
            >
              <polyline
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-miterlimit="10"
                points="2,7 12,17 22,7"
                stroke-linejoin="round"
              ></polyline>
            </svg>
          </div>
        </button>

        <transition
          enter-active-class="duration-600 delay-100 ease-out   "
          enter-class="-translate-x-full opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="duration-600 ease-in "
          leave-class="translate-x-0 opacity-100"
          leave-to-class="-translate-x-full opacity-0 "
        >
          <div
            class="p-4 pt-0 transition duration-300 ease-in-out"
            v-show="selectedElement === id"
          >
            <div class="lg:flex">
              <div class="flex-1 pl-2 pb-4">
                <div v-for="(line, lineID) in item.lines" v-bind:key="lineID">
                  <h3 class="text-cetro-black font-bold text-2xl pt-4">
                    {{ line.label }}:
                  </h3>
                  <a
                    :href="line.href"
                    target="_blank"
                    class="
                      text-just-red text-xl
                      font-bold
                      group
                    "
                    v-if="line.href"
                    >{{ line.value }}
                  </a>

                  <p
                    v-else
                    class="text-xl font-semibold"
                    v-html="line.value"
                  ></p>
                </div>
              </div>
              <div class="flex-1">
                <iframe
                  id="chisinau"
                  height="350"
                  frameborder="0"
                  style="border: 0px; display: block"
                  allowfullscreen=""
                  :data-src="item.map"
                  class="w-full aspect-video hover:aspect-square"
                  :src="item.map"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'ContactsPage',
  mixins: [uploadContent],
  computed: {
    contacts: function () {
      if (!this.content.contactsPage) return {}
      return this.content.contactsPage
    },
  },
  data: function () {
    return {
      selectedElement: 0,
    }
  },
  methods: {
    changeTab: function (id) {
      this.selectedElement = id
    },
  },
}
</script>

<style scoped></style>
