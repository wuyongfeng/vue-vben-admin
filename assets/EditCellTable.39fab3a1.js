import{_ as e,a as t}from"./index.cbfbe92e.js";import{o as i}from"./select.b1c6bc0e.js";import{d}from"./table.f64cc779.js";import{d as o,h as n,o as s,i as r,j as a}from"./index.2b0223a6.js";import{u as p}from"./useTable.f3f5c2c2.js";import"./index.42a936c1.js";import"./SearchOutlined.cd07db3b.js";import"./CheckOutlined.c235740e.js";import"./DownOutlined.2647a59c.js";import"./index.5cc00d52.js";import"./index.95b0d3ed.js";import"./responsiveObserve.c545f1cc.js";import"./index.e5ffe887.js";import"./vendor.0d1494f4.js";import"./findIndex.1c918bfa.js";import"./isEqual.278dbd3b.js";import"./_baseProperty.74f89655.js";import"./toInteger.3a23a5d6.js";import"./index.ba0a5ce4.js";import"./index.283b94b2.js";import"./index.193a18d3.js";import"./UpOutlined.3069b699.js";import"./index.427207d8.js";import"./EyeOutlined.c34fd344.js";import"./index.d959b37a.js";import"./colors.66ca87a3.js";import"./RightOutlined.533f9bac.js";import"./RedoOutlined.00629dbc.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./Tree.4124212e.js";import"./util.1c91d956.js";import"./useAttrs.c4906f5d.js";import"./index.95c10fda.js";import"./index.febfd785.js";import"./uuid.4f8dcc00.js";import"./index.a6163e31.js";import"./DeleteOutlined.8598f1b8.js";import"./index.1c9a1d20.js";import"./useTimeout.cf1df41e.js";import"./useWindowSizeFn.85191285.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./FullscreenOutlined.6e44ab46.js";import"./index.0a4ee640.js";import"./index.320d0717.js";import"./index.94cbe5a2.js";import"./LeftOutlined.81d26ae1.js";import"./download.cd7652ef.js";import"./index.1706970f.js";import"./DoubleLeftOutlined.7daf16d3.js";import"./DoubleRightOutlined.a55f474b.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.9655cdf7.js";import"./CaretDownFilled.f3bd669d.js";import"./clickOutside.1adc0691.js";import"./useSortable.a748e96e.js";import"./SettingOutlined.4a907ccc.js";import"./useExpose.7c053ca8.js";import"./useForm.fcadc8c7.js";const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:i},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var c=o({components:{BasicTable:e,EditTableHeaderIcon:t},setup(){const[e]=p({title:"可编辑单元格示例",api:d,columns:m,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const l={class:"p-4"};c.render=function(e,t,i,d,o,p){const m=n("BasicTable");return s(),r("div",l,[a(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default c;
