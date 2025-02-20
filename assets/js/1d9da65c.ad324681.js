"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78802"],{55840:function(e,i,c){c.r(i),c.d(i,{default:()=>d,frontMatter:()=>t,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>n});var s=JSON.parse('{"id":"price-scale","title":"Price scale","description":"Price Scale (or price axis) is a vertical scale that mostly maps prices to coordinates and vice versa.","source":"@site/versioned_docs/version-4.0/price-scale.md","sourceDirName":".","slug":"/price-scale","permalink":"/lightweight-charts/docs/4.0/price-scale","draft":false,"unlisted":false,"tags":[],"version":"4.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Series types","permalink":"/lightweight-charts/docs/4.0/series-types"},"next":{"title":"Time scale","permalink":"/lightweight-charts/docs/4.0/time-scale"}}'),r=c("85893"),a=c("50065");let t={sidebar_position:2},n="Price scale",l={},o=[{value:"Creating a price scale",id:"creating-a-price-scale",level:2},{value:"Removing a price scale",id:"removing-a-price-scale",level:2}];function h(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"price-scale",children:"Price scale"})}),"\n",(0,r.jsx)(i.p,{children:"Price Scale (or price axis) is a vertical scale that mostly maps prices to coordinates and vice versa.\nThe rules of converting depend on a price scale mode, a height of the chart and visible part of the data."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Price scales",src:c(71826).Z+"",title:"Price scales",width:"687",height:"387"})}),"\n",(0,r.jsxs)(i.p,{children:["By default, chart has 2 predefined price scales: ",(0,r.jsx)(i.code,{children:"left"})," and ",(0,r.jsx)(i.code,{children:"right"}),", and an unlimited number of overlay scales."]}),"\n",(0,r.jsxs)(i.p,{children:["Only ",(0,r.jsx)(i.code,{children:"left"})," and ",(0,r.jsx)(i.code,{children:"right"})," price scales could be displayed on the chart, all overlay scales are hidden."]}),"\n",(0,r.jsxs)(i.p,{children:["If you want to change ",(0,r.jsx)(i.code,{children:"left"})," price scale, you need to use ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ChartOptions#leftpricescale",children:(0,r.jsx)(i.code,{children:"leftPriceScale"})})," option, to change ",(0,r.jsx)(i.code,{children:"right"})," price scale use ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ChartOptions#rightpricescale",children:(0,r.jsx)(i.code,{children:"rightPriceScale"})}),", to change default options for an overlay price scale use ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ChartOptions#overlaypricescales",children:(0,r.jsx)(i.code,{children:"overlayPriceScales"})})," option."]}),"\n",(0,r.jsxs)(i.p,{children:["Alternatively, you can use ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#pricescale",children:(0,r.jsx)(i.code,{children:"IChartApi.priceScale"})})," method to get an API object of any price scale or ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/ISeriesApi#pricescale",children:(0,r.jsx)(i.code,{children:"ISeriesApi.priceScale"})})," to get an API object of series' price scale (the price scale that the series is attached to)."]}),"\n",(0,r.jsx)(i.h2,{id:"creating-a-price-scale",children:"Creating a price scale"}),"\n",(0,r.jsxs)(i.p,{children:["By default a chart has only 2 price scales: ",(0,r.jsx)(i.code,{children:"left"})," and ",(0,r.jsx)(i.code,{children:"right"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["If you want to create an overlay price scale, you can simply assign ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon#pricescaleid",children:(0,r.jsx)(i.code,{children:"priceScaleId"})})," option to a series (note that a value should be differ from ",(0,r.jsx)(i.code,{children:"left"})," and ",(0,r.jsx)(i.code,{children:"right"}),") and a chart will automatically create an overlay price scale with provided ID.\nIf a price scale with such ID already exists then a series will be attached to this existing price scale.\nFurther you can use provided price scale ID to get its corresponding API object via ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#pricescale",children:(0,r.jsx)(i.code,{children:"IChartApi.priceScale"})})," method."]}),"\n",(0,r.jsx)(i.h2,{id:"removing-a-price-scale",children:"Removing a price scale"}),"\n",(0,r.jsxs)(i.p,{children:["The default price scales (",(0,r.jsx)(i.code,{children:"left"})," and ",(0,r.jsx)(i.code,{children:"right"}),") cannot be removed, you can only hide them by setting ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/4.0/api/interfaces/PriceScaleOptions#visible",children:(0,r.jsx)(i.code,{children:"visible"})})," option to ",(0,r.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"An overlay price scale exists while there is at least 1 series attached to this price scale.\nThus, to remove an overlay price scale remove all series attached to this price scale."})]})}function d(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71826:function(e,i,c){c.d(i,{Z:function(){return s}});let s=c.p+"assets/images/price-scales-5ff372fd08578f74710940c724ad5df4.png"},50065:function(e,i,c){c.d(i,{Z:function(){return n},a:function(){return t}});var s=c(67294);let r={},a=s.createContext(r);function t(e){let i=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);