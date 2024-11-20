<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M512 32l512 505.946h-123.139v454.054h-777.722v-454.054h-123.139l512-505.946zM654.629 292.308c-45.714 0-82.286 25.846-102.4 47.077-20.114 20.308-56.686 66.462-74.057 138.462v0h-1.829l1.829-164.308c0-5.538 0-8.308-8.229-8.308v0h-178.286v2.769c9.143 1.846 22.857 1.846 37.486 12.923 13.714 10.154 20.114 18.462 24.686 46.154 3.657 22.154 1.829 91.385 1.829 115.385v250.154c0 38.769 2.743 87.692-4.571 116.308-7.314 38.769-15.543 43.385-45.714 56.308-10.057 4.615-15.543 5.538-21.029 7.385v0 2.769h265.143v-2.769c-6.4-1.846-10.971-2.769-21.029-7.385-29.257-12.923-39.314-17.538-46.629-56.308-7.314-28.615-4.571-77.538-4.571-116.308v0l0.007-94.226c0.087-36.807 0.999-96.481 2.736-107.004 8.229-97.846 68.571-168.923 94.171-168.923s22.857 12 32.914 37.846c10.057 27.692 29.257 42.462 63.086 42.462 45.714 0 66.743-33.231 65.829-66.462 0-30.462-9.143-49.846-20.114-60.923-15.543-17.538-40.229-23.077-61.257-23.077z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'realtor',
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
      default: '#d82327'
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