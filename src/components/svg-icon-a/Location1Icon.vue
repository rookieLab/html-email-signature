<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M1018.366 67.964l-465.206 930.414c-7.996 15.991-23.987 25.441-41.432 25.441-3.634 0-7.268-0.726-10.903-1.454-21.079-5.088-35.617-23.261-35.617-45.067v-418.686h-418.686c-21.807 0-39.979-14.538-45.067-35.617s5.088-42.886 23.987-52.336l930.414-465.206c6.542-3.634 13.811-5.088 21.079-5.088 12.357 0 23.987 4.362 32.709 13.811 14.538 13.811 18.173 35.617 8.722 53.79z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'location-1',
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