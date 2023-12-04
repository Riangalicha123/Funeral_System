<template>
    <v-container style="margin-top:50px;">
      
  <v-data-table
    :headers="headers"
    :items="payments"
    :search="search"
    :sort-by="[{ key: 'AcceptanceId', order: 'asc' }]"
  >
  
    <template v-slot:top>
      <v-toolbar
        flat
      >
      
      <h3>Payment Acceptance</h3>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        
        
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          
          <template v-slot:activator="{ props }">
            <v-text-field
        v-model="search"
        label="Search"
        outlined
        placeholder="Type to search..."
        @input="handleSearch"
      ></v-text-field>
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              Add
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              
                
                <v-row>
                  
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.LastName"
                      label="Last Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.FirstName"
                      label="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.Services"
                      label="Services"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.Amount"
                      label="Amount"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.Status"
                      label="Status"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.Date"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
 </v-container>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
      search:'',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: '#',
          align: 'start',
          sortable: false,
          key: 'AcceptanceId',
        },
        { title: 'Last Name', key: 'LastName' },
        { title: 'First Name', key: 'FirstName' },
        { title: 'Services', key: 'Services' },
        { title: 'Amount', key: 'Amount' },
        { title: 'Status', key: 'Status' },
        { title: 'Date', key: 'Date' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      payments: [],
      editedIndex: -1,
      editedItem: {
        AcceptanceId:'',
        LastName: '',
        FirstName: '',
        Services:'',
        Amount: '',
        Status: '',
        Date: '',

      },
      defaultItem: {
        AcceptanceId:'',
        LastName: '',
        FirstName: '',
        Services:'',
        Amount: '',
        Status: '',
        Date: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        try {
          const respond = await axios.get('getPayment');
            this.payments = respond.data;
        } catch (error) {
          console.log(error);
        }
      },

      editItem (item) {
        this.editedIndex = this.payments.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.payments.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        const response = await axios.post('deletePayment', this.editedItem)
        console.log(response);

        this.initialize();
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        if (this.editedIndex > -1) {
          const response = await axios.post('updatePayment', this.editedItem)
          console.log(response.data);
        } else {
          const response = await axios.post('insertPayment', this.editedItem)
          console.log(response.data);
        }
        this.initialize();
        this.close()
      },
    },
}
</script>