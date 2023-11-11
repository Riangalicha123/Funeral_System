<template>
    <v-navigation-drawer class="black--text" v-model="drawer" app style="background-color: skyblue;">
      <v-img
        height="140"
        class="pa-4"
        src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/245296340_354096886513872_5740522077817405999_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEO8Xdo2xX3Vgruj66dwN6NNglac2l3qq02CVpzaXeqrZ7PxI9nFSZHspdQUdT64EFofkx2O03RIKqXNtMcSz6y&_nc_ohc=tOrrraj7QSEAX_7ZfaT&_nc_zt=23&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfBKGb6AFCH6TIFS_OQ_e6XWU664-qeMBNzPY-KYN0KhQQ&oe=6549A396"
      >
      </v-img>
      <div class="text-center">
          <h2 class="red--text">Funeral Homes Co.</h2>
        </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="link in links" :key="link.icon" :to="link.to" link>
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
    drawer: false,
    data() {
      return {
        links: [
        {icon: "mdi-account", text: "Payment Acceptance", to: "/payment"},
          {icon: "mdi-account", text: "Create User Account", to: "/agent"}
        ],
      };
    },
  };
  </script>
  
  <style scoped>

</style>