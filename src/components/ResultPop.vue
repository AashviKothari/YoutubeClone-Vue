<template>
    <div class="result-pop">
      <div class="image-container">
        <img src="https://images-na.ssl-images-amazon.com/images/I/61qt98DhBTL._RI_.jpg" alt="Result Image" class="thumbnail">
      </div>
      <div class="details">
        <h2>Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids</h2>
        <p>100,000 views</p>
        <h4>WB Kids</h4>
      </div>
      <input type="text" class="comment-input" placeholder="Add comments">
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultPop'
  }
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
  