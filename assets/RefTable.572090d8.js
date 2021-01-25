import{_ as e}from"./index.cbfbe92e.js";import{getBasicColumns as i,getBasicShortColumns as t}from"./tableData.7aa0192c.js";import{d as o,r as s,g as n,e as a,h as c,o as l,i as r,j as d,w as m,m as p}from"./index.2b0223a6.js";import{d as u}from"./table.f64cc779.js";import"./index.42a936c1.js";import"./SearchOutlined.cd07db3b.js";import"./CheckOutlined.c235740e.js";import"./DownOutlined.2647a59c.js";import"./index.5cc00d52.js";import"./index.95b0d3ed.js";import"./responsiveObserve.c545f1cc.js";import"./index.e5ffe887.js";import"./vendor.0d1494f4.js";import"./findIndex.1c918bfa.js";import"./isEqual.278dbd3b.js";import"./_baseProperty.74f89655.js";import"./toInteger.3a23a5d6.js";import"./index.ba0a5ce4.js";import"./index.283b94b2.js";import"./index.193a18d3.js";import"./UpOutlined.3069b699.js";import"./index.427207d8.js";import"./EyeOutlined.c34fd344.js";import"./index.d959b37a.js";import"./colors.66ca87a3.js";import"./RightOutlined.533f9bac.js";import"./RedoOutlined.00629dbc.js";import"./index.b0a8084c.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./Tree.4124212e.js";import"./util.1c91d956.js";import"./useAttrs.c4906f5d.js";import"./index.95c10fda.js";import"./index.febfd785.js";import"./uuid.4f8dcc00.js";import"./index.a6163e31.js";import"./DeleteOutlined.8598f1b8.js";import"./index.1c9a1d20.js";import"./useTimeout.cf1df41e.js";import"./useWindowSizeFn.85191285.js";import"./index.0438ed90.js";import"./index.91533b9d.js";import"./domUtils.3aeba9b0.js";import"./_stringToArray.415ab55d.js";import"./useScrollTo.0326b6fc.js";import"./animation.b863c4a3.js";import"./FullscreenOutlined.6e44ab46.js";import"./index.0a4ee640.js";import"./index.320d0717.js";import"./index.94cbe5a2.js";import"./LeftOutlined.81d26ae1.js";import"./download.cd7652ef.js";import"./index.1706970f.js";import"./DoubleLeftOutlined.7daf16d3.js";import"./DoubleRightOutlined.a55f474b.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.9655cdf7.js";import"./CaretDownFilled.f3bd669d.js";import"./clickOutside.1adc0691.js";import"./useSortable.a748e96e.js";import"./SettingOutlined.4a907ccc.js";import"./useExpose.7c053ca8.js";import"./useForm.fcadc8c7.js";var f=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function c(){const i=a(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:u,columns:i(),changeLoading:function(){c().setLoading(!0),setTimeout((()=>{c().setLoading(!1)}),1e3)},changeColumns:function(){c().setColumns(t())},reloadTable:function(){c().setColumns(i()),c().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){c().setPagination({current:2}),c().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){c().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){c().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},g=p("还原"),C=p("开启loading"),x=p("更改Columns"),k=p("获取Columns"),w=p("获取表格数据"),O=p("跳转到第2页"),R={class:"mb-4"},S=p("获取选中行"),_=p("获取选中行Key"),y=p("设置选中行"),T=p("清空选中行"),h=p("获取分页信息");f.render=function(e,i,t,o,s,n){const a=c("a-button"),p=c("BasicTable");return l(),r("div",j,[d("div",b,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[g])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[O])),_:1},8,["onClick"])]),d("div",R,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[S])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default f;
