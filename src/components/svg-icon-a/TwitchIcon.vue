<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M97.467 0l-65.467 178.091v712.277h239.935v133.632h130.995l130.864-133.632h196.351l261.855-267.018v-623.35h-894.533zM184.688 88.989h720.055v489.748l-152.771 155.849h-239.972l-130.827 133.448v-133.448h-196.485v-645.598zM424.719 534.274h87.281v-267.1h-87.281v267.1zM664.707 534.274h87.264v-267.1h-87.264v267.1z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'twitch',
  props: {
    url: {
      type: String,
      required: true
    },
    shape: {
      type: String,
      default: 'rounded'
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    background: {
      type: String,
      default: '#5a3e85'
    }
  },
  data() {
    return {
      shapeMap: {
        'circle': '50%',
        'rounded': '15%',
        'square': '0%'
      }
    }
  }
};
</script>

<style scoped></style>