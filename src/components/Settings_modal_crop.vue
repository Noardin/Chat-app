<template>
 <b-modal class=""  ref="change_profileimage" id="change_profileimage" title="Zde si muzes zmenit profilovy obrazek">
        <Cropperc v-bind:UserData="UserData" ref="cropper" ></Cropperc>


     <div class="container" slot="modal-footer">
         <div class="row">
         <input id="inputfile" ref=fileInputActivator type="file" @change="filehange">
             <b-button @click="clickonfile">Nahrat Obrazek</b-button>
            <b-button @click="Ulozit();Hide()">Ulozit</b-button>
           <b-button  variant="cancel" @click="Hide">Zrusit</b-button>
         </div>
       </div>
 </b-modal>

</template>

<script>
    import Cropperc from './Cropper'
    export default {
        components:{
            Cropperc
        },
        props:{
            UserData: Object
        },
        name: "Setting_crop",
        methods:{
            Ulozit(){
              this.$refs.cropper.crop();
            },
            clickonfile(){
              this.$refs.fileInputActivator.click()
            },
            filehange(file){
                this.$refs.cropper.fileChange(file)
            },
            Hide(){
                this.$refs.change_profileimage.hide();
            }
        }
    }
</script>

<style scoped>
 #inputfile{
     display: none;
 }
</style>