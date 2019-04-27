<template>
    <div class="col-md-3" id="change_settings_col">
            <div class="margin-top row justify-content-center">
                <button type="button" @click="Send_request" id="change_password">Zmenit heslo</button>
            </div>
            <div class="margin-top row align-items-center justify-content-center">
                 <input id="profile_img_input" class="image_input" type="file">
                <button type="button" id="profile_input_overwrite" @click="PopModal">Zmenit obrazek</button>

            </div>

        </div>
</template>

<script>
    export default {
        name: "Settings_options",
        methods:{
          PopModal(){
              this.$parent.$refs.cropModal.$refs.change_profileimage.show()
          },
            Send_request(){
                this.$store.dispatch('Send_password_request')
            }
        },
        components:{

        }
    }
</script>

<style scoped>
#myTabs a{
    border-radius: .25em;
    padding: .05rem;
    font-size: 1.25rem;
    font-family: 'Concert One', cursive;
    width: 100%;
    text-align: center;
    outline: none;
    text-decoration: none;
    color: royalblue;
    background-color: transparent;

}
#myTabs a:hover{
    color: white;
    background-color: royalblue;
}
#tabs_container{
    border-right: #777777 2px solid;
}
.center-pills{
    display: flex;
    align-items: center;
}

#profile_img_input{
    display: none;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
}
button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;
    height: 3.5rem;

}
.margin-top{
    margin-top: 1rem;
}
.align-items-center{
    align-items: center;
}

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}
#profile_input_overwrite {
border-radius: 5px;
    height: 3.5rem;

}
</style>