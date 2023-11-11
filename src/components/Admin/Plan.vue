<template>
  <v-container>
    <v-card-title class="headline text-left" style="color: rgb(25, 152, 194); font-size: 34px">Users</v-card-title>
    <v-table>
      <thead>
        <tr>
          
          <th class="text-left">First Name</th>
          <th class="text-left">Middle Name</th>
          <th class="text-left">Last Name</th>
          <th class="text-left">Address</th>
          <th class="text-left">Contact Number</th>
          <th class="text-left">Role</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.UserId">
          
          <td>{{ user.FirstName }}</td>
          <td>{{ user.MiddleName }}</td>
          <td>{{ user.LastName }}</td>
          <td>{{ user.Address }}</td>
          <td>{{ user.ContactNumber }}</td>
          <td>{{ user.Role }}</td>
          <td>
            <th>
              <v-btn color="red-darken-2" @click="deleteRecord(user.UserId)">Delete</v-btn>
              <v-btn color="blue-darken-2" @click="updateRecord(user.UserId)">Update</v-btn>
            </th>
          </td>
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
      users:[],
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Address: "",
      ContactNumber: "",
      Role: "",
    }
  },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo(){
        try {
            const inf = await axios.get('registerData');
            this.users = inf.data;
        } catch (error) {
            console.log(error);
        }
      },
    async deleteRecord(recordId){
        await axios.post("deleteUser",{
          UserId: recordId,
        });
    },

    }
}
</script>