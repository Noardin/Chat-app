import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import password_change from './components/settings_change_password'
import {store}from './store/store'
import VueSocketio from 'vue-socket.io-extended'
import {$socket} from './socketio_io'
Vue.use(Router);

const router = new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        beforeEnter (to, from, next) {
        if (!store.getters.isAuthenticated) {
          next('/login')
        } else {
            if(!Vue.prototype.$socket){
              Vue.use(VueSocketio, $socket, store);
            }
            if (store.getters.UserData == null || store.getters.UserData === undefined){
              store.dispatch('Update').then(next())
            }else{
              next()
            }
        }

      },

    },
      {
        path:'/audio',
        name:'audio',
        component:() => import('./components/audio_msg.vue')
      },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue'),
         children: [
        {
          path: 'change/:token',
            name:'Change_password',
          component: password_change,
            beforeEnter(to, from, next){
            store.dispatch('Authenticate_password_request_token', to.params.token)
                .then(response => {
                    if(response.data.authenticated){
                      if (store.getters.UserData == null || store.getters.UserData === undefined){
                            store.dispatch('Update').then(next())
                      }else{
                        next()
                      }
                  }else{
                        next('/login')
                      }
                });


            }
        },
             {
               path: 'update',
                 name:'update',
                 component:() => import(/* webpackChunkName: "about" */ './components/Settings_update.vue')
             }
        ],
        beforeEnter (to, from, next) {
        if (!store.getters.isAuthenticated) {
          next('/login')
        }else{
          if (store.getters.UserData == null || store.getters.UserData === undefined){
                store.dispatch('Update').then(next())
            }else{
            next()
          }
        }
      }
    },
      {
        path:'/login',
          name:'login',
          component: Login,
          beforeEnter(to,from,next){
            if (store.getters.isAuthenticated) {
              next('/')
            }else{
              next()
            }
        }
      },
      {
        path:'/register',
          name:'register',
          component: () => import('./views/Register')
      }
  ]
});
router.beforeEach((to, from, next)=>{
  store.commit('HandleAlerts',{state:false});

    next()

});
export default router