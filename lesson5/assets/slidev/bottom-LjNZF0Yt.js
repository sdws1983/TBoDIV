import{d as c,Q as o,t as s,P as l,I as d,v as u}from"../modules/vue-5N1jcfw2.js";import{ah as m,ai as p,aj as f,ak as j,al as C}from"../index-tlrCjhq7.js";function g(e,a=""){var r,i;const t=["slidev-page",a],n=(i=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:i.no;return n!=null&&t.push(`slidev-page-${n}`),t.filter(Boolean).join(" ")}const v=c({name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"main"},active:{type:Boolean,default:!1},is:{type:Object,required:!0},route:{type:Object,required:!0}},setup(e){return o(m,e.route),o(p,s(+e.route.path)),o(f,s(e.renderContext)),o(j,l(e,"active")),o(C,l(e,"clicksContext")),{style:d(()=>{var n,r;const t=((r=(n=e.route.meta)==null?void 0:n.slide)==null?void 0:r.frontmatter.zoom)??1;return t===1?void 0:{width:`${100/t}%`,height:`${100/t}%`,transformOrigin:"top left",transform:`scale(${t})`}})}},render(){return u(this.$props.is,{style:this.style})}}),x={render(){return[]}},b={render(){return[]}};export{b as G,v as S,x as a,g};
