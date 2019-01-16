(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{102:function(e){e.exports={}},103:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),o=n(41),u=n.n(o),i=n(24),s=n(108),l=n(5),p=n(6),m=n(8),b=n(7),d=n(9),f=n(106),h=n(15),O=i.b,j=[],E=function(e){var t=e.toUpperCase();if(j.includes(t))throw new Error('ActionType "'.concat(t,'" already exists'));return j.push(e),{SUCCESS:"".concat(t,"_SUCCESS"),FAILURE:"".concat(t,"_FAILURE"),FETCHING:"".concat(t,"_FETCHING")}},y=n(16),g=n.n(y),v=n(14),S=n(33),w=E("telegram-message-received"),C=E("telegram-message-send"),N=function(e){return function(t){t({type:C.SUCCESS,payload:e})}},k=n(11),x={PHONE_NUMBER:"authorizationStateWaitPhoneNumber",CODE:"authorizationStateWaitCode",PASSWORD:"authorizationStateWaitPassword",AUTHORIZED:"authorizationStateReady",LOGGING_OUT:"authorizationStateLoggingOut",LOADING:"authorizationStateWaitEncryptionKey"},_={ready:!1,connecting:!0,authState:x.LOADING},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.SUCCESS:switch(t.payload.data["@type"]){case"updateConnectionState":switch(t.payload.data.state["@type"]){case"connectionStateConnecting":return Object(k.a)({},e,{connecting:!0});case"connectionStateReady":return Object(k.a)({},e,{connecting:!1})}return e;case"updateAuthorizationState":return Object(k.a)({},e,{authState:t.payload.data.authorization_state["@type"]});case"ok":return t.payload.data["@extra"]&&"setTdlibParameters"===t.payload.data["@extra"]["@type"]?Object(k.a)({},e,{ready:!0}):e;default:return e}default:return e}},P=g.a.mark(G),U=g.a.mark(H),I=g.a.mark(z),L=n(65);function G(){var e;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=new L,Object(S.b)(function(e){return a.onmessage=function(t){e({type:w.SUCCESS,payload:{data:t.data}})},a.terminate});case 2:return e=t.sent,t.next=5,Object(v.d)(e,H);case 5:case"end":return t.stop()}},P,this)}function H(e){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.c)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},U,this)}function R(e){if(!a)throw new Error("Worker is not yet ready");a.postMessage({type:"send",payload:e.payload})}var T=function(e){return new Promise(function(t,n){a.addEventListener("message",function e(r){return a.removeEventListener("message",e),"error"===r.data["@type"]?n(r.data):t(r.data)}),a.postMessage({type:"send",payload:e})})};function D(e){switch(e.payload.data["@type"]){case"updateAuthorizationState":e.payload.data.authorization_state["@type"]===x.AUTHORIZED&&a.postMessage({type:"send",payload:{"@type":"setOption",name:"online",value:{"@type":"optionValueBoolean",value:!0}}})}}function z(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(G),Object(v.d)(w.SUCCESS,D),Object(v.d)(C.SUCCESS,R)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},I,this)}var M,W=E("logout"),F=function(){return function(e){return e({type:W.FETCHING}),T({"@type":"logOut"}).then(function(e){console.log(e)})}},B=n(29),Z=n(19),V=n(43),J=n.n(V),K=(n(66),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=Object(Z.a)(e,["className"]),a=J()(Object(B.a)({"rt-btn":!0},t,t));return c.a.createElement("button",Object.assign({},n,{className:a}),this.props.children)}}]),t}(r.PureComponent));var q,Q=O(null,function(e){return Object(h.b)({logout:F},e)})(M=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(K,{className:"ri-logout-button",onClick:this.props.logout},"Logout")}}]),t}(r.PureComponent))||M,X=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"app ready",c.a.createElement(Q,null))}}]),t}(r.PureComponent),Y=n(104),$=n(28),ee=n(46),te=n(20),ne=(n(91),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.errorMessage,a=e.validate,r=Object(Z.a)(e,["name","errorMessage","validate"]);return c.a.createElement(te.a,{name:t,validate:a},function(e){var t=e.input,a=e.meta,o=a.touched&&a.error;return c.a.createElement("div",{className:"rt-input"},c.a.createElement("input",Object.assign({},t,r,{className:"rt-input__input"})),o&&c.a.createElement("div",{className:"rt-input__error"},n||a.error))})}}]),t}(r.PureComponent)),ae=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.onSubmit(Object(k.a)({"@type":"setAuthenticationPhoneNumber"},e))},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(te.b,{onSubmit:this.onSubmit},function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t,className:"rt-phone-form"},c.a.createElement("h1",null,"Enter phone number"),c.a.createElement(ne,{name:"phone_number"}),c.a.createElement("button",null,"submit"))})}}]),t}(r.PureComponent),re=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){T(Object(k.a)({"@type":"checkAuthenticationCode"},e)).then(function(e){}).catch(function(e){})},n.sendViaSms=function(){n.props.onSubmit({"@type":"resendAuthenticationCode"})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(te.b,{onSubmit:this.onSubmit},function(t){var n=t.handleSubmit;return c.a.createElement("form",{onSubmit:n,className:"rt-code-form"},c.a.createElement("h1",null,"Enter code"),c.a.createElement(ne,{name:"code"}),c.a.createElement("button",{type:"button",onClick:e.sendViaSms},"resend"),c.a.createElement("button",null,"submit"))})}}]),t}(r.PureComponent),ce=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.onSubmit(Object(k.a)({"@type":"checkAuthenticationPassword"},e))},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(te.b,{onSubmit:this.onSubmit},function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t,className:"rt-password-form"},c.a.createElement("h1",null,"Enter password"),c.a.createElement(ne,{name:"password"}),c.a.createElement("button",null,"submit"))})}}]),t}(r.PureComponent),oe=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rt-login-form"},this.renderForm())}},{key:"renderForm",value:function(){var e=this.props,t=e.state,n=e.onSubmit;switch(t){case x.PHONE_NUMBER:return c.a.createElement(ae,{onSubmit:n});case x.CODE:return c.a.createElement(re,{onSubmit:n});case x.PASSWORD:return c.a.createElement(ce,{onSubmit:n});default:return t}}}]),t}(r.PureComponent);n(93);var ue=O(function(e){return e.app},function(e){return Object(h.b)({sendMessage:N},e)})(q=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authState,n=e.sendMessage;return this.props.authState===x.AUTHORIZED?c.a.createElement(Y.a,{to:"/"}):c.a.createElement("div",{className:"rt-login"},c.a.createElement($.a,{id:"common.pages.login.title",defaultMessage:"Telegram | Sign in"},function(e){return c.a.createElement(ee.Helmet,null,c.a.createElement("title",null,e))}),c.a.createElement(oe,{state:t,onSubmit:n}))}}]),t}(r.Component))||q,ie=(n(96),n(107)),se=n(105),le=n(47),pe=n.n(le),me=n(48),be=n.n(me),de=new pe.a({id:"logo",use:"logo-usage",viewBox:"0 0 240 240",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" id="logo"><defs><linearGradient id="logo_a" x1=".667" y1=".167" x2=".417" y2=".75"><stop stop-color="#37aee2" offset="0" /><stop stop-color="#1e96c8" offset="1" /></linearGradient><linearGradient id="logo_b" x1=".66" y1=".437" x2=".851" y2=".802"><stop stop-color="#eff7fc" offset="0" /><stop stop-color="#fff" offset="1" /></linearGradient></defs><circle cx="120" cy="120" r="120" fill="url(#logo_a)" /><path fill="#c8daea" d="m98 175c-3.8876 0-3.227-1.4679-4.5678-5.1695L82 132.2059 170 80" /><path fill="#a9c9dd" d="m98 175c3 0 4.3255-1.372 6-3l16-15.558-19.958-12.035" /><path fill="url(#logo_b)" d="m100.04 144.41 48.36 35.729c5.5185 3.0449 9.5014 1.4684 10.876-5.1235l19.685-92.763c2.0154-8.0802-3.0801-11.745-8.3594-9.3482l-115.59 44.571c-7.8901 3.1647-7.8441 7.5666-1.4382 9.528l29.663 9.2583 68.673-43.325c3.2419-1.9659 6.2173-0.90899 3.7752 1.2584" /></symbol>'}),fe=(be.a.add(de),de),he=function(e){var t=e.className;return function(e,t){return c.a.createElement("svg",{className:t,focusable:"false"},c.a.createElement("use",{xlinkHref:"#".concat(e)}))}(fe.id,t)},Oe=(n(99),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rt-app-loading"},c.a.createElement("div",{className:"rt-app-loading__body"},c.a.createElement(he,{className:"rt-app-loading__icon"}),c.a.createElement("div",{className:"rt-app-loading__title"},"Telegram"),c.a.createElement("div",{className:"rt-app-loading__subtitle"},"a new era of messaging")))}}]),t}(r.PureComponent)),je=O(function(e){return{app:e.app}})(function(e){var t=e.component,n=e.app,a=Object(Z.a)(e,["component","app"]),r=t;return c.a.createElement(ie.a,Object.assign({},a,{render:function(e){return n.authState===x.LOADING?c.a.createElement(Oe,null):n.authState!==x.AUTHORIZED?c.a.createElement(se.a,{to:"/login"}):c.a.createElement(r,e)}}))});var Ee=O(function(e){return{app:e.app}})(function(e){var t=e.component,n=e.app,a=Object(Z.a)(e,["component","app"]),r=t;return c.a.createElement(ie.a,Object.assign({},a,{render:function(e){return n.ready?c.a.createElement(r,e):c.a.createElement(Oe,null)}}))});var ye=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rt-app"},c.a.createElement(f.a,null,c.a.createElement(Ee,{path:"/login",exact:!0,component:ue}),c.a.createElement(je,{path:"/",component:X})))}}]),t}(r.Component),ge=n(52),ve=n(49);Object($.c)(Object(ge.a)(ve));var Se={en:n(102)},we=function(e){return e.children};var Ce=Object(i.b)(function(){return{locale:"en",messages:Object(k.a)({},Se.en,Se.en)}})($.b),Ne=n(50),ke=n(51),xe="dddbb8e6acd44fdd6840e15c58a2ff45";var _e={apiId:"664453",apiHash:xe,isLoggerEnabled:!0},Ae=Object(k.a)({},_e,{isLoggerEnabled:!1}),Pe=Object(k.a)({},_e);Pe=Object(k.a)({},Ae);var Ue=g.a.mark(Ie);function Ie(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(z)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},Ue,this)}var Le,Ge=function(e,t){return Object(h.c)({app:A})(e,t)},He=Object(Ne.createLogger)({predicate:function(){return Pe.isLoggerEnabled}}),Re=Object(S.a)(),Te=n(26),De=Object(Te.a)(),ze=document.getElementById("root"),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(h.d)(Ge,e,Object(h.a)(ke.a,He,Re));return Re.run(Ie),t}();Le=ye,u.a.render(c.a.createElement(i.a,{store:Me},c.a.createElement(Ce,{textComponent:we},c.a.createElement(s.a,{history:De},c.a.createElement(Le,null)))),ze)},44:function(e,t){},54:function(e,t,n){e.exports=n(103)},65:function(e,t,n){e.exports=function(){return new Worker(n.p+"telegram.worker.6143d0fff8d81f317cf0.js")}},66:function(e,t,n){},75:function(e,t){},81:function(e,t){},91:function(e,t,n){},93:function(e,t,n){},96:function(e,t,n){},99:function(e,t,n){}},[[54,2,1]]]);
//# sourceMappingURL=main.61ae7fad.chunk.js.map