!function(){"use strict";var e,t,l,r,a,s,o;e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"f1-block-library/slider","title":"Slider","keywords":["slider","carousel","gallery"],"attributes":{"slides":{"type":"array","default":[],"source":"query","selector":".slider__slide"},"mode":{"type":"string","default":"carousel","source":"attribute","attribute":"data-mode","selector":".slider"},"items":{"type":"string","default":"1","source":"attribute","attribute":"data-items","selector":".slider"},"slideBy":{"type":"string","default":"1","source":"attribute","attribute":"data-slide-by","selector":".slider"},"controls":{"type":"string","default":"true","source":"attribute","attribute":"data-controls","selector":".slider"},"nav":{"type":"string","default":"true","source":"attribute","attribute":"data-nav","selector":".slider"}},"editorScript":"file:../build/slider.js","viewScript":"file:../build/slider-view.js","style":"file:../build/slider-view.css"}'),l=window.wp.element,r=window.wp.blockEditor,a=window.wp.data,s=window.wp.components,o=window.wp.i18n,(0,e.registerBlockType)("f1-block-library/slider",{...t,edit:function(e){let{clientId:t,attributes:i,setAttributes:n}=e;const{mode:d,items:c,slideBy:u,controls:m,nav:p}=i,b=(0,r.useBlockProps)({className:"slider","data-mode":d,"data-items":c,"data-slide-by":u,"data-controls":m,"data-nav":p}),g=(0,r.useInnerBlocksProps)(b,{allowedBlocks:["core/group"],template:[["core/group",{},[["core/image",{}]]]]}),_=(0,a.useSelect)((e=>{var l;return null===(l=e(r.store).getBlock(t))||void 0===l?void 0:l.innerBlocks}),[t]),{updateBlockAttributes:w}=(0,a.useDispatch)(r.store),v=(0,l.useMemo)((()=>_.filter((e=>"slider__slide"!==e.className))),[_]);return(0,l.useEffect)((()=>{null==v||v.forEach((e=>{w(e.clientId,{className:"slider__slide"})}))}),[v]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,o.__)("Slider Settings")},(0,l.createElement)(s.__experimentalToggleGroupControl,{label:(0,o.__)("Mode"),value:d,onChange:e=>n({mode:e})},(0,l.createElement)(s.__experimentalToggleGroupControlOption,{value:"carousel",label:(0,o.__)("Carousel")}),(0,l.createElement)(s.__experimentalToggleGroupControlOption,{value:"gallery",label:(0,o.__)("Gallery")})),(0,l.createElement)(s.RangeControl,{label:(0,o.__)("Number of slides to show at once"),value:parseInt(c,10),min:1,onChange:e=>n({items:e.toString()})}),(0,l.createElement)(s.RangeControl,{label:(0,o.__)("Number of slides to advance per click"),value:parseInt(c,10),min:1,onChange:e=>n({slideBy:e.toString()})}),(0,l.createElement)(s.ToggleControl,{label:(0,o.__)("Show previous/next controls"),checked:"false"!==m,onChange:e=>n({controls:e?"true":"false"})}),(0,l.createElement)(s.ToggleControl,{label:(0,o.__)("Show pagination dots"),checked:"false"!==p,onChange:e=>n({nav:e?"true":"false"})}))),(0,l.createElement)("div",g))},save:function(e){let{attributes:t}=e;const{mode:a,items:s,slideBy:o,controls:i,nav:n}=t,d=r.useBlockProps.save({className:"slider","data-mode":a,"data-items":s,"data-slide-by":o,"data-controls":i,"data-nav":n}),c=r.useInnerBlocksProps.save(d);return(0,l.createElement)("div",c)}})}();