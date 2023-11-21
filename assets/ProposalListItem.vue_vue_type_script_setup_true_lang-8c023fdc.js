import{d as G,a1 as y,L as z,o as a,c,e as t,t as n,g as e,ah as i,aj as U,a2 as H,Y as W,x as K,b as Y,r as q,F as R,i as j,f as g,P as L,B,K as v,n as k,l as Q,ak as X}from"./index-8281e2bb.js";import{s as Z}from"./index-c3a2b1e9.js";const M={class:"progress rounded-[3px] h-6 text-xs flex items-center"},m=["title"],oo=["title"],so=["title"],to=["title"],lo=G({__name:"ProposalProcess",props:{tally:{type:Object},pool:{type:Object}},setup(b){const _=b,p=y(()=>{var l;return(l=_.pool)==null?void 0:l.bonded_tokens}),u=z(),x=y(()=>{var l;return u.calculatePercent((l=_.tally)==null?void 0:l.yes,p.value)}),h=y(()=>{var l;return u.calculatePercent((l=_.tally)==null?void 0:l.no,p.value)}),s=y(()=>{var l;return u.calculatePercent((l=_.tally)==null?void 0:l.abstain,p.value)}),r=y(()=>{var l;return u.calculatePercent((l=_.tally)==null?void 0:l.no_with_veto,p.value)});return(l,F)=>(a(),c("div",M,[t("div",{class:"h-6 bg-yes flex items-center pl-2 text-white overflow-hidden",style:i(`width: ${e(x)}`),title:e(x)},n(e(x)),13,m),t("div",{class:"h-6 bg-no flex items-center text-white overflow-hidden",style:i(`width: ${e(h)}`),title:e(h)},n(e(h)),13,oo),t("div",{class:"h-6 bg-[#B71C1C] flex items-center text-white overflow-hidden",style:i(`width: ${e(r)};`),title:e(r)},n(e(r)),13,so),t("div",{class:"h-6 bg-secondary flex items-center text-white overflow-hidden",style:i(`width: ${e(s)}`),title:e(s)},n(e(s)),13,to)]))}});const J=U(lo,[["__scopeId","data-v-b197f3d9"]]),eo={class:"bg-white dark:bg-[#28334e] rounded text-sm"},no={class:"table-compact w-full table-fixed hidden lg:!table"},ao={class:"px-4 w-20"},co=["onClick"],ro={class:"w-full"},_o={key:0,class:"bg-[#f6f2ff] text-[#9c6cff] dark:bg-gray-600 dark:text-gray-300 inline-block rounded-full px-2 py-[1px] text-xs mb-1"},po={class:"w-60"},uo={class:"w-36"},xo={class:"pl-4"},ho={class:"text-xs"},fo={class:"truncate col-span-2 md:!col-span-1 text-xs text-gray-500 dark:text-gray-400 text-right md:!flex md:!justify-start"},yo={key:0,class:"w-40"},vo={class:""},bo=["onClick"],io={key:0},go={key:1},ko={class:"lg:!hidden"},Eo={class:"text-main text-base mb-1 flex justify-between hover:text-indigo-400"},Oo=["onClick"],To={class:"grid grid-cols-4 mt-2 mb-2"},wo={class:"col-span-2"},Po={key:0,class:"bg-[#f6f2ff] text-[#9c6cff] dark:bg-gray-600 dark:text-gray-300 inline-block rounded-full px-2 py-[1px] text-xs mb-1"},So={class:"truncate text-xs text-gray-500 dark:text-gray-400 flex items-center justify-end"},Co={key:0,class:"mt-4"},Do={class:"flex justify-between"},$o={class:"text-xs flex items-center"},No=["onClick"],Vo={key:0},Io={key:1},Ao=t("input",{type:"checkbox",id:"proposal-detail-modal",class:"modal-toggle"},null,-1),Ro={for:"proposal-detail-modal",class:"modal"},jo={class:"modal-box !w-11/12 !max-w-5xl",for:""},Lo=t("label",{for:"proposal-detail-modal",class:"btn btn-sm btn-circle absolute right-2 top-2"},"✕",-1),Bo=t("h3",{class:"font-bold text-lg"},"Description",-1),Jo={class:"py-4"},Fo=G({__name:"ProposalListItem",props:{proposals:{type:Object}},setup(b){const _=H(),p=z(),u=W(),x=K();function h(l){return l&&l.substring(l.lastIndexOf(".")+1)}const s={PROPOSAL_STATUS_VOTING_PERIOD:"VOTING",PROPOSAL_STATUS_PASSED:"PASSED",PROPOSAL_STATUS_REJECTED:"REJECTED"},r=Y();return(l,F)=>{var T,w,P,S,C,D,$,N,V,I,A;const O=q("RouterLink");return a(),c("div",eo,[t("table",no,[t("tbody",null,[(a(!0),c(R,null,j((T=b.proposals)==null?void 0:T.proposals,(o,E)=>{var f;return a(),c("tr",{key:E},[t("td",ao,[t("label",{for:"proposal-detail-modal",class:"text-main text-base hover:text-indigo-400 cursor-pointer",onClick:d=>r.value=o}," #"+n(o==null?void 0:o.proposal_id),9,co)]),t("td",ro,[t("div",null,[g(O,{to:`/${e(x).chainName}/gov/${o==null?void 0:o.proposal_id}`,class:"text-main text-base mb-1 block hover:text-indigo-400 truncate"},{default:L(()=>{var d;return[B(n(((d=o==null?void 0:o.content)==null?void 0:d.title)||(o==null?void 0:o.title)),1)]}),_:2},1032,["to"]),o.content?(a(),c("div",_o,n(h(o.content["@type"])),1)):v("",!0)])]),t("td",po,[g(J,{pool:e(u).pool,tally:o.final_tally_result},null,8,["pool","tally"])]),t("td",uo,[t("div",xo,[t("div",{class:k(["flex items-center",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"text-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"text-no":"text-info"])},[t("div",{class:k(["w-1 h-1 rounded-full mr-2",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"bg-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"bg-no":"bg-info"])},null,2),t("div",ho,n((s==null?void 0:s[o==null?void 0:o.status])||(o==null?void 0:o.status)),1)],2),t("div",fo,n(e(p).toDay(o.voting_end_time,"from")),1)])]),(s==null?void 0:s[o==null?void 0:o.status])==="VOTING"?(a(),c("td",yo,[t("div",vo,[t("label",{for:"vote",class:"btn btn-xs btn-primary rounded-sm",onClick:d=>e(_).open("vote",{proposal_id:o==null?void 0:o.proposal_id})},[(o==null?void 0:o.voterStatus)!=="VOTE_OPTION_NO_WITH_VETO"?(a(),c("span",io,n((f=o==null?void 0:o.voterStatus)==null?void 0:f.replace("VOTE_OPTION_","")),1)):(a(),c("span",go,"Vote"))],8,bo)])])):v("",!0)])}),128))])]),t("div",ko,[(a(!0),c(R,null,j((w=b.proposals)==null?void 0:w.proposals,(o,E)=>{var f;return a(),c("div",{key:E,class:"px-4 py-4"},[t("div",Eo,[g(O,{to:`/${e(x).chainName}/gov/${o==null?void 0:o.proposal_id}`,class:"flex-1 w-0 truncate mr-4"},{default:L(()=>{var d;return[B(n(((d=o==null?void 0:o.content)==null?void 0:d.title)||(o==null?void 0:o.title)),1)]}),_:2},1032,["to"]),t("label",{for:"proposal-detail-modal",class:"text-main text-base hover:text-indigo-400 cursor-pointer",onClick:d=>r.value=o}," #"+n(o==null?void 0:o.proposal_id),9,Oo)]),t("div",To,[t("div",wo,[o.content?(a(),c("div",Po,n(h(o.content["@type"])),1)):v("",!0)]),t("div",So,n(e(p).toDay(o.voting_end_time,"from")),1)]),t("div",null,[g(J,{pool:e(u).pool,tally:o.final_tally_result},null,8,["pool","tally"])]),(s==null?void 0:s[o==null?void 0:o.status])==="VOTING"?(a(),c("div",Co,[t("div",Do,[t("div",{class:k(["flex items-center",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"text-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"text-no":"text-info"])},[t("div",{class:k(["w-1 h-1 rounded-full mr-2",(s==null?void 0:s[o==null?void 0:o.status])==="PASSED"?"bg-yes":(s==null?void 0:s[o==null?void 0:o.status])==="REJECTED"?"bg-no":"bg-info"])},null,2),t("div",$o,n((s==null?void 0:s[o==null?void 0:o.status])||(o==null?void 0:o.status)),1)],2),t("label",{for:"vote",class:"btn btn-xs btn-primary rounded-sm",onClick:d=>e(_).open("vote",{proposal_id:o==null?void 0:o.proposal_id})},[(o==null?void 0:o.voterStatus)!=="VOTE_OPTION_NO_WITH_VETO"?(a(),c("span",Vo,n((f=o==null?void 0:o.voterStatus)==null?void 0:f.replace("VOTE_OPTION_","")),1)):(a(),c("span",Io,"Vote"))],8,No)])])):v("",!0)])}),128))]),Ao,t("label",Ro,[t("label",jo,[Lo,Bo,t("p",Jo,[(S=(P=r.value)==null?void 0:P.content)!=null&&S.description||(C=r.value)!=null&&C.summary?(a(),Q(X(e(Z)((($=(D=r.value)==null?void 0:D.content)==null?void 0:$.description)||((N=r.value)==null?void 0:N.summary),"horizontal")),{key:0,value:((I=(V=r.value)==null?void 0:V.content)==null?void 0:I.description)||((A=r.value)==null?void 0:A.summary)},null,8,["value"])):v("",!0)])])])])}}});export{Fo as _};