!function(){var e={55:function(e,t,n){"use strict";var r=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"f1-block-library/section","title":"Section","category":"theme","supports":{"color":{"text":true,"background":true},"align":["wide","full"],"__experimentalLayout":true},"editorScript":"file:../build/section.js"}'),i=window.wp.element,l=window.wp.blockEditor,s=n(184),c=n.n(s),a=window.wp.i18n,u=window.wp.data;(0,r.registerBlockType)("f1-block-library/section",{...o,edit:function(e){let{attributes:t,clientId:n}=e;const r=(0,u.useSelect)((e=>{var t;const{getSettings:n}=e(l.store);return null===(t=n())||void 0===t?void 0:t.supportsLayout}),[n]),o=(0,l.useSetting)("layout")||{},{layout:s={}}=t,p=s&&s.inherit?o:s,{type:f="default"}=p,d=r||"default"!==f,v=(0,l.useBlockProps)({className:c()("l-section")}),w=(0,l.useInnerBlocksProps)(d?v:void 0,{__experimentalLayout:d?p:void 0}),y=d?w:v;return(0,i.createElement)("section",y,(0,i.createElement)(l.InnerBlocks,{template:[["core/columns",{align:"wide"},[["core/column",{width:70},[["core/heading",{level:2,placeholder:(0,a.__)("Section Title…")}]]],["core/column",{width:30},[["f1-block-library/standalone-link"]]]]]]}))},save:function(){const e=l.useBlockProps.save({className:c()("l-section")});return(0,i.createElement)("section",e,(0,i.createElement)(l.InnerBlocks.Content,null))}})},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(55)}();