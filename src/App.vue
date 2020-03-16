<template>
  <div>
    <div id="mapid"></div>
    <div id="app"></div>
  </div>
</template>

<script>

    export default {
        name: 'App',

        data: () => ({
            //
        }),
        mounted() {
            var mymap = L.map('mapid').setView([51.505, -0.09], 13);
        }
    }

</script>

<style>
  #mapid { height: 180px; }

</style>
