<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M960 308.111c0-46.455-36.472-84.111-81.421-84.111-45.041 0-81.467 37.656-81.467 84.111 0 28.479 13.792 53.551 34.777 68.784-45.132 152.28-171.044 262.126-319.866 262.126s-274.734-109.846-319.912-262.126c20.985-15.233 34.777-40.305 34.777-68.784 0-46.455-36.472-84.111-81.421-84.111-45.041 0-81.467 37.656-81.467 84.111 0 28.053 13.425 52.7 33.906 67.98 34.136 204.317 206.233 359.909 414.116 359.909s379.981-155.592 414.116-359.909c20.435-15.28 33.861-39.927 33.861-67.98z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'zomato',
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
      default: '#ea2130'
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