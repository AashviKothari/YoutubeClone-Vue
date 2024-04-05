<template>
    <header class="header">
      <div class="left-section">
        <LogoButton />
      </div>
      <div class="center-section">
        <SearchField />
      </div>
      <div class="right-section">
        <ProfileButton />
        <!-- <HomeButton/> -->
      </div>
    </header>
  </template>
  
  <script setup>
  import LogoButton from './LogoButton.vue';
  import SearchField from './SearchField.vue';
  import ProfileButton from './ProfileButton.vue';
import HomeButton from './HomeButton.vue';

  
  </script>
  
  <style scoped>
  .header {
    width: 100%;
    background-color: #292828;
    padding: 10px;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  
  .left-section,
  .right-section {
    flex: 1;
    min-width: 100px;
  }
  
  .center-section {
    flex: 2;
  }
  
  .left-section {
    text-align: left;
  }
  
  .right-section {
    text-align: right;
    margin-right: 15px;
  }
  
  button {
    font-size: 18px;
    padding: 10px 20px;
  }
  
  input[type="text"] {
    font-size: 15px;
    padding: 12px;
    width: 900px;
    border-radius: 10px;
    background-color: #0e0909;
  }
  </style>
  