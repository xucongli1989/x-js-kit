!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){var t=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){!function(e,t){if(!O[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--m&&0===g&&x()}(e,n),t&&t(e,n)};var n,r=!0,o="f301371fe79f9a3a8718",i=1e4,u={},c=[],a=[];function s(e){var t=I[e];if(!t)return k;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),k(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var i in k)Object.prototype.hasOwnProperty.call(k,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&p("prepare"),g++,k.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===d&&(b[e]||_(e),0===g&&0===m&&x())}},r.t=function(e,t){return 1&t&&(e=r(e)),k.t(e,-2&t)},r}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:S,apply:E,status:function(e){if(!e)return d;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:u[e]};return n=void 0,t}var f=[],d="idle";function p(e){d=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var h,v,y,m=0,g=0,b={},w={},O={};function j(e){return+e+""===e?+e:e}function S(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=k.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;w={},b={},O=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});v={};return _(0),"prepare"===d&&0===g&&0===m&&x(),t});var t}function _(e){O[e]?(w[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function x(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return E(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(j(n));e.resolve(t)}}function E(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,i,a,s;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,u=o.chain;if((a=I[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:u,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:u,moduleId:i};for(var c=0;c<a.parents.length;c++){var s=a.parents[c],l=I[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:u.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),f(n[s],[i])):(delete n[s],t.push(s),r.push({chain:u.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var S;s=j(w);var _=!1,x=!1,E=!1,P="";switch((S=v[w]?l(s):{type:"disposed",moduleId:w}).chain&&(P="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+S.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(S),t.ignoreUnaccepted||(_=new Error("Aborted because "+s+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(S),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(S),E=!0;break;default:throw new Error("Unexception type "+S.type)}if(_)return p("abort"),Promise.reject(_);if(x)for(s in g[s]=v[s],f(m,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,s)&&(h[s]||(h[s]=[]),f(h[s],S.outdatedDependencies[s]));E&&(f(m,[S.moduleId]),g[s]=b)}var D,H=[];for(r=0;r<m.length;r++)s=m[r],I[s]&&I[s].hot._selfAccepted&&H.push({module:s,errorHandler:I[s].hot._selfAccepted});p("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var A,N,M=m.slice();M.length>0;)if(s=M.pop(),a=I[s]){var C={},F=a.hot._disposeHandlers;for(i=0;i<F.length;i++)(n=F[i])(C);for(u[s]=C,a.hot.active=!1,delete I[s],delete h[s],i=0;i<a.children.length;i++){var L=I[a.children[i]];L&&((D=L.parents.indexOf(s))>=0&&L.parents.splice(D,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(a=I[s]))for(N=h[s],i=0;i<N.length;i++)A=N[i],(D=a.children.indexOf(A))>=0&&a.children.splice(D,1);for(s in p("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var T=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(a=I[s])){N=h[s];var U=[];for(r=0;r<N.length;r++)if(A=N[r],n=a.hot._acceptedDependencies[A]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(N)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:N[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<H.length;r++){var q=H[r];s=q.module,c=[s];try{k(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||T||(T=e)}}return T?(p("fail"),Promise.reject(T)):(p("idle"),new Promise(function(e){e(m)}))}var I={};function k(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:l(t),parents:(a=c,c=[],a),children:[]};return e[t].call(n.exports,n,n.exports,s(t)),n.l=!0,n.exports}return k.m=e,k.c=I,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="",k.h=function(){return o},s(4)(k.s=4)}([function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"isServer",function(){return o}),n.d(t,"isBowser",function(){return i}),n.d(t,"getGlobalObject",function(){return u}),n.d(t,"getLocalStorage",function(){return c}),n.d(t,"createNamespace",function(){return a}),n.d(t,"getValue",function(){return s}),n.d(t,"deepClone",function(){return l}),n.d(t,"tryRun",function(){return f});var r=n(1),o=function(){return"undefined"==typeof window},i=function(){return!o()},u=function(){return i()?window:e},c=function(){return u().localStorage||null},a=function(e){if(!e)return null;for(var t=u(),n=e.split("."),r="";n.length>0;)void 0===t[r=n.shift()]&&(t[r]={}),t=t[r];return t},s=function(e,t){if(!e||!t)return null;var n=e;try{return t.split(".").forEach(function(e){n=n[e]}),void 0===n?null:n}catch(e){return null}},l=function(e){try{return JSON.parse(JSON.stringify(e))}catch(e){return null}},f=function(e){if(!e)return null;try{for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return e.apply(void 0,n)}catch(e){var i=Object(r.getTryRunErrorHandler)();return i&&i(e),null}}}.call(this,n(3))},function(e,t,n){"use strict";n.r(t),n.d(t,"getTryRunErrorHandler",function(){return o}),n.d(t,"setTryRunErrorHandler",function(){return i});var r=function(){},o=function(){return r},i=function(e){r=e}},function(e,t){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getGlobalCache",function(){return O}),n.d(r,"setGlobalCacheName",function(){return j}),n.d(r,"add",function(){return S}),n.d(r,"get",function(){return _}),n.d(r,"remove",function(){return x});var o={};n.r(o),n.d(o,"email",function(){return I}),n.d(o,"allEnglish",function(){return k}),n.d(o,"allNumber",function(){return P}),n.d(o,"http",function(){return D}),n.d(o,"https",function(){return H}),n.d(o,"httpOrHttps",function(){return A}),n.d(o,"partNumber",function(){return N});var i={};n.r(i),n.d(i,"isEmail",function(){return M}),n.d(i,"isAllEnglish",function(){return C}),n.d(i,"isAllNumber",function(){return F});var u={};n.r(u),n.d(u,"isHttp",function(){return L}),n.d(u,"isHttps",function(){return T}),n.d(u,"isHttpOrHttpsUrl",function(){return U});var c={};n.r(c),n.d(c,"htmlEntityMap",function(){return R});var a={};n.r(a),n.d(a,"splitString",function(){return J}),n.d(a,"ellipsis",function(){return $}),n.d(a,"getNumber",function(){return V}),n.d(a,"trim",function(){return z}),n.d(a,"lTrim",function(){return G}),n.d(a,"rTrim",function(){return K}),n.d(a,"contains",function(){return B}),n.d(a,"escapeHtml",function(){return W}),n.d(a,"repeat",function(){return X});var s={};n.r(s),n.d(s,"splitArray",function(){return Q}),n.d(s,"unique",function(){return Z});var l={};n.r(l),n.d(l,"isArray",function(){return te}),n.d(l,"isNumber",function(){return ne}),n.d(l,"isObject",function(){return re}),n.d(l,"isNullOrEmpty",function(){return oe}),n.d(l,"isNullOrWhiteSpace",function(){return ie}),n.d(l,"isFunction",function(){return ue}),n.d(l,"isString",function(){return ce}),n.d(l,"isBoolean",function(){return ae}),n.d(l,"isUndefined",function(){return se}),n.d(l,"isUpper",function(){return le}),n.d(l,"isLower",function(){return fe});var f={};n.r(f),n.d(f,"hasKey",function(){return de}),n.d(f,"hasValue",function(){return pe}),n.d(f,"toParams",function(){return he});var d={};n.r(d),n.d(d,"appendQueryString",function(){return ve});var p={};n.r(p),n.d(p,"toHourStringFromMins",function(){return be});var h={};n.r(h),n.d(h,"KeyValue",function(){return _e}),n.d(h,"KeyNameValue",function(){return xe});var v={};n.r(v),n.d(v,"SelectItem",function(){return Ie});var y={};n.r(y),n.d(y,"StrategyItem",function(){return Ae}),n.d(y,"Strategy",function(){return Ne});var m={};n.r(m),n.d(m,"getInstance",function(){return Ce});var g={};n.r(g),n.d(g,"FieldMessageItem",function(){return Ve}),n.d(g,"FieldMessageModel",function(){return ze});var b=n(0),w="x-js-kit-localcache",O=function(){var e=localStorage.getItem(w);return e?JSON.parse(e):null},j=function(e){var t=localStorage.getItem(w);localStorage.removeItem(w),w=e,localStorage.setItem(w,t)},S=function(e,t){var n=O();n&&(n.items[e]=t,localStorage.setItem(w,JSON.stringify(n)))},_=function(e){var t=O();if(!t)return null;var n=t.items[e];return n?n.expire&&n.expire<(new Date).valueOf()?(x(e),null):n:null},x=function(e){var t=O();if(!t)return null;delete t.items[e],localStorage.setItem(w,JSON.stringify(t))};!function(){if(b.getLocalStorage()){var e={time:(new Date).valueOf(),items:{}};localStorage.getItem(w)||localStorage.setItem(w,JSON.stringify(e));var t=O();t&&Object.keys(t.items).forEach(function(e){var n=t.items[e];n&&n.expire&&n.expire<(new Date).valueOf()&&x(e)})}}();var E={localStorage:r},I=/^\w+((-\w+)|(\.\w+))*\@[a-z0-9]+((\.|-)[a-z0-9]+)*\.[a-z0-9]+$/,k=/^[a-zA-Z]+$/,P=/^[0-9]+$/,D=/^http:\/\//,H=/^https:\/\//,A=/^https?:\/\//,N=/\d+(\.\d+)?/,M=function(e){return I.test(e)},C=function(e){return k.test(e)},F=function(e){return P.test(e)},L=function(e){return!!e&&D.test(e.toLowerCase())},T=function(e){return!!e&&H.test(e.toLowerCase())},U=function(e){return!!e&&A.test(e.toLowerCase())},q={common:i,url:u},R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},J=function(e,t){if(!e||t<=0)return[];var n=e.length;if(n<=t)return[e];for(var r=[],o=0;o<n;)r.push(e.substr(o,t)),o+=t;return r},$=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return!e||t<=0?"":e.length<=t?e:e.substring(0,t)+n},V=function(e){if(!e)return null;var t=e.match(N);return t&&t.length?parseFloat(t[0]):null},z=function(e){return e?e.replace(/^\s+|\s+$/g,""):""},G=function(e){return e?e.replace(/^\s+/,""):""},K=function(e){return e?e.replace(/\s+$/,""):""},B=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!!e&&(""===t||!!t&&(n&&(e=e.toUpperCase(),t=t.toUpperCase()),e.includes(t)))},W=function(e){return e?String(e).replace(/[&<>"'\/]/g,function(e){return R[e]}):""},X=function(e,t){if(!e||t<=0)return"";for(var n=[];t--;)n.push(e);return n.join("")};function Y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Q=function(e,t){if(!e||!e.length||t<=0)return[];var n=e.length;if(n<=t)return[e];for(var r=[],o=Math.ceil(n/t),i=0,u=0;u<o;u++)r[u]=e.slice(i,(u+1)*t),i+=t;return r},Z=function(e){if(!e||e.length<=1)return e;for(var t=Y(e),n=[],r=0,o=1;o<t.length;o++)t[o]===t[o-1]&&(r=n.push(o));if(r>0)for(;r--;)t.splice(n[r],1);return t};function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var te=function(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)},ne=function(e){return("number"==typeof e||"string"==typeof e)&&""!==e&&!isNaN(e)},re=function(e){return e&&"object"===ee(e)},oe=function(e){return null===e||""===e},ie=function(e){return null===e||oe(z(e))},ue=function(e){return e&&"[object Function]"==Object.prototype.toString.call(e)},ce=function(e){return"string"==typeof e||e instanceof String},ae=function(e){return/^true|false$/i.test(e)},se=function(e){return void 0===e||void 0===e},le=function(e){return e&&e.toUpperCase()===e},fe=function(e){return e&&e.toLowerCase()===e},de=function(e,t){return!!e&&Object.keys(e).includes(t)},pe=function(e,t){if(!e)return!1;var n=!1;for(var r in e)if(e[r]===t){n=!0;break}return n},he=function(e){if(!e)return"";var t=[],n="";for(var r in e)n=te(e[r])?e[r].join("&"+r+"="):e[r],t.push(r+"="+n);return t.join("&")},ve=function(e,t){return e?t?"".concat(e).concat(e.includes("?")?"&":"?").concat(t):e:""},ye={string:a,array:s,json:f,data:l,lib:b,url:d},me={common:n(1)},ge={regexConst:o,map:c},be=function(e){if(e<0)return"";if(0==e)return"0分钟";var t=parseInt((e/60).toString()),n=parseInt((e%60).toString()),r=[];return t>0&&r.push("".concat(t,"小时")),n>0&&r.push("".concat(n,"分钟")),r.join("")},we={format:p},Oe={common:n(2)};function je(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e=function e(t,n,r){je(this,e),Se(this,"key",""),Se(this,"value",void 0),Se(this,"extend",void 0),this.key=t,this.value=n,this.extend=r},xe=function e(t,n,r,o){je(this,e),Se(this,"key",""),Se(this,"name",""),Se(this,"value",void 0),Se(this,"extend",void 0),this.key=t,this.name=n,this.value=r,this.extend=o};function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ie=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3?arguments[3]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ee(this,"text",""),Ee(this,"isSelected",!1),Ee(this,"value",void 0),Ee(this,"extend",void 0),this.text=t,this.value=n,this.isSelected=r,this.extend=o},ke={keyValue:h,select:v};function Pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function De(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function He(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ae=function e(t,n,r){De(this,e),He(this,"name",""),He(this,"context",void 0),He(this,"handler",void 0),this.name=t,this.context=n,this.handler=r},Ne=function(){function e(){De(this,e),He(this,"_strategyList",[]),He(this,"context",void 0)}var t,n,r;return t=e,(n=[{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this._strategyList.push(new Ae(t,this.context,e)),this}},{key:"execute",value:function(){this._strategyList.forEach(function(e){e.handler(e)})}}])&&Pe(t.prototype,n),r&&Pe(t,r),e}(),Me=Symbol(),Ce=function(e){var t=e[Me];if(void 0!==t)return t;var n=new e;return Object.defineProperty(e,Me,{value:n}),n},Fe={strategy:y,singleton:m};function Le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ue={stopWatch:function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Te(this,"_date",new Date),Te(this,"_value",0),Te(this,"_startFlag",!1),Te(this,"_stopFlag",!1)}var t,n,r;return t=e,(n=[{key:"start",value:function(){if(this._startFlag||this._stopFlag)throw new Error("You cannot call 'start' because this object has been started or stopt!");return this._startFlag=!0,this._date=new Date,this}},{key:"stop",value:function(){if(this._stopFlag)throw new Error("You cannot call 'stop' because this object has been stopt!");return this._stopFlag=!0,this._value=(new Date).valueOf()-this._date.valueOf(),this}},{key:"value",get:function(){return this._value}}])&&Le(t.prototype,n),r&&Le(t,r),e}()};function qe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Je(e,t,n){return t&&Re(e.prototype,t),n&&Re(e,n),e}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ve=function(){function e(){qe(this,e),$e(this,"id",""),$e(this,"isPassed",!0),$e(this,"fieldItems",{}),$e(this,"extend",void 0)}return Je(e,[{key:"init",value:function(e){var t=this;return e?(Object.keys(this.fieldItems).forEach(function(n){if(e&&"boolean"==typeof e.isShowAll)t.fieldItems[n].isShow=e.isShowAll;else{var r=!(!e.oldItem||!e.oldItem.fieldItems[n].isShow);(e.needShowFields||[]).includes(n)&&(r=!0),(e.unNeedShowFields||[]).includes(n)&&(r=!1),t.fieldItems[n].isShow=r}}),this):this}}]),e}(),ze=function(){function e(){qe(this,e),$e(this,"itemList",[])}return Je(e,[{key:"getItem",value:function(e){return this.itemList.find(function(t){return t.id==e})||null}},{key:"isPassed",get:function(){return!this.itemList.length||!this.itemList.find(function(e){return!e.isPassed})}}]),e}(),Ge={fieldMessage:g};t.default={cache:E,check:q,common:ye,config:me,constant:ge,date:we,declaration:Oe,entity:ke,pattern:Fe,timer:Ue,validation:Ge}}])});
//# sourceMappingURL=index.js.map