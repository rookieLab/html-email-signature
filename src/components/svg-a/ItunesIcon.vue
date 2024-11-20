<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M512.156 0c282.708 0.082 511.844 229.285 511.844 511.993 0 207.095-124.759 393.796-316.096 473.034s-411.565 35.407-557.983-111.053c-146.417-146.46-190.185-366.701-110.891-558.015s266.030-316.019 473.125-315.959zM511.772 58.182c-250.538 0.143-453.57 203.273-453.59 453.812 0 183.57 110.592 349.060 280.197 419.288s364.815 31.362 494.586-98.473c129.772-129.835 168.543-325.064 98.232-494.634s-235.855-280.082-419.425-279.992zM721.455 174.582v142.894l-0.257 353.625v1.026c0 44.492-43.872 80.298-96.063 80.298s-94.231-35.916-94.231-80.298c0-44.382 42.039-80.628 94.231-80.628 21.171-0.127 41.883 6.159 59.412 18.031v0-282.197l-277.817 74.984 2.346 309.097 0.953 22.796c1.833 44.455-42.479 80.334-94.67 80.334s-94.267-35.953-94.267-80.334c0-44.382 42.076-80.628 94.267-80.628 19.156-0.114 37.987 4.951 54.5 14.66v0-255.663h-0.403v-142.931h0.403l351.596-95.067z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'itunes',
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
      default: '#cc69ef'
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