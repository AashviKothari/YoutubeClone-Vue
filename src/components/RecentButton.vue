<template>
    <router-link to="/recent" class="recent-button">Recently Visited</router-link>
</template>

<script setup>
const name = 'RecentButton';
</script>

<style scoped>
.recent-button {
  background-color: transparent; 
  color: blue; 
  font-size: 16px; 
  padding: 10px 20px; 
  border: 2px solid blue; 
  border-radius: 5px; 
  cursor: pointer;
  text-decoration: none; /* Remove underline */
}
</style>