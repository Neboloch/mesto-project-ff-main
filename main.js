/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(t){return t.ok?t.json():Promise.reject(t.status)},e=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";e.textContent=t?n:r},r=function(t,r,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Сохранение...";r.preventDefault();var a=r.submitter,c=a.textContent;e(!0,a,c,i),t().then((function(){r.target.reset(o.disabledButton(a,o.validationConfig)),o.closeModal(n)})).catch((function(t){console.error("Ошибка: ".concat(t))})).finally((function(){e(!1,a,c)}))};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:q(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function _(){}function b(){}function S(){}var w={};f(w,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(I([])));E&&E!==r&&i.call(E,u)&&(w=E);var x=S.prototype=_.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,a,c,u){var l=p(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function q(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=S,a(x,"constructor",{value:S,configurable:!0}),a(S,"constructor",{value:b,configurable:!0}),b.displayName=f(S,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(C.prototype),f(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new C(d(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c,u={baseUrl:"https://nomoreparties.co/v1/wff-cohort-12",headers:{authorization:"a7cbffd2-9816-4609-b789-b2caed9acffd","Content-Type":"application/json"}},l=function(){var e=a(o().mark((function e(r,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(u.baseUrl+r),n).then(t));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),s=function(t){return l("/cards/likes/".concat(t),{method:"PUT",headers:u.headers})},f=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l("/cards/likes/".concat(e),{method:"DELETE",headers:u.headers}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=document.querySelector("#card-template").content,p=function(t,e,r){var n=d.querySelector(".card").cloneNode(!0),o=n.querySelector(".card__image"),i=n.querySelector(".card__title"),a=n.querySelector(".card__delete-button"),c=n.querySelector(".card__like-button"),u=n.querySelector(".like__score");return e._id!==t.owner._id?a.classList.add("card__delete-button-disabled"):a.addEventListener("click",(function(){return r.openDeleteCardPopup(n,t._id)})),t.likes.some((function(t){return t._id===e._id}))&&c.classList.add("card__like-button_is-active"),o.src=t.link,o.alt=t.name,i.textContent=t.name,u.textContent=t.likes.length,c.addEventListener("click",(function(){return r.likeImg(c,t,u)})),o.addEventListener("click",(function(){return r.openImageModal(t)})),n},h=function(t,e,r){var n=t.classList.contains("card__like-button_is-active");(n?f:s)(e._id).then((function(e){r.textContent=e.likes.length,t.classList.toggle("card__like-button_is-active")})).catch((function(t){return console.log("Ошибка ".concat(n?"убирания":"лайка"," карточки : ").concat(t))}))},v=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",m)},y=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",m)},m=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&y(e)}},g=function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?S(t,e,r):b(t,e,e.validationMessage,r)},_=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(r.inactiveButtonClass),e.removeAttribute("disabled","")):w(e,r)},b=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)},S=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},w=function(t,e){t.classList.add(e.inactiveButtonClass),t.setAttribute("disabled","")};function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var x,k={},C={},q={closeModal:y,disabledButton:w,validationConfig:{fieldsetSelector:".form__set",formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"}},O=document.querySelectorAll(".popup"),j=document.querySelector(".places__list"),A=document.querySelector(".profile__edit-button"),P=document.querySelector(".popup_type_edit"),I=document.forms.edit_profile,T=I.elements.name,N=I.elements.description,B=document.querySelector(".profile__title"),G=document.querySelector(".profile__description"),M=document.querySelector(".profile__image"),D=document.querySelector(".popup_type_edit-avatar"),F=document.querySelector(".profile__avatar-button"),U=document.forms.new_avatar,J=U.elements.avatar_link,H=document.querySelector(".popup_type_delete-card"),V=document.forms.delete_card,Y=document.querySelector(".popup_type_new-card"),z=document.querySelector(".profile__add-button"),$=document.forms.new_place,K=$.elements.place_name,Q=$.elements.link,R=document.querySelector(".popup_type_image"),W=R.querySelector(".popup__image"),X=R.querySelector(".popup__caption");Promise.all([l("/cards",{headers:u.headers}),l("/users/me",{headers:u.headers})]).then((function(t){var e=L(t,2),r=e[0],n=e[1];c=n,k={openDeleteCardPopup:tt,likeImg:h,openImageModal:Z},r.forEach((function(t){return j.append(p(t,n,k))})),B.textContent=n.name,G.textContent=n.about,M.style.backgroundImage="url(".concat(n.avatar,")")})).catch((function(t){var e=L(t,2),r=e[0],n=e[1];console.log("ошибка получения данных: ".concat(r," ").concat(n))})),x=q.validationConfig,Array.from(document.querySelectorAll(x.formSelector)).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),Array.from(t.querySelectorAll(x.fieldsetSelector)).forEach((function(t){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);_(r,n,e),t.addEventListener("reset",(function(){w(n,e)})),r.forEach((function(o){o.addEventListener("input",(function(){g(t,o,e),_(r,n,e)}))}))}(t,x)}))}));var Z=function(t){W.src=t.link,W.alt=t.name,X.textContent=t.name,v(R)},tt=function(t,e){C.card=t,C.cardId=e,v(H)};A.addEventListener("click",(function(){return function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){S(t,r,e)})),w(n,e)}(t=P,q.validationConfig),T.value=B.textContent,N.value=G.textContent,void v(t);var t})),I.addEventListener("submit",(function(t){r((function(){return(t=T.value,e=N.value,l("/users/me",{method:"PATCH",headers:u.headers,body:JSON.stringify({name:t,about:e})})).then((function(t){B.textContent=t.name,G.textContent=t.about}));var t,e}),t,P,q)})),F.addEventListener("click",(function(){return v(D)})),U.addEventListener("submit",(function(t){r((function(){return(t=J.value,l("/users/me/avatar",{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:t})})).then((function(t){M.style.backgroundImage="url(".concat(t.avatar,")")}));var t}),t,D,q)})),z.addEventListener("click",(function(){return v(Y)})),$.addEventListener("submit",(function(t){r((function(){return(t=K.value,e=Q.value,l("/cards",{method:"POST",headers:u.headers,body:JSON.stringify({name:t,link:e})})).then((function(t){j.prepend(p(t,c,k))}));var t,e}),t,Y,q)})),V.addEventListener("submit",(function(){return function(t,e,r){var n;(n=t.cardId,l("/cards/".concat(n),{method:"DELETE",headers:u.headers})).then((function(){t.card.remove(),r(e)})).catch((function(t){console.log("Ошибка удаления карточки : ".concat(t))}))}(C,H,y)})),O.forEach((function(t){t.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_is-opened")&&y(e.target),e.target.classList.contains("popup__close")&&y(t)}))}))})();