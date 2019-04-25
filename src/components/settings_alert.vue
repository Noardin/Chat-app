<template>
    <b-alert :show="AlertData().state" v-bind:variant="AlertData().variant" @dismissed="DismissAlert" dismissible>{{AlertData()['text']}}</b-alert>

</template>

<script>
    export default {
        name: "settings_alert",
        methods:{
            DismissAlert(){
                this.$store.commit('HandleAlerts',{state:false})
          },

            AlertData: function(){
            var data = this.$store.getters.AlertData;
            var version = data.version;
                       return{
                state: data['state'],
                variant: data.variant,
                text: data.versions[version].text[data.text]

            };
          },
        }
    }
</script>

<style scoped>

</style>