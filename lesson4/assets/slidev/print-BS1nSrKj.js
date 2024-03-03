import{d as p,aj as _,I as d,b as a,e as t,x as s,z as c,F as u,ai as h,o as l,X as f,l as g,g as v}from"../modules/vue-VzCB1Hbj.js";import{A as x,c as m,y as b,B as y,_ as N}from"../index-CHJKuMmY.js";import{N as k}from"./NoteDisplay-qatCHm8M.js";import"../modules/file-saver-EUMWMpoS.js";import"../modules/unplugin-icons-BQ0A95ul.js";import"../modules/shiki-BWnMksH9.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-main mb-8"},A=p({__name:"print",setup(C){_(`
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
`),x({title:`Notes - ${m.title}`});const n=d(()=>b.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(l(),a("div",w,[t("div",B,[t("div",L,[t("h1",T,s(c(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(l(!0),a(u,null,h(n.value,(e,r)=>(l(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(c(y)),1),f(" "+s(e==null?void 0:e.title)+" ",1),j])]),g(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<n.value.length-1?(l(),a("hr",z)):v("v-if",!0)]))),128))])]))}}),X=N(A,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{X as default};
