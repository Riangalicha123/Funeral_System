<template>
    <v-app id="inspire">
      <Sidebar :drawer="drawer" />
      <Topbar @drawerEvent="drawer = !drawer" />
      <v-main style="background-color: #f5f5f5;">
        <v-container class="py-8 px-6" fluid>
          
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Sidebar from "@/components/Agent/Sidebar.vue";
  import Topbar from "@/components/Agent/Topbar.vue";
  
  export default {
    name: "",
    components: { Topbar, Sidebar,},
    data: () => ({
      cards: ["Today", "Yesterday"],
      drawer: null,
    }),
    methods: {},
  };
  </script>
  