<template>
  <div>
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative z-50 flex items-center justify-between">
        <a
          :aria-label="logoName"
          :title="logoName"
          class="columns-2 items-center w-48"
          href="/"
        >
          <img :src="logoSrc" alt="Logo" class="logo-image" />
        </a>
        <ul class="menu-block hidden space-x-8 lg:flex">
          <li
            v-for="item in menu"
            :key="item.id"
            :class="item.submenu ? 'has-submenu' : 'no-submenu'"
            class="relative"
          >
            <nuxt-link
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cetro-green"
              exact
              active-class="active"
              :to="item.href"
              >{{ item.title }}</nuxt-link
            >
            <ul v-if="item.submenu" class="justify-end hidden lg:flex absolute">
              <li v-for="sublink in item.submenu" :key="sublink.id">
                <a
                  :aria-label="sublink.title"
                  :href="sublink.href"
                  :title="sublink.title"
                  class="subnav bg-white px-2 font-medium tracking-wide text-gray-700 transition-colors duration-200 hidden hover:text-cetro-green"
                  >{{ sublink.title }}</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Mobile menu -->
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            title="Open Menu"
            @click="changeMobileMenu"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                fill="currentColor"
              ></path>
              <path
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                fill="currentColor"
              ></path>
              <path
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <!-- Mobile menu dropdown -->
          <div v-if="isVisibleMobileMenu" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div></div>
                <div>
                  <button
                    aria-label="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    title="Close Menu"
                    @click="changeMobileMenu"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li v-for="item in content.menu" :key="item.id">
                    <a
                      :aria-label="item.title"
                      :href="item.href"
                      :title="item.title"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >{{ item.title }}</a
                    >
                    <ul
                      v-if="item.submenu"
                      class="px-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      <li v-for="sublink in item.submenu" :key="sublink.id">
                        <a
                          :aria-label="sublink.title"
                          :href="sublink.href"
                          :title="sublink.title"
                          class="subnav font-medium tracking-wide text-gray-700 transition-colors duration-200 lg:hidden hover:text-cetro-green"
                          >{{ sublink.title }}</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainHeader',
  props: {
    content: {
      type: Object,
      default: () => {
        return {}
      },
      required: false,
    },
  },
  data() {
    return {
      isVisibleMobileMenu: false,
    }
  },
  computed: {
    logoName(){
      return (this.content.logo || {}).name
    },
    logoSrc(){
      return (this.content.logo || {}).src
    },
    menu(){
      return (this.content || {}).menu
    }
  },
  methods: {
    changeMobileMenu() {
      this.isVisibleMobileMenu = !this.isVisibleMobileMenu
    },
  },
}
</script>
<style scoped>

.has-submenu:hover .subnav {
  display: flex;
  justify-content: flex-start;
}

.has-submenu:hover ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
