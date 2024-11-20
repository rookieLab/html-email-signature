<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M142.647 202.161c-8.725 0-16.26 3.199-20.027 9.198-3.767 6.399-3.173 14.397 0.793 22.596l98.946 172.766c0.198 0.4 0.198 0.6 0 0.8l-155.459 277.146c-3.966 8.198-3.767 16.397 0 22.596 3.767 5.999 10.311 9.998 19.036 9.998h146.337c21.812 0 32.519-14.997 39.856-28.594 0 0 152.088-271.347 158.036-281.945-0.595-1-100.731-176.965-100.731-176.965-7.337-12.997-18.243-27.595-40.848-27.595h-145.941zM757.74 0c-21.812 0-31.33 13.797-39.261 28.194 0 0-315.478 564.090-325.789 582.686 0.595 1 208.005 384.925 208.005 384.925 7.337 12.997 18.441 28.194 40.848 28.194h146.337c8.725 0 15.665-3.399 19.432-9.398 3.966-6.399 3.767-14.597-0.397-22.796l-206.221-380.526c-0.198-0.4-0.198-0.6 0-1l324.203-578.087c3.966-8.198 4.164-16.397 0.397-22.796-3.767-5.999-10.708-9.398-19.432-9.398h-148.122z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'xing',
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
      default: '#026466'
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