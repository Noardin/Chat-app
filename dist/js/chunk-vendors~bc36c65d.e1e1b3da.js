(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~bc36c65d"],{"6d1c":function(e,t,s){(function(t){var o,i,r=s("d156"),n=s("9973"),a=s("2c80"),h=s("56bf"),p=s("c6a7"),c=s("6389")("engine.io-client:websocket");if("undefined"!==typeof WebSocket)o=WebSocket;else if("undefined"!==typeof self)o=self.WebSocket||self.MozWebSocket;else try{i=s(0)}catch(l){}var f=o||i;function u(e){var t=e&&e.forceBase64;t&&(this.supportsBinary=!1),this.perMessageDeflate=e.perMessageDeflate,this.usingBrowserWebSocket=o&&!e.forceNode,this.protocols=e.protocols,this.usingBrowserWebSocket||(f=i),r.call(this,e)}e.exports=u,h(u,r),u.prototype.name="websocket",u.prototype.supportsBinary=!0,u.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=this.protocols,s={agent:this.agent,perMessageDeflate:this.perMessageDeflate};s.pfx=this.pfx,s.key=this.key,s.passphrase=this.passphrase,s.cert=this.cert,s.ca=this.ca,s.ciphers=this.ciphers,s.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(s.headers=this.extraHeaders),this.localAddress&&(s.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?t?new f(e,t):new f(e):new f(e,t,s)}catch(o){return this.emit("error",o)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},u.prototype.addEventListeners=function(){var e=this;this.ws.onopen=function(){e.onOpen()},this.ws.onclose=function(){e.onClose()},this.ws.onmessage=function(t){e.onData(t.data)},this.ws.onerror=function(t){e.onError("websocket error",t)}},u.prototype.write=function(e){var s=this;this.writable=!1;for(var o=e.length,i=0,r=o;i<r;i++)(function(e){n.encodePacket(e,s.supportsBinary,function(i){if(!s.usingBrowserWebSocket){var r={};if(e.options&&(r.compress=e.options.compress),s.perMessageDeflate){var n="string"===typeof i?t.byteLength(i):i.length;n<s.perMessageDeflate.threshold&&(r.compress=!1)}}try{s.usingBrowserWebSocket?s.ws.send(i):s.ws.send(i,r)}catch(l){c("websocket closed before onclose event")}--o||a()})})(e[i]);function a(){s.emit("flush"),setTimeout(function(){s.writable=!0,s.emit("drain")},0)}},u.prototype.onClose=function(){r.prototype.onClose.call(this)},u.prototype.doClose=function(){"undefined"!==typeof this.ws&&this.ws.close()},u.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",s="";this.port&&("wss"===t&&443!==Number(this.port)||"ws"===t&&80!==Number(this.port))&&(s=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=p()),this.supportsBinary||(e.b64=1),e=a.encode(e),e.length&&(e="?"+e);var o=-1!==this.hostname.indexOf(":");return t+"://"+(o?"["+this.hostname+"]":this.hostname)+s+this.path+e},u.prototype.check=function(){return!!f&&!("__initialize"in f&&this.name===u.prototype.name)}}).call(this,s("b639").Buffer)}}]);
//# sourceMappingURL=chunk-vendors~bc36c65d.e1e1b3da.js.map