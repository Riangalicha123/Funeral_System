<template>
  <v-col cols="12" sm="6" md="3">
    <v-card class="info-box">
      <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account"></v-icon>
        </v-col>
        <v-col>
          <v-card-text>
            <p>Total PlanHolders</p>
            <p v-if="token">{{ totalPlanHolders }}</p>
            <p v-else>No data available</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
import axios from 'axios'; // Import axios for API calls

export default {
  data() {
    return {
      token: sessionStorage.getItem('token') !== null,
      totalPlanHolders: null,
    };
  },
  mounted() {
    if (this.token) {
      this.fetchTotalPlanHolders();
    }
  },
  methods: {
    async fetchTotalPlanHolders() {
      try {
        const response = await axios.get('/totalplanholder');
        this.totalPlanHolders = response.data.length; // Assuming the response is an array of plan holders
      } catch (error) {
        console.error('Error fetching total plan holders:', error);
      }
    },
  },
};
</script>
