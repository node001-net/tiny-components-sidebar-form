(()=>{var e,t={432:e=>{!function(t,n){const r="*",o=Object.defineProperties,s=Object.entries,i=(e,t)=>(n,r)=>(e.has(n)?e.get(n).add(r):e.set(n,(new Set).add(r)),t),a=(e,t)=>(n,o)=>(n!==r||o?((e,t,n,r)=>{if(r){const t=e.get(n);t&&(t.delete(r),0===t.size&&e.delete(n))}else e.delete(n)})(e,0,n,o):e.clear(),t),u=(e,t)=>(e,n)=>t.on(e,(function r(...o){t.off(e,r),n.apply(t,o)})),c=(e,t)=>(n,...o)=>{const s=e.get(n);return s&&s.forEach((e=>e.apply(t,o))),e.get(r)&&n!==r&&t.trigger(r,n,...o),t};e.exports=function(e){const t=new Map;return o(e=e||{},s({on:i,off:a,one:u,trigger:c}).reduce(((n,[r,o])=>(n[r]={value:o(t,e),enumerable:!1,writable:!1,configurable:!1},n)),{})),e}}("undefined"!=typeof window&&window)},766:(e,t,n)=>{"use strict";n(155);function r(e,t){return typeof e===t}function o(e){return r(e,"function")}function s(e){return!function(e){return null==e}(e)&&e.constructor===Object}const i=new Map,a=Symbol("riot-component"),u=new Set,c="mount",l="update",p="unmount",d="shouldUpdate",h="onBeforeMount",m="onMounted",f="onBeforeUpdate",b="onUpdated",v="onBeforeUnmount",g="onUnmounted",y="props",x="state",T="slots",w="root",O=Symbol("pure"),E=Symbol("is_updating"),N=Symbol("parent"),A=Symbol("attributes"),j=Symbol("template");function M(e){return e.replace(/-(\w)/g,((e,t)=>t.toUpperCase()))}function C(){return this}function S(e){return o(e)?e.prototype&&e.prototype.constructor?new e:e():e}function k(e){throw new Error(e)}function _(e){return e.reduce(((e,t)=>{const{value:n,type:r}=t;switch(!0){case!t.name&&0===r:return{...e,...n};case 3===r:e.value=t.value;break;default:e[M(t.name)]=t.value}return e}),{})}function L(e,t,n,r={}){return Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!1,configurable:!0,...r}),e}function U(e,t,n){return Object.entries(t).forEach((([t,r])=>{L(e,t,r,n)})),e}function I(e,t){return Object.entries(t).forEach((([t,n])=>{e[t]||(e[t]=n)})),e}
/* Riot WIP, @license MIT */
const B=Object.freeze({[c]:C,[l]:C,[p]:C}),D=Object.assign({},B,{clone:C,createDOM:C});function P(e){for(;e.firstChild;)e.removeChild(e.firstChild)}const $=e=>e&&e.parentNode&&e.parentNode.removeChild(e),R=(e,t)=>t&&t.parentNode&&t.parentNode.insertBefore(e,t),z=(new Map,Symbol("riot-component"),new Set,Symbol("pure")),F=(Symbol("is_updating"),Symbol("parent")),V=(Symbol("attributes"),Symbol("template"),{EACH:0,IF:1,SIMPLE:2,TAG:3,SLOT:4}),G={ATTRIBUTE:0,EVENT:1,TEXT:2,VALUE:3};function H(e,t,n,r={}){return Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!1,configurable:!0,...r}),e}n(155);function K(e,t){return typeof e===t}function q(e){const t=e.ownerSVGElement;return!!t||null===t}function X(e){return"template"===e.tagName.toLowerCase()}function W(e){return null==e}const Y=Symbol(),Z=Symbol();function J(e){const t=e.dom.cloneNode(!0),{head:n,tail:r}=function(){const e=document.createTextNode(""),t=document.createTextNode("");return e[Y]=!0,t[Z]=!0,{head:e,tail:t}}();return{avoidDOMInjection:!0,fragment:t,head:n,tail:r,children:[n,...Array.from(t.childNodes),r]}}const Q=Symbol("unmount"),ee={nodes:[],mount(e,t){return this.update(e,t)},update(e,t){const{placeholder:n,nodes:r,childrenMap:o}=this,s=e===Q?null:this.evaluate(e),i=s?Array.from(s):[],{newChildrenMap:a,batches:u,futureNodes:c}=function(e,t,n,r){const{condition:o,template:s,childrenMap:i,itemName:a,getKey:u,indexName:c,root:l,isTemplateTag:p}=r,d=new Map,h=[],m=[];return e.forEach(((e,r)=>{const f=function(e,{itemName:t,indexName:n,index:r,item:o}){H(e,t,o),n&&H(e,n,r);return e}(Object.create(t),{itemName:a,indexName:c,index:r,item:e}),b=u?u(f):r,v=i.get(b),g=[];if(function(e,t){return!!e&&!e(t)}(o,f))return;const y=!v,x=v?v.template:s.clone(),T=x.el||l.cloneNode(),w=p&&y?J(x):x.meta;y?h.push((()=>x.mount(T,f,n,w))):h.push((()=>x.update(f,n))),p?g.push(...w.children):g.push(T),i.delete(b),m.push(...g),d.set(b,{nodes:g,template:x,context:f,index:r})})),{newChildrenMap:d,batches:h,futureNodes:m}}(i,e,t,this);return((e,t,n,r)=>{const o=t.length;let s=e.length,i=o,a=0,u=0,c=null;for(;a<s||u<i;)if(s===a){const e=i<o?u?n(t[u-1],-0).nextSibling:n(t[i-u],0):r;for(;u<i;)R(n(t[u++],1),e)}else if(i===u)for(;a<s;)c&&c.has(e[a])||$(n(e[a],-1)),a++;else if(e[a]===t[u])a++,u++;else if(e[s-1]===t[i-1])s--,i--;else if(e[a]===t[i-1]&&t[u]===e[s-1]){const r=n(e[--s],-1).nextSibling;R(n(t[u++],1),n(e[a++],-1).nextSibling),R(n(t[--i],1),r),e[s]=t[i]}else{if(!c){c=new Map;let e=u;for(;e<i;)c.set(t[e],e++)}if(c.has(e[a])){const r=c.get(e[a]);if(u<r&&r<i){let o=a,d=1;for(;++o<s&&o<i&&c.get(e[o])===r+d;)d++;if(d>r-u){const o=n(e[a],0);for(;u<r;)R(n(t[u++],1),o)}else l=n(t[u++],1),(p=n(e[a++],-1))&&p.parentNode&&p.parentNode.replaceChild(l,p)}else a++}else $(n(e[a++],-1))}var l,p})(r,c,function(e,t){return(n,r)=>{if(r<0){const n=e[e.length-1];if(n){const{template:r,nodes:o,context:s}=n;o.pop(),o.length||(e.pop(),r.unmount(s,t,null))}}return n}}(Array.from(o.values()),t),n),u.forEach((e=>e())),this.childrenMap=a,this.nodes=c,this},unmount(e,t){return this.update(Q,t),this}};const te={mount(e,t){return this.update(e,t)},update(e,t){const n=!!this.evaluate(e),r=!this.value&&n,o=this.value&&!n,s=()=>{const n=this.node.cloneNode();R(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,e,t)};switch(!0){case r:s();break;case o:this.unmount(e);break;default:n&&this.template.update(e,t)}return this.value=n,this},unmount(e,t){return this.template.unmount(e,t,!0),this}};const ne="undefined"==typeof Element?{}:Element.prototype,re=function(e){const t=new Map,n=n=>(t.has(n)||t.set(n,e.call(this,n)))&&t.get(n);return n.cache=t,n}((e=>ne.hasOwnProperty(e)));function oe(e,{name:t},n,r){if(!t)return r&&function(e,t,n){const r=t?Object.keys(t):[];Object.keys(n).filter((e=>!r.includes(e))).forEach((t=>e.removeAttribute(t)))}(e,n,r),void(n&&function(e,t){Object.entries(t).forEach((([t,n])=>oe(e,{name:t},n)))}(e,n));!re(t)&&(function(e){return K(e,"boolean")}(n)||function(e){return!W(e)&&e.constructor===Object}(n)||function(e){return K(e,"function")}(n))&&(e[t]=n),!function(e){return!e&&0!==e}(n)?function(e){return!0===e||["string","number"].includes(typeof e)}(n)&&e.setAttribute(t,function(e,t){return!0===t?e:t}(t,n)):e.removeAttribute(t)}const se=/^on/,ie={handleEvent(e){this[e.type](e)}},ae=new WeakMap;function ue(e){return W(e)?"":e}const ce=(e,t)=>{const n=e.childNodes[t];if(n.nodeType===Node.COMMENT_NODE){const t=document.createTextNode("");return e.replaceChild(t,n),t}return n};const le={0:oe,1:function(e,{name:t},n){const r=t.replace(se,""),o=ae.get(e)||(e=>{const t=Object.create(ie);return ae.set(e,t),t})(e),[s,i]=(e=>Array.isArray(e)?e:[e,!1])(n),a=o[r],u=s&&!a;a&&!s&&e.removeEventListener(r,o),u&&e.addEventListener(r,o,i),o[r]=s},2:function(e,t,n){e.data=ue(n)},3:function(e,t,n){e.value=ue(n)}},pe={mount(e){return this.value=this.evaluate(e),de(this,this.value),this},update(e){const t=this.evaluate(e);return this.value!==t&&(de(this,t),this.value=t),this},unmount(){return 1===this.type&&de(this,null),this}};function de(e,t){return le[e.type](e.node,e,t,e.value)}function he(e,t){return{...pe,...t,node:2===t.type?ce(e,t.childNodeIndex):e}}const me=(e,t)=>e[F]||t,fe={attributes:[],getTemplateScope(e,t){return function(e,t,n){if(!e||!e.length)return n;const r=e.map((e=>({...e,value:e.evaluate(t)})));return Object.assign(Object.create(n||null),function(e){return e.reduce(((e,t)=>{const{value:n,type:r}=t;switch(!0){case!t.name&&0===r:return{...e,...n};case 3===r:e.value=t.value;break;default:e[(o=t.name,o.replace(/-(\w)/g,((e,t)=>t.toUpperCase())))]=t.value}var o;return e}),{})}(r))}(this.attributes,e,t)},mount(e,t){const n=!!e.slots&&e.slots.find((({id:e})=>e===this.name)),{parentNode:r}=this.node,o=me(e,t);return this.template=n&&Oe(n.html,n.bindings).createDOM(r),this.template&&(P(this.node),this.template.mount(this.node,this.getTemplateScope(e,o),o),this.template.children=Array.from(this.node.childNodes)),be(this.node),$(this.node),this},update(e,t){if(this.template){const n=me(e,t);this.template.update(this.getTemplateScope(e,n),n)}return this},unmount(e,t,n){return this.template&&this.template.unmount(this.getTemplateScope(e,t),null,n),this}};function be(e){const t=e&&e.firstChild;t&&(R(t,e),be(e))}function ve(e){return e.reduce(((e,{bindings:t})=>e.concat(t)),[])}const ge={mount(e){return this.update(e)},update(e,t){const n=this.evaluate(e);return n&&n===this.name?this.tag.update(e):(this.unmount(e,t,!0),this.name=n,this.tag=function(e,t=[],n=[]){return e?e({slots:t,attributes:n}):Oe(function(e){return e.reduce(((e,t)=>e+t.html),"")}(t),[...ve(t),{expressions:n.map((e=>({type:0,...e})))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,e)),this},unmount(e,t,n){return this.tag&&this.tag.unmount(n),this}};const ye={1:function(e,{evaluate:t,template:n}){const r=document.createTextNode("");return R(r,e),$(e),{...te,node:e,evaluate:t,placeholder:r,template:n.createDOM(e)}},2:function(e,{expressions:t}){return{...(n=t.map((t=>he(e,t))),r=["mount","update","unmount"],r.reduce(((e,t)=>({...e,[t]:e=>n.map((n=>n[t](e)))&&o})),{}))};var n,r,o},0:function(e,{evaluate:t,condition:n,itemName:r,indexName:o,getKey:s,template:i}){const a=document.createTextNode(""),u=e.cloneNode();return R(a,e),$(e),{...ee,childrenMap:new Map,node:e,root:u,condition:n,evaluate:t,isTemplateTag:X(u),template:i.createDOM(e),getKey:s,indexName:o,itemName:r,placeholder:a}},3:function(e,{evaluate:t,getComponent:n,slots:r,attributes:o}){return{...ge,node:e,evaluate:t,slots:r,attributes:o,getComponent:n}},4:function(e,{name:t,attributes:n}){return{...fe,attributes:n,node:e,name:t}}};function xe(e,t){return e.map((e=>2===e.type?{...e,childNodeIndex:e.childNodeIndex+t}:e))}function Te(e,t){return q(e)?function(e,t){return t.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${e}</svg>`,"application/xml").documentElement,!0)}(t,e):function(e,t){const n=X(t)?t:document.createElement("template");return n.innerHTML=e,n.content}(t,e)}const we={createDOM(e){return this.dom=this.dom||function(e,t){return t&&("string"==typeof t?Te(e,t):t)}(e,this.html)||document.createDocumentFragment(),this},mount(e,t,n,r={}){e||function(e){throw new Error(e)}("Please provide DOM node to mount properly your template"),this.el&&this.unmount(t);const{fragment:o,children:s,avoidDOMInjection:i}=r,{parentNode:a}=s?s[0]:e,u=X(e),c=u?function(e,t,n){const r=Array.from(e.childNodes);return Math.max(r.indexOf(t),r.indexOf(n.head)+1,0)}(a,e,r):null;this.createDOM(e);const l=o||this.dom.cloneNode(!0);return this.el=u?a:e,this.children=u?s||Array.from(l.childNodes):null,!i&&l&&function(e,t){switch(!0){case q(e):n=t,e.replaceChildren(...n.childNodes);break;case X(e):e.parentNode.replaceChild(t,e);break;default:e.appendChild(t)}var n}(e,l),this.bindings=this.bindingsData.map((e=>function(e,t,n){const{selector:r,type:o,redundantAttribute:s,expressions:i}=t,a=r?e.querySelector(r):e;s&&a.removeAttribute(s);const u=i||[];return(ye[o]||ye[2])(a,{...t,expressions:n&&!r?xe(u,n):u})}(this.el,e,c))),this.bindings.forEach((e=>e.mount(t,n))),this.meta=r,this},update(e,t){return this.bindings.forEach((n=>n.update(e,t))),this},unmount(e,t,n=!1){const r=this.el;if(!r)return this;switch(this.bindings.forEach((r=>r.unmount(e,t,n))),!0){case r[z]||null===n:break;case Array.isArray(this.children):!function(e){for(let t=0;t<e.length;t++)$(e[t])}(this.children);break;case!n:P(r);break;case!!n:$(r)}return this.el=null,this},clone(){return{...this,meta:{},el:null}}};function Oe(e,t=[]){return{...we,html:e,bindingsData:t}}
/* Riot WIP, @license MIT */
function Ee(e,t){const n=
/* Riot WIP, @license MIT */
function(e){return void 0===e&&(e={}),Object.entries(S(e)).reduce(((e,t)=>{let[n,r]=t;var o;return e[(o=n,o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=He(r),e}),{})}(t.exports?t.exports.components:{});return e(Oe,G,V,(e=>e===t.name?Ke(t):n[e]||i.get(e)))}
/* Riot WIP, @license MIT */
const Ne=(e,t)=>e[a]=t;
/* Riot WIP, @license MIT */
function Ae(e){return[c,l,p].reduce(((t,n)=>(t[n]=e(n),t)),{})}function je(e){return Array.isArray(e)?e:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&"number"==typeof e.length?Array.from(e):[e]}function Me(e,t){return je("string"==typeof e?(t||document).querySelectorAll(e):e)}
/* Riot WIP, @license MIT */
const Ce=Object.freeze({$(e){return Me(e,this.root)[0]},$$(e){return Me(e,this.root)}}),Se=Object.freeze({[d]:C,[h]:C,[m]:C,[f]:C,[b]:C,[v]:C,[g]:C}),ke=e=>1===e.length?e[0]:e;function _e(e,t,n){const r="string"==typeof t?[t]:t;return ke(je(e).map((e=>ke(r.map((t=>e[n](t)))))))}function Le(e,t,n){const r="object"==typeof t?t:{[t]:n},o=Object.keys(r);return je(e).forEach((e=>{o.forEach((t=>e.setAttribute(t,r[t])))})),e}function Ue(e,t){return _e(e,t,"getAttribute")}const Ie=new Map,Be=()=>De||(Le(De=Me("style[riot]")[0]||document.createElement("style"),"type","text/css"),De.parentNode||document.head.appendChild(De),De);var De;const Pe={CSS_BY_NAME:Ie,add(e,t){return Ie.has(e)||(Ie.set(e,t),this.inject()),this},inject(){return Be().innerHTML=[...Ie.values()].join("\n"),this},remove(e){return Ie.has(e)&&(Ie.delete(e),this.inject()),this}};function $e(e,...t){return(...n)=>(n=[...t,...n]).length<e.length?$e(e,...n):e(...n)}
/* Riot WIP, @license MIT */
function Re(e){return Ue(e,"is")||e.tagName.toLowerCase()}
/* Riot WIP, @license MIT */
function ze(e,t){return Object.assign({},e,S(t))}
/* Riot WIP, @license MIT */
function Fe(e,t){return void 0===t&&(t={}),Object.assign({},function(e){return Array.from(e.attributes).reduce(((e,t)=>(e[M(t.name)]=t.value,e)),{})}(e),S(t))}
/* Riot WIP, @license MIT */
function Ve(e,t){let{slots:n,attributes:r,props:i}=t;return a=
/* Riot WIP, @license MIT */
function(e){return[...u].reduce(((e,t)=>t(e)||e),e)}(U(s(e)?Object.create(e):e,{mount(t,o,s){return void 0===o&&(o={}),L(t,O,!1),this[N]=s,this[A]=
/* Riot WIP, @license MIT */
function(e,t){void 0===t&&(t=[]);const n=t.map((t=>he(e,t))),r={};return Object.assign(r,Object.assign({expressions:n},Ae((e=>t=>(n.forEach((n=>n[e](t))),r)))))}(t,r).mount(s),L(this,y,Object.freeze(Object.assign({},Fe(t,i),_(this[A].expressions)))),this.state=ze(this.state,o),this[j]=this.template.createDOM(t).clone(),Ne(t,this),e.name&&
/* Riot WIP, @license MIT */
function(e,t){Re(e)!==t&&Le(e,"is",t)}(t,e.name),L(this,w,t),L(this,T,n),this.onBeforeMount(this.props,this.state),this[j].mount(t,this,s),this.onMounted(this.props,this.state),this},update(e,t){void 0===e&&(e={}),t&&(this[N]=t,this[A].update(t));const n=_(this[A].expressions);if(!1!==this.shouldUpdate(n,this.props))return L(this,y,Object.freeze(Object.assign({},this.props,n))),this.state=ze(this.state,e),this.onBeforeUpdate(this.props,this.state),this[E]||(this[E]=!0,this[j].update(this,this[N])),this.onUpdated(this.props,this.state),this[E]=!1,this},unmount(e){return this.onBeforeUnmount(this.props,this.state),this[A].unmount(),this[j].unmount(this,this[N],null===e?null:!e),this.onUnmounted(this.props,this.state),this}})),Object.keys(e).filter((t=>o(e[t]))).forEach((e=>{a[e]=a[e].bind(a)})),a;var a}
/* Riot WIP, @license MIT */
function Ge(e){let{css:t,template:n,componentAPI:r,name:o}=e;return t&&o&&Pe.add(o,t),$e(Ve)(U(I(r,Object.assign({},Se,{[y]:{},[x]:{}})),Object.assign({[T]:null,[w]:null},Ce,{name:o,css:t,template:n})))}
/* Riot WIP, @license MIT */
function He(e){const{css:t,template:n,exports:r,name:o}=e,s=n?Ee(n,e):D;return e=>{let{slots:i,attributes:a,props:u}=e;if(r&&r[O])
/* Riot WIP, @license MIT */return function(e,t){let{slots:n,attributes:r,props:o,css:s,template:i}=t;i&&k("Pure components can not have html"),s&&k("Pure components do not have css");const a=I(e({slots:n,attributes:r,props:o}),B);return Ae((e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(e===c){const[e]=n;L(e,O,!0),Ne(e,a)}return a[e](...n),a}))}(r,{slots:i,attributes:a,props:u,css:t,template:n});const l=S(r)||{},p=Ge({css:t,template:s,componentAPI:l,name:o})({slots:i,attributes:a,props:u});return{mount:(e,t,n)=>p.mount(e,n,t),update:(e,t)=>p.update(t,e),unmount:e=>p.unmount(e)}}}const Ke=function(e){const t=new Map,n=n=>(t.has(n)||t.set(n,e.call(this,n)))&&t.get(n);return n.cache=t,n}(He);
/* Riot WIP, @license MIT */
function qe(e,t){let{css:n,template:r,exports:o}=t;return i.has(e)&&k(`The component "${e}" was already registered`),i.set(e,He({name:e,css:n,template:r,exports:o})),i}
/* Riot WIP, @license MIT */
function Xe(e,t,n){return Me(e).map((e=>
/* Riot WIP, @license MIT */
function(e,t,n,r){const o=n||Re(e);return i.has(o)||k(`The component named "${o}" was never registered`),i.get(o)({props:t,slots:r}).mount(e)}(e,t,n)))}var We=n(432);
/**
 *  example store for trigger open
 *
 *  @author Björn Hase
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/tiny-components/sidebar-form
 *
 */const Ye=n.n(We)()({open:function(){this.trigger("open")}}),Ze={state:{open:!1,isLoading:!1,current:{}},handleClose:function(){this.reset(),this.state.isOpen=!1,this.update()},getCssClasses:function(){var e=["sidebar"];return!0===this.state.isOpen&&e.push("sidebar--open"),e.join(" ")},onBeforeMount:function(){if(!this.hasOwnProperty("reset"))throw new Error("reset-Function in Form is missing");this.reset()}};qe("tiny-loading",{css:null,exports:null,template:(e,t,n,r)=>e('<div expr10="expr10" class="loading-wrapper"></div>',[{type:n.IF,evaluate:e=>e.props.active,redundantAttribute:"expr10",selector:"[expr10]",template:e('<div class="loading"><span></span><span></span><span></span></div>',[])}]),name:"tiny-loading"}),qe("tiny-sidebar-form-header",{css:null,exports:null,template:(e,t,n,r)=>e('<div class="bar"><div expr6="expr6" class="bar__main"> </div><div class="bar__end"><button expr7="expr7" class="button button--icon button--hover-icon-contrast m-top-3 m-bottom-3" type="button"><svg class="icon fill-danger" aria-hidden="true"><use xlink:href="/symbol-defs.svg#icon-close"/></svg></button></div></div>',[{redundantAttribute:"expr6",selector:"[expr6]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:e=>[e.props.title].join("")}]},{redundantAttribute:"expr7",selector:"[expr7]",expressions:[{type:t.EVENT,name:"onclick",evaluate:e=>e.props.close}]}]),name:"tiny-sidebar-form-header"}),qe("tiny-sidebar-form-footer",{css:null,exports:null,template:(e,t,n,r)=>e('<div class="sidebar__footer"><button expr8="expr8" class="button m-bottom-0" type="submit">\n            Save\n            <svg class="icon fill-success p-left-3" aria-hidden="true"><use xlink:href="symbol-defs.svg#icon-check"/></svg></button><button expr9="expr9" class="button m-bottom-0" type="submit" close>\n            Save and Close\n            <svg class="icon fill-success p-left-3" aria-hidden="true"><use xlink:href="symbol-defs.svg#icon-check"/></svg></button></div>',[{redundantAttribute:"expr8",selector:"[expr8]",expressions:[{type:t.ATTRIBUTE,name:"disabled",evaluate:e=>e.props.active}]},{redundantAttribute:"expr9",selector:"[expr9]",expressions:[{type:t.ATTRIBUTE,name:"disabled",evaluate:e=>e.props.active}]}]),name:"tiny-sidebar-form-footer"});const Je={css:null,exports:{handleClick(){Ye.trigger("open")}},template:(e,t,n,r)=>e('<button expr5="expr5" class="button">\n        Open\n    </button>',[{redundantAttribute:"expr5",selector:"[expr5]",expressions:[{type:t.EVENT,name:"onclick",evaluate:e=>t=>{e.handleClick(t)}}]}]),name:"example-button"};qe("example-sidebar-form",{css:null,exports:()=>({...Ze,onMounted(){Ye.on("open",(()=>{this.state.isOpen=!0,this.update()}))},handleSubmit(e){e.preventDefault(),this.state.isLoading=!0,this.update(),setTimeout((()=>{this.state.isLoading=!1,e.submitter.attributes.close&&this.handleClose(),this.update()}),2500)},reset(){}}),template:(e,t,n,r)=>e('<div expr0="expr0"><div class="sidebar__inner"><tiny-sidebar-form-header expr1="expr1"></tiny-sidebar-form-header><div class="sidebar__form"><form expr2="expr2" class="form" novalidate method="post"><div class="sidebar__body"><div class="field-group"><label class="field-label">\n                                Note\n                                <textarea class="field-text" name="note"></textarea></label></div><tiny-loading expr3="expr3"></tiny-loading></div><tiny-sidebar-form-footer expr4="expr4"></tiny-sidebar-form-footer></form></div></div></div>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:t.ATTRIBUTE,name:"class",evaluate:e=>e.getCssClasses()}]},{type:n.TAG,getComponent:r,evaluate:e=>"tiny-sidebar-form-header",slots:[],attributes:[{type:t.ATTRIBUTE,name:"title",evaluate:e=>e.state.current.note?"Edit":"New"},{type:t.ATTRIBUTE,name:"close",evaluate:e=>t=>{e.handleClose(t)}}],redundantAttribute:"expr1",selector:"[expr1]"},{redundantAttribute:"expr2",selector:"[expr2]",expressions:[{type:t.EVENT,name:"onsubmit",evaluate:e=>t=>{e.handleSubmit(t)}}]},{type:n.TAG,getComponent:r,evaluate:e=>"tiny-loading",slots:[],attributes:[{type:t.ATTRIBUTE,name:"active",evaluate:e=>e.state.isLoading}],redundantAttribute:"expr3",selector:"[expr3]"},{type:n.TAG,getComponent:r,evaluate:e=>"tiny-sidebar-form-footer",slots:[],attributes:[{type:t.ATTRIBUTE,name:"active",evaluate:e=>e.state.isLoading}],redundantAttribute:"expr4",selector:"[expr4]"}]),name:"example-sidebar-form"}),Xe("example-sidebar-form"),qe("example-button",Je),Xe("example-button")},37:()=>{},155:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a,u=[],c=!1,l=-1;function p(){c&&a&&(c=!1,a.length?u=a.concat(u):l=-1,u.length&&d())}function d(){if(!c){var e=i(p);c=!0;for(var t=u.length;t;){for(a=u,u=[];++l<t;)a&&a[l].run();l=-1,t=u.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||c||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,n,o,s)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,s]=e[l],a=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(a=!1,s<i&&(i=s));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,o,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={268:0,908:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,[i,a,u]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var l=u(r)}for(t&&t(n);c<i.length;c++)s=i[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},n=self.webpackChunk_tiny_components_sidebar_form=self.webpackChunk_tiny_components_sidebar_form||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[908],(()=>r(766)));var o=r.O(void 0,[908],(()=>r(37)));o=r.O(o)})();