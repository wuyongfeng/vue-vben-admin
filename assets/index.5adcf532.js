import{d as e,f as t,dx as a,$ as s,dy as o,cp as r,cq as n,h as i,o as d,i as l,bw as p,j as u,l as m,m as c}from"./index.2b0223a6.js";import{A as f}from"./index.febfd785.js";import j from"./CurrentPermissionMode.aa07a9ee.js";import{_ as R}from"./index.2eb743af.js";import"./vendor.0d1494f4.js";import"./index.0a4ee640.js";import"./index.a32f4879.js";import"./index.b0a8084c.js";import"./RightOutlined.533f9bac.js";import"./EllipsisOutlined.abfccc6f.js";import"./types.c82b6381.js";import"./isEqual.278dbd3b.js";import"./toInteger.3a23a5d6.js";import"./DownOutlined.2647a59c.js";import"./index.95c10fda.js";import"./index.a0eacfb8.js";import"./usePageContext.4951455d.js";import"./transButton.9655cdf7.js";import"./ArrowLeftOutlined.668881e5.js";var g=e({components:{Alert:f,CurrentPermissionMode:j,PageWrapper:R},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:a,isSuper:s((()=>t.getRoleListState.includes(a.SUPER))),isTest:s((()=>t.getRoleListState.includes(a.TEST))),changeRole:e}}});const b=p("data-v-9a73aaae");r("data-v-9a73aaae");const E=c(" 当前角色: "),S={class:"mt-4"},x=c(" 权限切换(请先切换权限模式为前端角色权限模式): ");n();const y=b(((e,t,a,s,o,r)=>{const n=i("CurrentPermissionMode"),p=i("Alert"),f=i("a-button"),j=i("a-button-group"),R=i("PageWrapper");return d(),l(R,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:b((()=>[u(n),u("p",null,[E,u("a",null,m(e.userStore.getRoleListState),1)]),u(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",S,[x,u(j,null,{default:b((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:b((()=>[c(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:b((()=>[c(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));g.render=y,g.__scopeId="data-v-9a73aaae";export default g;
