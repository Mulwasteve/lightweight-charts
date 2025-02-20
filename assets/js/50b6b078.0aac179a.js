"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64464"],{92942:function(e,i,t){t.r(i),t.d(i,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>s});var n=JSON.parse('{"id":"api/interfaces/LocalizationOptions","title":"Interface: LocalizationOptions\\\\<HorzScaleItem\\\\>","description":"Represents options for formatting dates, times, and prices according to a locale.","source":"@site/versioned_docs/version-5.0/api/interfaces/LocalizationOptions.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/LocalizationOptions","permalink":"/lightweight-charts/docs/api/interfaces/LocalizationOptions","draft":false,"unlisted":false,"tags":[],"version":"5.0","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),r=t("85893"),a=t("50065");let l={pagination_next:null,pagination_prev:null},s="Interface: LocalizationOptions<HorzScaleItem>",c={},o=[{value:"Extends",id:"extends",level:2},{value:"Extended by",id:"extended-by",level:2},{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"timeFormatter?",id:"timeformatter",level:3},{value:"Default Value",id:"default-value",level:4},{value:"dateFormat",id:"dateformat",level:3},{value:"Default Value",id:"default-value-1",level:4},{value:"locale",id:"locale",level:3},{value:"See",id:"see",level:4},{value:"Default Value",id:"default-value-2",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"priceFormatter?",id:"priceformatter",level:3},{value:"See",id:"see-1",level:4},{value:"Default Value",id:"default-value-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"percentageFormatter?",id:"percentageformatter",level:3},{value:"Default Value",id:"default-value-4",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}];function d(e){let i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"interface-localizationoptionshorzscaleitem",children:"Interface: LocalizationOptions<HorzScaleItem>"})}),"\n",(0,r.jsx)(i.p,{children:"Represents options for formatting dates, times, and prices according to a locale."}),"\n",(0,r.jsx)(i.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase",children:(0,r.jsx)(i.code,{children:"LocalizationOptionsBase"})})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/PriceChartLocalizationOptions",children:(0,r.jsx)(i.code,{children:"PriceChartLocalizationOptions"})})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,r.jsxs)(i.p,{children:["\u2022 ",(0,r.jsx)(i.strong,{children:"HorzScaleItem"})]}),"\n",(0,r.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(i.h3,{id:"timeformatter",children:"timeFormatter?"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"optional"})," ",(0,r.jsx)(i.strong,{children:"timeFormatter"}),": ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/TimeFormatterFn",children:(0,r.jsx)(i.code,{children:"TimeFormatterFn"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),">"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Override formatting of the time scale crosshair label."}),"\n",(0,r.jsx)(i.h4,{id:"default-value",children:"Default Value"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"undefined"})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"dateformat",children:"dateFormat"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"dateFormat"}),": ",(0,r.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Date formatting string."}),"\n",(0,r.jsxs)(i.p,{children:["Can contain ",(0,r.jsx)(i.code,{children:"yyyy"}),", ",(0,r.jsx)(i.code,{children:"yy"}),", ",(0,r.jsx)(i.code,{children:"MMMM"}),", ",(0,r.jsx)(i.code,{children:"MMM"}),", ",(0,r.jsx)(i.code,{children:"MM"})," and ",(0,r.jsx)(i.code,{children:"dd"})," literals which will be replaced with corresponding date's value."]}),"\n",(0,r.jsxs)(i.p,{children:["Ignored if ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptions#timeformatter",children:"timeFormatter"})," has been specified."]}),"\n",(0,r.jsx)(i.h4,{id:"default-value-1",children:"Default Value"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"'dd MMM \\'yy'"})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"locale",children:"locale"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"locale"}),": ",(0,r.jsx)(i.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Current locale used to format dates. Uses the browser's language settings by default."}),"\n",(0,r.jsx)(i.h4,{id:"see",children:"See"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation",children:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation"})}),"\n",(0,r.jsx)(i.h4,{id:"default-value-2",children:"Default Value"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"navigator.language"})}),"\n",(0,r.jsx)(i.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase",children:(0,r.jsx)(i.code,{children:"LocalizationOptionsBase"})})," . ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase#locale",children:(0,r.jsx)(i.code,{children:"locale"})})]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"priceformatter",children:"priceFormatter?"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"optional"})," ",(0,r.jsx)(i.strong,{children:"priceFormatter"}),": ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/PriceFormatterFn",children:(0,r.jsx)(i.code,{children:"PriceFormatterFn"})})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Override formatting of the price scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in price formats."}),"\n",(0,r.jsx)(i.h4,{id:"see-1",children:"See"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/PriceFormatCustom",children:"PriceFormatCustom"})}),"\n",(0,r.jsx)(i.h4,{id:"default-value-3",children:"Default Value"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"undefined"})}),"\n",(0,r.jsx)(i.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase",children:(0,r.jsx)(i.code,{children:"LocalizationOptionsBase"})})," . ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase#priceformatter",children:(0,r.jsx)(i.code,{children:"priceFormatter"})})]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"percentageformatter",children:"percentageFormatter?"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"optional"})," ",(0,r.jsx)(i.strong,{children:"percentageFormatter"}),": ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/PercentageFormatterFn",children:(0,r.jsx)(i.code,{children:"PercentageFormatterFn"})})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Override formatting of the percentage scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in percentage format."}),"\n",(0,r.jsx)(i.h4,{id:"default-value-4",children:"Default Value"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"undefined"})}),"\n",(0,r.jsx)(i.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase",children:(0,r.jsx)(i.code,{children:"LocalizationOptionsBase"})})," . ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptionsBase#percentageformatter",children:(0,r.jsx)(i.code,{children:"percentageFormatter"})})]})]})}function h(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return l}});var n=t(67294);let r={},a=n.createContext(r);function l(e){let i=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);