var E=Object.defineProperty;var y=(i,t,e)=>t in i?E(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var s=(i,t,e)=>y(i,typeof t!="symbol"?t+"":t,e);import{Z as w,L as C,a as P}from"./lightweight-charts.production-DfQ-LPAD.js";import{g as M}from"./sample-data-x_8-FZm1.js";import{f as T,c as S}from"./time-DjhguU0i.js";import{p as z}from"./positions-t2UKkghX.js";const L={title:"",followMode:"tracking",horizontalDeadzoneWidth:45,verticalDeadzoneHeight:100,verticalSpacing:20,topOffset:20};class O{constructor(t,e){s(this,"_chart");s(this,"_element");s(this,"_titleElement");s(this,"_priceElement");s(this,"_dateElement");s(this,"_timeElement");s(this,"_options");s(this,"_lastTooltipWidth",null);this._options={...L,...e},this._chart=t;const o=document.createElement("div");d(o,{display:"flex","flex-direction":"column","align-items":"center",position:"absolute",transform:"translate(calc(0px - 50%), 0px)",opacity:"0",left:"0%",top:"0","z-index":"100","background-color":"white","border-radius":"4px",padding:"5px 10px","font-family":"-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif","font-size":"12px","font-weight":"400","box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.2)","line-height":"16px","pointer-events":"none",color:"#131722"});const n=document.createElement("div");d(n,{"font-size":"16px","line-height":"24px","font-weight":"590"}),r(n,this._options.title),o.appendChild(n);const a=document.createElement("div");d(a,{"font-size":"14px","line-height":"18px","font-weight":"590"}),r(a,""),o.appendChild(a);const h=document.createElement("div");d(h,{color:"#787B86"}),r(h,""),o.appendChild(h);const l=document.createElement("div");d(l,{color:"#787B86"}),r(l,""),o.appendChild(l),this._element=o,this._titleElement=n,this._priceElement=a,this._dateElement=h,this._timeElement=l;const m=this._chart.chartElement();m.appendChild(this._element);const u=m.parentElement;if(!u){console.error("Chart Element is not attached to the page.");return}const p=getComputedStyle(u).position;p!=="relative"&&p!=="absolute"&&console.error("Chart Element position is expected be `relative` or `absolute`.")}destroy(){this._chart&&this._element&&this._chart.chartElement().removeChild(this._element)}applyOptions(t){this._options={...this._options,...t}}options(){return this._options}updateTooltipContent(t){if(!this._element)return;const e=this._element.getBoundingClientRect();this._lastTooltipWidth=e.width,t.title!==void 0&&this._titleElement&&r(this._titleElement,t.title),r(this._priceElement,t.price),r(this._dateElement,t.date),r(this._timeElement,t.time)}updatePosition(t){if(!this._chart||!this._element||(this._element.style.opacity=t.visible?"1":"0",!t.visible))return;const e=this._calculateXPosition(t,this._chart),o=this._calculateYPosition(t);this._element.style.transform=`translate(${e}, ${o})`}_calculateXPosition(t,e){const o=t.paneX+e.priceScale("left").width(),n=this._lastTooltipWidth?Math.ceil(this._lastTooltipWidth/2):this._options.horizontalDeadzoneWidth;return`calc(${Math.min(Math.max(n,o),e.timeScale().width()-n)}px - 50%)`}_calculateYPosition(t){if(this._options.followMode=="top")return`${this._options.topOffset}px`;const e=t.paneY,o=e<=this._options.verticalSpacing+this._options.verticalDeadzoneHeight;return`calc(${e+(o?1:-1)*this._options.verticalSpacing}px${o?"":" - 100%"})`}}function r(i,t){!i||t===i.innerText||(i.innerText=t,i.style.display=t?"block":"none")}function d(i,t){for(const[e,o]of Object.entries(t))i.style.setProperty(e,o)}class V{constructor(t){s(this,"_data");this._data=t}draw(t){this._data.visible&&t.useBitmapCoordinateSpace(e=>{const o=e.context,n=z(this._data.x,e.horizontalPixelRatio,1);o.fillStyle=this._data.color,o.fillRect(n.position,this._data.topMargin*e.verticalPixelRatio,n.length,e.bitmapSize.height)})}}class k{constructor(t){s(this,"_data");this._data=t}update(t){this._data=t}renderer(){return new V(this._data)}zOrder(){return"bottom"}}const B={lineColor:"rgba(0, 0, 0, 0.2)",priceExtractor:i=>i.value!==void 0?i.value.toFixed(2):i.close!==void 0?i.close.toFixed(2):""};class W{constructor(t){s(this,"_options");s(this,"_tooltip");s(this,"_paneViews");s(this,"_data",{x:0,visible:!1,color:"rgba(0, 0, 0, 0.2)",topMargin:0});s(this,"_attachedParams");s(this,"_moveHandler",t=>this._onMouseMove(t));this._options={...B,...t},this._paneViews=[new k(this._data)]}attached(t){this._attachedParams=t,this._setCrosshairMode(),t.chart.subscribeCrosshairMove(this._moveHandler),this._createTooltipElement()}detached(){const t=this.chart();t&&t.unsubscribeCrosshairMove(this._moveHandler)}paneViews(){return this._paneViews}updateAllViews(){this._paneViews.forEach(t=>t.update(this._data))}setData(t){var e;this._data=t,this.updateAllViews(),(e=this._attachedParams)==null||e.requestUpdate()}currentColor(){return this._options.lineColor}chart(){var t;return(t=this._attachedParams)==null?void 0:t.chart}series(){var t;return(t=this._attachedParams)==null?void 0:t.series}applyOptions(t){this._options={...this._options,...t},this._tooltip&&this._tooltip.applyOptions({...this._options.tooltip})}_setCrosshairMode(){const t=this.chart();if(!t)throw new Error("Unable to change crosshair mode because the chart instance is undefined");t.applyOptions({crosshair:{mode:w.Magnet,vertLine:{visible:!1,labelVisible:!1},horzLine:{visible:!1,labelVisible:!1}}})}_hideTooltip(){this._tooltip&&(this._tooltip.updateTooltipContent({title:"",price:"",date:"",time:""}),this._tooltip.updatePosition({paneX:0,paneY:0,visible:!1}))}_hideCrosshair(){this._hideTooltip(),this.setData({x:0,visible:!1,color:this.currentColor(),topMargin:0})}_onMouseMove(t){var p,b;const e=this.chart(),o=this.series(),n=t.logical;if(!n||!e||!o){this._hideCrosshair();return}const a=t.seriesData.get(o);if(!a){this._hideCrosshair();return}const h=this._options.priceExtractor(a),l=e.timeScale().logicalToCoordinate(n),[m,u]=T(t.time?S(t.time):void 0);if(this._tooltip){const v=this._tooltip.options(),x=v.followMode=="top"?v.topOffset+10:0;this.setData({x:l??0,visible:l!==null,color:this.currentColor(),topMargin:x}),this._tooltip.updateTooltipContent({price:h,date:m,time:u}),this._tooltip.updatePosition({paneX:((p=t.point)==null?void 0:p.x)??0,paneY:((b=t.point)==null?void 0:b.y)??0,visible:!0})}}_createTooltipElement(){const t=this.chart();if(!t)throw new Error("Unable to create Tooltip element. Chart not attached");this._tooltip=new O(t,{...this._options.tooltip})}}const $=window.chart=C("chart",{autoSize:!0,grid:{vertLines:{visible:!1},horzLines:{visible:!1}},timeScale:{borderVisible:!1},rightPriceScale:{borderVisible:!1}}),g=$.addSeries(P,{lineColor:"rgb(4,153,129)",topColor:"rgba(4,153,129, 0.4)",bottomColor:"rgba(4,153,129, 0)",priceLineVisible:!1});g.setData(M());const f=new W({lineColor:"rgba(0, 0, 0, 0.2)",tooltip:{followMode:"top"}});g.attachPrimitive(f);const c=document.querySelector("#tracking-button");c&&c.classList.add("grey");const _=document.querySelector("#top-button");c&&c.addEventListener("click",function(){c.classList.remove("grey"),_&&_.classList.add("grey"),f.applyOptions({tooltip:{followMode:"tracking"}})});_&&_.addEventListener("click",function(){_.classList.remove("grey"),c&&c.classList.add("grey"),f.applyOptions({tooltip:{followMode:"top"}})});
