<template>
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
</template>
<script>
export default {
  name: 'CitizenshipSteps'
}
</script>
<style>


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
