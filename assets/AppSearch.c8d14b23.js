import{r as e,cl as t,cm as a,q as s,s as n,aU as o,e as r,bR as l,cn as i,bS as c,u as d,bu as p,b5 as u,a1 as h,co as f,bI as m,E as v,aC as C,d as b,aK as x,h as g,o as S,i as _,j as w,l as y,bw as k,$,bA as E,b2 as A,H as j,b8 as I,aL as M,aM as R,k as T,b4 as N,bN as O,b1 as D,m as U}from"./index.2b0223a6.js";import"./index.95c10fda.js";import{I as K}from"./index.427207d8.js";import{b as L,u as H,d as W}from"./useHeaderSetting.306c855b.js";import{u as z}from"./useScrollTo.0326b6fc.js";import{C as F}from"./clickOutside.1adc0691.js";import{S as P}from"./SearchOutlined.cd07db3b.js";import"./vendor.0d1494f4.js";import"./EyeOutlined.c34fd344.js";import"./animation.b863c4a3.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";const B=["keydown"],q={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},G={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},J={ctrl:e=>e.ctrlKey,shift:e=>e.shiftKey,alt:e=>e.altKey,meta:e=>e.metaKey};function Q(e,t){if(!e.key)return!1;if(i(t))return e.keyCode===t;const a=t.split(".");let s=0;for(const n of a){const t=J[n],a=G[n],o=q[n];(t&&t(e)||(a&&c(a)?a.includes(e.key):a===e.key)||(o&&c(o)?o.includes(e.keyCode):o===e.keyCode)||e.key.toUpperCase()===n.toUpperCase())&&s++}return s===a.length}function V(e,t=a,d={}){const{events:p=B,target:u}=d;let h;function f(a){if(function(e){return o(e)?e:l(e)||i(e)?t=>Q(t,e):c(e)?t=>e.some((e=>Q(t,e))):e?()=>!0:()=>!1}(e)(a))return t(a)}s((()=>{if(h=function(e,t){if(!e)return t;let a;a=o(e)?e():r(e);return a}(u,window),h)for(const e of p)h.addEventListener(e,f)})),n((()=>{if(h)for(const e of p)h.removeEventListener(e,f)}))}var X,Y;function Z(t,a,s){const n=e([]),o=e(""),l=e(-1);let i=[];const{t:c}=d(),b=C(),[x]=p((function(e){null==e||e.stopPropagation();const t=e.target.value;if(o.value=t.trim(),!t)return void(n.value=[]);const a=function(e){const t=["",...[...e].map((e=>{return["$","(",")","*","+",".","[","]","?","\\","^","{","}","|"].includes(t=e)?`\\${t}`:t;var t})),""].join(".*");return new RegExp(t)}(r(o)),s=m(i,(e=>a.test(e.name)));n.value=g(s,a),l.value=0}),200);function g(e,t,a){const s=[];return e.forEach((e=>{const{name:n,path:o,icon:r,children:l}=e;t.test(n)&&!(null==l?void 0:l.length)&&s.push({name:(null==a?void 0:a.name)?`${a.name} > ${n}`:n,path:o,icon:r}),Array.isArray(l)&&l.length&&s.push(...g(l,t,e))})),s}function S(){const e=r(t);if(!e||!Array.isArray(e)||0===e.length||!r(a))return;const s=e[r(l)];if(!s)return;const n=r(a);if(!n)return;const o=s.offsetTop+s.offsetHeight,i=n.offsetHeight,{start:c}=z({el:n,duration:100,to:o-i});c()}async function _(){if(!n.value.length)return;const e=r(n),t=r(l);if(0===e.length||t<0)return;const a=e[t];w(),await v(),b(a.path)}function w(){n.value=[],s("close")}return u((async()=>{const e=await L();i=h(e),f(i,(e=>{e.name=c(e.name)}))})),V(["enter","up","down","esc"],(e=>{switch(e.keyCode){case 38:n.value.length&&(l.value--,l.value<0&&(l.value=n.value.length-1),S());break;case 40:n.value.length&&(l.value++,l.value>n.value.length-1&&(l.value=0),S());break;case 13:_();break;case 27:w()}})),{handleSearch:x,searchResult:n,keyword:o,activeIndex:l,handleMouseenter:function(e){const t=e.target.dataset.index;l.value=Number(t)},handleEnter:_}}(Y=X||(X={}))[Y.UP=38]="UP",Y[Y.DOWN=40]="DOWN",Y[Y.ENTER=13]="ENTER",Y[Y.ESC=27]="ESC";var ee=b({name:"AppSearchFooter",components:{},setup(){const{prefixCls:e}=x("app-search-footer"),{t:t}=d();return{prefixCls:e,t:t}}});const te=k("data-v-8d332632")(((e,t,a,s,n,o)=>{const r=g("g-icon");return S(),_("div",{class:`${e.prefixCls}`},[w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"ant-design:enter-outlined"})],2),w("span",null,y(e.t("component.app.toSearch")),1),w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"bi:arrow-up"})],2),w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"bi:arrow-down"})],2),w("span",null,y(e.t("component.app.toNavigate")),1),w("span",{class:`${e.prefixCls}__item`},[w(r,{icon:"mdi:keyboard-esc"})],2),w("span",null,y(e.t("common.closeText")),1)],2)}));ee.render=te,ee.__scopeId="data-v-8d332632";var ae=b({name:"AppSearchModal",components:{SearchOutlined:P,AppSearchFooter:ee,[K.name]:K},emits:["close"],props:{visible:Boolean},directives:{clickOutside:F},setup(a,{emit:s}){const n=e(null),{prefixCls:o}=x("app-search-modal"),{t:l}=d(),[i,c]=function(){const a=e([]);return t((()=>{a.value=[]})),[a,e=>t=>{a.value[e]=t}]}(),{getIsMobile:p}=H(),{handleSearch:u,searchResult:h,keyword:f,activeIndex:m,handleEnter:v,handleMouseenter:C}=Z(i,n,s),b=$((()=>!f||0===r(h).length)),g=$((()=>[o,{[`${o}--mobile`]:r(p)}]));return{t:l,prefixCls:o,getClass:g,handleSearch:u,searchResult:h,activeIndex:m,getIsNotData:b,handleEnter:v,setRefs:c,scrollWrap:n,handleMouseenter:C,handleClose:()=>{h.value=[],s("close")}}}});const se=k("data-v-4d302d6b"),ne=se(((e,t,a,s,n,o)=>{const r=g("SearchOutlined"),l=g("a-input"),i=g("g-icon"),c=g("AppSearchFooter"),d=E("click-outside");return S(),_(O,{to:"body"},[w(N,{name:"zoom-fade",mode:"out-in"},{default:se((()=>[e.visible?(S(),_("div",{key:0,class:e.getClass,onClick:t[4]||(t[4]=A((()=>{}),["stop"]))},[j(w("div",{class:`${e.prefixCls}-content`},[w("div",{class:`${e.prefixCls}-input__wrapper`},[w(l,{class:`${e.prefixCls}-input`,placeholder:e.t("common.searchText"),"allow-clear":"",onChange:e.handleSearch},{prefix:se((()=>[w(r)])),_:1},8,["class","placeholder","onChange"]),w("span",{class:`${e.prefixCls}-cancel`,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},y(e.t("common.cancelText")),3)],2),j(w("div",{class:`${e.prefixCls}-not-data`},y(e.t("component.app.searchNotData")),3),[[I,e.getIsNotData]]),j(w("ul",{class:`${e.prefixCls}-list`,ref:"scrollWrap"},[(S(!0),_(M,null,R(e.searchResult,((a,s)=>(S(),_("li",{ref:e.setRefs(s),key:a.path,"data-index":s,onMouseenter:t[2]||(t[2]=(...t)=>e.handleMouseenter&&e.handleMouseenter(...t)),onClick:t[3]||(t[3]=(...t)=>e.handleEnter&&e.handleEnter(...t)),class:[`${e.prefixCls}-list__item`,{[`${e.prefixCls}-list__item--active`]:e.activeIndex===s}]},[w("div",{class:`${e.prefixCls}-list__item-icon`},[w(i,{icon:a.icon||"mdi:form-select",size:20},null,8,["icon"])],2),w("div",{class:`${e.prefixCls}-list__item-text`},y(a.name),3),w("div",{class:`${e.prefixCls}-list__item-enter`},[w(i,{icon:"ant-design:enter-outlined",size:20})],2)],42,["data-index"])))),128))],2),[[I,!e.getIsNotData]]),w(c)],2),[[d,e.handleClose]])],2)):T("",!0)])),_:1})])}));ae.render=ne,ae.__scopeId="data-v-4d302d6b";var oe=b({name:"AppSearch",components:{AppSearchModal:ae,Tooltip:D,SearchOutlined:P},setup(){const t=e(!1),{prefixCls:a}=x("app-search"),{getShowSearch:s}=W(),{t:n}=d();return{t:n,prefixCls:a,showModal:t,getShowSearch:s,handleClose:()=>{t.value=!1},handleSearch:function(){t.value=!0}}}});const re=k("data-v-43b34150"),le=re(((e,t,a,s,n,o)=>{const r=g("SearchOutlined"),l=g("Tooltip"),i=g("AppSearchModal");return e.getShowSearch?(S(),_("div",{key:0,class:e.prefixCls,onClick:t[1]||(t[1]=A(((...t)=>e.handleSearch&&e.handleSearch(...t)),["stop"]))},[w(l,null,{title:re((()=>[U(y(e.t("common.searchText")),1)])),default:re((()=>[w(r)])),_:1}),w(i,{onClose:e.handleClose,visible:e.showModal},null,8,["onClose","visible"])],2)):T("",!0)}));oe.render=le,oe.__scopeId="data-v-43b34150";export default oe;
