<template>
  <a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">


    <svg viewbox="0 0 1024 1024" style="position: relative; top: 4.6px; width: 13.8px;"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
        fill="#ffffff"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'facebook',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>