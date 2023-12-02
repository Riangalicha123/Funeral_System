<template>
  <Sidebar/>
  <v-app-bar app color="rgb(25, 152, 194)" dark elevation="3">
     <v-app-bar-nav-icon></v-app-bar-nav-icon>
     <v-row justify="center">
       <v-col lg="11" offset-lg="1" cols="30">
         <v-text-field
           v-model="searchQuery"
           append-icon="mdi-magnify"
           label="Search"
           dense
           rounded
           full-width
           @keyup.enter="searchItems"
           style="margin-top: -15px;"
           color="white"
         ></v-text-field>
       </v-col>
     </v-row>
     
     <v-btn icon @click="toggleNotificationDialog" style="cursor: pointer" class="ml-auto">
       <v-badge content="3" color="red">
         <v-icon>mdi-bell</v-icon>
       </v-badge>
     </v-btn>
     
     <v-dialog v-model="notificationDialogVisible" max-width="400">
       <v-card>
         <v-card-title class="headline">Notifications</v-card-title>
         <v-divider></v-divider>
         <v-list>
           <v-list-item>
             <v-list-item-avatar>
               <v-icon color="primary">mdi-email</v-icon>
             </v-list-item-avatar>
             <v-list-item-content>
               <v-list-item-title>New Message</v-list-item-title>
               <v-list-item-subtitle>John sent you a new message</v-list-item-subtitle>
             </v-list-item-content>
           </v-list-item>
         </v-list>
         <v-card-actions>
           <v-btn text @click="closeNotificationDialog">Close</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>
     <v-menu v-model="userMenuVisible" offset-y>
       <template v-slot:activator="{ attrs, on }">
         <v-btn icon v-bind="attrs" v-on="on" style="cursor: pointer">
          
     <v-btn icon @click="toggleUserMenu" style="cursor: pointer">
       <v-badge dot bottom color="green">
         <v-avatar size="40">
           <v-img src="https://randomuser.me/api/portraits/women/81.jpg" />
         </v-avatar>
       </v-badge>
     </v-btn> 
         </v-btn>
       </template>
       <v-list>
         <v-list-item two-line>
           <v-list-item-avatar>
             <img src="https://randomuser.me/api/portraits/women/81.jpg" />
           </v-list-item-avatar>
           <v-list-item-content>
             <v-list-item-title>Jane Smith</v-list-item-title>
             <v-list-item-subtitle>Logged In</v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item>
         <v-divider />
         <v-list-item v-for="pro in pros" :key="pro.icon" :to="pro.to" link>
           <v-list-item-icon>
             <v-icon>mdi-account</v-icon>
           </v-list-item-icon>
           <v-list-item-title>
             {{pro.title}}
           </v-list-item-title>
         </v-list-item>
         <v-list-item @click="logOut">
           <v-list-item-icon>
             <v-icon>mdi-logout</v-icon>
           </v-list-item-icon>
           <v-list-item-title>
             Logout
           </v-list-item-title>
         </v-list-item>
       </v-list>
     </v-menu>
   </v-app-bar>
 
 <Plan/>
</template>

<script>
import axios from 'axios';
import Sidebar from "@/components/Admin/Sidebar.vue";
import Plan from "@/components/Admin/Plan.vue";
export default {
 components: { Sidebar, Plan},
 data() {
  return {
    searchQuery: "",
      links: [
        {icon: "mdi-microsoft-windows", text: "Dashboard", to:"/admin"},
        {icon: "mdi-account", text: "PlanHolder", to: "/planholder"},
        {icon: "mdi-account", text: "Agent", to: "/admin-record"},
        {icon: "mdi-comment", text: "Feedback", to: "/feedbackk"},
        {icon: "mdi-mail", text: "Announcement", to: "/announcement"},
        
      ],
    notificationDialogVisible: false,
       userMenuVisible: false,
       pros: [
       {title: "Profile", to:"/admin/profile"},
     ],
  }
 },
 methods: {
  searchItems() {
    // Logic to handle the search and redirection based on the searchQuery
    if (this.searchQuery === "dashboard") {
      this.$router.push("/admin"); // Redirect to Dashboard link
    } else if (this.searchQuery === "planholder") {
      this.$router.push("/planholder"); // Redirect to PlanHolder link
    }else if (this.searchQuery === "agent") {
      this.$router.push("/admin-record"); // Redirect to PlanHolder link
    }else if (this.searchQuery === "feedbackk") {
      this.$router.push("/feedbackk"); // Redirect to PlanHolder link
    }else if (this.searchQuery === "announcement") {
      this.$router.push("/announcement"); // Redirect to PlanHolder link
    }
  },
  toggleNotificationDialog() {
       this.notificationDialogVisible = !this.notificationDialogVisible;
     },
     closeNotificationDialog() {
       this.notificationDialogVisible = false;
     },
     toggleUserMenu() {
       this.userMenuVisible = !this.userMenuVisible;
     },
     viewProfile() {
       
     },
     logOut() {
       // Remove the token from the client-side storage
       sessionStorage.removeItem('token');
       this.token = false; // Update the token state
       this.$router.push('/login');
     },
 }
}

</script>
<style scope>
.v-application {
 background-image: url("https://t3.ftcdn.net/jpg/03/27/46/14/360_F_327461491_FWBhMuNNJLZQe1vXboG8eMu8uHGGZ2jf.jpg");
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-attachment: fixed;
}
</style>