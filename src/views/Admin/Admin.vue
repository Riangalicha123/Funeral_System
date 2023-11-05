<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer" />
    <Topbar @drawerEvent="drawer = !drawer" />
    <v-main style="background-color: #f5f5f5;">
      <v-container class="py-8 px-6" fluid>
        <Dashboard />
        <Chat/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Admin/Sidebar.vue";
import Topbar from "@/components/Admin/Topbar.vue";
import Dashboard from "@/components/Admin/Dashboard.vue";
import Chat from "@/components/Chat.vue";
export default {
  name: "Admin",
  components: { Topbar, Sidebar, Dashboard,Chat},
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
  methods: {},
};
</script>
