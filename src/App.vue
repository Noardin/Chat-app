<template>
  <div id="app">
      <Header v-if="currentRouteName !== 'login' || 'register'"></Header>
    <router-view/>
  </div>
</template>
<script>
  import vue from 'vue'
  import bootstrapvue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Header from './components/Header'


  vue.use(bootstrapvue);
  export default {
      name:'App',
      components:{
          Header,
      },
      computed:{
          currentRouteName(){
              Console.log("currentroute "+this.$route.name);
              return this.$route.name
          }
      }

  }
  </script>
<style>
html, body{
    padding: 0!important;
    background-color: #3498DB;
    height: 100%;
    margin: 0;
    overflow: hidden;


}
    #app{
        height: 100%;
        margin: 0;
    display: grid;
    grid-auto-rows: auto 1fr;
    grid-template-areas: 'topnav'
                            'chat_wrapp';
}
</style>
