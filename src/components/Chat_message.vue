<template xmlns:v-touch="http://www.w3.org/1999/xhtml">
    <div v-bind:class="[[message.you ? 'you':'other'], {'empty_message':who !== WhoamI(message.you)}]"  class ="upper_message_wrapper ">
        <div class="user_img_wrapper">
            <img  class="user_img" v-bind:src="getImgUrl(message.profile_img)">
        </div>
        <a  variant="primary" :aria-controls="'menu_'+message.id"
      :aria-expanded="[showCollapse ? 'true' : 'false']"
            v-touch:longtap="Toggle" v-click-outside="CloseonClick" v-bind:class="[[message.you ? 'you':'other'], [showCollapse ? 'collapsed' : null]]" class="message_wrapper">
            <b style="color: #000">{{message.nickname}}:</b>
            <div class="msg" v-bind:class="'msg_'+message.id" >
                <div v-if="!message.audio">{{message.message}}</div>
                <div v-else><AudioMsg v-bind:AudioMessage="message"></AudioMsg></div>
            </div>
            <b-collapse class="menu mt-2 container-fluid" v-model="showCollapse"  v-bind:id="'menu_'+message.id">
                <div ref="options" class="options">
                    <div ref="reakce" :class="expanding ? 'expanding':''"  id="reakce">

                        <div class="center-flex"><font-awesome-icon icon="smile" @click="expandReactions" class="pointer"/></div>
                            <transition-group tag="div" name="fade" class="choices" v-if="expanding">
                                    <div :key="'like'" class="center-flex">{{message.reakce.like}}<font-awesome-icon icon="heart" class="pointer" @click="reakce.like++"/></div>
                                    <div :key="'XD'" class="center-flex">{{message.reakce.XD}}<font-awesome-icon icon="laugh-squint" class="pointer" @click="reakce.XD++"/></div>
                                    <div :key="'angry'" class="center-flex">{{message.reakce.angry}}<font-awesome-icon icon="angry" class="pointer" @click="reakce.angry++" /></div>

                            </transition-group>

                        </div>

                    <transition-group name="fade" class="message_update_choices">
                    <div :key="'upravit'" ref="upravit" class="upravit center-flex"><font-awesome-icon icon="pen" v-if="!expanding" class="pointer"/></div>
                    <div :key="'vymazat'" ref="vymazat" class="vymazat center-flex"><font-awesome-icon icon="trash" v-if="!expanding" class="pointer"/></div>
                    </transition-group>
                </div>

            </b-collapse>
        </a>
    </div>
</template>

<script>
    import AudioMsg from './audio_msg'
    import ClickOutside from 'vue-click-outside'
    export default {
        name: "Chat_message",
        components: {AudioMsg},
        props:["who","message"],
        data(){
          return{
              expanded:false,
              expanding:false,
              showCollapse:false,
              PressTimer:null,
              expand_percent:33,
              expand_percent2:0,
              reakce:{
                  like: this.message.reakce.like,
                  XD:this.message.reakce.XD,
                  angry:this.message.reakce.angry,
                  id:this.message.id,
                  date:this.message.date

              }
          }
        },
        methods:{
            enter() {

            },
            afterEnter() {

            },
            leave() {

            },

            expandReactions(){
                // this.$refs.options.style.gridTemplateColumns="1fr 0fr 0fr";
                var anim = setInterval(frame, 5);
                var that = this;
                function frame() {
                    if (!that.expanded){
                        that.expanding = true;
                        if(that.expand_percent2 ===75){
                        console.log(that.expand_percent2);
                        clearInterval(anim);
                        that.expanded = true;
                        }else{
                            if(that.expand_percent ===0){
                            console.log(that.expand_percent2);

                            }else{

                                that.expand_percent = that.expand_percent-1;
                                that.$refs.options.style.gridTemplateColumns=100-that.expand_percent+'% '+that.expand_percent*2+'%'

                            }
                            that.expand_percent2 = that.expand_percent2+1;
                            that.$refs.reakce.style.gridTemplateColumns=100-that.expand_percent2+'% '+that.expand_percent2+'%'
                        }
                    }else{
                        that.expanding = false;
                         if(that.expand_percent2 === 0){
                        console.log(that.expand_percent);
                        clearInterval(anim);
                        that.expanded = false;
                        }else{
                             if(that.expand_percent ===33){
                            console.log(that.expand_percent2);
                            }else{
                                that.expand_percent = that.expand_percent+1;
                                that.$refs.options.style.gridTemplateColumns=100-that.expand_percent*2+'% '+that.expand_percent*2+'%';

                            }

                            that.expand_percent2 = that.expand_percent2-1;
                            that.$refs.reakce.style.gridTemplateColumns=100-that.expand_percent2+'% '+that.expand_percent2+'%'

                        }
                    }

                }


            },
            Toggle(){
                console.log('toggle');
                this.showCollapse = !this.showCollapse
            },
            CloseonClick() {
                this.showCollapse = false
            },
    //
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
        },
        watch:{
          reakce:{
              deep:true,
              handler:function (novaHodnota) {
                    console.log(novaHodnota);
                    this.$store.dispatch('UpdateReactions', novaHodnota)
              }
          }
        },
        directives:{
            ClickOutside
        }
    }
</script>

<style scoped>
    .pointer{
        cursor:pointer;
    }
    .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
#reakce{
    transition:all 1s;
    border-radius: .5rem;
    display: grid;
    grid-template-columns: 1fr 0;
}
.expanding{
    background-color: black;
    color: white;
}
.msg{
    padding: 0.5rem;
}
#reakce div{
    width: 100%;
    height: 100%;
}
.center-flex{
    padding: .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.choices{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
    .options{

        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .message_update_choices{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>