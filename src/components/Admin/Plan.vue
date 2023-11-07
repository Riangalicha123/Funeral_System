<template>
  <v-container>
    <v-card-title class="headline text-left" style="color: rgb(25, 152, 194); font-size: 34px">Users</v-card-title>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Username</th>
          <th class="text-left">Email</th>
          <th class="text-left">Password</th>
          <th class="text-left">Role</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.UserId">
          <td>{{ user.UserId }}</td>
          <td>{{ user.Username }}</td>
          <td>{{ user.Email }}</td>
          <td>{{ user.Password }}</td>
          <td>{{ user.User_Role }}</td>
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
      UserId:"",
      Username:"",
      Email:"",
      Password:"",
      User_Role:"",
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
      }
    }
}
</script>