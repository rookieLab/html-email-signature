
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M668.901 690.595c0 45.158-36.606 81.769-81.769 81.769h-354.332c-90.32 0-163.539-73.216-163.539-163.538v-299.819c0-45.156 36.609-81.769 81.769-81.769h354.332c90.322 0 163.538 73.218 163.538 163.538v299.819zM876.052 276.295l-119.93 89.946c-20.587 15.443-32.705 39.679-32.705 65.417v136.282c0 25.737 12.117 49.971 32.709 65.414l119.925 89.946c26.951 20.217 65.414 0.985 65.414-32.709v-381.588c0-33.69-38.463-52.922-65.414-32.708z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'zoom',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    