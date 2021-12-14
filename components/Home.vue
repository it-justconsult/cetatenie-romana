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
        <section class="search-dossier">
          <div class="dossier-block">
            <form action="">
              <div class="input-block">
                <input class="dossier_number bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                       type="text" id="dossier_number"
                       placeholder="Numărul dosarului" name="dossier_number">
              </div>
              <div class="get-info-block">
                <p class="questions">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p class="questions">Lorem ipsum dolor sit amet.</p>
                <img class="get-info-image" src="" alt="Link to partners">
                <button class="get-info-button" type="submit">Află numărul dosarului</button>
              </div>
            </form>
          </div>
          <div class="order-block">
            <form action="">
              <div class="input-block">
               <input class="dossier_number bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                     type="text" placeholder="Numărul ordinului" name="order_number">
              </div>

              <div class="text-block">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div class="subscribe-block">
                <input class="subscribe-block__item" type="text" placeholder="Nume Prenume">
                <input class="subscribe-block__item" type="tel" placeholder="Număr de contact">
                <input class="subscribe-block__item" type="email" placeholder="Email">
                <button class="subscribe-block__item subscribe-button" type="submit">Abonează-te</button>
              </div>
            </form>
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
section.search-dossier {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;//TODO: delete;
  max-width: 80%;//TODO: delete
}

.dossier-block {
  margin-left: 24px;
}

.dossier_number {

}

.input-block {
  background-color: #ecb1b1;
}

.get-info-block {
  background-color: #424242;
  font-size: 22px;
  color: #fff;
  text-align: center;
}

.get-info-block .questions {

}

.get-info-block .get-info-button {
  color: #000;
  font-size: 22px;
  border-radius: 2px;
  background: #72BB5D;
}

.get-info-image {
  min-width: 140px;
  min-height: 140px;
}

.order-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 49px;
  background-color: #424242;
  font-size: 22px;
  color: #fff;
  text-align: center;
}

.text-block {
}

.subscribe-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.client-name {
}

.subscribe-button {
  color: #000;
  font-size: 22px;
  border-radius: 2px;
  background: #72BB5D;
}

.subscribe-block__item {
  margin-top: 12px;
}
input.subscribe-block__item{
  color: #000;
}
input.subscribe-block__item::placeholder{
  color: #000;
  font-weight: normal;

}
</style>

