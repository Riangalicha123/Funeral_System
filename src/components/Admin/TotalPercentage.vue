<template>
    <Pie
      id="my-pie-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PieController, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PieController, CategoryScale, LinearScale, PointElement, ArcElement)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      },
      chartOptions: {
        responsive: true
        // Add more options as needed
      }
    }
  }
}
</script>
