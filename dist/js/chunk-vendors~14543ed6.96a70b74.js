(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~14543ed6"],{"2b27":function(e,n,o){(function(){var n={expires:"1d",path:"; path=/"},o={install:function(e){e.prototype.$cookies=this,e.cookies=this},config:function(e,o){e&&(n.expires=e),o&&(n.path="; path="+o)},get:function(e){var n=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(n&&"{"===n.substring(0,1)&&"}"===n.substring(n.length-1,n.length))try{n=JSON.parse(n)}catch(o){return n}return n},set:function(e,o,t,r,i,a){if(!e)throw new Error("cookie name is not find in first argument");if(/^(?:expires|max\-age|path|domain|secure)$/i.test(e))throw new Error("cookie key name illegality ,Cannot be set to ['expires','max-age','path','domain','secure']\t","current key name: "+e);o&&o.constructor===Object&&(o=JSON.stringify(o));var s="";if(t=void 0===t?n.expires:t,t&&0!=t)switch(t.constructor){case Number:s=t===1/0||-1===t?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:if(/^(?:\d{1,}(y|m|d|h|min|s))$/i.test(t)){var c=t.replace(/^(\d{1,})(?:y|m|d|h|min|s)$/i,"$1");switch(t.replace(/^(?:\d{1,})(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":s="; max-age="+2592e3*+c;break;case"d":s="; max-age="+86400*+c;break;case"h":s="; max-age="+3600*+c;break;case"min":s="; max-age="+60*+c;break;case"s":s="; max-age="+c;break;case"y":s="; max-age="+31104e3*+c;break;default:new Error("unknown exception of 'set operation'")}}else s="; expires="+t;break;case Date:s="; expires="+t.toUTCString();break}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+s+(i?"; domain="+i:"")+(r?"; path="+r:n.path)+(a?"; secure":""),this},remove:function(e,o,t){return!(!e||!this.isKey(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+t:"")+(o?"; path="+o:n.path),this)},isKey:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=0;n<e.length;n++)e[n]=decodeURIComponent(e[n]);return e}};e.exports=o,"undefined"!==typeof window&&(window.$cookies=o)})()}}]);
//# sourceMappingURL=chunk-vendors~14543ed6.96a70b74.js.map