/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={316:(t,r,e)=>{var o=e(872).default;function n(){"use strict";t.exports=n=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",f=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function p(t,r,e,o){var n=r&&r.prototype instanceof d?r:d,i=Object.create(n.prototype),u=new O(o||[]);return a(i,"_invoke",{value:E(t,e,u)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var y={};function d(){}function v(){}function m(){}var g={};s(g,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(k([])));w&&w!==e&&i.call(w,c)&&(g=w);var x=m.prototype=d.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(n,a,u,c){var f=h(t[n],t,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==o(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,u,c)}),(function(t){e("throw",t,u,c)})):r.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return e("throw",t,u,c)}))}c(f.arg)}var n;a(this,"_invoke",{value:function(t,o){function i(){return new r((function(r,n){e(t,o,r,n)}))}return n=n?n.then(i,i):i()}})}function E(t,r,e){var o="suspendedStart";return function(n,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw i;return{value:void 0,done:!0}}for(e.method=n,e.arg=i;;){var a=e.delegate;if(a){var u=_(a,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===o)throw o="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o="executing";var c=h(t,r,e);if("normal"===c.type){if(o=e.done?"completed":"suspendedYield",c.arg===y)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(o="completed",e.method="throw",e.arg=c.arg)}}}function _(t,r){var e=r.method,o=t.iterator[e];if(void 0===o)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var n=h(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,y;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function C(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(i.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=m,a(x,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=s(m,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},L(S.prototype),s(S.prototype,f,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,o,n,i){void 0===i&&(i=Promise);var a=new S(p(t,e,o,n),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),s(x,l,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var o in r)e.push(o);return e.reverse(),function t(){for(;e.length;){var o=e.pop();if(o in r)return t.value=o,t.done=!1,t}return t.done=!0,t}},r.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,o){return a.type="throw",a.arg=t,r.next=e,o&&(r.method="next",r.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],a=n.completion;if("root"===n.tryLoc)return e("end");if(n.tryLoc<=this.prev){var u=i.call(n,"catchLoc"),c=i.call(n,"finallyLoc");if(u&&c){if(this.prev<n.catchLoc)return e(n.catchLoc,!0);if(this.prev<n.finallyLoc)return e(n.finallyLoc)}else if(u){if(this.prev<n.catchLoc)return e(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return e(n.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=t,a.arg=r,n?(this.method="next",this.next=n.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var n=o.arg;j(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),y}},r}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},872:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},93:(t,r,e)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var n=e(316)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(o){var n=r[o];if(void 0!==n)return n.exports;var i=r[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";function t(t,r,e,o,n,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(o,n)}function r(r){return function(){var e=this,o=arguments;return new Promise((function(n,i){var a=r.apply(e,o);function u(r){t(a,n,i,u,c,"next",r)}function c(r){t(a,n,i,u,c,"throw",r)}u(void 0)}))}}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,a=void 0,a=function(t,r){if("object"!==o(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i),"symbol"===o(a)?a:String(a)),n)}var i,a}var i=e(93),a=e.n(i);const u=JSON.parse('{"id":"bajrangcoder.git.dust"}');var c=acode.require("themes"),f=acode.require("themeBuilder"),l=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o,i,u;return e=t,o=[{key:"init",value:(u=r(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{(r=new f("Git Dust","dark")).primaryColor="#24292e",r.darkenedPrimaryColor="#24292e",r.primaryTextColor="#ffffff",r.secondaryColor="#1c2128",r.secondaryTextColor="#8b949e",r.activeColor="#0D8CFF",r.activeIconColor="#0366d6",r.linkTextColor="#0366d6",r.errorTextColor="#f97583",r.borderColor="#30363d",r.borderRadius="6px",r.popupBorderRadius="6px",r.popupIconColor="#ffffff",r.popupBackgroundColor="#24292e",r.popupTextColor="#ffffff",r.popupActiveColor="#0366d6",r.popupBorderColor="#30363d",r.boxShadowColor="rgba(0, 0, 0, 0.2)",r.scrollbarColor="#30363d",r.buttonActiveColor="#0366d6",r.buttonBackgroundColor="#0366d6",r.buttonTextColor="#ffffff",c.add(r),c.apply("Git Dust")}catch(t){acode.alert("Error",t)}case 1:case"end":return t.stop()}}),t)}))),function(){return u.apply(this,arguments)})},{key:"destroy",value:(i=r(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return i.apply(this,arguments)})}],o&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();if(window.acode){var s=new l;acode.setPluginInit(u.id,(function(t,r,e){var o=e.cacheFileUrl,n=e.cacheFile;t.endsWith("/")||(t+="/"),s.baseUrl=t,s.init(r,n,o)})),acode.setPluginUnmount(u.id,(function(){s.destroy()}))}})()})();