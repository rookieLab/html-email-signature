<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M397.137 403.849c1.918 3.112 5.243 5.115 9.036 5.115 2.558 0 4.944-0.895 6.734-2.43l0.639-0.512c16.624-13.853 31.585-28.133 45.651-43.35 136.783-148.463 56.904-330.728 56.265-332.432-3.836-8.951-1.279-19.565 6.394-25.319 8.312-5.754 18.542-5.115 26.214 1.407 463.547 431.11 340.787 759.493 331.836 781.616-37.084 133.885-184.78 230.772-359.926 235.717-5.882 0.341-10.315 0.341-15.473 0.341-206.817 0-382.645-127.407-382.645-290.149v-2.558c0-225.785 204.387-448.501 213.508-457.964 5.797-6.351 14.706-8.312 22.378-4.476 7.673 3.24 12.66 10.869 12.404 19.224-1.833 44.16 7.118 82.479 26.897 115.088v0.639l0.085 0.043 0.001-0.001z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'tinder',
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
      default: '#fb5166'
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