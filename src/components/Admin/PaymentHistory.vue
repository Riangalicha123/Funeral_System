<template>
  <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['St. Dominique', 'St. Francis', 'St. Paul', 'St. Therese', 'St. Martin', 'St. Lance'],
        datasets: [{ label: 'GitHub Commits', data: [40, 20, 12], borderColor: 'rgba(75,192,192,1)', fill: false }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
