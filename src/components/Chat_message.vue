<template>
    <div v-bind:class="[[message.you ? 'you':'other'], {'empty_message':who !== WhoamI(message.you)}]"  class ="upper_message_wrapper ">
        <div class="user_img_wrapper">
            <img  class="user_img" v-bind:src="getImgUrl(message.profile_img)">
        </div>
        <a variant="primary" v-bind:class="[message.you ? 'you':'other']" class="message_wrapper">
            <b style="color: #000">{{message.nickname}}:</b>
            <div class="msg" v-bind:class="'msg_'+message.id" >
                <div v-if="!message.audio">{{message.message}}</div>
                <div v-else><AudioMsg v-bind:AudioMessage="message"></AudioMsg></div>
            </div>
            <b-collapse class="menu mt-2 container-fluid"  v-bind:id="'menu_'+message.id">
                <div class="row">
                    <div class="reakce col-sm"><font-awesome-icon icon="smile" /></div>|
                    <div class="upravit col-sm"><font-awesome-icon icon="pen" /></div>|
                    <div class="vymazat col-sm"><font-awesome-icon icon="trash" /></div>
                </div>

            </b-collapse>
        </a>
    </div>
</template>

<script>
    import AudioMsg from './audio_msg'
    export default {
        name: "Chat_message",
        components: {AudioMsg},
        props:["who","message"],
        data(){
          return{
              PressTimer:null
          }
        },
        methods:{
            HolidngStart(e){
                if (e.type === 'click' && e.button !== 0) {
                    return
                }
                if (this.PressTimer === null) {
                this.PressTimer = setTimeout(() => {
                    this.$root.$emit('bv::toggle::collapse', 'menu_'+this.message.id)
                }, 2000)
    }

            },
            getImgUrl(img) {
                try{
                    return 'https://chatapp-backendapi.herokuapp.com/api/get/'+img+'.jpg'
                }catch (e) {
                    return this.getDefault
                }

            },
            getDefault(){
                return 'https://maxchatapp-backend.herokuapp.com/api/get/icons8-person-90.jpg'
            },
            WhoamI(msg_who){
                if (msg_who){
                    return 'you'
                }else{
                    return 'other'
                }
            }
        }
    }
</script>

<style scoped>
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
.menu{
    grid-area: collapse;
}.upper_message_wrapper.you{
    grid-template-columns:auto auto 1fr;
    grid-template-areas: 'userimg you .';
}
.upper_message_wrapper.other{
    grid-template-columns: 1fr auto auto;
    grid-template-areas: '. other userimg';
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
    grid-template-rows: auto auto;
    grid-template-columns:minmax(25vw,auto);
    grid-template-areas: 'name'
                        'msg';

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

.menu div{
    display: flex;
    align-items: center;
    justify-content: center;
}
.msg{
    padding: 0.5rem;
}
</style>