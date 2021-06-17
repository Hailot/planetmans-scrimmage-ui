<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/LogoPMA1x.png')"
          class="my-8"
          contain
          height="450"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">

        </h1>

        <p class="subheading font-weight-regular">
          For More information about Jaeger and Events there,
          <br>please join the
          <a
            href="https://discord.gg/QeK8gaZJXFm"
            target="_blank"
          >Jaeger Events Discord</a>
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),
  }
</script>
