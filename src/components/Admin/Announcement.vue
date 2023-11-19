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
         <div v-if="show" class="notification">
           Notification ID: {{ notification.NotificationId }} - User ID: {{ notification.UserId }} - {{ notification.Message }}
         </div>
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
      this.Email = "";
      this.Message = "";
    },
      async submitAnnouncement() {
        try {
          const response = await axios.post("/submit-announcement", {
            message: this.message,
          });
          this.message = "";

          this.showNotification({
            NotificationId: response.data.NotificationId,
            UserId: response.data.UserId,
            message: response.data.message,
          });
        } catch (error) {
          console.error(error);
          this.showNotification({ Message: 'Error submitting announcement. Please try again.' });
        }
      },
    },
  };
  </script>