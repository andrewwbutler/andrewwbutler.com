function $(){}const Q=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function et(){return Object.create(null)}function E(t){t.forEach(st)}function I(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Jt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function xt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t,e,n){t.$$.on_destroy.push($t(e,n))}function Qt(t,e,n,i){if(t){const s=rt(t,e,n,i);return t[0](s)}}function rt(t,e,n,i){return t[1]&&i?bt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,o){if(s){const r=rt(e,n,i,o);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){return t??""}const ot=typeof window<"u";let U=ot?()=>window.performance.now():()=>Date.now(),V=ot?t=>requestAnimationFrame(t):$;const S=new Set;function ct(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&V(ct)}function X(t){let e;return S.size===0&&V(ct),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let H=!1;function wt(){H=!0}function vt(){H=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:kt(1,s,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function Ct(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=ut("style");return St(lt(t),e),e.sheet}function St(t,e){return Ct(t.head||t,e),e.sheet}function At(t,e){if(H){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){H&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function at(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function ee(){return Y(" ")}function ne(){return Y("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t){return t===""?null:+t}function Mt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){jt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Rt(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function oe(t,e,n){return Rt(t,e,n,ut)}function Bt(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function ce(t){return Bt(t," ")}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function ae(t,e){t.value=e??""}function ue(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function fe(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function _e(t){const e=t.querySelector(":checked");return e&&e.__value}function de(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function he(t,e){return new t(e)}const L=new Map;let z=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Nt(e),rules:{}};return L.set(t,n),n}function Z(t,e,n,i,s,o,r,a=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*o(m);l+=m*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Dt(f)}_${a}`,_=lt(t),{stylesheet:d,rules:h}=L.get(_)||Ot(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,z+=1,u}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Pt())}function Pt(){V(()=>{z||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&at(e)}),L.clear())})}function me(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:o=0,duration:r=300,easing:a=Q,start:c=U()+o,end:l=c+r,tick:f=$,css:u}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function g(){u&&(h=Z(t,0,1,r,o,a,u)),o||(d=!0)}function m(){u&&T(t,h),_=!1}return X(y=>{if(!d&&y>=c&&(d=!0),d&&y>=l&&(f(1,0),m()),!_)return!1;if(d){const k=y-c,w=0+1*a(k/r);f(w,1-w)}return!0}),g(),f(0,1),m}function pe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,qt(t,s)}}function qt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function R(t){B=t}function W(){if(!B)throw new Error("Function called outside component initialization");return B}function ye(t){W().$$.on_mount.push(t)}function ge(t){W().$$.after_update.push(t)}function be(t){W().$$.on_destroy.push(t)}function xe(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function $e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const N=[],nt=[];let A=[];const it=[],dt=Promise.resolve();let K=!1;function ht(){K||(K=!0,dt.then(mt))}function we(){return ht(),dt}function D(t){A.push(t)}const J=new Set;let C=0;function mt(){if(C!==0)return;const t=B;do{try{for(;C<N.length;){const e=N[C];C++,R(e),Lt(e.$$)}}catch(e){throw N.length=0,C=0,e}for(R(null),N.length=0,C=0;nt.length;)nt.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];J.has(n)||(J.add(n),n())}A.length=0}while(N.length);for(;it.length;)it.pop()();K=!1,J.clear(),R(t)}function Lt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function zt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let j;function pt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function F(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const q=new Set;let v;function ve(){v={r:0,c:[],p:v}}function ke(){v.r||E(v.c),v=v.p}function yt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),v.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const gt={duration:0};function Ee(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,a,c=0;function l(){r&&T(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=Q,tick:g=$,css:m}=s||gt;m&&(r=Z(t,0,1,d,_,h,m,c++)),g(0,1);const y=U()+_,k=y+d;a&&a.abort(),o=!0,D(()=>F(t,!0,"start")),a=X(w=>{if(o){if(w>=k)return g(1,0),F(t,!0,"end"),l(),o=!1;if(w>=y){const M=h((w-y)/d);g(M,1-M)}}return o})}let u=!1;return{start(){u||(u=!0,T(t),I(s)?(s=s(i),pt().then(f)):f())},invalidate(){u=!1},end(){o&&(l(),o=!1)}}}function Ce(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const a=v;a.r+=1;function c(){const{delay:l=0,duration:f=300,easing:u=Q,tick:_=$,css:d}=s||gt;d&&(r=Z(t,1,0,f,l,u,d));const h=U()+l,g=h+f;D(()=>F(t,!1,"start")),X(m=>{if(o){if(m>=g)return _(0,1),F(t,!1,"end"),--a.r||E(a.c),!1;if(m>=h){const y=u((m-h)/f);_(1-y,y)}}return o})}return I(s)?pt().then(()=>{s=s(i),c()}):c(),{end(l){l&&s.tick&&s.tick(1,0),o&&(r&&T(t,r),o=!1)}}}function Ft(t,e){Tt(t,1,1,()=>{e.delete(t.key)})}function Ne(t,e){t.f(),Ft(t,e)}function Se(t,e,n,i,s,o,r,a,c,l,f,u){let _=t.length,d=o.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,k=new Map,w=[];for(h=d;h--;){const p=u(s,o,h),b=n(p);let x=r.get(b);x?i&&w.push(()=>x.p(p,e)):(x=l(b,p),x.c()),y.set(b,m[h]=x),b in g&&k.set(b,Math.abs(h-g[b]))}const M=new Set,tt=new Set;function G(p){yt(p,1),p.m(a,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],b=t[_-1],x=p.key,O=b.key;p===b?(f=p.first,_--,d--):y.has(O)?!r.has(x)||M.has(x)?G(p):tt.has(O)?_--:k.get(x)>k.get(O)?(tt.add(x),G(p)):(M.add(O),_--):(c(b,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||c(p,r)}for(;d;)G(m[d-1]);return E(w),m}function Ae(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(st).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),o.forEach(D)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(zt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,s,o,r,a=[-1]){const c=B;R(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:et(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&s(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),f&&Wt(t,u)),_}):[],l.update(),f=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){wt();const u=Mt(e.target);l.fragment&&l.fragment.l(u),u.forEach(at)}else l.fragment&&l.fragment.c();e.intro&&yt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),vt(),mt()}R(c)}class Re{$destroy(){Ht(this,1),this.$destroy=$}$on(e,n){if(!I(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{E as $,It as A,Ht as B,Qt as C,Vt as D,Xt as E,Ut as F,At as G,$ as H,Kt as I,de as J,ie as K,$e as L,Yt as M,te as N,xe as O,Q as P,I as Q,Se as R,Re as S,pe as T,qt as U,me as V,D as W,Ee as X,Ce as Y,Ne as Z,fe as _,ee as a,ae as a0,_e as a1,be as a2,re as a3,Jt as a4,Zt as b,ce as c,Tt as d,ne as e,ke as f,yt as g,at as h,je as i,ge as j,ut as k,oe as l,Mt as m,se as n,ye as o,ue as p,Y as q,Bt as r,Gt as s,we as t,le as u,ve as v,nt as w,he as x,Ae as y,Me as z};