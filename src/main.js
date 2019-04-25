import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import {store} from './store/store'
import vuecookies from 'vue-cookies'
import VueCroppie from 'vue-croppie'
import AudioVis from 'vue-audio-visual'

import VueSocketio from 'vue-socket.io-extended'
import io from 'server'
Vue.use(VueSocketio, io,store);
Vue.use(Vuex);
Vue.use(VueCroppie);
dom.watch();
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(vuecookies);
Vue.use(AudioVis);


new Vue({

  router,
  store:store,
  render: h => h(App)
}).$mount('#app');
