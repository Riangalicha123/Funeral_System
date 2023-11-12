<template>
    <v-app id="inspire">
      <Sidebar :drawer="drawer" />
      <Topbar @drawerEvent="drawer = !drawer" />
      <v-main style="background-color: #f5f5f5;">
        <v-container>
          <Feedbackk/>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Sidebar from "@/components/Admin/Sidebar.vue";
  import Topbar from "@/components/Admin/Topbar.vue";
  import Feedbackk from "@/components/Admin/Feedbackk.vue";
  export default {
    name: "Admin",
    components: { Topbar, Sidebar, Feedbackk},
    data: () => ({
      cards: ["Today", "Yesterday"],
      drawer: null,
    }),
    methods: {},
  };
  </script>
  