import{B as e,t}from"./data.5ccbcc62.js";import{a}from"./index.0438ed90.js";import{_ as r}from"./index.2eb743af.js";import{d as s,h as i,o,i as d,w as l,j as n}from"./index.2b0223a6.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./RightOutlined.533f9bac.js";import"./index.95c10fda.js";import"./useTimeout.cf1df41e.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./index.a32f4879.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./isEqual.278dbd3b.js";import"./toInteger.3a23a5d6.js";import"./DownOutlined.2647a59c.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";import"./ArrowLeftOutlined.668881e5.js";import"./vendor.0d1494f4.js";var p=s({components:{BasicTree:e,CollapseContainer:a,PageWrapper:r},setup:()=>({treeData:t})});const m={class:"flex"};p.render=function(e,t,a,r,s,p){const c=i("BasicTree"),j=i("CollapseContainer"),f=i("PageWrapper");return o(),d(f,{title:"Tree基础示例"},{default:l((()=>[n("div",m,[n(j,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:l((()=>[n(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),n(j,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:l((()=>[n(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),n(j,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:l((()=>[n(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])])),_:1})};export default p;
