import{d as k,I as p,N as H,Q as q,J as W,o as c,b as d,l as x,z as u,i as D,c as N,g as O,h as R,F as w,ag as U,e as V,f as X,B as J}from"../modules/vue-C2TjUINt.js";import{l as Q,m as E,e as ee,c as A,o as re,_ as S,q as te,r as C,t as b,v as P,x as ne,y as ie,f as j,w as le}from"../index-DvGtszzU.js";import{G as se,g as ae,S as oe,a as ue}from"./bottom-DMD3yjkb.js";import{P as ce}from"./PrintStyle-DX_COOYR.js";import"../modules/shiki-C2Ye29ZQ.js";/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function G(e){return typeof e>"u"||e===null}function fe(e){return typeof e=="object"&&e!==null}function pe(e){return Array.isArray(e)?e:G(e)?[]:[e]}function me(e,r){var t,i,n,l;if(r)for(l=Object.keys(r),t=0,i=l.length;t<i;t+=1)n=l[t],e[n]=r[n];return e}function he(e,r){var t="",i;for(i=0;i<r;i+=1)t+=e;return t}function ve(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var de=G,ge=fe,xe=pe,ye=he,_e=ve,we=me,I={isNothing:de,isObject:ge,toArray:xe,repeat:ye,isNegativeZero:_e,extend:we};function K(e,r){var t="",i=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!r&&e.mark.snippet&&(t+=`

`+e.mark.snippet),i+" "+t):i}function y(e,r){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=r,this.message=K(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}y.prototype=Object.create(Error.prototype);y.prototype.constructor=y;y.prototype.toString=function(r){return this.name+": "+K(this,r)};var h=y,ke=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Ne=["scalar","sequence","mapping"];function Se(e){var r={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(i){r[String(i)]=t})}),r}function be(e,r){if(r=r||{},Object.keys(r).forEach(function(t){if(ke.indexOf(t)===-1)throw new h('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=r,this.tag=e,this.kind=r.kind||null,this.resolve=r.resolve||function(){return!0},this.construct=r.construct||function(t){return t},this.instanceOf=r.instanceOf||null,this.predicate=r.predicate||null,this.represent=r.represent||null,this.representName=r.representName||null,this.defaultStyle=r.defaultStyle||null,this.multi=r.multi||!1,this.styleAliases=Se(r.styleAliases||null),Ne.indexOf(this.kind)===-1)throw new h('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var o=be;function L(e,r){var t=[];return e[r].forEach(function(i){var n=t.length;t.forEach(function(l,s){l.tag===i.tag&&l.kind===i.kind&&l.multi===i.multi&&(n=s)}),t[n]=i}),t}function Ee(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},r,t;function i(n){n.multi?(e.multi[n.kind].push(n),e.multi.fallback.push(n)):e[n.kind][n.tag]=e.fallback[n.tag]=n}for(r=0,t=arguments.length;r<t;r+=1)arguments[r].forEach(i);return e}function F(e){return this.extend(e)}F.prototype.extend=function(r){var t=[],i=[];if(r instanceof o)i.push(r);else if(Array.isArray(r))i=i.concat(r);else if(r&&(Array.isArray(r.implicit)||Array.isArray(r.explicit)))r.implicit&&(t=t.concat(r.implicit)),r.explicit&&(i=i.concat(r.explicit));else throw new h("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(l){if(!(l instanceof o))throw new h("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new h("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new h("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(l){if(!(l instanceof o))throw new h("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(F.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=L(n,"implicit"),n.compiledExplicit=L(n,"explicit"),n.compiledTypeMap=Ee(n.compiledImplicit,n.compiledExplicit),n};var Ae=F,Fe=new o("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Oe=new o("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Ie=new o("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Te=new Ae({explicit:[Fe,Oe,Ie]});function Ye(e){if(e===null)return!0;var r=e.length;return r===1&&e==="~"||r===4&&(e==="null"||e==="Null"||e==="NULL")}function Ce(){return null}function Pe(e){return e===null}var je=new o("tag:yaml.org,2002:null",{kind:"scalar",resolve:Ye,construct:Ce,predicate:Pe,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Le(e){if(e===null)return!1;var r=e.length;return r===4&&(e==="true"||e==="True"||e==="TRUE")||r===5&&(e==="false"||e==="False"||e==="FALSE")}function Me(e){return e==="true"||e==="True"||e==="TRUE"}function Be(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var $e=new o("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Le,construct:Me,predicate:Be,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function qe(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function De(e){return 48<=e&&e<=55}function Re(e){return 48<=e&&e<=57}function Ue(e){if(e===null)return!1;var r=e.length,t=0,i=!1,n;if(!r)return!1;if(n=e[t],(n==="-"||n==="+")&&(n=e[++t]),n==="0"){if(t+1===r)return!0;if(n=e[++t],n==="b"){for(t++;t<r;t++)if(n=e[t],n!=="_"){if(n!=="0"&&n!=="1")return!1;i=!0}return i&&n!=="_"}if(n==="x"){for(t++;t<r;t++)if(n=e[t],n!=="_"){if(!qe(e.charCodeAt(t)))return!1;i=!0}return i&&n!=="_"}if(n==="o"){for(t++;t<r;t++)if(n=e[t],n!=="_"){if(!De(e.charCodeAt(t)))return!1;i=!0}return i&&n!=="_"}}if(n==="_")return!1;for(;t<r;t++)if(n=e[t],n!=="_"){if(!Re(e.charCodeAt(t)))return!1;i=!0}return!(!i||n==="_")}function Ve(e){var r=e,t=1,i;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),i=r[0],(i==="-"||i==="+")&&(i==="-"&&(t=-1),r=r.slice(1),i=r[0]),r==="0")return 0;if(i==="0"){if(r[1]==="b")return t*parseInt(r.slice(2),2);if(r[1]==="x")return t*parseInt(r.slice(2),16);if(r[1]==="o")return t*parseInt(r.slice(2),8)}return t*parseInt(r,10)}function Ge(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!I.isNegativeZero(e)}var Ke=new o("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ue,construct:Ve,predicate:Ge,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ze=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function ze(e){return!(e===null||!Ze.test(e)||e[e.length-1]==="_")}function He(e){var r,t;return r=e.replace(/_/g,"").toLowerCase(),t=r[0]==="-"?-1:1,"+-".indexOf(r[0])>=0&&(r=r.slice(1)),r===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:r===".nan"?NaN:t*parseFloat(r,10)}var We=/^[-+]?[0-9]+e/;function Xe(e,r){var t;if(isNaN(e))switch(r){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(r){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(r){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(I.isNegativeZero(e))return"-0.0";return t=e.toString(10),We.test(t)?t.replace("e",".e"):t}function Je(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||I.isNegativeZero(e))}var Qe=new o("tag:yaml.org,2002:float",{kind:"scalar",resolve:ze,construct:He,predicate:Je,represent:Xe,defaultStyle:"lowercase"}),er=Te.extend({implicit:[je,$e,Ke,Qe]}),rr=er,Z=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),z=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function tr(e){return e===null?!1:Z.exec(e)!==null||z.exec(e)!==null}function nr(e){var r,t,i,n,l,s,a,f=0,m=null,g,Y,_;if(r=Z.exec(e),r===null&&(r=z.exec(e)),r===null)throw new Error("Date resolve error");if(t=+r[1],i=+r[2]-1,n=+r[3],!r[4])return new Date(Date.UTC(t,i,n));if(l=+r[4],s=+r[5],a=+r[6],r[7]){for(f=r[7].slice(0,3);f.length<3;)f+="0";f=+f}return r[9]&&(g=+r[10],Y=+(r[11]||0),m=(g*60+Y)*6e4,r[9]==="-"&&(m=-m)),_=new Date(Date.UTC(t,i,n,l,s,a,f)),m&&_.setTime(_.getTime()-m),_}function ir(e){return e.toISOString()}var lr=new o("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:tr,construct:nr,instanceOf:Date,represent:ir});function sr(e){return e==="<<"||e===null}var ar=new o("tag:yaml.org,2002:merge",{kind:"scalar",resolve:sr}),T=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function or(e){if(e===null)return!1;var r,t,i=0,n=e.length,l=T;for(t=0;t<n;t++)if(r=l.indexOf(e.charAt(t)),!(r>64)){if(r<0)return!1;i+=6}return i%8===0}function ur(e){var r,t,i=e.replace(/[\r\n=]/g,""),n=i.length,l=T,s=0,a=[];for(r=0;r<n;r++)r%4===0&&r&&(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)),s=s<<6|l.indexOf(i.charAt(r));return t=n%4*6,t===0?(a.push(s>>16&255),a.push(s>>8&255),a.push(s&255)):t===18?(a.push(s>>10&255),a.push(s>>2&255)):t===12&&a.push(s>>4&255),new Uint8Array(a)}function cr(e){var r="",t=0,i,n,l=e.length,s=T;for(i=0;i<l;i++)i%3===0&&i&&(r+=s[t>>18&63],r+=s[t>>12&63],r+=s[t>>6&63],r+=s[t&63]),t=(t<<8)+e[i];return n=l%3,n===0?(r+=s[t>>18&63],r+=s[t>>12&63],r+=s[t>>6&63],r+=s[t&63]):n===2?(r+=s[t>>10&63],r+=s[t>>4&63],r+=s[t<<2&63],r+=s[64]):n===1&&(r+=s[t>>2&63],r+=s[t<<4&63],r+=s[64],r+=s[64]),r}function fr(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var pr=new o("tag:yaml.org,2002:binary",{kind:"scalar",resolve:or,construct:ur,predicate:fr,represent:cr}),mr=Object.prototype.hasOwnProperty,hr=Object.prototype.toString;function vr(e){if(e===null)return!0;var r=[],t,i,n,l,s,a=e;for(t=0,i=a.length;t<i;t+=1){if(n=a[t],s=!1,hr.call(n)!=="[object Object]")return!1;for(l in n)if(mr.call(n,l))if(!s)s=!0;else return!1;if(!s)return!1;if(r.indexOf(l)===-1)r.push(l);else return!1}return!0}function dr(e){return e!==null?e:[]}var gr=new o("tag:yaml.org,2002:omap",{kind:"sequence",resolve:vr,construct:dr}),xr=Object.prototype.toString;function yr(e){if(e===null)return!0;var r,t,i,n,l,s=e;for(l=new Array(s.length),r=0,t=s.length;r<t;r+=1){if(i=s[r],xr.call(i)!=="[object Object]"||(n=Object.keys(i),n.length!==1))return!1;l[r]=[n[0],i[n[0]]]}return!0}function _r(e){if(e===null)return[];var r,t,i,n,l,s=e;for(l=new Array(s.length),r=0,t=s.length;r<t;r+=1)i=s[r],n=Object.keys(i),l[r]=[n[0],i[n[0]]];return l}var wr=new o("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:yr,construct:_r}),kr=Object.prototype.hasOwnProperty;function Nr(e){if(e===null)return!0;var r,t=e;for(r in t)if(kr.call(t,r)&&t[r]!==null)return!1;return!0}function Sr(e){return e!==null?e:{}}var br=new o("tag:yaml.org,2002:set",{kind:"mapping",resolve:Nr,construct:Sr});rr.extend({implicit:[lr,ar],explicit:[pr,gr,wr,br]});function M(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Er=new Array(256),Ar=new Array(256);for(var v=0;v<256;v++)Er[v]=M(v)?1:0,Ar[v]=M(v);function Fr(e){return Array.from(new Set(e))}function B(...e){let r,t,i;e.length===1?(r=0,i=1,[t]=e):[r,t,i=1]=e;const n=[];let l=r;for(;l<t;)n.push(l),l+=i||1;return n}function Or(e,r){if(!r||r==="all"||r==="*")return B(1,e+1);if(r==="none")return[];const t=[];for(const i of r.split(/[,;]/g))if(!i.includes("-"))t.push(+i);else{const[n,l]=i.split("-",2);t.push(...B(+n,l?+l+1:e+1))}return Fr(t).filter(i=>i<=e).sort((i,n)=>i-n)}const Ir=["id"],Tr=k({__name:"PrintSlideClick",props:{clicksContext:{type:null,required:!0},nav:{type:Object,required:!0},route:{type:Object,required:!0}},setup(e){const r=e,t=p(()=>({height:`${Q}px`,width:`${E}px`})),i=H();ee(()=>import("./DrawingPreview-DjzukBJg.js"),__vite__mapDeps([0,1,2,3,4,5])).then(l=>i.value=l.default);const n=p(()=>`${r.route.path.toString().padStart(3,"0")}-${(r.nav.clicks.value+1).toString().padStart(2,"0")}`);return q(re,W({nav:r.nav,configs:A,themeConfigs:p(()=>A.themeConfig)})),(l,s)=>{var a;return c(),d("div",{id:n.value,class:"print-slide-container",style:R(t.value)},[x(u(se)),x(u(oe),{is:(a=l.route)==null?void 0:a.component,"clicks-context":l.clicksContext,class:D(u(ae)(l.route)),route:l.route},null,8,["is","clicks-context","class","route"]),i.value?(c(),N(u(i),{key:0,page:+l.route.path},null,8,["page"])):O("v-if",!0),x(u(ue))],12,Ir)}}}),$=S(Tr,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Yr=k({__name:"PrintSlide",props:{route:{type:Object,required:!0}},setup(e){const r=e,t=p(()=>r.route),i=te(t),n=C(t.value,0);return(l,s)=>(c(),d(w,null,[x($,{"clicks-context":u(n),nav:u(i),route:t.value},null,8,["clicks-context","nav","route"]),u(n).disabled?O("v-if",!0):(c(!0),d(w,{key:0},U(u(n).total,a=>(c(),N($,{key:a,"clicks-context":u(C)(t.value,a),nav:u(i),route:t.value},null,8,["clicks-context","nav","route"]))),128))],64))}}),Cr=S(Yr,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Pr={id:"print-content"},jr=k({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const r=e,t=p(()=>r.width),i=p(()=>r.width/b),n=p(()=>t.value/i.value),l=p(()=>n.value<b?t.value/E:i.value*b/E);let s=ne;P.value.query.range&&(s=Or(s.length,P.value.query.range).map(m=>s[m-1]));const a=p(()=>({"select-none":!A.selectable}));return q(ie,l),(f,m)=>(c(),d("div",{id:"print-container",class:D(a.value)},[V("div",Pr,[(c(!0),d(w,null,U(u(s),g=>(c(),N(Cr,{key:g.path,route:g},null,8,["route"]))),128))]),X(f.$slots,"controls")],2))}}),Lr=S(jr,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Mr={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},Br=k({__name:"print",setup(e){return J(()=>{j?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,t)=>(c(),d(w,null,[u(j)?(c(),N(ce,{key:0})):O("v-if",!0),V("div",Mr,[x(Lr,{class:"w-full h-full",style:R({background:"var(--slidev-slide-container-background, black)"}),width:u(le).width.value},null,8,["style","width"])])],64))}}),Vr=S(Br,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/print.vue"]]);export{Vr as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-DjzukBJg.js","assets/modules/vue-C2TjUINt.js","assets/index-DvGtszzU.js","assets/modules/shiki-C2Ye29ZQ.js","assets/modules/shiki-BSchMNmt.css","assets/index-v9nkstKT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}