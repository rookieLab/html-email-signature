<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M704 449.119c0-233.361-72.139-353.119-241.387-353.119-166.475 0-238.613 119.759-238.613 353.119 0 232.242 72.139 350.881 238.613 350.881 26.636 0 50.497-2.798 72.694-9.513v0c-34.405-68.273-74.914-137.107-153.711-137.107-14.983 0-29.965 2.239-43.838 8.954l-27.191-54.283c32.74-28.541 85.457-50.925 153.156-50.925 105.989 0 159.815 51.484 203.099 116.961 24.971-55.962 37.18-131.511 37.18-224.966v-0.001zM926.799 810.857h64.784c3.876 41.143-16.057 213.143-197.122 213.143-109.635 0-167.221-65.714-210.964-142.286v0c-35.991 10.286-74.751 15.429-113.511 15.429-221.484 0-437.986-182.286-437.986-447.429 0-267.429 217.055-449.714 437.986-449.714 225.36 0 439.647 181.143 439.647 449.714 0 149.714-67.553 271.429-165.56 349.714 31.561 49.143 64.231 81.714 109.635 81.714 49.834 0 69.768-39.429 73.090-70.286v0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'quora',
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
      default: '#a82400'
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