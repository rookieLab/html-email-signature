<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M1021.082 142.656l-154.528 733.189c-11.658 51.746-42.061 64.626-85.265 40.247l-235.45-174.558-113.61 109.932c-12.573 12.649-23.088 23.228-47.319 23.228l16.916-241.253 436.382-396.723c18.973-17.019-4.115-26.448-29.488-9.429l-539.477 341.756-232.249-73.135c-50.519-15.869-51.433-50.826 10.515-75.205l908.424-352.106c42.061-15.869 78.864 9.429 65.149 74.055z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'telegram',
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
      default: '#08c'
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