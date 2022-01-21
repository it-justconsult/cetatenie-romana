<template>
  <div class='main-footer bg-cetro-black'>
    <div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div class='terms-and-conditions font-medium flex lg:flex-row flex-col py-6 text-cetro-text-gray active:text-white'>
        <a v-for='menuItem in topMenuItems' :href='menuItem.href' :key='menuItem.id' class='terms mr-4'>{{menuItem.title}}</a>
      </div>
      <hr class='bg-cetro-gray border-cetro-text-gray delimiter h-[1px]'>
      <div class='footer-menu py-5 flex flex-col xl:flex-row lg:flex-row justify-between text-cetro-text-gray hover:text-gray font-medium'>
        <div class='first-column flex mr-1 flex-col justify-between mb-4 lg-mb-0'>
          <a  v-for='menuItem in firstBlockMenuItems' :href='menuItem.href' :key='menuItem.id' class='footer-menu__item'>{{menuItem.title}}</a>
        </div>
        <div class='second-column flex mr-1 flex-col justify-between mb-4 lg-mb-0'>
          <a v-for='menuItem in secondBlockMenuItems' :href='menuItem.href' :key='menuItem.id' class='footer-menu__item'>{{menuItem.title}}</a>
        </div>
        <div class='questions flex mr-1 flex-col justify-between mb-4 lg-mb-0'>
          <a v-for='menuItem in thirdBlockMenuItems' :href='menuItem.href' :key='menuItem.id' class='footer-menu__item'>{{menuItem.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import hasContentProps from '~/mixins/hasContentProps'

export default {
  mixins: [hasContentProps],
  computed: {
    topMenuItems () {
        return (this.content.footerMenu || {}).topMenu
    },
    firstBlockMenuItems () {
      return (this.content.footerMenu || {}).firstBlock
    },
    secondBlockMenuItems () {
      return (this.content.footerMenu || {}).secondBlock
    },
    thirdBlockMenuItems () {
      return (this.content.footerMenu || {}).thirdBlock

    }
  }
}

</script>
<style>
.footer-menu__item.active {
  text-transform: uppercase;
}
.main-footer a:hover, .main-footer a:active {
  color: white;
}

</style>
