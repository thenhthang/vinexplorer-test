import{d as m,x as k,O as $,b as i,R as g,s as x,v as w,o as B,c as N,e,t as s,B as a,T as l}from"./index-f32b4320.js";import{b as v}from"./route-block-83d24a4e.js";const M={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},E={class:"card-title truncate mb-2"},S={class:"text-sm"},V={class:"text-primary lowercase",href:"https://blog.cosmos.network/cosmos-sdk-state-sync-guide-99e4cf43be2f"},q={class:"lowercase"},C={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},H={class:"card-title truncate mb-2"},I={class:"text-sm"},O=e("br",null,null,-1),T=e("br",null,null,-1),j=e("br",null,null,-1),D=e("br",null,null,-1),R=e("br",null,null,-1),U=e("br",null,null,-1),z={class:"mockup-code bg-base-200 my-2"},A=l('<pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">[state-sync]</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">enable = true</code></pre><pre data-prefix="&gt;"><code class="text-gray-800"></code></pre>',3),F={"data-prefix":">"},G={class:"text-gray-800 dark:invert"},J={"data-prefix":">"},K={class:"text-gray-800 dark:invert"},L={"data-prefix":">"},P={class:"text-gray-800 dark:invert"},Q=l('<pre data-prefix="&gt;"><code class="text-gray-800 dark:invert"></code></pre><pre data-prefix="&gt;"><code class="text-green-400"># 2/3 of unbonding time</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">trust_period = &quot;168h&quot;</code></pre>',3),W=e("br",null,null,-1),X={class:"bg-base-200 text-gray-600 px-2 py-px mx-1 rounded shadow"},Y=e("br",null,null,-1),Z={class:"bg-base-200 text-gray-600 px-2 py-px mx-1 rounded shadow"},ee={class:"bg-base-200 text-gray-600 px-2 py-px mx-1 rounded shadow"},te={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},se={class:"card-title truncate mb-2"},ae={class:"text-sm"},oe=l('<br><br><div class="mockup-code bg-base-200 my-2"><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">[state-sync]</code></pre><pre data-prefix="&gt;"><code class="text-green-400"># snapshot-interval specifies the block interval at which local state sync snapshots are</code></pre><pre data-prefix="&gt;"><code class="text-green-400"># taken (0 to disable). Must be a multiple of pruning-keep-every.</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">snapshot-interval = 1000</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert"></code></pre><pre data-prefix="&gt;"><code class="text-green-400"># snapshot-keep-recent specifies the number of recent snapshots to keep and serve (0 to keep all). Each snapshot is about 500MiB</code></pre><pre data-prefix="&gt;"><code class="text-gray-800 dark:invert">snapshot-keep-recent = 2</code></pre></div>',3),re=m({__name:"index",props:["hash","chain"],setup(ne){var u,b;const p=k(),_=$(),c=i({}),o=i(Number(((b=(u=_.latest.block)==null?void 0:u.header)==null?void 0:b.height)||2001)),h=i("");o.value>2e3&&(o.value=Math.round((o.value-2e3)/1e3)*1e3,_.fetchBlock(o.value).then(t=>{h.value=g.toHex(g.fromBase64(t.block_id.hash)).toUpperCase()}));const y=x(()=>{var t,d,r;return(r=(d=(t=p.current)==null?void 0:t.endpoints)==null?void 0:d.rpc)==null?void 0:r.map(f=>f.address).join(",")}),n=x(()=>{var t;return((t=c.value.application_version)==null?void 0:t.app_name)||"gaiad"});return w(()=>{p.rpc.getBaseNodeInfo().then(t=>{c.value=t})}),(t,d)=>{var r;return B(),N("div",null,[e("div",M,[e("h2",E,s(t.$t("statesync.title")),1),e("div",S,[a(s(t.$t("statesync.description"))+" ",1),e("a",V,s(t.$t("statesync.here"))+" ",1),e("a",q,s(t.$t("statesync.for_more_info"))+".",1)])]),e("div",C,[e("h2",H,s(t.$t("statesync.title_2")),1),e("div",I,[a(" 1. "+s(t.$t("statesync.text_1"))+" ("+s(n.value)+" "+s(t.$t("statesync.version"))+": "+s(((r=c.value.application_version)==null?void 0:r.version)||"")+") ",1),O,a(" "+s(t.$t("statesync.text_1_1"))+". ",1),T,j,a(" 2. "+s(t.$t("statesync.text_2")),1),D,a(" "+s(t.$t("statesync.text_2_1"))+". ",1),R,U,e("div",z,[A,e("pre",F,[e("code",G,'rpc_servers = "'+s(y.value)+'"',1)]),e("pre",J,[e("code",K,"trust_height = "+s(o.value)+" ",1)]),e("pre",L,[e("code",P,'trust_hash = "'+s(h.value)+'"',1)]),Q]),W,a(" 3. "+s(t.$t("statesync.text_3"))+": ",1),e("code",X,s(n.value)+" start",1),Y,a(" "+s(t.$t("statesync.text_3_1"))+" ",1),e("code",Z,s(n.value)+" unsafe-reset-all",1),a(" or "),e("code",ee,s(n.value)+" tendermint unsafe-reset-all --home ~/.HOME",1),a(" "+s(t.$t("statesync.text_3_2"))+". ",1)])]),e("div",te,[e("h2",se,s(t.$t("statesync.title_3")),1),e("div",ae,[a(s(t.$t("statesync.text_title_3"))+" ",1),oe])])])}}});typeof v=="function"&&v(re);export{re as default};