<template>
  <v-bottom-navigation app color="info" grow style="padding: 0">
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
      { title: "Favorite", icon: "mdi-heart", to: "" },
      { title: "Notification", icon: "mdi-bell-ring", to: "" },
      { title: "Feedback", icon: "mdi-comment", to: "" },
    ],
  }),
};
</script>