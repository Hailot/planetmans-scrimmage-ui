<template>
  <v-card>
    <v-toolbar
        flat
        color="primary"
        dark
    >
      <v-toolbar-title><b>Match:</b> {{matchId}}</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-clipboard-text
        </v-icon>
        Scores
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
         Team1
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
         Team2
      </v-tab>


      <v-tab-item>
       <match-details :match="matchResult"></match-details>
      </v-tab-item>
      <v-tab-item>
        <match-players-list :players="this.matchPlayers.team1"></match-players-list>
      </v-tab-item>
      <v-tab-item>
        <match-players-list :players="this.matchPlayers.team2"></match-players-list>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "Match",
  components: {
    MatchPlayersList: () => import('../components/MatchPlayersList'),
    MatchDetails: () => import('../components/MatchDetails'),
  },
  props: ['matchId'],
  data () {
    return {
      matchResult: null,
      matchPlayers: '',
      team1Players:'',
      team2Players:'',
    }
  },
  methods: {
    fetchMatchResult() {
      let url = process.env.VUE_APP_API_URL+'/match/'+this.matchId+'/result';
      axios.get(url)
          .then(response => {
            console.log(response)
            this.matchResult = response.data
          })
          .catch(e => {
            console.log(e);
            this.errors.push(e)
          })

    },
    fetchMatchPlayers() {
      let url = process.env.VUE_APP_API_URL+'/match/'+this.matchId+'/players/stats';
      axios.get(url)
          .then(response => {
            console.log(response.data)
            this.matchPlayers = response.data
            console.log(this.matchPlayers.team1)
          })
          .catch(e => {
            console.log(e);
            this.errors.push(e)
          })
    }
  },
  created() {
    this.fetchMatchResult();
    this.fetchMatchPlayers();
  },
  computed: {

  }

}
</script>

<style scoped>

</style>