<template>
  <div class="profile">
    <h2>        </h2>
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" placeholder="Enter First name" v-model="firstName" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" placeholder="Enter last name" v-model="lastName" />
    </div>
    <div class="form-group">
      <label for="mobileNumber">Mobile Number:</label>
      <input type="text" id="mobileNumber" placeholder="Enter mobile number" v-model="mobileNumber" />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text" id="email" placeholder="Enter email address" v-model="email" />
    </div>
    <button @click="updateProfile">Update</button>
    <div v-show="submitted" class="submitted-info">
      <h3>Details:</h3>
      <p>First Name - {{ formData.firstName }}</p>
      <p>Last Name - {{ formData.lastName }}</p>
      <p>Mobile Number - {{ formData.mobile }}</p>
      <p>Email - {{ formData.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      submitted: false,
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
      this.submitted = true;
      this.formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobileNumber,
        email: this.email
      };
      this.clearFields();
    },
    clearFields() {
      this.firstName = '';
      this.lastName = '';
      this.mobileNumber = '';
      this.email = '';
    }
  }
}
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
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: transparent; /* Transparent background */
  color: #fff; /* White text color */
  font-size: 18px;
}

button {
  margin-top: 15px; /* Add margin to separate button from inputs */
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block; /* Make button a block element */
  margin: 0 auto; /* Center the button horizontally */
}

button:hover {
  background-color: #0056b3;
}

.submitted-info {
  margin-top: 20px;
  color: #fff; /* White text color */
}
</style>
