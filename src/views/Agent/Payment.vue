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
    
    <v-btn icon @click="toggleNotificationDialog" style="cursor: pointer" class="ml-auto">
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
  <v-container style="margin-top:50px;">
    <v-card-title class="headline text-center" style="color: rgb(25, 152, 194); font-size: 34px">Payment Records</v-card-title>
    <v-data-table :items="payments" :search="search" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Karamay Kaagapay Funeral Homes.Co</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn color="primary" @click="openAddPaymentRecordDialog">Add</v-btn>
      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon small @click="editPaymentRecordDialog(item)">mdi-pencil</v-icon>
      <v-icon small @click="deletePaymentRecordDialog(item.UserId)">mdi-delete</v-icon>
      <!-- Add the following two lines for update and delete buttons -->
      <v-btn @click="updatePaymentRecordDialog(item)">Update</v-btn>
      <v-btn @click="deletePaymentRecordDialog(item.UserId)">Delete</v-btn>
    </template>
  </v-data-table>

    <v-dialog v-model="addPaymentRecordDialogVisible" max-width="600">
      <v-card>
        
        <v-card-text>
          <v-text-field v-model="LastName" label="Last Name"></v-text-field>
          <v-text-field v-model="FirstName" label="First Name"></v-text-field>
          <v-combobox v-model="Services" label="Services"></v-combobox>
          <v-text-field v-model="Amount" label="Amount" type="number"></v-text-field>
          <v-text-field v-model="Status" label="Status"></v-text-field>
          <v-text-field v-model="Date" label="Date" type="date"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="savePaymentRecord">Save</v-btn>
          <v-btn @click="closeAddPaymentRecordDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- <v-dialog v-model="editPaymentRecordDialogVisible" max-width="600">
      <v-card>
        <v-card-title>Edit Funeral Service Record</v-card-title>
        <v-card-text>
          <v-text-field v-model="LastName" label="Last Name"></v-text-field>
          <v-text-field v-model="FirstName" label="First Name"></v-text-field>
          <v-text-field v-model="Services" label="Services"></v-text-field>
          <v-text-field v-model="Amount" label="Amount" type="number"></v-text-field>
          <v-text-field v-model="Status" label="Status"></v-text-field>
          <v-text-field v-model="Date" label="Date" type="date"></v-text-field>
          
        </v-card-text>
        <v-card-actions>
          <v-btn @click="updatePaymentRecord">Update</v-btn>
          <v-btn @click="closeEditPaymentRecordDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deletePaymentRecordDialogVisible" max-width="600">
      <v-card>
        <v-card-title>Delete Funeral Service Record</v-card-title>
        <v-card-text>
          
          <div>Last Name: {{ LastName }}</div>
          <div>First Name: {{ FirstName }}</div>
          <div>Services: {{ Services }}</div>
          <div>Amount: {{ Amount }}</div>
          <div>Status: {{ Status }}</div>
          <div>Date: {{ Date }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="deletePaymentRecord">Delete</v-btn>
          <v-btn @click="closeDeletePaymentRecordDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
    
  </v-container>
</template>

<script>
import axios from 'axios';
import Topbar from "@/components/Agent/Topbar.vue";
export default {
  components: { Topbar},
  data() {
  return {
    search: '',
    editPaymentRecordDialogVisible: false,
    addPaymentRecordDialogVisible: false,
    payments: [],
    LastName: "",
    FirstName: "",
    Amount: "",
    Services: "",
    Status: "",
    Date: "",
    selectedPaymentRecord: null, // Add this line if it's not already present
    notificationDialogVisible: false,
        userMenuVisible: false,
        pros: [
        {title: "Profile", to:"/admin/profile"},
      ],
  };
},
created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      try {
        const inf = await axios.get('getPayment');
        this.payments = inf.data;
      } catch (error) {
        console.error(error);
      }
    },
    async openAddPaymentRecordDialog() {
      this.addPaymentRecordDialogVisible = true;
    },
    async addPaymentRecord() {
      try {

        const response = await axios.post("insertPayment", {
          LastName: this.LastName,
          FirstName: this.FirstName,
          Amount: this.Amount,
          Services: this.Services,
          Status: this.Status,
          Date: this.Date,
        });

        this.LastName = "";
        this.FirstName = "";
        this.Amount = "";
        this.Services = "";
        this.Status = "";
        this.Date = "";
        this.getInfo();
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.error("Validation error:", error.response.data.messages.error);
        } else {
          console.error("Error:", error);
        }
      }
      this.addPaymentRecordDialogVisible = false;
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
        try {
            await this.addPaymentRecord();
        } catch (error) {
            console.error(error);
        }
        this.closeAddPaymentRecordDialog();
    },
    async updatePaymentRecord() {
      try {
        // Implement update logic here
        // Example: await axios.put(`/api/payment-records/${this.selectedPaymentRecord.UserId}`, updatedData);
      } catch (error) {
        console.error('Error during update request:', error);
      }
      this.closeEditPaymentRecordDialog();
    },
    async deletePaymentRecord(userId) {
      try {
        // Implement delete logic here
        // Example: await axios.delete(`/api/payment-records/${userId}`);
      } catch (error) {
        console.error('Error during delete request:', error);
      }
      // Update payments after deletion
      this.getInfo();
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