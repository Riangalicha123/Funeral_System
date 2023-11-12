<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="mx-auto" outlined shaped style="background: linear-gradient(to bottom, lightblue, rgb(25, 152, 194));">
          <v-card-title class="text-h3 text-center">
            <h1
              class="text-h3 mb-10"
              style="
                font-weight: bold;
                font-size: 15px;
                background: linear-gradient(
                  to bottom,
                  lightblue,
                  rgb(10, 10, 20)
                );
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                transition: background 0.3s ease, color 0.3s ease;
              "
            >
              Record Table
            </h1>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="records"
              :search="search"
              fixed
            >
            <template v-slot:top>
              <v-toolbar flat>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                <v-btn @click="addRecord" color="success">Add</v-btn>
              </v-toolbar>
            </template>
              <template v-slot:item.actions="{ item }">
                <v-icon @click="editRecord(item)">mdi-pencil</v-icon>
                <v-icon @click="deleteRecord(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'First Name', value: 'firstname' },
        { text: 'Last Name', value: 'lastname' },
        { text: 'Service', value: 'service' },
        { text: 'Amount', value: 'amount' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      records: [
        { firstname: 'John', lastname: 'Doe', service: 'Funeral Service', amount: '$5000', status: 'Fullypaid' },
        { firstname: 'Jane', lastname: 'Doe', service: 'Cremation', amount: '$3000', status: 'Not Fullypaid' },
        // Add more records as needed
      ],
    };
  },
  methods: {
    addRecord() {
      // Implement logic to add a new record
      console.log('Add record clicked');
    },
    editRecord(item) {
      // Implement logic to edit the selected record
      console.log('Edit record clicked:', item);
    },
    deleteRecord(item) {
      // Implement logic to delete the selected record
      console.log('Delete record clicked:', item);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
