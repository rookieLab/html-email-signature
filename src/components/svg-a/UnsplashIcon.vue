<template>
  <a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path d="M320 448v288h384v-288h320v576h-1024v-576h320zM704 0v288h-384v-288h384z" fill="#ffffff">
      </path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'unsplash',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>