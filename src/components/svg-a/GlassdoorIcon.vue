
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M741.206 877.798h-581.206c0 80.822 64.947 146.202 145.337 146.202h435.869c80.243 0 145.19-65.523 145.19-146.202v-600.691c0-2.887-2.307-5.484-5.194-5.484h-134.803c-2.886 0-5.194 2.453-5.194 5.34v600.835zM741.206 0c80.243 0 145.19 65.524 145.19 146.348h-581.060v600.689c0 2.886-2.453 5.341-5.34 5.341h-134.657c-2.887 0-5.34-2.454-5.34-5.341v-600.689c0-80.823 64.947-146.348 145.337-146.348h435.869z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'glassdoor',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    