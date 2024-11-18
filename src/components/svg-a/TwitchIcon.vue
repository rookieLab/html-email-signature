<template>
  <a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">


    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
      style="position: relative; top: 4.6px; width: 13.8px;">
      <path
        d="M97.467 0l-65.467 178.091v712.277h239.935v133.632h130.995l130.864-133.632h196.351l261.855-267.018v-623.35h-894.533zM184.688 88.989h720.055v489.748l-152.771 155.849h-239.972l-130.827 133.448v-133.448h-196.485v-645.598zM424.719 534.274h87.281v-267.1h-87.281v267.1zM664.707 534.274h87.264v-267.1h-87.264v267.1z"
        fill="#ffffff"></path>
    </svg>


  </a>
</template>

<script>
export default {
  name: 'twitch',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>