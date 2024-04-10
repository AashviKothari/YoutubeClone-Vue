<template>
  <div class="centered" v-if="datas">
    <div class="card">
      <div class="result-pop">
        <div class="image-container">
          <img :src="datas.imgSrc" alt="Result Image" class="thumbnail">
        </div>
        <div class="details">
          <h2>{{ datas.title }}</h2>
          <p>{{ datas.views }} views</p>
          <h4>Like: {{ likeCount }}</h4>
          <button @click="increaseLike">Like</button>
          <button @click="decreaseLike">Dislike</button>
          <button :class="{ 'subscribe-red': isSubscribed, 'subscribe-grey': !isSubscribed }" @click="toggleSubscription">
            {{ isSubscribed ? 'Unsubscribe' : 'Subscribe' }}
          </button>
          <span v-if="isTrending" class="tag trending">Trending</span>
          <span v-else-if="isPopular" class="tag popular">Popular</span>
        </div>
        <div class="comment-container">
          <input type="text" class="comment-input" placeholder="Add comments" v-model="newComment">
          <button class="post-comment" @click="postComment">Post Comment</button>
        </div>
      </div>
      <ul class="comment-list">
        <li v-for="(comment, index) in comments" :key="index" class="comment">{{ comment }}</li>
      </ul>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive, onMounted, computed } from 'vue'
import data from '../assets/config/data.json';

const datas = ref(null);
const likeCount = ref(0);
const dislikeCount = ref(0);
const isSubscribed = ref(false); 
const newComment = ref('');
const comments = ref([]);

const increaseLike = () => {
  likeCount.value++;
}

const decreaseLike = () => {
  if (likeCount.value > 0) {
    likeCount.value--;
  }
}

const toggleSubscription = () => {
  isSubscribed.value = !isSubscribed.value; 
}

const postComment = () => {
  if (newComment.value.trim() !== '') {
    comments.value.push(newComment.value.trim());
    newComment.value = ''; 
  }
}

onMounted(() => {
  const id = useRoute().params.id;
  const fetchData = data.find(item => item.id === id);
  if (fetchData) {
    datas.value = reactive(fetchData);
  } else {
    console.error('Data not found');
  }
});

const isTrending = computed(() => likeCount.value > 15);
const isPopular = computed(() => likeCount.value > 10 && likeCount.value <= 15);
</script>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.card {
  width: 50%;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  margin-top: 10px;
  background-color: #333;
  position: relative; 
}

.result-pop {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.image-container {
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 20px;
}

.thumbnail {
  width: 100%;
}

.details {
  width:100%;
}

.comment-container {
  width: 100%;
  display: flex;
  margin-top: 10px;
}

.comment-input {
  flex: 4; 
  padding: 10px;
  width: 70%;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  margin-right: 10px;
}

h2 {
  color: white;
  margin-bottom: 10px;
}

p,
h4 {
  color: white;
}

button {
  background-color: #777;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #999;
}

.tag {
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}

.popular {
  background-color: #ff6347;
}

.trending {
  background-color: #ffa500;
}

.subscribe-red {
  background-color: red;
  color: white;
}

.subscribe-grey {
  background-color: grey;
  color: white;
}

.post-comment {
  background-color: red;
  color: white;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment-list .comment {
  color: white;
  text-align: left;
}
</style>
