<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M396.771 349.013l187.733-272.213c35.584-51.2 81.323-76.801 137.685-76.801 45.739 0 85.419 16.257 118.997 48.812 33.408 32.64 50.176 71.467 50.176 116.821 0 33.451-8.832 63.104-26.624 88.704l-169.259 246.144 207.061 262.528c20.651 26.112 31.019 56.747 31.019 91.733 0 46.336-16.256 86.101-48.853 119.381-32.512 33.237-71.936 49.877-118.229 49.877-50.731 0-89.472-16.512-116.096-49.493l-253.568-316.459v174.464c0 49.835-8.619 88.491-25.899 116.139-31.445 50.219-76.928 75.349-137.088 75.349-54.699 0-97.109-18.603-127.104-55.424-28.16-34.091-42.24-79.189-42.24-135.339v-646.997c0-53.12 14.336-97.024 42.837-131.541 29.781-36.437 71.168-54.699 123.989-54.699 50.304 0 92.16 18.261 125.696 54.699 18.688 20.267 30.507 40.661 35.456 61.44 2.987 12.8 4.48 36.608 4.48 71.68v161.195h-0.169z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'kickstarter',
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
      default: '#0f2105'
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