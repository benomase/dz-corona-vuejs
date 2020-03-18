<template>
  <v-container fluid class="fill-height pointer-events">
    <v-card style="width: 100%; height: 100%;" class="mx-auto" color="#f5f6f7">
      <v-row>
        <v-col cols="6">
          <div style="background-color: red; width: 100%; height: 100%;"></div>
        </v-col>
        <v-col cols="6">

          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <v-row column align="center" justify="center">
            &nbsp;<img src="@/assets/app_logo.svg" width="150px"/>
          </v-row>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <v-row column align="center" justify="center" v-if="step===0">
            <!--<v-facebook-login app-id="547559785867679"></v-facebook-login>-->

            <button class="loginBtn loginBtn--facebook" @click="next">
              Se connecter avec Facebook
            </button>

          </v-row>

          <v-row column align="center" justify="center" v-if="step===1">
            <v-col class="d-flex" cols="8" sm="5" xs="12">
              <v-select
                :items="wilayas"
                item-text="nom.fr"
                item-value="code"
                label="Wilaya de résidence"
                @change="selectWilaya"
              ></v-select>
            </v-col>
          </v-row>

          <v-row column align="center" justify="center" v-if="step===1 && selectedWilaya">
            <v-col class="d-flex" cols="8" sm="5" xs="12">
              <v-select
                class="pointer-events"
                :items="communes"
                item-text="nom.fr"
                item-value="code"
                label="Commune de résidence"
                @change="selectCommune"
              ></v-select>
            </v-col>
          </v-row>


          <v-row column align="center" justify="center" v-if="step===1 && selectedCommune">
            <v-col class="d-flex" cols="8" sm="3" xs="12">
              <v-btn color="info" rounded class="center-x" @click="signup">
                Continuer
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
    import VFacebookLogin from 'vue-facebook-login-component'
    import communes from '@/assets/algerie_villes_gps/communes.json'
    import wilayas from '@/assets/algerie_villes_gps/wilayas.json'

    window.communes = communes;

    export default {
        name: 'Home',

        components: {
            VFacebookLogin,
        },
        data() {
            return {
                step: 1,
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
                wilayas: wilayas,
                communes: undefined,
                selectedWilaya: undefined,
                selectedCommune: undefined
            }
        },
        created() {
        },
        methods: {
            next() {
                this.step++;
            },
            signup() {
                if (this.selectedWilaya && this.selectedCommune)
                    this.$router.push({name: 'dashboard'})
            },
            selectWilaya(wilaya) {
                this.selectedWilaya = wilaya;
                this.selectedCommune = undefined;
                this.communes = communes.filter(com => com.wilaya_id === wilaya);
            },
            selectCommune(commune) {
                this.selectedCommune = commune;
            }
        }
    }
</script>

<style>
  .pointer-events {
    pointer-events: all;
  }

  .container {
    z-index: 500;
  }


  /* Shared */
  .loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
  }

  .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }

  .loginBtn:focus {
    outline: none;
  }

  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }


  /* Facebook */
  .loginBtn--facebook {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
    text-shadow: 0 -1px 0 #354C8C;
  }

  .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
  }

  .loginBtn--facebook:hover,
  .loginBtn--facebook:focus {
    background-color: #5B7BD5;
    background-image: linear-gradient(#5B7BD5, #4864B1);
  }

  .center-x {
    left: 50%;
    transform: translateX(-50%);
  }

</style>
