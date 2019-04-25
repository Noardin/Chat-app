<template>

    <form id="chat_input" @submit="submitSurvey">
      <input v-model="message" type="text" class="message" name="message"  placeholder="Napiste neco"/>
        <AudioButton></AudioButton>
      <input id="odeslat" type="submit" value="odeslat"/>
    </form>

</template>

<script>
    import AudioButton from './audio_button'
    export default {
        name: "Chat_input",
        components:{
          AudioButton
        },
        data() {
            return {
                message: ''

            }
        },
                methods:{
                   submitSurvey (e) {
                       e.preventDefault();
                       if(this.message !== ''){
                           this.$store.dispatch('submitNewMessage', {
                              message: this.message,
                              audio: false
                            })
                            .then(()=> this.message = '')
                            .catch((error) => {
                                                           this.$router.push('/')
                            })
                       }

            }
        },updated(){

        }

    }
</script>

<style scoped>
#chat_input input[type=submit]{
    border: none;
    height:100%;
    outline: none;
    width: 120px;
    background-color: darkblue;
    color: white;
    font-family: "Arial Black";
}
#chat_input{
    background-color: white;
    height: 10vh;
    border:  none;
    display: grid;
    grid-area:input ;
    grid-template-columns: 1fr auto auto;

}

.message{
    border: none;
    outline: none;
    display: flex;
    padding-left: 5px;
    width: 100%;
    justify-content: center;


}
</style>