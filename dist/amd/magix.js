/*!3.8.5 MIT kooboy_li@163.com*/define("magix",["$"],e=>{let t,r,i=e.isPlainObject,n=e.isArray,o=0,f="",l=[],a=",",s=window,$=document,d=e($),h=s.setTimeout,u="changed",c="change",p="pageunload",m="value",b="mxs",g="mxa",v=function(){},y=JSON.stringify,w="\x1e",x="object",k="prototype",A="params",V="path",I="mx-view",S=/[#?].*$/,C=/([^=&?\/#]+)=?([^&#?]*)/g,T=/(?!^)=|&/,q=e=>(e||"mx_")+o++,N=q(),E={rootId:q(),defaultView:N,error(e){throw e}},O=e=>typeof e==x?e:$.getElementById(e),P=e=>!e||(e=typeof e,e!=x&&"function"!=e),U=(e,t,r)=>{let i,n,o,f=0;for(o in e)i=e[o],n=t[o],P(i)&&n===i||(r[o]=1,f=1),t[o]=i;return f},j=(e,t,r)=>{if(e=O(e),t=O(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:H,keys:L,hasOwnProperty:Z}=Object,M=e("head"),R=(e,t)=>{t&&!R[e]&&(R[e]=1,M.append(`<style>${t}`))},B=e=>e.id||(e.$a=1,e.id=q()),D=(e,t,r,i,o)=>{t=t||l,n(e)||(e=[e]),n(t)||(t=[t]);for(o of e)try{i=o&&o.apply(r,t)}catch(e){E.error(e)}return i},z=(e,t)=>e&&Z.call(e,t),F=(e,t,r)=>{let i,n;for(i in t)n=t[i],r[i]=(n+f)[0]==w?e[n]:n},J=(e,t)=>t.f-e.f||t.t-e.t,Q=function(e,t,r,i){(i=this).c=[],i.b=t||5,i.x=i.b+(e||20),i.r=r};H(Q[k],{get(e){let t=this.c[w+e];return t&&(t.f++,t.t=o++,t=t.v),t},each(e,t,r,i,n){i=(r=this).c;for(n of i)e(n.v,t,r)},set(e,t){let r=this,i=r.c,n=w+e,f=i[n],l=r.b;if(!f){if(i.length>=r.x)for(i.sort(J);l--;)(f=i.pop()).f>0&&r.del(f.o);f={o:e},i.push(f),i[n]=f}f.v=t,f.f=1,f.t=o++},del(e){e=w+e;let t=this.c,r=t[e],i=this.r;r&&(r.f=-1,r.v=f,delete t[e],i&&D(i,r.o))},has(e){return z(this.c,w+e)}});let X=(e,t)=>{if(e)if(N==e)r||(r=At.extend()),t(r);else if(n(e))require(e,t);else try{t(require(e))}catch(r){require([e],t)}else t&&t()},_=function(){},G=(e,t,r,i,n)=>(_[k]=t[k],n=new _,H(n,r),H(e,i),n.constructor=e,e[k]=n,e),K=e.find||e.zepto,W=K.matchesSelector||K.matches,Y=(e,t)=>{t=e.data,e.eventTarget=t.e,D(t.f,e,t.v)},ee=(t,r,i,n,o)=>{o&&(r+=`.${o.i}`),n?e(t).off(r,i):e(t).on(r,o,i)};let te,re=new Q,ie=0,ne=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}te[t]=r},oe=e=>{let t,r=re.get(e);return r||(te={},e==(t=e.replace(S,f))&&T.test(t)&&(t=f),e.replace(t,f).replace(C,ne),re.set(e,r={a:t,b:te})),{path:r.a,params:{...r.b}}},fe=(e,t,r)=>{let i,n,o,l=[];for(n in t)i=t[n]+f,(!r||i||z(r,n))&&(i=encodeURIComponent(i),l.push(o=n+"="+i));return o&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+l.join("&")),e},le=(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},ae={config:(e,t)=>(t=E,e&&(t=i(e)?H(t,e):t[e]),t),boot(e){H(E,e),X(E.ini,t=>{H(E,t,e),X(E.exts,()=>{He.on(u,Be),me.on(u,Be),ie=1,Oe()})})},toMap:le,toTry:D,toUrl:fe,parseUrl:oe,mix:H,has:z,keys:L,inside:j,node:O,applyStyle:R,guid:q,use:X,Cache:Q,nodeId:B},se={fire(e,t,r,i){let n,o,l,a,s=this,$=s[w+e];if(t||(t={}),t.type||(t.type=e),$)for(o=(n=$.length)-1;n--;)(a=$[l=i?n:o-n]).f?(a.x=1,D(a.f,t,s),a.x=f):a.x||($.splice(l,1),o--);($=s[`on${e}`])&&D($,t,s),r&&s.off(e)},on(e,t){let r=w+e;(this[r]||(this[r]=[])).push({f:t})},off(e,t){let r,i=w+e,n=this,o=n[i];if(t){if(o)for(r of o)if(r.f==t){r.f=f;break}}else delete n[i],delete n[`on${e}`]}};ae.Event=se;let $e={},de={},he={},ue=0,ce=e=>{e=(e+f).split(",");for(let t of e)z(de,t)?de[t]++:de[t]=1;return e},pe=e=>{let t,r;for(t of e)z(de,t)&&((r=--de[t])||(delete de[t],delete $e[t]))};let me={get(e){let t=e?$e[e]:$e;return t},set(e){return ue=U(e,$e,he)||ue,this},digest(e){e&&me.set(e),ue&&(ue=0,this.fire(u,{keys:he}),he={})},diff:()=>he,clean:e=>({ctor(){e=ce(e),this.on("destroy",()=>pe(e))}}),...se};ae.State=me;let be,ge,ve,ye,we,xe,ke="view",Ae=new Q,Ve=new Q,Ie=s.location,Se=0,Ce={query:{},params:{},href:f},Te=/(?:^.*\/\/[^\/]+|#.*$)/gi,qe=/^[^#]*#?!?/,Ne=function(e){return this[A][e]||f},Ee=(e,t)=>{e=`#!${e}`,t?Ie.replace(e):Ie.hash=e},Oe=()=>{let e,t,r=Ue().srcHash;ee(s,"hashchange",(i,n,o)=>{t||(n=Ue(),(e=n.srcHash)!=r&&(o=(()=>{i.p=1,r=e,t=f,Ee(e),je()}),i={reject(){i.p=1,t=f,Ee(r)},resolve:o,prevent(){t=1}},He.fire(c,i),t||i.p||o()))}),s.onbeforeunload=((e,t,r)=>{if(e=e||s.event,t={},He.fire(p,t),r=t.msg)return e&&(e.returnValue=r),r}),je()},Pe=$.title,Ue=e=>{e=e||Ie.href;let t,r,n,o,l,a=Ae.get(e);return a||(t=e.replace(Te,f),r=e.replace(qe,f),n=oe(t),o=oe(r),l={...n[A],...o[A]},a={get:Ne,href:e,srcQuery:t,srcHash:r,query:n,hash:o,params:l},ie&&(((e,t)=>{if(ge||(ge=E.routes||{},ve=E.unmatchView,ye=E.defaultView,we=E.defaultPath||"/",xe=E.rewrite),!e[ke]){let r=e.hash[V]||we;xe&&(r=xe(r,e[A],ge)),t=ge[r]||ve||ye,e[V]=r,e[ke]=t,i(t)&&H(e,t)}})(a),Ae.set(e,a))),a},je=()=>{let e=Ue(),t=((e,t)=>{let r=e.href,i=t.href,n=r+w+i,o=Ve.get(n);if(!o){let i,f;o={params:f={},force:!r};let l,a=e[A],s=t[A],$=L(a).concat(L(s)),d=e=>{let t=a[e],r=s[e];t!=r&&(f[e]={from:t,to:r},i=1)};for(l of $)d(l);a=e,s=t,f=o,d(V),d(ke),Ve.set(n,o={a:i,b:o})}return o})(Ce,Ce=e);return!Se&&t.a&&((be=t.b)[V]&&($.title=e.title||Pe),He.fire(u,be)),Se=0,be},He={parse:Ue,diff:je,to(e,t,r,n){!t&&i(e)&&(t=e,e=f);let o=oe(e),l=o[A],a=o[V],s=Ce[V],$=Ce[A],d=Ce.query[A];if(H(l,t),a)for(s in d)z(l,s)||(l[s]=f);else $&&(a=s,l={...$,...l});var h,u,c,p;u=Ce,c=r,p=n,(h=fe(h=a,l,d))!=u.srcHash&&(Se=p,Ee(h,c))},...se};ae.Router=He;let Le,Ze,Me=0,Re=(e,t,r,i,n,o)=>{if(e&&e.$a!=Me&&(r=e.$v)&&r.$a>1){(t?((e,t,r)=>{let i,n=e.$os;if(n)for(i of n)if(r=z(t,i))break;return r})(r,t):kt(r))&&r.$b(),n=e.children();for(o of n)Re(Je[o],t)}},Be=(e,t,r)=>{t=Fe(),(r=e[ke])?t.mountView(r.to):(Me=o++,Re(t,e.keys))},De=e=>{if(!e.$b&&!e.$d&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let t,{id:r,pId:i}=e;(t=Je[i])&&!z(t.$e,r)&&(t.$e[r]=1,t.$rc++,De(t))}},ze=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let r,{id:i,pId:n}=e;(r=Je[n])&&z(r.$e,i)&&(r.$rc--,delete r.$e[i],ze(r,t))}},Fe=e=>(Le||(t=$.body,e=E.rootId,O(e)||(t.id=e),Le=new _e(e)),Le),Je={},Qe=(e,t,r)=>{for(t=e.$f;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},Xe=[],_e=function(e,t,r){var i,n;(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=1,r.$e={},r.$f=[],r.pId=t,n=r,z(Je,i=e)||(Je[i]=n,_e.fire("add",{vframe:n}),(i=O(i))&&(i.vframe=n))};H(_e,{all:()=>Je,get:e=>Je[e]},se),H(_e[k],se,{mountView(e,t){let r,i,n,o,f,l,a=this,{id:s,pId:$,$g:d}=a,h=O(s);!a.$h&&h&&(a.$h=1,a.$i=h.innerHTML),a.unmountView(),a.$b=0,h&&e&&(a[V]=e,r=oe(e),n=r[V],i=++d,o=r[A],l=(l=(l=(l=Je[$])&&l.$v)&&l.$d)&&l.$a,e.indexOf(w)>0&&F(l,o,o),a.$n=r[V],H(o,t),X(n,e=>{if(i==a.$g){if(!e)return E.error(Error(`id:${s} cannot load:${n}`));f=xt(e),n=new e(s,a,o,f),a.$v=n,a.$a=Me,vt(n),D(n.init,o,n),n.$b(),n.$e||(a.$h=0,n.$f||n.endUpdate())}}))},unmountView(){let t,r,i=this,{$v:n,id:o}=i;i.$f=[],n&&(Ze||(r=1,Ze={id:o}),i.$b=1,i.unmountZone(0,1),ze(i,Ze),i.$v=0,n.$a>0&&(n.$a=0,n.fire("destroy",0,1,1),mt(n,1),vt(n,1),n.owner=0),n.$a--,(t=O(o))&&i.$h&&e(t).html(i.$i),r&&(Ze=0)),i.$g++},mountVframe(e,t,r){let i,n=this,o=n.id,f=n.$c;return ze(n,{id:e}),(i=Je[e])||(z(f,e)||(n.$o=0,n.$cc++),f[e]=e,(i=Xe.pop())?_e.call(i,e,o):i=new _e(e,o)),i.mountView(t,r),i},mountZone(t,r){let i,n,o=this,f=[];t=t||o.id;let l=e(`#${t} [${I}]`);o.$d=1;for(i of l)n=B(i),i.$b||(i.$b=1,f.push([n,i.getAttribute(I)]));for([n,i]of f)f[n]?E.error(Error(`vf.id duplicate:${n} at ${o[V]}`)):o.mountVframe(f[n]=n,i);o.$d=0,r||De(o)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=Je[e]){let{$cr:f,pId:l}=r;r.unmountView(),n=f,(o=Je[i=e])&&(delete Je[i],_e.fire("remove",{vframe:o,fcc:n}),(i=O(i))&&(i.$b=0,i.vframe=0,i.$a=0)),r.id=r.pId=r.$c=r.$e=0,r.$h=0,r.off("alter"),r.off("created"),Xe.push(r),(r=Je[l])&&z(r.$c,e)&&(delete r.$c[e],r.$o=0,r.$cc--,t||De(r))}var i,n,o},unmountZone(e,t){let r,i=this;for(r in i.$c)(!e||r!=e&&j(r,e))&&i.unmountVframe(r,1);t||De(i)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=Je[t.pId];return t},children(e){return(e=this).$o||(e.$o=L(e.$c))},invoke(e,t){let r,i,n,o,f,l=this.$f;return(i=this.$v)&&i.$f?r=(n=i[e])&&D(n,t,i):((o=l[f=w+e])&&(o.r=t===o.a),o={n:e,a:t,k:f},l.push(o),l[f]=o),r}}),ae.Vframe=_e,e.fn.invokeView=function(e,t){if(this.length){let r=this[0].vframe;if(void 0===t)return r&&r.invoke(e);for(let i of this)(r=i.vframe)&&r.invoke(e,t)}};let Ge=new Q(30,10),Ke=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,We={},Ye={},et=(e,r)=>{let i,n,o,f,a,s,$,d=[],h=e,u=e.getAttribute(`mx-${r}`),c=[],p=0;if(u&&((a=Ge.get(u))||((a={v:(a=u.match(Ke)||l)[1],n:a[2],i:a[3]}).p=a.i&&D(Function(`return ${a.i}`),l,e),Ge.set(u,a)),a={...a,r:u},d.push(a)),a&&!a.v||Ye[r]){if(!($=e.$a))for(c.push(h);h!=t&&(h=h.parentNode);){if(Je[n=h.id]||(n=h.$v)){$=n;break}c.push(h)}if($){for(u of c)u.$a=$;h=e.id,Je[h]&&(p=$=h);do{if((i=Je[$])&&(s=i.$v)){f=(o=s.$so)[r];for(n in f)o={r:n,v:$,n:n},n?W(e,n)&&d.push(o):p&&d.unshift(o);if(s.$e&&!p){a&&!a.v&&(a.v=$);break}p=0}}while(i&&($=i.pId))}}return d},tt=e=>{let r,i,n,o,f,l,a,s,{target:$,type:d}=e,h=[];for(;$!=t;){if((r=et($,d)).length){h=[];for(let{v:t,r:i,n:h,p:u,i:c}of r){if(a!=t){if(a&&e.isPropagationStopped())break;a=t}if(o=(n=Je[t])&&n.$v){if((l=o[f=h+w+d])&&(e.eventTarget=$,s=u||{},c&&c.indexOf(w)>0&&F(o.$d.$a,s,s={}),e[A]=s,D(l,e,o),e.isImmediatePropagationStopped()))break;0}else e.stopPropagation();0}}if((i=$.$)&&i[d]||e.isPropagationStopped())break;h.push($),$=$.parentNode||t}for($ of h)(i=$.$||($.$={}))[d]=1},rt=(e,r,i)=>{let n=0|We[e],o=i?-1:1;n&&i!==n||ee(t,e,tt,i),We[e]=n+o,r&&(Ye[e]=(0|Ye[e])+o)},it="http://www.w3.org/2000/svg",nt={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,`<svg xmlns="${it}">`],all:[0,""]},ot=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;nt.optgroup=nt.option,nt.tbody=nt.tfoot=nt.colgroup=nt.caption=nt.thead,nt.th=nt.td;let ft=$.implementation.createHTMLDocument(f),lt=ft.createElement("base");lt.href=$.location.href,ft.head.appendChild(lt);let at=(e,t)=>{let r=B(t);e.$c[r]?e.unmountVframe(r,1):e.unmountZone(r,1)},st={INPUT:[m,"checked"],TEXTAREA:[m],OPTION:["selected"]},$t=(e,t)=>(1==e.nodeType&&(e.$kd?t=e.$k:((t=e.$a?f:e.id)||(t=e.getAttribute(b)),t||(t=e.getAttribute(I))&&(t=oe(t)[V]),e.$kd=1,e.$k=t)),t),dt=(e,t,r,i,n,o)=>{let f,l,a,s,$,d=e.lastChild,h=t.firstChild,u=0,c={},p={};for(;d;)u++,(a=$t(d))&&(a=c[a]||(c[a]=[])).push(d),d=d.previousSibling,h&&((a=$t(h))&&(p[a]=1),h=h.nextSibling);for(;h;)(a=$t(h))&&(p[a]=1),h=h.nextSibling;for(h=t.firstChild,$=t.childNodes.length<u,d=e.firstChild;h;)u--,f=h,h=h.nextSibling,(s=c[a=$t(f)])&&(s=s.pop())?(s!=d?$&&d.nextSibling==s?(e.appendChild(d),d=s.nextSibling):e.insertBefore(s,d):d=d.nextSibling,ht(s,f,e,r,i,n,o)):d?(a=$t(l=d))&&c[a]&&p[a]?(u++,r.c=1,e.insertBefore(f,l)):(d=d.nextSibling,ht(l,f,e,r,i,n,o)):(e.appendChild(f),r.c=1);for(;u-- >0;)l=e.lastChild,at(i,l),e.removeChild(l),r.c=1},ht=(e,t,r,i,n,o,f)=>{if(1==e.nodeType&&e.hasAttribute("mxv")||!e.isEqualNode||!e.isEqualNode(t))if(e.nodeName===t.nodeName)if(1===e.nodeType){let r=t.getAttribute(b);if(r&&r==e.getAttribute(b))return;let l,s,$,d,h,u,c,p,v=t.getAttribute(I),y=t.innerHTML,x=t.getAttribute(g),k=!x||x!=e.getAttribute(g),S=Je[e.id],C=v&&oe(v);if(v&&S&&S.$n==C[V]&&(d=S.$v)){if(u=y!=S.$i,p=c=v!=S[V],$=e.getAttribute("mxv"),!u&&!p&&$){h=$.split(a);for($ of h)if(z(f,$)){p=1;break}}p||u?($=d.$g)?(h=C[A],v.indexOf(w)>-1&&F(o,h,h),S.$i=y,S[V]=v,C={node:t,html:y,deep:!d.$e,inner:u,query:p},k=1,D($,[h,C],d)&&i.v.push(d),l=C.deep):(s=1,l=1):k=1}else l=1,s=S;s&&(i.c=1,S.unmountVframe(0,1)),k&&(1===k?(x&&e.setAttribute(g,x),r&&e.setAttribute(b,r),c&&e.setAttribute(I,v)):((e,t,r,i)=>{let n,o,f,l,a=e.attributes,s=t.attributes,$=e.nodeName;for(o=a.length;o--;)n=a[o].name,t.hasAttribute(n)||("id"==n?i||r.d.push([e,""]):(r.c=1,e.removeAttribute(n)));for(o=s.length;o--;)f=(n=s[o]).name,l=n[m],e.getAttribute(f)!=l&&("id"==f?r.d.push([e,l]):(r.c=1,e.setAttribute(f,l)));let d=st[$];if(d)for(o of d)e[o]!=t[o]&&(e[o]=t[o])})(e,t,i,S&&v)),l&&dt(e,t,i,n,o,f)}else e.nodeValue!==t.nodeValue&&(i.c=1,e.nodeValue=t.nodeValue);else at(n,e),r.replaceChild(t,e),i.c=1},ut=function(e){this.$b=e,this.$c=1,this.$a={vId:e,[w]:1},this.$k={}};H(ut[k],{get(e,t){return t=this.$a,e&&(t=t[e]),t},set(e){let t=this;return t.$c=U(e,t.$a,t.$k)||t.$c,t},digest(e){let t=this.set(e),r=t.$k,i=t.$c;t.$c=0,t.$k={},e=t.$a;let n,o,f=t.$b,l=Je[f],a=l&&l.$v,s={d:[],v:[]},$=O(f);if(i&&a&&a.$a>0&&(n=a.$e)){o=((e,t)=>{let r=ft.createElement("div"),i=it==t.namespaceURI?"g":(ot.exec(e)||[0,""])[1].toLowerCase(),n=nt[i]||nt.all;r.innerHTML=n[1]+e;let o=n[0];for(;o--;)r=r.lastChild;return r})(n(e,f,P),$),dt($,o,s,l,e,r);for(o of s.d)o[0].id=o[1];for(o of s.v)o.$b();!s.c&&a.$f||a.endUpdate(f),s.c&&d.trigger({type:"htmlchanged",vId:f}),a.fire("domready")}return t},snapshot(){return this.$d=y(this.$a),this},altered(){let e=this;if(e.$d)return e.$d!=y(e.$a)}});let ct=/^(\$?)([^<]*)<([^>]+)>$/,pt=(e,t,r)=>(e.$h?r=e:((r=function(e){D(r.$h,e,this)}).$h=[e],r.$i=1),r.$h=r.$h.concat(t.$h||t),r),mt=(e,t)=>{let r,i,n=e.$r;for(r in n)i=n[r],(t||i.x)&&bt(n,r,1)},bt=(e,t,r,i)=>{let n,o,f=e[t];return f&&f!=i&&((n=(o=f.e).destroy)&&r&&D(n,l,o),delete e[t]),o},gt=(e,t,r,i,n)=>{i=e[t],e[t]=e[r]=function(...e){(n=this).$a>0&&(n.$a++,n.fire("rendercall"),mt(n),D(i,e,n))}},vt=(e,t)=>{let r,{$eo:i,$so:n,$el:o,id:f}=e;for(r in i)rt(r,n[r],t);for(r of o)ee(r.e,r.n,Y,t,{i:f,v:e,f:r.f,e:r.e})},yt=[],wt={win:s,doc:$},xt=e=>{if(!e[w]){e[w]=[];let t,r,i,n,o,f,l,s,$,d=e[k],h={},u=[],c={},p={};if(r=d.mixins){for(o of r)for(l in o)t=o[l],i=p[l],"ctor"!=l?(ct.test(l)&&(i?t=pt(i,t):t.$i=1),p[l]=t):e[w].push(t);for(l in p)z(d,l)||(d[l]=p[l])}for(l in d)if(t=d[l],r=l.match(ct)){[,f,i,n]=r,n=n.split(a);for(s of n){if(o=wt[i],$=1,f){if(o){u.push({f:t,e:o,n:s});continue}$=2,(o=c[s])||(o=c[s]={}),o[i]=1}h[s]=h[s]|$,(o=d[s=i+w+s])?o.$i&&(t.$i?d[s]=pt(o,t):z(d,l)&&(d[s]=t)):d[s]=t}}gt(d,"render","$b"),d.$eo=h,d.$el=u,d.$so=c,d.$e=d.tmpl,d.$g=d.assign}return e[w]},kt=e=>{let t,r,i,n=e.$l;if(n.f&&(n.p&&(t=be[V]),!t&&n.k)){i=be[A];for(r of n.k)if(t=z(i,r))break}return t},At=function(e,t,r,i){(i=this).owner=t,i.id=e,i.$l={k:[]},i.$r={},i.$a=1,i.updater=i.$d=new ut(i.id),D(yt,r,i)},Vt=At[k];H(At,{merge(...e){let t,r;for(t of e)(r=t&&t.ctor)&&yt.push(r),H(Vt,t)},extend(e,t){let r=this,i=(e=e||{}).ctor,n=[];i&&n.push(i);let o=function(e,t,i,o){r.call(this,e,t,i),D(n.concat(o),i,this)};return o.extend=r.extend,G(o,r,e,t)}}),H(Vt,se,{init:v,beginUpdate(e,t){(t=this).$a>0&&t.$f&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,i,n){(r=this).$a>0&&(e=e||r.id,t?n=t:(n=r.$f,r.$f=1),(i=r.owner).mountZone(e,t),n||h(r.wrapAsync(Qe),0,i))},wrapAsync(e,t){let r=this,i=r.$a;return(...n)=>{if(i>0&&i==r.$a)return e.apply(t||r,n)}},observeLocation(e,t){let r;(r=this.$l).f=1,i(e)&&(t=e[V],e=e[A]),r.p=t,e&&(r.k=(e+f).split(a))},observeState(e){this.$os=(e+f).split(a)},capture(e,t,r,i){return i=this.$r,t?(bt(i,e,1,t),i[e]={e:t,x:r}):t=(i=i[e])&&i.e,t},release(e,t){return bt(this.$r,e,t)},leaveTip(e,t){let r=this,i=n=>{let o="a",f="b";n.type!=c&&(o="b",f="a"),i[o]?(n.prevent(),n.reject()):t()?(n.prevent(),i[f]=1,r.leaveConfirm(e,()=>{i[f]=0,n.resolve()},()=>{i[f]=0,n.reject()})):n.resolve()},n=r=>{t()&&(r.msg=e)};He.on(c,i),He.on(p,n),r.on("unload",i),r.on("destroy",()=>{He.off(c,i),He.off(p,n)})},render:v}),ae.View=At;let It=e.type,St=e.now||Date.now,Ct=function(){this.id=q("b"),this.$={}};H(Ct[k],{get(e,t,r){let i,o=t!=r,l=this.$;if(e){let t,i=n(e)?e.slice():(e+f).split(".");for(;(t=i.shift())&&l;)l=l[t];t&&(l=r)}return o&&(i=It(t))!=It(l)&&(l=t),l},set(e,t){i(e)||(e={[e]:t}),H(this.$,e)}});let Tt=function(e,t,r){(r=this[e])&&(delete this[e],D(r,t,r.e))},qt=(e,t,r,i,n,o)=>{let f=[],l=0,a=0;return function(s,$){let d,h=this;a++;let u=h.$b,c=u.k;f[s+1]=h;let p,m={bag:h,error:$};if($?(l=$,t.fire("fail",m),d=1):o.has(c)||(c&&o.set(c,h),u.t=St(),(p=u.a)&&D(p,h,h),(p=u.x)&&t.clear(p),t.fire("done",m),d=1),!r.$d){let t=a==i;t&&(r.$e=0,2==n&&(f[0]=l,D(e,f,r))),1==n&&D(e,[$||null,h,t,s],r)}d&&t.fire("end",m)}},Nt=(e,t,r,i,o)=>{if(e.$d)return e;if(e.$e)return e.enqueue(Nt.bind(e,e,t,r,i,o));e.$e=1,n(t)||(t=[t]);let f=e.constructor,l=0,a=f.$f,s=qt(r,f,e,t.length,i,f.$c);for(let e of t)if(e){let t,r=f.get(e,o),i=r.e,n=i.$b.k,$=s.bind(i,l++);n&&a[n]?a[n].push($):r.u?(n&&((t=[$]).e=i,a[n]=t,$=Tt.bind(a,n)),f.$s(i,$)):$()}return e},Et=function(){let e=this;e.id=q("s"),e.$g=[]};H(Et[k],{all(e,t){return Nt(this,e,t,2)},save(e,t){return Nt(this,e,t,2,1)},one(e,t){return Nt(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,h(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&D(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let Ot=(e,t)=>[y(t),y(e)].join(w),Pt=(e,t,r,i)=>{(i=e&&e.$b)&&t[i.n]&&r.del(i.k)},Ut={add(e){let t,r=this.$b;n(e)||(e=[e]);for(t of e)if(t){let{name:e,cache:i}=t;t.cache=0|i,r[e]=t}},create(e){let t=this.meta(e),r=0|e.cache||t.cache,n=new Ct;n.set(t),n.$b={n:t.name,a:t.after,x:t.cleans,k:r&&Ot(t,e)},i(e)&&n.set(e);let o=t.before;return o&&D(o,n,n),this.fire("begin",{bag:n}),n},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,i,n=this;return t||(r=n.cached(e)),r||(r=n.create(e),i=1),{e:r,u:i}},clear(e){this.$c.each(Pt,le((e+f).split(a)))},cached(e){let t,r,i=this,n=i.$c,o=i.meta(e),f=0|e.cache||o.cache;if(f&&(r=Ot(o,e)),r){let e=i.$f[r];e?t=e.e:(t=n.get(r))&&St()-t.$b.t>f&&(n.del(r),t=0)}return t},...se};return Et.extend=((e,t,r)=>{let i=function(){Et.call(this)};return i.$s=e,i.$c=new Q(t,r),i.$f={},i.$b={},G(i,Et,null,Ut)}),ae.Service=Et,H(v[k],se),v.extend=function e(t,r){let i=this,n=t&&t.ctor,o=function(...e){i.apply(this,e),n&&n.apply(this,e)};return o.extend=e,G(o,i,t,r)},ae.Base=v,ae});