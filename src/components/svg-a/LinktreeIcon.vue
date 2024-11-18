
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
    <svg viewbox="0 0 864 1024" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6 346.112h253.28l-180.352-170.656 99.392-101.28 171.552 175.456v-249.632h149.088v249.632l171.52-175.456 99.392 101.28-180.352 170.656h253.28v141.152h-254.912l181.184 175.456-99.392 98.912-246.048-246.432-246.048 246.432-99.392-98.912 181.12-175.456h-254.88v-141.152h1.6zM346.272 689.056h149.088v334.944h-149.088v-334.944z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'linktree',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    