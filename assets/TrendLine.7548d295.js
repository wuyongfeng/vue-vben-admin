import{u as r}from"./useECharts.9421cc91.js";import{b as e}from"./props.f48aca0b.js";import{d as o,r as t,q as a,o as i,i as s}from"./index.2b0223a6.js";import"./useTimeout.cf1df41e.js";import"./vendor.0d1494f4.js";var n=o({props:e,setup(){const e=t(null),{setOptions:o,echarts:i}=r(e);return a((()=>{o({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{show:!1},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{color:"#5B8FF9"},areaStyle:{color:new i.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:1,color:"rgba(118,168,248, 0)"}],!1),shadowColor:"rgba(118,168,248, 0.9)",shadowBlur:20},data:[134,330,132,101,90,230,210,150,230,400,232,234],animationDuration:3e3}]})})),{chartRef:e}}});n.render=function(r,e,o,t,a,n){return i(),s("div",{ref:"chartRef",style:{height:r.height,width:r.width}},null,4)};export default n;
