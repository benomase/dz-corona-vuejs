import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
/*import frTr from '@/assets/i18n/fr.json';
import arTr from '@/assets/i18n/ar.json';
const currentTr =
*/

Vue.config.productionTip = false;

/*Vue.filter('tr', function (value) {
  if (!value) return '';
  const currentLangue = localStorage.getItem('langue');
  if(currentLangue==='fr')
});*/


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
