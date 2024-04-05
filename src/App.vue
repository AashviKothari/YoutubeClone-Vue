<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer/>
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainBody from './components/MainBody.vue';
import ResultPop from './components/ResultPop.vue';
import Profile from './components/Profile.vue';

const routes = [
  { path: '/', component: MainBody },
  { path: '/result/:id', component: ResultPop },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


</script>

<style>
  body{
    background-color: black;
    margin: 1px;
  }
</style>
