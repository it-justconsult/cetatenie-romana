<template>
  <div class="main-footer bg-cetro-black">
    <div class="terms-and-conditions flex text-white">
      <div class="terms mr-4"><span>Termeni și condiții</span></div>
      <div class="conditions">Confidențialitate</div>
    </div>
    <hr class="delimiter mt-3 h-[1px] text-white">
    <div class="footer-menu flex justify-between text-white">
      <div class="first-column flex mr-1 flex-col justify-between">
        <a href="#" class="footer-menu__item active">Verificare online</a>
        <a href="#" class="footer-menu__item" >Ordine ANC</a>
        <a href="#"  class="footer-menu__item">Stadiu dosar</a>
        <a href="#"  class="footer-menu__item">Depunere jurământ</a>
        <a href="#"  class="footer-menu__item">Cetățenie română</a>
      </div>
      <div class="second-column flex mr-1 flex-col justify-between">
        <a href="#" class="footer-menu__item active">Acte</a>
        <a href="#" class="footer-menu__item" >Ordine ANC</a>
        <a href="#"  class="footer-menu__item">Stadiu dosar</a>
        <a href="#"  class="footer-menu__item">Depunere jurământ</a>
        <a href="#"  class="footer-menu__item">Cetățenie română</a>
      </div>
      <div class="third-column flex mr-1 flex-col justify-between">
        <a href="#" class="footer-menu__item">Acte</a>
        <a href="#" class="footer-menu__item" >Ordine ANC</a>
        <a href="#"  class="footer-menu__item">Stadiu dosar</a>
        <a href="#"  class="footer-menu__item">Depunere jurământ</a>
        <a href="#"  class="footer-menu__item">Cetățenie română</a>
      </div>
      <div class="questions flex mr-1 flex-col justify-between">
        <a href="#" class="footer-menu__item">întrebări frecvente

</a>
        <a href="#" class="footer-menu__item" >Ordine ANC</a>
        <a href="#"  class="footer-menu__item">Stadiu dosar</a>
        <a href="#"  class="footer-menu__item">Depunere jurământ</a>
        <a href="#"  class="footer-menu__item">Cetățenie română</a>
      </div>
    </div>
  </div>
</template>


<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  mixins: [uploadContent]
}

</script>
<style>
.footer-menu__item.active {
  text-transform: uppercase;
}

</style>
