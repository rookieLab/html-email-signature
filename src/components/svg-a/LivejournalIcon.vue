
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M575.179 597.333l94.359 161.185 84.923-161.185h141.538l-226.462 426.667-235.897-426.667h141.538zM461.949 0l292.513 597.333h-179.282l-113.231-237.037-122.667 237.037h-179.282l301.949-597.333z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'livejournal',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    