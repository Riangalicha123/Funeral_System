<template>
  <v-navigation-drawer class="black--text" app style="background-color: rgb(25, 152, 194);">
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
  data() {
    return {
      links: [
        {icon: "mdi-microsoft-windows", text: "Dashboard", to:"/admin"},
        {icon: "mdi-account", text: "PlanHolder", to: "/planholder"},
        {icon: "mdi-account", text: "Agent", to: "/admin-record"},
        {icon: "mdi-account", text: "Payment History", to: "/history"},
        {icon: "mdi-comment", text: "Feedback", to: "/feedbackk"},
        {icon: "mdi-mail", text: "Announcement", to: "/announcement"},
        
      ],
    };
  },
};
</script>

<style scoped>
</style>
