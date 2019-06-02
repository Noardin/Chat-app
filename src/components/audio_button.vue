<template>
    <div id="audio_button" ref="audio_button" class="audiobuttn" v-on:mousedown.stop.prevent="ToggleRecording" v-on:mouseup.stop.prevent="ToggleRecording">
        <i class="fas fa-microphone" ></i>
    </div>
</template>

<script>
    export default {
        name: "audio_button",
        data(){
          return{
               isRecording: false,
            audioRecorder: null,
            recordingData: [],
                 dataUrl: '',
          }
        },
        methods:{
            ToggleRecording(){
                var audiobutton = this.$refs.audio_button;

                 var that = this;
                this.isRecording = !this.isRecording;
                if (this.isRecording) {
                    audiobutton.classList +=' listening';
                    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                    navigator.getUserMedia({
                            audio: true,
                            video: false
                        }, function(stream) {
                            that.stream = stream;
                            that.audioRecorder = new MediaRecorder(stream, {
                                audioBitsPerSecond : 96000
                            });
                            that.audioRecorder.start();
                                                   }, function(error) {
                            alert(JSON.stringify(error));
                    });
                }
                else {
                    audiobutton.classList.remove('listening');
                    this.audioRecorder.stop();
                    this.audioRecorder.ondataavailable = function(event) {
                    that.recordingData.push(event.data);
                    };
                    this.audioRecorder.onstop = function(event) {
                        var blob = new Blob(that.recordingData, { type: 'audio/wav'});
                        var reader = new FileReader();
                         var base64data;
                         reader.readAsDataURL(blob);
                         reader.onloadend = function() {
                              base64data = reader.result;
                             that.dataUrl = window.URL.createObjectURL(blob);
                             that.$store.dispatch('submitNewMessage', {
                                    audio:true,
                                    message:base64data
                             }).then(()=>{that.recordingData = []})
                        }
                    };

                }
            }
        }
    }
</script>

<style scoped>
    .fa-microphone{
        z-index: 3;
    }
    #audio_button{
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
    .listening:before{
        content: "";
        position: absolute;
        border-radius: 100%;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: 1;
        -webkit-animation-name: listening;
        -moz-animation-name: listening;
        -o-animation-name: listening;
        animation-name: listening;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
    .listening:after{
        content: "";
        position: absolute;
        border-radius: 100%;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: 2;
        -webkit-animation-name: listening;
        -moz-animation-name: listening;
        -o-animation-name: listening;
        animation-name: listening;
        animation-duration: 2s;
        animation-fill-mode: backwards;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: reverse;
    }
    @keyframes listening {
        0% {background-color: royalblue;
            transform:scale(1);
        }
        50%{
            background-color: green;
            transform:scale(1.2);
        }
        75%{
            background-color: #3498DB;
            transform:scale(5);
        }
        100%{
            background-color: lightblue;
            transform:scale(1);
        }
    }

</style>