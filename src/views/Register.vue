<template>
    <div id="register_wrapper">
        {{this.msg}}
       <router-link to="/login" class=".login-link">login</router-link>
        <alerts></alerts>
       <Registerform v-on:newRegistration="Register"></Registerform>

   </div>
</template>

<script>
    import axios from 'axios'
    import Registerform from '../components/Register-form'
    import alerts from '../components/settings_alert'
    export default {
        name: "Register",
        components:{
            Registerform,
            alerts
        },data(){
           return{
               msg:''
           }
        },

        methods:{
            Register(UserData){
                axios.post('http://localhost:5000/api/registrate',{UserData})
                    .then(res=>this.msg = res.data.msg)
                    .catch(err=>console.log(err));


            }
        }
    }
</script>

<style scoped>
#register_wrapper{
font-family: Arial;
background-color: #3498DB;
padding: 50px;
    height: 100%;
    width: 100%;
}
    .login-link {
  font-size: 12px;
  color: white;
  display: block;
	margin-top: 12px;
}
</style>