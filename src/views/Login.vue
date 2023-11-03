<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            <!-- Left Column (Image) -->
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <!-- Your image here -->
            </div>

            <!-- Right Column (Login Form) -->
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form class="form" @submit.prevent="login">
                  <!-- Title -->
                  <p class="title">Login</p>
                  <p class="message">Login to access your account.</p>

                  <!-- Email Input -->
                  <div class="flex">
                    <label>
                      <input required="" placeholder="" type="email" class="input" v-model="email" />
                      <span>Email</span>
                    </label>
                  </div>

                  <!-- Password Input -->
                  <div class="flex">
                    <label>
                      <input required="" placeholder="" type="password" class="input" v-model="password" />
                      <span>Password</span>
                    </label>
                  </div>

                  <!-- Login Button -->
                  <button class="submit" type="submit">Login</button>

                  <!-- Registration Link -->
                  <p class="signin">Don't have an account? <router-link to="/register">Sign up</router-link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <navbuttom/>
</template>

<script>

import navbuttom from '@/components/navbuttom.vue';
export default {
  components:{
    navbuttom,
  },
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '', // Add an error message property to display login errors
    };
  },
  methods: {
    async login() {
      // Reset error message
      this.errorMsg = '';

      // Check if email and password are provided
      if (!this.email || !this.password) {
        this.errorMsg = 'Please provide both email and password.';
        return;
      }

      // You can make an API request to authenticate the user here
      // Replace 'your-api-endpoint' with your actual API endpoint
      try {
        const response = await fetch('https://your-api-endpoint.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        if (response.ok) {
          // Authentication successful
          // Redirect the user to the admin site
          this.$router.push('/admin');
        } else {
          // Handle authentication errors
          this.errorMsg = 'Login failed. Please check your credentials.';
        }
      } catch (error) {
        // Handle network or other errors
        this.errorMsg = 'An error occurred. Please try again later.';
        console.error(error);
      }
    },
  },
};
</script>


import Admin from 'Admin.vue';
<style scoped>
/* Your CSS styles here */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  margin: 2%;
  
}

.card {
  border-radius: 1rem;
  background: linear-gradient(to bottom, white 50%, #ADD8E6); /* Vertical gradient from white to light blue */
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(109, 135, 212, 0.5);
  width: 140%;
  max-width: 400px;
  text-align: left;
  margin: 20px;
  margin-left: -50px;
  margin-top: 100px;
}

/* Additional styles for the form */
.title {
  font-size: 24px; /* Adjust font size for mobile */
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  transition: 0.3s ease;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 35%;
  background-color: royalblue;
  transform: translateX(-50%);
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
  transition: 0.3s ease;
}

.title::after {
  content: "";
  width: 15px;
  height: 15px;
  background-color: royalblue;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s;
}

.title:hover::after {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.message, .signin {
  color: rgba(56, 53, 53, 0.822);
  font-size: 16px; /* Adjust font size for mobile */
  transition: 0.3s ease;
  text-align: center; /* Centers the text horizontally */
}
.signin {
  color: rgba(56, 53, 53, 0.822);
  font-size: 16px;
  text-align: center;
}

.signin {
  text-align: center;
  transition: 0.3s ease;
}

.signin a {
  color: royalblue;
  transition: 0.3s ease;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  flex-direction: column;
  width: 130%;
  gap: 10px;
}

.form label {
  position: relative;
  margin-bottom: 10px;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid darkgrey;
  border-radius: 10px;
  transition: 0.3s ease;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color:darkgray;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
  transition: 0.3s ease;
}

.form label .input:focus + span,
.form label .input:valid + span {
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
  transition: 0.3s ease;
}

.form label .input:valid + span {
  color:darkgray;
  transition: 0.3s ease;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease;
  width: 130%;
}

.submit:hover {
  background-color: rgba(11, 69, 243, 0.9);
  cursor: pointer;
  transition: 0.3s ease;
}
</style>
