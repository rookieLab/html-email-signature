
  <template>
<a :href="url" target="_blank"
    style="border-radius: 15%; width: 23px; height: 23px; display: block; text-align: center; background-color: #fd5c63; font-size: 12px; font-family: initial; line-height: 1;">
    
 
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
    style="position: relative; top: 4.6px; width: 13.8px;">
<path d="M511.5 0c-162.401 0.895-267.302 109.973-267.302 274.719 0 136.443 89.001 253.193 139.683 430.513 29.156 101.661 44.841 226.040 52.94 317.77h149.358c8.184-91.729 23.785-216.109 52.897-317.77 50.682-177.32 139.683-294.028 139.683-430.513 0.043-164.746-104.858-273.824-267.259-274.719v0zM512.353 419.942c-67.518 0-122.292-54.815-122.292-122.292 0-67.433 54.774-122.206 122.292-122.206 67.561 0 122.292 54.688 122.292 122.206s-54.774 122.292-122.292 122.292v0z" fill="#ffffff"></path>
</svg>
  

  </a>
</template>

<script>
export default {
  name: 'trulia',
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
    