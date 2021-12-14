!function(){var t={956:function(t,e,o){"use strict";var r=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"f1-block-library/back-to-top","title":"Back to Top","category":"theme","attributes":{"topElement":{"type":"string","default":"top"},"title":{"type":"string","default":"Back to Top"}},"supports":{"color":{"background":true,"text":true},"html":false},"editorScript":"file:../build/back-to-top.js","viewScript":"file:../build/back-to-top-view.js","style":"file:../build/back-to-top.css"}');function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l.apply(this,arguments)}var a=window.wp.element,i=window.wp.i18n,c=function(t){let{className:e}=t;return(0,a.createElement)("svg",{viewBox:"0 0 19 12",xmlns:"http://www.w3.org/2000/svg",className:e},(0,a.createElement)("path",{d:"m2.3 12 7.5-7.5 7.5 7.5 2.3-2.3-9.7-9.7-9.7 9.7 2.3 2.3z"}))},s=function(t){let{topElement:e="top",title:o=(0,i.__)("Back to Top"),...r}=t;return(0,a.createElement)("a",l({href:`#${e}`,title:o},r),(0,a.createElement)(c,{className:"back-to-top__icon"}))},p=window.wp.blockEditor,u=window.wp.components,f=o(184),m=o.n(f);(0,r.registerBlockType)("f1-block-library/back-to-top",{...n,edit:function(t){let{attributes:e,setAttributes:o}=t;const r=(0,p.useBlockProps)(),{topElement:n,title:c}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(p.InspectorControls,null,(0,a.createElement)(u.PanelBody,{title:(0,i.__)("Back to Top Settings")},(0,a.createElement)(u.TextControl,{label:(0,i.__)("Top Element ID"),value:n,onChange:t=>{o({topElement:t})}}),(0,a.createElement)(u.TextControl,{label:(0,i.__)("Title"),value:c,onChange:t=>{o({title:t})}}))),(0,a.createElement)(s,l({},r,{className:m()(r.className,"back-to-top"),topElement:n,title:c})))},save:function(t){let{attributes:e}=t;const{topElement:o,title:r}=e,n=p.useBlockProps.save();return(0,a.createElement)(s,l({},n,{className:m()(n.className,"back-to-top"),topElement:o,title:r}))}})},184:function(t,e){var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var l=typeof o;if("string"===l||"number"===l)t.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&t.push(a)}}else if("object"===l)if(o.toString===Object.prototype.toString)for(var i in o)r.call(o,i)&&o[i]&&t.push(i);else t.push(o.toString())}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(o=function(){return n}.apply(e,[]))||(t.exports=o)}()}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var l=e[r]={exports:{}};return t[r](l,l.exports,o),l.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(956)}();