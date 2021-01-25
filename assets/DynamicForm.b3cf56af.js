import{_ as e}from"./index.5cc00d52.js";import{a as i}from"./index.0438ed90.js";import{_ as o}from"./index.2eb743af.js";import{d as l,h as t,o as s,i as n,w as a,j as d,m as p}from"./index.2b0223a6.js";import{u as r}from"./useForm.fcadc8c7.js";import"./index.95b0d3ed.js";import"./responsiveObserve.c545f1cc.js";import"./index.e5ffe887.js";import"./vendor.0d1494f4.js";import"./findIndex.1c918bfa.js";import"./isEqual.278dbd3b.js";import"./_baseProperty.74f89655.js";import"./toInteger.3a23a5d6.js";import"./index.ba0a5ce4.js";import"./index.42a936c1.js";import"./SearchOutlined.cd07db3b.js";import"./CheckOutlined.c235740e.js";import"./DownOutlined.2647a59c.js";import"./index.283b94b2.js";import"./index.193a18d3.js";import"./UpOutlined.3069b699.js";import"./index.427207d8.js";import"./EyeOutlined.c34fd344.js";import"./index.d959b37a.js";import"./colors.66ca87a3.js";import"./RightOutlined.533f9bac.js";import"./RedoOutlined.00629dbc.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./Tree.4124212e.js";import"./util.1c91d956.js";import"./useAttrs.c4906f5d.js";import"./index.95c10fda.js";import"./index.febfd785.js";import"./uuid.4f8dcc00.js";import"./index.a6163e31.js";import"./DeleteOutlined.8598f1b8.js";import"./index.1c9a1d20.js";import"./useTimeout.cf1df41e.js";import"./useWindowSizeFn.85191285.js";import"./FullscreenOutlined.6e44ab46.js";import"./index.0a4ee640.js";import"./index.320d0717.js";import"./index.94cbe5a2.js";import"./LeftOutlined.81d26ae1.js";import"./download.cd7652ef.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./index.91533b9d.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./index.a32f4879.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";import"./ArrowLeftOutlined.668881e5.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],m=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:i=>{e.f2=i.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:i})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:i}=e;await i()}})}];var f=l({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const[e,{setProps:i,updateSchema:o,appendSchemaByField:l,removeSchemaByFiled:t}]=r({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[s]=r({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,register1:s,schemas:c,setProps:i,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){l({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){t("field11")}}}});const b={class:"mb-4"},u=p("更改字段3label"),j=p("同时更改字段3,4label"),h=p("往字段3后面插入字段10"),x=p("删除字段11");f.render=function(e,i,o,l,p,r){const c=t("a-button"),m=t("BasicForm"),f=t("CollapseContainer"),P=t("PageWrapper");return s(),n(P,{title:"动态表单示例"},{default:a((()=>[d("div",b,[d(c,{onClick:e.changeLabel3,class:"mr-2"},{default:a((()=>[u])),_:1},8,["onClick"]),d(c,{onClick:e.changeLabel34,class:"mr-2"},{default:a((()=>[j])),_:1},8,["onClick"]),d(c,{onClick:e.appendField,class:"mr-2"},{default:a((()=>[h])),_:1},8,["onClick"]),d(c,{onClick:e.deleteField,class:"mr-2"},{default:a((()=>[x])),_:1},8,["onClick"])]),d(f,{title:"动态表单示例,动态根据表单内其他值改变"},{default:a((()=>[d(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),d(f,{class:"mt-5",title:"componentProps动态改变"},{default:a((()=>[d(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default f;
