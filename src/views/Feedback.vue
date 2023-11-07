<template>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
        <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
        <v-spacer></v-spacer>
        
      </v-app-bar>
      <navbottom/>
</template>
<script>
import navbottom from "@/components/navbottom.vue";
export default {
    components:{
        navbottom,
    }
}
</script>