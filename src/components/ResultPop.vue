<template>
    <div class="result-pop">
      <div class="image-container">
        <img :src="datas.imgSrc" alt="Result Image" class="thumbnail">
      </div>
      <div class="details">
        <h2>{{datas.title}}</h2>
        <p>{{datas.views}} views</p>
        <h4></h4>
      </div>
      <input type="text" class="comment-input" placeholder="Add comments">
    </div>
  </template>
  
  <script setup>
  import {useRoute} from 'vue-router'
  import {ref,reactive,onMounted} from 'vue'

  import data from '../assets/config/data.json';

  const datas=reactive({
    
    imgSrc:'',
    title:'',
    views:'',
    desc:'' 
  })
  const route=useRoute();
 onMounted(() => {
  const id = route.params.id;
  console.log("Id dsds",id)
  const fetchData = data.find(item => item.id === id);
  Object.assign(datas, fetchData);
}); 
  </script>
  
  <style scoped>
  .result-pop {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  
  .image-container {
    display: flex;
    justify-content: center; /* Horizontally center the image */
    margin-bottom: 20px;
  }
  
  .thumbnail {
    width: 1000px;
  }
  
  .details {
    text-align: left;
    margin-right: 130px;
  }
  
  .comment-input {
    width: 50%;
    padding: 10px;
    margin-top: 20px;
    margin-right: 50px;
    background-color: transparent;
  }
  
  h2 {
    color: #feffde;
    margin-bottom: 10px;
  }
  
  p, h4 {
    color: #feffde;
  }
  </style>
  