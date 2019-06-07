<template>

    <div class="col">
                <div class="row">
                    <div class="col-md-8">
                        <div class="profile_data_row row align-items-center justify-content-center">
                            <div class="col-sm-5">
                                <h5>prihlasovaci jmeno:</h5>
                            </div>
                            <div id="username_label" class="col-sm">{{UserData.username}}</div>
                        </div>
                        <div class="profile_data_row row align-items-center justify-content-center">
                            <div class="col-sm-5">
                                <h5>nickname:</h5>
                            </div>
                            <div id="nickname_label" class="col-sm change_value" @click="PopModal">{{UserData.nickname}}<i class="fas fa-cog"></i></div>
                        </div>
                        <div class="profile_data_row row align-items-center justify-content-center">
                            <div class="col-sm-5">
                                <h5>e-mail:</h5>
                            </div>
                            <div id="email_label" class="col-sm">{{UserData.email}}</div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="row justify-content-center align-items-center">
                            <img @click="PopModalImage" v-bind:src="path(UserData.profile_img)"
                                 @error="getDefault" v-bind:alt="alt(UserData.nickname)"
                                 id="profile_img_prewiev" class="profile_img rounded" >
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
    import {defaultURL} from '../config'
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
            PopModalImage(){
              this.$parent.$refs.cropModal.$refs.change_profileimage.show()
          },
            getDefault(event){
                event.target.src = defaultURL+'api/get/icons8-person-90.jpg'
            },
            PopModal(){
                              this.$parent.$refs.textModal.$refs.change_value_pop.show()
            },
            alt(name){
                return `image with name of ${name}`
            },
            path(img){
                return defaultURL+'api/get/'+img+'.jpg'

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
    background-color: white;
    border: .1rem black solid;
    height: 8rem;
    width: auto;
}
.change_value{
    cursor: pointer;
    }

    .profile_data_row{
        background-color: white;
        margin-bottom: 1rem;
        border-radius: .5rem;
    }
</style>