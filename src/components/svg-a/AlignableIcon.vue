<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M801.431 163.944c77.141 59.332 151.33 184.273 222.569 374.821 0-8.843 0-17.4 0-26.528 0.439-166.731-80.639-323.187-217.209-419.144s-311.446-119.342-468.493-62.647c82.855 281.829 162.663 442.045 239.424 480.65 40.856 18.827 85.712 3.138 131.712-47.067l75.141 178.282c-65.798 63.873-161.736 85.867-248.852 57.050-131.712-42.788-252.28-234.477-354.564-577.065-108.614 91.764-174.055 224.535-180.614 366.44s46.356 280.129 146.043 381.491l124.283-354.568c27.446 69.876 72.761 131.347 131.426 178.282l-98.284 285.252c216.008 96.95 470.442 32.676 614.273-155.177-21.142-61.9-49.142-145.764-83.998-253.018-57.142-171.151-121.997-253.304-178.568-272.13-38.094-12.551-77.141 9.318-117.14 65.608l-75.427-186.27c125.521-84.435 238.281-89.189 338.279-14.263z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'alignable',
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
      default: '#412c5c'
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