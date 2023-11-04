<template>
  <v-app-bar color="rgb(25, 152, 194)" dark dense>
    <v-app-bar-title class="white--text">Karamay Kaagapay Funeral Home.Co</v-app-bar-title>
    <v-spacer></v-spacer>
    <template v-slot:append>
    </template>
  </v-app-bar>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem; background-color: #fff; padding: 20px; border-radius: 20px; position: relative; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) width:80%;">
          <div class="row g-0">
            <!-- Left Column (Image) -->
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <!-- Your image here -->
            </div>

            <!-- Right Column (Registration Form) -->
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form class="form" @submit.prevent="signUp">
                  <!-- Title -->
                  <p class="title">Register</p>
                  <p class="message">Signup now and get full access to our app.</p>

                  <!-- First Name and Last Name Inputs -->
                  <div class="flex">
                    <label>
                      <input required="" placeholder="" type="text" class="input" v-model="username" />
                      <span>Username</span>
                    </label>
                  </div>

                  <!-- Email Input -->
                  <div class="flex">
                      <label>
                          <input required="" placeholder="" type="email" class="input" v-model="email" />
                          <span>Email</span>
                        </label>
                  </div>

                  <!-- Password Inputs -->
                  <div class="flex">
                      <label>
                          <input required="" placeholder="" type="password" class="input" v-model="password" />
                          <span>Password</span>
                        </label>
                  </div>

                  <div class="flex">
                      <label>
                          <input required="" placeholder="" type="password" class="input" v-model="confirmPassword" />
                          <span>Confirm password</span>
                        </label>
                  </div>
                  

                  <!-- Sign-Up Button -->
                  <button class="submit" type="submit">Submit</button>

                  <!-- Login Link -->
                  <p class="signin">Already have an account? <router-link to="/login">Sign in</router-link></p>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <navbottom/>
</template>

<script>
import navbottom from '@/components/navbottom.vue';
export default {
  components:{
    navbottom,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
    };
  },
  methods: {
signUp() {
  // Reset error message
  this.errorMsg = '';

  if (this.password !== this.confirmPassword) {
    this.errorMsg = 'Passwords do not match.';
    return;
  }

  // Create a user object with the form data
  const user = {
    username: this.username,
    email: this.email,
    password: this.password,
  };

  // Send the user data to the server for registration (you need to replace this URL with your actual API endpoint)
  fetch('https://your-api-endpoint.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      if (response.ok) {
        // Registration was successful, you can redirect the user to a login page or perform any other action
        console.log('Registration successful');
      } else {
        // Handle registration errors
        this.errorMsg = 'Registration failed. Please try again.';
      }
    })
    .catch(error => {
      // Handle network or other errors
      this.errorMsg = 'An error occurred. Please try again later.';
      console.error(error);
    });
},
},
};
</script>

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
  width: 90%;
  max-width: 400px;
  text-align: left;
  margin: 20px;
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

.title::before, .title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 35%; /* Center horizontally */
  background-color: royalblue;
  transform: translateX(-50%); /* Adjust for centering */
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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0); /* Start with no shadow */
  transition: box-shadow 0.3s; /* Smooth transition on hover */
}

.title:hover::after {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Add shadow on hover */
}

.message, .signin {
  color: rgba(56, 53, 53, 0.822);
  font-size: 16px; /* Adjust font size for mobile */
  transition: 0.3s ease;
  text-align: center; /* Centers the text horizontally */
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
  text-decoration: underline royalblue; /* Fix the underline property */
}

.flex {
  display: flex;
  flex-direction: column; /* Adjusted to stack labels vertically */
  width: 100%; /* Adjust the width of the form for mobile */
  gap: 10px; /* Adjusted the gap to add spacing between labels */
  transition: 0.3s ease;
}

.form label {
  position: relative;
  margin-bottom: 10px; /* Added margin to create spacing between labels */
}

.form label .input {
  width: 100%; /* Adjusted input width for mobile */
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid darkgrey;
  border-radius: 10px;
  transition: 0.3s ease;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 25px;
  color:darkgray;
  font-size: 0.9em; /* Adjusted font size for mobile */
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em; /* Adjusted font size for mobile */
  transition: 0.3s ease;
}

.form label .input:focus + span, .form label .input:valid + span {
  top: 0px;
  font-size: 0.7em; /* Adjusted font size for mobile */
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
  font-size: 16px; /* Adjusted font size for mobile */
  transform: 0.3s ease;
  transition: 0.3s ease;
  width: 100%; /* Adjusted the width for mobile */
}

.submit:hover {
  background-color: rgba(11, 69, 243, 0.9);
  cursor: pointer;
  transition: 0.3s ease;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
