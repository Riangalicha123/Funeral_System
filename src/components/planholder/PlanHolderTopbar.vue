<template>
    <v-app-bar scroll-behavior="inverted" color="rgb(25, 152, 194)" dark dense>
      <template v-slot:append>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" style="font-size: 38px; color: white !important"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title class="white--text headline font-weight-medium text-h4 text-center text-md-start">
        Funeral Homes
      </v-app-bar-title>
    
    <v-spacer></v-spacer>
    <v-btn @click="showNotification" icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-dialog v-model="notificationMessage" max-width="400">
      <v-card>
        <v-card-title>Notification</v-card-title>
        <v-card-text>{{ notificationMessage }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="notificationMessage = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<script>
import { jwtDecode as jwt_decode } from "jwt-decode";
import axios from 'axios';
export default {

data: () => ({ 
  drawer: null,

  notificationMessage: null, // Initialize as an empty string
}),

methods: {
  showNotification() {
    // Set the notification message you want to display
    this.notificationMessage = "This is a sample notification message.";
  },
},

};
</script>