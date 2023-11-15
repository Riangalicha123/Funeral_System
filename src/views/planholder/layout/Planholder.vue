<template>
    <v-navigation-drawer v-model="drawer" location="right">
      <v-list-item>
        <v-list-title-content>
          <v-list-item-title class="title"> My Account </v-list-item-title>
        </v-list-title-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item @click="logout" link>
          <template v-slot:prepend>
            <v-icon>mdi-logout</v-icon>
          </template>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    <v-main>
        <router-view></router-view>
    </v-main>
  <PlanHolderBottomnav/>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const drawer = ref(false);
  </script>
  
  <script>
  import PlanHolderBottomnav from "@/components/planholder/PlanHolderBottomnav.vue";
  import { jwtDecode as jwt_decode } from "jwt-decode";
  import axios from 'axios';
  export default {
    components:{
        PlanHolderBottomnav,
    },
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
  
  
  
  <style>
  .v-card {
    background-color: #f8f8f8; /* Light gray background */
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Soft shadow */
  }
  
  .v-card-title h1 {
    margin: 0; /* Remove margin for the title */
  }
  
  .contact-description {
    color: #555;
  }
  
  .contact-info strong {
    color: #333;
  }
  
  .contact-info a {
    color: #007bff; /* Blue color for the link */
    text-decoration: none;
  }
  
  .contact-info a:hover {
    text-decoration: underline; /* Underline on hover */
  }
  .v-navigation-drawer {
    background: linear-gradient(to bottom right, rgb(25, 152, 194), white);
    width: 260px !important;
  }
  
  .v-app-bar {
    background: linear-gradient(to bottom, white, rgb(25, 152, 194));
  }
  
  .app {
    background: rgb(255, 255, 255);
    min-height: 100vh;
  }
  
  .v-icon {
    font-size: 40px;
  }
  .v-list-item-title {
    font-size: 17px !important;
    padding: 5px 1px;
    margin: 10px 0;
  }
  .title {
    font-size: 28px !important;
  }
  .v-app-bar-title {
    font-size: 27px !important;
  }
  
  
  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px !important;
    width: 100%;
  }
  
  .list-item {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 16px;
    color: rgb(255, 255, 255);
  }
  
  .item-title {
    display: inline !important;
    margin-left: 10px !important;
  }
  .custom-card {
    border: 1px solid blue !important; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important; 
  }
  </style>
  