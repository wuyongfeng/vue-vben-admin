import{d as t,b4 as e,bV as a,j as o,T as s,bT as n,o as l,i,b3 as r,bw as d,b0 as p,aV as f,aW as y}from"./index.2b0223a6.js";import{a as g,r as c}from"./domUtils.3aeba9b0.js";function v(l,i="top center 0",r){return t({name:l,props:{group:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:i}},setup(t,{slots:i,attrs:r}){const d=e=>{e.style.transformOrigin=t.origin};return()=>{const p=t.group?a:e;return o(p,s({name:l,mode:t.mode},r,{onBeforeEnter:d}),{default:()=>n(i)})}}})}var m=t({name:"CollapseTransition",setup:()=>({on:{beforeEnter(t){g(t,"collapse-transition"),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){c(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(g(t,"collapse-transition"),t.style.transitionProperty="height",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){c(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}})});const u=d("data-v-bfcefc22"),h=u(((t,a,o,s,n,d)=>(l(),i(e,r(t.on),{default:u((()=>[p(t.$slots,"default")])),_:3},16))));m.render=h,m.__scopeId="data-v-bfcefc22";var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m}),w=t({name:"CollapseTransition",setup:(t,{slots:e})=>()=>o(m,null,{default:()=>n(e)})});const b=v("fade-transition"),T=v("scale-transition"),B=v("slide-y-transition"),P=v("scroll-y-transition"),S=v("slide-y-reverse-transition"),x=v("scroll-y-reverse-transition"),E=v("slide-x-transition"),L=v("scroll-x-transition"),C=v("slide-x-reverse-transition"),O=v("scroll-x-reverse-transition"),H=v("scale-rotate-transition"),j=function(a,l,i="in-out"){return t({name:a,props:{mode:{type:String,default:i}},setup:(t,{attrs:i,slots:r})=>()=>o(e,s({name:a,mode:t.mode},i,{onBeforeEnter:l.beforeEnter,onEnter:l.enter,onLeave:l.leave,onAfterLeave:l.afterLeave,onLeaveCancelled:l.afterLeave}),{default:()=>n(r)})})}("expand-x-transition",function(t="",e=!1){const a=e?"width":"height",o=`offset${s=a,s.charAt(0).toUpperCase()+s.slice(1)}`;var s;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[a]:t.style[a]}},enter(e){const a=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{}))},afterEnter:l,enterCancelled:l,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[a]:t.style[a]},t.style.overflow="hidden",t.style[a]=`${t[o]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[a]="0"))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),l(e)}function l(t){const e=t._initialStyle[a];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[a]=e),Reflect.deleteProperty(t,"_initialStyle")}}("",!0)),A=f((()=>y((()=>Promise.resolve().then((function(){return _}))),void 0)));export{w as C,j as E,b as F,T as S,B as a,P as b,S as c,x as d,E as e,L as f,C as g,O as h,H as i,A as j};
