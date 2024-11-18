
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M511.5 0c-247.226 0-447.563 200.337-447.563 447.563 0 234.438 213.125 426.251 447.563 426.251v149.187c270.669-132.138 447.563-349.526 447.563-575.438 0-247.226-200.337-447.563-447.563-447.563zM490.188 511.5c0 59.675-38.363 106.563-85.25 106.563v-106.563h-106.563v-191.813h191.813v191.813zM745.939 511.5c0 59.675-38.363 106.563-85.25 106.563v-106.563h-106.563v-191.813h191.813v191.813z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'google-hangouts',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    