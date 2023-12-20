<template>
  <v-container style="margin-top:50px;">
      <v-row>
  <!-- Left Card -->
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>

  <!-- Right Card -->
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <!-- <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row> -->
    </v-card>
  </v-col>
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <!-- <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row> -->
    </v-card>
  </v-col>
  <v-col cols="6" md="3" sm="10">
    <v-card class="info-box" style="border: 2px solid #2196F3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <!-- <v-row align="center">
        <v-col>
          <v-icon icon="mdi-account" style="color: #2196F3;"></v-icon>
          <v-btn icon @click="navigateToPlanHolder" style="margin-top: 10px;">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card-text>
            <p style="font-weight: bold; font-size: 18px; margin-bottom: 5px;">Total PlanHolders</p>
            <p v-if="token" style="font-size: 16px;">{{ totalPlanHolders }}</p>
            <p v-else style="font-size: 16px; color: #757575;">No data available</p>
          </v-card-text>
        </v-col>
      </v-row> -->
    </v-card>
  </v-col>
  
  <v-col cols="12" md="6" class="mt-n4">
    <v-card class="mx-auto" height="360px">
      <v-card-item title="Weekly, Monthly & Yearly Collection">
        <WMCollection/>
      </v-card-item>
    </v-card>
  </v-col>
  <v-col cols="12" md="6" class="mt-n4" >
    <v-card class="mx-auto" height="360px">
      <v-card-item title="Weekly, Monthly & Yearly Services">
        <WMServices/>
      </v-card-item>
    </v-card>
  </v-col>
  <v-col cols="12" md="6" class="mt-n4 ">
    <v-card class="mx-auto" height="600px" >
      <v-card-item title="Total Location Percentage of Plan Holder">
        <TotalPercentage/>
      </v-card-item>
    </v-card>
  </v-col>
  
</v-row>
  </v-container>


 


</template>

<script>

import axios from 'axios';
import TotalPercentage from "@/components/Admin/TotalPercentage.vue";
import WMCollection from "@/components/Admin/WMCollection.vue";
import WMServices from "@/components/Admin/WMServices.vue";
import PaymentHistory from "@/components/Admin/PaymentHistory.vue";
export default {
  name: 'Dashboard',
  components: { TotalPercentage, WMCollection, PaymentHistory,WMServices},
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: '#',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Username', key: 'calories' },
        { title: 'Total Amount', key: 'protein' },
        { title: 'Services', key: 'fat' },
        { title: 'Status', key: 'carbs' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },

      token: sessionStorage.getItem('token') !== null,
      totalPlanHolders: null,
    };
  },
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
    async fetchTotalPlanHolders() {
      try {
        const response = await axios.get('/registerData');
        this.totalPlanHolders = response.data.length; // Assuming the response is an array of plan holders
      } catch (error) {
        console.error('Error fetching total plan holders:', error);
      }
    },
    initialize () {
        this.desserts = [
          {
            name: '1',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
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
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    
    // Method to navigate to "/planholder" route
    navigateToPlanHolder() {
      // Assuming you are using Vue Router for navigation
      this.$router.push('/planholder');
    },
  },
  mounted() {
    if (this.token) {
      this.fetchTotalPlanHolders();
    }
  },
};
</script>
