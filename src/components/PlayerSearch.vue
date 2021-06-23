<template>
  <v-container class="justify-center">
    <h2 class="text-center">SCORES</h2>
    <v-row no-gutters>
      <v-col
          cols="6"
          sm="6"
          md="6"
          class="justify-center offset-3"

      >
        <v-card class="mb-6">
          <h2 class="text-center">Player</h2>

          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
                v-model="name"
                label="Name"
                required
            ></v-text-field>





            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submit"
            >
              GetData
            </v-btn>


          </v-form>
        </v-card>
      </v-col>
      <v-col
          cols="12"
          sm="12"
          md="12"
          class="mt-10"

      >
        <v-data-table
            :headers="columns"
            :items="playerStats"
            item-key="ScrimMatchId"
            class="elevation-1" >
          <template v-slot:item="{item}">
            <tr >
              <td v-for="(stat) in item" :key="stat.ScrimMatchId">
                {{ stat }}
              </td>
            </tr>
          </template>
          <template v-slot:header.name="{ header }">
            {{ header }}
          </template>
        </v-data-table>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "PlayerSearch",
  data: () => ({
    valid: true,
    name: '',
    playerStats:[],
    columns: []

  }),

  methods: {
   submit() {
     let url = process.env.VUE_APP_API_URL+'/players/name/'+this.name
     axios.get(url)
         .then(response => {
           console.log(response)
           this.playerStats = response.data
           console.log(this.playerStats[0] )
          this.columns = Object.entries(this.playerStats[0]).map(([key, value]) => ({text:key,value}));
         })
         .catch(e => {
           this.errors.push(e)
         })
   }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>