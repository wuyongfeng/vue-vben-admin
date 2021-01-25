import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.2b0223a6.js";import{A as n}from"./index.febfd785.js";import{u as p}from"./index.08b82f17.js";import d from"./Drawer1.902c0e85.js";import m from"./Drawer2.1b1df2b7.js";import c from"./Drawer3.c6fc7f11.js";import j from"./Drawer4.380587a9.js";import l from"./Drawer5.9ae39b49.js";import{_ as f}from"./index.2eb743af.js";import"./vendor.0d1494f4.js";import"./index.7d4f60fb.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./RightOutlined.533f9bac.js";import"./index.95c10fda.js";import"./useTimeout.cf1df41e.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./ArrowLeftOutlined.668881e5.js";import"./useAttrs.c4906f5d.js";import"./isEqual.278dbd3b.js";import"./index.5cc00d52.js";import"./index.95b0d3ed.js";import"./responsiveObserve.c545f1cc.js";import"./index.e5ffe887.js";import"./findIndex.1c918bfa.js";import"./_baseProperty.74f89655.js";import"./toInteger.3a23a5d6.js";import"./index.ba0a5ce4.js";import"./index.42a936c1.js";import"./SearchOutlined.cd07db3b.js";import"./CheckOutlined.c235740e.js";import"./DownOutlined.2647a59c.js";import"./index.283b94b2.js";import"./index.193a18d3.js";import"./UpOutlined.3069b699.js";import"./index.427207d8.js";import"./EyeOutlined.c34fd344.js";import"./index.d959b37a.js";import"./colors.66ca87a3.js";import"./RedoOutlined.00629dbc.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./Tree.4124212e.js";import"./util.1c91d956.js";import"./uuid.4f8dcc00.js";import"./index.a6163e31.js";import"./DeleteOutlined.8598f1b8.js";import"./index.1c9a1d20.js";import"./useWindowSizeFn.85191285.js";import"./FullscreenOutlined.6e44ab46.js";import"./index.0a4ee640.js";import"./index.320d0717.js";import"./index.94cbe5a2.js";import"./LeftOutlined.81d26ae1.js";import"./download.cd7652ef.js";import"./useForm.fcadc8c7.js";import"./index.a32f4879.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";var u=e({components:{Alert:n,PageWrapper:f,Drawer1:d,Drawer2:m,Drawer3:c,Drawer4:j,Drawer5:l},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:d}]=p(),[m,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:m,openDrawer5:c,send:function(){d(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const w=a("打开Drawer"),D=a("打开Drawer"),b=a("打开Drawer"),g=a("打开Drawer并传递数据"),x=a("打开详情Drawer");u.render=function(e,a,n,p,d,m){const c=r("Alert"),j=r("a-button"),l=r("Drawer1"),f=r("Drawer2"),u=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[w])),_:1},8,["onClick"]),s(c,{message:"内外同时控制显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(c,{message:"自适应高度/显示footer","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[b])),_:1}),s(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[g])),_:1},8,["onClick"]),s(c,{message:"详情页模式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(l,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(u,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default u;
