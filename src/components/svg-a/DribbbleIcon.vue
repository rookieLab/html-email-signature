<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M512 1024c-282.4 0-512-229.6-512-512s229.6-512 512-512c282.4 0 512 229.6 512 512s-229.6 512-512 512v0zM943.8 582c-15-4.8-135.4-40.6-272.4-18.6 57.2 157.2 80.4 285.2 85 311.8 98-66.4 168-171.4 187.4-293.2v0zM682.8 915.2c-6.6-38.4-31.8-172-93.2-331.6-1 0.4-2 0.6-2.8 1-246.8 86-335.4 257-343.2 273 74.2 57.8 167.4 92.4 268.4 92.4 60.6 0 118.4-12.4 170.8-34.8v0zM187 805c10-17 130-215.6 355.4-288.6 5.6-1.8 11.4-3.6 17.2-5.2-11-24.8-23-49.8-35.4-74.2-218.2 65.4-430.2 62.6-449.4 62.4-0.2 4.4-0.2 8.8-0.2 13.4 0 112.2 42.6 214.8 112.4 292.2v0zM84 423c19.6 0.2 199.8 1 404.4-53.2-72.4-128.8-150.6-237.2-162.2-253-122.4 57.8-214 170.6-242.2 306.2v0zM409.6 87.4c12 16.2 91.6 124.4 163.2 256 155.6-58.2 221.4-146.8 229.2-158-77.2-68.6-178.8-110.2-290-110.2-35.2 0.2-69.6 4.4-102.4 12.2v0zM850.6 236.2c-9.2 12.4-82.6 106.4-244.2 172.4 10.2 20.8 20 42 29 63.4 3.2 7.6 6.4 15 9.4 22.6 145.6-18.2 290.2 11 304.6 14-1-103.2-38-198-98.8-272.4v0 0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'dribbble',
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
      default: '#ea4c89'
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