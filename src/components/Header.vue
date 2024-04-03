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
      </div>
    </header>
  </template>
  
  <script>
  import LogoButton from './LogoButton.vue';
  import SearchField from './SearchField.vue';
  import ProfileButton from './ProfileButton.vue';
  
  export default {
    name: 'Header',
    components: {
      LogoButton,
      SearchField,
      ProfileButton
    }
  }
  </script>
  
  <style scoped>
  .header {
    width: 100%;
    background-color: #333;
    padding: 10px;
    display: flex;
    align-items: center;
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
  }
  </style>
  