!function(){var e={184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"f1-block-library/section","title":"Section","category":"theme","supports":{"color":{"text":true,"background":true},"align":["wide","full"],"__experimentalLayout":true},"editorScript":"file:../build/section.js"}'),r=window.wp.element,o=window.wp.blockEditor,i=n(184),l=n.n(i),c=window.wp.i18n,s=window.wp.data;(0,e.registerBlockType)("f1-block-library/section",{...t,edit:function(e){let{attributes:t,clientId:n}=e;const i=(0,s.useSelect)((e=>{var t;const{getSettings:n}=e(o.store);return null===(t=n())||void 0===t?void 0:t.supportsLayout}),[n]),a=(0,o.useSetting)("layout")||{},{layout:u={}}=t,p=u&&u.inherit?a:u,{type:f="default"}=p,d=i||"default"!==f,v=(0,o.useBlockProps)({className:l()("l-section")});return(0,r.createElement)("section",v,(0,r.createElement)(o.InnerBlocks,{template:[["core/columns",{align:"wide"},[["core/column",{width:70},[["core/heading",{level:2,placeholder:(0,c.__)("Section Title…")}]]],["core/column",{width:30},[["f1-block-library/standalone-link"]]]]]],__experimentalLayout:d?p:void 0}))},save:function(){const e=o.useBlockProps.save({className:l()("l-section")});return(0,r.createElement)("section",e,(0,r.createElement)(o.InnerBlocks.Content,null))}})}()}();