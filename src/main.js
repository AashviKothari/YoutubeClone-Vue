
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import MainBody from './components/MainBody.vue';
import Profile from './components/Profile.vue';
import ResultPop from './components/ResultPop.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainBody },
    { path: '/profile', component: Profile },
    { path: '/result', component: ResultPop },
  ],
});

createApp(App).use(router).mount('#app');
