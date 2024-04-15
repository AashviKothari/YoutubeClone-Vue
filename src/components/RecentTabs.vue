<template>
  <div>
    <h2>Top 3 Recently Visited Cards</h2>
    <div class="card-container">
      <Card v-for="(card, index) in top3VisitedCards" :key="index" :data="[card]" />
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
