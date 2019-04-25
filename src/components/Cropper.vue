<template>
    <div>
         <vue-croppie ref=croppieRef :enableExif="true" :enableResize="false" :boundary="{height:300}"
                      :viewport="{width:250, height: 250, type: 'circle'}"></vue-croppie>

    </div>
</template>

<script>
    import '../assets/croppie.css'
    export default {
        name: "Cropper",
         props: {
            UserData:Object,
        default: String,
        cropper: Boolean,
        src: String,
    },
        data(){
            return{
                cropped:''
            }
        },
        mounted(){
            this.$refs.croppieRef.bind({
                url: this.path(this.UserData.profile_img)
            })
        },
    methods: {
            path(img){
                return 'https://maxchatapp-backend.herokuapp.com/api/get/'+img+'.jpg'

            },
            crop() {
            this.$refs.croppieRef.result({
				type: 'base64', //base64, html, blob, rawcanvas
				size: 'viewport', //original , viewport, {width, height}
				format: 'png', //jpeg, png, webp
				quality: 1,
				circle: false
			},(output) => {
                this.cropped = output;
                this.$store.dispatch('updateSettings',{imageBase64:this.cropped}).then(console.log('cropped'))
            });
        },
        // This method will detect if the image from image input changed
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
                this.dialog = true;
                // bind the result of the file
                // to croppie
                this.$refs.croppieRef.bind({
                    url: reader.result,
                });
                file.target.value = null
            };
            reader.onerror = (error) => {
                           };
        }
    }
    }
</script>

<style scoped>

</style>