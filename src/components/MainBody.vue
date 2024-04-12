<template>
  <div class="main-body">

    <Card :data="jsonData"/>
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
