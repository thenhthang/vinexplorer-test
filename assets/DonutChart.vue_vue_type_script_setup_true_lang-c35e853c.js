import{A as a}from"./vue3-apexcharts.common-5d6540b1.js";import{d as r,O as i,s as c,o as m,l as u,g as l}from"./index-2cfd5dd5.js";import{a as p}from"./apexChartConfig-abd42e23.js";const f={name:"DonetChart"},g=r({...f,props:["series","labels"],setup(t){const e=t,o=i(),n=c(()=>{const s=o.theme;return p(s,e==null?void 0:e.labels)});return(s,h)=>(m(),u(l(a),{type:"donut",height:"410",options:n.value,series:t.series},null,8,["options","series"]))}});export{g as _};