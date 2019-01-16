!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/react-telegram/",n(n.s=1)}([function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i="~";function o(){}function s(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,n,r,o){if("function"!==typeof n)throw new TypeError("The listener must be a function");var a=new s(n,r||e,o),c=i?i+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function c(e,t){0===--e._eventsCount?e._events=new o:delete e._events[t]}function u(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(i=!1)),u.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(i?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},u.prototype.listeners=function(e){var t=i?i+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,o=n.length,s=new Array(o);r<o;r++)s[r]=n[r].fn;return s},u.prototype.listenerCount=function(e){var t=i?i+e:e,n=this._events[t];return n?n.fn?1:n.length:0},u.prototype.emit=function(e,t,n,r,o,s){var a=i?i+e:e;if(!this._events[a])return!1;var c,u,l=this._events[a],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,r),!0;case 5:return l.fn.call(l.context,t,n,r,o),!0;case 6:return l.fn.call(l.context,t,n,r,o,s),!0}for(u=1,c=new Array(f-1);u<f;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var v,p=l.length;for(u=0;u<p;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),f){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,r);break;default:if(!c)for(v=1,c=new Array(f-1);v<f;v++)c[v-1]=arguments[v];l[u].fn.apply(l[u].context,c)}}return!0},u.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},u.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},u.prototype.removeListener=function(e,t,n,r){var o=i?i+e:e;if(!this._events[o])return this;if(!t)return c(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||r&&!s.once||n&&s.context!==n||c(this,o);else{for(var a=0,u=[],l=s.length;a<l;a++)(s[a].fn!==t||r&&!s[a].once||n&&s[a].context!==n)&&u.push(s[a]);u.length?this._events[o]=1===u.length?u[0]:u:c(this,o)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=i?i+e:e,this._events[t]&&c(this,t)):(this._events=new o,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=i,u.EventEmitter=u,e.exports=u},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}n.r(t);var o="dddbb8e6acd44fdd6840e15c58a2ff45";var s={apiId:"664453",apiHash:o,isLoggerEnabled:!0},a=i({},s,{isLoggerEnabled:!1}),c=i({},s);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}c=i({},a);var l=n(0),f=n.n(l),v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tdWasm=t,this.tdFunctions=void 0,this.client=void 0,this.eventEmitter=new f.a,this.tdFunctions={td_create:t.cwrap("td_create","number",[]),td_destroy:t.cwrap("td_destroy",null,["number"]),td_send:t.cwrap("td_send",null,["number","string"]),td_execute:t.cwrap("td_execute",null,["number","string"]),td_receive:t.cwrap("td_receive","string",["number"]),td_set_verbosity:t.cwrap("td_set_verbosity",null,["number"])},this.create(),this.tdFunctions.td_set_verbosity(2),this.loopReceive(),this.send({"@type":"setTdlibParameters",parameters:{use_test_dc:!0,database_directory:"/telegram_data",files_directory:"/telegram_data",use_file_database:!1,use_message_database:!0,api_id:n.apiId,api_hash:n.apiHash,system_language_code:"en",device_model:navigator.appVersion,system_version:navigator.appVersion,application_version:navigator.appName,enable_storage_optimizer:!0},"@extra":{"@type":"setTdlibParameters"}}),this.send({"@type":"checkDatabaseEncryptionKey"})}var t,n,r;return t=e,(n=[{key:"execute",value:function(e){this.tdFunctions.td_execute(this.client,JSON.stringify(e))}},{key:"send",value:function(e){this.eventEmitter.emit("send",e),this.tdFunctions.td_send(this.client,JSON.stringify(e))}},{key:"receive",value:function(){var e=this.tdFunctions.td_receive(this.client);if(e){var t=JSON.parse(e);return this.eventEmitter.emit("receive",t),t}return null}},{key:"addListener",value:function(e,t,n){this.eventEmitter.addListener(e,t,n)}},{key:"removeListener",value:function(e,t,n){this.eventEmitter.removeListener(e,t,n)}},{key:"loopReceive",value:function(){var e=this;this.receive()?this.loopReceive():setTimeout(function(){e.loopReceive()},100)}},{key:"create",value:function(){this.client=this.tdFunctions.td_create()}}])&&u(t.prototype,n),r&&u(t,r),e}();importScripts("/td_wasm/td_wasm.js");var p=function(){var e;return function(t){e&&self.clearTimeout(e),console.log("Syncing..."),e=self.setTimeout(function(){t.syncfs(!1,function(e){e?console.log(e):console.log("Synced!")})},500)}}();self.Module().then(function(e){var t;t=self.setInterval(function(){if(self.syncdone){self.clearInterval(t);var n=new v(e,{apiId:c.apiId,apiHash:c.apiHash});n.addListener("receive",function(t){p(e.FS),postMessage(t)}),self.onmessage=function(e){var t=e.data;switch(t.type){case"send":n.send(t.payload);break;default:console.log("telegram worker: unknown action")}}}},500)})}]);
//# sourceMappingURL=telegram.worker.6d540d24f5017b7d8efd.js.map