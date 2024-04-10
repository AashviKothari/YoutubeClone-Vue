<template>
  <div class="profile">
    <h2>User Profile</h2>
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" placeholder="Enter First name" v-model="formData.firstName" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" placeholder="Enter last name" v-model="formData.lastName" />
    </div>
    <div class="form-group">
      <label for="mobileNumber">Mobile Number:</label>
      <input type="text" id="mobileNumber" placeholder="Enter mobile number" v-model="formData.mobile" />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text" id="email" placeholder="Enter email address" v-model="formData.email" />
    </div>
    <button @click="updateProfile">Update</button>
    <div class="submitted-info">
      <h2>Details:</h2>
      <p>First Name: {{ formData.firstName }}</p>
      <p>Last Name: {{ formData.lastName }}</p>
      <p>Mobile Number: {{ formData.mobile }}</p>
      <p>Email: {{ formData.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        mobile: '',
        email: ''
      }
    };
  },
  methods: {
    updateProfile() {
      console.log('Profile updated');
     
    }
  }
};
</script>

<style scoped>
.profile {
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 100px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  visibility: hidden;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: transparent; 
  color: white; 
  font-size: 18px;
}

button {
  margin-top: 15px; 
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block; 
  margin: 0 auto; 
}

button:hover {
  background-color: #0056b3;
}

h2{
  color: #fff;
}
.submitted-info {
  margin-top: 20px;
  color: #fff;
}
</style>
