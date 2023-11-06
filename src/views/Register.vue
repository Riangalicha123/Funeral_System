<template>
  <v-app-bar color="rgb(25, 152, 194)" dark dense>
    <v-app-bar-title class="white--text"
      >Karamay Kaagapay Funeral Home.Co</v-app-bar-title
    >
    <v-spacer></v-spacer>
    <template v-slot:append> </template>
  </v-app-bar>
  <v-container class="py-5 h-100">
    <v-row justify="center" align="center" class="h-100">
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-3" shaped>
          <v-row no-gutters>
            <!-- Left Column (Image) -->
            <v-col md="6" lg="5" class="d-none d-md-block">
              <v-img
                :width="500"
                :height="630"
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-img>
            </v-col>

            <!-- Right Column (Register Form) -->
            <v-col md="6" lg="7" class="d-flex align-center">
              <v-card-text class="text-black">
                <v-form @submit.prevent="register">
                  <v-card-title class="title">Register</v-card-title>
                  <v-card-subtitle class="message"
                    >Create an account to get started.</v-card-subtitle
                  >
                  <br>
                  <!-- Username Field -->
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="username" label="Username" required></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- Email Field -->
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="email" label="Email" required type="email"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- Password Field -->
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- Confirm Password Field -->
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="confirmPassword" label="Confirm Password" required type="password"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- Submit Button -->
                  <v-row>
                    <v-col cols="12">
                      <v-btn type="submit" class="royal-blue-button">Register</v-btn>
                    </v-col>
                  </v-row>
                  <!-- Login Link -->
                  <v-row>
                    <v-col cols="12">
                      <v-card-subtitle class="signin">
                        Already have an account?
                        <router-link to="/login">Login</router-link>
                      </v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <navbottom />
</template>

<script>
import navbottom from "@/components/navbottom.vue";
export default {
  components: {
    navbottom,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMsg: "", // Add an error message property to display registration errors
    };
  },
  methods: {
    async register() {
      // Reset error message
      this.errorMsg = "";

      // Check if fields are provided
      if (!this.username || !this.email || !this.password || !this.confirmPassword) {
        this.errorMsg = "Please fill in all fields.";
        return;
      }

      // Check if password and confirm password match
      if (this.password !== this.confirmPassword) {
        this.errorMsg = "Password and Confirm Password do not match.";
        return;
      }

      // You can make an API request to register the user here
      // Replace 'your-api-endpoint' with your actual API endpoint
      try {
        const response = await fetch("https://your-api-endpoint.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
          }),
        });

        if (response.ok) {
          // Registration successful
          // Redirect the user to the login page
          this.$router.push("/login");
        } else {
          // Handle registration errors
          this.errorMsg = "Registration failed. Please check your information.";
        }
      } catch (error) {
        // Handle network or other errors
        this.errorMsg = "An error occurred. Please try again later.";
        console.error(error);
      }
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

.royal-blue-button {
  background-color: royalblue;
  color: white;
  width: 100%; /* Adjusted to 100% for full-width button */
  height: 60px; /* Adjusted height */
  font-size: 20px;
  padding: 15px;
  text-align: center;
}

.card {
  border-radius: 1rem;
  background: linear-gradient(
    to bottom,
    white 50%,
    #add8e6
  );
  /* Vertical gradient from white to light blue */
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(109, 135, 212, 0.5);
  width: 100%; /* Adjusted to 100% for full-width card */
  text-align: left;
  margin: 20px;
}

/* Additional styles for the form */
.title {
  font-size: 24px;
  /* Adjust font size for mobile */
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

.message,
.signin {
  color: rgba(56, 53, 53, 0.822);
  font-size: 16px;
  /* Adjust font size for mobile */
  transition: 0.3s ease;
  text-align: center;
  /* Centers the text horizontally */
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
  width: 100%; /* Adjusted to 100% for full-width form */
  gap: 10px;
}

.form label {
  position: relative;
  margin-bottom: 10px;
  width: 100%; /* Set the label to 100% width */
}

.form label .input {
  width: 100%; /* Set the input to 100% width */
  padding: 10px;
  outline: 0;
  border: 1px solid darkgrey;
  border-radius: 10px;
  transition: 0.3s ease;
  box-sizing: border-box; /* Make sure padding is included in the width */
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: darkgray;
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
  color: darkgray;
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
  width: 100%; /* Adjusted to 100% for full-width button */
}

.submit:hover {
  background-color: rgba(11, 69, 243, 0.9);
  cursor: pointer;
  transition: 0.3s ease;
}
</style>
