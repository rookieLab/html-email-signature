<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M699.767 192.283l292.233 146.027v114.282l-52.217-25.396v390.916l-412.241 205.888-411.325-206.795v-405.428l-52.217-27.21v-117.003l388.423 195.004 247.345-270.285zM724.501 318.356l-248.261 269.378-257.422-128.794v296.588l309.639 152.376 136.47-67.2 0.028-184.945 102.602-50.792-0.006 185.209 96.195-47.345-0.916-354.636-138.33-69.839zM311.345 0l109.015 54.42v105.212l-77.868 86.165-99.854-49.885v-120.631l68.707-75.281z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'homes',
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
      default: '#ef8200'
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