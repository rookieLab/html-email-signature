<template>
  <!-- shape: {{ shape }} color: {{ color }} background: {{ background }} -->
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M534.613 0.853C590.506 0 645.972 0.427 701.438 0c3.413 65.28 26.88 131.838 74.665 177.918 47.786 47.36 115.199 69.119 180.905 76.372v171.945c-61.44-2.134-123.305-14.933-179.198-41.386-24.32-11.094-46.933-25.173-69.12-39.68-0.426 124.585 0.428 249.17-0.852 373.329-3.414 59.732-23.04 119.038-57.6 168.104-55.892 81.92-152.744 135.252-252.157 136.959-61.012 3.413-122.025-13.227-174.077-43.947C137.818 928.842 77.232 835.83 68.272 735.991c-0.853-21.333-1.28-42.666-0.426-63.573 7.68-81.065 47.786-158.718 110.078-211.624 70.826-61.439 169.811-90.879 262.397-73.386 0.853 63.146-1.707 126.292-1.707 189.438-42.24-13.653-91.732-9.813-128.851 15.787-26.88 17.493-47.36 44.372-58.026 74.665-8.96 21.76-6.4 45.653-5.974 68.693 10.24 69.972 77.653 128.852 149.332 122.452 47.786-0.427 93.439-28.16 118.185-68.693 8.107-14.08 17.066-28.586 17.493-45.226 4.267-76.372 2.56-152.318 2.987-228.69 0.426-171.945-0.427-343.463 0.853-514.98z"
        :fill="color"></path>
    </svg>

  </a>
</template>

<script>
export default {
  name: 'tiktok',
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
      default: '#000'
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