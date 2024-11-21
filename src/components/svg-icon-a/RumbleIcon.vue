<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewbox="0 0 960 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M568.224 577.984c39.424-31.328 39.424-92.32 0-124.64-56.096-46.752-117.664-86.496-183.296-118.368-45.344-21.76-95.936 8.576-103.136 60.352-11.168 79.136-13.152 158.912-5.92 234.752 4.928 52.416 54.848 83.744 100.864 63.648 68.704-29.664 133.12-68.48 191.52-115.392v-0.32zM862.912 347.52c41.76 45.888 64.96 105.728 65.088 167.872s-22.848 122.080-64.416 168.096c-148.48 164.48-342.464 280.768-557.152 333.984-54.912 13.792-112.992 5.568-161.92-22.944s-84.896-75.040-100.224-129.696c-64.704-221.888-55.2-472.8 7.232-695.68 32.864-117.056 142.56-190.56 255.584-163.52 209.248 50.112 405.696 179.040 555.84 341.92z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'rumble',
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
      default: '#85c742'
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