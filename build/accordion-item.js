!function(){var e={898:function(e,t,r){"use strict";var n=window.wp.blocks,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"f1-block-library/accordion-item","title":"Accordion Item","category":"widgets","parent":["f1-block-item/accordion"],"attributes":{"title":{"type":"string"},"blockId":{"type":"string"}},"editorScript":"file:../build/accordion-item.js"}');function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var i=window.wp.element,c=window.wp.blockEditor,l=window.wp.i18n,s=r(184),d=r.n(s);(0,n.registerBlockType)("f1-block-library/accordion-item",{...a,edit:function(e){let{attributes:t,setAttributes:r,clientId:n}=e;const a=(0,c.useBlockProps)(),{title:s,blockId:u}=t;return u||r({blockId:`accordion-item-${n}`}),(0,i.createElement)("div",o({},a,{className:d()(a.className,"accordion__item"),id:u}),(0,i.createElement)("h3",{className:"accordion__heading"},(0,i.createElement)(c.RichText,{className:"accordion__toggle",identifier:"title","aria-label":(0,l.__)("Panel Title"),placeholder:(0,l.__)("Title"),value:s,onChange:e=>r({title:e})}),(0,i.createElement)("span",{className:"accordion__icon"})),(0,i.createElement)("div",{className:"accordion__drawer"},(0,i.createElement)("div",{className:"accordion__drawer-inner"},(0,i.createElement)(c.InnerBlocks,null))))},save:function(e){let{attributes:t}=e;const r=c.useBlockProps.save(),{title:n,blockId:a}=t,l=`${a}-button`,s=`${a}-drawer`;return(0,i.createElement)("div",o({},r,{className:d()(r.className,"accordion__item"),id:a}),(0,i.createElement)("h3",{className:"accordion__heading"},(0,i.createElement)("button",{className:d()("accordion__toggle","js-accordion-toggle"),id:l,"aria-controls":s,"aria-expanded":"false"},n,(0,i.createElement)("span",{className:"accordion__icon"}))),(0,i.createElement)("div",{className:"accordion__drawer",id:s,"aria-labelledby":l,"aria-hidden":"true"},(0,i.createElement)("div",{className:"accordion__drawer-inner"},(0,i.createElement)(c.InnerBlocks.Content,null))))}})},184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(898)}();