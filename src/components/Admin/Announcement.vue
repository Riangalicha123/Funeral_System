<template>
      <v-container>
        <v-row justify="center" style="padding-top: 10%">
          <v-col cols="12" sm="8" md="6">
            <v-card elevation="2">
              <v-card-title
                class="headline text-center"
                style="color: rgb(25, 152, 194); font-size: 24px"
              >
                Announcement
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
                    <v-btn color="rgb(25, 152, 194"  @click="signUp" class="extra-large-button">Submit </v-btn>
                  </v-col>
                    <v-col cols="12" class="text-center">
                      <v-btn color="grey" @click="handleReset" class="extra-large-button">Clear</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </template>
  
  <script>
  export default {
    components: {
    },
    data() {
      return {
        Email: "",
        Message: "",
      };
    },
    methods: {
    handleReset() {
      this.Email = "";
      this.Message = "";
    },
      async submitAnnouncement() {
        try {
          const response = await axios.post("/submit-announcement", {
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