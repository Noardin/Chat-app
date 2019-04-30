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
import Vuetouch from 'vue2-touch-events'
import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client'
var $store = io('https://chatapp-backendapi.herokuapp.com/',{
  transports: ['websocket']
});
Vue.use(VueSocketio, $store,store);
Vue.use(Vuex);
Vue.use(VueCroppie);
dom.watch();
Vue.use(Vuetouch);
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(vuecookies);
Vue.use(AudioVis);
Vue.directive('click-outside', {
  bind () {
      this.event = event => this.vm.$emit(this.expression, event);
      this.el.addEventListener('click', this.stopProp);
      document.body.addEventListener('click', this.event)
  },
  unbind() {
    this.el.removeEventListener('click', this.stopProp);
    document.body.removeEventListener('click', this.event)
  },

  stopProp(event) { event.stopPropagation() }
});

new Vue({

  router,
  store:store,
  render: h => h(App)
}).$mount('#app');
