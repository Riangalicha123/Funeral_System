<template>
  <v-app>
    <v-container class="py-5 h-100">
      <v-row justify="center" align="center" class="h-100">
        <v-col>
          <v-card class="elevation-3" shaped>
            <v-row no-gutters>
              <!-- Left Column (Image) -->
              <v-col md="6" lg="5" class="d-none d-md-block">
                <v-img
                  :width="500"
                  :height="390"
                  aspect-ratio="16/9"
                  cover
                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img>
              </v-col>

              <!-- Right Column (Login Form) -->
              <v-col md="6" lg="7" class="d-flex align-center">
                <v-card-text class="text-black">
                  <v-form @submit.prevent="login">
                    <v-card-title class="title">Login</v-card-title>
                    <v-card-subtitle class="message"
                      >Login to access your account.</v-card-subtitle
                    >
                    <br />
                    <!-- Email Field -->
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="Email"
                          label="Email"
                          required
                          type="email"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- Password Field -->
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="Password"
                          label="Password"
                          required
                          type="password"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- Submit Button -->
                    <v-row>
                      <v-col cols="12">
                        <v-btn type="submit" class="royal-blue-button"
                          >Login</v-btn
                        >
                      </v-col>
                      <v-col cols="12">
                        <v-card-subtitle class="signin">
                          Don't have an account?
                          <router-link to="/register">Sign up</router-link>
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
      users: [],
      Email: "",
      Password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("loginAuth", {
          Email: this.Email,
          Password: this.Password,
        });
        if (response.data.role === "Admin") {
            // Redirect to admin page
            this.$router.push("/admin");
          } else if (response.data.role === "PlanHolder") {
 
            this.$router.push("/");
          }
        this.getInfo();
      } catch (error) {
        // Handle errors
        console.error("Login error:", error);
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
  background-color: #5ce1e6;
  color: white;
  width: 190%;
  height: 100%;
  font-size: 20px;
  padding: 15px;
  text-align: center;
}
.v-card-text {
  background: linear-gradient(#ffffff, #ffffff, #5ce1e6, #5ce1e6);
}

.v-application {
  background-image: url("https://t3.ftcdn.net/jpg/03/27/46/14/360_F_327461491_FWBhMuNNJLZQe1vXboG8eMu8uHGGZ2jf.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Additional styles for the form */
.title {
  font-size: 24px; /* Adjust font size for mobile */
  color: #5ce1e6;
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
  background-color: #5ce1e6;
  transform: translateX(-50%);
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: #5ce1e6;
  transition: 0.3s ease;
}

.title::after {
  content: "";
  width: 15px;
  height: 15px;
  background-color: #5ce1e6;
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
