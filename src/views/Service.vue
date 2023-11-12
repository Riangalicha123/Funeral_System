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

    <v-container class="d-flex align-center">
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
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
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
          image: "kabaong1.png",
          price: "₱9,000.00",
          category: "Casket",
          name: "St. Dominique",
          details: "Floral arrangement with lilies, roses, and carnations. Catered meal for attendees.",
        },
        {
          image: "kabaong2.png",
          price: "₱10,000.00",
          category: "Casket",
          name: "St. Francis",
          details: "Premium floral arrangement with orchids, roses, and daisies. Gourmet catering service.",
        },
        {
          image: "kabaong3.png",
          price: "₱12,000.00",
          category: "Casket",
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
</style>
