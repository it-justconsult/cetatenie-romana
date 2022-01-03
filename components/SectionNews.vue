<template>
  <div>
    <!--    <section class='news mt-1.7 text-center bg-cetro-green'>
          <h2 class='news__last-news text-3xl text-white uppercase font-bold'>{{ content.newsBlock.title }}</h2>
          <div class='news-wrapper flex justify-between'>
            <div
    v-for='article in content.newsBlock.lastNews' :key=article.id
                 class='article bg-cetro-white text-center m-2'>
              <div class='article article__image block'>
                image &lt;!&ndash;TODO: delete&ndash;&gt;
                <img alt='' src=''>
              </div>
              <div class='article article__title text-2xl font-bold'>
                <h3>{{ article.title }}</h3>
              </div>
              <div class='article article__description text-lg'>
                <p>{{ article.text }}</p>
              </div>
            </div>
          </div>
          <div class='more-news'>
            <a
    class='more-news__button p-1 m-3 bg-cetro-black text-lg text-white text-center rounded'
               href='#'>{{ content.newsBlock.buttonTitle
              }}</a>
          </div>
        </section>-->
    <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div class='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2
          class='uppercase max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          {{ content.newsBlock.title }}
        </h2>
      </div>
      <div class='grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div
v-for='article in content.newsBlock.lastNews' :key='article.id'
             class='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm'>
          <img
            :src='article.image'
            alt='' class='object-cover w-full h-64' />
          <div class='p-5 border border-t-0'>
            <p class='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <span class='text-gray-600'>{{ article.created_at }}</span>
            </p>
            <a
              aria-label='Category'
              class='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
              href='/'
              title='Visit the East'>{{ article.title }}</a>
            <p class='mb-2 text-gray-700'>
              {{ article.text }}
            </p>
            <a
              aria-label=''
              class='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
              href='/'>Learn
              more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
//margin-top: 24px; /* delete*/ //text-align: center; //background-color: #72BB5D;
}

.news-wrapper {
//display: flex; //justify-content: space-between;
}

.article {
//background-color: #fff; //text-align: center; //margin: 4px;
}

.article__image {
//display: block;
}

.article__title {
//font-size: 22px; //font-weight: bold;
}

.article__description {
//font-size: 18px;
}

.news__last-news {
//font-size: 32px; //color: #fff; //text-transform: uppercase; //font-weight: bold;
}

.more-news {
}

.more-news .more-news__button {
//padding: 5px; //margin: 14px; //background-color: #424242; //font-size: 1.2rem; //color: #fff;
}
</style>
