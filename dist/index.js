!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===m&&S()}(e,n),t&&t(e,n)};var n,r=!0,o="9949a5ef716f52f61b02",i=1e4,a={},c=[],u=[];function s(e){var t=x[e];if(!t)return D;var r=function(r){return t.hot.active?(x[r]?-1===x[r].parents.indexOf(e)&&x[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),D(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var i in D)Object.prototype.hasOwnProperty.call(D,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&f("prepare"),m++,D.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===d&&(g[e]||j(e),0===m&&0===y&&S())}},r.t=function(e,t){return 1&t&&(e=r(e)),D.t(e,-2&t)},r}var l=[],d="idle";function f(e){d=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var p,h,v,y=0,m=0,g={},b={},w={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=D.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return f("idle"),null;b={},g={},w=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return j(0),"prepare"===d&&0===m&&0===y&&S(),t})}function j(e){w[e]?(b[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=D.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):g[e]=!0}function S(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return I(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function I(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,i,u,s;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((u=x[i])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<u.parents.length;c++){var s=u.parents[c],l=x[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),p(n[s],[i])):(delete n[s],t.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var y={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var j;s=O(_);var S=!1,I=!1,E=!1,P="";switch((j=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(P="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+j.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(S=new Error("Aborted because "+s+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(j),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),E=!0;break;default:throw new Error("Unexception type "+j.type)}if(S)return f("abort"),Promise.reject(S);if(I)for(s in g[s]=h[s],p(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(y[s]||(y[s]=[]),p(y[s],j.outdatedDependencies[s]));E&&(p(m,[j.moduleId]),g[s]=b)}var k,H=[];for(r=0;r<m.length;r++)s=m[r],x[s]&&x[s].hot._selfAccepted&&H.push({module:s,errorHandler:x[s].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,A,F=m.slice();F.length>0;)if(s=F.pop(),u=x[s]){var N={},L=u.hot._disposeHandlers;for(i=0;i<L.length;i++)(n=L[i])(N);for(a[s]=N,u.hot.active=!1,delete x[s],delete y[s],i=0;i<u.children.length;i++){var C=x[u.children[i]];C&&((k=C.parents.indexOf(s))>=0&&C.parents.splice(k,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(u=x[s]))for(A=y[s],i=0;i<A.length;i++)M=A[i],(k=u.children.indexOf(M))>=0&&u.children.splice(k,1);for(s in f("apply"),o=v,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var T=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(u=x[s])){A=y[s];var U=[];for(r=0;r<A.length;r++)if(M=A[r],n=u.hot._acceptedDependencies[M]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:A[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<H.length;r++){var q=H[r];s=q.module,c=[s];try{D(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(m)}))}var x={};function D(t){if(x[t])return x[t].exports;var r=x[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:I,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(u=c,c=[],u),children:[]};return e[t].call(r.exports,r,r.exports,s(t)),r.l=!0,r.exports}return D.m=e,D.c=x,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="",D.h=function(){return o},s(1)(D.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getGlobalCache",function(){return l}),n.d(r,"setGlobalCacheName",function(){return d}),n.d(r,"add",function(){return f}),n.d(r,"get",function(){return p}),n.d(r,"remove",function(){return h});var o={};n.r(o),n.d(o,"toHourStringFromMins",function(){return y});var i={};n.r(i),n.d(i,"FieldMessageItem",function(){return _}),n.d(i,"FieldMessageModel",function(){return j});var a={};n.r(a),n.d(a,"email",function(){return x}),n.d(a,"allEnglish",function(){return D}),n.d(a,"allNumber",function(){return E}),n.d(a,"http",function(){return P}),n.d(a,"https",function(){return k});var c={};n.r(c),n.d(c,"Strategy",function(){return N});var u={};n.r(u),n.d(u,"splitString",function(){return q});var s="x-js-kit-localcache",l=function(){var e=localStorage.getItem(s);return e?JSON.parse(e):null},d=function(e){var t=localStorage.getItem(s);localStorage.removeItem(s),s=e,localStorage.setItem(s,t)},f=function(e,t){var n=l();n&&(n.items[e]=t,localStorage.setItem(s,JSON.stringify(n)))},p=function(e){var t=l();if(!t)return null;var n=t.items[e];return n?n.expire&&n.expire<(new Date).valueOf()?(h(e),null):n:null},h=function(e){var t=l();if(!t)return null;delete t.items[e],localStorage.setItem(s,JSON.stringify(t))};!function(){var e={time:(new Date).valueOf(),items:{}};localStorage.getItem(s)||localStorage.setItem(s,JSON.stringify(e));var t=l();t&&Object.keys(t.items).forEach(function(e){var n=t.items[e];n&&n.expire&&n.expire<(new Date).valueOf()&&h(e)})}();var v={localStorage:r},y=function(e){if(e<0)return"";var t=parseInt((e/60).toString()),n=parseInt((e%60).toString()),r=[];return t>0&&r.push("".concat(t,"小时")),n>0&&r.push("".concat(n,"分钟")),r.join("")},m={format:o};function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){function e(){g(this,e),O(this,"id",""),O(this,"isPassed",!0),O(this,"fieldItems",{})}return w(e,[{key:"init",value:function(e){var t=this;return e?(Object.keys(this.fieldItems).forEach(function(n){if(e&&"boolean"==typeof e.isShowAll)t.fieldItems[n].isShow=e.isShowAll;else{var r=!(!e.oldItem||!e.oldItem.fieldItems[n].isShow);(e.needShowFields||[]).includes(n)&&(r=!0),(e.unNeedShowFields||[]).includes(n)&&(r=!1),t.fieldItems[n].isShow=r}}),this):this}}]),e}(),j=function(){function e(){g(this,e),O(this,"itemList",[])}return w(e,[{key:"getItem",value:function(e){return this.itemList.find(function(t){return t.id==e})||null}},{key:"isPassed",get:function(){return!this.itemList.length||!this.itemList.find(function(e){return!e.isPassed})}}]),e}(),S={fieldMessage:i},I={common:n(0)},x=/^\w+((-\w+)|(\.\w+))*\@[a-z0-9]+((\.|-)[a-z0-9]+)*\.[a-z0-9]+$/,D=/^[a-zA-Z]+$/,E=/^[0-9]+$/,P=/^http:\/\//,k=/^https:\/\//,H={regexConst:a};function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(){function e(){A(this,e),F(this,"_strategyList",[]),F(this,"context",void 0)}return function(e,t,n){t&&M(e.prototype,t),n&&M(e,n)}(e,[{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this._strategyList.push(new function e(t,n,r){A(this,e),F(this,"name",""),F(this,"context",void 0),F(this,"handler",void 0),this.name=t,this.context=n,this.handler=r}(t,this.context,e)),this}},{key:"execute",value:function(){this._strategyList.forEach(function(e){e.handler(e)})}}]),e}(),L={strategy:c};function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U={StopWatch:function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,"_date",new Date),T(this,"_value",0),T(this,"_startFlag",!1),T(this,"_stopFlag",!1)}return function(e,t,n){t&&C(e.prototype,t),n&&C(e,n)}(e,[{key:"start",value:function(){if(this._startFlag||this._stopFlag)throw new Error("You cannot call 'start' because of this object has been stopt!");return this._startFlag=!0,this._date=new Date,this}},{key:"stop",value:function(){if(this._stopFlag)throw new Error("You cannot call 'stop' because of this object has been stopt!");return this._stopFlag=!0,this._value=(new Date).valueOf()-this._date.valueOf(),this}},{key:"value",get:function(){return this._value}}]),e}()},q=function(e,t){if(!e)return[];var n=e.length;if(!t||t<=0||n<=t)return[e];for(var r=[],o=0;o<n;)r.push(e.substr(o,t)),o+=t;return r},J={stringHelper:u};t.default={cache:v,date:m,validation:S,declaration:I,constant:H,pattern:L,timer:U,common:J}}])});
//# sourceMappingURL=index.js.map