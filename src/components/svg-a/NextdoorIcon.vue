
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M1022.702 418.407l-511.202-312.995-175.615 107.586v-107.586h-160.1v205.41l-175.616 107.586 83.587 136.486 92.070-56.052v418.834h671.301v-418.834l92.027 56.052 83.545-136.486z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'nextdoor',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    