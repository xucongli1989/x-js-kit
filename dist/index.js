!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){var t=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){!function(e,t){if(!O[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--m&&0===g&&x()}(e,n),t&&t(e,n)};var n,r=!0,o="61eaeb4f07db3c39ffb5",i=1e4,a={},c=[],u=[];function s(e){var t=I[e];if(!t)return D;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),D(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var i in D)Object.prototype.hasOwnProperty.call(D,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===f&&p("prepare"),g++,D.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(b[e]||S(e),0===g&&0===m&&x())}},r.t=function(e,t){return 1&t&&(e=r(e)),D.t(e,-2&t)},r}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:E,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:a[e]};return n=void 0,t}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,v,y,m=0,g=0,b={},w={},O={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=D.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;w={},b={},O=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});v={};return S(0),"prepare"===f&&0===g&&0===m&&x(),t});var t}function S(e){O[e]?(w[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=D.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function x(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return E(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(_(n));e.resolve(t)}}function E(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,i,u,s;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((u=I[i])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<u.parents.length;c++){var s=u.parents[c],l=I[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),d(n[s],[i])):(delete n[s],t.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var j;s=_(w);var S=!1,x=!1,E=!1,P="";switch((j=v[w]?l(s):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+j.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(S=new Error("Aborted because "+s+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(j),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),E=!0;break;default:throw new Error("Unexception type "+j.type)}if(S)return p("abort"),Promise.reject(S);if(x)for(s in g[s]=v[s],d(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(h[s]||(h[s]=[]),d(h[s],j.outdatedDependencies[s]));E&&(d(m,[j.moduleId]),g[s]=b)}var k,H=[];for(r=0;r<m.length;r++)s=m[r],I[s]&&I[s].hot._selfAccepted&&H.push({module:s,errorHandler:I[s].hot._selfAccepted});p("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var M,A,F=m.slice();F.length>0;)if(s=F.pop(),u=I[s]){var L={},N=u.hot._disposeHandlers;for(i=0;i<N.length;i++)(n=N[i])(L);for(a[s]=L,u.hot.active=!1,delete I[s],delete h[s],i=0;i<u.children.length;i++){var C=I[u.children[i]];C&&((k=C.parents.indexOf(s))>=0&&C.parents.splice(k,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(u=I[s]))for(A=h[s],i=0;i<A.length;i++)M=A[i],(k=u.children.indexOf(M))>=0&&u.children.splice(k,1);for(s in p("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var T=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(u=I[s])){A=h[s];var U=[];for(r=0;r<A.length;r++)if(M=A[r],n=u.hot._acceptedDependencies[M]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:A[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<H.length;r++){var q=H[r];s=q.module,c=[s];try{D(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||T||(T=e)}}return T?(p("fail"),Promise.reject(T)):(p("idle"),new Promise(function(e){e(m)}))}var I={};function D(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=c,c=[],u),children:[]};return e[t].call(n.exports,n,n.exports,s(t)),n.l=!0,n.exports}return D.m=e,D.c=I,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="",D.h=function(){return o},s(3)(D.s=3)}([function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"isServer",function(){return r}),n.d(t,"isBowser",function(){return o}),n.d(t,"getGlobalObject",function(){return i}),n.d(t,"getLocalStorage",function(){return a});var r=function(){return"undefined"==typeof window},o=function(){return!r()},i=function(){return o()?window:e},a=function(){return i().localStorage||null}}.call(this,n(2))},function(e,t){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getGlobalCache",function(){return p}),n.d(r,"setGlobalCacheName",function(){return h}),n.d(r,"add",function(){return v}),n.d(r,"get",function(){return y}),n.d(r,"remove",function(){return m});var o={};n.r(o),n.d(o,"email",function(){return b}),n.d(o,"allEnglish",function(){return w}),n.d(o,"allNumber",function(){return O}),n.d(o,"http",function(){return _}),n.d(o,"https",function(){return j}),n.d(o,"httpOrHttps",function(){return S}),n.d(o,"partNumber",function(){return x});var i={};n.r(i),n.d(i,"isEmail",function(){return E}),n.d(i,"isAllEnglish",function(){return I}),n.d(i,"isAllNumber",function(){return D});var a={};n.r(a),n.d(a,"isHttp",function(){return P}),n.d(a,"isHttps",function(){return k}),n.d(a,"isHttpOrHttpsUrl",function(){return H});var c={};n.r(c),n.d(c,"toHourStringFromMins",function(){return A});var u={};n.r(u),n.d(u,"FieldMessageItem",function(){return U}),n.d(u,"FieldMessageModel",function(){return q});var s={};n.r(s),n.d(s,"Strategy",function(){return Y});var l={};n.r(l),n.d(l,"splitString",function(){return V}),n.d(l,"ellipsis",function(){return ee}),n.d(l,"getNumber",function(){return te});var d=n(0),f="x-js-kit-localcache",p=function(){var e=localStorage.getItem(f);return e?JSON.parse(e):null},h=function(e){var t=localStorage.getItem(f);localStorage.removeItem(f),f=e,localStorage.setItem(f,t)},v=function(e,t){var n=p();n&&(n.items[e]=t,localStorage.setItem(f,JSON.stringify(n)))},y=function(e){var t=p();if(!t)return null;var n=t.items[e];return n?n.expire&&n.expire<(new Date).valueOf()?(m(e),null):n:null},m=function(e){var t=p();if(!t)return null;delete t.items[e],localStorage.setItem(f,JSON.stringify(t))};!function(){if(d.getLocalStorage()){var e={time:(new Date).valueOf(),items:{}};localStorage.getItem(f)||localStorage.setItem(f,JSON.stringify(e));var t=p();t&&Object.keys(t.items).forEach(function(e){var n=t.items[e];n&&n.expire&&n.expire<(new Date).valueOf()&&m(e)})}}();var g={localStorage:r},b=/^\w+((-\w+)|(\.\w+))*\@[a-z0-9]+((\.|-)[a-z0-9]+)*\.[a-z0-9]+$/,w=/^[a-zA-Z]+$/,O=/^[0-9]+$/,_=/^http:\/\//,j=/^https:\/\//,S=/^https?:\/\//,x=/\d+(\.\d+)?/,E=function(e){return b.test(e)},I=function(e){return w.test(e)},D=function(e){return O.test(e)},P=function(e){return!!e&&_.test(e.toLowerCase())},k=function(e){return!!e&&j.test(e.toLowerCase())},H=function(e){return!!e&&S.test(e.toLowerCase())},M={common:i,url:a},A=function(e){if(e<0)return"";if(0==e)return"0分钟";var t=parseInt((e/60).toString()),n=parseInt((e%60).toString()),r=[];return t>0&&r.push("".concat(t,"小时")),n>0&&r.push("".concat(n,"分钟")),r.join("")},F={format:c};function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t&&N(e.prototype,t),n&&N(e,n),e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(){function e(){L(this,e),T(this,"id",""),T(this,"isPassed",!0),T(this,"fieldItems",{})}return C(e,[{key:"init",value:function(e){var t=this;return e?(Object.keys(this.fieldItems).forEach(function(n){if(e&&"boolean"==typeof e.isShowAll)t.fieldItems[n].isShow=e.isShowAll;else{var r=!(!e.oldItem||!e.oldItem.fieldItems[n].isShow);(e.needShowFields||[]).includes(n)&&(r=!0),(e.unNeedShowFields||[]).includes(n)&&(r=!1),t.fieldItems[n].isShow=r}}),this):this}}]),e}(),q=function(){function e(){L(this,e),T(this,"itemList",[])}return C(e,[{key:"getItem",value:function(e){return this.itemList.find(function(t){return t.id==e})||null}},{key:"isPassed",get:function(){return!this.itemList.length||!this.itemList.find(function(e){return!e.isPassed})}}]),e}(),J={fieldMessage:u},z={common:n(1)},G={regexConst:o};function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function e(t,n,r){$(this,e),B(this,"name",""),B(this,"context",void 0),B(this,"handler",void 0),this.name=t,this.context=n,this.handler=r},Y=function(){function e(){$(this,e),B(this,"_strategyList",[]),B(this,"context",void 0)}var t,n,r;return t=e,(n=[{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this._strategyList.push(new X(t,this.context,e)),this}},{key:"execute",value:function(){this._strategyList.forEach(function(e){e.handler(e)})}}])&&R(t.prototype,n),r&&R(t,r),e}(),W={strategy:s};function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q={StopWatch:function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,"_date",new Date),K(this,"_value",0),K(this,"_startFlag",!1),K(this,"_stopFlag",!1)}var t,n,r;return t=e,(n=[{key:"start",value:function(){if(this._startFlag||this._stopFlag)throw new Error("You cannot call 'start' because this object has been started or stopt!");return this._startFlag=!0,this._date=new Date,this}},{key:"stop",value:function(){if(this._stopFlag)throw new Error("You cannot call 'stop' because this object has been stopt!");return this._stopFlag=!0,this._value=(new Date).valueOf()-this._date.valueOf(),this}},{key:"value",get:function(){return this._value}}])&&Z(t.prototype,n),r&&Z(t,r),e}()},V=function(e,t){if(!e)return[];var n=e.length;if(!t||t<=0||n<=t)return[e];for(var r=[],o=0;o<n;)r.push(e.substr(o,t)),o+=t;return r},ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return!e||t<=0?"":e.length<=t?e:e.substring(0,t)+n},te=function(e){if(!e)return null;var t=e.match(x);return t&&t.length?parseFloat(t[0]):null},ne={stringHelper:l,lib:d};t.default={cache:g,check:M,date:F,validation:J,declaration:z,constant:G,pattern:W,timer:Q,common:ne}}])});
//# sourceMappingURL=index.js.map