<template>
    <v-navigation-drawer v-model="drawer" app style="background-color: skyblue;">
      <v-img
        height="140"
        class="pa-4"
        src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/245296340_354096886513872_5740522077817405999_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEO8Xdo2xX3Vgruj66dwN6NNglac2l3qq02CVpzaXeqrZ7PxI9nFSZHspdQUdT64EFofkx2O03RIKqXNtMcSz6y&_nc_ohc=tOrrraj7QSEAX_7ZfaT&_nc_zt=23&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfBKGb6AFCH6TIFS_OQ_e6XWU664-qeMBNzPY-KYN0KhQQ&oe=6549A396"
      >
      </v-img>
      <div class="text-center">
          <h2 class="white--text">Funeral Homes Co.</h2>
        </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
    
    data() {
      return {
        links: [
          ["mdi-microsoft-windows", "Dashboard"],
          ["mdi-account", "Profile"],
          ["mdi-clipboard-list-outline", "Products"],
          ["mdi-card-account-details-outline", "Orders"],
          ["mdi-cog", "System Setting"],
        ],
      };
    },
  };
  </script>
  
  <style scoped>

</style>