<template>
  <a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M170.923 215l-170.923 170.924 170.923 170.92 170.921-170.92-170.921-170.924zM341.332 385.665l170.668 170.667 170.665-170.667-170.665-170.665-170.668 170.665zM341.332 726.997l170.668 170.664 170.665-170.664-170.665-170.668-170.668 170.668zM682.668 385.665l170.664 170.667 170.668-170.667-170.668-170.665-170.664 170.665z"
        fill="#ffffff"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'tidal',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>