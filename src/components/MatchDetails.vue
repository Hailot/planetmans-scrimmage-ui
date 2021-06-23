<template>
    <v-container class="">
      <h2 class="text-center">SCORES</h2>
      <v-row no-gutters>
      <v-col
          cols="6"
          sm="6"
          md="6"
          v-for="team in this.match"
          :key="team.TeamOrdinal"
      >
        <v-card
            class="pa-2"
            outlined
            tile
        >
          <v-row no-gutters v-for="(value, name, index) in team"
                 :key="index">
              <v-col
                  cols="6"
              >
                <h3>{{ name }}: </h3>
              </v-col>
              <v-col
                  cols="6"
              >
                {{ value }}
              </v-col>

          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MatchDetails",
  props: ['match'],
}
</script>

<style scoped>

</style>