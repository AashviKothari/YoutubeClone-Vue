
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
    { path: '/result/:id', component: ResultPop },
<<<<<<< HEAD
    {path:'/recent',component:RecentTabs},
  ],
});
import { createPinia } from 'pinia';
import RecentTabs from './components/RecentTabs.vue';

const pinia=createPinia();
const app=createApp(App);

app.use(pinia);

app.use(router).mount('#app');
=======
  ],
});

createApp(App).use(router).mount('#app');
>>>>>>> c8f8555b15825cf303460f4d8431d5ad18bc23bd
