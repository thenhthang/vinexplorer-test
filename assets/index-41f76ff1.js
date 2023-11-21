import{U as Ct,x as vt,V as It,W as ct,X as St,Y as L,Z as Tt,O as kt,$ as dt,L as xt,a0 as At,d as z,a1 as $,b as D,o as h,c as p,e as t,n as v,g as e,f,F as T,w as Mt,H as Vt,I as O,K as x,t as n,J as Pt,a2 as jt,a3 as Dt,v as Bt,r as Nt,B as S,i as M,y as ut,D as ht,a4 as pt,a5 as Wt,a6 as Rt,l as _t,P as F,a7 as Ft,T as Lt}from"./index-2cfd5dd5.js";import{W as Ot,_ as gt}from"./index-e82e15c2.js";import{A as zt}from"./vue3-apexcharts.common-5d6540b1.js";import{g as Gt}from"./apexChartConfig-abd42e23.js";import{_ as Ut}from"./ProposalListItem.vue_vue_type_script_setup_true_lang-8a320313.js";import{b as mt}from"./route-block-83d24a4e.js";import"./index-f2379701.js";function yt(a){switch(a){case"yellow":return"warning";case"green":return"success";default:return"secondary"}}const wt=Ct("module-index",{state:()=>({days:14,tickerIndex:0,coinInfo:{name:"",symbol:"",description:{en:""},categories:[],market_cap_rank:0,links:{twitter_screen_name:"",homepage:[],repos_url:{github:[]},telegram_channel_identifier:""},market_data:{price_change_percentage_24h:0},tickers:[]},marketData:{market_caps:[],prices:[],total_volumes:[]},communityPool:[],tally:{}}),getters:{blockchain(){return vt().current},coingecko(){return It()},bankStore(){return ct()},twitter(){var a,s,o;return(s=(a=this.coinInfo)==null?void 0:a.links)!=null&&s.twitter_screen_name?`https://twitter.com/${(o=this.coinInfo)==null?void 0:o.links.twitter_screen_name}`:""},homepage(){var i,l,_,g;if(!((l=(i=this.coinInfo)==null?void 0:i.links)!=null&&l.homepage))return"";const[a,s,o]=(g=(_=this.coinInfo)==null?void 0:_.links)==null?void 0:g.homepage;return a||s||o},github(){var i,l,_,g,d;if(!((l=(i=this.coinInfo)==null?void 0:i.links)!=null&&l.repos_url))return"";const[a,s,o]=(d=(g=(_=this.coinInfo)==null?void 0:_.links)==null?void 0:g.repos_url)==null?void 0:d.github;return a||s||o},telegram(){var a,s,o;return(s=(a=this.coinInfo)==null?void 0:a.links)!=null&&s.homepage?`https://t.me/${(o=this.coinInfo)==null?void 0:o.links.telegram_channel_identifier}`:""},priceChange(){var s,o,i,l;if(!((o=(s=this.coinInfo)==null?void 0:s.market_data)!=null&&o.price_change_percentage_24h))return"";const a=((l=(i=this.coinInfo)==null?void 0:i.market_data)==null?void 0:l.price_change_percentage_24h)||0;return St(a).format("+0.[00]")},priceColor(){var s,o,i,l;if(!((o=(s=this.coinInfo)==null?void 0:s.market_data)!=null&&o.price_change_percentage_24h))return"";const a=((l=(i=this.coinInfo)==null?void 0:i.market_data)==null?void 0:l.price_change_percentage_24h)||0;switch(!0){case a>0:return"text-success";case a<0:return"text-error";default:return""}},trustColor(){var s,o,i;return(s=this.coinInfo)!=null&&s.tickers?(i=(o=this.coinInfo)==null?void 0:o.tickers[this.tickerIndex])==null?void 0:i.trust_score:""},pool(){return L().pool},proposals(){return Tt().proposals[2]},stats(){var _,g,d,u,m,k,I;const a=kt(),s=ct(),o=L(),i=dt(),l=xt();return[{title:"Height",color:"primary",icon:"mdi-pound",stats:String(((d=(g=(_=a==null?void 0:a.latest)==null?void 0:_.block)==null?void 0:g.header)==null?void 0:d.height)||0),change:0},{title:"Validators",color:"error",icon:"mdi-human-queue",stats:String(((k=(m=(u=a==null?void 0:a.latest)==null?void 0:u.block)==null?void 0:m.last_commit)==null?void 0:k.signatures.length)||0),change:0},{title:"Supply",color:"success",icon:"mdi-currency-usd",stats:l.formatTokenAmount(s.supply),change:0},{title:"Bonded Tokens",color:"warning",icon:"mdi-lock",stats:l.formatTokenAmount({amount:this.pool.bonded_tokens,denom:o.params.bond_denom}),change:0},{title:"Inflation",color:"success",icon:"mdi-chart-multiple",stats:l.formatDecimalToPercent(i.inflation),change:0},{title:"Community Pool",color:"primary",icon:"mdi-bank",stats:l.formatTokens((I=this.communityPool)==null?void 0:I.filter(C=>C.denom===o.params.bond_denom)),change:0}]},coingeckoId(){var s;this.tickerIndex=0;const[a]=((s=this.blockchain)==null?void 0:s.assets)||[];return a.coingecko_id}},actions:{async loadDashboard(){this.$reset(),this.initCoingecko(),dt().fetchInflation(),At().fetchCommunityPool().then(a=>{var s,o;this.communityPool=(o=(s=a==null?void 0:a.pool)==null?void 0:s.filter(i=>i.denom.length<10))==null?void 0:o.map(i=>({amount:String(parseInt(i.amount)),denom:i.denom}))})},tickerColor(a){return yt(a)},initCoingecko(){var s;this.tickerIndex=0;const[a]=((s=this.blockchain)==null?void 0:s.assets)||[];a&&a.coingecko_id&&(this.coingecko.getCoinInfo(a.coingecko_id).then(o=>{this.coinInfo=o}),this.coingecko.getMarketChart(this.days,a.coingecko_id).then(o=>{this.marketData=o}))},selectTicker(a){this.tickerIndex=a}}}),qt={class:"tabs tabs-boxed bg-transparent justify-end"},Et=z({__name:"PriceMarketChart",setup(a){const s=wt(),o=kt(),i=$(()=>{const d=o.theme,u=s.marketData.prices.map(m=>m[0]);return Gt(d,u)}),l=D("price"),_=$(()=>[{name:"Price",data:l.value==="price"?s.marketData.prices.map(d=>d[1]):s.marketData.total_volumes.map(d=>d[1])}]);function g(d){l.value=d}return(d,u)=>(h(),p(T,null,[t("div",qt,[t("a",{class:v(["tab text-xs mr-2 text-gray-400 uppercase",{"tab-active":e(l)==="price"}]),onClick:u[0]||(u[0]=m=>g("price"))}," Price ",2),t("a",{class:v(["tab text-xs text-gray-400 uppercase",{"tab-active":e(l)==="volume"}]),onClick:u[1]||(u[1]=m=>g("volume"))}," Volume ",2)]),f(e(zt),{type:"area",height:"230",options:e(i),series:e(_)},null,8,["options","series"])],64))}});var bt;const Ht=typeof window<"u",ft=a=>typeof a=="function";Ht&&((bt=window==null?void 0:window.navigator)!=null&&bt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Jt(a,s){let o,i,l;const _=D(!0),g=()=>{_.value=!0,l()};Mt(a,g,{flush:"sync"});const d=ft(s)?s:s.get,u=ft(s)?void 0:s.set,m=Vt((k,I)=>(i=k,l=I,{get(){return _.value&&(o=d(),_.value=!1),i(),o},set(C){u==null||u(C)}}));return Object.isExtensible(m)&&(m.trigger=g),m}const Kt={class:"bg-base-100 shadow rounded p-4"},Xt={class:"flex items-center justify-center"},Yt={key:0,class:"relative w-9 h-9 rounded overflow-hidden flex items-center justify-center"},Zt={class:""},Qt={class:"text-lg text-center font-semibold mt-2 mb-1"},te={class:"text-sm text-center"},ee={key:0,size:"x-small",class:"font-semibold"},se={class:"truncate"},oe=z({__name:"CardStatisticsVertical",props:{title:{},color:{default:"primary"},icon:{},stats:{},change:{},subtitle:{}},setup(a){const s=a,o=Jt(()=>s.change,()=>Math.sign(s.change||0)===1);return(i,l)=>(h(),p("div",Kt,[t("div",Xt,[s.icon?(h(),p("div",Yt,[f(e(O),{class:v([`text-${s==null?void 0:s.color}`]),icon:s.icon,size:"32"},null,8,["class","icon"]),t("div",{class:v(["absolute top-0 left-0 bottom-0 right-0 opacity-20",[`bg-${s==null?void 0:s.color}`]])},null,2)])):x("",!0),s.change?(h(),p("div",{key:1,class:v([e(o)?"text-success":"text-error","flex items-center text-sm font-semibold"])},[t("span",null,n(e(o)?`+${s.change}`:s.change)+"%",1),f(e(O),{icon:e(o)?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])],2)):x("",!0)]),t("div",Zt,[t("h6",Qt,n(s.stats||"-"),1),t("p",te,n(s.title),1),s.subtitle?(h(),p("div",ee,[t("span",se,n(s.subtitle),1)])):x("",!0)])]))}}),ne={key:0,class:"bg-base-100 rounded shadow mb-4"},ae={class:"grid grid-cols-2 md:grid-cols-3 p-4"},ie={class:"col-span-2 md:col-span-1"},re={class:"text-xl font-semibold text-main"},le={class:"uppercase"},ce={class:"text-xs mt-2"},de={class:"badge text-xs badge-error bg-[#fcebea] dark:bg-[#41384d] text-red-400"},ue={class:"my-4 flex flex-wrap items-center"},he=["href"],pe={class:"ml-1 text-sm uppercase"},_e={class:"dropdown dropdown-hover w-full"},ge={class:"bg-gray-100 dark:bg-[#384059] flex items-center justify-between px-4 py-2 cursor-pointer rounded"},me={class:"font-semibold text-xl text-[#666] dark:text-white"},be={class:"text-info text-sm"},fe={class:"text-right"},ve={class:"text-xl font-semibold text-[#666] dark:text-white"},ke={class:"dropdown-content pt-1"},xe={class:"h-64 overflow-auto w-full shadow rounded"},ye={class:"menu w-full bg-gray-100 rounded dark:bg-[#384059]"},we=["onClick"],$e={class:"flex items-center justify-between hover:bg-base-100"},Ce={class:"flex-1"},Ie={class:"text-sm text-gray-500 dark:text-gray-400"},Se={class:"text-base text-main"},Te={class:"flex"},Ae=Lt('<label class="btn btn-primary !px-1 my-5 mr-2" for="calculator"><svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="4" y="2" width="16" height="20" rx="2"></rect> <line x1="8" x2="16" y1="6" y2="6"></line> <line x1="16" x2="16" y1="14" y2="18"></line> <path d="M16 10h.01"></path> <path d="M12 10h.01"></path> <path d="M8 10h.01"></path> <path d="M12 14h.01"></path> <path d="M8 14h.01"></path> <path d="M12 18h.01"></path> <path d="M8 18h.01"></path></g></svg></label><input type="checkbox" id="calculator" class="modal-toggle">',2),Me={class:"modal"},Ve={class:"modal-box"},Pe={class:"text-lg font-bold"},je={class:"flex flex-col w-full mt-5"},De={class:"grid h-20 flex-grow card rounded-box place-items-center"},Be={class:"join w-full"},Ne={class:"join-item btn"},We={class:"uppercase"},Re=t("div",{class:"divider"},"=",-1),Fe={class:"grid h-20 flex-grow card rounded-box place-items-center"},Le={class:"join w-full"},Oe=t("label",{class:"join-item btn"},[t("span",null,"USD")],-1),ze={class:"modal-backdrop",for:"calculator"},Ge=["href"],Ue={class:"col-span-2"},qe=t("div",{class:"h-[1px] w-full bg-gray-100 dark:bg-[#384059]"},null,-1),Ee={class:"max-h-[250px] overflow-auto p-4 text-sm"},He={class:"mx-4 flex flex-wrap items-center"},Je={class:"mr-2 mb-4 text-xs bg-gray-100 dark:bg-[#384059] px-3 rounded-full py-1"},Ke={class:"grid grid-cols-1 gap-4 md:!grid-cols-3 lg:!grid-cols-6"},Xe={key:1,class:"bg-base-100 rounded mt-4 shadow"},Ye={class:"px-4 pt-4 pb-2 text-lg font-semibold text-main"},Ze={class:"px-4 pb-4"},Qe={key:0,class:"pb-8 text-center"},ts={class:"bg-base-100 rounded mt-4 shadow"},es={class:"flex justify-between px-4 pt-4 pb-2 text-lg font-semibold text-main"},ss={class:"truncate"},os={class:"grid grid-cols-1 md:!grid-cols-4 auto-cols-auto gap-4 px-4 pb-6"},ns={class:"bg-gray-100 dark:bg-[#373f59] rounded-sm px-4 py-3"},as={class:"text-sm mb-1"},is={class:"text-lg font-semibold text-main"},rs={class:"bg-gray-100 dark:bg-[#373f59] rounded-sm px-4 py-3"},ls={class:"text-sm mb-1"},cs={class:"text-lg font-semibold text-main"},ds={class:"bg-gray-100 dark:bg-[#373f59] rounded-sm px-4 py-3"},us={class:"text-sm mb-1"},hs={class:"text-lg font-semibold text-main"},ps={class:"bg-gray-100 dark:bg-[#373f59] rounded-sm px-4 py-3"},_s={class:"text-sm mb-1"},gs={class:"text-lg font-semibold text-main"},ms={key:0,class:"px-4 pb-4 overflow-auto"},bs={class:"table table-compact w-full table-zebra"},fs=["onClick"],vs=["onClick"],ks={class:"grid grid-cols-3 gap-4 px-4 pb-6 mt-4"},xs={for:"PingTokenConvert",class:"btn btn-primary text-white"},ys=["chain-name","endpoint","hd-path"],ws={class:"bg-base-100 rounded mt-4"},$s={class:"px-4 pt-4 pb-2 text-lg font-semibold text-main"},Cs=t("div",{class:"h-4"},null,-1),Is={key:2,class:"bg-base-100 rounded mt-4"},Ss={class:"px-4 pt-4 pb-2 text-lg font-semibold text-main"},Ts=t("div",{class:"h-4"},null,-1),As=z({__name:"index",props:["chain"],setup(a){const s=vt(),o=wt(),i=Pt(),l=xt(),_=jt();L();const g=Dt(),d=$(()=>o.coinInfo);Bt(()=>{o.loadDashboard(),i.loadMyAsset(),g.handleAbciInfo()});const u=$(()=>o.coinInfo.tickers[o.tickerIndex]),m=D("");s.$subscribe((c,b)=>{b.chainName!==m.value&&(m.value=b.chainName,o.loadDashboard(),i.loadMyAsset(),g.handleAbciInfo())});function k(c,b){return c.toLowerCase().startsWith("ibc/")||c.toLowerCase().startsWith("0x")?b:c}const I=[{name:"Website",icon:"mdi-web",href:o.homepage},{name:"Twitter",icon:"mdi-twitter",href:o.twitter},{name:"Telegram",icon:"mdi-telegram",href:o.telegram},{name:"Github",icon:"mdi-github",href:o.github}],C=$(()=>{const c=i.balanceOfStakingToken;return c?l.priceChanges(c.denom):0}),V=$(()=>{switch(!0){case C.value>0:return"text-green-600";case C.value===0:return"text-grey-500";case C.value<0:return"text-red-600"}});function P(){i.loadMyAsset()}function $t(c){return`text-${yt(c)}`}const j=D(100),B=$({get:()=>parseFloat(j.value.toFixed(6)),set:c=>{j.value=c}}),N=$({get:()=>j.value*u.value.converted_last.usd||0,set:c=>{j.value=c/u.value.converted_last.usd||0}});return(c,b)=>{var G,U,q,E,H,J,K,X,Y,Z,Q,tt,et,st,ot,nt;const W=Nt("RouterLink");return h(),p("div",null,[e(d)&&e(d).name?(h(),p("div",ne,[t("div",ae,[t("div",ie,[t("div",re,[S(n(e(d).name)+" (",1),t("span",le,n(e(d).symbol),1),S(") ")]),t("div",ce,[S(n(c.$t("index.rank"))+": ",1),t("div",de," #"+n(e(d).market_cap_rank),1)]),t("div",ue,[(h(),p(T,null,M(I,(r,y)=>t("a",{key:y,href:r.href,class:"link link-primary px-2 py-1 rounded-sm no-underline hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center"},[f(e(O),{icon:r==null?void 0:r.icon},null,8,["icon"]),t("span",pe,n(r==null?void 0:r.name),1)],8,he)),64))]),t("div",null,[t("div",_e,[t("label",null,[t("div",ge,[t("div",null,[t("div",me,n(((U=(G=e(u))==null?void 0:G.market)==null?void 0:U.name)||""),1),t("div",be,n(k((q=e(u))==null?void 0:q.base,e(u).coin_id))+"/"+n(k((E=e(u))==null?void 0:E.target,e(u).target_coin_id)),1)]),t("div",fe,[t("div",ve," $"+n(e(u).converted_last.usd),1),t("div",{class:v(["text-sm",e(o).priceColor])},n(e(o).priceChange)+"% ",3)])])]),t("div",ke,[t("div",xe,[t("ul",ye,[(h(!0),p(T,null,M(e(o).coinInfo.tickers,(r,y)=>{var A;return h(),p("li",{key:y,onClick:R=>e(o).selectTicker(y)},[t("div",$e,[t("div",Ce,[t("div",{class:v(["text-main text-sm",$t(r.trust_score)])},n((A=r==null?void 0:r.market)==null?void 0:A.name),3),t("div",Ie,n(k(r==null?void 0:r.base,r.coin_id))+"/"+n(k(r==null?void 0:r.target,r.target_coin_id)),1)]),t("div",Se," $"+n(r.converted_last.usd),1)])],8,we)}),128))])])])]),t("div",Te,[Ae,t("div",Me,[t("div",Ve,[t("h3",Pe,n(c.$t("index.price_calculator")),1),t("div",je,[t("div",De,[t("div",Be,[t("label",Ne,[t("span",We,n(e(d).symbol),1)]),ut(t("input",{type:"number","onUpdate:modelValue":b[0]||(b[0]=r=>pt(B)?B.value=r:null),min:"0",placeholder:"Input a number",class:"input grow input-bordered join-item"},null,512),[[ht,e(B)]])])]),Re,t("div",Fe,[t("div",Le,[Oe,ut(t("input",{type:"number","onUpdate:modelValue":b[1]||(b[1]=r=>pt(N)?N.value=r:null),min:"0",placeholder:"Input amount",class:"join-item grow input input-bordered"},null,512),[[ht,e(N)]])])])])]),t("label",ze,n(c.$t("index.close")),1)]),t("a",{class:v(["my-5 !text-white btn grow",{"!btn-success":e(o).trustColor==="green","!btn-warning":e(o).trustColor==="yellow"}]),href:e(u).trade_url,target:"_blank"},n(c.$t("index.buy"))+" "+n(e(d).symbol||""),11,Ge)])])]),t("div",Ue,[f(Et)])]),qe,t("div",Ee,[f(e(Ot),{"model-value":(H=e(d).description)==null?void 0:H.en,previewOnly:""},null,8,["model-value"])]),t("div",He,[(h(!0),p(T,null,M(e(d).categories,r=>(h(),p("div",Je,n(r),1))),256))])])):x("",!0),t("div",Ke,[(h(!0),p(T,null,M(e(o).stats,(r,y)=>(h(),p("div",{key:y},[f(oe,Wt(Rt(r)),null,16)]))),128))]),e(s).supportModule("governance")?(h(),p("div",Xe,[t("div",Ye,n(c.$t("index.active_proposals")),1),t("div",Ze,[f(Ut,{proposals:(J=e(o))==null?void 0:J.proposals},null,8,["proposals"])]),((X=(K=e(o).proposals)==null?void 0:K.proposals)==null?void 0:X.length)===0?(h(),p("div",Qe,n(c.$t("index.no_active_proposals")),1)):x("",!0)])):x("",!0),t("div",ts,[t("div",es,[t("span",ss,n(e(i).currentAddress||"Not Connected"),1),e(i).currentAddress?(h(),_t(W,{key:0,class:"float-right text-sm cursor-pointert link link-primary no-underline font-medium",to:`/${a.chain}/account/${e(i).currentAddress}`},{default:F(()=>[S(n(c.$t("index.more")),1)]),_:1},8,["to"])):x("",!0)]),t("div",os,[t("div",ns,[t("div",as,n(c.$t("account.balance")),1),t("div",is,n(e(l).formatToken(e(i).balanceOfStakingToken)),1),t("div",{class:v(["text-sm",e(V)])}," $"+n(e(l).tokenValue(e(i).balanceOfStakingToken)),3)]),t("div",rs,[t("div",ls,n(c.$t("module.staking")),1),t("div",cs,n(e(l).formatToken(e(i).stakingAmount)),1),t("div",{class:v(["text-sm",e(V)])}," $"+n(e(l).tokenValue(e(i).stakingAmount)),3)]),t("div",ds,[t("div",us,n(c.$t("index.reward")),1),t("div",hs,n(e(l).formatToken(e(i).rewardAmount)),1),t("div",{class:v(["text-sm",e(V)])}," $"+n(e(l).tokenValue(e(i).rewardAmount)),3)]),t("div",ps,[t("div",_s,n(c.$t("index.unbonding")),1),t("div",gs,n(e(l).formatToken(e(i).unbondingAmount)),1),t("div",{class:v(["text-sm",e(V)])}," $"+n(e(l).tokenValue(e(i).unbondingAmount)),3)])]),e(i).delegations.length>0?(h(),p("div",ms,[t("table",bs,[t("thead",null,[t("tr",null,[t("th",null,n(c.$t("account.validator")),1),t("th",null,n(c.$t("account.delegations")),1),t("th",null,n(c.$t("account.rewards")),1),t("th",null,n(c.$t("staking.actions")),1)])]),t("tbody",null,[(h(!0),p(T,null,M(e(i).delegations,(r,y)=>{var A,R,at,it,rt;return h(),p("tr",{key:y},[t("td",null,[f(W,{class:"link link-primary no-underline",to:`/${a.chain}/staking/${(A=r==null?void 0:r.delegation)==null?void 0:A.validator_address}`},{default:F(()=>{var w;return[S(n(e(l).validatorFromBech32((w=r==null?void 0:r.delegation)==null?void 0:w.validator_address)),1)]}),_:2},1032,["to"])]),t("td",null,n(e(l).formatToken(r==null?void 0:r.balance)),1),t("td",null,n(e(l).formatTokens((rt=(it=(at=(R=e(i))==null?void 0:R.rewards)==null?void 0:at.rewards)==null?void 0:it.find(w=>{var lt;return(w==null?void 0:w.validator_address)===((lt=r==null?void 0:r.delegation)==null?void 0:lt.validator_address)}))==null?void 0:rt.reward)),1),t("td",null,[t("div",null,[t("label",{for:"delegate",class:"btn !btn-xs !btn-primary btn-ghost rounded-sm mr-2",onClick:w=>e(_).open("delegate",{validator_address:r.delegation.validator_address},P)},n(c.$t("account.btn_delegate")),9,fs),t("label",{for:"withdraw",class:"btn !btn-xs !btn-primary btn-ghost rounded-sm",onClick:w=>e(_).open("withdraw",{validator_address:r.delegation.validator_address},P)},n(c.$t("index.btn_withdraw_reward")),9,vs)])])])}),128))])])])):x("",!0),t("div",ks,[t("label",xs,n(c.$t("index.btn_swap")),1),t("label",{for:"send",class:"btn !bg-yes !border-yes text-white",onClick:b[2]||(b[2]=r=>e(_).open("send",{},P))},n(c.$t("account.btn_send")),1),t("label",{for:"delegate",class:"btn !bg-info !border-info text-white",onClick:b[3]||(b[3]=r=>e(_).open("delegate",{},P))},n(c.$t("account.btn_delegate")),1),f(W,{to:"/wallet/receive",class:"btn !bg-info !border-info text-white hidden"},{default:F(()=>[S(n(c.$t("index.receive")),1)]),_:1})]),(h(),_t(Ft,{to:"body"},[t("ping-token-convert",{"chain-name":(Z=(Y=e(s))==null?void 0:Y.current)==null?void 0:Z.prettyName,endpoint:(tt=(Q=e(s))==null?void 0:Q.endpoint)==null?void 0:tt.address,"hd-path":(st=(et=e(i))==null?void 0:et.connectedWallet)==null?void 0:st.hdPath},null,8,ys)]))]),t("div",ws,[t("div",$s,n(c.$t("index.app_versions")),1),f(gt,{value:(ot=e(g).appVersion)==null?void 0:ot.items,thead:!1},null,8,["value"]),Cs]),e(o).coingeckoId?x("",!0):(h(),p("div",Is,[t("div",Ss,n(c.$t("index.node_info")),1),f(gt,{value:(nt=e(g).nodeVersion)==null?void 0:nt.items,thead:!1},null,8,["value"]),Ts]))])}}});typeof mt=="function"&&mt(As);export{As as default};
