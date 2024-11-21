<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M888.271 931.089l-19.324-338.039v-27.676l-386.473-537.699-13.527-27.676h-30.918c-102.178 10.207-196.777 59.654-264.734 138.378l-34.783 47.444c-11.499 15.977-21.221 33.216-28.986 51.398l-13.527 29.653 17.391 25.699 369.082 537.699 13.527 13.838 318.841 144.309 81.159 35.583-7.729-92.911zM320.155 351.876l52.174-47.444 210.628 310.363c-6.914 46.117-28.676 88.555-61.836 120.587v0l-231.884-340.015c9.161-15.314 19.499-29.857 30.918-43.49zM619.671 593.050l-212.56-314.317c20.008-12.328 40.65-23.547 61.836-33.606 20.121-8.1 40.787-14.706 61.836-19.768l229.952 341.992c-42.064 26.743-92.56 35.942-141.063 25.699zM553.971 768.988c34.797-35.875 58.921-81.12 69.565-130.471 48.525 8.219 98.344 1.331 142.995-19.768 9.596-5.671 20.043-9.679 30.918-11.861l15.459 211.521-44.444 21.745-36.715 35.583-197.101-85.004 19.324-21.745zM182.957 197.683c8.889-11.257 18.577-21.829 28.986-31.629 60.606-58.773 137.602-96.775 220.29-108.726l71.498 106.749c-110.612 27.963-206.248 98.859-266.667 197.683l-75.362-120.587c5.443-15.278 12.575-29.869 21.256-43.49v0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'keybase',
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
      default: '#33a0ff'
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