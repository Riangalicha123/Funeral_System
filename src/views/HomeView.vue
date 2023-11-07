<template>
  <div class="app" >
    <v-app>
      <v-app-bar color="rgb(25, 152, 194)" dark dense>
        <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-slot:append>
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            style="font-size: 38px; color: white !important"
          ></v-app-bar-nav-icon>
        </template>
        <v-btn @click="showNotification" icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-dialog v-model="notificationMessage" max-width="400">
          <v-card>
            <v-card-title>Notification</v-card-title>
            <v-card-text>
              {{ notificationMessage }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="notificationMessage = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
      </v-app-bar>
      <v-main>
        
        <!-- Section 1: Hero Banner --><v-row class="d-flex justify-center">
        <v-col cols="12">
          <v-card class="mx-auto" max-width="3000" shaped outlined>
            <div class="hero-banner">
              <v-img
                src="https://onecms-res.cloudinary.com/image/upload/s--tAxVrlOy--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2023/08/21/istock-451187387.jpg?itok=Wyyz8uNO"
                alt="Home Background"
              ></v-img>
              <div class="hero-text">
                <v-card-title
                  class="text-h3 text-center"
                  style="font-weight: bold; font-size: 15px; background: linear-gradient(to bottom, lightblue, rgb(37, 85, 230)); background-clip: text; -webkit-background-clip: text; color: transparent; transition: background 0.3s ease, color 0.3s ease"
                >
                  Welcome
                </v-card-title>
                <v-card-title
                  class="text-h7 text-center"
                  style="font-weight: bold; color: royalblue; font-size: 20px; transition: color 0.3s ease"
                >
                  Karamay Kaagapay Funeral Home.Co
                </v-card-title>
                <v-card-text style="text-align: center;">
                  <p style="display: inline-block; padding: 20px; background-color: rgba(255, 255, 255, 0.7); font-size: 20px; border-radius: 5px;">
                    At Our Funeral Home, we understand the importance of providing compassionate and supportive funeral services during your difficult time of loss. We are committed to helping you through the grieving process and ensuring a meaningful farewell for your loved ones.
                  </p>
                </v-card-text>
                <v-card-actions class="text-center" style="padding: 20px;">
                  <v-btn color="primary" to="/about">
                    <v-icon left>mdi-information</v-icon>
                    Learn More
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
        
        <!-- Section 2: Services -->
        <v-row class="d-flex justify-center">
          <v-col cols="12">
            <v-card
            class="mx-auto"
            max-width="3000"
            shaped
            outlined
          >
          <v-card-title
          class="text-h3 text-center"
          style="font-weight: bold; font-size: 15px; background: linear-gradient(to bottom, lightblue, rgb(37, 85, 230)); background-clip: text; -webkit-background-clip: text; color: transparent; transition: background 0.3s ease, color 0.3s ease"
        >
          Our Services
        </v-card-title>
          
          <br>
          <v-card-text >
            <p style="display: inline-block; padding: 20px; background-color: rgb(240, 241, 241);font-size: 20px; border-radius: 5px;">
              <p>
                At Our Funeral Home, we offer a wide range of services tailored to meet your specific needs. Our dedicated team is here to assist you through every step of the funeral process. Here are some of the services we provide:
              </p>
              <p><v-icon color="primary">mdi-cog-outline</v-icon> Funeral Planning: We help you plan every detail of the funeral to create a meaningful and personalized service.</p>
              <p><v-icon color="primary">mdi-candle</v-icon> Memorial Services: We organize beautiful memorial services to honor your loved ones.</p>
              <p><v-icon color="primary">mdi-fire</v-icon> Cremation: If you prefer cremation, we offer compassionate and professional cremation services.</p>
              <p><v-icon color="primary">mdi-church</v-icon> Burial: We assist with burial arrangements, ensuring a respectful final resting place for your loved ones.</p>
              <p>
                Whatever your specific needs and preferences may be, we are here to provide the care and support you require during this challenging time.
              </p>
            </p>
          </v-card-text>
          <v-card-actions class="text-center" style="padding: 20px;">
            <v-btn color="primary" to="/services">
              <v-icon left>mdi-information</v-icon>
              View Services
            </v-btn>
          </v-card-actions>
          </v-card>
          </v-col>
        </v-row>

        <!-- Section 3: Contact -->
        <v-row class="d-flex justify-center">
          <v-col cols="12">
            <v-card
            class="mx-auto"
            max-width="3000"
            shaped
            outlined
          >
          <v-card-title
          class="text-h3 text-center"
          style="font-weight: bold; font-size: 15px; background: linear-gradient(to bottom, lightblue, rgb(37, 85, 230)); background-clip: text; -webkit-background-clip: text; color: transparent; transition: background 0.3s ease, color 0.3s ease"
        >
          Contact Us 
        </v-card-title>
          <v-card-text style="text-align: center;">
            <p style="display: inline-block; padding: 20px; font-size: 20px; ">
              We're here to assist you with any questions, concerns, or to help you schedule an appointment. Don't hesitate to get in touch with us.
            </p>
          </v-card-text>
          <v-card-text >
           <p style="display: bottom; padding: 5px; font-size: 20px; ">
            <v-icon left>mdi-map-marker</v-icon>
                    <strong>Address:</strong> 123 Funeral Home Way, Your City, Country
           </p>
           <p style="display: bottom; padding: 5px; font-size: 20px; ">
            <v-icon left>mdi-phone</v-icon>
                    <strong>Phone:</strong> (123) 456-7890
           </p>
           <p style="display: bottom; padding: 5px; font-size: 20px; ">
            <v-icon left>mdi-email</v-icon>
            <strong>Email:</strong> info@funeralhome.com
          </p>
          <p style="display: bottom; padding: 5px; font-size: 20px; ">
            <v-icon left>mdi-facebook</v-icon>
            <strong>Facebook:</strong> <a href="https://www.facebook.com/your-funeral-home-page" target="_blank">FuneralHomePage</a>
          </p>
          </v-card-text>
          <v-card-actions class="text-center" style="padding: 20px;">
            <v-btn color="primary" to="/contact">
              <v-icon left>mdi-email</v-icon>
              Get in Touch
            </v-btn>
          </v-card-actions> 
          </v-card>
          </v-col>
        </v-row>
    </v-main>
    </v-app>
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
    notificationMessage: "", // Initialize as an empty string
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
    showNotification() {
      // Set the notification message you want to display
      this.notificationMessage = "This is a sample notification message.";
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
