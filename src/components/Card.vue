<template>
  <router-link :to="'/result/' + item.id" class="card"  v-for="item in data">
    <img :src="item.imgSrc" alt="Video Thumbnail" class="thumbnail">
    <div class="content">
      <h2>{{ item.title }}</h2>
      <p>{{ item.views }}M views</p>
      <p>{{ item.creator.firstname }} {{ item.creator.lastname }}</p>
      <p>{{ item.desc }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue';

const props=defineProps({
  data:Array,
  default:[]
})
</script>

<style scoped>
.card {
  display: flex;
  align-items: top;
  width: calc(100% - 60px);
  background-color: transparent;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-decoration: none; 
  color: inherit; 
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  transform: scale(1.05); }

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
