<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512v0-469.444c0.081-23.469 19.087-42.475 42.556-42.556v0zM519.081 152.967c-196.253-1.88-356.872 155.687-358.758 351.94-1.103 94.31 35.408 185.174 101.458 252.5s156.2 105.568 250.514 106.269c196.253 1.868 356.863-155.709 358.737-351.962s-155.698-356.868-351.951-358.748zM518.058 249.72c143.819 1.381 259.307 119.052 257.995 262.871-1.393 143.763-119.049 259.186-262.813 257.825s-259.212-118.992-257.882-262.756c1.33-143.764 118.936-259.238 262.7-257.94zM516.732 378.285c-72.79-0.652-132.326 57.826-132.98 130.616s57.823 132.328 130.612 132.983c72.762 0.574 132.256-57.862 132.987-130.623 0.65-72.79-57.83-132.325-130.619-132.976z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'issuu',
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
      default: '#f36d5d'
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