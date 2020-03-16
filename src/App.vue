<template>
  <div>
    <div id="map"></div>

    <v-app class="overlay">
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
//            var mymap = L.map('mapid').setView([51.505, -0.09], 13);

            console.log('Started now');
            var corona_csv_data = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv";

            CoronaHeatMap.init( "map", "date_select" );
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
