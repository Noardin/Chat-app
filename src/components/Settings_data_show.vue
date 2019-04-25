<template>
    <div class="col-md-9">
            <div class="row">
                <div class="col-md-8">
                    <div class="col">
                        <div class="row align-items-center justify-content-center"><div class="col-sm-5"><h5>prihlasovaci jmeno:</h5></div><div id="username_label" class="col-sm-3">{{UserData.username}}</div></div>
                        <div class="row align-items-center justify-content-center"><div class="col-sm-5"><h5>nickname:</h5></div><div id="nickname_label" class="col-sm-3 change_value" @click="PopModal">{{UserData.nickname}}<i class="fas fa-cog"></i></div></div>
                        <div class="row align-items-center justify-content-center"><div class="col-sm-5"><h5>e-mail:</h5></div><div id="email_label" class="col-sm-3">{{UserData.email}}</div></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row justify-content-center align-items-center">
                        <img v-bind:src="path(UserData.profile_img)" v-bind:alt="alt(UserData.nickname)" id="profile_img_prewiev" class="profile_img rounded"  >
                    </div>
                    </div>
            </div>
        </div>
</template>

<script>

    export default {
        name: "Settings_data_show",
        props:{
            UserData: Object
        },
        components:{

        },
        data(){
            return {

            }
        },
        methods:{
            PopModal(){
                              this.$parent.$refs.textModal.$refs.change_value_pop.show()
            },
            alt(name){
                return `image with name of ${name}`
            },
            path(img){
                return 'https://maxchatapp-backend.herokuapp.com/api/get/'+img+'.jpg'

            }


        },computed:{

            }
    }
</script>

<style scoped>
.settings_container {
    height: 500px;
}

.settings_row{
    position: relative;
    min-height: 100px;
    padding: 1rem;
}
.settings_row:after{
     content:'';
  position:absolute;
  bottom:0;
    background:grey;
    left: 50%;
  height:3px;
  transform: translate(-50%,0);
    width: 98%;
  border-radius:10px 10px 10px 10px;
}
.rounded{
    border-radius: 100%!important;
}
.profile_img{
    border: .1rem grey solid;
    width: 8em;
    height: 8em;
}
    .change_value{
        cursor: pointer;
    }
</style>