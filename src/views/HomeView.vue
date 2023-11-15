<template>
  <v-navigation-drawer v-model="drawer" location="right">
    <v-list-item>
      <v-list-title-content>
        <v-list-item-title class="title"> My Account </v-list-item-title>
      </v-list-title-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <!-- Show Login and Register when user is not logged in -->
      <v-list-item v-if="!loggedIn" @click="redirectToLogin" link>
        <template v-slot:prepend>
          <v-icon>mdi mdi-login</v-icon>
        </template>
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="!loggedIn" @click="redirectToRegister" link>
        <template v-slot:prepend>
          <v-icon>mdi-account-plus</v-icon>
        </template>
        <v-list-item-title>Register</v-list-item-title>
      </v-list-item>
      <!-- Show Logout when user is logged in -->
      <v-list-item v-if="loggedIn" @click="logout" link>
        <template v-slot:prepend>
          <v-icon>mdi-logout</v-icon>
        </template>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar scroll-behavior="inverted" color="rgb(25, 152, 194)" dark dense>
      <template v-slot:append>
        <v-app-bar-nav-icon @click="drawer = !drawer" style="font-size: 38px; color: white !important"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title class="white--text headline font-weight-medium text-h4 text-center text-md-start">
        Funeral Homes
      </v-app-bar-title>
      
      
    
    <v-spacer></v-spacer>
    <v-btn @click="showNotification" icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-dialog v-model="notificationMessage" max-width="400">
      <v-card>
        <v-card-title>Notification</v-card-title>
        <v-card-text>{{ notificationMessage }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="notificationMessage = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
<v-app id="inspire">
  

  

  <v-main>
    <!-- Section 1: Hero Banner -->
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-card class="mx-auto" shaped outlined>
          <v-parallax
            src="https://wallpapers.com/images/hd/funeral-background-l8wvr5vc978816f2.jpg"
          >
  
            <div class="d-flex flex-column fill-height justify-center align-center text-black">
              <h1
                
                style="
                  font-family: 'Pacifico', cursive !important;
                  font-weight: bold;
                  font-size: 90px !important;
                  color:rgb(7, 131, 172)!important;
                "
              >
              
              <!--<v-row justify="center">
                <v-col xs="12" sm="10" md="8" lg="11" offset-lg="1" cols="12" class="d-flex flex-column fill-height justify-center align-center text-black">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    dense
                    rounded
                    class="mx-auto"
                    :style="{ width:'410%'  }"
                    @input="searchItems"
                    style="color: rgb(25, 152, 194)"
                  ></v-text-field>
                </v-col>
              </v-row>-->
                Welcome
              </h1>
              <h2
                
                style="
                font-family: 'Glass Antiqua', sans-serif !important;
                  font-weight: bold;
                  font-size: 22px !important;
                  background: linear-gradient(to bottom, lightblue, rgb(37, 85, 230));
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
                  transition: background 0.3s ease, color 0.3s ease;
                "
              >
                Karamay Kaagapay Funeral Homes.Co
              </h2>
              <h2 style="color: rgb(55, 96, 221);">DAMAYAN BURIAL PROGRAM</h2>
              <br>
              
            </div>
          </v-parallax>
         
          <v-container class="fill-height" fluid style="min-height: 434px">
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-card>
                  <v-img
                    src="funeral7.jpg"
                    height="300" 
                    width="100%"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                </v-card>
              </v-col>
        
              <v-col cols="12" sm="6" md="6">
                <v-card>
                  <v-img
                    src="funeral6.jpg"
                    height="300" 
                    width="100%"
                    cover
                    class="bg-grey-lighten-2"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-card-text style="text-align: center">
            <p class="hero-description text-h6">
              <h3 style="color: rgb(209, 60, 60); font-family: 'Valera Round', sans-serif;">
                WE COVER: NO AGE AND BENEFICIARIES LIMIT AND ANY HEALTHY CONDITION
            </h3>            
              <br>
              At Our Funeral Home, we understand the importance of providing
              compassionate and supportive funeral services during your difficult
              time of loss. We are committed to helping you through the grieving
              process and ensuring a meaningful farewell for your loved ones.
            </p>
          </v-card-text>
         
        </v-card>
      </v-col>
    </v-row>

    
    
   
    <!-- Section 2: Services -->

    <v-row class="d-flex justify-center">
      <v-col cols="auto">
        <v-card
          class="mx-auto"
          max-width="420"
          title="Funeral Planning"
          append-icon="mdi-check"
          style="
            background: linear-gradient(to bottom, white, rgb(25, 152, 194));
          "
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-cog-outline" color="black"></v-icon>
          </template>
          <v-card-text
            >We help you plan every detail of the funeral to create a
            meaningful and personalized service.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card
          class="mx-auto"
          max-width="420"
          title="Cremation Services"
          append-icon="mdi-check"
          style="background: linear-gradient(to bottom, white, rgb(25, 152, 194));"
        >
        <template v-slot:prepend>
          <v-icon icon="mdi-coffin" color="black"></v-icon>
        </template>     
          <v-card-text>
            Our cremation services provide a respectful and dignified farewell for your loved ones.
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col cols="auto">
        <v-card
          class="mx-auto"
          max-width="420"
          title="Memorial Services"
          append-icon="mdi-check"
          style="
            background: linear-gradient(to bottom, white, rgb(25, 152, 194));
          "
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-candle" color="black"></v-icon>
          </template>
          <v-card-text
            >We organize beautiful memorial services to honor your loved
            ones.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card
          class="mx-auto"
          max-width="420"
          title="Burial"
          append-icon="mdi-check"
          style="
            background: linear-gradient(to bottom, white, rgb(25, 152, 194));
          "
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-church" color="black"></v-icon>
          </template>
          <v-card-text
            >We assist with burial arrangements, ensuring a respectful final
            resting place for your loved ones.</v-card-text
          >
        </v-card>
      </v-col>
      <!--<v-card-actions class="text-center">
                <v-btn color="primary" to="/services">View Services</v-btn>
              </v-card-actions>-->
    </v-row>

    <!-- Section 3: Contact -->
    <!-- First Card: Word of the Day -->
    
    <v-row>
      <v-col cols="12" md="4" class="ml-3">
        <v-card
          class="mx-auto"
          max-width="800"
          style="
            background: linear-gradient(to bottom, white, rgb(25, 152, 194));
            height: 400px; 
          "
        >
          <v-card-text>
            <!-- Unique Design for the Card Title with Map Marker Icon -->
            <div class="d-flex align-center mb-4">
              
              <h1 class="text-h3" style="font-weight: bold; font-size: 40px; color: rgb(7, 131, 172) !important;">
                Branch Information
              </h1>
            </div>
            <br>
            <br>
            <!-- Branch Information with Icons -->
            <v-row>
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-2">mdi-map-marker-outline</v-icon>
                <p class="text-h4 text--primary">Calapan Branch</p>
              </div>
              
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-2">mdi-map</v-icon>
                <p>Location: St. Isabel Calapan City, Oriental Mindoro</p>
              </div>
              
              <div class="d-flex align-center mb-4">
                <v-icon color="primary" class="mr-2">mdi-phone</v-icon>
                <p>Contact: 0917-674-5813</p>
              </div>
            </v-row>
             
      
            <p class="text--primary">
              Our main branch is conveniently located in the heart of the city, providing compassionate funeral services to the community.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      
  
      <!-- Column 2: Branch Information -->
      <v-col cols="12" md="" class="mr-3">
        <v-card
          class="mx-auto"
          max-width="600"
          style="
            background: linear-gradient(to bottom, white, rgb(25, 152, 194));
            height: 400px;
          "
        >
          <v-card-text>
            <v-row align="end">
              <!-- Icon for Mission -->
              
      
              <v-col cols="11">
                <h1
                  class="text-h3 mb-10"
                  style="
                    font-weight: bold;
                    font-size: 40px !important;
                    color: rgb(7, 131, 172) !important;
                  "
                >
                  Mission and Vision
                </h1>
      
                <!-- Our Mission -->
                <p class="text-h4 text--primary" style="font-size: 28px; margin-bottom: 10px;">
                  <v-icon color="primary">mdi-bullseye</v-icon> Our Mission
                </p>
                <div class="text--primary" style="font-size: 18px; margin-bottom: 10px;">
                  To offer/provide affordable, decent services filled with Filipino heart and soul.
                </div>
      
                <!-- Our Vision -->
                <p class="text-h4 text--primary" style="font-size: 28px; margin-bottom: 10px;">
                  <v-icon color="primary">mdi-eye</v-icon> Our Vision
                </p>
                <div class="text--primary" style="font-size: 18px; margin-bottom: 10px;">
                  To create memorable funeral experiences.
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      
      
  
      <!-- Column 3: Contact Information -->
      <v-col cols="12" md="4" class="mr-3"> 
        <v-card
          class="mx-auto"
          max-width="900"
          style="
            background: linear-gradient(to bottom, white, rgb(25, 152, 194));
            height: 400px; 
          "
        >
          <v-card-title class="text-h3 text-center">
            <h1
              class="text-h3 mb-10"
              style="
              
              font-weight: bold;
              font-size: 40px !important;
              color:rgb(7, 131, 172)!important;
                
              "
            >
              Contact Us
            </h1>
            <p class="contact-description text-h6">
              We're here to assist you with any questions .
            </p>
            <p class="contact-description text-h6"> Don't hesitate to get in touch with us.</p>
          </v-card-title>
  
          <v-card-text>
            <div class="contact-info">
              
              <v-divider inset></v-divider>
  
               <v-card-text>
            <div class="contact-info">
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon> mdi-map-marker </v-icon>
                </template>
                <template v-slot:default>
                  <strong>Address:</strong> 123 Sta. Isabel, Calapan City, Oriental Mindoro
                </template>
              </v-list-item>
              
              <v-divider inset></v-divider>
  
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon> mdi-phone </v-icon>
                </template>
                <template v-slot:default>
                  <strong>Phone:</strong> 0917-674-5813
                </template>
                <template v-slot:append>
                  <v-icon> mdi-message-text </v-icon>
                </template>
              </v-list-item>
              <v-divider inset></v-divider>
  
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon> mdi-email </v-icon>
                </template>
                <template v-slot:default>
                  <strong>Email:</strong> info@funeralhome.com
                </template>
                <template v-slot:append>
                  <v-icon> mdi-message-text </v-icon>
                </template>
              </v-list-item>
              <v-divider inset></v-divider>
  
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon> mdi-facebook </v-icon>
                </template>
                <template v-slot:default>
                  <strong>Facebook:</strong>
                  <a href="https://www.facebook.com/your-funeral-home-page" target="_blank">FuneralHomePage</a>
                </template>
                <template v-slot:append>
                  <v-icon> mdi-message-text </v-icon>
                </template>
              </v-list-item>
            </div>
          </v-card-text>
              
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
  </v-main>
  
</v-app>
<Chat/>
<navbottom/>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<script>
import Chat from "@/components/Chat.vue";
import navbottom from "@/components/navbottom.vue";
import { jwtDecode as jwt_decode } from "jwt-decode";
import axios from 'axios';
export default {
  components:{
      navbottom,
      Chat,
  },
data: () => ({ 
  drawer: null,
  loggedIn: false,
  notificationMessage: null, // Initialize as an empty string
}),

methods: {
  redirectToLogin() {
    this.$router.push("/login");
  },
  redirectToRegister() {
    this.$router.push("/register");
    
  },
  showNotification() {
    // Set the notification message you want to display
    this.notificationMessage = "This is a sample notification message.";
  },
},

};
</script>



<style>
.v-card {
  background-color: #f8f8f8; /* Light gray background */
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.v-card-title h1 {
  margin: 0; /* Remove margin for the title */
}

.contact-description {
  color: #555;
}

.contact-info strong {
  color: #333;
}

.contact-info a {
  color: #007bff; /* Blue color for the link */
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline; /* Underline on hover */
}
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
.custom-card {
  border: 1px solid blue !important; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important; 
}
</style>
