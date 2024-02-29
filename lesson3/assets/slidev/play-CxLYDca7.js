import{_ as g,c as f,s as w,a as V,b as h,u as P,i as z,d as C,e as B,f as D,g as E,h as $,w as O,j as R,k as T,n as U,p as A}from"../index-CUTcC7oW.js";import{d as y,a8 as I,o as t,c as r,z as e,b,e as s,f as H,i as k,g as n,a9 as L,I as N,k as x,aa as v,S as j,N as _,l as u,F as M,t as F,h as G}from"../modules/vue-CnJIpJLC.js";import{Q,G as W,r as K,S as X,N as Y,a as q}from"./SlidesShow-C2-CVHcs.js";import{P as J}from"./PrintStyle-C0gXXG2-.js";import"../modules/shiki-BgDwwTVx.js";import"../modules/unplugin-icons-Bc68jzww.js";import"./bottom-AnN_FwN_.js";import"./DrawingPreview-DH5k2jw3.js";const Z="/TBoDIV/lesson3/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=y({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,l=I(i,"modelValue",a);function o(){l.value=!1}return(d,p)=>(t(),r(L,null,[e(l)?(t(),b("div",ee,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:p[0]||(p[0]=S=>o())}),s("div",{class:k(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[H(d.$slots,"default")],2)])):n("v-if",!0)],1024))}}),oe=g(le,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Modal.vue"]]),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},te=["innerHTML"],ae=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),j("dev ")])])],-1),ie=y({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const l=I(c,"modelValue",a),o=N(()=>typeof f.info=="string");return(d,p)=>(t(),r(oe,{modelValue:e(l),"onUpdate:modelValue":p[0]||(p[0]=S=>v(l)?l.value=S:null),class:"px-6 py-4"},{default:x(()=>[s("div",se,[o.value?(t(),b("div",{key:0,class:"mb-4",innerHTML:e(f).info},null,8,te)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=g(ie,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=y({__name:"Controls",setup(c){const a=_(),i=_();return(m,l)=>(t(),b(M,null,[u(Q,{modelValue:e(w),"onUpdate:modelValue":l[0]||(l[0]=o=>v(w)?w.value=o:null)},null,8,["modelValue"]),u(W),a.value?(t(),r(e(a),{key:0})):n("v-if",!0),i.value?(t(),r(e(i),{key:1,modelValue:e(V),"onUpdate:modelValue":l[1]||(l[1]=o=>v(V)?V.value=o:null)},null,8,["modelValue"])):n("v-if",!0),e(f).info?(t(),r(ne,{key:2,modelValue:e(h),"onUpdate:modelValue":l[2]||(l[2]=o=>v(h)?h.value=o:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=g(re,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Controls.vue"]]),ue=y({__name:"play",setup(c){K();const a=F();function i(o){var d;C.value||((d=o.target)==null?void 0:d.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?U():A())}P(a);const m=N(()=>z.value||C.value);_();const l=_();return B(()=>import("./DrawingControls-BqmMD7MJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(o=>l.value=o.default),(o,d)=>(t(),b(M,null,[e(D)?(t(),r(J,{key:0})):n("v-if",!0),s("div",{id:"page-root",ref_key:"root",ref:a,class:k(["grid",e(T)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(q,{class:"w-full h-full",style:G({background:"var(--slidev-slide-container-background, black)"}),width:e(D)?e(O).width.value:void 0,scale:e(R),"is-main":!0,onPointerdown:i},{default:x(()=>[u(X,{"render-context":"slide"})]),controls:x(()=>[s("div",{class:k(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(E)?"pointer-events-none":""]])},[u(Y,{class:"m-auto",persist:m.value},null,8,["persist"])],2),!e(f).drawings.presenterOnly&&!e($)&&l.value?(t(),r(e(l),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),u(de)],64))}}),be=g(ue,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/play.vue"]]);export{be as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-BqmMD7MJ.js","assets/modules/unplugin-icons-Bc68jzww.js","assets/modules/vue-CnJIpJLC.js","assets/modules/shiki-BgDwwTVx.js","assets/modules/shiki-BSchMNmt.css","assets/index-CUTcC7oW.js","assets/index-DjGIgiRt.css","assets/slidev/SlidesShow-C2-CVHcs.js","assets/slidev/bottom-AnN_FwN_.js","assets/slidev/DrawingPreview-DH5k2jw3.js","assets/SlidesShow-D69Su6C5.css","assets/DrawingControls-BO6lw4N5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
