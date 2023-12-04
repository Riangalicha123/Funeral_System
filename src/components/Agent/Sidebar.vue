<template>
    <v-navigation-drawer class="black--text" app style="background-color: skyblue;">
      <v-img
        height="140"
        class="pa-4"
        src="bg.png"
      >
      </v-img>
      <div class="text-center">
          <h2 class="red--text">Funeral Homes Co.</h2>
        </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="link in links" :key="link.icon" :to="link.to" :search="search" link>
          <template v-slot:prepend>
          <v-icon >{{ link.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: "Sidebar",  
    data() {
      return {
        search:'',
        links: [
          {icon: "mdi-account", text: "Create User Account", to: "/agent"},
          {icon: "mdi-account", text: "Payment Acceptance", to: "/payment"},
        ],
      };
    },
  };
  </script>
  
  <style scoped>

</style>