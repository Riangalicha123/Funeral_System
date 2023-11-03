<template>
  <v-navigation-drawer v-model="drawer" app location="right">
    <v-list-item>
      <v-list-title-content>
        <v-list-item-title class="title"> My Account </v-list-item-title>
      </v-list-title-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-title-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-title-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="info" density="compact">
    <v-app-bar-title>Funeral Homes</v-app-bar-title>

    <v-spacer></v-spacer>

    <template v-slot:append>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
  </v-app-bar>

  <navbuttom/>
</template>

<script>
import navbuttom from '@/components/navbuttom.vue'
export default {
    components:{
        navbuttom,
    },
  data: () => ({
    drawer: null,
    items: [
      { title: "Login", icon: "mdi-help-box", to: "/login" },
      { title: "Register", icon: "mdi-help-box", to: "/register" },
      { title: "Agent Create Account", icon: "mdi-help-box", to: "/account" },
    ],
  }),
};
</script>
