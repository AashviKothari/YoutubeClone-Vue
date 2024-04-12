<template>
  <input type="text" v-model="searchQuery" placeholder="Search...">
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
</script>
