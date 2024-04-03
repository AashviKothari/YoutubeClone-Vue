<template>
    <div class="result-pop">
      <Header />
      <div class="main-body">
        <img src="path/to/image.jpg" alt="Result Image" class="result-image">
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  
  export default {
    name: 'ResultPop',
    components: {
      Header
    }
  }
  </script>
  
  <style scoped>
  /* Add styling for the result pop component if needed */
  .main-body {
    text-align: center; /* Center the image horizontally */
  }
  
  .result-image {
    width: 80%; /* Set width to 80% of the container */
    height: 70%; /* Set height to 70% of the container */
    max-width: 100%; /* Ensure image does not exceed 100% of its parent width */
    max-height: 100%; /* Ensure image does not exceed 100% of its parent height */
    margin: auto; /* Center the image vertically */
    display: block; /* Ensure proper margin auto behavior */
  }
  </style>
  