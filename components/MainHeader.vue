<template>
  <header class="main-header flex justify-between">
    <div class="logo">
      <img alt="Logo" class="logo__image" src="~/assets/img/logo.png">
    </div>
    <div class="main-menu">
      <ul class="main-menu__items inline-flex justify-end">
        <li v-for="item in content.menu" :key="item.id" class="main-menu__item pl-6">{{ item.title }}</li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MainHeader',
  props: {
    content: {
      type: Object, default: () => {
        return {}
      }, required: false
    }
  }
}
</script>
<style>
.logo {
  max-width: 220px;
}

.main-header {
//display: flex; //justify-content: space-between;
}

.main-menu .main-menu__item {
//padding-left: 38px;
}

.main-menu__items {
//display: inline-flex; //justify-content: flex-end;
}
</style>
