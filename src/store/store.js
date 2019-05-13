import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import {delete_message, update_reactions, confirm_passwordtoken, update,request_passwordchange, update_settings, registerreq, authenticate, postNewMessage, fechtAllMessages} from "../api/index";
import { isValidJwt, EventBus, get_email, get_cookie, set_cookie, pop_cookie} from "../utils/index";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{

      Messages:[],
            alerts:{
                state:false,
                variant:'warning',
                version:'default',
                text:'warning',
                versions:{
                    profile_img: {
                        text:{
                            warning:'neco se nepovedlo',
                            success:'profilovy obrazek byl uspesne ulozen'
                        }
                    },
                    default: {
                        text:{
                            warning:'neco se nepovedlo',
                            success:'akce probehla uspesen'
                        }

                    },
                    nickname: {
                        text:{
                            warning:'nepodarilo se nam ulozit vasi novou prezdivku zkuste to prosim pozdeji',
                            success:'Vase prezdivka byla uspesne zmenena'
                        }

                    },
                    password_request:{
                        text:{
                            warning:'nepodarilo se nam poslat vam potvrzujici email s odkazem',
                            success:'Zkontrolujte prosim svoji emailovou adresu pro pokyny k dlsim krokum'
                        }
                    },
                    password_change:{
                        text:{
                            warning:'heslo se nepodarilo zmeni zkontrolujte prosim zpravnost stareho hesla',
                            success:'vase heslo bylo uspesne zmeneno'
                        }

                    },
                    login:{
                        text:{
                            jmeno_nebo_heslo:'spatne jmeno nebo heslo',
                            not_heslo:'spatne heslo',
                            not_email:'pravdepodobne jsi si neoveril email'
                        }
                    },
                    register:{
                        text:{
                            not:'Jmeno nebo email uz jsou zabrane'
                        }
                    }
                }
            },
            currentMessage:[],
        userData:null,
        jwt:{token:''}
    },
    actions :{
        deleteMessage(context, message){
            return delete_message(message, get_cookie('token'))
        },

        UpdateReactions(context, reactions){
            return update_reactions(get_cookie('token'), reactions)
                .then(response=> console.log(response.data))
        },

        Update(context){
            return update(get_cookie('token'))
                .then(response => context.commit('setUserData',{userData:{
                  username: response.data.UserData.username,
                      email: response.data.UserData.email,
                      nickname: response.data.UserData.nickname,
                      profile_img: response.data.UserData.profile_img
              }}));

        },

        Logout(context){
            pop_cookie('token');
            context.commit('logout');
            router.go('login')
        },

        updateSettings(context, userData){
            return update_settings(userData, get_cookie('token'))
                .then(response => {
                    if(response){
                        var alert_data= response.data['alert'];
                                               context.commit('updateUserDataFromSettings',response.data['update_data']);
                        context.commit('HandleAlerts',{state:true, variant:alert_data.variant, version:alert_data.version, text:alert_data.text});
                        if(alert_data.version === 'password_change' && alert_data.variant === 'success'){
                            context.dispatch('Logout');
                            router.go('login')
                        }
                    }
                }).catch(error=>{
                                       context.commit('HandleAlerts',{state:true, variant:'warning', version:'profile_img', text:'warning'});
                    if(error.status=== 401){
                        context.dispatch('Logout');
                        router.go('login')
                    }
                })

        },

        fetchMessages(context){
            return fechtAllMessages(get_cookie('token'))
                .then(response =>{
                    context.commit('newMessages', {messages: response.data});
                    console.log(response.data)
                } )

        },

        uploadMessage(context, message){
            var you = true;
            message = JSON.parse(message);

            const email = get_email(get_cookie('token'));
            if (email !== message.email){
                you = false
            }

            const Message = {
                audio:message.audio,
                username: message.username,
                nickname: message.nickname,
                message: message.message,
                id: message.msg_id,
                profile_img: message.profile_img,
                you: you,
                date: message.date,
                reakce:message.reakce,
                deleted:false

            };
            context.commit('newMessage',Message)
        },

        login (context, userData) {


      return authenticate(userData)
          .then(response => {
              if(response) {
                  var alert_data = response.data['alert'];
                                   if (response.data['authenticated']) {
                      context.commit('setJwtToken', {jwt: response.data.token});
                      context.commit('setUserData', {
                          userData: {
                              username: response.data.UserData.username,
                              email: response.data.UserData.email,
                              nickname: response.data.UserData.nickname,
                              profile_img: response.data.UserData.profile_img,


                          }
                      });
                      set_cookie('token', response.data.token);
                      router.go('/')
                  } else {
                                           context.commit('HandleAlerts', {
                          state: true,
                          variant: 'warning',
                          version: alert_data.version,
                          text: alert_data.text
                      });
                  }
              }


          })
          .catch(error => {
              context.commit('HandleAlerts',{state: true, variant:'warning', version:'profile_img', text:'warning'});

          })
  },

        register (context, userData) {
               return registerreq(userData)
      .then(response =>{
          console.log(response.data.registrated);
          if(response.data.registrated){
              router.go('/login');
          }else{
              context.commit('HandleAlerts', {state:true, variant:'warning', version:'register', text:'not'})
          }
      })
      .catch(error => {
               EventBus.$emit('failedRegistering: ', error)
      })
  },

        submitNewMessage(context, message){
      return postNewMessage(message, get_cookie('token'))
    },

        Send_password_request(context){
            console.log('token',get_cookie('token'));
            return request_passwordchange(get_cookie('token'))
                .then(()=>context.commit('HandleAlerts',{state:true, variant:'success', version:'password_request', text:'success'}))
                .catch(error=>{
                    console.log(error);
                    context.commit('HandleAlerts',{state:true, variant:'warning', version:'password_request', text:'warning'})

                })
        },

        Authenticate_password_request_token(context, token){
            return confirm_passwordtoken(get_cookie('token'), token)

    }
    },
    mutations:{

        UpdateDeletedMSG(state, payload){
            console.log(payload);
            payload = payload[0];
            state.Messages.forEach(function (date) {
                if(date.date === payload.date){
                    console.log('date', date.date);
                    date.messages.forEach(function (message) {
                        if(message.id === payload.id){
                            console.log('message_id', message.id);
                               message.deleted = true
                        }
                    })
                }
            })
        },

        UpdateMyReactions(state, payload){
            state.Messages.forEach(function (date) {
                if(date.date === payload.date){
                    console.log('date', date.date);
                    date.messages.forEach(function (message) {
                        if(message.id === payload.id){
                            console.log('message_id', message.id);
                                message.reakce.like = payload.like;
                                message.reakce.XD = payload.XD;
                                message.reakce.angry = payload.angry;
                        }
                    })
                }
            })
        },

        HandleAlerts(state,payload){
            var args = Object.keys(payload).length;
            if (args === 1){
                 state.alerts.state = payload['state'];
            } else{
                               state.alerts.state = payload.state;
            state.alerts.variant = payload.variant;
            state.alerts.version =payload.version;
                state.alerts.text = payload.text;
                           }


        },

        logout(state){
         state.jwt.token = ''
     },

        newMessage(state,payload){

            state.Messages.forEach(function (value) {
                if(value.date === payload.date){
                    value.messages.push(payload)
                }
            })

     },

        newMessages(state,payload){
            var messages = payload.messages;
            state.Messages =[];
             messages.forEach(function (date) {
                state.Messages.push(date)
             });
        },

        setUserData (state, payload) {
            state.userData = payload.userData
        },

        updateUserDataFromSettings(state,payload){
         var key = Object.keys(payload);
         state.userData[key] = payload[key];
             },

        setJwtToken (state, payload) {
            localStorage.token = payload.jwt;
            state.jwt.token = payload.jwt
        }
    },
    getters:{
  // reusable data accessors
        isAuthenticated () {
        return isValidJwt(get_cookie('token'))
      },

        Messages: state =>{
          return state.Messages;
        },

        UserData: state =>{
          return state.userData;
        },

        AlertData: state=>{
          return state.alerts;
        }
    },

});

