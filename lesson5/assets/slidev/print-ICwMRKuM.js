import{d as _,aj as d,I as p,b as a,e as t,x as s,z as r,F as u,ai as h,o as l,S as f,l as g,g as v}from"../modules/vue-BpvmE1CY.js";import{A as x,c as m,y as b,B as y,_ as N}from"../index-ZLn9vPye.js";import{N as k}from"./NoteDisplay-DraVzLFt.js";import"../modules/unplugin-icons-DncwR1J3.js";import"../modules/shiki-BjWRagS5.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},V={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-main mb-8"},A=_({__name:"print",setup(C){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),x({title:`Notes - ${m.title}`});const i=p(()=>b.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",w,[t("div",B,[t("div",L,[t("h1",S,s(r(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(l(!0),a(u,null,h(i.value,(e,c)=>(l(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",V,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(r(y)),1),f(" "+s(e==null?void 0:e.title)+" ",1),j])]),g(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),a("hr",z)):v("v-if",!0)]))),128))])]))}}),W=N(A,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
