<template>
  <v-container class="">
  <v-card flat>
    <h2 class="text-center">Players</h2>
    <v-data-table
        dense
        :headers="headers"
        :items="players"
        item-key="NameDisplay"
        class="elevation-1"
    ></v-data-table>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: "MatchPlayersList",
  props: ['players'],
  data: () => ({
    headers: [
      { text: 'Name', value: 'NameDisplay' },
      { text: 'Round', value: 'ScrimMatchRound' },
      { text: 'Points', value: 'Points' },
      { text: 'Netscore', value: 'NetScore' },
      { text: 'Kills', value: 'Kills' },
      { text: 'HeadshotKills', value: 'HeadshotKills' },
      { text: 'Deaths', value: 'Deaths' },
      { text: 'TotalDamageDealt', value: 'TotalDamageDealt' },
    ],
  })
}
</script>

<style scoped>

</style>