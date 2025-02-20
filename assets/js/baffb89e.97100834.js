"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49679"],{73307:function(e,i,t){t.r(i),t.d(i,{default:()=>c,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"android","title":"Android wrapper","description":"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.","source":"@site/versioned_docs/version-4.2/android.md","sourceDirName":".","slug":"/android","permalink":"/lightweight-charts/docs/4.2/android","draft":false,"unlisted":false,"tags":[],"version":"4.2","sidebarPosition":7,"frontMatter":{"id":"android","description":"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.","keywords":["charts","android","canvas","charting library","charting","html5 charts","financial charting library"],"sidebar_position":7},"sidebar":"docsSidebar","previous":{"title":"iOS","permalink":"/lightweight-charts/docs/4.2/ios"},"next":{"title":"Release Notes","permalink":"/lightweight-charts/docs/4.2/release-notes"}}'),a=t("85893"),r=t("50065");let o={id:"android",description:"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","android","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:7},s="Android wrapper",d={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"How to run the provided example",id:"how-to-run-the-provided-example",level:2}];function h(e){let i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"android-wrapper",children:"Android wrapper"})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["You can find the source code of the Lightweight Charts\u2122 Android wrapper in ",(0,a.jsx)(i.a,{href:"https://github.com/tradingview/lightweight-charts-android",children:"this repository"}),"."]})}),"\n",(0,a.jsx)(i.admonition,{type:"info",children:(0,a.jsxs)(i.p,{children:["This wrapper is currently still using ",(0,a.jsx)(i.code,{children:"v3.8.0"}),". This will be updated to ",(0,a.jsx)(i.code,{children:"v4.0.0"})," in the near future."]})}),"\n",(0,a.jsx)(i.p,{children:"You can use Lightweight Charts\u2122 inside an Android application. To use Lightweight Charts\u2122 in that context, you can use our Android wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view."}),"\n",(0,a.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(i.admonition,{type:"info",children:(0,a.jsx)(i.p,{children:"Requires minSdkVersion 21, and installed WebView with support of ES6"})}),"\n",(0,a.jsxs)(i.p,{children:["In ",(0,a.jsx)(i.code,{children:"/build.gradle"})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-groovy",children:"allprojects {\n    repositories {\n        google()\n        mavenCentral()\n    }\n}\n"})}),"\n",(0,a.jsxs)(i.p,{children:["In ",(0,a.jsx)(i.code,{children:"/gradle_module/build.gradle"})]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-groovy",children:"dependencies {\n    //...\n    implementation 'com.tradingview:lightweightcharts:3.8.0'\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(i.p,{children:"Add view to the layout."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-xml",children:'<androidx.constraintlayout.widget.ConstraintLayout\n        android:layout_width="match_parent"\n        android:layout_height="match_parent">\n\n        <com.tradingview.lightweightcharts.view.ChartsView\n            android:id="@+id/charts_view"\n            android:layout_width="0dp"\n            android:layout_height="0dp"\n            app:layout_constraintBottom_toBottomOf="parent"\n            app:layout_constraintLeft_toLeftOf="parent"\n            app:layout_constraintRight_toRightOf="parent"\n            app:layout_constraintTop_toTopOf="parent" />\n\n</androidx.constraintlayout.widget.ConstraintLayout>\n'})}),"\n",(0,a.jsx)(i.p,{children:"Configure the chart layout."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-kotlin",children:'charts_view.api.applyOptions {\n    layout = layoutOptions {\n        background = SolidColor(Color.LTGRAY)\n        textColor = Color.BLACK.toIntColor()\n    }\n    localization = localizationOptions {\n        locale = "ru-RU"\n        priceFormatter = PriceFormatter(template = "{price:#2:#3}$")\n        timeFormatter = TimeFormatter(\n            locale = "ru-RU",\n            dateTimeFormat = DateTimeFormat.DATE_TIME\n        )\n    }\n}\n'})}),"\n",(0,a.jsx)(i.p,{children:"Add any series to the chart and store a reference to it."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-kotlin",children:"lateinit var histogramSeries: SeriesApi\ncharts_view.api.addHistogramSeries(\n    onSeriesCreated = { series ->\n        histogramSeries = series\n    }\n)\n"})}),"\n",(0,a.jsx)(i.p,{children:"Add data to the series."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-kotlin",children:"val data = listOf(\n    HistogramData(Time.BusinessDay(2019, 6, 11), 40.01f),\n    HistogramData(Time.BusinessDay(2019, 6, 12), 52.38f),\n    HistogramData(Time.BusinessDay(2019, 6, 13), 36.30f),\n    HistogramData(Time.BusinessDay(2019, 6, 14), 34.48f),\n    WhitespaceData(Time.BusinessDay(2019, 6, 15)),\n    WhitespaceData(Time.BusinessDay(2019, 6, 16)),\n    HistogramData(Time.BusinessDay(2019, 6, 17), 41.50f),\n    HistogramData(Time.BusinessDay(2019, 6, 18), 34.82f)\n)\nhistogramSeries.setData(data)\n"})}),"\n",(0,a.jsx)(i.h2,{id:"how-to-run-the-provided-example",children:"How to run the provided example"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.a,{href:"https://github.com/tradingview/lightweight-charts-android",children:"GitHub repository"})," for lightweight-charts-android contains an example of the library in action.\nYou can run the example (LighweightCharts.app) by cloning the repository and opening it in Android Studio. You will need to have ",(0,a.jsx)(i.a,{href:"https://nodejs.org/",children:"NodeJS/NPM"})," installed."]})]})}function c(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return s},a:function(){return o}});var n=t(67294);let a={},r=n.createContext(a);function o(e){let i=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);