
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M344.514 170.709h86.545v853.291h-86.545v-853.291zM647.53 170.709v853.291h-86.588v-853.291h86.588zM128 0h86.632v640h-86.632v-640zM777.412 170.709h86.588v469.291h-86.588v-469.291z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'gitter',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    