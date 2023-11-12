<template>
    <v-container>
      <v-card-title class="headline text-left" style="color: rgb(25, 152, 194); font-size: 34px">Feedbacks</v-card-title>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Email</th>
            <th class="text-left">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="feedbacks in feedback">
            
            <td>{{ feedbacks.Email }}</td>
            <td>{{ feedbacks.Message }}</td>
            
          </tr>
        </tbody>
        
      </v-table>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        feedback:[],
        Email: "",
        Message: "",
      }
    },
    created() {
      this.getInfo();
    },
    methods: {
      async getInfo(){
          try {
              const response = await axios.get('notification');
              this.feedback = response.data;
          } catch (error) {
              console.log(error);
          }
        },
  
      }
  }
  </script>