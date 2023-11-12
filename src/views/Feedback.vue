<template>
  <v-app>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
      <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <navbottom />
    <v-container>
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
                    <v-text-field v-model="Email" label="Email"></v-text-field>
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
    </v-container>
  </v-app>
</template>

<script>
import navbottom from "@/components/navbottom.vue";
import axios from "axios";
export default {
  components: {
    navbottom,
  },
  data() {
    return {
      Email: "",
      Message: "",
    };
  },
  methods: {
    async submitFeedback() {
      try {
        const response = await axios.post("/submit-feedback", {
          Email: this.Email,
          Message: this.Message,
        });
        this.Email = "";
        this.Message = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
