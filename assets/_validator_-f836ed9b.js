import{d as os,s as x,L as as,o as r,c as h,e as s,t,g as o,f as l,Y as ds,x as rs,a2 as us,b as y,am as ms,v as _s,an as vs,ae as hs,ao as ps,r as fs,ap as xs,y as j,l as F,I as c,n as bs,K as es,F as q,i as E,B as C,S as V,P as J,a8 as gs,$ as ys}from"./index-8281e2bb.js";import{A as ks}from"./vue3-apexcharts.common-4d40952c.js";import{_ as ws}from"./PaginationBar.vue_vue_type_script_setup_true_lang-302b15d0.js";const $s={class:"bg-base-100 rounded shadow p-4"},Cs=s("div",{class:"text-lg text-main font-semibold mb-1"},"Commission Rate",-1),Ts={class:"text-sm text-gray-500 dark:text-gray-400"},Ss={class:"w-80 m-auto"},Ns={class:"flex items-center justify-center flex-wrap gap-x-3"},js={class:"flex items-center gap-x-2"},Ds=s("div",{class:"bg-success w-[6px] h-[6px] rounded-full"},null,-1),As={class:"text-caption"},zs={class:"flex items-center gap-x-2"},Vs=s("div",{class:"bg-success w-[6px] h-[6px] rounded-full opacity-60"},null,-1),Rs={class:"text-caption"},Bs={class:"flex items-center gap-x-2"},Os=s("div",{class:"bg-secondary w-[6px] h-[6px] rounded-full"},null,-1),Ps={class:"text-caption"},Ws=2,Is=os({__name:"ValidatorCommissionRate",props:{commission:{type:Object}},setup(W){const T=W;let f=x(()=>{var d;return Number(((d=T.commission)==null?void 0:d.commission_rates.rate)||0)*100}),p=x(()=>{var d;return Number(((d=T.commission)==null?void 0:d.commission_rates.max_change_rate)||0)*100}),u=x(()=>{var d;return Number(((d=T.commission)==null?void 0:d.commission_rates.max_rate)||1)*100});const D=f,S=x(()=>u.value-f.value),k=x(()=>D.value>p.value?D.value-p.value:0),a=x(()=>D.value>p.value?p.value:D.value),M=x(()=>S.value>p.value?p.value:S.value),A=x(()=>S.value>p.value?S.value-p.value:0),w=x(()=>[k.value,a.value,Ws,M.value,A.value]),I=as(),L=x(()=>{const d="hsl(var(--bc))";return{chart:{width:"200px",sparkline:{enabled:!1}},colors:["rgba(109,120,141,0.2)","rgba(114,225,40,0.2)","rgba(114,225,40,1)","rgba(114,225,40,0.2)","rgba(109,120,141,0.2)"],legend:{show:!1},tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:3,lineCap:"round",colors:["hsl(var(--b1))"]},labels:["Available","Daily Change","Commission Rate","Daily Change","Available"],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{pie:{endAngle:130,startAngle:-130,customScale:.9,donut:{size:"83%",labels:{show:!0,name:{offsetY:25,fontSize:"1rem",color:d},value:{offsetY:-15,fontWeight:500,fontSize:"2.125rem",formatter:N=>`${f.value}%`,color:"hsl(var(--bc))"},total:{show:!0,label:"Commission Rate",fontSize:"1rem",color:d,formatter:()=>`${f.value}%`}}}}},responsive:[{breakpoint:1709,options:{chart:{height:237}}}]}});return(d,m)=>{var N;return r(),h("div",$s,[Cs,s("div",Ts,t(`Updated at ${o(I).toDay((N=T.commission)==null?void 0:N.update_time,"short")}`),1),s("div",Ss,[l(o(ks),{type:"donut",options:L.value,series:w.value},null,8,["options","series"])]),s("div",null,[s("div",Ns,[s("div",js,[Ds,s("span",As,"Rate:"+t(o(f))+"%",1)]),s("div",zs,[Vs,s("span",Rs,"24h: ±"+t(o(p))+"%",1)]),s("div",Bs,[Os,s("span",Ps,"Max:"+t(o(u))+"%",1)])])])])}}}),Ls={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow border-indigo-500"},qs={class:"flex flex-col lg:!flex-row pt-2 pb-1"},Es={class:"flex-1"},Ms={class:"flex"},Fs={class:"avatar mr-4 relative w-24 rounded-lg overflow-hidden"},Js=s("div",{class:"w-24 rounded-lg absolute opacity-10"},null,-1),Ys={class:"w-24 rounded-lg"},Ks={key:0,class:"object-contain"},Us={class:"mx-2"},Hs={class:"text-sm mb-4"},Gs={class:"m-4 text-sm"},Qs={class:"text-sm mb-3 font-medium"},Xs={class:"card-list"},Zs={class:"flex items-center mb-2"},st={class:"font-bold mr-2"},tt=["href"],et={class:"flex items-center"},ot={class:"font-bold mr-2"},at=["href"],nt={class:"text-sm mt-4 mb-3 font-medium"},lt={class:"card-list"},it={class:"flex items-center mb-2"},ct={class:"font-bold mr-2"},dt={class:"flex items-center"},rt={class:"font-bold mr-2"},ut={class:"text-sm mt-4 mb-3 font-medium"},mt={class:"card-list"},_t={class:"flex items-center mb-2"},vt={class:"font-bold mr-2"},ht={class:"flex items-center"},pt={class:"font-bold mr-2"},ft={class:"flex-1"},xt={class:"flex flex-col mt-10"},bt={class:"flex mb-2"},gt={class:"flex items-center justify-center rounded w-10 h-10",style:{border:"1px solid #666"}},yt={class:"ml-3 flex flex-col justify-center"},kt={class:"text-sm"},wt={class:"flex mb-2"},$t={class:"flex items-center justify-center rounded w-10 h-10",style:{border:"1px solid #666"}},Ct={class:"ml-3 flex flex-col justify-center"},Tt={class:"text-sm"},St={class:"flex mb-2"},Nt={class:"flex items-center justify-center rounded w-10 h-10",style:{border:"1px solid #666"}},jt={class:"ml-3 flex flex-col"},Dt={class:"text-sm"},At={class:"flex mb-2"},zt={class:"flex items-center justify-center rounded w-10 h-10",style:{border:"1px solid #666"}},Vt={class:"ml-3 flex flex-col justify-center"},Rt={class:"text-sm"},Bt={class:"flex mb-2"},Ot={class:"flex items-center justify-center rounded w-10 h-10",style:{border:"1px solid #666"}},Pt={class:"ml-3 flex flex-col justify-center"},Wt={class:"text-sm"},It={class:"flex mb-2"},Lt={class:"flex items-center justify-center rounded w-10 h-10",style:{border:"1px solid #666"}},qt={class:"ml-3 flex flex-col justify-center"},Et={key:0},Mt={key:1},Ft={class:"text-sm"},Jt={class:"text-sm px-4 pt-3 border-t"},Yt={class:"mt-3 grid grid-cols-1 md:!grid-cols-3 gap-4"},Kt={class:"bg-base-100 rounded shadow relative overflow-auto"},Ut={class:"text-lg font-semibold text-main px-4 pt-4"},Ht={class:"px-4 mt-1 flex flex-col justify-between pb-4 max-h-72",style:{height:"calc(100% - 50px)"}},Gt={class:"overflow-auto flex-1"},Qt={class:"text-sm mb-2"},Xt={class:"text-sm mb-2 mt-2"},Zt={class:""},se={class:"bg-base-100 rounded shadow overflow-x-auto"},te={class:"px-4 pt-4 mb-2 text-main font-lg font-semibold"},ee={class:"px-4 pb-4"},oe={class:"mb-3"},ae={class:"text-sm flex"},ne={class:"mb-3"},le={class:"text-sm flex"},ie={class:"text-xs"},ce={class:"mb-3"},de={class:"text-sm flex"},re={class:"text-xs"},ue={class:"mb-3"},me={class:"text-sm flex"},_e={class:"text-xs"},ve={class:"text-sm flex"},he={class:"text-xs"},pe={key:0,class:"mt-5 bg-base-100 shadow rounded p-4"},fe={class:"text-lg mb-4 font-semibold"},xe={class:"float-right"},be={class:"rounded overflow-auto"},ge={class:"table validatore-table w-full"},ye={class:"text-left pl-4",style:{position:"relative","z-index":"2"}},ke={class:"text-left pl-4"},we={class:"text-sm text-primary"},$e={class:"truncate text-primary"},Ce={class:"mt-5 bg-base-100 shadow rounded p-4"},Te={class:"text-lg mb-4 font-semibold"},Se={class:"rounded overflow-auto"},Ne={class:"table validatore-table w-full"},je={class:"text-left pl-4",style:{position:"relative","z-index":"2"}},De={class:"text-left pl-4"},Ae={class:"text-left pl-4",width:"40%"},ze={class:"text-left pl-4"},Ve={class:"text-sm text-primary"},Re={class:"truncate text-primary",style:{"max-width":"200px"}},Be={class:"flex items-center"},Oe={class:"mr-2"},Pe={width:"150"},We={class:"toast"},Ie={class:"alert alert-success"},Le={class:"text-xs md:!text-sm"},qe={class:"toast"},Ee={class:"alert alert-error"},Me={class:"text-xs md:!text-sm"},Ke=os({__name:"[validator]",props:["validator","chain"],setup(W){const T=W,f=ds(),p=rs(),u=as(),D=us(),S=new gs,k=T.validator,a=y({}),M=JSON.parse(localStorage.getItem("avatars")||"{}"),A=y(M||{}),w=y(""),I=y([]),L=y([]),d=y({}),m=y({}),N=y({});m.value.account=ms(k),f.fetchValidatorDelegation(k,m.value.account).then(e=>{e&&(N.value=e.delegation_response)});const Y=y({});p.rpc.getTxsBySender(m.value.account).then(e=>{Y.value=e});const ns=x(()=>{var _;const e=((_=a.value.commission)==null?void 0:_.commission_rates.rate)||0,n=ys().inflation;return Number(n)?u.percent((1-Number(e))*Number(n)):"-"}),ls=x(()=>{var e;return(e=N.value.balance)!=null&&e.amount?u.calculatePercent(N.value.balance.amount,a.value.tokens):"-"}),is=e=>{if(!e)return"";const n=A.value[e]||"";return n.startsWith("http")?n:`https://s3.amazonaws.com/keybase_processed_uploads/${n}`};_s(()=>{k&&(f.fetchValidator(k).then(e=>{var _,g;a.value=e.validator,w.value=((g=(_=e.validator)==null?void 0:_.description)==null?void 0:g.identity)||"",w.value&&!A.value[w.value]&&f.keybase(w.value).then(b=>{var v,$,O;if(Array.isArray(b.them)&&b.them.length>0){const P=String((O=($=(v=b.them[0])==null?void 0:v.pictures)==null?void 0:$.primary)==null?void 0:O.url).replace("https://s3.amazonaws.com/keybase_processed_uploads/","");P&&(A.value[w.value]=P,localStorage.setItem("avatars",JSON.stringify(A.value)))}});const n=vs(a.value.operator_address)||"<Invalid>";m.value.hex=hs(a.value.consensus_pubkey),m.value.valCons=ps(a.value.consensus_pubkey,n)}),p.rpc.getDistributionValidatorOutstandingRewards(k).then(e=>{var n,_,g,b;I.value=(_=(n=e.rewards)==null?void 0:n.rewards)==null?void 0:_.sort((v,$)=>Number($.amount)-Number(v.amount)),(b=(g=e.rewards)==null?void 0:g.rewards)==null||b.forEach(v=>{v.denom.startsWith("ibc/")&&u.fetchDenomTrace(v.denom)})}),p.rpc.getDistributionValidatorCommission(k).then(e=>{var n,_,g,b;L.value=(_=(n=e.commission)==null?void 0:n.commission)==null?void 0:_.sort((v,$)=>Number($.amount)-Number(v.amount)),(b=(g=e.commission)==null?void 0:g.commission)==null||b.forEach(v=>{v.denom.startsWith("ibc/")&&u.fetchDenomTrace(v.denom)})}))});let z=y(0);const B=async e=>{if(e)try{await navigator.clipboard.writeText(e),z.value=1,setTimeout(()=>{z.value=0},1e3)}catch{z.value=2,setTimeout(()=>{z.value=0},1e3)}},K=x(()=>z.value===2?{class:"error",msg:"Copy Error!"}:{class:"success",msg:"Copy Success!"});function cs(e){S.setPage(e),p.rpc.getStakingValidatorsDelegations(k,S).then(n=>{d.value=n})}return(e,n)=>{var b,v,$,O,P,U,H,G,Q,X,Z,ss,ts;const _=fs("RouterLink"),g=xs("lazy");return r(),h("div",null,[s("div",Ls,[s("div",qs,[s("div",Es,[s("div",Ms,[s("div",Fs,[Js,s("div",Ys,[A.value[w.value]!=="undefined"?j((r(),h("img",Ks,null,512)),[[g,is(w.value)]]):(r(),F(o(c),{key:1,class:"text-4xl",icon:"mdi-help-circle-outline"}))])]),s("div",Us,[s("h4",null,t((b=a.value.description)==null?void 0:b.moniker),1),s("div",Hs,t(((v=a.value.description)==null?void 0:v.identity)||"-"),1),s("label",{for:"delegate",class:"btn btn-primary btn-sm w-full",onClick:n[0]||(n[0]=i=>o(D).open("delegate",{validator_address:a.value.operator_address}))},t(e.$t("account.btn_delegate")),1)])]),s("div",Gs,[s("p",Qs,t(e.$t("staking.about_us")),1),s("div",Xs,[s("div",Zs,[l(o(c),{icon:"mdi-web",class:"text-xl mr-1"}),s("span",st,t(e.$t("staking.website"))+": ",1),s("a",{href:((O=($=a.value)==null?void 0:$.description)==null?void 0:O.website)||"#",class:bs((U=(P=a.value)==null?void 0:P.description)!=null&&U.website?"cursor-pointer":"cursor-default")},t(((H=a.value.description)==null?void 0:H.website)||"-"),11,tt)]),s("div",et,[l(o(c),{icon:"mdi-email-outline",class:"text-xl mr-1"}),s("span",ot,t(e.$t("staking.contact"))+": ",1),(G=a.value.description)!=null&&G.security_contact?(r(),h("a",{key:0,href:"mailto:"+a.value.description.security_contact||"#",class:"cursor-pointer"},t(((Q=a.value.description)==null?void 0:Q.security_contact)||"-"),9,at)):es("",!0)])]),s("p",nt,t(e.$t("staking.validator_status")),1),s("div",lt,[s("div",it,[l(o(c),{icon:"mdi-shield-account-outline",class:"text-xl mr-1"}),s("span",ct,t(e.$t("staking.status"))+": ",1),s("span",null,t(String(a.value.status).replace("BOND_STATUS_","")),1)]),s("div",dt,[l(o(c),{icon:"mdi-shield-alert-outline",class:"text-xl mr-1"}),s("span",rt,t(e.$t("staking.jailed"))+": ",1),s("span",null,t(a.value.jailed||"-"),1)])]),s("p",ut,t(e.$t("staking.liquid_staking")),1),s("div",mt,[s("div",_t,[l(o(c),{icon:"mdi-lock",class:"text-xl mr-1"}),s("span",vt,t(e.$t("staking.validator_bond_share"))+": ",1),s("span",null,t(o(u).formatToken({amount:a.value.validator_bond_shares,denom:o(f).params.bond_denom},!1)),1)]),s("div",ht,[l(o(c),{icon:"mdi-waves-arrow-right",class:"text-xl mr-1"}),s("span",pt,t(e.$t("staking.liquid_staking_shares"))+": ",1),s("span",null,t(o(u).formatToken({amount:a.value.liquid_shares,denom:o(f).params.bond_denom},!1)),1)])])])]),s("div",ft,[s("div",xt,[s("div",bt,[s("div",gt,[l(o(c),{icon:"mdi-coin",class:"text-3xl"})]),s("div",yt,[s("h4",null,t(o(u).formatToken2({amount:a.value.tokens,denom:o(f).params.bond_denom})),1),s("span",kt,t(e.$t("staking.total_bonded")),1)])]),s("div",wt,[s("div",$t,[l(o(c),{icon:"mdi-percent",class:"text-3xl"})]),s("div",Ct,[s("h4",null,t(o(u).formatToken(N.value.balance))+" ("+t(ls.value)+") ",1),s("span",Tt,t(e.$t("staking.self_bonded")),1)])]),s("div",St,[s("div",Nt,[l(o(c),{icon:"mdi-account-tie",class:"text-3xl"})]),s("div",jt,[s("h4",null,t(a.value.min_self_delegation)+" "+t(o(f).params.bond_denom),1),s("span",Dt,t(e.$t("staking.min_self")),1)])]),s("div",At,[s("div",zt,[l(o(c),{icon:"mdi-finance",class:"text-3xl"})]),s("div",Vt,[s("h4",null,t(ns.value),1),s("span",Rt,t(e.$t("staking.annual_profit")),1)])]),s("div",Bt,[s("div",Ot,[l(o(c),{icon:"mdi:arrow-down-bold-circle-outline",class:"text-3xl"})]),s("div",Pt,[s("h4",null,t(a.value.unbonding_height),1),s("span",Wt,t(e.$t("staking.unbonding_height")),1)])]),s("div",It,[s("div",Lt,[l(o(c),{icon:"mdi-clock",class:"text-3xl"})]),s("div",qt,[a.value.unbonding_time&&!a.value.unbonding_time.startsWith("1970")?(r(),h("h4",Et,t(o(u).toDay(a.value.unbonding_time,"from")),1)):(r(),h("h4",Mt,"-")),s("span",Ft,t(e.$t("staking.unbonding_time")),1)])])])])]),s("div",Jt,t((X=a.value.description)==null?void 0:X.details),1)]),s("div",Yt,[s("div",null,[l(Is,{commission:a.value.commission},null,8,["commission"])]),s("div",Kt,[s("div",Ut,t(e.$t("staking.commissions_&_rewards")),1),s("div",Ht,[s("div",Gt,[s("div",Qt,t(e.$t("staking.commissions")),1),(r(!0),h(q,null,E(L.value,(i,R)=>(r(),h("div",{key:`reward-${R}`,color:"info",label:"",variant:"outlined",class:"mr-1 mb-1 badge text-xs"},t(o(u).formatToken2(i)),1))),128)),s("div",Xt,t(e.$t("staking.outstanding"))+" "+t(e.$t("account.rewards")),1),(r(!0),h(q,null,E(I.value,(i,R)=>(r(),h("div",{key:`reward-${R}`,class:"mr-1 mb-1 badge text-xs"},t(o(u).formatToken2(i)),1))),128))]),s("div",Zt,[s("label",{for:"withdraw_commission",class:"btn btn-primary w-full",onClick:n[1]||(n[1]=i=>o(D).open("withdraw_commission",{validator_address:a.value.operator_address}))},t(e.$t("account.btn_withdraw")),1)])])]),s("div",se,[s("div",te,t(e.$t("staking.addresses")),1),s("div",ee,[s("div",oe,[s("div",ae,[C(t(e.$t("staking.account_addr"))+" ",1),j(l(o(c),{icon:"mdi:content-copy",class:"ml-2 cursor-pointer",onClick:n[2]||(n[2]=i=>B(m.value.account||""))},null,512),[[V,m.value.account]])]),l(_,{class:"text-xs text-primary",to:`/${W.chain}/account/${m.value.account}`},{default:J(()=>[C(t(m.value.account),1)]),_:1},8,["to"])]),s("div",ne,[s("div",le,[C(t(e.$t("staking.operator_addr"))+" ",1),j(l(o(c),{icon:"mdi:content-copy",class:"ml-2 cursor-pointer",onClick:n[3]||(n[3]=i=>B(a.value.operator_address||""))},null,512),[[V,a.value.operator_address]])]),s("div",ie,t(a.value.operator_address),1)]),s("div",ce,[s("div",de,[C(t(e.$t("staking.hex_addr"))+" ",1),j(l(o(c),{icon:"mdi:content-copy",class:"ml-2 cursor-pointer",onClick:n[4]||(n[4]=i=>B(m.value.hex||""))},null,512),[[V,m.value.hex]])]),s("div",re,t(m.value.hex),1)]),s("div",ue,[s("div",me,[C(t(e.$t("staking.signer_addr"))+" ",1),j(l(o(c),{icon:"mdi:content-copy",class:"ml-2 cursor-pointer",onClick:n[5]||(n[5]=i=>B(m.value.valCons||""))},null,512),[[V,m.value.valCons]])]),s("div",_e,t(m.value.valCons),1)]),s("div",null,[s("div",ve,[C(t(e.$t("staking.consensus_pub_key"))+" ",1),j(l(o(c),{icon:"mdi:content-copy",class:"ml-2 cursor-pointer",onClick:n[6]||(n[6]=i=>B(JSON.stringify(a.value.consensus_pubkey)||""))},null,512),[[V,a.value.consensus_pubkey]])]),s("div",he,t(a.value.consensus_pubkey),1)])])])]),d.value.delegation_responses?(r(),h("div",pe,[s("div",fe,[C(t(e.$t("account.delegations"))+" ",1),s("span",xe,t(((Z=d.value.delegation_responses)==null?void 0:Z.length)||0)+" / "+t(((ss=d.value.pagination)==null?void 0:ss.total)||0),1)]),s("div",be,[s("table",ge,[s("thead",null,[s("th",ye,t(e.$t("account.delegator")),1),s("th",ke,t(e.$t("account.delegation")),1)]),s("tbody",null,[(r(!0),h(q,null,E(d.value.delegation_responses,({balance:i,delegation:R})=>(r(),h("tr",null,[s("td",we,t(R.delegator_address),1),s("td",$e,t(o(u).formatToken(i)),1)]))),256))])]),l(ws,{total:(ts=d.value.pagination)==null?void 0:ts.total,limit:o(S).limit,callback:cs},null,8,["total","limit"])])])):es("",!0),s("div",Ce,[s("div",Te,t(e.$t("account.transactions")),1),s("div",Se,[s("table",Ne,[s("thead",null,[s("th",je,t(e.$t("account.height")),1),s("th",De,t(e.$t("account.hash")),1),s("th",Ae,t(e.$t("account.messages")),1),s("th",ze,t(e.$t("account.time")),1)]),s("tbody",null,[(r(!0),h(q,null,E(Y.value.tx_responses,(i,R)=>(r(),h("tr",null,[s("td",Ve,[l(_,{to:`/${T.chain}/block/${i.height}`},{default:J(()=>[C(t(i.height),1)]),_:2},1032,["to"])]),s("td",Re,[l(_,{to:`/${T.chain}/tx/${i.txhash}`},{default:J(()=>[C(t(i.txhash),1)]),_:2},1032,["to"])]),s("td",null,[s("div",Be,[s("span",Oe,t(o(u).messages(i.tx.body.messages)),1),i.code===0?(r(),F(o(c),{key:0,icon:"mdi-check",class:"text-yes"})):(r(),F(o(c),{key:1,icon:"mdi-multiply",class:"text-no"}))])]),s("td",Pe,t(o(u).toDay(i.timestamp,"from")),1)]))),256))])])])]),j(s("div",We,[s("div",Ie,[s("div",Le,[s("span",null,t(K.value.msg),1)])])],512),[[V,o(z)===1]]),j(s("div",qe,[s("div",Ee,[s("div",Me,[s("span",null,t(K.value.msg),1)])])],512),[[V,o(z)===2]])])}}});export{Ke as default};