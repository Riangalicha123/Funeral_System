<template>
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