!function(){var t={93:function(t){var e,n,o,r,i,u;t.exports=(n=[],r=(o=document).documentElement.doScroll,i="DOMContentLoaded",(u=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState))||o.addEventListener(i,e=function(){for(o.removeEventListener(i,e),u=1;e=n.shift();)e()}),function(t){u?setTimeout(t,0):n.push(t)})}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(93);n.n(t)()((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=document.querySelector(".back-to-top");if(n){if(!isNaN(t)){n.setAttribute("aria-hidden","true"),n.setAttribute("tabIndex","-1");const e=()=>{window.scrollY>=t&&"true"===n.getAttribute("aria-hidden")?(n.setAttribute("aria-hidden","false"),n.removeAttribute("tabIndex")):window.scrollY<t&&n.getAttribute("aria-hidden","false")&&(n.setAttribute("aria-hidden","true"),n.setAttribute("tabIndex","-1"))};let o=!1;window.addEventListener("scroll",(()=>{!1!==o&&clearTimeout(o),o=setTimeout(e,60)}))}e&&n.addEventListener("click",(t=>{const e=n.getAttribute("href"),o=document.querySelector(e);if(o){t.preventDefault();const e=o.getBoundingClientRect();o.setAttribute("tabIndex","-1"),window.scrollTo({top:e.top,behavior:"smooth"}),o.focus()}}))}})),console.log("foo")}()}();