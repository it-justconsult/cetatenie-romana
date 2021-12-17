<template>
  <header class="main-header flex justify-between">
    <div class="logo">
      <img src="~/assets/img/logo.png" alt="Logo" class="logo__image">
    </div>
    <div class="main-menu">
      <ul class="main-menu__items inline-flex justify-end">
        <li class="main-menu__item pl-6">Principală</li>
        <li class="main-menu__item pl-6">Acte românești</li>
        <li class="main-menu__item pl-6">Noutăți</li>
        <li class="main-menu__item pl-6">Contacte</li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MainHeader',
  props: {
    menu: { type: Object, default: null, required: false }
  }
}
</script>
<style>
.logo {
  max-width: 220px;
}

.main-header {
  //display: flex;
  //justify-content: space-between;
}

.main-menu .main-menu__item {
  //padding-left: 38px;
}

.main-menu__items {
  //display: inline-flex;
  //justify-content: flex-end;
}
</style>
