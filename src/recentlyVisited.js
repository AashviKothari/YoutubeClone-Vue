import { defineStore } from 'pinia';

export const useRecentlyVisitedStore = defineStore('recentlyVisited', {
  state: () => ({
    visitedCards: [],
  }),
  actions: {
    addVisitedCard(card) {
      this.visitedCards.unshift(card);
      if (this.visitedCards.length > 3) {
        this.visitedCards.splice(3);
      }
    },
    getTop3VisitedCards() {
      return this.visitedCards.slice(0, 3);
    },
  },
});
