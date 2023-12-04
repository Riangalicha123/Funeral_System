<template>
  <v-app>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
      <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="showNotification">
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

    <v-container fluid >
      <div class="scrollable-container">
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" md="6" lg="4" xl="3">
            <v-hover v-slot="{ isHovering, props }">
              <v-card class="mx-auto" color="grey-lighten-4" v-bind="props">
                <v-img :aspect-ratio="16/9" cover :src="item.image">
                  <v-expand-transition>
                    <div
                      v-if="isHovering"
                      class="overlay d-flex transition-fast-in-fast-out"
                    >
                      <span class="text-h2">{{ item.price }}</span>
                    </div>
                  </v-expand-transition>
                </v-img>
  
                <v-card-text class="pt-6 text-center" style="background-color: rgb(248, 248, 248); box-shadow: 0 4px 8px rgba(0.2, 0.2, 0.2, 0.1);">
                  <div class="font-weight-light text-grey text-h6 mb-2">
                    {{ item.category }}
                  </div>
  
                  <h3 class="text-h4 font-weight-light text-blue mb-2">
                    {{ item.name }}
                  </h3>
  
                  <div class="font-weight-light text-h6 mb-2">
                    {{ item.details }}
                  </div>
                  <div class="ratings">
                    <v-icon v-for="n in 5" :key="n" :color="n <= item.rating ? 'blue' : 'grey'">
                      {{ n <= item.rating ? 'mdi-star' : 'mdi-star-outline' }}
                    </v-icon>
                    <span class="rating-value">{{ item.rating.toFixed(1) }}</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <navbottom />
  </v-app>
</template>

<script>
import navbottom from "@/components/navbottom.vue";

export default {
  components: {
    navbottom,
  },
  data() {
    return {
      notificationMessage: false,
      items: [
  {
    image: "services1.jpg",
    price: "₱24,000.00",
    category: "Funeral Package",
    name: "Elegant Funeral Package",
    details: "Floral arrangement with lilies, roses, and carnations. Catered meal for attendees.",
    rating: 4.5,
  },
  {
    image: "services2.jpg",
    price: "₱27,000.00",
    category: "Premium Package",
    name: "Premium Floral Package",
    details: "Premium floral arrangement with orchids, roses, and daisies. Gourmet catering service.",
    rating: 3.0,
  },
  {
    image: "services3.jpg",
    price: "₱33,000.00",
    category: "Luxury Package",
    name: "Luxury Floral Package",
    details: "Luxury floral arrangements with exotic flowers. VIP catering experience.",
    rating: 3.5,
  },
  {
    image: "kabaong1.png",
    price: "₱14,000.00",
    category: "Basic Casket",
    name: "Simple Wooden Casket",
    details: "Made of wood and a standard size, it is a quality casket.",
    rating: 4.5,
  },
  {
    image: "kabaong2.png",
    price: "₱17,000.00",
    category: "Mid-Range Casket",
    name: "Medium Wooden Casket",
    details: "Made of wood and a medium size, it is a quality casket.",
    rating: 2.5,
  },
  {
    image: "kabaong3.png",
    price: "₱23,000.00",
    category: "Premium Casket",
    name: "Large Wooden Casket",
    details: "Made of wood and a large size, it is a quality casket.",
    rating: 3.0,
  },
  // Add more items as needed
],
    };
  },
  methods: {
    showNotification() {
      this.notificationMessage = "This is a notification message.";
    },
    addToPlan(item) {
      console.log(`Added ${item.name} to the plan!`);
    },
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(25, 152, 194);
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-container {
  min-height: 20vh;
  margin-top: -100px;
  padding: 20px;
  margin-bottom: 60px;
}

@media screen and (max-width: 600px) {
  .center-container {
    min-height: 30vh;
  }
}

.ratings {
  display: flex;
  align-items: center;
  justify-content: center;
}

.rating-value {
  margin-left: 8px;
  font-weight: bold;
}

.scrollable-container {
  max-height: 85vh; /* Adjust the maximum height as needed */
  overflow-y: auto;
  padding: 20px; /* Adjust padding as needed */
  margin-top: -100px;
}
</style>
