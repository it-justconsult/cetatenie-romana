<template>
  <div>
    <div
      class="
        px-4
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        py-8
        lg:py-2
      "
    >
      <div class="relative z-50 flex items-center justify-between ">
        <nuxt-link
          :aria-label="logoName"
          :title="logoName"
          class="columns-2 items-center w-48"
          to="/"
        >
          <img src="~/assets/img/logo.png" alt="Logo" class="logo-image" />
        </nuxt-link>

        <ul class="menu-block hidden space-x-8 lg:flex justify-between">
          <li
            v-for="item in menu"
            :key="item.id"
            class="static py-2 group inline-flex"
          >
            <nuxt-link
              class="
                font-medium
                tracking-wide
                text-gray-700
                transition-colors
                duration-200
                hover:text-cetro-green
                uppercase
                py-6
                group-hover:text-cetro-green
                 font-tungsten text-2xl
              "
              :to="item.href"
              >{{ item.title }}
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

            <div
              v-if="item.submenu"
              class="
                group-hover:transition-all group-hover:ease-in-out
                absolute
                flex
                invisible
                opacity-0
                duration-700
                group-hover:visible group-hover:opacity-100
                h-80
                submenu
                mt-20
              "
            >
              <div
                class="flex-1 py-5 px-5 bg-cetro-green rounded-bl-md shadow-lg"
              >
                <ul>
                  <li
                    v-for="(link, id) in item.submenu.slice(0, 10)"
                    v-bind:key="id"
                    class="flex flex-row"
                  >
                    <nuxt-link
                      exact
                      :to="link.href"
                      class="
                        text-white
                        font-bold
                        uppercase
                        w-full
                        antialiased
                        py-2
                        px-2
                        hover:text-cetro-black
                        tracking-wider
                        text-2xl
                        font-tungsten
                      "
                    >
                      {{ link.title }}
                    </nuxt-link>
                  </li>
                </ul>
                <div class="flex mt-2 text-center">
                  <nuxt-link
                    class="
                      text-white
                      font-semibold
                      mx-auto
                      hover:text-cetro-black
                      pr-12
                      font-montserrat
                    "
                    :to="item.href"
                    v-if="item.submenu.length > 10"
                    >Mai multe...</nuxt-link
                  >
                </div>
              </div>
              <div
                class="
                  flex-1
                  px-5
                  bg-white
                  rounded-br-md
                  text-cetro-green text-md
                  subpixel-antialiased
                  py-5
                "
              >
                <div class="py-4 px-4">
                  <p class=" font-semibold text-lg">
                    Salutare! <br/>Știm că ești pierdut în avalanșa de informații și
                    ai nevoie de ajutor. Aici vei afla multe lucruri utile ție.
                    Sperăm că astfel vei vedea „lumina din capătul tunelului” în
                    drumul spre redobândirea cetățeniei române. <br/>Și da, la moment
                    ar putea să-ți pară complicat, dar cu certitudine te vei
                    descurca. <br/> Succes! Iar dacă ai nevoie de ajutor, scrie-ne
                    chiar acum și vei fi ghidat.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            class="
              p-2
              -mr-1
              transition
              duration-200
              rounded
              focus:outline-none focus:shadow-outline
              hover:bg-deep-purple-50
              focus:bg-deep-purple-50
            "
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
                    class="
                      p-2
                      -mt-2
                      -mr-2
                      transition
                      duration-200
                      rounded
                      hover:bg-gray-200
                      focus:bg-gray-200 focus:outline-none focus:shadow-outline
                    "
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
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >{{ item.title }}</a
                    >
                    <ul
                      v-if="item.submenu"
                      class="
                        px-3
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                    >
                      <li v-for="sublink in item.submenu" :key="sublink.id">
                        <nuxt-link
                          :aria-label="sublink.title"
                          :to="sublink.href"
                          :title="sublink.title"
                          class="
                            subnav
                            font-medium
                            tracking-wide
                            text-gray-700
                            transition-colors
                            duration-200
                            lg:hidden
                            hover:text-cetro-green
                          "
                          >{{ sublink.title }}</nuxt-link>
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
      navHovered: false,
      isVisibleMobileMenu: false,
    }
  },
  computed: {
    logoName() {
      return (this.content.logo || {}).name
    },
    logoSrc() {
      return (this.content.logo || {}).src
    },
    menu() {
      return (this.content || {}).menu
    },
  },
  methods: {
    changeMobileMenu() {
      this.isVisibleMobileMenu = !this.isVisibleMobileMenu
    },
    hoverToggle(item) {
      if (item.submenu) {
        this.navHovered = !this.navHovered
      }
      console.log(item)
    },
  },
}
</script>
<style scoped>
.submenu {
  width: 100%;
  left: 0;
}

.submenu ul {
  columns: 2;
}
</style>
