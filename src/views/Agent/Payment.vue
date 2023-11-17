<template>
  <v-app-bar app color="rgb(25, 152, 194)" dark elevation="3">
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-row justify="center">
      <v-col lg="11" offset-lg="1" cols="30">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          dense
          rounded
          full-width
          @input="searchItems"
          style="margin-top: -15px;"
          color="white"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn icon @click="toggleNotificationDialog" style="cursor: pointer">
      <v-badge content="3" color="red">
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>
    
    <v-dialog v-model="notificationDialogVisible" max-width="400">
      <v-card>
        <v-card-title class="headline">Notifications</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon color="primary">mdi-email</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>New Message</v-list-item-title>
              <v-list-item-subtitle>John sent you a new message</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn text @click="closeNotificationDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-menu v-model="userMenuVisible" offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-btn icon v-bind="attrs" v-on="on" style="cursor: pointer">
         
    <v-btn icon @click="toggleUserMenu" style="cursor: pointer">
      <v-badge dot bottom color="green">
        <v-avatar size="40">
          <v-img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-avatar>
      </v-badge>
    </v-btn> 
        </v-btn>
      </template>
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item v-for="pro in pros" :key="pro.icon" :to="pro.to" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{pro.title}}
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logOut">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <v-container>
    <v-card-title class="headline text-center" style="color: rgb(25, 152, 194); font-size: 34px">Payment Records</v-card-title>
    <v-data-table :headers="headers" :items="paymentRecords" :search="search" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Karamay Kaagapay Funeral Homes.Co</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn color="primary" @click="addPaymentRecordDialog">Add</v-btn>
          
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="editPaymentRecordDialog(item)">mdi-pencil</v-icon>
        <v-icon small @click="deletePaymentRecord(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="addPaymentRecordDialogVisible" max-width="600">
      <v-card>
        
        <v-card-text>
          <v-text-field v-model="selectedPaymentRecord.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.firstName" label="First Name"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.services" label="Services"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.amount" label="Amount" type="number"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.status" label="Status"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.date" label="Date" type="date"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="savePaymentRecord">Save</v-btn>
          <v-btn @click="closeAddPaymentRecordDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editPaymentRecordDialogVisible" max-width="600">
      <v-card>
        <v-card-title>Edit Funeral Service Record</v-card-title>
        <v-card-text>
          <v-text-field v-model="selectedPaymentRecord.lastName" label="Last Name"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.firstName" label="First Name"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.services" label="Services"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.amount" label="Amount" type="number"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.status" label="Status"></v-text-field>
          <v-text-field v-model="selectedPaymentRecord.date" label="Date" type="date"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="updatePaymentRecord">Update</v-btn>
          <v-btn @click="closeEditPaymentRecordDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      headers: [
        { text: 'Last Name', value: 'lastName' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Services', value: 'services' },
        { text: 'Amount', value: 'amount' },
        { text: 'Status', value: 'status' },
        { text: 'Date', value: 'date' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      paymentRecords: [],
      search: '',
      addPaymentRecordDialogVisible: false,
      editPaymentRecordDialogVisible: false,
      selectedPaymentRecord: {
        lastName: '',
        firstName: '',
        services: '',
        amount: null,
        status: '',
        date: '',
      },
    };
  },
  created() {
    
    this.paymentRecords = [
      {
        lastName: 'Doe',
        firstName: 'John',
        services: 'Package A',
        amount: 500.00,
        status: 'Paid',
        date: '2023-11-13',
      },
      {
        lastName: 'Doe',
        firstName: 'John',
        services: 'Package A',
        amount: 500.00,
        status: 'Paid',
        date: '2023-11-13',
      },
      {
        lastName: 'Doe',
        firstName: 'John',
        services: 'Package A',
        amount: 500.00,
        status: 'Paid',
        date: '2023-11-13',
      },
      {
        lastName: 'Smith',
        firstName: 'Jane',
        services: 'Package B',
        amount: 300.00,
        status: 'Pending',
        date: '2023-11-14',
      },
      {
        lastName: 'Johnson',
        firstName: 'Bob',
        services: 'Package C',
        amount: 800.00,
        status: 'Unpaid',
        date: '2023-11-15',
      },
      {
        lastName: 'Smith',
        firstName: 'Jane',
        services: 'Package B',
        amount: 300.00,
        status: 'Pending',
        date: '2023-11-14',
      },{
        lastName: 'Smith',
        firstName: 'Jane',
        services: 'Package B',
        amount: 300.00,
        status: 'Pending',
        date: '2023-11-14',
      },
    ];
  },
  methods: {
    addPaymentRecordDialog() {
      this.selectedPaymentRecord = {
        lastName: '',
        firstName: '',
        services: '',
        amount: null,
        status: '',
        date: '',
      };
      this.addPaymentRecordDialogVisible = true;
    },
    closeAddPaymentRecordDialog() {
      this.addPaymentRecordDialogVisible = false;
    },
    editPaymentRecordDialog(paymentRecord) {
      this.selectedPaymentRecord = { ...paymentRecord };
      this.editPaymentRecordDialogVisible = true;
    },
    closeEditPaymentRecordDialog() {
      this.editPaymentRecordDialogVisible = false;
    },
    async savePaymentRecord() {
     
      this.closeAddPaymentRecordDialog();
      this.getPaymentRecords();
    },
    async updatePaymentRecord() {
    
      this.closeEditPaymentRecordDialog();
      this.getPaymentRecords();
    },
    async deletePaymentRecord(paymentRecord) {
     
      this.getPaymentRecords();
    },
  },
};
</script>
<style scope>
.v-application {
  background-image: url("https://t3.ftcdn.net/jpg/03/27/46/14/360_F_327461491_FWBhMuNNJLZQe1vXboG8eMu8uHGGZ2jf.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>