(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+iL7":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"D/wG":function(t,e,n){var r=n("Hvpk"),o=n("nRc6").f,a=Function.prototype,u=a.toString,i=/^\s*function ([^ (]*)/;r&&!("name"in a)&&o(a,"name",{configurable:!0,get:function(){try{return u.call(this).match(i)[1]}catch(t){return""}}})},HRgQ:function(t,e,n){var r=n("nEaP"),o=n("fT8P"),a=r.document,u=o(a)&&o(a.createElement);t.exports=function(t){return u?a.createElement(t):{}}},Hvpk:function(t,e,n){var r=n("+iL7");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"K+Yu":function(t,e,n){t.exports=n.p+"images/sunset.jpg"},KYRd:function(t,e,n){t.exports=n.p+"images/day.jpg"},L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("D/wG"),n("L1EO"),n("zwYD"),n("ke6V"),n("KYRd"),n("K+Yu");var r,o={body:document.querySelector("body"),time:document.querySelector("[data-time]"),name:document.querySelector("[data-name]"),target:document.querySelector("[data-target]"),dayPart:document.querySelector("[data-part]")};function a(t){return(parseInt(t,10)<10?"0":"")+t}function u(){null===localStorage.getItem("name")||0===localStorage.getItem("name").length?o.name.value="[Введите имя]":o.name.value=localStorage.getItem("name")}function i(){null===localStorage.getItem("target")||0===localStorage.getItem("target").length?o.target.value="[Введите свою цель]":o.target.value=localStorage.getItem("target")}function c(t){localStorage.setItem("name",t.currentTarget.value),o.name.style.width=30*(t.currentTarget.value.length+1)+500+"px","keydown"===t.type&&"Enter"===t.code&&(0===t.currentTarget.value.length&&(o.name.value="[Введите имя]",o.name.style.width=30*(t.currentTarget.value.length+1)+500+"px"),o.name.blur())}function l(t){if(localStorage.setItem("target",t.currentTarget.value),o.target.style.width=30*(t.currentTarget.value.length+1)+500+"px","keydown"===t.type&&"Enter"===t.code)return 0===t.currentTarget.value.length&&(o.target.value="[Введите имя]",o.target.style.width=30*(t.currentTarget.value.length+1)+500+"px"),void o.target.blur()}function g(t){t.currentTarget.value=""}o.name.addEventListener("keydown",c),o.name.addEventListener("input",c),o.name.addEventListener("focus",g),o.name.addEventListener("blur",(function(t){u()})),o.target.addEventListener("keydown",l),o.target.addEventListener("input",l),o.target.addEventListener("focus",g),o.target.addEventListener("blur",(function(t){i()})),function t(){var e=new Date,n=e.getHours(),r=e.getMinutes(),u=e.getSeconds();n=n%24||0,o.time.textContent=a(n)+":"+a(r)+":"+a(u),setTimeout(t,1e3)}(),(r=(new Date).getHours())>=22||r<5?(o.body.style.backgroundImage="url('./images/night.jpg')",o.dayPart.textContent="Доброй ночи,",o.body.style.color="white",o.body.style.opacity="0.7"):r>=5&&r<11?(o.body.style.backgroundImage="url('./images/sunrise.jpg')",o.dayPart.textContent="Доброе утро,",o.body.style.color="white",o.body.style.opacity="1"):r>=11&&r<18?(o.body.style.backgroundImage="url('./images/day.jpg')",o.dayPart.textContent="Добрый день,",o.body.style.color="black",o.body.style.opacity="0.7"):r>=18&&r<22&&(o.body.style.backgroundImage="url('./images/sunset.jpg')",o.body.style.color="white",o.body.style.opacity="1",o.dayPart.textContent="Добрый вечер,"),u(),i()},W9fh:function(t,e,n){var r=n("fT8P");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},fT8P:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},gDYM:function(t,e,n){var r=n("fT8P");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},ke6V:function(t,e,n){t.exports=n.p+"images/sunrise.jpg"},nEaP:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("pCvA"))},nRc6:function(t,e,n){var r=n("Hvpk"),o=n("xwiM"),a=n("gDYM"),u=n("W9fh"),i=Object.defineProperty;e.f=r?i:function(t,e,n){if(a(t),e=u(e,!0),a(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},pCvA:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},xwiM:function(t,e,n){var r=n("Hvpk"),o=n("+iL7"),a=n("HRgQ");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},zwYD:function(t,e,n){t.exports=n.p+"images/night.jpg"}},[["QfWi",1]]]);
//# sourceMappingURL=main.cb5b238cb7200ffb893f.js.map