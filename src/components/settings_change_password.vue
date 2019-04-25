<template>
<div class="container justify-content-center">
        <div class="row justify-content-center">
        <div class="col-sm-12" style="text-align: center">
        <h1>Change Password</h1>
        </div>
        </div>
        <div class="row justify-content-center">
        <div class="col-sm-6 col-sm-offset-3">
        <p class="text-center">Use the form below to change your password. Your password cannot be the same as your username.</p>
        <form @submit="Submit_password_change" id="passwordForm">
            <input v-model="old_password" type="password" class="input-lg form-control p" name="password_old" id="password_old" placeholder="stare heslo" autocomplete="off">
            <input v-model="passwords.password1" ref="password1" type="password" class="input-lg form-control p" name="password1" id="password1" placeholder="New Password" autocomplete="off">
            <input v-model="passwords.password2" ref="password2" type="password" class="input-lg form-control p" name="password2" id="password2" placeholder="Repeat Password" autocomplete="off">
            <input id="change_password_submit" ref="submit_password" type="submit"  class="col-xs-12 btn btn-primary btn-load btn-lg form-control p" v-bind:disabled="disabled ===1" data-loading-text="Changing Password..." value="Change Password">
         </form>
        </div><!--/col-sm-6-->
        </div><!--/row-->
 </div>
</template>

<script>

    export default {
        name: "settings_change_password",
        props:{
            UserData:Object
        },
        data(){
            return{
                disabled: 1,
                old_password:'',
                passwords:{
                    password1: '',
                    password2:''
                }

            }
        },
        methods:{
          Submit_password_change(e){
              e.preventDefault();
              this.$store.dispatch('updateSettings', {password_old: this.old_password, password1: this.passwords.password1});

          }
        },
        watch:{
            passwords:{
                immediate:true,
                deep:true,
                handler(passwords){
                    var password1 = passwords.password1;
                    var password2 = passwords.password2;

                if (password1 === password2 && password2 !== '' && password1 !== ''){

                    this.disabled = 0
                }else{
                    if(this.disabled === 0){
                        this.disabled = 1
                    }
                }

                }

            }

        }
    }
</script>

<style scoped>
    .p{
        margin-top:1rem;
    }
</style>