/*!3.8.13 MIT kooboy_li@163.com*/define("magix",["$"],e=>{let t=e.isPlainObject,r=e.isArray,i=0,n="",o=[],l=",",f=null,a=window,s=void 0,$=document,d=$.documentElement.getAttribute,h=(e,t)=>d.call(e,t),u=e($),c=a.setTimeout,p="changed",m="change",g="pageunload",b="value",v="mxs",y="#";function w(){}let x,k,V=JSON.stringify,I="\x1e",T="object",C="prototype",S="params",q="path",j="mx-view",A=/[#?].*$/,U=/([^=&?\/#]+)=?([^&#?]*)/g,E=/(?!^)=|&/,N=e=>(e||"mx_")+i++,O=N(),P={rootId:N(),defaultView:O,error(e){throw e}},H=e=>typeof e==T?e:$.getElementById(e),M=e=>!e||typeof e!=T,_=(e,t,r,i)=>{let n,o,l,f=0;for(l in e)n=e[l],o=t[l],M(n)&&o===n||Q(i,l)||(r[l]=1,f=1),t[l]=n;return f},L=(e,t,r)=>{if(e=H(e),t=H(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:R,keys:Z,hasOwnProperty:B}=Object,D=e("head"),z=(e,t)=>{t&&!z[e]&&(z[e]=1,D.append(`<style>${t}`))},F=e=>h(e,"id")||(e.$a=1,e.id=N()),J=(e,t,i,n,l)=>{t=t||o,r(e)||(e=[e]),r(t)||(t=[t]);for(l of e)try{n=l&&l.apply(i,t)}catch(e){P.error(e)}return n},Q=(e,t)=>e&&B.call(e,t),X=(e,t)=>{let r,i;if(M(t))(r=t+n)[0]==I&&Q(e,r)&&(t=e[r]);else for(r in t)i=t[r],i=X(e,i),t[r]=i;return t},G=(e,t)=>t.f-e.f||t.t-e.t;function K(e,t,r,i){(i=this).c=[],i.b=t||5,i.x=i.b+(e||20),i.r=r}R(K[C],{get(e){let t=this.c[I+e];return t&&(t.f++,t.t=i++,t=t.v),t},each(e,t,r,i,n){i=(r=this).c;for(n of i)e(n.v,t,r)},set(e,t){let r=this,n=r.c,o=I+e,l=n[o],f=r.b;if(!l){if(n.length>=r.x)for(n.sort(G);f--;)(l=n.pop()).f>0&&r.del(l.o);l={o:e},n.push(l),n[o]=l}l.v=t,l.f=1,l.t=i++},del(e){e=I+e;let t=this.c,r=t[e],i=this.r;r&&(r.f=-1,r.v=n,delete t[e],i&&J(i,r.o))},has(e){return Q(this.c,I+e)}});let W=(e,t)=>{if(e)if(O==e)k||(k=Kt.extend()),t(k);else if(r(e))require(e,t);else try{t(require(e))}catch(r){require([e],t)}else t&&t()};function Y(){}let ee=(e,t,r,i,n)=>(Y[C]=t[C],n=new Y,R(n,r),R(e,i),n.constructor=e,e[C]=n,e),te=e.find||e.zepto,re=te.matchesSelector||te.matches,ie=(e,t)=>{t=e.data,e.eventTarget=t.e,J(t.f,e,t.v)},ne=(t,r,i,n,o)=>{o&&(r+=`.${o.i}`),n?e(t).off(r,i):e(t).on(r,o,i)},oe=e=>e;let le,fe=new K,ae=0,se=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}le[t]=r},$e=e=>{let t,r=fe.get(e);return r||(le={},e==(t=e.replace(A,n))&&E.test(t)&&(t=n),e.replace(t,n).replace(U,se),fe.set(e,r={a:t,b:le})),{path:r.a,params:{...r.b}}},de=(e,t,r)=>{let i,o,l,f=[];for(o in t)i=t[o]+n,(!r||i||Q(r,o))&&(i=encodeURIComponent(i),f.push(l=o+"="+i));return l&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+f.join("&")),e},he=(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},ue=new K,ce=(e,t,r)=>(ue.has(e)?r=ue.get(e):(r=J(Function(`return ${e}`)),e.indexOf(I)>-1?X(t,r):ue.set(e,r)),r),pe={config:(e,r)=>(r=P,e&&(r=t(e)?R(r,e):r[e]),r),boot(e){R(P,e),W(P.ini,t=>{R(P,t,e),W(P.exts,()=>{De.on(p,Xe),ke.on(p,Xe),ae=1,Le()})})},toMap:he,toTry:J,toUrl:de,parseUrl:$e,mix:R,has:Q,keys:Z,inside:L,node:H,applyStyle:z,guid:N,use:W,Cache:K,nodeId:F,guard:oe},me={fire(e,t,r,i){let o,l,f,a,s=this,$=s[I+e];if(t||(t={}),t.type=e,$)for(l=(o=$.length)-1;o--;)(a=$[f=i?o:l-o]).f?(a.x=1,J(a.f,t,s),a.x=n):a.x||($.splice(f,1),l--);return($=s[`on${e}`])&&J($,t,s),r&&s.off(e),s},on(e,t){let r=I+e;return(this[r]||(this[r]=[])).push({f:t}),this},off(e,t){let r,i=I+e,o=this,l=o[i];if(t){if(l)for(r of l)if(r.f==t){r.f=n;break}}else delete o[i],delete o[`on${e}`];return o}};pe.Event=me;let ge={},be={},ve={},ye=0,we=e=>{e=(e+n).split(",");for(let t of e)Q(be,t)?be[t]++:be[t]=1;return e},xe=e=>{let t,r;for(t of e)Q(be,t)&&((r=--be[t])||(delete be[t],delete ge[t]))};let ke={get(e){let t=e?ge[e]:ge;return t},set(e,t){return ye=_(e,ge,ve,t)||ye,this},digest(e,t){e&&ke.set(e,t),ye&&(ye=0,this.fire(p,{keys:ve}),ve={})},diff:()=>ve,clean:e=>({ctor(){e=we(e),this.on("destroy",()=>xe(e))}}),...me};pe.State=ke;let Ve,Ie="view",Te=new K,Ce=new K,Se=a.location,qe=0,je={query:{},params:{},href:n},Ae=/(?:^.*\/\/[^\/]+|#.*$)/gi,Ue=/^[^#]*#?!?/;function Ee(e,t){return this[S][e]||t!==s&&t||n}let Ne,Oe,Pe,He,Me,_e=(e,t)=>{e="#!"+e,t?Se.replace(e):Se.hash=e},Le=()=>{let e,t,r=Ze().srcHash;ne(a,"hashchange",(i,o,l)=>{t||(o=Ze(),(e=o.srcHash)!=r&&(l=(()=>{i.p=1,r=e,t=n,_e(e),Be()}),i={reject(){i.p=1,t=n,_e(r)},resolve:l,prevent(){t=1}},De.fire(m,i),t||i.p||l()))}),ne(a,"beforeunload",(e,t,r)=>{if(e=e||a.event,t={},De.fire(g,t),r=t.msg)return e&&(e.returnValue=r),r}),Be()},Re=$.title,Ze=e=>{e=e||Se.href;let r,i,o,l,f,a=Te.get(e);return a||(a={get:Ee,href:e,srcQuery:r=e.replace(Ae,n),srcHash:i=e.replace(Ue,n),query:o=$e(r),hash:l=$e(i),params:f={...o[S],...l[S]}},ae&&(((e,r)=>{if(Ne||(Ne=P.routes||{},Oe=P.unmatchView,Pe=P.defaultView,He=P.defaultPath||"/",Me=P.rewrite),!e[Ie]){let i=e.hash[q]||He;Me&&(i=Me(i,e[S],Ne)),r=Ne[i]||Oe||Pe,e[q]=i,e[Ie]=r,t(r)&&R(e,r)}})(a),Te.set(e,a))),a},Be=()=>{let e=Ze(),t=((e,t)=>{let r=e.href,i=t.href,n=r+I+i,o=Ce.get(n);if(!o){let i,l;o={params:l={},force:!r};let f,a=e[S],s=t[S],$=Z(a).concat(Z(s)),d=e=>{let t=a[e],r=s[e];t!=r&&(l[e]={from:t,to:r},i=1)};for(f of $)d(f);a=e,s=t,l=o,d(q),d(Ie),Ce.set(n,o={a:i,b:o})}return o})(je,je=e);return!qe&&t.a&&((Ve=t.b)[q]&&($.title=e.title||Re),De.fire(p,Ve)),qe=0,Ve},De={parse:Ze,diff:Be,to(e,r,i,o){!r&&t(e)&&(r=e,e=n);let l=$e(e),f=l[S],a=l[q],s=je[q],$=je[S],d=je.query[S];if(R(f,r),a)for(s in d)Q(f,s)||(f[s]=n);else $&&(a=s,f={...$,...f});var h,u,c,p;u=je,c=i,p=o,(h=de(h=a,f,d))!=u.srcHash&&(qe=p,_e(h,c))},...me};pe.Router=De;let ze,Fe,Je=0,Qe=(e,t,r,i,n,o)=>{if(e&&e.$a!=Je&&(r=e.$v)&&r.$a>1){(t?((e,t,r)=>{let i,n=e.$os;if(n)for(i of n)if(r=Q(t,i))break;return r})(r,t):Gt(r))&&r.$b(),n=e.children();for(o of n)Qe(Ge[o],t)}},Xe=(e,t,r)=>{t=et(),(r=e[Ie])?t.mountView(r.to):(Je=i++,Qe(t,e.keys))},Ge={},Ke=e=>{if(!e.$b&&!e.$d&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let{id:t,pId:r}=e,i=Ge[r];i&&!Q(i.$e,t)&&(i.$e[t]=1,i.$rc++,Ke(i))}},We=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let{id:r,pId:i}=e,n=Ge[i];n&&Q(n.$e,r)&&(n.$rc--,delete n.$e[r],We(n,t))}},Ye=(e,t,r,i)=>(i=(i=(i=Ge[e])&&i.$v)?i.$d.$a:{},t.indexOf(I)>0&&X(i,r),i),et=e=>(ze||(x=$.body,e=P.rootId,H(e)||(x.id=e),ze=new nt(e)),ze),tt=(e,t)=>{Q(Ge,e)||(Ge[e]=t,nt.fire("add",{vframe:t}),(e=H(e))&&(e.vframe=t))},rt=(e,t,r)=>{for(t=e.$f;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},it=[];function nt(e,t,r){(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=r.$g||1,r.$e={},r.$f=[],r.pId=t,tt(e,r)}R(nt,{all:()=>Ge,get:e=>Ge[e]},me),R(nt[C],me,{mountView(e,t){let r,i,o,l,f,a=this,s=a.id,$=H(s),d=a.pId;!a.$h&&$&&(a.$h=1,a.$i=$.innerHTML),a.unmountView(),a.$b=0,r=$e(e||n),o=r[q],$&&o&&(a[q]=e,l=r[S],Ye(d,e,l),a.$j=r[q],R(l,t),i=a.$g,W(o,e=>{if(i==a.$g){if(!e)return P.error(Error(`id:${s} cannot load:${o}`));f=Xt(e),o=new e(s,a,l,$,f),a.$v=o,a.$a=Je,zt(o),(l=J(o.init,[l,{node:$,deep:!o.tmpl}],o))||(l={then:e=>e()}),i=++a.$g,l.then(()=>{i==a.$g&&(o.$b(),o.tmpl||(a.$h=0,o.$e||o.endUpdate()))})}}))},unmountView(){let t,r,i=this,{$v:n,id:o}=i;i.$f=[],n&&(Fe||(r=1,Fe={id:o}),i.$b=1,i.unmountZone(0,1),We(i,Fe),i.$v=0,n.$a>0&&(n.$a=0,delete st[o],delete $t[o],n.fire("destroy",0,1,1),Zt(n,1),zt(n,1),n.owner=0),n.$a--,(t=H(o))&&i.$h&&e(t).html(i.$i),r&&(Fe=0)),i.$g++},mountVframe(e,t,r){let i,n=this,o=n.id,l=n.$c;return We(n,{id:e}),(i=Ge[e])||(Q(l,e)||(n.$n=0,n.$cc++),l[e]=e,(i=it.pop())?nt.call(i,e,o):i=new nt(e,o)),i.mountView(t,r),i},mountZone(t,r){let i,n,o=this,l=[];t=t||o.id;let f=e(`#${t} [${j}]`);o.$d=1;for(i of f)i.$b||(n=F(i),i.$b=1,l.push([n,h(i,j)]));for([n,i]of l)o.mountVframe(n,i);o.$d=0,r||Ke(o)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=Ge[e]){let{$cr:l,pId:f}=r;r.unmountView(),n=l,(o=Ge[i=e])&&(delete Ge[i],nt.fire("remove",{vframe:o,fcc:n}),(i=H(i))&&(i.$b=0,i.vframe=0,i.$a=0)),r.id=r.pId=r.$c=r.$e=0,r.$h=0,r.off("alter"),r.off("created"),it.push(r),(r=Ge[f])&&Q(r.$c,e)&&(delete r.$c[e],r.$n=0,r.$cc--,t||Ke(r))}var i,n,o},unmountZone(e,t){let r,i=this;for(r in i.$c)(!e||r!=e&&L(r,e))&&i.unmountVframe(r,1);t||Ke(i)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=Ge[t.pId];return t},children(e){return(e=this).$n||(e.$n=Z(e.$c))},invoke(e,t){let r,i,n,o,l,f=this.$f;return(i=this.$v)&&i.$e?r=(n=i[e])&&J(n,t,i):((o=f[l=I+e])&&(o.r=t===o.a),o={n:e,a:t,k:l},f.push(o),f[l]=o),r}}),pe.Vframe=nt,e.fn.invokeView=function(e,t){let r,i,n=[];for(r of this)i=r.vframe,n.push(i&&i.invoke(e,t));return n};let ot=new K(30,10),lt=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,ft={},at={},st={},$t={},dt=0,ht=(e,t)=>{let r,i,n,l,f,a,s=[],$=e,d=h(e,`mx-${t}`),u=[],c=y,p=0;if(d&&((f=ot.get(d))||(f={v:(f=d.match(lt)||o)[1],n:f[2],i:f[3]},ot.set(d,f)),f={...f,r:d}),f&&!f.v||at[t]){if((n=$t[i=$.$d])&&1==n[$.$e]&&(a=1,c=i),!a){for(u.push($);$!=x&&($=$.parentNode);){if(Ge[i=$.id]||(n=$t[i=$.$d])&&1==n[$.$e]){c=i;break}u.push($)}for(d of u)(i=$t[c])||(i=$t[c]={}),i[n=d.$e||(d.$e=++dt)]=1,d.$d=c}$=e.id,Ge[$]&&(p=c=$);do{if((r=Ge[c])&&(a=r.$v)){if(l=(n=a.$so)[t])for($=l.length;$--;)n={r:i=l[$],v:c,n:i},i?!p&&re(e,i)&&s.push(n):p&&s.unshift(n);if(a.tmpl&&!p){f&&!f.v&&(f.v=c);break}p=0}}while(r&&(c=r.pId))}return f&&s.push(f),s},ut=e=>{let t,r,i,n,o,l,f,a,{target:s,type:$}=e,d=[];for(;s!=x;){if((t=ht(s,$)).length){d=[];for(let{v:r,r:d,n:h,i:u}of t){if(f!=r){if(f&&e.isPropagationStopped())break;f=r}(n=(i=Ge[r])&&i.$v)?(l=n[o=h+I+$])&&(e.eventTarget=s,a=u?ce(u,n.$d.$a):{},e[S]=a,J(l,e,n)):e.stopPropagation()}}if((r=st[l=s.$d])&&(r=r[s.$e])&&r[$]||e.isPropagationStopped()){d.length&&d.push(l);break}f=s.id,Ge[f]&&d.push(f),d.push(s),s=s.parentNode||x}if(l=d.length)for(r=y;l--;)(n=d[l]).nodeType?((t=st[r])||(t=st[r]={}),(a=t[f=n.$e||(n.$e=++dt)])||(a=t[f]={}),a[$]=1):r=n},ct=(e,t,r)=>{let i=0|ft[e],n=r?-1:1;i&&r!==i||ne(x,e,ut,r),ft[e]=i+n,t&&(at[e]=(0|at[e])+n)},pt="http://www.w3.org/2000/svg",mt="http://www.w3.org/1998/Math/MathML",gt={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,`<svg xmlns="${pt}">`],m:[1,`<math xmlns="${mt}">`],_:[0,""]},bt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;let vt=$.implementation.createHTMLDocument(n),yt=vt.createElement("base");yt.href=$.location.href,vt.head.appendChild(yt);let wt=(e,t)=>{if(1==t.nodeType){let r=F(t);e.$c[r]?e.unmountVframe(r,1):e.unmountZone(r,1)}},xt={INPUT:[b,"checked"],TEXTAREA:[b],OPTION:["selected"]},kt=(e,t)=>(1==e.nodeType&&(e.$f?t=e.$g:((t=e.$a?n:h(e,"id"))||(t=h(e,v)),t||(t=h(e,j))&&(t=$e(t)[q]),e.$f=1,e.$g=t)),t),Vt=(e,t,r,i,n)=>{let o,l,f,a,s,$=e.lastChild,d=t.firstChild,h=0,u={},c={};for(;$;)h++,(f=kt($))&&(f=u[f]||(u[f]=[])).push($),$=$.previousSibling;for(;d;)(f=kt(d))&&(c[f]=(c[f]||0)+1),d=d.nextSibling;for(d=t.firstChild,$=e.firstChild;d;)if(h--,o=d,d=d.nextSibling,(a=u[f=kt(o)])&&(a=a.pop())){for(;a!=$;)s=$.nextSibling,e.appendChild($),$=s;$=a.nextSibling,c[f]&&c[f]--,It(a,o,e,r,i,n)}else $?(f=kt(l=$))&&u[f]&&c[f]?(h++,r.c=1,r.n.push([8,e,o,l])):($=$.nextSibling,It(l,o,e,r,i,n)):(r.c=1,r.n.push([1,e,o]));for(l=e.lastChild;h-- >0;)wt(i,l),r.n.push([2,e,l]),l=l.previousSibling,r.c=1},It=(e,t,r,i,o,f)=>{if(((e,t)=>{let r,i=e.nodeName,n=xt[i],o=0;if(n)for(r of n)e[r]!=t[r]&&(o=1,e[r]=t[r]);return o})(e,t)||1==e.nodeType&&e.hasAttribute("mxv")||!e.isEqualNode||!e.isEqualNode(t))if(e.nodeName===t.nodeName)if(1===e.nodeType){let r=h(t,v);if(r&&r==h(e,v))return;let a,s,$,d,u,c,p,m=h(t,j),g=t.innerHTML,w=h(t,"mxa"),x=!w||w!=h(e,"mxa"),k=Ge[h(e,"id")],V=m&&$e(m);if(m&&k&&(!h(t,"id")||h(t,"id")==h(e,"id"))&&k.$j==V[q]&&(d=k.$v)){if(c=g!=k.$i,p=m!=k[q],$=h(e,"mxv"),!c&&!p&&$){u=$.split(l);for($ of u)if($==y||Q(f,$)){p=1;break}}(p||c)&&(($=d.$e&&d.$f)?(u=V[S],Ye(k.pId,m,u),k.$i=g,k[q]=m,V={node:t,deep:!d.tmpl,attr:x,inner:c,query:p,keys:f},J($,[u,V],d)&&i.v.push(d),a=V.deep):(s=1,a=1))}else a=1,s=k;s&&(i.c=1,k.unmountVframe(0,1)),x&&((e,t,r,i)=>{let o,l,f,a;delete e.$f;let s=e.attributes,$=t.attributes;for(l=s.length;l--;)o=s[l].name,t.hasAttribute(o)||("id"==o?i||r.d.push([e,n]):(r.c=1,e.removeAttribute(o)));for(l=$.length;l--;)f=(o=$[l]).name,a=o[b],h(e,f)!=a&&("id"==f?r.d.push([e,a]):(r.c=1,e.setAttribute(f,a)))})(e,t,i,k&&m),a&&Vt(e,t,i,o,f)}else e.nodeValue!==t.nodeValue&&(i.c=1,e.nodeValue=t.nodeValue);else wt(o,e),i.c=1,i.n.push([4,r,t,e])},Tt={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},Ct=/[&<>"'\`]/g,St=e=>""+(null==e?"":e),qt=e=>`&${Tt[e]};`,jt=e=>St(e).replace(Ct,qt),At=(e,t,r,i)=>{for(i=e[I];--i;)if(e[r=I+i]===t)return r;return e[r=I+e[I]++]=t,r},Ut={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},Et=e=>Ut[e],Nt=/[!')(*]/g,Ot=e=>encodeURIComponent(St(e)).replace(Nt,Et),Pt=/[\\'"]/g,Ht=e=>St(e).replace(Pt,"\\$&"),Mt=(e,t)=>{let r,i,n=e.$k,o=e.$c,l=e.$b,f=Ge[l],a=f&&f.$v,s={d:[],v:[],n:[]},$=H(l),d=e.$d,h=e.$a,c=r=>{t.i<t.length?Mt(e,t):(s=t.slice(),t.i=t.length=0,r&&a.fire("domready"),J(s))};if(t.i=t.length,e.$c=0,e.$k={},o&&a&&a.$a>0&&(r=a.tmpl)&&a.$d==e){a.fire("dompatch"),delete st[l],delete $t[l],i=((e,t)=>{let r,i=vt.createElement("div"),n=t.namespaceURI;r=n==pt?"g":n==mt?"m":(bt.exec(e)||[0,""])[1];let o=gt[r]||gt._;i.innerHTML=o[1]+e;let l=o[0];for(;l--;)i=i.lastChild;return i})(r(d,l,h,jt,St,Ot,At,Ht),$),Vt($,i,s,f,n);for(i of s.d)i[0].id=i[1];for(i of s.n)1==i[0]?i[1].appendChild(i[2]):2==i[0]?i[1].removeChild(i[2]):4==i[0]?i[1].replaceChild(i[2],i[3]):i[1].insertBefore(i[2],i[3]);f.$d=r=s.c||!a.$e;for(i of s.v)i.$b();r&&a.endUpdate(l),s.c&&u.trigger({type:"htmlchanged",vId:l}),c(1)}else c()};function _t(e){let t=this;t.$b=e,t.$c=1,t.$d={vId:e},t.$a={[I]:1},t.$e=[],t.$k={}}R(_t[C],{get(e,t){return t=this.$d,e&&(t=t[e]),t},set(e,t){let r=this;return r.$c=_(e,r.$d,r.$k,t)||r.$c,r},digest(e,t,r){let i=this.set(e,t),n=i.$e;r&&n.push(r),n.i||Mt(i,n)},snapshot(){return this.$f=V(this.$d),this},altered(){let e=this;if(e.$f)return e.$f!=V(e.$d)},translate(e){return X(this.$d,e)},parse(e){return ce(e,this.$a)}});let Lt=/^(\$?)([^<]*)<([^>]+)>(?:&(.+))?$/,Rt=(e,t,r)=>(e.a?r=e:((r=function(e){J(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),Zt=(e,t)=>{let r,i,n=e.$r;for(r in n)i=n[r],(t||i.x)&&Bt(n,r,1)},Bt=(e,t,r,i)=>{let n,l,f=e[t];return f&&f!=i&&((n=(l=f.e).destroy)&&r&&J(n,o,l),delete e[t]),l},Dt=(e,t,r,i,n)=>{i=e[t],e[t]=e[r]=function(...e){(n=this).$a>0&&(n.$a++,n.fire("rendercall"),Zt(n),J(i,e,n))}},zt=(e,t)=>{let r,{$eo:i,$so:n,$el:o,id:l}=e;for(r in i)ct(r,n[r],t);for(r of o)ne(r.e,r.n,ie,t,{i:l,v:e,f:r.f,m:r.m,e:r.e})},Ft={win:a,doc:$},Jt=(e,t,r)=>{let i,n,o,l,f={};for(n of e)for(i in n)o=n[i],l=f[i],"ctor"!=i?(Lt.test(i)&&(l?o=Rt(l,o):o.b=1),f[i]=o):r.push(o);for(i in f)Q(t,i)||(t[i]=f[i])};function Qt(...e){let t=this._||(this._=[]);return Jt(e,this[C],t),this}let Xt=e=>{if(!e[I]){e[I]=[];let t,r,i,n,o,f,a,s,$,d,h,u=e[C],c={},p=[],m={};(r=u.mixins)&&Jt(r,u,e[I]);for(a in u)if(t=u[a],r=a.match(Lt)){if([,f,i,n,h]=r,d={},h){h=h.split(l);for(s of h)d[s]=!0}n=n.split(l);for(s of n){if(o=Ft[i],$=1,f){if(o){p.push({f:t,e:o,n:s,m:d});continue}$=2,(o=m[s])||(o=m[s]=[]),o[i]||(o[i]=1,o.push(i))}c[s]=c[s]|$,(o=u[s=i+I+s])?o.b&&(t.b?u[s]=Rt(t,o):Q(u,a)&&(u[s]=t)):u[s]=t}}Dt(u,"render","$b"),u.$eo=c,u.$el=p,u.$so=m,u.$f=u.assign}return e[I]},Gt=e=>{let t,r,i,n=e.$l;if(n.f&&(n.p&&(t=Ve[q]),!t&&n.k)){i=Ve[S];for(r of n.k)if(t=Q(i,r))break}return t};function Kt(e,t,r,i,n){(n=this).owner=t,n.id=e,n.$l={k:[]},n.$r={},n.$a=1,n.updater=n.$d=new _t(n.id),(e=Kt._)&&J(e,[r,{node:i,deep:!n.tmpl}],n)}R(Kt,{merge:Qt,extend:function e(t,r){let i=this,n=(t=t||{}).ctor,o=[];function l(e,t,r,n,f,a,s,$,d){i.call(s=this,e,t,r,n,f),a=l._,$=[r,{node:n,deep:!s.tmpl}],a&&J(a,$,s),(d=o.concat(f)).length&&J(d,$,s)}return n&&o.push(n),l.merge=Qt,l.extend=e,ee(l,i,t,r)}}),R(Kt[C],me,{init:w,beginUpdate(e,t){(t=this).$a>0&&t.$e&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,i,n){(r=this).$a>0&&(e=e||r.id,t?n=t:(n=r.$e,r.$e=1),(i=r.owner).mountZone(e,t),n||c(r.wrapAsync(rt),0,i))},wrapAsync(e,t){let r=this,i=r.$a;return(...n)=>{if(i>0&&i==r.$a)return e.apply(t||r,n)}},observeLocation(e,r){let i;(i=this.$l).f=1,t(e)&&(r=e[q],e=e[S]),i.p=r,e&&(i.k=(e+n).split(l))},observeState(e){this.$os=(e+n).split(l)},capture(e,t,r,i){return i=this.$r,t?(Bt(i,e,1,t),i[e]={e:t,x:r}):t=(i=i[e])&&i.e,t},release(e,t){return Bt(this.$r,e,t)},leaveTip(e,t){let r=this,i=n=>{let o="a",l="b";n.type!=m&&(o="b",l="a"),i[o]?(n.prevent(),n.reject()):t()&&(n.prevent(),i[l]=1,r.leaveConfirm(()=>{i[l]=0,n.resolve()},()=>{i[l]=0,n.reject()},e))},n=r=>{t()&&(r.msg=e)};De.on(m,i),De.on(g,n),r.on("unload",i),r.on("destroy",()=>{De.off(m,i),De.off(g,n)})},render:w}),pe.View=Kt;let Wt=e.type,Yt=Date.now;function er(){this.id=N("b"),this.$={}}R(er[C],{get(e,t){let i,o=this.$;if(e){let t,i=r(e)?e.slice():(e+n).split(".");for(;(t=i.shift())&&o;)o=o[t];t&&(o=s)}return t!==s&&(i=Wt(t))!=Wt(o)&&(o=t),o},set(e,r){t(e)||(e={[e]:r}),R(this.$,e)}});function tr(e,t,r){(r=this[e])&&(delete this[e],J(r,t,r.e))}let rr=(e,t,r,i,n,o)=>{let l=[],a=f,s=0;return function($,d){s++;let h,u,c=this,p=c.$b,m=p.k;if(l[$+1]=c,d?(a=d,h=1):o.has(m)||(m&&o.set(m,c),p.t=Yt(),(u=p.a)&&J(u,c,c),(u=p.x)&&t.clear(u),h=1),!r.$d){let t=s==i;t&&(r.$e=0,2==n&&(l[0]=a,J(e,l,r))),1==n&&J(e,[d||f,c,t,$],r)}h&&t.fire("end",{bag:c,error:d})}},ir=(e,t,i,n,o)=>{if(e.$d)return e;if(e.$e)return e.enqueue(ir.bind(e,e,t,i,n,o));e.$e=1,r(t)||(t=[t]);let l=e.constructor,f=0,a=l.$f,s=rr(i,l,e,t.length,n,l.$c);for(let e of t)if(e){let t,r=l.get(e,o),i=r.e,n=i.$b.k,$=s.bind(i,f++);n&&a[n]?a[n].push($):r.u?(n&&((t=[$]).e=i,a[n]=t,$=tr.bind(a,n)),l.$s(i,$)):$()}return e};function nr(){let e=this;e.id=N("s"),e.$g=[]}R(nr[C],{all(e,t){return ir(this,e,t,2)},save(e,t){return ir(this,e,t,2,1)},one(e,t){return ir(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,c(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&J(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let or=(e,t)=>[V(t),V(e)].join(I),lr=(e,t,r,i)=>{(i=e&&e.$b)&&t[i.n]&&r.del(i.k)},fr={add(e){let t,i=this.$b;r(e)||(e=[e]);for(t of e)if(t){let{name:e,cache:r}=t;t.cache=0|r,i[e]=t}},create(e){let r=this.meta(e),i=0|e.cache||r.cache,n=new er;n.set(r),n.$b={n:r.name,a:r.after,x:r.cleans,k:i&&or(r,e)},t(e)&&n.set(e);let o=r.before;return o&&J(o,n,n),this.fire("begin",{bag:n}),n},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,i,n=this;return t||(r=n.cached(e)),r||(r=n.create(e),i=1),{e:r,u:i}},clear(e){this.$c.each(lr,he((e+n).split(l)))},cached(e){let t,r,i=this,n=i.$c,o=i.meta(e),l=0|e.cache||o.cache;if(l&&(r=or(o,e)),r){let e=i.$f[r];e?t=e.e:(t=n.get(r))&&Yt()-t.$b.t>l&&(n.del(r),t=0)}return t},...me};return nr.extend=((e,t,r)=>{function i(){nr.call(this)}return i.$s=e,i.$c=new K(t,r),i.$f={},i.$b={},ee(i,nr,f,fr)}),pe.Service=nr,R(w[C],me),w.extend=function e(t,r){let i=this,n=t&&t.ctor;function o(...e){i.apply(this,e),n&&n.apply(this,e)}return o.extend=e,ee(o,i,t,r)},pe.Base=w,pe});