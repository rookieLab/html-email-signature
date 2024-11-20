<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M747.261 67.275c9.647 5.685 19.186 11.758 28.59 18.191l-56.748 87.156c-7.423-5.087-15.012-9.915-22.753-14.475-171.648-101.215-392.586-55.183-513.701 109.812-54.173 73.384-82.512 163.441-80.393 255.479 0.96 43.574 8.696 86.711 22.915 127.781 25.728 74.371 72.256 139.306 133.762 186.68 174.188 134.714 422.635 98.221 554.884-81.86 30.117-40.865 52.484-87.174 65.935-136.516 17.198-63.245 19.266-129.816 6.026-194.056l99.984-21.574c16.531 80.71 13.927 164.314-7.593 243.777-16.878 61.964-44.945 120.124-82.743 171.456-166.108 226.223-478.599 272.117-697.969 102.491-77.459-59.728-136.059-141.544-168.486-235.236-17.883-51.602-27.617-105.804-28.833-160.558-2.642-115.623 32.942-228.757 100.957-320.978 153.435-208.92 431.742-264.020 646.167-137.57zM936.8 46.016l1.527 1.53c8.637 8.817 52.118 54.773 85.673 119.364l-538.616 553.191-211.615-288.173 81.744-116.55 140.572 190.174 440.715-459.536z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'oncehub',
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
      default: '#404042'
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