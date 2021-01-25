import{a as s,_ as o}from"./index.0438ed90.js";import{_ as t}from"./index.2eb743af.js";import{d as r,r as a,e as l,cp as e,cq as i,h as c,o as n,i as d,j as p,aL as m,aM as f,l as u,bw as j,m as b}from"./index.2b0223a6.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./RightOutlined.533f9bac.js";import"./index.95c10fda.js";import"./useTimeout.cf1df41e.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./index.a32f4879.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./isEqual.278dbd3b.js";import"./toInteger.3a23a5d6.js";import"./DownOutlined.2647a59c.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";import"./ArrowLeftOutlined.668881e5.js";import"./vendor.0d1494f4.js";var x=r({components:{CollapseContainer:s,ScrollContainer:o,PageWrapper:t},setup(){const s=a(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const _=j("data-v-6abcde9e");e("data-v-6abcde9e");const C={class:"my-4"},T=b("滚动到100px位置"),v=b("滚动到800px位置"),g=b("滚动到顶部"),w=b("滚动到底部"),k={class:"scroll-wrap"},y={class:"p-3"};i();const B=_(((s,o,t,r,a,l)=>{const e=c("a-button"),i=c("ScrollContainer"),j=c("PageWrapper");return n(),d(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:_((()=>[p("div",C,[p(e,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:_((()=>[T])),_:1}),p(e,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:_((()=>[v])),_:1}),p(e,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:_((()=>[g])),_:1}),p(e,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:_((()=>[w])),_:1})]),p("div",k,[p(i,{class:"mt-4",ref:"scrollRef"},{default:_((()=>[p("ul",y,[(n(),d(m,null,f(100,(s=>p("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},u(s),1))),64))])])),_:1},512)])])),_:1})}));x.render=B,x.__scopeId="data-v-6abcde9e";export default x;
