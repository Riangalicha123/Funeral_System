<template>
  <v-container style="margin-top:50px;">
      <v-row>
  <!-- Left Card -->
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>

  <!-- Right Card -->
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
  
  <v-col cols="12" md="6" class="mt-n4">
    <v-card class="mx-auto" height="360px">
      <v-card-item title="Weekly | Monthly Collection">
        <WMCollection/>
      </v-card-item>
    </v-card>
  </v-col>
  <v-col cols="12" md="6" class="mt-n4">
    <v-card class="mx-auto" height="360px">
      <v-card-item title="Weekly | Monthly Services">
        <WMServices/>
      </v-card-item>
    </v-card>
  </v-col>
  <v-col cols="12" md="6" class="mt-n4">
    <v-card class="mx-auto" height="360">
      <v-card-item title="Payment History (Plan Holder)">
        <PaymentHistory/>
      </v-card-item>
    </v-card>
  </v-col>
  <v-col cols="12" md="6" class="mt-n4">
    <v-card class="mx-auto" height="600px">
      <v-card-item title="Total Location Percentage of Plan Holder">
        <TotalPercentage/>
      </v-card-item>
    </v-card>
  </v-col>
</v-row>
  </v-container>


 


</template>

<script>

import axios from 'axios';
import TotalPercentage from "@/components/Admin/TotalPercentage.vue";
import WMCollection from "@/components/Admin/WMCollection.vue";
import WMServices from "@/components/Admin/WMServices.vue";
import PaymentHistory from "@/components/Admin/PaymentHistory.vue";
export default {
  name: 'Dashboard',
  components: { TotalPercentage, WMCollection, PaymentHistory,WMServices},
  data() {
    return {
      

      token: sessionStorage.getItem('token') !== null,
      totalPlanHolders: null,
    };
  },

  methods: {
    async fetchTotalPlanHolders() {
      try {
        const response = await axios.get('/registerData');
        this.totalPlanHolders = response.data.length; // Assuming the response is an array of plan holders
      } catch (error) {
        console.error('Error fetching total plan holders:', error);
      }
    },
    
    // Method to navigate to "/planholder" route
    navigateToPlanHolder() {
      // Assuming you are using Vue Router for navigation
      this.$router.push('/planholder');
    },
  },
  mounted() {
    if (this.token) {
      this.fetchTotalPlanHolders();
    }
  },
};
</script>
