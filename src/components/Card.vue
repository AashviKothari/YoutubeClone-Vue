<template>
  <router-link :to="{ path: '/result' }" class="card">
    <img :src="imgSrc" alt="Video Thumbnail" class="thumbnail">
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ views }}M views</p>
      <p>{{ creator.firstname }} {{ creator.lastname }}</p>
      <p>{{ desc }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imgSrc: String,
  title: String,
  views: Number,
  desc: String,
  creator: Object
});
</script>

<style scoped>
.card {
  display: flex;
  align-items: top;
  width: calc(100% - 60px);
  background-color: transparent;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit text color */
  transition: box-shadow 0.3s ease; /* Add transition for smooth effect */
}

.card:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); /* Greyish shadow effect on hover */
  transform: scale(1.05); /* Pop effect on hover */
}

.thumbnail {
  width: 24%;
  margin-right: 20px;
}

.content {
  flex: 1;
}

h2 {
  color: #fff;
  margin-bottom: 10px;
}

p {
  color: #ccc;
  margin-bottom: 5px;
}
</style>
