<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M511.5 0c-247.226 0-447.563 200.337-447.563 447.563 0 234.438 213.125 426.251 447.563 426.251v149.187c270.669-132.138 447.563-349.526 447.563-575.438 0-247.226-200.337-447.563-447.563-447.563zM490.188 511.5c0 59.675-38.363 106.563-85.25 106.563v-106.563h-106.563v-191.813h191.813v191.813zM745.939 511.5c0 59.675-38.363 106.563-85.25 106.563v-106.563h-106.563v-191.813h191.813v191.813z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'google-hangouts',
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
      default: '#0f9d58'
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