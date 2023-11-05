<template>
  <v-app-bar color="rgb(25, 152, 194)" dark dense>
    <v-app-bar-title class="white--text">Karamay Kaagapay Funeral Home.Co</v-app-bar-title>
    <v-spacer></v-spacer>
    <template v-slot:append>
    </template>
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
                :height="600"
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-img>
            </v-col>

            <!-- Right Column (Registration Form) -->
            <v-col md="6" lg="7" class="d-flex align-center">
              <v-card-text class="text-black">
                <v-form @submit.prevent="signUp">
                  <!-- Title -->
                  <v-card-title class="title">Create Account</v-card-title>

                  <!-- First Name, Middle Name, and Last Name Inputs -->
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field v-model="firstname" label="First Name" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field v-model="middlename" label="Middle Name" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field v-model="lastname" label="Last Name" required></v-text-field>
                    </v-col>
                  </v-row>

                  <!-- Contact Number Input -->
                  <v-text-field v-model="contact" label="Contact Number" required></v-text-field>
                   <!-- Address Input -->
                  <v-text-field v-model="address" label="Address" required></v-text-field>

                  <!-- Email Input -->
                  <v-text-field v-model="email" label="Email" required type="email"></v-text-field>

                  <!-- Password Input -->
                  <v-text-field v-model="password" label="Password" required type="password"></v-text-field>

                  <!-- Error Message -->
                  <v-alert v-if="errorMsg" type="error">{{ errorMsg }}</v-alert>

                  <!-- Create Account Button -->
                  <v-btn class="submit" type="submit">Create Account</v-btn>
                </v-form>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <navbottom/>
</template>

<script>
import navbottom from "@/components/navbottom.vue";

export default {
  components: {
    navbottom,
  },
  data() {
    return {
      firstname: "",
      middlename: "",
      lastname: "",
      contact: "",
      address: "",
      email: "",
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    signUp() {
      // Reset error message
      this.errorMsg = "";

      if (this.password !== this.confirmPassword) {
        this.errorMsg = "Passwords do not match.";
        return;
      }

      // Create a user object with the form data
      const user = {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        contact: this.contact,
        address: this.address,
        email: this.email,
        password: this.password,
      };

      // Send the user data to the server for registration (replace with your API endpoint)
      fetch("https://your-api-endpoint.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (response.ok) {
            // Registration was successful, you can redirect the user to a login page or perform any other action
            console.log("Registration successful");
          } else {
            // Handle registration errors
            this.errorMsg = "Registration failed. Please try again.";
          }
        })
        .catch((error) => {
          // Handle network or other errors
          this.errorMsg = "An error occurred. Please try again later.";
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
  margin: 1%;
}
.card {
  border-radius: 1rem;
  background: linear-gradient(to bottom, white 50%, #ADD8E6); /* Vertical gradient from white to light blue */
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(109, 135, 212, 0.5);
  width: 90%;
  max-width: 400px;
  text-align: left;
  margin: 10px;
  margin-top: 50px;
}



/* Additional styles for the form */
.title {
  font-size: 15px; /* Adjust font size for mobile */
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
  gap: 3px; /* Adjusted the gap to add spacing between labels */
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
