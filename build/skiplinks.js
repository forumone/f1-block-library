!function(){"use strict";var e=window.wp.blocks,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"f1-block-library/skiplinks","title":"Skiplinks","category":"theme","supports":{"html":false},"editorScript":"file:../build/skiplinks.js"}'),s=window.wp.element,n=window.wp.blockEditor,t=window.wp.i18n;(0,e.registerBlockType)("f1-block-library/skiplinks",{...i,edit:function(){const e=(0,n.useBlockProps)({className:"skiplinks"});return(0,s.createElement)("div",e,(0,s.createElement)("a",{href:"#main",className:"skiplinks__link"},(0,t.__)("Skip to main content")))},save:function(){const e=n.useBlockProps.save({className:"skiplinks"});return(0,s.createElement)("div",e,(0,s.createElement)("a",{href:"#main",className:"skiplinks__link"},(0,t.__)("Skip to main content")))}})}();