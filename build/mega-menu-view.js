!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.domReady;e.n(t)()((()=>{const e=document.querySelector(".mega-menu");if(e){const t=e.parentElement.getBoundingClientRect().top+e.parentElement.getBoundingClientRect().height;document.documentElement.style.setProperty("--mega-menu-header-height",`${t}px`)}}))}();