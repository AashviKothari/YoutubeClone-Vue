<template>
  <div id="app">
    <Header />
    <!-- <MainBody /> -->
    <!-- <ResultPop /> -->
    <!-- <Footer/> -->
    <Profile/>
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import MainBody from './components/MainBody.vue';
import ProfileButton from './components/ProfileButton.vue';
import ResultPop from './components/ResultPop.vue';
import Profile from './components/Profile.vue'
</script>

<style>
  body{
    background-color: black;
    margin: 1px;
  }

</style>
