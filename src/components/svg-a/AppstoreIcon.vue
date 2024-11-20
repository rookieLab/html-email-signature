<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M605.502 287.859l185.506 329.965 168.898 0.023c33.829 0 61.475 27.462 63.919 60.877l0.176 4.812-0.176 4.908c-2.443 34.023-30.089 60.781-63.919 60.781v0l-95.010-0.008 62.586 111.292c16.476 30.101 7.772 67.874-18.999 87.478l-4.376 2.941-4.47 2.451c-30.131 15.019-66.483 3.768-83-26.408v0l-228.477-405.723c0 0-29.408-49.46-29.408-122.876s46.751-110.511 46.751-110.511v0zM184.742 767.772c40.719 0 79.929 34.776 82.946 47.914l-61.078 109.738c-16.517 30.176-52.869 41.427-83 26.408l-4.47-2.451c-30.916-17.775-40.719-57.96-23.376-89.645l40.719-71.871c0 0 9.803-20.093 48.259-20.093zM396.478 38.216c29.545-14.353 66.58-3.138 83.098 26.303v0l32.104 57.433 31.99-56.661c16.517-30.176 52.869-41.427 83-26.408l4.47 2.451 4.272 2.688c27.516 18.894 35.621 56.781 19.103 86.957v0l-274.483 486.844 189.444 0.026c2.781 0.064 39.538 1.723 70.765 44.853l3.718 5.377c32.424 50.232 2.262 81.145 2.262 81.145v0h-582.127c-35.44 0-64.094-29.367-64.094-65.688s28.654-65.688 64.094-65.688v0l168.066-0.023 205.504-364.544-1.069-1.743-67.865-121.33c-17.343-30.912-6.786-71.871 23.376-89.645v0z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'appstore',
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
      default: '#4781e8'
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