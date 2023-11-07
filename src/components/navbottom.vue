<template>
  <v-bottom-navigation app color="info" grow style="padding: 0" class="v-bottom-navigation--absolute right custom-bottom-nav">
    <v-list-item v-for="n in ns" :key="n.title" :to="n.to" link>
      <v-btn style="padding: 0">
        <v-list-item-icon style="padding: 0">
          <v-icon>{{ n.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title style="padding: 0">{{ n.title }}</v-list-item-title>
      </v-btn>
    </v-list-item>
  </v-bottom-navigation>
  
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    ns: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Favorite", icon: "mdi-heart", to: "/favorite" },
      { title: "Notification", icon: "mdi-bell-ring", to: "/notification" },
      { title: "Feedback", icon: "mdi-comment", to: "/feedback" },
    ],
  }),
};
</script>
<style>
.custom-bottom-nav {
  background-color: rgb(25, 152, 194); /* Change to your desired background color */
  box-shadow: 0px 0px 8px rgba(0, 0, 0.1, 0.2);
  padding: 10px; /* Adjust the padding as needed */
  height: 70px !important; /* Increase the height as desired */
}

.custom-bottom-nav .v-btn {
  color: white; /* Change text color to your desired color */
  margin-top: 20px !important; /* Adjust the spacing */
}

.custom-bottom-nav .v-list-item-title {
  font-size: 15px; /* Adjust the font size */
  margin-top: 2px; /* Adjust the spacing */
}
</style>
