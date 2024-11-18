
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M59.564 384l452.436 640-495.852-397.241c-13.71-11.35-19.423-30.897-14.282-48.552l57.698-194.207zM320 384h384l-191.999 640-192.001-640zM210.286 14.054l109.714 369.946h-256l109.714-369.946c6.096-18.739 30.477-18.739 36.571 0zM964.437 384l57.697 194.207c5.141 17.655-0.571 37.202-14.282 48.552l-495.852 397.241 452.437-640zM960 384h-256l109.714-369.946c6.096-18.739 30.477-18.739 36.571 0l109.714 369.946z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'gitlab',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    