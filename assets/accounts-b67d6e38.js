import{q as P,R as g,d as K,x as q,L as U,b as k,s as N,r as W,o as d,c as i,e,t as r,g as u,n as y,F as w,i as C,B as S,f as M,P as $,K as Q,y as B,S as j,z as X,D as Y,I as Z,T as D,C as ee}from"./index-144c56b5.js";function se(){const A=[];for(let p=0;p<localStorage.length;p++){const _=localStorage.key(p);if(_!=null&&_.startsWith("m/44")){const n=JSON.parse(localStorage.getItem(_)||"");n&&A.push(n)}}return A}function te(A){const p=P(),_=[];return A.forEach(n=>{Object.values(p.chains).forEach(v=>{var b,m;const{data:f}=g.fromBech32(n.cosmosAddress);_.push({chainName:v.chainName,logo:v.logo,address:g.toBech32(v.bech32Prefix,f),coinType:v.coinType,compatiable:n.hdPath.indexOf(v.coinType)>0,endpoint:(m=(b=v.endpoints.rest)==null?void 0:b.at(0))==null?void 0:m.address})})}),_}const oe={class:"overflow-x-auto w-full rounded-md"},ae={class:"flex flex-wrap justify-between bg-base-100 p-5"},le=D('<div class="min-w-0"><h2 class="text-2xl font-bold leading-7 sm:!truncate sm:!text-3xl sm:!tracking-tight"> Accounts </h2><div class="mt-1 flex flex-col sm:!mt-0 sm:!flex-row sm:!flex-wrap sm:!space-x-6"><div class="mt-2 items-center text-sm text-gray-500 hidden md:!flex"><svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd"></path><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path></svg> Manage all your assets in one page </div></div></div>',1),ne={class:"flex flex-col text-right"},ce=e("span",null,"Total Value",-1),de={class:"text-xl text-success font-bold"},ie={class:"overflow-x-auto"},re={class:"bg-base-100 rounded-md my-5 py-5"},ue={class:"flex justify-self-center"},he={class:"mx-2 p-2"},me=["fill"],pe=D('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M437,12.3C437,5.5,431.5,0,424.7,0H126.3C84.4,0,50.4,34.1,50.4,75.9v335.7c0,41.9,34.1,75.9,75.9,75.9h298.5 c6.8,0,12.3-5.5,12.3-12.3V139.6c0-6.8-5.5-12.3-12.3-12.3H126.3c-28.3,0-51.4-23.1-51.4-51.4S98,24.5,126.3,24.5h298.5 C431.5,24.5,437,19,437,12.3z M126.3,151.8h286.2V463H126.3c-28.3,0-51.4-23.1-51.4-51.4V131.7 C88.4,144.2,106.5,151.8,126.3,151.8z"></path><path d="M130.5,64.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h280.1c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H130.5z"></path><path d="M178,397.7c6.3,2.4,13.4-0.7,15.8-7.1l17.9-46.8h62.7c0.5,0,0.9-0.1,1.3-0.1l17.9,46.9c1.9,4.9,6.5,7.9,11.4,7.9 c1.5,0,2.9-0.3,4.4-0.8c6.3-2.4,9.5-9.5,7.1-15.8l-54-141.2c-3-7.9-10.4-13-18.8-13c-8.4,0-15.8,5.1-18.8,13l-54,141.2 C168.5,388.2,171.7,395.2,178,397.7z M243.7,260l22.7,59.3h-45.3L243.7,260z"></path></g></g></g>',3),ve=[pe],_e={class:"max-w-md overflow-hidden"},fe={class:"font-bold"},ge={class:"dropdown"},be={tabindex:"0",class:"cursor-pointer"},xe={tabindex:"0",class:"-left-14 dropdown-content menu p-2 shadow bg-base-200 rounded-box z-50"},we=["src"],Ce={class:"font-bold capitalize"},ye=e("br",null,null,-1),ke={class:"text-xs font-normal sm:w-16 sm:overflow-hidden"},Ne=["onClick"],Se=e("div",{class:"p-4 bg-base-200 mt-2"},"Delegations",-1),Ae={class:"!menu w-full"},Ve={key:0},Me=["src"],Be={class:"font-bold"},ze=e("br",null,null,-1),$e={class:"float-right text-right"},Oe=e("br",null,null,-1),Te=e("div",{class:"p-4 bg-base-200"},"Balances",-1),Ie={class:"!menu w-full"},Ee=["src"],je={class:"font-bold"},Pe=e("br",null,null,-1),De={class:"float-right text-right"},Re=e("br",null,null,-1),Fe={class:"text-center bg-base-100 rounded-md my-4 p-4"},He=e("a",{href:"#address-modal",class:"inline-flex items-center ml-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},[e("svg",{class:"-ml-0.5 mr-1.5 h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"}),e("path",{d:"M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"})]),S(" Import Address ")],-1),Le=e("span",{class:"btn btn-link"},"Add chain to Keplr",-1),Je={class:"modal",id:"address-modal"},Ge={class:"modal-box"},Ke=e("a",{href:"#",class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"},"✕",-1),qe=e("h3",{class:"font-bold text-lg mb-2"},"Derive Account From Address",-1),Ue={class:"hidden input-group input-group-sm w-full"},We=e("span",null,"Connected",-1),Qe=["value"],Xe={class:"overflow-hidden"},Ye={class:"menu"},Ze=["onClick"],es={class:"overflow-hidden flex flex-col"},ss={class:"font-bold"},ts={class:"text-xs"},os={class:"my-2 p-2"},as={class:"py-4 max-h-72 overflow-y-auto"},ls={class:"table table-compact"},ns={class:"flex items-center space-x-2"},cs={class:"avatar"},ds={class:"mask mask-squircle w-8 h-8"},is=["src","alt"],rs=["data-tip"],us={class:"text-xs opacity-50 hidden md:!block"},hs={class:"text-right"},ms=["onClick"],ps={class:"modal-action mt-2 mb-0"},_s=K({__name:"accounts",setup(A){const p=P(),_=q(),n=U(),v=k(""),f=k({}),b=k("step1"),m=k(JSON.parse(localStorage.getItem("imported-addresses")||"{}")),z=k({}),O=k({});Object.values(m.value).forEach(s=>{let o=Promise.resolve();for(let a=0;a<s.length;a++)o=o.then(()=>new Promise(t=>{s[a].endpoint?E(s[a].endpoint||"",s[a].address).finally(()=>t()):t()}))});const V=N(()=>{let s=[];return Object.values(m.value).forEach(o=>{var t;const a=o.map(c=>{const x=O.value[c.address];let l={};return x&&x.length>0&&(x.forEach(h=>{l.amount=(Number(h.balance.amount)+Number(l.amount||0)).toFixed(),l.denom=h.balance.denom}),l.value=n.tokenValueNumber(l),l.change24h=n.priceChanges(l.denom)),{account:c,delegation:l,balances:z.value[c.address]?z.value[c.address].map(h=>{const G=n.tokenValueNumber(h);return{amount:h.amount,denom:h.denom,value:G,change24h:n.priceChanges(h.denom)}}):[]}});o.at(0)&&s.push({key:((t=o.at(0))==null?void 0:t.address)||" ",subaccounts:a})}),s}),R=N(()=>V.value.flatMap(s=>s.subaccounts.map(o=>o.account.address))),F=N(()=>V.value.flatMap(s=>s.subaccounts).reduce((s,o)=>(s+=o.delegation.value||0,o.balances.forEach(a=>{s+=a.value||0}),s),0)),T=N(()=>V.value.flatMap(s=>s.subaccounts).reduce((s,o)=>(s+=(o.delegation.change24h||0)*(o.delegation.value||0)/100,o.balances.forEach(a=>{s+=(a.change24h||0)*(a.value||0)/100}),s),0)),I=N(()=>{const s=se();if(Object.values(m.value).forEach(o=>{const[a]=o;if(a){const{data:t}=g.fromBech32(a.address),c=g.toHex(t);s.findIndex(x=>g.toHex(g.fromBech32(x.cosmosAddress).data)===c)===-1&&s.push({cosmosAddress:a.address,hdPath:`m/44/${a.coinType}/0'/0/0`})}}),v.value){const{prefix:o,data:a}=g.fromBech32(v.value),t=Object.values(p.chains).find(c=>c.bech32Prefix===o);t&&s.push({cosmosAddress:v.value,hdPath:`m/44/${t.coinType}/0'/0/0`})}return!f.value.cosmosAddress&&s.length>0&&(f.value=s[0]),s}),H=N(()=>f.value.cosmosAddress?te([f.value]).filter(s=>!R.value.includes(s.address)):[]);function L(s){const o={};Object.keys(m.value).forEach(a=>{const t=m.value[a].filter(c=>c.address!==s);t.length>0&&(o[a]=t)}),m.value=o,localStorage.setItem("imported-addresses",JSON.stringify(m.value))}async function J(s){var t;const{data:o}=g.fromBech32(s.address),a=g.toBase64(o);if(m.value[a]){if(m.value[a].findIndex(c=>c.address===s.address)>-1)return;m.value[a].push(s)}else m.value[a]=[s];(t=p==null?void 0:p.favoriteMap)!=null&&t[s.chainName]||(p.favoriteMap[s.chainName]=!0,window.localStorage.setItem("favoriteMap",JSON.stringify(p.favoriteMap))),s.endpoint&&E(s.endpoint,s.address),localStorage.setItem("imported-addresses",JSON.stringify(m.value))}async function E(s,o){const a=ee.newDefault(s);await a.getBankBalances(o).then(t=>{z.value[o]=t.balances.filter(c=>c.denom.length<10)}),await a.getStakingDelegations(o).then(t=>{O.value[o]=t.delegation_responses})}return(s,o)=>{const a=W("RouterLink");return d(),i("div",null,[e("div",oe,[e("div",ae,[le,e("div",ne,[ce,e("span",de,"$"+r(u(n).formatNumber(F.value,"0,0.[00]")),1),e("span",{class:y(["text-sm",u(n).color(T.value)])},r(u(n).formatNumber(T.value,"+0,0.[00]")),3)])])]),e("div",ie,[(d(!0),i(w,null,C(V.value,({key:t,subaccounts:c})=>{var x;return d(),i("div",re,[e("div",ue,[e("div",he,[(d(),i("svg",{fill:((x=u(_).current)==null?void 0:x.themeColor)||"#666CFF",height:"28px",width:"28px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 487.5 487.5","xml:space":"preserve"},ve,8,me))]),e("div",null,[e("div",_e,[e("div",fe,r(t),1)]),e("div",ge,[e("label",be,r(c.length)+" addresses",1),e("ul",xe,[(d(!0),i(w,null,C(c,l=>(d(),i("li",null,[e("a",null,[e("img",{src:l.account.logo,class:"w-8 h-8 mr-2"},null,8,we),e("span",Ce,[S(r(l.account.chainName)+" ",1),ye,e("span",ke,r(l.account.address),1)]),e("label",{class:"btn btn-xs !btn-error",onClick:h=>L(l.account.address)},"Remove",8,Ne)])]))),256))])])])]),Se,e("div",null,[e("ul",Ae,[(d(!0),i(w,null,C(c,l=>(d(),i("div",null,[l.delegation.amount?(d(),i("li",Ve,[M(a,{to:`/${l.account.chainName}/account/${l.account.address}`},{default:$(()=>[e("img",{src:l.account.logo,class:"w-6 h-6 mr-2"},null,8,Me),e("span",Be,[S(r(u(n).formatToken(l.delegation,!0,"0,0.[00]","all"))+" ",1),ze,e("span",{class:y(["text-xs",u(n).color(l.delegation.change24h)])},r(u(n).formatNumber(l.delegation.change24h,"+0.[00]"))+"%",3)]),e("span",$e,[S("$"+r(u(n).formatNumber(l.delegation.value,"0,0.[00]")),1),Oe,e("span",{class:y(["text-xs",u(n).color(l.delegation.change24h)])},r(u(n).formatNumber((l.delegation.change24h||0)*(l.delegation.value||0)/100,"+0,0.[00]")),3)])]),_:2},1032,["to"])])):Q("",!0)]))),256))])]),Te,e("div",null,[e("ul",Ie,[(d(!0),i(w,null,C(c,l=>(d(),i("div",null,[(d(!0),i(w,null,C(l.balances,h=>(d(),i("li",null,[M(a,{to:`/${l.account.chainName}/account/${l.account.address}`},{default:$(()=>[e("img",{src:l.account.logo,class:"w-6 h-6 mr-2"},null,8,Ee),e("span",je,[S(r(u(n).formatToken(h,!0,"0,0.[00]","all"))+" ",1),Pe,e("span",{class:y(["text-xs",u(n).color(h.change24h)])},r(u(n).formatNumber(h.change24h,"+0.[00]"))+"%",3)]),e("span",De,[S("$"+r(u(n).formatNumber(h.value,"0,0.[00]")),1),Re,e("span",{class:y(["text-xs",u(n).color(h.change24h)])},r(u(n).formatNumber((h.change24h||0)*(h.value||0)/100,"+0,0.[00]")),3)])]),_:2},1032,["to"])]))),256))]))),256))])])])}),256)),e("div",Fe,[He,M(a,{to:"/wallet/keplr"},{default:$(()=>[Le]),_:1})])]),e("div",Je,[e("div",Ge,[Ke,qe,B(e("div",null,[e("label",Ue,[We,B(e("select",{"onUpdate:modelValue":o[0]||(o[0]=t=>f.value=t),class:"select select-bordered select-sm w-3/4"},[(d(!0),i(w,null,C(I.value,t=>(d(),i("option",{value:t},[e("span",Xe,r(t.cosmosAddress),1)],8,Qe))),256))],512),[[X,f.value]])]),e("ul",Ye,[(d(!0),i(w,null,C(I.value,t=>(d(),i("li",{onClick:c=>{f.value=t,b.value="step2"}},[e("a",null,[e("label",es,[e("div",ss,r(t.cosmosAddress),1),e("div",ts,r(t.hdPath),1)])])],8,Ze))),256))]),e("label",os,[B(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>v.value=t),class:"input input-bordered w-full input-sm",placeholder:"Input an address",onChange:o[2]||(o[2]=t=>b.value="step2")},null,544),[[Y,v.value]])])],512),[[j,b.value==="step1"]]),B(e("div",as,[e("table",ls,[(d(!0),i(w,null,C(H.value,t=>(d(),i("tr",null,[e("td",null,[e("div",ns,[e("div",cs,[e("div",ds,[e("img",{src:t.logo,alt:t.address},null,8,is)])]),e("div",null,[e("div",{class:y(["tooltip",t.compatiable?"tooltip-success":"tooltip-error"]),"data-tip":`Coin Type: ${t.coinType}`},[e("div",{class:y(["font-bold capitalize",t.compatiable?"text-green-500":"text-red-500"])},r(t.chainName),3)],10,rs),e("div",us,r(t.address),1)])])]),e("td",hs,[e("span",{class:"btn !bg-yes !border-yes btn-xs text-white",onClick:c=>J(t)},[M(u(Z),{icon:"mdi:plus"})],8,ms)])]))),256))])],512),[[j,b.value==="step2"]]),e("div",ps,[e("a",{href:"#",class:"btn btn-primary btn-sm",onClick:o[3]||(o[3]=t=>b.value="step1")},"Close")])])])])}}});export{_s as default};
