<template>
  <div class="main-body">
    <Card :video="video" />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'MainBody',
  components: {
    Card
  },
  data() {
    return {
      video: { 
        title: 'Video Title', 
        imageUrl: 'https://wallpaperaccess.com/full/215533.jpg', 
        description: 'Description of the video' 
      }
    };
  }
}
</script>

<style scoped>
.main-body {
  margin: 30px; /* Add margin around the card */
}

.card {
  width: calc(100% - 60px); /* Card width covers entire screen width with margin */
  background-color: #222; /* Greyish black background color */
  padding: 30px 20px; /* Adjust padding */
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Add shadow effect */
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.card h2 {
  color: #fff; /* White text color */
}

.card p {
  color: #ccc; /* Light grey text color */
}
</style>
