<!-- Card.vue -->
<template>
    <div class="card">
      <img :src="video.imageUrl" alt="Video Thumbnail" class="thumbnail">
      <div class="info">
        <h2>{{ video.title }}</h2>
        <p>{{ video.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      video: Object
    }
  }
  </script>
  
  <style scoped>
  .card {
    display: flex;
    margin-bottom: 20px;
  }
  
  .thumbnail {
    width: 150px;
    height: auto;
    margin-right: 20px;
  }
  
  .info {
    flex: 1;
  }
  </style>
  