<template>
  <section class="citizenship-steps bg-cetro-green">
    <h2 class="citizenship-steps__title font-bold text-4xl text-center">
      {{ content.citizenshipSteps.title }}
    </h2>
    <h3 class="citizenship-steps__subtitle text-center">
      {{ content.citizenshipSteps.subtitle }}
    </h3>
    <div class="citizenship-steps-wrapper text-center p-2 flex flex-auto justify-between">
      <div class="citizenship-steps__step bg-cetro-white mr-8 last:mr-0" v-for="step in content.citizenshipSteps.steps" :key="step.stepstepTitle">
        <h3 class="title text-2xl font-bold">{{ step.stepTitle }}</h3>
        <p class="text">{{ step.stepText }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CitizenshipSteps',
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


section.citizenship-steps {
  //background-color: #72BB5D;
}

.citizenship-steps__title {
  //text-align: center;
  //font-size: 36px;
  //font-weight: bold;
}

.citizenship-steps__subtitle {
  //text-align: center;
}

.citizenship-steps-wrapper {
  //text-align: center;
  //padding: 8px;
  //display: flex;
  //flex: 1 1 auto;
  //justify-content: space-between;
}

.citizenship-steps__step {
  //background-color: #fff;
  //margin-right: 120px;
}

.citizenship-steps__step:last-child {
  //margin-right: 0;
}

.citizenship-steps__step .title {
  //font-size: 24px;
  //font-weight: bold;
}

.citizenship-steps__step .text {

}
</style>
