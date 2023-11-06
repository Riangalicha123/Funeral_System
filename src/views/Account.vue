<template>
  <v-app>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
      <v-app-bar-title class="white--text">
        Karamay Kaagapay Funeral Home.Co
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col md="6" lg="5" class="d-none d-md-block">
          <v-img
            :width="500"
            :height="600"
            aspect-ratio="16/9"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="8" md="6"> <!-- Adjust the size as needed -->
          <v-card elevation="2">
            <v-card-title
              class="headline text-center"
              style="color: rgb(25, 152, 194); font-size: 34px"
            >Create an Account</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="signUp">
                <!-- Your form fields here -->
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="fullName"
                      label="Full Name"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="username"
                      label="Username"
                      required
                      class="custom-text-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      required
                      class="custom-text-field"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="password"
                      label="Password"
                      required
                      type="password"
                      class="custom-text-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="confirmPassword"
                      label="Confirm Password"
                      required
                      type="password"
                      class="custom-text-field"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="address"
                      label="Address"
                      class="custom-text-field"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="age"
                      label="Age"
                      class="custom-text-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field
                      v-model="contactNumber"
                      label="Contact Number"
                      class="custom-text-field"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-select
                      v-model="gender"
                      :items="['Male', 'Female', 'Other']"
                      label="Gender"
                      required
                      class="custom-text-field"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <v-btn
                      color="rgb(25, 152, 194)"
                      @click="signUp"
                      class="extra-large-button"
                    >
                      Create Account
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      age: "",
      contactNumber: "",
      gender: "",
    };
  },
  methods: {
    signUp() {
      // Handle form submission
      console.log("User data:", {
        fullName: this.fullName,
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        address: this.address,
        age: this.age,
        contactNumber: this.contactNumber,
        gender: this.gender,
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
  background: linear-gradient(
    to bottom,
    white 50%,
    #add8e6
  ); /* Vertical gradient from white to light blue */
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
  width: 130%;
}

.submit:hover {
  background-color: rgba(11, 69, 243, 0.9);
  cursor: pointer;
  transition: 0.3s ease;
}
</style>
