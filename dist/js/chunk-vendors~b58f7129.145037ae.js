(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~b58f7129"],{4362:function(n,r,t){r.nextTick=function(n){setTimeout(n,0)},r.platform=r.arch=r.execPath=r.title="browser",r.pid=1,r.browser=!0,r.env={},r.argv=[],r.binding=function(n){throw new Error("No such module. (Possibly not yet loaded)")},function(){var n,e="/";r.cwd=function(){return e},r.chdir=function(r){n||(n=t("df7c")),e=n.resolve(r,e)}}(),r.exit=r.kill=r.umask=r.dlopen=r.uptime=r.memoryUsage=r.uvCounters=function(){},r.features={}},df7c:function(n,r,t){(function(n){function t(n,r){for(var t=0,e=n.length-1;e>=0;e--){var i=n[e];"."===i?n.splice(e,1):".."===i?(n.splice(e,1),t++):t&&(n.splice(e,1),t--)}if(r)for(;t--;t)n.unshift("..");return n}var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(n){return e.exec(n).slice(1)};function o(n,r){if(n.filter)return n.filter(r);for(var t=[],e=0;e<n.length;e++)r(n[e],e,n)&&t.push(n[e]);return t}r.resolve=function(){for(var r="",e=!1,i=arguments.length-1;i>=-1&&!e;i--){var u=i>=0?arguments[i]:n.cwd();if("string"!==typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(r=u+"/"+r,e="/"===u.charAt(0))}return r=t(o(r.split("/"),function(n){return!!n}),!e).join("/"),(e?"/":"")+r||"."},r.normalize=function(n){var e=r.isAbsolute(n),i="/"===u(n,-1);return n=t(o(n.split("/"),function(n){return!!n}),!e).join("/"),n||e||(n="."),n&&i&&(n+="/"),(e?"/":"")+n},r.isAbsolute=function(n){return"/"===n.charAt(0)},r.join=function(){var n=Array.prototype.slice.call(arguments,0);return r.normalize(o(n,function(n,r){if("string"!==typeof n)throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))},r.relative=function(n,t){function e(n){for(var r=0;r<n.length;r++)if(""!==n[r])break;for(var t=n.length-1;t>=0;t--)if(""!==n[t])break;return r>t?[]:n.slice(r,t-r+1)}n=r.resolve(n).substr(1),t=r.resolve(t).substr(1);for(var i=e(n.split("/")),o=e(t.split("/")),u=Math.min(i.length,o.length),s=u,c=0;c<u;c++)if(i[c]!==o[c]){s=c;break}var f=[];for(c=s;c<i.length;c++)f.push("..");return f=f.concat(o.slice(s)),f.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(n){var r=i(n),t=r[0],e=r[1];return t||e?(e&&(e=e.substr(0,e.length-1)),t+e):"."},r.basename=function(n,r){var t=i(n)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t},r.extname=function(n){return i(n)[3]};var u="b"==="ab".substr(-1)?function(n,r,t){return n.substr(r,t)}:function(n,r,t){return r<0&&(r=n.length+r),n.substr(r,t)}}).call(this,t("4362"))}}]);
//# sourceMappingURL=chunk-vendors~b58f7129.145037ae.js.map