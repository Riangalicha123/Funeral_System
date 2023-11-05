<template>
<<<<<<< Updated upstream
  <div>
    <H1>Planholder</H1>
  </div>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Email</th>
        <th class="text-left">Password</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.password }}</td>
        <td>
            <button @click="editItem(item)" class="btn btn-info">Edit</button>
            <button @click="deleteItem(item)" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
  data() {
    return {
        desserts: [
        {
          name: 'Frozen Yogurt',
          email: 159,
          password: 'riangalicha',
        },
      ],
    };
  },
  methods: {
    editItem(item) {
      // Handle the edit action here
      // You can open a dialog or a form for editing the item
      // For example, you can emit an event to a parent component to handle the edit action.
    },
    deleteItem(item) {
      // Handle the delete action here
      // You can ask for confirmation and then remove the item from the desserts array
      const index = this.desserts.indexOf(item);
      if (index !== -1) {
        this.desserts.splice(index, 1);
      }
    },
  },
};
</script>
=======
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="10">
          <v-card elevation="2">
            <v-card-title class="headline text-center" style="color: rgb(25, 152, 194); font-size: 34px;">Create an Account</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="signUp">
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="fullName" label="Full Name" required></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="username" label="Username" required class="custom-text-field"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="email" label="Email" required class="custom-text-field"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="password" label="Password" required type="password" class="custom-text-field"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="confirmPassword" label="Confirm Password" required type="password" class="custom-text-field"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="address" label="Address" class="custom-text-field"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="4" md="4">
                    <v-text-field v-model="age" label="Age" class="custom-text-field"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-text-field v-model="contactNumber" label="Contact Number" class="custom-text-field"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <v-select v-model="gender" :items="['Male', 'Female', 'Other']" label="Gender" required class="custom-text-field"></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <v-btn color="rgb(25, 152, 194" @click="signUp" class="extra-large-button">
                      Create Account
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedImage: null,
      };
    },
    methods: {
      signUp() {
        // Handle form submission including the selected image
        console.log("User data:", {
          fullName: this.fullName,
          // ... other form fields ...
          selectedImage: this.selectedImage,
        });
      },
    },
  };
  </script>
 <style>
 .extra-large-button {
    font-size: 18px;
    padding: 10px 22px !important;
    width: 50%;
    height: 130% !important;
    color: white !important; 
    background-color: #007BFF; 
    transition: background-color 0.2s, color 0.2s; 
  }
  
  .extra-large-button:hover, .extra-large-button:active {
    background-color: royalblue; 
    color: white; 
  }
 
 .v-row {
   margin-bottom: -.2%!important;
 }
 
 .v-text-field {
   margin-bottom: -5% !important;
 }
 </style>
 
  
>>>>>>> Stashed changes
