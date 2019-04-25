<template>
   <b-modal class=""  ref="change_value_pop" id="change_value_pop" title="Zde si muzes zemnit prezdivku">


                <div class="input-group input-group-sm mb-3">
                    <input v-model="newnickname" class="form-control" ref="nickname_input" id="value_input" type="text" v-bind:placeholder="UserData.nickname">
                </div>
       <div slot="modal-footer">
            <b-button slot="modal-ok" @click="Ulozit();Hide()">Ulozit</b-button>
           <b-button slot="modal-cancel" variant="cancel" block @click="Hide">Zrusit</b-button>
       </div>



</b-modal>
</template>

<script>
    import BButton from "bootstrap-vue/src/components/button/button";
    export default {
        name: "Settings_text",
        components: {BButton},
        data(){
            return{
                newnickname:''
            }
        },
        methods:{
            Ulozit(){
                this.$store.dispatch('updateSettings',{nickname:this.newnickname}).then(console.log(this.newnickname))

            },
            Hide(){
                this.$refs.change_value_pop.hide();
                this.$refs.nickname_input.value=''
            }


        },
        computed:{
            UserData:function () {
                return this.$store.getters.UserData
            }
        }

    }
</script>

<style scoped>

</style>