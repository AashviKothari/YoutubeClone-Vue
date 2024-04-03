<!-- App.vue -->
<template>
    <div id="app">
      <Header />
      <MainBody />
      <ResultPop/>
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import MainBody from './components/MainBody.vue';
import ResultPop from './components/ResultPop.vue';
  
  export default {
    name: 'App',
    components: {
      Header,
      MainBody
    }
  }
  </script>
  