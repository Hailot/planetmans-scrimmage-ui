<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="grey elevation-5">
            Matches
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
              :headers="headers"
              :items="matches"
              :search="search"
              class="blue-grey darken-2 elevation-8 rounded"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "MatchList",
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Id',
          align: 'start',
          value: 'ScrimMatchId',
        },
        { text: 'Title', value: 'Title' },
        { text: 'Ruleset', value: 'RulesetName' },
        { text: 'Facility', value: 'FacilityName' },
        { text: 'Date', value: 'StartTime' },
      ],
      matches: [],
    }
  },
  mounted() {
    this.fetchMatches();
  },
  methods: {
    fetchMatches() {
      let url = 'http://localhost:3000/api/matchinfo'
      axios.get(url)
          .then(response => {
            console.log(response)
            this.matches = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
    }
  }
}
</script>

<style scoped>

</style>