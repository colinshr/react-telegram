(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{101:function(e,t,n){},104:function(e,t,n){},115:function(e,t,n){},127:function(e,t,n){},139:function(e,t,n){},142:function(e,t,n){},144:function(e,t,n){},146:function(e){e.exports={}},149:function(e,t,n){e.exports=function(){return new Worker(n.p+"telegram.worker.9f69249aacaa1eea7352.js")}},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),u=n(17),i=n(156),s=n(5),l=n(6),p=n(10),m=n(9),b=n(11),d=n(155),f=(n(82),n(18)),h=n(24),O=n(157),j=n(16),g=n(20),v=n.n(g),y=n(60),E=n.n(y),C=n(61),A=n.n(C),S=new E.a({id:"logo",use:"logo-usage",viewBox:"0 0 240 240",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" id="logo"><defs><linearGradient id="logo_a" x1=".667" y1=".167" x2=".417" y2=".75"><stop stop-color="#37aee2" offset="0" /><stop stop-color="#1e96c8" offset="1" /></linearGradient><linearGradient id="logo_b" x1=".66" y1=".437" x2=".851" y2=".802"><stop stop-color="#eff7fc" offset="0" /><stop stop-color="#fff" offset="1" /></linearGradient></defs><circle cx="120" cy="120" r="120" fill="url(#logo_a)" /><path fill="#c8daea" d="m98 175c-3.8876 0-3.227-1.4679-4.5678-5.1695L82 132.2059 170 80" /><path fill="#a9c9dd" d="m98 175c3 0 4.3255-1.372 6-3l16-15.558-19.958-12.035" /><path fill="url(#logo_b)" d="m100.04 144.41 48.36 35.729c5.5185 3.0449 9.5014 1.4684 10.876-5.1235l19.685-92.763c2.0154-8.0802-3.0801-11.745-8.3594-9.3482l-115.59 44.571c-7.8901 3.1647-7.8441 7.5666-1.4382 9.528l29.663 9.2583 68.673-43.325c3.2419-1.9659 6.2173-0.90899 3.7752 1.2584" /></symbol>'}),w=(A.a.add(S),S),T=function(e){var t=e.className;return function(e,t){return r.a.createElement("svg",{className:t,focusable:"false"},r.a.createElement("use",{xlinkHref:"#".concat(e)}))}(w.id,t)},N=(n(101),function(e){var t=e.title,n=v()("rt-logo");return r.a.createElement("div",{className:n()},r.a.createElement(T,{className:n("icon")}),r.a.createElement("div",{className:n("title")},r.a.createElement(j.a,{id:"components.logo.title",defaultMessage:"Telegram"})),t&&r.a.createElement("div",{className:n("subtitle")},t))}),x=(n(104),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"rt-app-loading"},r.a.createElement("div",{className:"rt-app-loading__body"},r.a.createElement(N,{title:r.a.createElement(j.a,{id:"components.app-loading.title",defaultMessage:"a new era of messaging"})})))}}]),t}(a.PureComponent)),k=Object(u.b)(function(e){return{telegram:e.telegram,app:e.app}})(function(e){var t=e.component,n=e.telegram,a=e.app,c=Object(h.a)(e,["component","telegram","app"]),o=t;return r.a.createElement(O.a,Object.assign({},c,{render:function(e){return!n.isReady||a.fetching?r.a.createElement(x,null):r.a.createElement(o,e)}}))}),_=n(38),P=n(151),R=n(4),D={PHONE_NUMBER:"authorizationStateWaitPhoneNumber",CODE:"authorizationStateWaitCode",PASSWORD:"authorizationStateWaitPassword",AUTHORIZED:"authorizationStateReady",LOGGING_OUT:"authorizationStateLoggingOut",LOADING:"authorizationStateWaitEncryptionKey",CLOSED:"authorizationStateClosed"},L={UPDATE_CONNECTION_STATE:"updateConnectionState",UPDATE_AUTHORIZATION_STATE:"updateAuthorizationState",READY:"ok"},I="connectionStateConnecting",M="connectionStateReady",U=Object(R.createAction)("@@rt/telegram/send-message/fetching",function(e){return function(t){return e(t)}}),z=Object(R.createAction)("@@rt/telegram/send-message/failure"),H=Object(R.createAction)("@@rt/telegram/send-message/success"),G=Object(R.createAction)("@rt/telegram/receive-message",function(e){return function(t){return e(t)}}),B=n(21),F=n(33),W=n(29),Z=n.n(W),V=(n(115),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.className,a=Object(h.a)(t,["className"]),c=v()("rt-button"),o=Z()((e={},Object(F.a)(e,c(),!0),Object(F.a)(e,n,n),e));return r.a.createElement("button",Object.assign({},a,{className:o}),this.props.children)}}]),t}(a.PureComponent)),J=n(64),Y=n(8),K=n(69),q="ZZ",Q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){(0,n.props.onChange)(e.value===q?void 0:e.value)},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=v()("rt-phone-number-country-select"),t=this.props,n=t.value,a=t.options,c=t.onBlur,o=t.onFocus,u=a.map(function(e){return Object(Y.a)({},e,{value:e.value||q})}),i=u.find(function(e){return e.value===n});return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(i.icon,{value:i.value}),r.a.createElement("div",{className:e()},r.a.createElement(K.a,{value:i,className:e("select"),options:u,onBlur:c,onFocus:o,onChange:this.onChange})))}}]),t}(r.a.PureComponent);Q.defaultProps={value:q};n(127);var X,$,ee=Object(u.b)(function(e){return{country:e.app.countryCode}})(X=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).ref=r.a.createRef(),n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.ref.current&&this.ref.current.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.country,c=v()("rt-phone-number-input");return r.a.createElement(B.a,{name:n},function(t){var n=t.input;return r.a.createElement(J.a,{ref:e.ref,value:n.value,className:c(),inputClassName:c("input").toString(),international:!1,country:a,onChange:n.onChange,countrySelectComponent:Q})})}}]),t}(r.a.PureComponent))||X,te=(n(139),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.onSubmit({"@type":"setAuthenticationPhoneNumber",phone_number:e.phone})},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(B.b,{onSubmit:this.onSubmit},function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t,className:"rt-phone-form"},r.a.createElement("div",{className:"rt-phone-form__header"},r.a.createElement(N,{title:r.a.createElement(j.a,{id:"components.phone-form.subtitle",defaultMessage:"Welcome to the web application"})})),r.a.createElement("div",{className:"rt-phone-form__body"},r.a.createElement(ee,{name:"phone"}),r.a.createElement(V,{className:"rt-phone-form__submit rt-button--primary"},r.a.createElement(j.a,{id:"components.phone-form.submit",defaultMessage:"Next"}))))})}}]),t}(a.PureComponent)),ne=(n(142),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.errorMessage,a=e.validate,c=Object(h.a)(e,["name","errorMessage","validate"]),o=v()("rt-input");return r.a.createElement(B.a,{name:t,validate:a},function(e){var t=e.input,a=e.meta,u=a.touched&&a.error;return r.a.createElement("div",{className:o()},r.a.createElement("input",Object.assign({},t,c,{className:o("input")})),u&&r.a.createElement("div",{className:o("error")},n||a.error))})}}]),t}(a.PureComponent)),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.onSubmit(Object(Y.a)({"@type":"checkAuthenticationCode"},e))},n.sendViaSms=function(){n.props.onSubmit({"@type":"resendAuthenticationCode"})},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(B.b,{onSubmit:this.onSubmit},function(t){var n=t.handleSubmit;return r.a.createElement("form",{onSubmit:n,className:"rt-code-form"},r.a.createElement("h1",null,"Enter code"),r.a.createElement(ne,{name:"code"}),r.a.createElement(V,{type:"button",onClick:e.sendViaSms},r.a.createElement(j.a,{id:"components.code-form.resend",defaultMessage:"Resend"})),r.a.createElement(V,{className:"rt-button--primary"},r.a.createElement(j.a,{id:"components.code-form.submit",defaultMessage:"Next"})))})}}]),t}(a.PureComponent),re=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.onSubmit(Object(Y.a)({"@type":"checkAuthenticationPassword"},e))},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(B.b,{onSubmit:this.onSubmit},function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t,className:"rt-password-form"},r.a.createElement("h1",null,"Enter password"),r.a.createElement("button",null,"submit"))})}}]),t}(a.PureComponent),ce=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"rt-login-form"},this.renderForm())}},{key:"renderForm",value:function(){var e=this.props,t=e.state,n=e.onSubmit;switch(t){case D.PHONE_NUMBER:return r.a.createElement(te,{onSubmit:n});case D.CODE:return r.a.createElement(ae,{onSubmit:n});case D.PASSWORD:return r.a.createElement(re,{onSubmit:n});default:return t}}}]),t}(a.PureComponent),oe=(n(144),Object(u.b)(function(e){return e.auth},function(e){return Object(f.b)({sendMessage:U},e)})($=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=v()("rt-login"),t=this.props,n=t.authState,a=t.isAuthorized,c=t.sendMessage;return a?r.a.createElement(P.a,{to:"/"}):r.a.createElement("div",{className:e()},r.a.createElement(j.a,{id:"common.pages.login.title",defaultMessage:"Telegram | Sign in"},function(e){return r.a.createElement(_.Helmet,null,r.a.createElement("title",null,e))}),r.a.createElement("div",{className:e("body")},r.a.createElement(ce,{state:n,onSubmit:c})))}}]),t}(a.Component))||$);var ue,ie,se=Object(R.createAction)("@@rt/auth/logout/fetching"),le=Object(R.createAction)("@@rt/auth/logout/success"),pe=Object(R.createAction)("@@rt/auth/logout/failure"),me=Object(R.createAction)("@rt/auth/login/success"),be=Object(u.b)(null,function(e){return Object(f.b)({logout:se},e)})(ue=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(V,{className:"ri-logout-button",onClick:this.props.logout},"Logout")}}]),t}(a.PureComponent))||ue,de=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{id:"common.pages.messenger.title",defaultMessage:"Telegram"},function(e){return r.a.createElement(_.Helmet,null,r.a.createElement("title",null,e))}),r.a.createElement(be,null))}}]),t}(a.PureComponent),fe=n(154),he=Object(u.b)(function(e){return e})(function(e){var t=e.component,n=e.telegram,a=e.auth,c=e.app,o=Object(h.a)(e,["component","telegram","auth","app"]),u=t;return r.a.createElement(O.a,Object.assign({},o,{render:function(e){return!n.isReady||c.fetching?r.a.createElement(x,null):a.isAuthorized?r.a.createElement(u,e):r.a.createElement(fe.a,{to:"/login"})}}))}),Oe=Object(R.createAction)("@rt/app/get-country-code/fetching"),je=Object(R.createAction)("@rt/app/get-country-code/success",function(e){return function(t){return e({countryCode:t})}}),ge=Object(R.createAction)("@rt/app/get-country-code/failure"),ve=Object(u.b)(function(e){return e.auth},function(e){return Object(f.b)({getCountryCode:Oe},e)},null,{pure:!1})(ie=function(e){function t(e){var n;return Object(s.a)(this,t),n=Object(p.a)(this,Object(m.a)(t).call(this,e)),e.getCountryCode&&e.getCountryCode(),n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"rt-app"},r.a.createElement(d.a,null,r.a.createElement(k,{path:"/login",exact:!0,component:oe}),r.a.createElement(he,{path:"/",component:de})))}}]),t}(a.Component))||ie,ye=n(70),Ee=n(66);Object(j.c)(Object(ye.a)(Ee));var Ce={en:n(146)},Ae=function(e){return e.children};var Se=Object(u.b)(function(){return{locale:"en",messages:Object(Y.a)({},Ce.en,Ce.en)}})(j.b),we=n(67),Te=n(39),Ne="dddbb8e6acd44fdd6840e15c58a2ff45";var xe={apiId:"664453",apiHash:Ne,isLoggerEnabled:!0,useTestDC:!Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_TELEGRAM_API_ID:"664453",REACT_APP_TELEGRAM_API_HASH:"dddbb8e6acd44fdd6840e15c58a2ff45"}).REACT_APP_TELEGRAM_PRODUCTION_DC},ke=Object(Y.a)({},xe,{isLoggerEnabled:!1}),_e=Object(Y.a)({},xe);_e=Object(Y.a)({},ke);var Pe={fetching:!1,countryCode:"US"},Re={isAuthorized:!1,isFetching:!1,error:null,authState:null},De={isConnecting:!0,isReady:!1},Le=Object(f.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(R.getType)(Oe):return Object(Y.a)({},e,{fetching:!0});case Object(R.getType)(je):var n=t.payload.countryCode.toUpperCase();return Object(Y.a)({},e,{fetching:!1,countryCode:n||Pe.countryCode});case Object(R.getType)(ge):return Object(Y.a)({},e,{fetching:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(R.getType)(se):return Object(Y.a)({},e,{isFetching:!0});case Object(R.getType)(le):return Object(Y.a)({},e,{isFetching:!1,isAuthorized:!1});case Object(R.getType)(pe):return Object(Y.a)({},e,{isFetching:!1});case Object(R.getType)(me):return Object(Y.a)({},e,{isAuthorized:!0});case Object(R.getType)(G):var n=t.payload.data;return n["@type"]===L.UPDATE_AUTHORIZATION_STATE?Object(Y.a)({},e,{authState:n.authorization_state["@type"]}):e;default:return e}},telegram:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(R.getType)(G):var n=t.payload.data;switch(n["@type"]){case L.UPDATE_CONNECTION_STATE:switch(n.state["@type"]){case I:return Object(Y.a)({},e,{isConnecting:!0});case M:return Object(Y.a)({},e,{isConnecting:!1});default:return e}case L.READY:return n["@extra"]&&"setTdlibParameters"===n["@extra"]["@type"]?Object(Y.a)({},e,{isReady:!0}):e;default:return e}default:return e}}}),Ie=n(12),Me=n.n(Ie),Ue=n(7),ze=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"getCountryCode",value:function(){return fetch("https://ip.nf/me.json").then(function(e){return e.json()}).then(function(e){return e.ip.country_code})}}]),e}(),He=Me.a.mark(Be),Ge=Me.a.mark(Fe);function Be(){var e;return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ze.getCountryCode();case 3:return e=t.sent,t.next=6,Object(Ue.c)(je(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ue.c)(ge());case 12:case"end":return t.stop()}},He,this,[[0,8]])}function Fe(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)([Object(Ue.d)(Object(R.getType)(Oe),Be)]);case 2:case"end":return e.stop()}},Ge,this)}var We=Me.a.mark(Je),Ze=Me.a.mark(Ye),Ve=Me.a.mark(Ke);function Je(e){return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.payload.data["@type"],t.next=t.t0===L.UPDATE_AUTHORIZATION_STATE?3:8;break;case 3:if(e.payload.data.authorization_state["@type"]!==D.AUTHORIZED){t.next=7;break}return t.next=7,Object(Ue.c)(me());case 7:return t.abrupt("break",9);case 8:console.log("skip...");case 9:case"end":return t.stop()}},We,this)}function Ye(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.c)(U({"@type":"logOut"}));case 2:return e.next=4,Object(Ue.c)(le());case 4:case"end":return e.stop()}},Ze,this)}function Ke(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)([Object(Ue.d)(Object(R.getType)(G),Je),Object(Ue.d)(Object(R.getType)(se),Ye)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},Ve,this)}var qe,Qe=Me.a.mark(nt),Xe=Me.a.mark(at),$e=Me.a.mark(rt),et=Me.a.mark(ut),tt=n(149);function nt(){var e;return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qe=new tt,Object(Te.b)(function(e){return qe.onmessage=function(t){e(G({data:t.data}))},qe.terminate});case 2:return e=t.sent,t.next=5,Object(Ue.d)(e,at);case 5:case"end":return t.stop()}},Qe,this)}function at(e){return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ue.c)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},Xe,this)}function rt(e){return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(qe){t.next=2;break}throw new Error("Worker is not yet ready");case 2:return t.prev=2,t.next=5,ct(e.payload);case 5:Object(Ue.c)(H()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),Object(Ue.c)(z());case 11:case"end":return t.stop()}},$e,this,[[2,8]])}var ct=function(e){return new Promise(function(t,n){qe.addEventListener("message",function e(a){return qe.removeEventListener("message",e),"error"===a.data["@type"]?n(a.data):t(a.data)}),qe.postMessage({type:"send",payload:e})})};function ot(e){switch(e.payload.data["@type"]){case"updateAuthorizationState":e.payload.data.authorization_state["@type"]===D.AUTHORIZED&&qe.postMessage({type:"send",payload:{"@type":"setOption",name:"online",value:{"@type":"optionValueBoolean",value:!0}}})}}function ut(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)([Object(Ue.b)(nt),Object(Ue.d)(Object(R.getType)(G),ot),Object(Ue.d)(Object(R.getType)(U),rt)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},et,this)}var it=Me.a.mark(st);function st(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)([Object(Ue.b)(Fe),Object(Ue.b)(ut),Object(Ue.b)(Ke)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},it,this)}var lt,pt=Object(we.createLogger)({predicate:function(){return _e.isLoggerEnabled}}),mt=Object(Te.a)(),bt=document.getElementById("root"),dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(f.d)(Le,e,Object(f.a)(pt,mt));return mt.run(st),t}();lt=ve,o.a.render(r.a.createElement(u.a,{store:dt},r.a.createElement(Se,{textComponent:Ae},r.a.createElement(i.a,null,r.a.createElement(lt,null)))),bt),function(){var e="rt-tab-mode";function t(){document.body.classList.remove(e),document.removeEventListener("mousemove",t)}document.addEventListener("keydown",function(n){"Tab"===n.key&&document.body.classList.add(e),document.addEventListener("mousemove",t)})}()},58:function(e,t){},73:function(e,t,n){e.exports=n(150)},82:function(e,t,n){},92:function(e,t){},98:function(e,t){}},[[73,2,1]]]);
//# sourceMappingURL=main.fce7dc36.chunk.js.map