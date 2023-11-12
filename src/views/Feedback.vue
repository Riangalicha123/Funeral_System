<template>
    <v-app>
        <v-app-bar color="rgb(25, 152, 194)" dark dense >
        <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <navbottom />
      <v-container>
        <v-row justify="center" style="padding-top: 10%;">
          <v-col cols="12" sm="8" md="6">
            <v-card elevation="2" >
              <v-card-title 
              class="headline text-center" 
              style="color: rgb(25, 152, 194); 
              font-size: 24px">
                Users Feedback
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitFeedback">
                  <v-row>
                    <v-col cols="12">
                      <v-text-field 
                      v-model="feedback.email" 
                      label="Email"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea 
                      v-model="feedback.message" 
                      label="Message" 
                      rows="5" 
                      outlined></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="text-center">
                      <v-btn color="rgb(25, 152, 194)" @click="submitFeedback" class="extra-large-button">Submit</v-btn>
                    </v-col>
                    <v-col cols="12" class="text-center">
                      <v-btn color="grey" @click="handleReset" class="extra-large-button">Clear</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
   import navbottom from "@/components/navbottom.vue";
  export default {
    components:{
        navbottom,
    },
    data() {
      return {
        feedback: {
          email: '',
          message: '',
        },
      };
    },
    methods: {
      handleReset() {
      this.feedback.email = '';
      this.feedback.message = '';
    },
    },
  };
  
  </script>



