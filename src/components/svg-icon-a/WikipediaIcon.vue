<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M664.001 863.813l-131.11-314.206c-51.999 103.529-109.333 211.581-158.667 314.206-0.444 0.452-24 0-24-0.452-75.111-178.578-153.777-355.797-228.889-534.828-18.223-43.402-79.111-113.928-120.89-113.477 0-4.973-0.444-16.275-0.444-23.057h259.111v22.604c-30.667 1.809-84.444 21.7-69.333 55.608 35.111 80.925 165.778 391.062 200.888 469.726 24-48.374 92.444-177.673 120.445-232.377-22.222-46.113-93.777-217.911-116.444-260.406-15.556-28.933-57.779-31.647-89.334-32.098v-22.604l228 0.452v21.248c-31.111 0.905-60.889 12.658-47.111 42.497 30.222 65.102 48.889 110.763 76.888 170.441 8.89-17.632 55.556-113.024 76.888-164.11 14.222-33.456-6.222-46.565-61.778-47.922 0.444-5.877 0-16.728 0.444-22.152 71.112-0.452 177.777-0.452 196.889-0.906v22.154c-35.999 1.356-73.334 20.796-92.889 51.539l-94.666 199.825c10.223 26.222 101.333 232.377 110.667 254.981l196-459.779c-13.777-37.524-58.223-45.661-75.555-46.113v-22.607l204.444 1.812 0.444 0.905-0.444 19.892c-44.888 1.356-72 25.769-89.334 65.554-40.001 94.035-165.333 390.609-248.444 583.654l-21.777-0.004z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'wikipedia',
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