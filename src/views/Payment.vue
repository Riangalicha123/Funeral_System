<template>
    <div>
      <h1>Payment Form</h1>
      <div id="payment-form">
        <card :class="cardClasses"></card>
        <button @click="submitPayment">Submit Payment</button>
      </div>
    </div>
  </template>
  
  <script>
  import { Card } from "vue-stripe-elements-plus";
  
  export default {
    components: {
      Card
    },
    data() {
      return {
        cardClasses: {
          base: 'stripe-card',
          complete: 'stripe-card--complete',
          empty: 'stripe-card--empty',
          focus: 'stripe-card--focus',
          invalid: 'stripe-card--invalid'
        }
      };
    },
    methods: {
      submitPayment() {
        // Handle payment submission logic here
        this.$stripe.createToken().then(result => {
          if (result.error) {
            console.error(result.error.message);
          } else {
            // Send the token to your server for payment processing
            console.log('Payment token:', result.token);
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  #payment-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .stripe-card {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
  
  .stripe-card--focus {
    border-color: #007bff;
  }
  
  .stripe-card--invalid {
    border-color: #dc3545;
  }
  </style>
  