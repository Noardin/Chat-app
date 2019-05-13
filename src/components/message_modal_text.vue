<template>
    <b-modal class=""  ref="change_value_pop" id="change_value_pop" title="Zde si muzes zemnit prezdivku">


        <div class="input-group input-group-sm mb-3">
            <input v-model="newmessage" class="form-control" ref="message_input" id="value_input" type="text" v-bind:placeholder="msg.message">
        </div>
       <div slot="modal-footer">
            <b-button slot="modal-ok" @click="Ulozit();Hide()">Ulozit</b-button>
           <b-button slot="modal-cancel" variant="cancel" block @click="Hide">Zrusit</b-button>
       </div>



</b-modal>
</template>

<script>
    export default {
        name: "message_modal_text",
        data(){
            return{
                msg:{
                    message:'',
                    id:0
                },
                newmessage:''
            }
        },
        methods:{
            Ulozit(){
                this.$store.dispatch('updateMessage',{id:this.msg.id, message:this.newmessage}).then(console.log(this.newmessage))

            },
            Hide(){
                this.$refs.change_value_pop.hide();
                this.$refs.message_input.value=''
            },
            open(msg){
                this.msg = msg;
                this.$refs.chang_value_pop.show()
            }

        }
    }
</script>

<style scoped>

</style>