<template>
  <v-app>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
      <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <navbottom />
      <v-row justify="center" style="padding-top: 10%">
        <v-col cols="12" sm="8" md="6">
          <v-card elevation="2">
            <v-card-title
              class="headline text-center"
              style="color: rgb(25, 152, 194); font-size: 24px"
            >
              Users Feedback
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitFeedback">
                <v-row>
                  <v-col cols="12">
                    <!-- Email Field -->
                    <v-text-field
                      v-if="token"
                      v-model="Email"
                      readonly
                    ></v-text-field>
                    <v-text-field
                      v-else
                      v-model="Email"
                      label="Email"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="Message"
                      label="Message"
                      rows="5"
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <v-btn type="submit" color="primary">Submit Feedback</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-app>
</template>

<script>
import navbottom from "@/components/navbottom.vue";
import { jwtDecode as jwt_decode } from "jwt-decode";
import axios from "axios";
export default {
  components: {
    navbottom,
  },
  data() {
    return {
      Email: this.getEmailFromToken(),
      Message: "",
      token: sessionStorage.getItem('token') !== null,
    };
  },
  methods: {
    getEmailFromToken() {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.email; // Assuming the email is stored in 'sub' field
    }
    return "";
  },
    async submitFeedback() {
      try {
        const response = await axios.post("/submit-feedback", {
          Email: this.Email,
          Message: this.Message,
        });
        this.Message = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
