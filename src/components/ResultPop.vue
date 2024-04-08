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
          <span v-if="likeCount > 15" class="tag trending">Trending</span>
          <span v-else-if="likeCount > 10" class="tag popular">Popular</span>
        </div>
        <div class="comment-container">
          <input type="text" class="comment-input" placeholder="Add comments">
          <button class="post-comment" @click="postComment">Post Comment</button>
        </div>
      </div>
      <div class="subscribe-container">
        <button :class="{ 'subscribe-red': isSubscribed, 'subscribe-grey': !isSubscribed }" @click="toggleSubscription">
          Subscribe
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'
import data from '../assets/config/data.json';

const datas = ref(null);
const likeCount = ref(0);
const dislikeCount = ref(0);
const isSubscribed = ref(false); // Reactive variable to track subscription status

const increaseLike = () => {
  likeCount.value++;
}

const decreaseLike = () => {
  if (likeCount.value > 0) {
    likeCount.value--;
  }
}

const toggleSubscription = () => {
  isSubscribed.value = !isSubscribed.value; // Toggle subscription status
}

const postComment = () => {
  // Your logic to handle posting a comment
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
  height: 85%;
  margin-top: 10px;
  background-color: #333;
  position: relative; /* Required for absolute positioning */
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
  text-align: left;
  /* margin-left: -170px; Adjust margin as needed */
  margin-right: 60px; /* Adjust margin as needed */
}

.comment-container {
  width: 100%;
  display: flex;
  margin-top: 10px;
}

.comment-input {
  flex: 4; /* Take up remaining space */
  padding: 10px;
  width: 70%;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  margin-right: 10px; /* Add some margin between input and button */
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

.subscribe-container {
  position: absolute;
  bottom: 30px; /* Adjust the distance from the bottom */
  left: 20px; /* Align to the left end */
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
</style>
