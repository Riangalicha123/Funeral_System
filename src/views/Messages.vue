<template>
  <v-app>
    <v-container>
      <v-row>
        <!-- Side container for Admin -->
        <v-col cols="3" md="3" sm="10">
          <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <v-card-text>
              <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Profile</p>
              <p v-if="token" style="font-size: 16px;">{{ Email }}</p>
              <p v-else style="font-size: 16px; color: #757575;">No user</p>
            </v-card-text>

            <!-- Move the Admin list items to the side container -->
            <v-list>
      <v-list-item v-for="user in users" :key="user.id" @click="openMessenger(user.Email)">
        <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Admin</p>
        <template v-slot:prepend>
          <v-icon>mdi-account</v-icon>
        </template>
        <v-list-item-title>{{ user.Email }}</v-list-item-title>
        <!-- Add more v-list-item-content slots for other record details -->
      </v-list-item>
    </v-list>

    <v-list>
      <v-list-item v-for="hello in hellos" :key="hello.id" @click="openMessenger(hello.Email)">
        <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Agent</p>
        <template v-slot:prepend>
          <v-icon>mdi-account</v-icon>
        </template>
        <v-list-item-title>{{ hello.Email }}</v-list-item-title>
        <!-- Add more v-list-item-content slots for other record details -->
      </v-list-item>
    </v-list>
          </v-card>
        </v-col>
        <v-col cols="9" md="9" sm="10"  >
          <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <v-card-text v-for="message in messages">
                <p>{{ message.Email }}</p>
              <p>{{ message.Message }}</p>
            </v-card-text>
            <v-card-text v-for="adminmesses in adminmess">
                <p>{{ adminmesses.Email }}</p>
              <p>{{ adminmesses.Message }}</p>
            </v-card-text>
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
                <v-row class="d-flex justify-center">
                  <v-col cols="12" class="text-center">
                    <v-btn type="submit" color="primary">Submit</v-btn>
                  </v-col>
                </v-row>
              </v-form>
          </v-card>
        </v-col>
        <!-- Main content area -->
        <v-col cols="9">
          <v-app-bar color="rgb(25, 152, 194)" dark dense>
            <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn @click="showNotification">
              <v-icon v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-dialog v-model="notificationMessage" max-width="400">
              <v-card>
                <v-card-title>Notification</v-card-title>
                <v-card-text>
                  {{ notificationMessage }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="notificationMessage = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-app-bar>
           
            
        </v-col>
      </v-row>
    </v-container>

    <navbottom />
  </v-app>
</template>

<!-- ... (existing script and style sections) ... -->


<script>
import navbottom from "@/components/navbottom.vue";
import { jwtDecode as jwt_decode } from "jwt-decode";
import axios from 'axios';
export default {
  components: {
    navbottom,
  },
  data() {
    return {
      users:[],
      hellos:[],
      selectedEmail: null,
      notificationMessage: false,
      Email: "",
      token: sessionStorage.getItem('token') !== null,
      newMessage: '',
      messages: [],
      Message: "",
    };
  },
  created() {
    this.getmessageplanholder();
    this.getmessageAdmin();
    this.getAdminRecord();
    this.getAgentRecord();
    if (this.token) {
      this.fetchUserDetails();
    }
  },
  methods: {
    openMessenger(email) {
      this.selectedEmail = email;
      // You can add logic to display the messenger or perform other actions here
    },
    async getmessageplanholder () {
        try {
          const respond = await axios.get('getmessagePlanHolder');
            this.messages = respond.data;
        } catch (error) {
          console.log(error);
        }
      },
      async getmessageAdmin () {
        try {
          const respond = await axios.get('getmessageAdmin');
            this.adminmess = respond.data;
        } catch (error) {
          console.log(error);
        }
      },
    async getAdminRecord () {
        try {
          const respond = await axios.get('getAdminProfiles');
            this.users = respond.data;
        } catch (error) {
          console.log(error);
        }
      },
      async getAgentRecord () {
        try {
          const respond = await axios.get('getAgentProfiles');
            this.hellos = respond.data;
        } catch (error) {
          console.log(error);
        }
      },
    showNotification() {
      this.notificationMessage = "This is a notification message.";
    },
    async fetchUserDetails() {
      try {
        const token = sessionStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        this.Email = decodedToken.email;
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
    
  },
  
};
</script>


<style>
/* Add styles for the message container */
.v-container{
  margin-top: 150px;
}
.message-container {
  margin-top: 20px;
}

/* Style for message cards */
.message-card {
  width: 300px;
  margin: 10px;
}

/* Style for sent messages */
.sent {
  background-color: rgb(25, 152, 194);
  color: white;
}

/* Style for received messages */
.received {
  background-color: #e0e0e0;
}

/* Add styles for the chat card */
.chat-container {
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  padding: 16px;
  background-color: #f5f5f5;
}

/* Add styles for the chat messages */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

/* Add styles for the my-message class */
.my-message {
  background-color: #DCF8C6;
  align-self: flex-end;
  border-radius: 8px;
  margin: 4px 0;
  padding: 8px;
}

/* Add styles for the chat input form */
.chat-input {
  padding: 16px;
}

/* Add styles for the chat toggle button */
.chat-toggle-button {
  position: fixed;
  bottom: 16px;
  right: 26px;
  background-color: white;
}

/* Add styles for the chat toggle button icon */
.chat-toggle-button .v-icon {
  color: rgb(25, 152, 194);
}

/* Add styles for the send button */
.send-button {
  margin-top: 66px;
}

/* Add styles for the message time */
.message-time {
  color: gray;
  font-size: 12px;
}

/* Add responsive styles */
@media (max-width: 600px) {
  .chat-container {
    padding: 8px;
  }

  .chat-messages {
    padding: 8px;
  }

  .chat-input {
    padding: 8px;
  }

  .send-button {
    margin-top: 8px;
  }
}
</style>
