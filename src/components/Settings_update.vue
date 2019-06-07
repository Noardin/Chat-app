<template>
    <Loader v-if="UserData == null"></Loader>
    <div v-else class="container-fluid">


        <Setting_crop ref="cropModal" v-bind:UserData="UserData"></Setting_crop>
        <Setting_text ref="textModal"></Setting_text>
          <div class="container-fluid">
            <div class="row">
                <div class="col setting_header">Nastavení</div>
            </div>
            <div class="row" >
                <div class="col">

                    <div class="row">
                        <Settings_data_show v-bind:UserData="UserData"></Settings_data_show>

                    </div>
                    <div class="row">
                        <Settings_options ></Settings_options>
                    </div>

                </div>


            </div>

          </div>


    </div>
</template>
<script>
  import Settings_options from '../components/Settings_options'
  import Settings_data_show from '../components/Settings_data_show'
  import Setting_crop from '../components/Settings_modal_crop'
  import Setting_text from '../components/Settings_modal_text'
  import Loader from '../components/Loader'
  export default {
      name:'settings',
      components:{

          Loader,
          Settings_options,
          Settings_data_show,
          Setting_crop,

          Setting_text


      },
      props:{
          UserData:Object
      },
      data(){
        return{
            token: this.$route.params.token
        }
        },
      watch: {
        '$route' (to, from) {
                       this.token = this.$route.params.token
        }

        },
      methods:{



      },computed:{


        },
  }
</script>
<style scoped>


.setting_header{
    height: 3rem;
    font-size: 2rem;
    font-family: 'Arial';
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-bottom: #777777 2px solid;
    margin-bottom:5px;
}



</style>
