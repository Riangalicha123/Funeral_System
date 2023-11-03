<template>
    <div class="container">
      <div class="card">
        <h1 class="title">Sign Up</h1>
        <form @submit.prevent="createAccount" class="form">
          <div class="flex">
            <label>
              <input type="text" id="name" v-model="name" required>
              <span>Name</span>
            </label>
            <label>
              <input type="email" id="email" v-model="email" required>
              <span>Email</span>
            </label>
            <label>
              <input type="tel" id="contact" v-model="contact" required>
              <span>Contact Number</span>
            </label>
            <label>
                <input type="tel" id="adress" v-model="adress" required>
                <span>Address</span>
              </label>
            <label>
              <input type="password" id="password" v-model="password" required>
              <span>Password</span>
            </label>
          </div>
          <button type="submit" class="submit">Create Account</button>
        </form>
        <div class="message">
          <p>Already have an account? <a href="#" class="signin">Sign in</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        contact: '',
        password: '',
      };
    },
    methods: {
      createAccount() {
        // Handle user account creation logic here
        console.log('Creating account with the following details:');
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Contact Number:', this.contact);
        console.log('Password:', this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    text-align: center;
    margin: 2%;
  }
  
  .card {
    background: linear-gradient(to bottom, white 50%, #ADD8E6);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(109, 135, 212, 0.5);
    width: 90%;
    max-width: 400px;
    text-align: left;
    margin: 20px;
    margin-top: 100px;
  }
  
  .title {
    font-size: 24px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    transition: 0.3s ease;
  }
  
  .title::before, .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 35%;
    background-color: royalblue;
    transform: translateX(-50%);
  }
  
  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
    transition: 0.3s ease;
  }
  
  .title::after {
    content: "";
    width: 15px;
    height: 15px;
    background-color: royalblue;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s;
  }
  
  .title:hover::after {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  
  .message, .signin {
    color: rgba(56, 53, 53, 0.822);
    font-size: 16px;
    transition: 0.3s ease;
    text-align: center;
  }
  
  .signin {
    text-align: center;
    transition: 0.3s ease;
  }
  
  .signin a {
    color: royalblue;
    transition: 0.3s ease;
  }
  
  .signin a:hover {
    text-decoration: underline royalblue;
  }
  
  .flex {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    transition: 0.3s ease;
  }
  
  .form label {
    position: relative;
    margin-bottom: 10px;
  }
  
  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid darkgrey;
    border-radius: 10px;
    transition: 0.3s ease;
  }
  
  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 25px;
    color: darkgray;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }
  
  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
    transition: 0.3s ease;
  }
  
  .form label .input:focus + span, .form label .input:valid + span {
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
    transition: 0.3s ease;
  }
  
  .form label .input:valid + span {
    color: darkgray;
    transition: 0.3s ease;
  }
  
  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease;
    width: 100%;
  }
  
  .submit:hover {
    background-color: rgba(11, 69, 243, 0.9);
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
  
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
  </style>
  