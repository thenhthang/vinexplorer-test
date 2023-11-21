import{d as ut,x as rt,O as _t,L as ht,b as u,s as pt,a8 as bt,v as vt,r as gt,o,c,e as t,t as e,g as n,n as B,B as d,al as I,F as S,i as F,K as k,f as lt,P as mt,l as nt,I as at}from"./index-f32b4320.js";import{u as ft}from"./connStore-8e7e88a8.js";import{_ as xt}from"./PaginationBar.vue_vue_type_script_setup_true_lang-d4eb73a1.js";const kt={class:""},$t={class:"px-4 pt-3 pb-4 bg-base-200 rounded mb-4 shadow"},yt={class:"mx-auto max-w-7xl px-6 lg:!px-8"},Ct={class:"grid grid-cols-1 gap-x-6 text-center lg:!grid-cols-3"},wt={class:"mx-auto flex items-center"},Bt={class:"order-first text-3xl font-semibold tracking-tight text-main mb-1"},It={class:"text-sm text-gray-500 dark:text-gray-400"},St={class:"mx-auto flex items-center"},Ft=t("span",{class:"text-lg rounded-full"},"⇌",-1),zt={class:"text-c"},Nt={class:"mx-auto"},Ot={class:"order-first text-3xl font-semibold tracking-tight text-main mb-2"},Pt={class:"text-sm text-gray-500 dark:text-gray-400"},Tt={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},Lt={class:"card-title mb-4 overflow-hidden"},jt={class:"ml-2 text-sm"},Rt={class:"overflow-x-auto grid grid-cols-1 md:grid-cols-2 gap-4"},Vt={class:"table table-sm capitalize"},Et={class:"bg-base-200"},qt={colspan:"3"},Dt={class:"w-52"},Mt={class:"w-52"},Kt={class:"w-52"},At={class:"w-52"},Gt={class:"w-52"},Ht={class:"w-52"},Jt={class:"table table-sm text-sm w-full capitalize"},Qt={class:"bg-base-200"},Ut={colspan:"2"},Wt={colspan:"2"},Xt={class:"flex justify-between"},Yt={colspan:"2"},Zt={class:"flex justify-between"},te={class:"w-52"},ee={class:"text-right"},se={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow overflow-hidden"},le={class:"card-title"},ne={class:"overflow-auto"},ae={class:"table w-full mt-4"},oe={style:{position:"relative","z-index":"2"}},ie={class:"flex gap-1"},ce=["onClick","disabled"],de={key:0,class:"loading loading-spinner loading-sm"},ue=["onClick","disabled"],re={key:0,class:"loading loading-spinner loading-sm"},_e={href:"#"},he={class:"flex gap-1"},pe=["onClick","disabled"],be={key:0,class:"loading loading-spinner loading-sm"},ve=["onClick","disabled"],ge={key:0,class:"loading loading-spinner loading-sm"},me=["onClick"],fe={key:0},xe={class:"card-title capitalize"},ke={class:"table"},$e={class:"text-xs truncate text-primary dark:invert"},ye={class:"flex"},Ie=ut({__name:"[connection_id]",props:["chain","connection_id"],setup(ot){const z=ot,_=rt(),it=_t(),N=ht(),h=ft(),f=u({}),a=u({}),O=u([]),$=pt(()=>z.connection_id||0),i=u(!1),b=u({}),y=u(""),v=u(""),x=u(""),g=u(new bt);g.value.limit=5,vt(()=>{$.value&&(_.rpc.getIBCConnectionsById($.value).then(s=>{f.value=s.connection}),_.rpc.getIBCConnectionsClientState($.value).then(s=>{a.value=s.identified_client_state}),_.rpc.getIBCConnectionsChannels($.value).then(s=>{O.value=s.channels}))});function ct(s,r){_.rpc.getIBCChannelNextSequence(s,r).then(p=>{console.log(p)})}function dt(s){y.value,C(v.value,x.value,s-1)}function C(s,r,p=0){g.value.setPage(p),i.value=!0,y.value="Out",v.value=s,x.value=r,b.value={},_.rpc.getTxs("?order_by=2&events=send_packet.packet_src_channel='{channel}'&events=send_packet.packet_src_port='{port}'",{channel:s,port:r},g.value).then(m=>{b.value=m}).finally(()=>i.value=!1)}function P(s,r,p=0){g.value.setPage(p),i.value=!0,y.value="In",v.value=s,x.value=r,b.value={},_.rpc.getTxs("?order_by=2&events=recv_packet.packet_dst_channel='{channel}'&events=recv_packet.packet_dst_port='{port}'",{channel:s,port:r},g.value).then(m=>{b.value=m}).finally(()=>i.value=!1)}function T(s){return s&&s.indexOf("_OPEN")>-1?"success":"warning"}return(s,r)=>{var m,L,j,R,V,E,q,D,M,K,A,G,H,J,Q,U,W,X,Y,Z,tt;const p=gt("RouterLink");return o(),c("div",kt,[t("div",$t,[t("div",yt,[t("dl",Ct,[t("div",wt,[t("div",null,[t("div",Bt,e((j=(L=(m=n(it).latest)==null?void 0:m.block)==null?void 0:L.header)==null?void 0:j.chain_id),1),t("div",It,e(f.value.client_id)+" "+e(z.connection_id),1)])]),t("div",St,[t("div",{class:B({"text-success":((R=f.value.state)==null?void 0:R.indexOf("_OPEN"))>-1})},[Ft,t("div",zt,e(f.value.state),1)],2)]),t("div",Nt,[t("div",Ot,e((V=a.value.client_state)==null?void 0:V.chain_id),1),t("div",Pt,e((E=f.value.counterparty)==null?void 0:E.connection_id)+" "+e(a.value.client_id),1)])])])]),t("div",Tt,[t("h2",Lt,[d(e(s.$t("ibc.title_2")),1),t("span",jt,e((q=a.value.client_state)==null?void 0:q["@type"]),1)]),t("div",Rt,[t("table",Vt,[t("thead",Et,[t("tr",null,[t("td",qt,e(s.$t("ibc.trust_parameters")),1)])]),t("tbody",null,[t("tr",null,[t("td",Dt,e(s.$t("ibc.trust_level"))+":",1),t("td",null,e((M=(D=a.value.client_state)==null?void 0:D.trust_level)==null?void 0:M.numerator)+"/"+e((A=(K=a.value.client_state)==null?void 0:K.trust_level)==null?void 0:A.denominator),1)]),t("tr",null,[t("td",Mt,e(s.$t("ibc.trusting_period"))+":",1),t("td",null,e(n(I)((G=a.value.client_state)==null?void 0:G.trusting_period)),1)]),t("tr",null,[t("td",Kt,e(s.$t("ibc.unbonding_period"))+":",1),t("td",null,e(n(I)((H=a.value.client_state)==null?void 0:H.unbonding_period)),1)]),t("tr",null,[t("td",At,e(s.$t("ibc.max_clock_drift"))+":",1),t("td",null,e(n(I)((J=a.value.client_state)==null?void 0:J.max_clock_drift)),1)]),t("tr",null,[t("td",Gt,e(s.$t("ibc.frozen_height"))+":",1),t("td",null,e((Q=a.value.client_state)==null?void 0:Q.frozen_height),1)]),t("tr",null,[t("td",Ht,e(s.$t("ibc.latest_height"))+":",1),t("td",null,e((U=a.value.client_state)==null?void 0:U.latest_height),1)])])]),t("table",Jt,[t("thead",Qt,[t("tr",null,[t("td",Ut,e(s.$t("ibc.upgrade_parameters")),1)])]),t("tbody",null,[t("tr",null,[t("td",Wt,[t("div",Xt,[t("span",null,e(s.$t("ibc.allow_update_after_expiry"))+":",1),d(),t("span",null,e((W=a.value.client_state)==null?void 0:W.allow_update_after_expiry),1)])])]),t("tr",null,[t("td",Yt,[t("div",Zt,[t("span",null,e(s.$t("ibc.allow_update_after_misbehaviour"))+": ",1),d(),t("span",null,e((X=a.value.client_state)==null?void 0:X.allow_update_after_misbehaviour),1)])])]),t("tr",null,[t("td",te,e(s.$t("ibc.upgrade_path"))+":",1),t("td",ee,e((Y=a.value.client_state)==null?void 0:Y.upgrade_path.join(", ")),1)])])])])]),t("div",se,[t("h2",le,e(s.$t("ibc.channels")),1),t("div",ne,[t("table",ae,[t("thead",null,[t("tr",null,[t("th",null,e(s.$t("ibc.txs")),1),t("th",oe,e(s.$t("ibc.channel_id")),1),t("th",null,e(s.$t("ibc.port_id")),1),t("th",null,e(s.$t("ibc.state")),1),t("th",null,e(s.$t("ibc.counterparty")),1),t("th",null,e(s.$t("ibc.hops")),1),t("th",null,e(s.$t("ibc.version")),1),t("th",null,e(s.$t("ibc.ordering")),1)])]),t("tbody",null,[(o(!0),c(S,null,F(n(h).registryChannels,l=>(o(),c("tr",null,[t("td",null,[t("div",ie,[t("button",{class:"btn btn-xs",onClick:w=>C(l[n(h).sourceField].channel_id,l[n(h).sourceField].port_id),disabled:i.value},[i.value?(o(),c("span",de)):k("",!0),d(" "+e(s.$t("ibc.btn_out")),1)],8,ce),t("button",{class:"btn btn-xs",onClick:w=>P(l[n(h).sourceField].channel_id,l[n(h).sourceField].port_id),disabled:i.value},[i.value?(o(),c("span",re)):k("",!0),d(" "+e(s.$t("ibc.btn_in")),1)],8,ue)])]),t("td",null,[t("a",_e,e(l[n(h).sourceField].channel_id),1)]),t("td",null,e(l[n(h).sourceField].port_id),1)]))),256)),(o(!0),c(S,null,F(O.value,l=>{var w,et;return o(),c("tr",null,[t("td",null,[t("div",he,[t("button",{class:"btn btn-xs",onClick:st=>C(l.channel_id,l.port_id),disabled:i.value},[i.value?(o(),c("span",be)):k("",!0),d(" "+e(s.$t("ibc.btn_out")),1)],8,pe),t("button",{class:"btn btn-xs",onClick:st=>P(l.channel_id,l.port_id),disabled:i.value},[i.value?(o(),c("span",ge)):k("",!0),d(" "+e(s.$t("ibc.btn_in")),1)],8,ve)])]),t("td",null,[t("a",{href:"#",onClick:st=>ct(l.channel_id,l.port_id)},e(l.channel_id),9,me)]),t("td",null,e(l.port_id),1),t("td",null,[t("div",{class:B(["text-xs truncate relative py-2 px-4 rounded-full w-fit",`text-${T(l.state)}`])},[t("span",{class:B(["inset-x-0 inset-y-0 opacity-10 absolute",`bg-${T(l.state)}`])},null,2),d(" "+e(l.state),1)],2)]),t("td",null,e((w=l.counterparty)==null?void 0:w.port_id)+"/"+e((et=l.counterparty)==null?void 0:et.channel_id),1),t("td",null,e(l.connection_hops.join(", ")),1),t("td",null,e(l.version),1),t("td",null,e(l.ordering),1)])}),256))])])])]),v.value?(o(),c("div",fe,[t("h3",xe,"Transactions ("+e(v.value)+" "+e(x.value)+" "+e(y.value)+") ",1),t("table",ke,[t("thead",null,[t("tr",null,[t("td",null,e(s.$t("ibc.height")),1),t("td",null,e(s.$t("ibc.txhash")),1),t("td",null,e(s.$t("ibc.messages")),1),t("td",null,e(s.$t("ibc.time")),1)])]),t("tbody",null,[(o(!0),c(S,null,F((Z=b.value)==null?void 0:Z.tx_responses,l=>(o(),c("tr",null,[t("td",null,e(l.height),1),t("td",null,[t("div",$e,[lt(p,{to:`/${n(_).chainName}/tx/${l.txhash}`},{default:mt(()=>[d(e(l.txhash),1)]),_:2},1032,["to"])])]),t("td",null,[t("div",ye,[d(e(n(N).messages(l.tx.body.messages))+" ",1),l.code===0?(o(),nt(n(at),{key:0,icon:"mdi-check",class:"text-success text-lg"})):(o(),nt(n(at),{key:1,icon:"mdi-multiply",class:"text-error text-lg"}))])]),t("td",null,e(n(N).toLocaleDate(l.timestamp)),1)]))),256))])]),lt(xt,{limit:g.value.limit,total:(tt=b.value.pagination)==null?void 0:tt.total,callback:dt},null,8,["limit","total"])])):k("",!0)])}}});export{Ie as default};
