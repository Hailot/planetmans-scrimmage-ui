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
    >
      <template
          v-slot:item="{ item }">
        <tr>
          <td>{{ item.total[0].NameDisplay }}</td>
          <td>{{ item.total[0].Points}}</td>
          <td>{{ item.total[0].NetScore}}</td>
          <td>{{ item.total[0].Kills}}</td>
          <td>{{ item.total[0].HeadshotKills}}</td>
          <td>{{ item.total[0].Deaths}}</td>
          <td>{{ item.total[0].DamageAssists}}</td>
          <td>{{ item.total[0].TotalDamageDealt}}</td>
          <td>{{ item.total[0].AssistDamageDealt}}</td>
        </tr>
      </template>
    </v-data-table>

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
      { text: 'Points', value: 'Points' },
      { text: 'Netscore', value: 'NetScore' },
      { text: 'Kills', value: 'Kills' },
      { text: 'HeadshotKills', value: 'HeadshotKills' },
      { text: 'Deaths', value: 'Deaths' },
      { text: 'DamageAssists', value: 'DamageAssists' },
      { text: 'TotalDamageDealt', value: 'TotalDamageDealt' },
      { text: 'AssistDamageDealt', value: 'AssistDamageDealt' },
    ],
  })
}
</script>

<style scoped>

</style>