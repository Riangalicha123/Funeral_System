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
        labels: ['Puerto Galera', 'San Teodoro', 'Baco','Calapan City','Naujan'],
        datasets: [{
          data: [30, 50, 20, 30, 10],
          backgroundColor: ['#4169E1', '#008000', '#DAA520','#FF8C69', '#9932CC'],
          hoverBackgroundColor:['#4169E1', '#008000', '#DAA520','#FF8C69', '#9932CC']
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
