<template>
  <Sidebar/>
 <v-app-bar app color="rgb(25, 152, 194)" dark elevation="3">
   <v-app-bar-nav-icon></v-app-bar-nav-icon>
   <v-row justify="center">
     <v-col lg="11" offset-lg="1" cols="30">
       <v-text-field
         v-model="search"
         append-icon="mdi-magnify"
         label="Search"
         dense
         rounded
         full-width
         @input="searchItems"
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
 
 <v-container style="margin-top:50px;">
  <v-row justify="center" align="center" class="h-100">
            <v-col>
              <v-card class="elevation-3" shaped>
                <!-- Right Column (Register Form) -->
                <v-col cols="14" class="d-flex align-center">
                  <v-card-text>
                    <v-form @submit.prevent="register">
                      <v-card-title class="title">Register for PlanHolder</v-card-title>
                      <br />
                      <!-- Username Field -->
                      <v-row>
                        <v-col cols="4" sm="4">
                          <v-text-field
                            v-model="FirstName"
                            label="First Name"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4" sm="4">
                          <v-text-field
                            v-model="MiddleName"
                            label="Middle Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4" sm="4">
                          <v-text-field
                            v-model="LastName"
                            label="Last Name"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <!-- Email Field -->
                      <v-row>
                        <v-col cols="4" sm="4" >
                          <v-text-field
                            v-model="Email"
                            label="Email"
                            required
                            type="email"
                            hint="email@gmail.com"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4" sm="4">
                          <v-text-field
                            v-model="Password"
                            label="Password"
                            required
                            type="password"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4" sm="4">
                          <v-text-field
                            v-model="confirmPassword"
                            label="Confirm Password"
                            required
                            type="password"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="14" >
                          <v-text-field
                            v-model="Address"
                            label="Address"
                            required
                            hint="City, Province"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="14">
                          <v-text-field
                            v-model="ContactNumber"
                            label="Contact Number"
                            required
                            hint="For Example: 09123456789"
                          ></v-text-field>
                        </v-col>
                        
                      </v-row>
                        
                     
                     
                      <!-- Submit Button -->
                      <v-row class="d-flex justify-center align-center">
                        <v-col>
                          <v-btn type="submit" class="royal-blue-button" >Submit</v-btn>

                        </v-col>
                      </v-row>
                      
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
   
 </v-container>
</template>

<script>
import axios from 'axios';
import Sidebar from "@/components/Agent/Sidebar.vue";
export default {
 components: {Sidebar},
 data() {
    return {
      drawer: null,
      user: [],
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Email: "",
      Password: "",
      confirmPassword: "",
      Address: "",
      ContactNumber: "",
      Role: "PlanHolder",
    };
  },

  methods: {
    async register() {
      if (this.Password !== this.confirmPassword) {
        // Display an error message to the user.
        // You can use a snackbar or a simple alert for this.
        alert("Password and Confirm Password do not match");
        return; // Prevent form submission.
      }
      try {
        const response = await axios.post("register", {
          FirstName: this.FirstName,
          MiddleName: this.MiddleName,
          LastName: this.LastName,
          Email: this.Email,
          Password: this.Password,
          confirmPassword: this.confirmPassword,
          Address: this.Address,
          ContactNumber: this.ContactNumber,
          Role: this.Role,
        });
        this.FirstName = "";
        this.MiddleName = "";
        this.LastName = "";
        this.Email = "";
        this.Password = "";
        this.confirmPassword = "";
        this.Address = "";
        this.ContactNumber = "";

        this.emit("register");
        this.getInfo();
      } catch (error) {
        // Handle network or other errors
        this.errorMsg = "An error occurred. Please try again later.";
        console.error(error);
      }
    },
  },
};
</script>