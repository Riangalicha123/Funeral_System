<template>
  <v-app>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
      <v-app-bar-title class="white--text">Karamay Kaagapay Funeral Home.Co</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append></template>
    </v-app-bar>
    <v-container class="py-5 h-100">
      <v-row justify="center" align="center" class="h-100">
        <v-col cols="12" sm="10" md="8">
          <v-card class="elevation-3" shaped>
            <v-row no-gutters>
              <!-- Left Column (Image) -->
              <v-col md="6" lg="5" class="d-none d-md-block">
                <v-img
                  :width="550"
                  :height="650"
                  aspect-ratio="16/9"
                  cover
                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img>
              </v-col>
  
              <!-- Right Column (Login Form) -->
              <v-col cols="12" md="9" lg="7" class="d-flex align-center">
                <v-card-text class="text-black">
                  <v-form @submit.prevent="submitForm">
                    <v-card-title class="text-h4 blue--text text-center" style="margin-top: -50px;">Create Account</v-card-title>
                    
                    <v-row dense>
                      <v-col cols="12">
                        <v-text-field v-model="fullName" label="Full Name" required></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" sm="6">
                        <v-text-field v-model="username" label="Username" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field v-model="email" label="Email" required type="email"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" sm="6">
                        <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field v-model="confirmPassword" label="Confirm Password" required type="password"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12">
                        <v-text-field v-model="address" label="Address" required></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12" sm="6">
                        <v-text-field v-model="age" label="Age" required type="number"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field v-model="contactNumber" label="Contact Number" required type="tel"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="12">
                        <v-select v-model="gender" :items="genderOptions" label="Gender" required></v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-btn type="submit" class="royal-blue-button">Submit</v-btn>
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
  </v-app>
</template>


<script>
import navbottom from "@/components/navbottom.vue";
export default {
  components: {
    navbottom,
  },

  data() {
    return {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      age: null,
      gender: null,
      genderOptions: ['Male', 'Female', 'Other'],
      contactNumber: ''
    };
  },
  methods: {
    submitForm() {
      
    }
  }
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
.blue--text {
  color: blue; 
  font-size: 28px; 
  padding: 10px; 
}
.royal-blue-button {
  background-color: royalblue; 
  color: white; 
  width: 190%; 
  height: 100%;
  font-size: 20px; 
  padding: 15px; 
  text-align: center;
 }
 .v-application {
  background-image: url('https://img.freepik.com/free-vector/white-minimal-hexagons-background_79603-1453.jpg?size=626&ext=jpg&ga=GA1.1.1704544460.1673071579&semt=ais');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; 
}
.card {
  border-radius: 1rem;
  background: linear-gradient(
    to bottom,
    white 50%,
    #add8e6
  ); 
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(109, 135, 212, 0.5);
  width: 140%;
  max-width: 400px;
  text-align: left;
  margin: 20px;
  margin-left: -60px;
  margin-top: 50px;
}

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

.message,
.signin {
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
  margin-bottom: 5px; 
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
  top: 10px;
  color: darkgray;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 10px;
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
  color: rgb(66, 157, 187)!important;
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
