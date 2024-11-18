<template>
  <a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">


    <svg viewbox="0 0 896 1024" xmlns="http://www.w3.org/2000/svg">
      <path d="M895.936 230.656h-895.936v121.024h895.936v-121.024z" fill="#ffffff"></path>
      <path d="M0 461.312v562.688l447.968-251.296 448.032 251.296v-562.688h-895.968z" fill="#ffffff">
      </path>
      <path d="M895.936 0h-895.936v120.992h895.936v-120.992z" fill="#ffffff">
      </path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'substack',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>