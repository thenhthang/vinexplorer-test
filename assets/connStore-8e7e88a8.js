import{ad as f,U as p,x as y,af as C}from"./index-f32b4320.js";var o=globalThis&&globalThis.__awaiter||function(i,t,n,c){function h(e){return e instanceof n?e:new n(function(r){r(e)})}return new(n||(n=Promise))(function(e,r){function m(s){try{a(c.next(s))}catch(u){r(u)}}function l(s){try{a(c.throw(s))}catch(u){r(u)}}function a(s){s.done?e(s.value):h(s.value).then(m,l)}a((c=c.apply(i,t||[])).next())})};class d{constructor(t="https://registry.ping.pub"){this.endpoint=t}getAny(t){return o(this,void 0,void 0,function*(){return f(`${this.endpoint}${t}`).then(n=>n.json())})}get(t){return o(this,void 0,void 0,function*(){return f(`${this.endpoint}${t}`).then(n=>n.json())})}fetchChainNames(){return o(this,void 0,void 0,function*(){return(yield this.get("/")).filter(n=>n.type==="directory"&&n.name!=="testnet"&&!n.name.startsWith("_")).map(n=>n.name)})}fetchChainInfo(t){return o(this,void 0,void 0,function*(){return this.get(`/${t}/chain.json`)})}fetchAssetsList(t){return o(this,void 0,void 0,function*(){return this.get(`/${t}/assetlist.json`)})}fetchIBCPaths(){return o(this,void 0,void 0,function*(){const t=yield this.get("/_IBC/"),n=/([\w]+)-([\w]+)\.json/;return t.map(c=>{const h=c.name.match(n),e={};return e.path=c.name,e.from=h[1],e.to=h[2],e})})}fetchIBCPathInfo(t){return o(this,void 0,void 0,function*(){return yield this.get(`/_IBC/${t}`)})}}const g=p("module-ibc",{state:()=>({paths:[],connectionId:"",registryConf:{}}),getters:{chain(){return y()},commonIBCs(){return this.paths.filter(i=>{var t;return i.path.search(((t=this.chain.current)==null?void 0:t.prettyName)||this.chain.chainName)>-1})},sourceField(){var i,t,n;return((t=(i=this.registryConf)==null?void 0:i.chain_1)==null?void 0:t.chain_name)===((n=this.chain.current)==null?void 0:n.prettyName)||this.chain.chainName?"chain_1":"chain_2"},destField(){var i,t,n;return((t=(i=this.registryConf)==null?void 0:i.chain_1)==null?void 0:t.chain_name)===((n=this.chain.current)==null?void 0:n.prettyName)||this.chain.chainName?"chain_2":"chain_1"},registryChannels(){return this.registryConf.channels}},actions:{load(){new d().fetchIBCPaths().then(t=>{this.paths=t})},fetchConnection(i){new d().fetchIBCPathInfo(i).then(n=>{var h;const c=n.chain_1.chain_name===((h=this.chain.current)==null?void 0:h.prettyName)||this.chain.chainName?n.chain_1.connection_id:n.chain_2.connection_id;this.registryConf=n,this.showConnection(c)})},showConnection(i){i||(this.registryConf={});const t=`/${this.chain.chainName}/ibc/connection/${i||`connection-${this.connectionId||0}`}`;C.push(t)}}});export{g as u};