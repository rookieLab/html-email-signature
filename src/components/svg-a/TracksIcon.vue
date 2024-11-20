<template>
  <a :href="url" target="_blank"
    :style="{ borderRadius: shapeMap[shape], width: size + 'px', height: size + 'px', display: 'block', textAlign: 'center', backgroundColor: background, fontSize: size / 2 + 'px', fontFamily: 'initial', lineHeight: '1' }">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M281.157 461.24c-155.366 0-281.111 125.993-281.157 281.352 0.041 155.412 125.786 281.408 281.157 281.408 155.233 0 280.806-126.001 280.878-281.408 0-79.373-0.018-98.729-0.018-98.729h-100.383c0 0 0 19.423 0 98.729-0.092 50.058-20.175 94.884-52.902 127.739-32.814 32.791-77.563 52.959-127.575 52.959-50.066 0-94.764-20.175-127.665-52.959-32.737-32.855-52.818-77.683-52.89-127.739 0.069-50.010 20.152-94.83 52.89-127.685 32.901-32.794 77.599-52.908 127.665-52.964 92.349 0 365.658 0 461.727 0 155.313 0 281.068-125.125 281.116-280.535-0.049-155.471-125.804-281.354-281.116-281.408-155.261 0.054-281.052 125.937-281.111 281.408 0 78.958-0.069 97.912-0.069 97.912h100.332c0 0 0-18.954 0-97.912 0.087-50.007 20.46-94.835 53.274-127.744 32.786-32.732 77.535-52.902 127.578-52.902 50.004 0 94.853 20.168 127.662 52.961 32.696 32.852 52.803 77.678 52.803 127.685 0 50.117-20.106 94.889-52.833 127.68-32.781 32.794-77.627 52.096-127.639 52.152h-461.722z"
        :fill="color"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'tracks',
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
      default: '#112c4b'
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