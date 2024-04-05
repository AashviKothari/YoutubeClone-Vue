<!-- MainBody.vue -->
<template>
  <div class="main-body">
    <Card v-for="item in jsonData" :key="item.id" :imgSrc="item.imgSrc" :title="item.title" :views="item.views" :desc="item.desc" :creator="item.creator" />
  </div>
</template>

<script setup>
import jsonData from './../assets/config/data.json';
import Card from './Card.vue';
</script>

<style scoped>
.main-body {
  margin: 30px;
}
</style>
