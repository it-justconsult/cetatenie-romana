<template>
  <!--  <section class="search-dossier flex justify-center items-center mt-3">
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
</template>
<script>
export default {
  name: 'SearchDossier',
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


section.search-dossier {
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //margin-top: 40px; /*TODO: delete*/;
}

.dossier-block {
  //margin-left: 24px;
}

.dossier_number {

}

.input-block {
  //background-color: #ecb1b1;
}

.get-info-block {
  //background-color: #424242;
  //font-size: 22px;
  //color: #fff;
  //text-align: center;
}

.get-info-block .questions {

}

.get-info-block .get-info-button {
  //color: #000;
  //font-size: 22px;
  //border-radius: 2px;
  //background: #72BB5D;
}

.get-info-image {
  //min-width: 140px;
  //min-height: 140px;
}

.order-block {
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  //margin-left: 49px;
  //background-color: #424242;
  //font-size: 22px;
  //color: #fff;
  //text-align: center;
}

.text-block {
}

.subscribe-block {
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: space-between;
}

.subscribe-button {
  //padding: 5px;
  //color: #000;
  //font-size: 22px;
  //border-radius: 2px;
  //background: #72BB5D;
}

.subscribe-block__item {
  //margin-top: 12px;
}

input.subscribe-block__item {
  //color: #000;
}

input.subscribe-block__item::placeholder {
  //color: #000;
  //font-weight: normal;
}
</style>
