<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 10%;width: 80%;height: 80%;">
      <path
        d="M310.901 583.422l114.868 124.343-190.913 188.235 76.045-312.578zM456.592 241.479l189.42 9.788-48.208 286.225-155.397 153.708-140.999-152.739 155.184-296.982zM0 216.417l433.235 23.664-149.104 280.632-284.13-304.296zM572.527 128l69.539 99.281-171.609-6.454 102.069-92.827zM1024 128l-352.817 98.635-69.753-98.635h422.569zM175.982 128l238.588 88.417-201.899-12.692-36.69-75.724z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'freelancer',
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
      default: '#29b2fe'
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