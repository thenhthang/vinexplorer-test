import{d as p,j as b,k as d,o,n as i,F as y,s as g,L as k,t as h,H as f}from"./index-81fd55b5.js";const v={class:"my-5 text-center"},_={key:0,class:"btn-group"},x=["onClick"],l=3,B=p({__name:"PaginationBar",props:{total:{type:String},limit:{type:Number},callback:{type:Function,required:!0}},setup(s){const e=s,r=b(1),c=d(()=>{const n=[],a=Number(e.total||0);if(a>0&&e.limit&&a>e.limit){let t=0;for(;!(t*e.limit>=a);)t+=1,!(a/e.limit>10&&t>l&&t<a/e.limit-l+1&&!(t>=r.value-1&&t<=r.value+1))&&n.push({color:t===r.value?"btn-primary":"",page:t})}return n});function u(n){r.value=n,e.callback(n)}return(n,a)=>(o(),i("div",v,[s.total&&s.limit?(o(),i("div",_,[(o(!0),i(y,null,g(c.value,({page:t,color:m})=>(o(),i("button",{key:t,class:k(["btn bg-gray-100 text-gray-500 hover:text-white border-none dark:bg-gray-800 dark:text-white",{"!btn-primary":m==="btn-primary"}]),onClick:C=>u(t)},h(t),11,x))),128))])):f("",!0)]))}});export{B as _};