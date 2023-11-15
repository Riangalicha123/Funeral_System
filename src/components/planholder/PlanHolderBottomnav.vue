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
        { title: "Home", icon: "mdi-home", to: "/planholder/home" },
        { title: "Service", icon: "mdi-coffin", to: "/planholder/service" },
        { title: "Messages", icon: "mdi-email", to: "/planholder/message"},
        { title: "Feedback", icon: "mdi-comment", to: "/planholder/feedback" },
      ],
    }),
  };
  </script>
  
  <style>
  .custom-bottom-nav {
    background-color: rgb(25, 152, 194); 
    box-shadow: 0px 0px 8px rgba(0, 0, 0.1, 0.2);
    padding: 10px; 
    height: 70px !important; 
  }
  
  .custom-bottom-nav .v-btn {
    color: white; 
    margin-top: 20px !important; 
  }
  
  .custom-bottom-nav .v-list-item-title {
    font-size: 15px; 
    margin-top: 2px; 
  }
  
  @media (max-width: 600px) {
    .custom-bottom-nav .v-list-item-title {
      font-size: 10px; 
      margin-top: 0;
    }
  }
  </style>
  