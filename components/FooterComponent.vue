<template>
  <div class="main-footer">
    <div class="terms-and-conditions">
      <div class="terms"><span>Termeni și condiții</span></div>
      <div class="conditions">Confidențialitate</div>
    </div>
    <hr class="delimiter">
    <div class="footer-menu">
      <div class="first-column">
        <a href="#" class="footer-menu__item active">Verificare online</a>
        <a href="#" class="footer-menu__item" >Ordine ANC</a>
        <a href="#"  class="footer-menu__item">Stadiu dosar</a>
        <a href="#"  class="footer-menu__item">Depunere jurământ</a>
        <a href="#"  class="footer-menu__item">Cetățenie română</a>
      </div>
      <div class="second-column">
        <a href="#" class="footer-menu__item active">Acte</a>
        <a href="#" class="footer-menu__item" >Ordine ANC</a>
        <a href="#"  class="footer-menu__item">Stadiu dosar</a>
        <a href="#"  class="footer-menu__item">Depunere jurământ</a>
        <a href="#"  class="footer-menu__item">Cetățenie română</a>
      </div>
      <div class="third-column">
        <a href="#" class="footer-menu__item">Acte</a>
        <a href="#" class="footer-menu__item" >Ordine ANC</a>
        <a href="#"  class="footer-menu__item">Stadiu dosar</a>
        <a href="#"  class="footer-menu__item">Depunere jurământ</a>
        <a href="#"  class="footer-menu__item">Cetățenie română</a>
      </div>
      <div class="questions">
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

<style>
.main-footer {
  background-color: #424242;
  min-height: 320px;
}

.terms-and-conditions {
  display: flex;
  color: #fff;
}
.terms {
  margin-right: 30px;
}
hr.delimiter {
  margin-top: 12px;
  height: 1px;
  border: none;
  background-color: #fff;
  color: #fff;
}

.footer-menu {
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.footer-menu div{
  display: flex;
  margin-right: 14px;
  flex-direction: column;
  justify-content: space-between;
}

.first-column {
}

.footer-menu__item {
}
.footer-menu__item.active {
  text-transform: uppercase;
}

.active {
}

.conditions {
}
.main-footer {
}


</style>
