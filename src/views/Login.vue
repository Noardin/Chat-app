<template>
   <div id="login_wrapper">
       <alerts></alerts>
       <div v-if="isAuthenticated">
            <router-link to="/" class=".login-link">Chat</router-link>
       </div>
       <div v-if="!isAuthenticated">
           <router-link to="/register" class=".login-link">register</router-link>
       </div>

       <Loginform ></Loginform>

   </div>
</template>

<script>
    import Loginform from '../components/Login-form'
    import alerts from '../components/settings_alert'
    export default {
        name: "Login",
        components: {
            Loginform,
            alerts},
        data(){
            return{
                msg: ''
            }
        },
        methods:{

            },
        computed:{
            isAuthenticated(){
                return this.$store.getters.isAuthenticated
            }
        }


    }
</script>

<style scoped>

#login_wrapper{
font-family: Arial;
background-color: #3498DB;
padding: 50px;
    height: 100%;
    width: 100%;
}
    .login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}
</style>