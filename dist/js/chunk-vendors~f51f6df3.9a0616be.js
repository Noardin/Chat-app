(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~f51f6df3"],{a250:function(t,e,i){"use strict";var n=i("385f"),o=i("7883");const a={lineWidth:{type:Number,default:2},lineColor:{type:[String,Array],default:"#9F9"},fftSize:{type:Number,default:128}},s={name:"av-line",mixins:[o["a"]],props:a,data(){return{audio:null,analyser:null,ctx:null,audioCtx:null}},methods:{mainLoop:function(){const t=this.analyser.frequencyBinCount,e=this.canvWidth/2/t,i=new Uint8Array(t);let n=0;this._setCanvas(),this.analyser.getByteFrequencyData(i),this.ctx.lineWidth=this.lineWidth,this.ctx.strokeStyle=Array.isArray(this.lineColor)?this.fillGradient(this.lineColor):this.lineColor,this.ctx.beginPath(),i.reverse(),this.ctx.moveTo(n,this.canvHeight/2),n=this._drawLine(i,n,e),i.reverse(),n=this._drawLine(i,n,e),this.ctx.lineTo(this.canvWidth,this.canvHeight/2),this.ctx.stroke(),requestAnimationFrame(this.mainLoop)},_setCanvas:function(){const t=this.canvWidth,e=this.canvHeight,i=this.canvFillColor,n=this.ctx.createLinearGradient(t/2,0,t/2,e);let o=0;this.ctx.clearRect(0,0,t,e),i&&(Array.isArray(i)?(i.forEach(t=>{n.addColorStop(o,t),o+=1/i.length}),this.ctx.fillStyle=n):this.ctx.fillStyle=i,this.ctx.fillRect(0,0,t,e))},_drawLine:function(t,e,i){const n=this.canvHeight;let o=0;return t.forEach((t,a)=>{o=n*(255-t)/510,a%2&&(o=n-o),this.ctx.lineTo(e,o),e+=i}),e}}};var l=s,r=i("15e9"),h=i("bc3a"),c=i.n(h);const d={canvWidth:{type:Number,default:500},canvHeight:{type:Number,default:80},playedLineWidth:{type:Number,default:.5},playedLineColor:{type:String,default:"navy"},noplayedLineWidth:{type:Number,default:.5},noplayedLineColor:{type:String,default:"lime"},playtime:{type:Boolean,default:!0},playtimeWithMs:{type:Boolean,default:!0},playtimeFontSize:{type:Number,default:12},playtimeFontFamily:{type:String,default:"monospace"},playtimeFontColor:{type:String,default:"grey"},playtimeTextBottom:{type:Boolean,default:!1},playtimeSlider:{type:Boolean,default:!0},playtimeSliderColor:{type:String,default:"red"},playtimeSliderWidth:{type:Number,default:1},playtimeClickable:{type:Boolean,default:!0}},u={name:"av-waveform",mixins:[o["a"]],props:d,data(){return{ctxWrapper:null,ctx:null,audio:null,duration:null,peaks:[]}},mounted(){const t={responseType:"arraybuffer",onDownloadProgress:this.downloadProgress};c.a.get(this.audio.src,t).then(t=>this.decode(t)).catch(t=>{console.error(`Failed to get file '${this.audio.src}'`),console.log(t)})},methods:{setAnalyser:function(){return null},mainLoop:function(){return null},decode:function(t){const e=new AudioContext;e.decodeAudioData(t.data).then(t=>this.setPeaks(t)).catch(t=>{console.error("Failed to decode audio data."),console.log(t)})},setPeaks:function(t){const e=[];let i=0,n=0,o=0,a=0;const s=Math.ceil(t.length/this.canvWidth),l=this.canvWidth,r=this.canvHeight;this.duration=this.audio.duration;for(let h=0;h<t.numberOfChannels;h++){const o=t.getChannelData(h);for(let t=0;t<l;t++){const a=~~(t*s),l=~~(a+s);i=0,n=0;for(let t=a;t<l;t++)i=o[t]<i?o[t]:i,n=o[t]>n?o[t]:n;e[t]&&(e[t][0]=e[t][0]<n?n:e[t][0],e[t][1]=e[t][1]>i?i:e[t][1]),e[t]=[n,i]}}for(let h=0;h<e.length;h++)n=e[h][0],i=e[h][1],o=r/2-n*r/2,a=r/2-i*r/2,e[h]=[o,a===o?o+1:a];this.peaks=e,this.playtimeClickable&&this.ctxWrapper.addEventListener("click",t=>this.updateTime(t)),this.waveform()},waveform:function(){const t=this.peaks,e=this.audio.currentTime,i=this.playX(e);let n=0;this.ctx.clearRect(0,0,this.canvWidth,this.canvHeight),n=this.draw(t.slice(0,i),this.playedLineWidth,this.playedLineColor,n),this.draw(t.slice(i),this.noplayedLineWidth,this.noplayedLineColor,n),this.drawSlider(e),this.drawTime(e),requestAnimationFrame(this.waveform)},draw:function(t,e,i,n){return this.ctx.lineWidth=e,this.ctx.strokeStyle=i,this.ctx.beginPath(),t.forEach(t=>{this.ctx.moveTo(n,t[0]),this.ctx.lineTo(n,t[1]),n++}),this.ctx.stroke(),n},timeFormat:function(t){let e="";const i=parseFloat(t);if(isNaN(i))return e;const n=~~(i/60),o=~~(i%60),a=~~(i%1*1e3);return e=n<10?`0${n}:`:`${n}:`,e+=`0${o}`.substr(-2),this.playtimeWithMs&&(e+="."+`00${a}`.substr(-3)),e},drawTime:function(t){const e=this.timeFormat(t),i=3,n=~~this.ctx.measureText(e).width,o=this.playX(t),a=o>this.canvWidth-n-i?o-n-i:o+i,s=this.playtimeTextBottom?this.canvHeight-this.playtimeFontSize+i:this.playtimeFontSize+i;this.ctx.fillStyle=this.playtimeFontColor,this.ctx.font=`${this.playtimeFontSize}px ${this.playtimeFontFamily}`,this.ctx.fillText(e,a,s)},drawSlider:function(t){const e=this.playX(t);this.ctx.lineWidth=this.playtimeSliderWidth,this.ctx.strokeStyle=this.playtimeSliderColor,this.ctx.beginPath(),this.ctx.moveTo(e,0),this.ctx.lineTo(e,this.canvHeight),this.ctx.stroke()},playX:function(t){return~~(t/this.duration*this.canvWidth)},updateTime:function(t){this.audio.currentTime=t.offsetX/this.canvWidth*this.duration},downloadProgress:function(t){const e=Math.round(t.loaded/t.total*this.canvWidth);this.ctx.clearRect(0,0,this.canvWidth,this.canvHeight),this.ctx.beginPath(),this.ctx.strokeStyle=this.noplayedLineColor,this.ctx.moveTo(0,this.canvHeight/2),this.ctx.lineTo(e,this.canvHeight/2),this.ctx.stroke()}}};var m=u;const p={install:function(t){window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,t.component(n["a"].name,n["a"]),t.component(l.name,l),t.component(r["a"].name,r["a"]),t.component(m.name,m),t.prototype.$avAudioRefs={}}};e["a"]=p}}]);
//# sourceMappingURL=chunk-vendors~f51f6df3.9a0616be.js.map