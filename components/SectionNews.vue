<template>
  <section class="news">
    <h2 class="news__last-news">Ultimele știri</h2>
    <div class="news-wrapper">
      <div class="article">
        <div class="article article__image">
          image <!--TODO: delete-->
          <img alt="" src="">
        </div>
        <div class="article article__title">
          <h3>Title</h3>
        </div>
        <div class="article article__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque consectetur consequuntur
            corporis, ducimus eligendi est labore mollitia, perferendis saepe ullam?</p>
        </div>
      </div>
      <div class="article">
        <div class="article article__image">
          image <!--TODO: delete-->

          <img alt="" src="">
        </div>
        <div class="article article__title">
          <h3>Title</h3>
        </div>
        <div class="article article__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque consectetur consequuntur
            corporis, ducimus eligendi est labore mollitia, perferendis saepe ullam?</p>
        </div>
      </div>
      <div class="article ">
        <div class="article article__image">
          image <!--TODO: delete-->

          <img alt="" src="">
        </div>
        <div class="article article__title">
          <h3>Title</h3>
        </div>
        <div class="article article__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque consectetur consequuntur
            corporis, ducimus eligendi est labore mollitia, perferendis saepe ullam?</p>
        </div>
      </div>
      <div class="article">
        <div class="article article__image">
          image <!--TODO: delete-->

          <img alt="" src="">
        </div>
        <div class="article article__title">
          <h3>Title</h3>
        </div>
        <div class="article article__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque consectetur consequuntur
            corporis, ducimus eligendi est labore mollitia, perferendis saepe ullam?</p>
        </div>
      </div>
    </div>
    <div class="more-news">
      <a href="#" class="more-news__button text-center rounded">Vezi mai multe știri</a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionNews'
}
</script>
<style>


.news {
  margin-top: 24px; /* delete*/
  text-align: center;
  background-color: #72BB5D;
}

.news-wrapper {
  display: flex;
  justify-content: space-between;
}

.article {
  background-color: #fff;
  text-align: center;
  margin: 4px;
}

.article__image {
  display: block;
}

.article__title {
  font-size: 22px;
  font-weight: bold;
}

.article__description {
  font-size: 18px;
}

.news__last-news {
  font-size: 32px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}

.more-news {
}

.more-news .more-news__button {
  padding: 5px;
  margin: 14px;
  background-color: #424242;
  font-size: 1.2rem;
  color: #fff;
}

.partners-wrapper__image img {
  width: auto;
  min-height: 100%;
  object-fit: fill;
}
</style>
