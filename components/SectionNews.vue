<template>
  <section class="news mt-1.7 text-center bg-cetro-green">
    <h2 class="news__last-news text-3xl text-white uppercase font-bold">{{ content.newsBlock.title }}</h2>
    <div class="news-wrapper flex justify-between">
      <div class="article bg-cetro-white text-center m-2" v-for="article in content.newsBlock.lastNews" :key=article.id>
        <div class="article article__image block">
          image <!--TODO: delete-->
          <img alt="" src="">
        </div>
        <div class="article article__title text-2xl font-bold">
          <h3>{{ article.title }}</h3>
        </div>
        <div class="article article__description text-lg">
          <p>{{ article.text }}</p>
        </div>
      </div>
    </div>
    <div class="more-news">
      <a href="#" class="more-news__button p-1 m-3 bg-cetro-black text-lg text-white text-center rounded">{{ content.newsBlock.buttonTitle }}</a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionNews',
  props: {
    content: {
      type: Object, default: () => {
        return {}
      },
      required: false
    }
  }
}
</script>
<style>


.news {
  //margin-top: 24px; /* delete*/
  //text-align: center;
  //background-color: #72BB5D;
}

.news-wrapper {
  //display: flex;
  //justify-content: space-between;
}

.article {
  //background-color: #fff;
  //text-align: center;
  //margin: 4px;
}

.article__image {
  //display: block;
}

.article__title {
  //font-size: 22px;
  //font-weight: bold;
}

.article__description {
  //font-size: 18px;
}

.news__last-news {
  //font-size: 32px;
  //color: #fff;
  //text-transform: uppercase;
  //font-weight: bold;
}

.more-news {
}

.more-news .more-news__button {
  //padding: 5px;
  //margin: 14px;
  //background-color: #424242;
  //font-size: 1.2rem;
  //color: #fff;
}
</style>
