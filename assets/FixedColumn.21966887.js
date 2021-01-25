import{_ as e}from"./index.cbfbe92e.js";import{d as i}from"./table.f64cc779.js";import{d as t,h as o,o as d,i as s,j as n,w as r}from"./index.2b0223a6.js";import{g as a}from"./index.5cc00d52.js";import{u as c}from"./useTable.f3f5c2c2.js";import"./index.42a936c1.js";import"./SearchOutlined.cd07db3b.js";import"./CheckOutlined.c235740e.js";import"./DownOutlined.2647a59c.js";import"./index.e5ffe887.js";import"./index.95b0d3ed.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.0d1494f4.js";import"./findIndex.1c918bfa.js";import"./isEqual.278dbd3b.js";import"./_baseProperty.74f89655.js";import"./toInteger.3a23a5d6.js";import"./index.b0a8084c.js";import"./RightOutlined.533f9bac.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./index.1706970f.js";import"./LeftOutlined.81d26ae1.js";import"./DoubleLeftOutlined.7daf16d3.js";import"./DoubleRightOutlined.a55f474b.js";import"./zh_CN.8094f4d6.js";import"./uuid.4f8dcc00.js";import"./index.a6163e31.js";import"./util.1c91d956.js";import"./DeleteOutlined.8598f1b8.js";import"./EyeOutlined.c34fd344.js";import"./index.320d0717.js";import"./index.95c10fda.js";import"./scrollTo.c1e0f75f.js";import"./transButton.9655cdf7.js";import"./CaretDownFilled.f3bd669d.js";import"./clickOutside.1adc0691.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./index.283b94b2.js";import"./index.193a18d3.js";import"./UpOutlined.3069b699.js";import"./index.427207d8.js";import"./useSortable.a748e96e.js";import"./useTimeout.cf1df41e.js";import"./useWindowSizeFn.85191285.js";import"./index.1c9a1d20.js";import"./useAttrs.c4906f5d.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./FullscreenOutlined.6e44ab46.js";import"./index.0a4ee640.js";import"./SettingOutlined.4a907ccc.js";import"./useExpose.7c053ca8.js";import"./useForm.fcadc8c7.js";import"./index.ba0a5ce4.js";import"./index.d959b37a.js";import"./colors.66ca87a3.js";import"./RedoOutlined.00629dbc.js";import"./Tree.4124212e.js";import"./index.febfd785.js";import"./index.94cbe5a2.js";import"./download.cd7652ef.js";const m=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var p=t({components:{BasicTable:e,TableAction:a},setup(){const[e]=c({title:"TableAction组件及固定列示例",api:i,columns:m,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const l={class:"p-4"};p.render=function(e,i,t,a,c,m){const p=o("TableAction"),j=o("BasicTable");return d(),s("div",l,[n(j,{onRegister:e.registerTable},{action:r((({record:i})=>[n(p,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,i)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default p;
