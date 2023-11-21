import{d as F,Y as R,L as H,x as J,q as P,b as h,s as V,r as q,o as d,c,e as t,t as a,B as D,F as k,i as y,K as x,g as p,n as K,f as W,P as Y,y as w,z as G,D as Q,b$ as X,ae as z,C as B,cs as Z}from"./index-008b341e.js";const tt={class:"overflow-x-auto w-full"},et={class:"lg:!flex lg:!items-center lg:!justify-between bg-base-100 p-5"},st={class:"min-w-0 flex-1"},lt={class:"text-2xl font-bold leading-7 sm:!truncate sm:!text-3xl sm:!tracking-tight"},at={class:"mt-1 flex flex-col sm:!mt-0 sm:!flex-row sm:!flex-wrap sm:!space-x-6"},ot={class:"mt-2 flex items-center text-sm text-gray-500"},nt=t("svg",{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z","clip-rule":"evenodd"}),t("path",{d:"M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"})],-1),it=t("div",{class:"mt-5 flex lg:!ml-4 lg:!mt-0"},null,-1),dt={class:"table table-compact w-full"},ct=t("th",null,"Blockchain",-1),rt=t("th",null,null,-1),ut={class:"hover"},mt={class:"capitalize"},ht={key:0},ft={key:0,class:"text-xs flex flex-wrap"},_t={class:"mt-1"},vt={class:"badge"},pt={class:"capitalize"},gt={class:""},bt={class:"text-center"},kt={for:"add-validator",class:"btn btn-primary mt-5"},yt={class:"modal"},xt={class:"modal-box relative"},wt=t("label",{for:"add-validator",class:"btn btn-sm btn-circle absolute right-2 top-2"},"✕",-1),Ct={class:"text-lg font-bold"},It={class:"form-control my-5 border-2"},St={class:"input-group input-group-md"},$t=["value"],Nt={class:"py-4 max-h-60 overflow-y-auto"},Vt={class:"table table-compact w-full hover"},Dt=t("th",null,null,-1),zt=["for"],Bt={class:"w-full"},jt=["id","value"],Ot={class:"modal-action"},Lt=t("div",{class:"h-6"},null,-1),At=F({__name:"customize",props:["chain"],setup(Mt){const j=R(),C=H(),O=J(),g=P(),o=h(JSON.parse(localStorage.getItem("uptime-validators")||"{}")),b=h({}),m=h([]),u=h(O.chainName),f=h(j.validators),_=h("");function I(s){const l=g.chains[s];l&&l.endpoints.rest&&B.newDefault(l.endpoints.rest[0].address).getSlashingSigningInfos().then(e=>{b.value[s]=e.info})}o.value&&Object.keys(o.value).map(s=>{I(s)});function L(){const s=o.value[u.value];s&&(m.value=s.map(l=>l.address))}const M=V(()=>_.value?f.value.filter(s=>s.description.moniker.indexOf(_.value)>-1):f.value),T=V(()=>{const s=[];return o.value&&Object.keys(o.value).map(l=>{const n=o.value[l],e=b.value[l];n&&e&&n.forEach(r=>{const i=e.find(v=>Z(v.address)===r.address);s.push({chainName:l,v:r,sigingInfo:i})})}),s});function A(){b.value[u.value]||I(u.value);const s=[];m.value.forEach(l=>{const n=f.value.find(e=>z(e.consensus_pubkey)===l);n&&s.push({name:n.description.moniker||l,address:l})}),o.value||(o.value={}),o.value[u.value]=s,localStorage.setItem("uptime-validators",JSON.stringify(o.value))}function E(){var e,r;f.value=[];const s=(r=(e=g.chains[u.value].endpoints.rest)==null?void 0:e.at(0))==null?void 0:r.address;if(!s)return;B.newDefault(s).getStakingValidators("BOND_STATUS_BONDED").then(i=>{f.value=i.validators});const n=o.value[u.value];n?m.value=n.map(i=>i.address):m.value=[]}function U(s){if(s){const l=Number(s);if(l<10)return" badge-success";if(l>1e3)return" badge-error";if(l>0)return" badge-warning"}}return(s,l)=>{const n=q("RouterLink");return d(),c("div",null,[t("div",tt,[t("div",et,[t("div",st,[t("h2",lt,a(s.$t("uptime.my_validators")),1),t("div",at,[t("div",ot,[nt,D(" "+a(s.$t("uptime.add_validators_monitor")),1)])])]),it]),t("table",dt,[t("thead",null,[t("tr",null,[t("th",null,a(s.$t("uptime.no")),1),ct,t("th",null,a(s.$t("account.validator")),1),t("th",null,a(s.$t("uptime.signed_blocks")),1),t("th",null,a(s.$t("uptime.last_jailed_time")),1),t("th",null,a(s.$t("uptime.tombstoned")),1),t("th",null,a(s.$t("uptime.missing_blocks")),1),rt])]),t("tbody",null,[(d(!0),c(k,null,y(T.value,(e,r)=>{var i,v,S,$,N;return d(),c("tr",ut,[t("td",null,a(r+1),1),t("td",mt,a(e.chainName),1),t("td",null,a(e.v.name),1),t("td",null,[e.sigingInfo?(d(),c("span",ht,a(Number(e.sigingInfo.index_offset)-Number(e.sigingInfo.start_height)),1)):x("",!0)]),t("td",null,[e.sigingInfo&&!((i=e.sigingInfo)!=null&&i.jailed_until.startsWith("1970"))?(d(),c("div",ft,[t("div",_t,a(p(C).toLocaleDate((v=e.sigingInfo)==null?void 0:v.jailed_until)),1),t("div",vt,a(p(C).toDay(e.sigingInfo.jailed_until,"from")),1)])):x("",!0)]),t("td",pt,a((S=e.sigingInfo)==null?void 0:S.tombstoned),1),t("td",null,[e.sigingInfo?(d(),c("span",{key:0,class:K(["badge",U(($=e.sigingInfo)==null?void 0:$.missed_blocks_counter)])},a((N=e.sigingInfo)==null?void 0:N.missed_blocks_counter),3)):x("",!0)]),t("td",gt,[W(n,{to:`/${e.chainName}/uptime/#blocks`,class:"btn btn-xs btn-primary"},{default:Y(()=>[D(a(s.$t("module.blocks")),1)]),_:2},1032,["to"])])])}),256))])])]),t("div",bt,[t("label",kt,a(s.$t("uptime.add_validators")),1)]),t("input",{type:"checkbox",id:"add-validator",class:"modal-toggle",onChange:L},null,32),t("div",yt,[t("div",xt,[wt,t("h3",Ct,a(s.$t("uptime.add_validators")),1),t("div",It,[t("div",St,[w(t("select",{"onUpdate:modelValue":l[0]||(l[0]=e=>u.value=e),class:"select select-bordered capitalize",onChange:E},[(d(!0),c(k,null,y(p(g).chains,e=>(d(),c("option",{value:e.chainName},a(e.chainName),9,$t))),256))],544),[[G,u.value]]),w(t("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>_.value=e),type:"text",class:"input w-full",placeholder:"keywords to filter validator"},null,512),[[Q,_.value]])])]),t("div",Nt,[t("table",Vt,[t("thead",null,[t("tr",null,[t("th",null,a(s.$t("account.validator")),1),Dt])]),t("tbody",null,[(d(!0),c(k,null,y(M.value,(e,r)=>(d(),c("tr",null,[t("td",null,[t("label",{for:e.operator_address},[t("div",Bt,a(r+1)+". "+a(e.description.moniker),1)],8,zt)]),t("td",null,[w(t("input",{id:e.operator_address,"onUpdate:modelValue":l[2]||(l[2]=i=>m.value=i),class:"checkbox",type:"checkbox",value:p(z)(e.consensus_pubkey)},null,8,jt),[[X,m.value]])])]))),256))])])]),t("div",Ot,[t("label",{class:"btn btn-primary",onClick:A},a(s.$t("uptime.add")),1)])])]),Lt])}}});export{At as default};
