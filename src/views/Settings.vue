<template>
    <div class="container-fluid" id="settings_wrapper">
        <alerts></alerts>
        <router-view v-bind:UserData="UserData"></router-view>

    </div>
</template>

<script>
    import alerts from '../components/settings_alert'
    export default {
        name: "Settings",
        components:{
          alerts
        },
        computed:{
            UserData: function(){
                               return this.$store.getters.UserData
            }
        }
    }
</script>

<style scoped>
    #settings_wrapper{
        background-color: black;
    }
</style>