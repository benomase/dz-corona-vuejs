<template>
  <!-- <hello-world />-->
  <div>
    <div id="map"></div>
    <v-container fluid class="fill-height transparent v-overlay">

      <v-menu open-on-hover top offset-y class="pointer-events">
        <template v-slot:activator="{ on }">
          <v-btn
            fixed
            top
            right
            class="pointer-events"
            color="primary"
            dark
            v-on="on"
          >
            :
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click=""
          >
            <v-list-item-title>Numéro Vert</v-list-item-title>
          </v-list-item>

          <v-list-item
            @click=""
          >
            <v-list-item-title>Site Ministère de Santé</v-list-item-title>
          </v-list-item>

          <v-list-item
            @click=""
          >
            <v-list-item-title>Consignes de sécurité</v-list-item-title>
          </v-list-item>

          <v-list-item
            @click=""
          >
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!--<v-btn color="info" fixed right top class="pointer-events"
             @click.stop="drawer = !drawer">
        <v-icon dark>more</v-icon>
      </v-btn>-->
      <v-btn color="info" fixed left bottom class="pointer-events">
        <v-icon dark>add</v-icon>
      </v-btn>

      <v-speed-dial
        v-model="fab"
        fixed
        right
        bottom
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

      <v-dialog
        v-model="dialogTOS"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>

          <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="dialogTOS = false"
            >
              Disagree
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="dialogTOS = false"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialogCase"
        max-width="290"
      >
        <v-card @click="validate">
          <v-card-title class="headline">Use Google's location service?</v-card-title>

          <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="text-center">
              <v-btn class="ma-2" center tile large color="teal" icon>
                <v-icon>share</v-icon>
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              {{age}}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>



    </v-container>
  </div>
</template>

<script>
    export default {
        name: 'Dashboard',

        components: {
        },
        created() {

        },
        mounted() {
            CoronaHeatMap.init("map", "date_select");

        },
        data() {
            return {
                dialogTOS: true,
                dialogCase: false,
                drawer: null,
                fab: null,
                items: [
                    {title: 'Home', icon: 'dashboard'},
                    {title: 'About', icon: 'question_answer'},
                ],
            }
        },
        computed: {
            age() {
                return 26 * Date.now();
            }
        },
        methods: {
            validate(e) {

            }
        },
    }
</script>

<style>
  .pointer-events {
    pointer-events: all;
  }

  #map {
    height: 1000px;
  }
</style>
