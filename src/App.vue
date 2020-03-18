<template>
  <div>
    <v-app>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>

    export default {
        name: 'App',

        data: () => ({
            //
        }),
        mounted() {
        }
    }

</script>

<style>
  #map { height: 1000px; }

  html, body{
    min-height: 100%;
  }
  body{
    position: relative;
  }
  .overlay{
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    #background-color: rgba(0,0,0,0.5); /*dim the background*/
    background-color: transparent !important;
  }


</style>
