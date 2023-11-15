<template>
    <v-app>
      <v-container fluid>
        <div class="center-container">
          <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12" md="6" lg="4" xl="3">
              <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto" color="grey-lighten-4" v-bind="props">
                  <v-img :aspect-ratio="16/9" cover :src="item.image">
                    <v-expand-transition>
                      <div
                        v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out"
                        :style="{ backgroundColor: 'rgb(25, 152, 194)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }"
                      >
                        <span class="text-h2">{{ item.price }}</span>
                      </div>
                    </v-expand-transition>
                  </v-img>
    
                  <div class="center-container">
                    <v-card-text class="pt-6">
                      <div class="font-weight-light text-grey text-h6 mb-2">
                        {{ item.category }}
                      </div>
    
                      <h3 class="text-h4 font-weight-light text-blue mb-2">
                        {{ item.name }}
                      </h3>
    
                      <div class="font-weight-light text-h6 mb-2">
                        {{ item.details }}
                      </div>
                    </v-card-text>
                  </div>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-app>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        notificationMessage: false,
        items: [
          {
            image: require("@/assets/img/services2.jpg"),
            price: "₱14,000.00",
            category: "Package A",
            name: "St. Dominique",
            details: "Floral arrangement with lilies, roses, and carnations. Catered meal for attendees.",
          },
          {
            image: require("@/assets/img/services1.jpg"),
            price: "₱17,000.00",
            category: "Package B",
            name: "St. Francis",
            details: "Premium floral arrangement with orchids, roses, and daisies. Gourmet catering service.",
          },
          {
            image: require("@/assets/img/services3.jpg"),
            price: "₱23,000.00",
            category: "Package C",
            name: "St. Paul",
            details: "Luxury floral arrangements with exotic flowers. VIP catering experience.",
          },
          // Add more items as needed
        ],
      };
    },
    methods: {
      showNotification() {
        this.notificationMessage = "This is a notification message.";
      },
    },
  };
  </script>
  
  <style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
    height: 100%;
  
  }
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
  }
  @media screen and (max-width: 600px) {
    .center-container {
      min-height: 50vh;
    }
  }
  </style>
  