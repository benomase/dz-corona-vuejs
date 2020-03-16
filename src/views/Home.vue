<template>
   <!-- <hello-world />-->

  <v-container fluid class="fill-height transparent">
    <v-btn color="info" fixed right top @click="go('newStudent')" class="pointer-events">
      <v-icon dark>more</v-icon>
    </v-btn>
    <v-btn color="info" fixed left bottom @click="go('newStudent')" class="pointer-events">
      <v-icon dark>add</v-icon>
    </v-btn>


    <v-speed-dial
      v-model="fab"
      fixed
      right
      bottom
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          class="pointer-events"
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-btn
        class="pointer-events"
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        class="pointer-events"
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        class="pointer-events"
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-container>

</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>

<style>
  .pointer-events {
    pointer-events: all;
  }
</style>
