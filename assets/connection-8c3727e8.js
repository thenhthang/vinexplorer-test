import{d as C,m as w,j as r,a8 as y,l as k,r as $,o as c,n as d,p as e,t as a,L as m,w as u,R as b,F as B,s as x,q as l,z as j,f as I}from"./index-81fd55b5.js";import{u as R}from"./connStore-2de2c80c.js";const S={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},q={class:"flex flex-wrap gap-4 items-center"},M={class:"card-title py-4"},P={class:"tabs tabs-boxed"},z={class:"flex flex-wrap gap-1 p-4"},D=["onClick"],F={class:"flex flex-wrap gap-1 p-4"},L={class:"join border border-primary"},N={class:"join-item px-2"},V=["max","placeholder"],E={class:"overflow-auto mt-5"},H=C({__name:"connection",props:["chain"],setup(T){const f=w(),s=R(),_=r([]),v=r(new y),p=r({}),i=r("registry");k(()=>{g(1),s.load()});function g(o){v.value.setPage(o),f.rpc.getIBCConnections(v.value).then(t=>{_.value=t.connections,p.value=t.pagination,t.pagination.total&&Number(t.pagination.total)>0&&s.showConnection(0)})}return(o,t)=>{const h=$("router-view");return c(),d("div",null,[e("div",S,[e("div",q,[e("h2",M,a(o.$t("ibc.title")),1),e("div",P,[e("a",{class:m(["tab",{"tab-active":i.value==="registry"}]),onClick:t[0]||(t[0]=n=>i.value="registry")},a(o.$t("ibc.registry")),3),e("a",{class:m(["tab",{"tab-active":i.value==="favorite"}]),onClick:t[1]||(t[1]=n=>i.value="favorite")},a(o.$t("module.favorite")),3)])]),e("div",null,[u(e("div",z,[(c(!0),d(B,null,x(l(s).commonIBCs,n=>(c(),d("span",{class:"btn btn-xs btn-link mr-1",onClick:U=>l(s).fetchConnection(n.path)},a(n.from)+" ⇌ "+a(n.to),9,D))),256))],512),[[b,i.value==="registry"]]),u(e("div",F,[e("div",L,[e("button",N,a(o.$t("ibc.connection_id"))+":",1),u(e("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>l(s).connectionId=n),type:"number",class:"input input-bordered w-40 join-item",min:"0",max:p.value.total||0,placeholder:`0~${p.value.total}`},null,8,V),[[j,l(s).connectionId]]),e("button",{class:"join-item btn btn-primary",onClick:t[3]||(t[3]=n=>l(s).showConnection())},a(o.$t("ibc.btn_apply")),1)])],512),[[b,i.value==="favorite"]])]),e("div",E,[(c(),I(h,{key:o.$route.fullPath}))])])])}}});export{H as default};