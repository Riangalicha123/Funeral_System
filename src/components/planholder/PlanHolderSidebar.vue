<template>
    <v-navigation-drawer v-model="drawer" location="right">
    <v-list-item>
      <v-list-title-content>
        <v-list-item-title class="title"> My Account </v-list-item-title>
      </v-list-title-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <!-- Show Login and Register when user is not logged in -->
      <v-list-item v-if="!loggedIn" @click="redirectToLogin" link>
        <template v-slot:prepend>
          <v-icon>mdi mdi-login</v-icon>
        </template>
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="!loggedIn" @click="redirectToRegister" link>
        <template v-slot:prepend>
          <v-icon>mdi-account-plus</v-icon>
        </template>
        <v-list-item-title>Register</v-list-item-title>
      </v-list-item>
      <!-- Show Logout when user is logged in -->
      <v-list-item v-if="loggedIn" @click="logout" link>
        <template v-slot:prepend>
          <v-icon>mdi-logout</v-icon>
        </template>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
}),

};
</script>