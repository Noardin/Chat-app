<template>
    <Loader v-if="Dates.length === 0"></Loader>
    <div v-else class="message_holder_wrapper" ref="wrapper" id="messages_display_wrapper">
        <Modal_message_update ref="ModalMessageUpdate"></Modal_message_update>
        <div class="message_holder container-fluid">
            <div  v-bind:class="'row day_wrapper day_'+date.date" v-bind:key="index" v-for="(date, index) in Dates">
                <div class="container-fluid">
                    <div class="row">
                        <div class="horizontal_date" v-bind:id="'hr_day_'+date.date">{{date.date}}</div>
                    </div>
                    <div class="row wrapper_you inner_wrapper" >
                        <div class="container-fluid">
                            <Chat_message @OpenMessageChangeModal="OpenMessageModal" v-bind:who="Who(UserData.username, message.username)"
                                          v-bind:message="message"
                                          v-bind:key="message.id"
                                          v-for="message in date.messages">
                             </Chat_message>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

    
</template>

<script>
    import Chat_message from './Chat_message'
    import Modal_message_update from './message_modal_text'
    import Loader from './Loader'
    export default {
        name: "Chat_wiew",
        components:{
            Chat_message,
            Loader,
            Modal_message_update
        },
        data(){
            return{

            }

        },computed:{
            Dates(){
                return this.$store.getters.Messages

            },
            UserData:function () {
               return this.$store.getters.UserData;
           }
        },created(){
            this.fetch()

        },methods:{
            Who(CurrentUserName, MessageUserName){
                if(CurrentUserName === MessageUserName){
                    return 'you'
                }else
                {
                    return 'other'
                }
            },
            OpenMessageModal(msg){
          this.$refs.ModalMessageUpdate.open(msg)
        },
            fetch(){
                this.$store.dispatch('fetchMessages').then()
            }
        },updated(){
                       var container = this.$refs.wrapper;
                       container.scrollTop = container.scrollHeight
        },


    }
</script>

<style scoped>
.message_holder_wrapper{
    grid-area: message;
    position: relative;
    padding: 5px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: whitesmoke;

}
.message_holder{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}
.day_wrapper{
    /*width: 100%;*/
    /*display: grid;*/
    /*grid-template-columns: 1fr 1fr;*/
    /*grid-template-rows:auto auto;*/
    /*grid-template-areas: "date date"*/
            /*"wrapper_you wrapper_other";*/
}

.upper_message_wrapper{
     margin-top: 20px;
    padding-bottom: 10px;
    display: grid;


}
.nic_tu_neni{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.user_img_wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    padding-left: 10px;
    grid-area: userimg;
    padding-right: 20px;
}
img.user_img{

    border-radius: 100%;
    background-color: white;
    width: 4rem;
}
.collapse{
    grid-area: collapse;
}
.message_wrapper.you{
    background-color: white;
    color: black;
    text-decoration: none;
    text-underline: none;
    grid-area:you;
    display: grid;
    float: left;

     border-radius: 10px;
    padding: 10px;
    height: auto;
    grid-template-rows: auto auto auto;
    grid-template-columns: minmax(25vw,auto);
    grid-template-areas: 'name'
                        'msg '
                        'collapse';

}
.message_wrapper{
    font-size: larger;
}
.message_wrapper.other{
    background-color: royalblue;
    grid-area: other;
     display: grid;
    float: right;
     border-radius: 10px;
    padding: 10px;
    height: auto;
    grid-template-rows: auto auto auto;
    grid-template-columns:minmax(25vw,auto);
    grid-template-areas: 'name'
                        'msg'
                        'collapse';

}
.message_wrapper b{
    grid-area: name;
}
.message_wrapper .msg{

    grid-area: msg;
    /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
    display: flex;
    flex-direction: column;
}
.you{



}
.other {
}
.empty_message{
    visibility: hidden;
}

.horizontal_date{
  overflow: hidden;
  text-align: center;
    width: 100%;
}

.horizontal_date:before,
.horizontal_date:after {
  background-color: #000;
  content: " ";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.horizontal_date:before {
  right: 0.5em;
  margin-left: -50%;
}

.horizontal_date:after {
  left: 0.5em;
  margin-right: -50%;
}

</style>