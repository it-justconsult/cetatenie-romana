<template>
  <section class="search-dossier">
    <div class="dossier-block">
      <form action="">
        <div class="input-block">
          <input
            id="dossier_number"
            class="dossier_number bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="dossier_number"
            placeholder="Numărul dosarului" type="text">
        </div>
        <div class="get-info-block">
          <p class="questions">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p class="questions">Lorem ipsum dolor sit amet.</p>
          <img alt="Link to partners" class="get-info-image" src="">
          <button class="get-info-button" type="submit">Află numărul dosarului</button>
        </div>
      </form>
    </div>
    <div class="order-block">
      <form action="">
        <div class="input-block">
          <input
            class="dossier_number bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="order_number" placeholder="Numărul ordinului" type="text">
        </div>

        <div class="text-block">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="subscribe-block">
          <input class="subscribe-block__item" placeholder="Nume Prenume" type="text">
          <input class="subscribe-block__item" placeholder="Număr de contact" type="tel">
          <input class="subscribe-block__item" placeholder="Email" type="email">
          <button class="subscribe-block__item subscribe-button" type="submit">Abonează-te</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SearchDossier'
}
</script>
<style>


section.search-dossier {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px; /*TODO: delete*/;
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

.subscribe-button {
  padding: 5px;
  color: #000;
  font-size: 22px;
  border-radius: 2px;
  background: #72BB5D;
}

.subscribe-block__item {
  margin-top: 12px;
}

input.subscribe-block__item {
  color: #000;
}

input.subscribe-block__item::placeholder {
  color: #000;
  font-weight: normal;
}

.partners-wrapper__image img {
  width: auto;
  min-height: 100%;
  object-fit: fill; /*TODO: contain?*/
}
</style>
