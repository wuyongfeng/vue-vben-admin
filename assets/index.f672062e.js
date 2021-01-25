import{_ as e}from"./index.2eb743af.js";import{d as t,cp as o,cq as i,h as n,bA as r,o as s,i as a,H as d,j as l,bw as p}from"./index.2b0223a6.js";import"./index.a32f4879.js";import"./index.b0a8084c.js";import"./RightOutlined.533f9bac.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./isEqual.278dbd3b.js";import"./toInteger.3a23a5d6.js";import"./DownOutlined.2647a59c.js";import"./index.95c10fda.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";import"./ArrowLeftOutlined.668881e5.js";import"./vendor.0d1494f4.js";const c={event:"mousedown",transition:400},u={beforeMount:(e,t)=>{if(!1===t.value)return;const o=e.getAttribute("ripple-background");var i,n;i=Object.keys(t.modifiers),n=c,i.forEach((e=>{isNaN(Number(e))?n.event=e:n.transition=e}));const r=o||u.background,s=u.zIndex;e.addEventListener(c.event,(t=>{!function({event:e,el:t,zIndex:o,background:i}){var n,r;const s=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=e.clientX||e.touches[0].clientX,d=e.clientY||e.touches[0].clientY,l=t.getBoundingClientRect(),{left:p,top:u}=l,{offsetWidth:m,offsetHeight:g}=t,{transition:b}=c,v=a-p,f=d-u,h=Math.max(v,m-v),x=Math.max(f,g-f),j=window.getComputedStyle(t),R=Math.sqrt(h*h+x*x),y=s>0?s:0,L=document.createElement("div"),E=document.createElement("div");Object.assign(null!=(n=L.style)?n:{},{className:"ripple",marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${b}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:null!=o?o:"9999",backgroundColor:null!=i?i:"rgba(0, 0, 0, 0.12)"}),Object.assign(null!=(r=E.style)?r:{},{className:"ripple-container",position:"absolute",left:0-y+"px",top:0-y+"px",height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const w=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==w&&(t.style.position="relative");E.appendChild(L),t.appendChild(E),Object.assign(L.style,{marginTop:`${f}px`,marginLeft:`${v}px`});const{borderTopLeftRadius:k,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:O}=j;function N(){setTimeout((()=>{L.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((()=>{var e;null==(e=null==E?void 0:E.parentNode)||e.removeChild(E)}),850),t.removeEventListener("mouseup",N,!1),t.removeEventListener("mouseleave",N,!1),t.removeEventListener("dragstart",N,!1),setTimeout((()=>{let e=!0;for(let o=0;o<t.childNodes.length;o++)"ripple-container"===t.childNodes[o].className&&(e=!1);e&&(t.style.position="static"!==w?w:"")}),c.transition+260)}Object.assign(E.style,{width:`${m}px`,height:`${g}px`,direction:"ltr",borderTopLeftRadius:k,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:O}),setTimeout((()=>{var e;const t=2*R+"px";Object.assign(null!=(e=L.style)?e:{},{width:t,height:t,marginLeft:v-R+"px",marginTop:f-R+"px"})}),0),"mousedown"===e.type?(t.addEventListener("mouseup",N,!1),t.addEventListener("mouseleave",N,!1),t.addEventListener("dragstart",N,!1)):N();t.setBackground=e=>{e&&(L.style.backgroundColor=e)}}({event:t,el:e,background:r,zIndex:s})}))},updated(e,t){var o,i;if(!t.value)return void(null==(o=null==e?void 0:e.clearRipple)||o.call(e));const n=e.getAttribute("ripple-background");null==(i=null==e?void 0:e.setBackground)||i.call(e,n)}};var m=t({components:{PageWrapper:e},directives:{Ripple:u}});const g=p("data-v-d699c812");o("data-v-d699c812");const b={class:"demo-box"};i();const v=g(((e,t,o,i,p,c)=>{const u=n("PageWrapper"),m=r("ripple");return s(),a(u,{title:"Ripple示例"},{default:g((()=>[d(l("div",b,"content",512),[[m]])])),_:1})}));m.render=v,m.__scopeId="data-v-d699c812";export default m;
