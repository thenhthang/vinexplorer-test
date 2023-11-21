import{d as I,s as B,o as d,c as i,F as R,i as A,e as t,n as y,Y as W,L as M,O as Y,x as q,b as k,v as G,cs as J,ac as Q,r as X,t as a,f as T,P as Z,y as g,D as tt,g as p,K as C,B as V,R as N,ae as F}from"./index-f32b4320.js";import{b as H}from"./route-block-83d24a4e.js";const et={class:"flex items-center justify-evenly gap-0.5"},st=["data-tip"],ot=I({__name:"UptimeBar",props:{blocks:{type:Array},validator:{type:String}},setup(S){const _=S,b=B(()=>{const u=Array(50).fill({height:0,color:"bg-secondary"});return _.blocks&&_.blocks.forEach(h=>{var m;const v=(m=h.signatures)==null?void 0:m.findIndex(x=>x.validator_address===_.validator);u.push({height:h.height,color:v>-1?"bg-green-500":"bg-red-500"}),u.shift()}),u});return(u,h)=>(d(),i("div",et,[(d(!0),i(R,null,A(b.value,(v,m)=>(d(),i("div",{class:"cursor-default",key:m},[t("div",{class:y(["tooltip",v.color]),"data-tip":v.height,style:{width:"4px"}},"   ",10,st)]))),128))]))}}),at={class:"tabs tabs-boxed bg-transparent mb-4"},lt={class:"tab text-gray-400 capitalize"},rt={class:"bg-base-100 px-5 pt-5"},ct={class:"flex items-center gap-x-4"},nt={key:0,class:"alert alert-warning my-4"},dt={class:"flex items-center justify-between py-0 w-[298px]"},it={class:"truncate text-sm"},ut={class:"ml-1 text-black dark:text-white"},_t={key:0,class:"badge badge-sm bg-transparent border-0 text-red-500 font-bold"},ht={key:1,class:"badge badge-sm bg-transparent text-green-600 border-0 font-bold"},mt={class:"table table-compact w-full mt-5"},pt={class:"capitalize"},bt={class:"text-right"},vt={class:"text-right"},ft={class:"text-right"},kt={class:"hover"},xt={class:"truncate max-w-sm"},yt={class:"text-right"},wt=["data-tip"],$t={key:0},Ct=["data-tip"],Nt={class:"text-xs text-right"},Bt={key:0,class:"text-right"},St={class:"text-right"},jt={class:"capitalize"},zt={colspan:"2",class:"text-right"},Rt=["data-tip"],At={class:"ml-2 btn btn-error btn-xs"},Lt=t("td",{colspan:"8"},null,-1),Pt=t("div",{class:"h-6"},null,-1),Kt=I({__name:"index",props:["chain"],setup(S){const _=W(),b=M(),u=Y(),h=q(),v=k(0),m=k([]),x=k(""),j=k(!0),w=k({}),z=k({}),L=B(()=>x?_.validators.filter(s=>s.description.moniker.indexOf(x.value)>-1):_.validators),P=B(()=>{var s,o,r;if(h.isConsumerChain){_.loadKeyRotationFromLocalstorage((r=(o=(s=u.latest)==null?void 0:s.block)==null?void 0:o.header)==null?void 0:r.chain_id);const l=Number(w.value.signed_blocks_window||0);return L.value.map(n=>{const c=_.findRotatedHexAddress(n.consensus_pubkey),f=z.value[c];return{v:n,signing:f,hex:N.toBase64(N.fromHex(c)),uptime:f&&l>0?(l-Number(f.missed_blocks_counter))/l:void 0}})}else{const l=Number(w.value.signed_blocks_window||0);return L.value.map(n=>{const c=z.value[F(n.consensus_pubkey)];return{v:n,signing:c,hex:N.toBase64(N.fromHex(F(n.consensus_pubkey))),uptime:c&&l>0?(l-Number(c.missed_blocks_counter))/l:void 0}})}});G(()=>{j.value=!0,u.fetchLatest().then(s=>{var l,e,n;let o=s;((l=u.recents)==null?void 0:l.findIndex(c=>c.block_id.hash===s.block_id.hash))>-1&&(o=((e=u.recents)==null?void 0:e.at(0))||s),v.value=Number(o.block.header.height),m.value.unshift(o.block.last_commit);const r=Number(((n=o.block.header)==null?void 0:n.height)||0);if(r>50){let c=Promise.resolve();for(let f=r-1;f>r-50;f-=1)c=c.then(()=>new Promise((O,Dt)=>{j.value&&K.value.length<50&&u.fetchBlock(f).then(U=>{m.value.unshift(U.block.last_commit),O()})}))}}),h.rpc.getSlashingSigningInfos().then(s=>{var o;(o=s.info)==null||o.forEach(r=>{z.value[J(r.address)]=r})}),h.rpc.getSlashingParams().then(s=>{w.value=s.params})});const K=B(()=>{const s=u.recents.map(r=>r.block.last_commit),o=[...m.value,...s];return o.length>50?o.slice(o.length-50):o});Q(()=>{j.value=!1});const $=k("2");function D(s){$.value=s}function E(){var s,o,r;_.fetchAllKeyRotation((r=(o=(s=u.latest)==null?void 0:s.block)==null?void 0:o.header)==null?void 0:r.chain_id)}return(s,o)=>{const r=X("RouterLink");return d(),i("div",null,[t("div",at,[t("a",{class:y(["tab text-gray-400 capitalize",{"tab-active":$.value==="3"}]),onClick:o[0]||(o[0]=l=>D("3"))},a(s.$t("uptime.overall")),3),t("a",{class:y(["tab text-gray-400 capitalize",{"tab-active":$.value==="2"}]),onClick:o[1]||(o[1]=l=>D("2"))},a(s.$t("module.blocks")),3),T(r,{to:`/${S.chain}/uptime/customize`},{default:Z(()=>[t("a",lt,a(s.$t("uptime.customize")),1)]),_:1},8,["to"])]),t("div",rt,[t("div",ct,[g(t("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=l=>x.value=l),placeholder:"Keywords to filter validators",class:"input input-sm w-full flex-1 border border-gray-200 dark:border-gray-600"},null,512),[[tt,x.value]]),p(h).isConsumerChain?(d(),i("button",{key:0,class:"btn btn-sm btn-primary",onClick:E},"Load Rotated Keys")):C("",!0)]),p(h).isConsumerChain&&Object.keys(p(_).keyRotation).length===0?(d(),i("div",nt," Note: Please load rotated keys to see the correct uptime ")):C("",!0),t("div",{class:y(["flex flex-row flex-wrap gap-x-4 mt-4 justify-center",$.value==="2"?"":"hidden"])},[(d(!0),i(R,null,A(P.value,({v:l,signing:e,hex:n},c)=>(d(),i("div",{key:c},[t("div",dt,[t("label",it,[t("span",ut,a(c+1)+"."+a(l.description.moniker),1)]),Number((e==null?void 0:e.missed_blocks_counter)||0)>10?(d(),i("div",_t,a(e==null?void 0:e.missed_blocks_counter),1)):(d(),i("div",ht,a(e==null?void 0:e.missed_blocks_counter),1))]),T(ot,{blocks:K.value,validator:n},null,8,["blocks","validator"])]))),128))],2),t("div",{class:y([$.value==="3"?"":"hidden","overflow-x-auto"])},[t("table",mt,[t("thead",pt,[t("tr",null,[t("td",null,a(s.$t("account.validator")),1),t("td",bt,a(s.$t("module.uptime")),1),t("td",null,a(s.$t("uptime.last_jailed_time")),1),t("td",vt,a(s.$t("uptime.signed_precommits")),1),t("td",ft,a(s.$t("uptime.start_height")),1),t("td",null,a(s.$t("uptime.tombstoned")),1)])]),(d(!0),i(R,null,A(P.value,({v:l,signing:e,uptime:n},c)=>(d(),i("tr",kt,[t("td",null,[t("div",xt,a(c+1)+". "+a(l.description.moniker),1)]),t("td",yt,[e?(d(),i("span",{key:0,class:y(["",n&&n>.95?"text-green-500":"text-red-500"])},[t("div",{class:"tooltip","data-tip":`${e.missed_blocks_counter} missing blocks`},a(p(b).percent(n)),9,wt)],2)):C("",!0)]),t("td",null,[e&&!e.jailed_until.startsWith("1970")?(d(),i("span",$t,[t("div",{class:"tooltip","data-tip":p(b).toDay(e==null?void 0:e.jailed_until,"long")},[t("span",null,a(p(b).toDay(e==null?void 0:e.jailed_until,"from")),1)],8,Ct)])):C("",!0)]),t("td",Nt,[e&&e.jailed_until.startsWith("1970")?(d(),i("span",Bt,a(p(b).percent(Number(e.index_offset)/(v.value-Number(e.start_height)))),1)):C("",!0),V(" "+a(e==null?void 0:e.index_offset),1)]),t("td",St,a(e==null?void 0:e.start_height),1),t("td",jt,a(e==null?void 0:e.tombstoned),1)]))),256)),t("tfoot",null,[t("tr",null,[t("td",zt,[V(a(s.$t("uptime.minimum_uptime"))+": ",1),t("span",{class:"lowercase tooltip","data-tip":`Window size: ${w.value.signed_blocks_window}`},[t("span",At,a(p(b).percent(w.value.min_signed_per_window)),1)],8,Rt)]),Lt])])])],2),Pt])])}}});typeof H=="function"&&H(Kt);export{Kt as default};
