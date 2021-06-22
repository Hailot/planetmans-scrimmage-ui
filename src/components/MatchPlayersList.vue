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
    ],
  })
}
</script>

<style scoped>

</style>