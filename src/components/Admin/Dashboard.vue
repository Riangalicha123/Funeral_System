<template>
    <v-col cols="12" sm="6" md="3">
      <v-card class="info-box">
        <v-row align="center">
          <v-col>
            <v-icon icon="mdi-account"></v-icon>
          </v-col>
          <v-col>
            <v-card-text >
              <span >Total Items</span>
              <span class="text-right">{{ totalItems }}</span>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </template>
  
<script>
export default {
    
}
</script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  