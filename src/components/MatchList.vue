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
              v-model="selected"
              :headers="headers"
              :items="matches"
              :sort-by="['StartTime']"
              :sort-desc="[true]"
              :search="search"
              loading
              loading-text="Loading... Please wait"
              class="blue-grey darken-2 elevation-8 rounded"
          >
            <template v-slot:item.StartTime="{item }">
              <td>{{ getHumanDate(item.StartTime)}}</td>
            </template>
            <template v-slot:item.actions="{item }">

              <router-link :to="{ path: '/match/'+item.ScrimMatchId }">
                <v-btn color="primary">
                  View
                </v-btn>
              </router-link>
            </template>

          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from 'moment'

export default {
  name: "MatchList",
  data () {
    return {
      selected:[],
      loading: true,
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
        { text: 'Actions', value: 'actions'}
      ],
      matches: [],
    }
  },
  mounted() {
    this.fetchMatches();
  },
  methods: {
    fetchMatches() {
      let url = process.env.VUE_APP_API_URL+'/matchinfo'
      axios.get(url)
          .then(response => {
            console.log(response)
            this.matches = response.data
            this.loading = false;
          })
          .catch(e => {
            this.errors.push(e)
          })
    },
    getHumanDate : function (date) {
      return moment(date).format('DD/MM/YYYY hh:mm:ss A');
    },
    goToMatch() {

    },

  }
}
</script>

<style scoped>

</style>