<template>
    <div class="image_msg_wrapper container">
         <i class="fas fa-upload"></i>
        <input id="inputfile" ref=fileInputActivator type="file" @change="filehange">
        <b-button @click="clickonfile">Nahrat Obrazek</b-button>
    </div>

</template>

<script>
    export default {
        name: "image_msg",
        methods:{
            clickonfile(){
              this.$refs.fileInputActivator.click()
            },
            fileChange(file) {
            // To check if file is an image
            if (!file.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
                console.warn('not an image');
                file.target.value = null;
                this.$emit('imageChanged', null);
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file.target.files[0]);
            reader.onload = () => {
                //reader.result
            };
            reader.onerror = (error) => {
                           };
        }
        }
    }
</script>

<style scoped>
    .image_msg_wrapper{
         position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height:4rem;
        width: 4rem;
        border-radius: 100%;
        background-color: transparent;
        font-size: 3rem;
    }
    #inputfile{
     display: none;
    }
</style>