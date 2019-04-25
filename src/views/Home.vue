<template>
  <div class="home" id="chat_wrapper">
    <Chat_wiew></Chat_wiew>
    <Chat_input ></Chat_input>
  </div>
</template>

<script>

import Chat_wiew from '../components/Chat_wiew'
 import Chat_input from '../components/Chat_input'
import io from


export default {

  name: 'chat',
  components: {
      Chat_wiew,
      Chat_input


  },


    data(){
        return{


        }


        },

    methods: {
        Emit(msg){
                       this.$store.dispatch('uploadMessage',msg)
                .then()
        }

      },created(){
        this.$socket.on('my response',(msg)=>this.Emit(msg))
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
