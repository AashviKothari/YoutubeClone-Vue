<template>
    <div>
      <h2>Top 3 Recently Visited Cards</h2>
      <div v-for="(card, index) in top3VisitedCards" :key="index">
        <!-- Display your card component here -->
        <Card :data="card"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRecentlyVisitedStore } from '../recentlyVisited.js'
  import Card from './Card.vue';
  
  const recentlyVisitedStore = useRecentlyVisitedStore();
  const top3VisitedCards = recentlyVisitedStore.getTop3VisitedCards();
  </script>
  
  <style scoped>
  /* Your component styles here */
  </style>
  