<template>
  
  <v-container style="margin-top:50px;">
  
  <v-data-table
    :headers="headers"
    :items="users"
    :search="search"
    :sort-by="[{ key: 'UserId', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
      <v-toolbar-title>PlanHolder</v-toolbar-title>
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
                class="justify-md-end"
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
                      v-model="editedItem.FirstName"
                      label="First Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.MiddleName"
                      label="Middle Name"
                    ></v-text-field>
                  </v-col>
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
                      v-model="editedItem.Address"
                      label="Address"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.ContactNumber"
                      label="Contact"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    
                  >
                    <v-text-field
                      v-model="editedItem.Role"
                      label="Role"
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
          key: 'UserId',
        },
        { title: 'First Name', key: 'FirstName' },
        { title: 'Middle Name', key: 'MiddleName' },
        { title: 'Last Name', key: 'LastName' },
        { title: 'Address', key: 'Address' },
        { title: 'Contact', key: 'ContactNumber' },
        { title: 'Role', key: 'Role' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        UserId: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Address: '',
        Contact: '',
        Role: '',

      },
      defaultItem: {
        UserId: '',
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Address: '',
        Contact: '',
        Role: '',
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
          const respond = await axios.get('registerData');
            this.users = respond.data;
        } catch (error) {
          console.log(error);
        }
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        const response = await axios.post('deleteUser', this.editedItem)
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

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>