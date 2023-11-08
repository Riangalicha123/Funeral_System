<template>
  <div class="app">
    <v-app>
      <v-app-bar color="rgb(25, 152, 194)" dark dense>
        <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-slot:append>
          <v-app-bar-nav-icon @click="drawer = !drawer" style="font-size: 38px; color: white !important"></v-app-bar-nav-icon>
        </template>
        <v-btn @click="showNotification" icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-dialog v-model="notificationMessage" max-width="400">
          <v-card>
            <v-card-title>Notification</v-card-title>
            <v-card-text>{{ notificationMessage }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="notificationMessage = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-app-bar>
      <v-main>
        <!-- Section 1: Hero Banner -->
        <v-row class="d-flex justify-center">
          <v-col cols="12">
            <v-card class="mx-auto" shaped outlined style="background: linear-gradient(to bottom, rgb(25, 152, 194), white);">
              <v-parallax
                src="https://wallpapers.com/images/hd/funeral-background-l8wvr5vc978816f2.jpg"
              >
                <div class="d-flex flex-column fill-height justify-center align-center text-black">
                  <h1 class="text-h1  mb-10" style="font-weight: bold; font-size: 15px; background: linear-gradient(to bottom, lightblue, rgb(37, 85, 230)); background-clip: text; -webkit-background-clip: text; color: transparent; transition: background 0.3s ease, color 0.3s ease">
                    Welcome
                  </h1>
                  <h2 class="subheading" style="font-weight: medium; font-size: 20px; background: linear-gradient(to bottom, lightblue, rgb(37, 85, 230)); background-clip: text; -webkit-background-clip: text; color: transparent; transition: background 0.3s ease, color 0.3s ease">
                    Karamay Kaagapay Funeral Home.Co
                  </h2>
                </div>
              </v-parallax>
              <v-card-text style="text-align: center;">
                <p class="hero-description text-h6">
                  At Our Funeral Home, we understand the importance of providing compassionate and supportive funeral services during your difficult time of loss. We are committed to helping you through the grieving process and ensuring a meaningful farewell for your loved ones.
                </p>
              </v-card-text>              
              <v-card-actions class="text-center">
                <v-btn color="primary" to="/about">Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        
        <!-- Section 2: Services -->

          <v-row class="d-flex justify-center">
            <v-col cols="auto">
              <v-card
                class="mx-auto"
                max-width="380"
                title="Funeral Planning"
                append-icon="mdi-check"
                style="background: linear-gradient(to bottom, white, rgb(25, 152, 194));"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-cog-outline" color="black"></v-icon>
                </template>
                <v-card-text>We help you plan every detail of the funeral to create a meaningful and personalized service.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card
                class="mx-auto"
                max-width="380"
                title="Memorial Services"
                append-icon="mdi-check"
                style="background: linear-gradient(to bottom, white, rgb(25, 152, 194));"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-candle" color="black"></v-icon>
                </template>
                <v-card-text>We organize beautiful memorial services to honor your loved ones.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card
                class="mx-auto"
                max-width="380"
                title="Burial"
                append-icon="mdi-check"
                style="background: linear-gradient(to bottom, white, rgb(25, 152, 194));"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-church" color="black"></v-icon>
                </template>
                <v-card-text>We assist with burial arrangements, ensuring a respectful final resting place for your loved ones.</v-card-text>
              </v-card>
            </v-col>
            <!--<v-card-actions class="text-center">
                  <v-btn color="primary" to="/services">View Services</v-btn>
                </v-card-actions>-->
          </v-row>
        
        
        <!-- Section 3: Contact -->
        <v-row class="d-flex justify-center">
          <v-col cols="12">
            <v-card class="mx-auto" shaped outlined>
              <v-card-title class="text-h3 text-center">
               
                <h1 class="text-h3  mb-10" style="font-weight: bold; font-size: 15px; background: linear-gradient(to bottom, lightblue, rgb(37, 85, 230)); background-clip: text; -webkit-background-clip: text; color: transparent; transition: background 0.3s ease, color 0.3s ease">
                  Contact Us
                </h1>
              </v-card-title>
              <v-card-text class="text-center">
                <p class="contact-description text-h6">
                  We're here to assist you with any questions, concerns, or to help you schedule an appointment. Don't hesitate to get in touch with us.
                </p>
              </v-card-text>
              
              
              <v-card-text>
                <div class="contact-info">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon>
                        mdi-map-marker
                      </v-icon>
                    </template>
                    <template v-slot:default>
                      <strong>Address:</strong> 123 Sta. Isabel, Calapan City, Oriental Mindoro
                    </template>
                  </v-list-item>
                  <v-divider inset></v-divider>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon>
                        mdi-phone
                      </v-icon>
                    </template>
                    <template v-slot:default>
                      <strong>Phone:</strong> (123) 456-7890
                    </template>
                    <template v-slot:append>
                      <v-icon>
                        mdi-message-text
                      </v-icon>
                    </template>
                  </v-list-item>
                  <v-divider inset></v-divider>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon>
                        mdi-email
                      </v-icon>
                    </template>
                    <template v-slot:default>
                      <strong>Email:</strong> info@funeralhome.com
                    </template>
                    <template v-slot:append>
                      <v-icon>
                        mdi-message-text
                      </v-icon>
                    </template>
                  </v-list-item>
                  <v-divider inset></v-divider>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon>
                        mdi-facebook
                      </v-icon>
                    </template>
                    <template v-slot:default>
                      <strong>Facebook:</strong> <a href="https://www.facebook.com/your-funeral-home-page" target="_blank">FuneralHomePage</a>
                    </template>
                    <template v-slot:append>
                      <v-icon>
                        mdi-message-text
                      </v-icon>
                    </template>
                  </v-list-item>
                </div>
              </v-card-text>
              <v-card-actions class="text-center">
                <v-btn color="primary" to="/contact">Get in Touch</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
      <v-navigation-drawer
        v-model="drawer"
        app
        location="right"
        class="white--text"
        dark
        color="light-blue"
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
    </v-app>
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
    notificationMessage: null, // Initialize as an empty string
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
