<template>
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
    <div>
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="mx-auto"
          color="grey-lighten-4"
          max-width="600"
          v-bind="props"
        >
          <v-img
            :aspect-ratio="16/9"
            cover
            src="kabaong1.png"
          >
            <v-expand-transition>
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-cyan-accent-1 v-card--reveal text-h2"
                style="height: 100%;"
              >
              ₱9,000.00
              </div>
            </v-expand-transition>
          </v-img>
  
          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Casket
            </div>
  
            <h3 class="text-h4 font-weight-light text-blue mb-2">
              St. Dominique
            </h3>
  
            <div class="font-weight-light text-h6 mb-2">
              .......................details
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
    <div>
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="mx-auto"
          color="grey-lighten-4"
          max-width="600"
          v-bind="props"
        >
          <v-img
            :aspect-ratio="16/9"
            cover
            src="kabaong2.png"
          >
            <v-expand-transition>
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-cyan-accent-1 v-card--reveal text-h2"
                style="height: 100%;"
              >
              ₱10,000.00
              </div>
            </v-expand-transition>
          </v-img>
  
          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Casket
            </div>
  
            <h3 class="text-h4 font-weight-light text-blue mb-2">
              St. Francis
            </h3>
  
            <div class="font-weight-light text-h6 mb-2">
              .......................details
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
    <div>
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="mx-auto"
          color="grey-lighten-4"
          max-width="600"
          v-bind="props"
        >
          <v-img
            :aspect-ratio="16/9"
            cover
            src="kabaong3.png"
          >
            <v-expand-transition>
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-cyan-accent-1 v-card--reveal text-h2"
                style="height: 100%;"
              >
                ₱10,000.00
              </div>
            </v-expand-transition>
          </v-img>
  
          <v-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              Casket
            </div>
  
            <h3 class="text-h4 font-weight-light text-blue mb-2">
              St. Paul
            </h3>
  
            <div class="font-weight-light text-h6 mb-2">
              .......................details
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
    <navbottom/>
  </template>
  
  <script>
  import navbottom from "@/components/navbottom.vue";

    export default {
    components:{
        navbottom,
    }
    
  }
  </script>
  <style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
</style>