<!-- Please remove this file from your project -->
<template>
  <div class="container mx-auto">
    <div class="wrapper ">
      <header class="main-header">
        <div class="logo">
          <img src="~/assets/img/logo.png" alt="Logo" class="logo__image">
        </div>
        <div class="main-menu">
          <ul class="main-menu__items">
            <li class="main-menu__item">Principală</li>
            <li class="main-menu__item">Acte românești</li>
            <li class="main-menu__item">Noutăți</li>
            <li class="main-menu__item">Contacte</li>
          </ul>
        </div>
      </header>
      <main>
        <section class="hero">
          <div class="hero-block">
            <h1 class="hero-block__message">
              Lorem ipsum dolor sit amet.
            </h1>
            <h5 class="hero-block__subtitle">Lorem ipsum dolor sit amet, consectetur.</h5>
            <button class="btn btn-blue">
              Button
            </button>
          </div>
          <div class="hero-image">
            <div class="hero-image__image">
              <img src="~/assets/media/hero-image.png" alt="Promo image">
            </div>
          </div>
        </section>
        <section class="citizenship-steps">
          <h2 class="citizenship-steps__title">
            Etapele
          </h2>
          <h3 class="citizenship-steps__subtitle">
            Text
          </h3>
          <div class="citizenship-steps-wrapper">
            <div class="citizenship-steps__step">
              <h3 class="title">Etapa 1</h3>
              <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus!</p>
            </div>
            <div class="citizenship-steps__step">
              <h3 class="title">Etapa 2</h3>
              <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas?</p>
            </div>
            <div class="citizenship-steps__step">
              <h3 class="title">Etapa 3</h3>
              <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus!</p>
            </div>
            <div class="citizenship-steps__step">
              <h3 class="title">Etapa 4</h3>
              <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data: () => ({
    posts: [],
    ip: null
  }),
  async mounted () {
    await this.fetchSomething()
    console.log(this.ip)
  },
  methods:{
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      const data = await this.$axios.$get('http://localhost/api/collections/get/menu?token=af7d2f20a484eddc8ad3e612cd9527')
      this.ip = ip
      console.log(data)
    },
  },
}
</script>
<style>
.logo {
  max-width: 220px;
}
.main-header {
  display: flex;
  justify-content: space-between;
}

.main-menu .main-menu__item{
  padding-left: 38px;
}
.main-menu__items {
  display: inline-flex;
  justify-content: flex-end;
}
//TODO: delete on deploy
.container {
  outline: 5px dashed red;
}

.hero {
  display: flex;
  justify-content: flex-end;
}
.hero-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

h1.hero-block__message {
  font-size: 60px;
  font-weight: bold;
}

.hero-block__subtitle {
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
}


section.citizenship-steps {
  background-color: #72BB5D;
}
.citizenship-steps__title {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
}

.citizenship-steps__subtitle {
  text-align: center;
}

.citizenship-steps-wrapper {
  text-align: center;
  padding: 8px;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
}

.citizenship-steps__step {
  background-color: #fff;
  margin-right: 120px;
}
.citizenship-steps__step:last-child {
  margin-right: 0;
}

.citizenship-steps__step .title {
  font-size: 24px;
  font-weight: bold;
}
.citizenship-steps__step .text {

}
</style>

