<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M1012.799 640.257c7.142-6.586 11.201-15.758 11.201-25.357 0-9.633-4.686-18.282-11.102-24.618l-289.157-282.679-87.265 85.307 227.633 222.526h-322.464c-15.767-0.46-28.26-5.63-38.837-15.638l-144.704-141.5c-15.628-14.481-36.322-22.583-57.855-22.649h-176.829v-58.998h182.917c34.689-0.003 67.928 13.601 92.269 37.762l107.948 105.515 87.265-85.307-110.039-107.538c-47.278-45.783-111.213-71.349-177.76-71.084h-306.019v300.321h258.817c16.181 0.093 31.658 6.483 43.008 17.757l141.726 138.567c14.859 14.293 34.657 22.626 55.49 23.355h391.51c15.859-0.189 31.015-6.431 42.231-17.393l80.082-78.296-0.066-0.054z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'residentadvisor',
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