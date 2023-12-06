<template>
  <Bar v-if="loaded" :data="chartData" />
</template>

<script>
import axios from 'axios'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar }, // Change the component to Bar
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
        const response = await axios.get('/services');
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
        labels: data.servicesData.map(item => item.Service),
        datasets: [{
          label: 'Total Amount per Services',
          data: data.servicesData.map(item => item.TotalAmount),
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      };
    },
  }
}
</script>
