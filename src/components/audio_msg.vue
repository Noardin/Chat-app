<template>
    <div class="audio_wrapper container">
        <div class="controls row">
            <div class="play col-2" v-on:click.stop.prevent="playorStopAudio">
                <div v-show="!isPlaying"><i class="fas fa-play" ></i></div>
                <div v-show="isPlaying"><i class="fas fa-pause" ></i></div>
            </div>
            <span class="col-10" id="seek-obj-container" :ref="'seek-obj-container'+AudioMessage.id">
                <progress id="seek-obj" :ref="'seek-obj'+AudioMessage.id" value="0" max="1"></progress>
            </span>
        </div>


    <audio :ref="'audio'+AudioMessage.id" @timeupdate="initProgressBar">
        <source ref="audio" :src="getURL(AudioMessage.message)" type="audio/wav">
    </audio>
    </div>
</template>

<script>
    import {defaultURL} from '../config'
    export default {
        name: "Audio-demo",
        components: {},
        props: ['AudioMessage'],
        data() {
            return {
                isPlaying: false
            }
        },
        methods: {
            getURL(data) {
                return defaultURL+'api/get_audio/'+data+'.wav'
            },
            playorStopAudio() {
                var audios = this.$refs['audio' + this.AudioMessage.id];
                if(this.isPlaying){
                    audios.pause()

                }else{
                    audios.play()
                }
                this.isPlaying = !this.isPlaying;

            },

            initProgressBar() {
                var player = this.$refs['audio' + this.AudioMessage.id];

                var progressbar = this.$refs['seek-obj' + this.AudioMessage.id];
                progressbar.value = (player.currentTime / player.duration);
                progressbar.addEventListener("click", seek);

                function seek(event){
                    event.preventDefault();
                    event.stopPropagation();
                    var percent = event.offsetX / this.offsetWidth;
                    player.currentTime = percent * player.duration;
                    progressbar.value = percent / 100;
                }
                if (player.currentTime === player.duration) {
                    this.isPlaying = !this.isPlaying;
                    player.pause();
                    player.currentTime = 0;

                  }

            },

        },
            computed: {}


    }
</script>

<style scoped>
     progress {
      width: 90%;
    }

    progress[value] {
      -webkit-appearance: none;
      appearance: none;
      background-color: white;
      color: blue;
      height: 0.5em;
    }

    progress[value]::-webkit-progress-bar {
      background-color: gray;
      border-radius: 2px;
      border: 1px solid #acacac;
      color: blue;
    }

    progress::-webkit-progress-value {
      background-color: blue;
    }
</style>