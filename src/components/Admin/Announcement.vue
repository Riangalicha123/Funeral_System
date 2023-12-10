<template>

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
                    <v-text-field
                      v-model="UserId"
                      label="UserId"
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
        <!--  <div v-if="show" class="notification">
           Notification ID: {{ notification.NotificationId }} - User ID: {{ notification.UserId }} - {{ notification.Message }}
         </div> -->
  </template>
  
  <script>
  import { jwtDecode as jwt_decode } from "jwt-decode";
import axios from "axios";
  export default {
    components: {
    },
    data() {
      return {
        UserId: "",
      Message: "",
        show: false,
        notification: {},
      };
    },
    methods: {
    showNotification(notification) {
      this.notification = notification;
      this.show = true;
      
      setTimeout(() => {
        this.show = false;
      }, 3000);
      },
    handleReset() {
      this.UserId = "";
      this.Message = "";
    },
  async submitFeedback() {
      try {
        const response = await axios.post("/postannouncement", {
          UserId: this.UserId,
          Message: this.Message,
        });
        this.UserId = "";
        this.Message = "";
      } catch (error) {
        console.error(error);
      }
    },
    },
  };
  </script>