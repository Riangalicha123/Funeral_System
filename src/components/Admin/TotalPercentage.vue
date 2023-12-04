<template>
  <div class="container">
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PieController, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js'
import axios from 'axios';

ChartJS.register(Title, Tooltip, Legend, PieController, CategoryScale, LinearScale, PointElement, ArcElement)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      loaded: false,
      chartData: null
    };
  },
  mounted() {
    this.fetchChartData();
  },
  methods: {
    async fetchChartData() {
      try {
        const response = await axios.get('/totallocationpercentage');
        this.mapResponseToChartData(response.data);
        this.loaded = true;
      } catch (error) {
        console.error('Error fetching data from the API:', error);
        // Handle error, display message, or log it
      }
    },
    mapResponseToChartData(data) {
      // Map the response data to chartData
      this.chartData = {
        labels: data.addresses.map(item => item.Address),
        datasets: [{
          data: data.addresses.map(item => item.PercentagePlanHolder),
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
        }],
      };
    },
  }
}
</script>
