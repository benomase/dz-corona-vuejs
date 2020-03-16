<template>
  <div>
    <div id="map"></div>
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
//            var mymap = L.map('mapid').setView([51.505, -0.09], 13);

            console.log('Started now');
            var corona_csv_data = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv";

            CoronaHeatMap.init( "map", "date_select" );
        }
    }

</script>

<style>
  #mapid { height: 180px; }

</style>
