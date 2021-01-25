import{P as t,a9 as e,d as n,O as o,v as i,x as r,E as s,d6 as a,y as c,j as l,a3 as u,D as d,a4 as f,aV as g,aW as p,bg as v,h,o as m,i as b,k as T,aL as k}from"./index.2b0223a6.js";import{s as y,g as S}from"./scrollTo.c1e0f75f.js";import"./vendor.0d1494f4.js";function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function O(){return window}var j=n({name:"ABackTop",mixins:[o],inheritAttrs:!1,props:w(w({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:i("configProvider",r)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||O;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||O)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;y(0,{getContainer:void 0===e?O:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,n=S((void 0===e?O:e)(),!0);this.setState({visible:n>t})}},render:function(){var t,e,n=this.prefixCls,o=this.$slots,i=(0,this.configProvider.getPrefixCls)("back-top",n),r=c(i,this.$attrs.class),s=l("div",{class:"".concat(i,"-content")},[l("div",{class:"".concat(i,"-icon")},null)]),a=w(w({},this.$attrs),{onClick:this.scrollToTop,class:r}),g=this.visible?l("div",a,[(null===(t=o.default)||void 0===t?void 0:t.call(o))||s]):null,p=u("fade");return l(f,p,"function"==typeof(e=g)||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)?g:{default:function(){return[g]}})}}),E=n({name:"LayoutFeatures",components:{BackTop:e(j),LayoutLockPage:g((()=>p((()=>import("./index.953e08d1.js")),["/assets/index.953e08d1.js","/assets/LockPage.20c4c75b.js","/assets/LockPage.426e5e92.css","/assets/index.2b0223a6.js","/assets/index.4e23aa17.css","/assets/vendor.0d1494f4.js","/assets/vendor.4a5fa02d.css","/assets/index.427207d8.js","/assets/index.771b84bb.css","/assets/SearchOutlined.cd07db3b.js","/assets/EyeOutlined.c34fd344.js","/assets/index.febfd785.js","/assets/index.17a17641.css","/assets/header.9f640cf1.js","/assets/LockOutlined.a5e86200.js"]))),SettingDrawer:g((()=>p((()=>import("./index.3e5b8729.js").then((function(t){return t.i}))),["/assets/index.3e5b8729.js","/assets/index.5b72538f.css","/assets/index.2b0223a6.js","/assets/index.4e23aa17.css","/assets/vendor.0d1494f4.js","/assets/vendor.4a5fa02d.css","/assets/index.0a4ee640.js","/assets/index.2b38113f.css","/assets/index.08b82f17.js","/assets/index.fb4544d3.css","/assets/index.7d4f60fb.js","/assets/index.864ac48e.css","/assets/index.0438ed90.js","/assets/index.14d351de.css","/assets/index.91533b9d.js","/assets/index.121e7eba.css","/assets/domUtils.3aeba9b0.js","/assets/_stringToArray.415ab55d.js","/assets/RightOutlined.533f9bac.js","/assets/index.95c10fda.js","/assets/index.20066e29.css","/assets/useTimeout.cf1df41e.js","/assets/useScrollTo.0326b6fc.js","/assets/animation.b863c4a3.js","/assets/ArrowLeftOutlined.668881e5.js","/assets/useAttrs.c4906f5d.js","/assets/isEqual.278dbd3b.js","/assets/useHeaderSetting.306c855b.js","/assets/SettingOutlined.4a907ccc.js"])))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e}=v();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:e}}});E.render=function(t,e,n,o,i,r){const s=h("LayoutLockPage"),a=h("BackTop"),c=h("SettingDrawer");return m(),b(k,null,[l(s),t.getUseOpenBackTop?(m(),b(a,{key:0,target:t.getTarget},null,8,["target"])):T("",!0),t.getShowSettingButton?(m(),b(c,{key:1})):T("",!0)],64)};export default E;
