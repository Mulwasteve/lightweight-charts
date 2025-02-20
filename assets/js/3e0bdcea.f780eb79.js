"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30286"],{26008:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"api/interfaces/ICustomSeriesPaneView","title":"Interface: ICustomSeriesPaneView\\\\<HorzScaleItem, TData, TSeriesOptions\\\\>","description":"This interface represents the view for the custom series","source":"@site/docs/api/interfaces/ICustomSeriesPaneView.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/ICustomSeriesPaneView","permalink":"/lightweight-charts/docs/next/api/interfaces/ICustomSeriesPaneView","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),n=s("85893"),i=s("50065");let a={pagination_next:null,pagination_prev:null},d="Interface: ICustomSeriesPaneView<HorzScaleItem, TData, TSeriesOptions>",c={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"renderer()",id:"renderer",level:3},{value:"Returns",id:"returns",level:4},{value:"update()",id:"update",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"priceValueBuilder()",id:"pricevaluebuilder",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"isWhitespace()",id:"iswhitespace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"defaultOptions()",id:"defaultoptions",level:3},{value:"Returns",id:"returns-4",level:4},{value:"destroy()?",id:"destroy",level:3},{value:"Returns",id:"returns-5",level:4}];function o(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"interface-icustomseriespaneviewhorzscaleitem-tdata-tseriesoptions",children:"Interface: ICustomSeriesPaneView<HorzScaleItem, TData, TSeriesOptions>"})}),"\n",(0,n.jsx)(r.p,{children:"This interface represents the view for the custom series"}),"\n",(0,n.jsx)(r.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"HorzScaleItem"})," = ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/type-aliases/Time",children:(0,n.jsx)(r.code,{children:"Time"})})]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"TData"})," ",(0,n.jsx)(r.em,{children:"extends"})," ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/interfaces/CustomData",children:(0,n.jsx)(r.code,{children:"CustomData"})}),"<",(0,n.jsx)(r.code,{children:"HorzScaleItem"}),"> = ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/interfaces/CustomData",children:(0,n.jsx)(r.code,{children:"CustomData"})}),"<",(0,n.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"TSeriesOptions"})," ",(0,n.jsx)(r.em,{children:"extends"})," ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/type-aliases/CustomSeriesOptions",children:(0,n.jsx)(r.code,{children:"CustomSeriesOptions"})})," = ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/type-aliases/CustomSeriesOptions",children:(0,n.jsx)(r.code,{children:"CustomSeriesOptions"})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"renderer",children:"renderer()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"renderer"}),"(): ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/interfaces/ICustomSeriesPaneRenderer",children:(0,n.jsx)(r.code,{children:"ICustomSeriesPaneRenderer"})})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"This method returns a renderer - special object to draw data for the series\non the main chart pane."}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/interfaces/ICustomSeriesPaneRenderer",children:(0,n.jsx)(r.code,{children:"ICustomSeriesPaneRenderer"})})}),"\n",(0,n.jsx)(r.p,{children:"an renderer object to be used for drawing."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"update",children:"update()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"update"}),"(",(0,n.jsx)(r.code,{children:"data"}),", ",(0,n.jsx)(r.code,{children:"seriesOptions"}),"): ",(0,n.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"This method will be called with the latest data for the renderer to use\nduring the next paint."}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"data"}),": ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/interfaces/PaneRendererCustomData",children:(0,n.jsx)(r.code,{children:"PaneRendererCustomData"})}),"<",(0,n.jsx)(r.code,{children:"HorzScaleItem"}),", ",(0,n.jsx)(r.code,{children:"TData"}),">"]}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"seriesOptions"}),": ",(0,n.jsx)(r.code,{children:"TSeriesOptions"})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"pricevaluebuilder",children:"priceValueBuilder()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"priceValueBuilder"}),"(",(0,n.jsx)(r.code,{children:"plotRow"}),"): ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/type-aliases/CustomSeriesPricePlotValues",children:(0,n.jsx)(r.code,{children:"CustomSeriesPricePlotValues"})})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"A function for interpreting the custom series data and returning an array of numbers\nrepresenting the price values for the item. These price values are used\nby the chart to determine the auto-scaling (to ensure the items are in view) and the crosshair\nand price line positions. The last value in the array will be used as the current value. You shouldn't need to\nhave more than 3 values in this array since the library only needs a largest, smallest, and current value."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"plotRow"}),": ",(0,n.jsx)(r.code,{children:"TData"})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/type-aliases/CustomSeriesPricePlotValues",children:(0,n.jsx)(r.code,{children:"CustomSeriesPricePlotValues"})})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"iswhitespace",children:"isWhitespace()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"isWhitespace"}),"(",(0,n.jsx)(r.code,{children:"data"}),"): ",(0,n.jsx)(r.code,{children:"data is CustomSeriesWhitespaceData<HorzScaleItem>"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["A function for testing whether a data point should be considered fully specified, or if it should\nbe considered as whitespace. Should return ",(0,n.jsx)(r.code,{children:"true"})," if is whitespace."]}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"data"}),": ",(0,n.jsx)(r.code,{children:"TData"})," | ",(0,n.jsx)(r.a,{href:"/lightweight-charts/docs/next/api/interfaces/CustomSeriesWhitespaceData",children:(0,n.jsx)(r.code,{children:"CustomSeriesWhitespaceData"})}),"<",(0,n.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"data point to be tested"}),"\n",(0,n.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"data is CustomSeriesWhitespaceData<HorzScaleItem>"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"defaultoptions",children:"defaultOptions()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"defaultOptions"}),"(): ",(0,n.jsx)(r.code,{children:"TSeriesOptions"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Default options"}),"\n",(0,n.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"TSeriesOptions"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"destroy",children:"destroy()?"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"optional"})," ",(0,n.jsx)(r.strong,{children:"destroy"}),"(): ",(0,n.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"This method will be evoked when the series has been removed from the chart. This method should be used to\nclean up any objects, references, and other items that could potentially cause memory leaks."}),"\n",(0,n.jsx)(r.p,{children:"This method should contain all the necessary code to clean up the object before it is removed from memory.\nThis includes removing any event listeners or timers that are attached to the object, removing any references\nto other objects, and resetting any values or properties that were modified during the lifetime of the object."}),"\n",(0,n.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"void"})})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return a}});var t=s(67294);let n={},i=t.createContext(n);function a(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);