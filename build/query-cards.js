!function(){"use strict";var e={114:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(307),o=window.wp.components,u=r(736),l=r(175),s=function(e){let{columns:t,setAttributes:r}=e;return(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(o.Panel,null,(0,n.createElement)(o.PanelBody,{title:(0,u.__)("Cards Settings")},(0,n.createElement)(o.RangeControl,{label:(0,u.__)("Columns"),min:1,max:4,value:t,onChange:e=>r({columns:e})}))))}},282:function(e,t,r){var n=window.wp.blocks,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"f1-block-library/query-cards","title":"Cards (Query Loop)","parent":["core/query"],"category":"widgets","supports":{"align":["wide","full"]},"style":"file:../../build/query-cards.css","editorScript":"file:../../build/query-cards.js","usesContext":["postId","postType","queryId","query","queryContext"],"attributes":{"columns":{"type":"integer","default":2}}}'),u=r(307),l=r(175),s=window.wp.serverSideRender,i=r.n(s),c=r(114),a=r(736);(0,n.registerBlockType)("f1-block-library/query-cards",{...o,edit:function(e){let{attributes:t,setAttributes:r}=e;const n=(0,l.useBlockProps)(),{columns:o}=t;return(0,u.createElement)(u.Fragment,null,(0,u.createElement)(c.Z,{columns:o,setAttributes:r}),(0,u.createElement)("div",n,(0,u.createElement)(i(),{block:"f1-block-library/query-cards",attributes:t})))}}),(0,n.registerBlockStyle)("f1-block-library/query-cards",{name:"feature",label:(0,a.__)("Feature")})},175:function(e){e.exports=window.wp.blockEditor},307:function(e){e.exports=window.wp.element},736:function(e){e.exports=window.wp.i18n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(282)}();