"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13992"],{53671:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>a,assets:()=>p,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"api/type-aliases/DeepPartial","title":"Type alias: DeepPartial\\\\<T\\\\>","description":"DeepPartial\\\\ T[P] extends (infer U)[] ? DeepPartial[] DeepPartial }","source":"@site/versioned_docs/version-4.1/api/type-aliases/DeepPartial.md","sourceDirName":"api/type-aliases","slug":"/api/type-aliases/DeepPartial","permalink":"/lightweight-charts/docs/4.1/api/type-aliases/DeepPartial","draft":false,"unlisted":false,"tags":[],"version":"4.1","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),r=n("85893"),i=n("50065");let s={pagination_next:null,pagination_prev:null},l="Type alias: DeepPartial<T>",p={},o=[{value:"Type parameters",id:"type-parameters",level:2}];function c(e){let t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"type-alias-deeppartialt",children:"Type alias: DeepPartial<T>"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"DeepPartial"}),"<",(0,r.jsx)(t.code,{children:"T"}),">: ",(0,r.jsx)(t.code,{children:"{ [P in keyof T]?: T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends readonly (infer X)[] ? readonly DeepPartial<X>[] : DeepPartial<T[P]> }"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Represents a type ",(0,r.jsx)(t.code,{children:"T"})," where every property is optional."]}),"\n",(0,r.jsx)(t.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,r.jsxs)(t.p,{children:["\u2022 ",(0,r.jsx)(t.strong,{children:"T"})]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var a=n(67294);let r={},i=a.createContext(r);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);