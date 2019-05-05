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
import Clickoutside from 'vue-click-outside'
import {$socket} from './socketio_io'



Vue.use(Vuex);
Vue.use(VueCroppie);
dom.watch();
Vue.use(Vuetouch);

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(vuecookies);
Vue.use(AudioVis);

$socket.on('connect', function () {
  console.log('join');
   $socket.emit('join');
});
$socket.on('my response',(msg)=>{
            console.log('emitted');
            store.dispatch('uploadMessage',msg)
        });

$socket.on('updatereactions',(data)=>{
        console.log(data);
        store.commit('UpdateMyReactions', data)
});
new Vue({

  router,
  store:store,
  render: h => h(App),
    directives:{
      Clickoutside
    }
}).$mount('#app');