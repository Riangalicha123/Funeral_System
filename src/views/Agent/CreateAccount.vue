<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer" />
    <Topbar @drawerEvent="drawer = !drawer" />
    <v-main style="background-color: #f5f5f5">
      <v-app>
        <v-container class="py-5 h-100">
          <v-row justify="center" align="center" class="h-100">
            <v-col>
              <v-card class="elevation-3" shaped>
                <!-- Right Column (Register Form) -->
                <v-col cols="12" class="d-flex align-center">
                  <v-card-text>
                    <v-form @submit.prevent="register">
                      <v-card-title class="title">Register for PlanHolder</v-card-title>
                      <br />
                      <!-- Username Field -->
                      <v-row>
                        <v-col cols="4">
                          <v-text-field
                            v-model="FirstName"
                            label="First Name"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="MiddleName"
                            label="Middle Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="LastName"
                            label="Last Name"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <!-- Email Field -->
                      <v-row>
                        <v-col cols="11">
                          <v-text-field
                            v-model="Email"
                            label="Email"
                            required
                            type="email"
                            hint="email@gmail.com"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <!-- Password Field -->
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="Password"
                            label="Password"
                            required
                            type="password"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="confirmPassword"
                            label="Confirm Password"
                            required
                            type="password"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="11">
                          <v-text-field
                            v-model="Address"
                            label="Address"
                            required
                            hint="City, Province"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="11">
                          <v-text-field
                            v-model="ContactNumber"
                            label="Contact Number"
                            required
                            hint="For Example: 09123456789"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <!-- Submit Button -->
                      <v-row>
                        <v-col cols="12">
                          <v-btn type="submit" class="royal-blue-button"
                            >Submit</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import Sidebar from "@/components/Agent/Sidebar.vue";
import Topbar from "@/components/Agent/Topbar.vue";

export default {
  name: "",
  components: { Topbar, Sidebar },

  data() {
    return {
      drawer: null,
      user: [],
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Email: "",
      Password: "",
      confirmPassword: "",
      Address: "",
      ContactNumber: "",
      Role: "PlanHolder",
    };
  },

  methods: {
    async register() {
      if (this.Password !== this.confirmPassword) {
        // Display an error message to the user.
        // You can use a snackbar or a simple alert for this.
        alert("Password and Confirm Password do not match");
        return; // Prevent form submission.
      }
      try {
        const response = await axios.post("register", {
          FirstName: this.FirstName,
          MiddleName: this.MiddleName,
          LastName: this.LastName,
          Email: this.Email,
          Password: this.Password,
          confirmPassword: this.confirmPassword,
          Address: this.Address,
          ContactNumber: this.ContactNumber,
          Role: this.Role,
        });
        this.FirstName = "";
        this.MiddleName = "";
        this.LastName = "";
        this.Email = "";
        this.Password = "";
        this.confirmPassword = "";
        this.Address = "";
        this.ContactNumber = "";

        this.emit("register");
        this.getInfo();
      } catch (error) {
        // Handle network or other errors
        this.errorMsg = "An error occurred. Please try again later.";
        console.error(error);
      }
    },
  },
};
</script>
