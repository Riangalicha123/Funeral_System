<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-12">
        <div class="card-wrapper">
          <div class="card">
            <div class="row g-0">
              <!-- Left Column (Image) -->
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <!-- Your image here -->
              </div>

              <!-- Right Column (Registration Form) -->
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form class="form" @submit.prevent="createAccount">
                    <!-- Title -->
                    <p class="title">Create Account</p>

                    <!-- First Name Input -->
                    <div class="flex">
                      <div class="input-wrapper">
                        <label>
                          <span>Name</span>
                          <input type="text" id="name" v-model="name" required>
                        </label>
                      </div>
                    </div>

                    <!-- Email Input -->
                    <div class="flex">
                      <div class="input-wrapper">
                        <label>
                          <span>Email</span>
                          <input type="email" id="email" v-model="email" required>
                        </label>
                      </div>
                    </div>

                    <!-- Contact Number Input -->
                    <div class="flex">
                      <div class="input-wrapper">
                        <label>
                          <span>Contact Number</span>
                          <input type="tel" id="contact" v-model="contact" required>
                        </label>
                      </div>
                    </div>

                    <!-- Address Input -->
                    <div class="flex">
                      <div class="input-wrapper">
                        <label>
                          <span>Address</span>
                          <input type="text" id="address" v-model="address" required>
                        </label>
                      </div>
                    </div>

                    <!-- Password Input -->
                    <div class="flex">
                      <div class="input-wrapper">
                        <label>
                          <span>Password</span>
                          <input type="password" id="password" v-model="password" required>
                        </label>
                      </div>
                    </div>

                    <!-- Create Account Button -->
                    <button class="submit" type="submit">Create Account</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Your CSS styles here */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card-wrapper {
    border: 1px solid #ccc; /* Add a light border to the card */
    border-radius: 5px;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin-top: 20%;
  }

  .card {
    width: 170%;
    height: 90%;
    max-width: none;
    background: linear-gradient(to bottom, white 50%, #ADD8E6);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
  }

  .form {
    margin: 20px;
    padding: 20px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .input-wrapper {
    flex: 1;
    width: 100%;
  }

  /* Style the input fields and labels within the input wrappers */
  .input-wrapper label {
    display: block;
    margin-bottom: 5px;
  }

  .input-wrapper input[type="text"],
  .input-wrapper input[type="email"],
  .input-wrapper input[type="tel"],
  .input-wrapper input[type="password"] {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 16px;
  }

  .submit {
    width: 100%;
    padding: 10px;
    background-color: blue;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
  }

  .title {
    font-size: 30px;
    color: blue;
    font-weight: 600;
    text-align: center;
    margin: 20px;
    margin-top: -30px;
  }

  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
    }
  }
</style>
