<template>
  <div class="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      location="right"
      class="white--text"
      dark
      color="light-blue"
      style="
        background: linear-gradient(to bottom right, rgb(25, 152, 194), white);
        width: 260px !important;
      "
    >
      <v-list-item>
        <v-list-title-content>
          <v-list-item-title class="title"> My Account </v-list-item-title>
        </v-list-title-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="rgb(25, 152, 194)" dark dense>
      <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          style="font-size: 38px; color: white !important"
        ></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <navbottom :openDrawer="openDrawer" />
  </div>
</template>

<script>
import navbottom from "@/components/navbottom.vue";
export default {
  components: {
    navbottom,
  },
  data: () => ({
    drawer: false, // Initially set to false
    items: [
      { title: "Login", icon: "mdi mdi-login", to: "/login" },
      { title: "Register", icon: "mdi-account-plus", to: "/register" },
      { title: "Create Account", icon: "mdi-account", to: "/account" },
    ],
  }),
  methods: {
    openDrawer() {
      this.drawer = true; // Set the drawer to open when this method is called
    },
  },
};
</script>

<style>
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

/* .mdi {
  font-size: 38px;
  color: white !important;
} */

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
</style>
