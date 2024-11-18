
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M806.464 32h157.024l-343.040 406.656 403.552 553.344h-316l-247.488-335.616-283.2 335.616h-157.088l366.944-434.944-387.168-525.056h324l223.712 306.752 258.752-306.752zM751.36 894.528h87.008l-561.632-770.176h-93.376l568 770.176z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'twitter-x',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    