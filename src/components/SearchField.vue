<!-- SearchField.vue -->

<template>
    <input type="text" v-model="searchQuery" placeholder="Search...">
  </template>
  
  <script>
  export default {
    name: 'SearchField',
    data() {
      return {
        searchQuery: ''
      };
    }
  }
  </script>
  