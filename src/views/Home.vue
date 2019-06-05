<template>
  <div class="home" id="chat_wrapper">

    <Chat_wiew ></Chat_wiew>
    <Chat_input ></Chat_input>
  </div>
</template>

<script>

import Chat_wiew from '../components/Chat_wiew'
 import Chat_input from '../components/Chat_input'


export default {

  name: 'chat',
  components: {
      Chat_wiew,
      Chat_input,
  },
      beforeRouteEnter(to, from, next){
      next(vm =>{

          if(!vm.$socket.connected)
          vm.$socket.connect()
      })
    },

        beforeRouteLeave(to,from, next){
          console.log('disconnect');
          this.$socket.emit('leave');
          this.$socket.disconnect();
          next()
      },
    data(){
        return{


        }


        },

    methods: {

      },created(){

    }
    }

</script>
<style scoped>
  #chat_wrapper{
    grid-area: chat_wrapp;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto ;
    grid-template-areas: ' message '
                            ' input ';

}
</style>
