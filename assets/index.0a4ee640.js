import{a9 as t,d as e,v as n,x as a,$ as r,aE as o,j as i,D as l}from"./index.2b0223a6.js";function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=t(e({name:"ADivider",props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"}},setup:function(t,e){var u=e.slots,s=n("configProvider",a).getPrefixCls,d=r((function(){return s("divider",t.prefixCls)})),f=r((function(){var e,n=t.type,a=t.dashed,r=t.orientation,o=r.length>0?"-"+r:r,i=d.value;return c(e={},i,!0),c(e,"".concat(i,"-").concat(n),!0),c(e,"".concat(i,"-with-text").concat(o),u.default),c(e,"".concat(i,"-dashed"),!!a),e}));return function(){var t,e,n=o(null===(t=u.default)||void 0===t?void 0:t.call(u));return i("div",{class:f.value,role:"separator"},[n.length?i("span",{class:"".concat(d.value,"-inner-text")},(e=n,"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!l(e)?n:{default:function(){return[n]}})):null])}}}));export{u as D};
