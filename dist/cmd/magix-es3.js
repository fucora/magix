/*!3.8.12 MIT kooboy_li@163.com*/define("magix",function(){var o=function(n){return Object.prototype.toString.call(n).slice(8,-1)},n=function(e){return function(n){return o(n)==e}},l=n("Object"),V=n("Array"),p=function(n){return y.querySelectorAll(n)},b=function(n,e,t){var r=y.createEvent("Events");for(var i in r.initEvent(e,!0,!0),t)r[i]=t[i];n.dispatchEvent(r)},d=function(n){return n._mx||(n._mx=L("e"))},v={},$=function(n,e){n.eventTarget=e.e,X(e.f,n,e.v)},g=function(n,e,t,r,i){var o,f,u,a,c,h,s;r?function(n,e,t,r){var i=d(n),o=v[i];if(o){for(var f=void 0,u=void 0,a=o.length;a--;)if((u=o[a]).c==e&&u.b===r){var c=u.a;if(!t||t&&t.i==c){f=u,o.splice(a,1);break}}f&&n.removeEventListener(e,f.d,t&&t.m)}}(n,e,i,t):(f=e,u=i,a=t,c=d(o=n),h=v[c]||(v[c]=[]),s={a:u&&u.i,b:a,c:f,d:function(n){a.call(o,n,u)}},h.push(s),o.addEventListener(f,s.d,u&&u.m))},f=0,x="",w=[],j=",",C=null,u=window,a=void 0,y=document,c=u.setTimeout,t="changed",h="change",s="pageunload",k="value",I="mxs",S="#";function e(){}var M,r=JSON.stringify,T="\x1e",i="object",E="prototype",_="params",q="path",A="mx-view",m=/[#?].*$/,U=/([^=&?\/#]+)=?([^&#?]*)/g,H=/(?!^)=|&/,L=function(n){return(n||"mx_")+f++},O=L(),N={rootId:L(),defaultView:O,error:function(n){throw n}},P=function(n){return typeof n==i?n:y.getElementById(n)},Z=function(n){return!n||typeof n!=i},R=function(n,e,t,r){var i,o,f,u=0;for(f in n)i=n[f],o=e[f],Z(i)&&o===i||Y(r,f)||(u=t[f]=1),e[f]=i;return u},B=function(n,e,t){if(n=P(n),e=P(e),n&&e&&!(t=n==e))try{t=16==(16&e.compareDocumentPosition(n))}catch(n){}return t};function D(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Y(e,i)&&(n[i]=e[i]);return n}var z,F=function(n,e,t){for(t in e=[],n)Y(n,t)&&e.push(t);return e},J=N.hasOwnProperty,Q=document.head,G=document.createElement("div"),K=function(n,e){e&&!K[n]&&(K[n]=1,G.innerHTML="<style>"+e,Q.appendChild(G.firstChild))},W=function(n){return n.id||(n.id=L())},X=function(n,e,t,r,i){e=e||w,V(n)||(n=[n]),V(e)||(e=[e]);for(var o=0,f=n;o<f.length;o++){i=f[o];try{r=i&&i.apply(t,e)}catch(n){N.error(n)}}return r},Y=function(n,e){return n&&J.call(n,e)},nn=function(n,e){var t,r;if(Z(e))(t=e+x)[0]==T&&Y(n,t)&&(e=n[t]);else for(t in e)r=e[t],r=nn(n,r),e[t]=r;return e},en=function(n,e){return e.f-n.f||e.t-n.t};function tn(n,e,t,r){(r=this).c=[],r.b=e||5,r.x=r.b+(n||20),r.r=t}D(tn[E],{get:function(n){var e=this.c[T+n];return e&&(e.f++,e.t=f++,e=e.v),e},each:function(n,e,t){for(var r=0,i=(t=this).c;r<i.length;r++)n(i[r].v,e,t)},set:function(n,e){var t=this.c,r=T+n,i=t[r],o=this.b;if(!i){if(t.length>=this.x)for(t.sort(en);o--;)0<(i=t.pop()).f&&this.del(i.o);i={o:n},t.push(i),t[r]=i}i.v=e,i.f=1,i.t=f++},del:function(n){n=T+n;var e=this.c,t=e[n],r=this.r;t&&(t.f=-1,t.v=x,delete e[n],r&&X(r,t.o))},has:function(n){return Y(this.c,T+n)}});var rn=function(n,o){if(n){var f=[],e=void 0;if(O==n)z||(z=Qe.extend()),o(z);else if(u.seajs)seajs.use(n,function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=0,r=n;t<r.length;t++){var i=r[t];f.push(i&&i.__esModule&&i.default||i)}o&&o.apply(void 0,f)});else{V(n)||(n=[n]);for(var t=0,r=n;t<r.length;t++)e=r[t],e=require(e),f.push(e&&e.__esModule&&e.default||e);o&&o.apply(void 0,f)}}else o()};function on(){}var fn,un=function(n,e,t,r,i){return on[E]=e[E],D(i=new on,t),D(n,r),(i.constructor=n)[E]=i,n},an=function(n){return n},cn=new tn,hn=0,sn=function(n,e,t){try{t=decodeURIComponent(t)}catch(n){}fn[e]=t},dn=function(n){var e,t=cn.get(n);return t||(fn={},n==(e=n.replace(m,x))&&H.test(e)&&(e=x),n.replace(e,x).replace(U,sn),cn.set(n,t={a:e,b:fn})),{path:t.a,params:D({},t.b)}},vn=function(n,e,t){var r,i,o,f=[];for(i in e)r=e[i]+x,(!t||r||Y(t,i))&&(r=encodeURIComponent(r),f.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+f.join("&")),n},ln=function(n,e){var t,r={};if(n)for(var i=0,o=n;i<o.length;i++)t=o[i],r[e&&t?t[e]:t]=e?t:1+(0|r[t]);return r},$n=new tn,pn=function(n,e,t){return $n.has(n)?t=$n.get(n):(t=X(Function("return "+n)),-1<n.indexOf(T)?nn(e,t):$n.set(n,t)),t},gn={config:function(n,e){return e=N,n&&(e=l(n)?D(e,n):e[n]),e},boot:function(n){D(N,n),rn(N.exts,function(){Fn.on(t,Wn),jn.on(t,Wn),hn=1,Rn()})},toMap:ln,toTry:X,toUrl:vn,parseUrl:dn,mix:D,has:Y,keys:F,inside:B,node:P,applyStyle:K,guid:L,Cache:tn,use:rn,fire:b,type:o,nodeId:W,guard:an},mn={fire:function(n,e,t,r){var i,o,f,u,a=this,c=a[T+n];if(e||(e={}),e.type=n,c)for(o=(i=c.length)-1;i--;)(u=c[f=r?i:o-i]).f?(u.x=1,X(u.f,e,a),u.x=x):u.x||(c.splice(f,1),o--);return(c=a["on"+n])&&X(c,e,a),t&&a.off(n),a},on:function(n,e){var t=T+n;return(this[t]||(this[t]=[])).push({f:e}),this},off:function(n,e){var t,r=T+n,i=this[r];if(e){if(i)for(var o=0,f=i;o<f.length;o++)if((t=f[o]).f==e){t.f=x;break}}else delete this[r],delete this["on"+n];return this}};gn.Event=mn;var bn={},wn={},yn={},xn=0,kn=function(n){for(var e=0,t=n=(n+x).split(",");e<t.length;e++){var r=t[e];Y(wn,r)?wn[r]++:wn[r]=1}return n},In=function(n){for(var e,t=0,r=n;t<r.length;t++)e=r[t],Y(wn,e)&&(--wn[e]||(delete wn[e],delete bn[e]))};var jn=D({get:function(n){var e=n?bn[n]:bn;return e},set:function(n,e){return xn=R(n,bn,yn,e)||xn,this},digest:function(n,e){(n&&jn.set(n,e),xn)&&(xn=0,this.fire(t,{keys:yn}),yn={})},diff:function(){return yn},clean:function(n){return{ctor:function(){n=kn(n),this.on("destroy",function(){return In(n)})}}}},mn);gn.State=jn;var Vn,Cn="view",Sn=new tn,Mn=new tn,Tn=u.location,En=0,_n={query:{},params:{},href:x},qn=/(?:^.*\/\/[^\/]+|#.*$)/gi,An=/^[^#]*#?!?/;function Un(n,e){return this[_][n]||e!==a&&e||x}var Hn,Ln,On,Nn,Pn,Zn=function(n,e){n="#!"+n,e?Tn.replace(n):Tn.hash=n},Rn=function(){var r,i,o=Dn().srcHash;g(u,"hashchange",function(n,e,t){i||(e=Dn(),(r=e.srcHash)!=o&&(t=function(){n.p=1,i=x,Zn(o=r),zn()},n={reject:function(){n.p=1,i=x,Zn(o)},resolve:t,prevent:function(){i=1}},Fn.fire(h,n),i||n.p||t()))}),g(u,"beforeunload",function(n,e,t){if(n=n||u.event,e={},Fn.fire(s,e),t=e.msg)return n&&(n.returnValue=t),t}),zn()},Bn=y.title,Dn=function(n){n=n||Tn.href;var e,t,r,i,o=Sn.get(n);return o||(o={get:Un,href:n,srcQuery:e=n.replace(qn,x),srcHash:t=n.replace(An,x),query:r=dn(e),hash:i=dn(t),params:D({},r[_],i[_])},hn&&(!function(n,e){if(Hn||(Hn=N.routes||{},Ln=N.unmatchView,On=N.defaultView,Nn=N.defaultPath||"/",Pn=N.rewrite),!n[Cn]){var t=n.hash[q]||Nn;Pn&&(t=Pn(t,n[_],Hn)),e=Hn[t]||Ln||On,n[q]=t,n[Cn]=e,l(e)&&D(n,e)}}(o),Sn.set(n,o))),o},zn=function(){var n=Dn(),e=function(n,e){var t=n.href,r=e.href,i=t+T+r,o=Mn.get(i);if(!o){var f,u;o={params:u={},force:!t};for(var a=n[_],c=e[_],h=function(n){var e=a[n],t=c[n];e!=t&&(u[n]={from:e,to:t},f=1)},s=0,d=F(a).concat(F(c));s<d.length;s++)h(d[s]);a=n,c=e,u=o,h(q),h(Cn),Mn.set(i,o={a:f,b:o})}return o}(_n,_n=n);return!En&&e.a&&((Vn=e.b)[q]&&(y.title=n.title||Bn),Fn.fire(t,Vn)),En=0,Vn},Fn=D({parse:Dn,diff:zn,to:function(n,e,t,r){!e&&l(n)&&(e=n,n=x);var i,o,f,u,a=dn(n),c=a[_],h=a[q],s=_n[q],d=_n[_],v=_n.query[_];if(D(c,e),h)for(s in v)Y(c,s)||(c[s]=x);else d&&(h=s,c=D({},d,c));o=_n,f=t,u=r,(i=vn(i=h,c,v))!=o.srcHash&&(En=u,Zn(i,f))}},mn);gn.Router=Fn;var Jn,Qn,Gn=0,Kn=function(n,e,t,r,i,o){if(n&&n.$a!=Gn&&(t=n.$v)&&1<t.$a){(e?function(n,e,t){var r,i=n.$os;if(i)for(var o=0,f=i;o<f.length&&(r=f[o],!(t=Y(e,r)));o++);return t}(t,e):Ae(t))&&t.$b();for(var f=0,u=n.children();f<u.length;f++)o=u[f],Kn(Xn[o],e)}},Wn=function(n,e,t){e=te(),(t=n[Cn])?e.mountView(t.to):(Gn=f++,Kn(e,n.keys))},Xn={},Yn=function(n){if(!n.$b&&!n.$d&&n.$cc==n.$rc){n.$cr||(n.$cr=1,n.$ca=0,n.fire("created"));var e=n.id,t=n.pId,r=Xn[t];r&&!Y(r.$e,e)&&(r.$e[e]=1,r.$rc++,Yn(r))}},ne=function(n,e){if(!n.$ca&&n.$cr){n.$cr=0,n.$ca=1,n.fire("alter",e);var t=n.id,r=n.pId,i=Xn[r];i&&Y(i.$e,t)&&(i.$rc--,delete i.$e[t],ne(i,e))}},ee=function(n,e,t,r){return r=(r=(r=Xn[n])&&r.$v)?r.$d:{},0<e.indexOf(T)&&nn(r,t),r},te=function(n){return Jn||(M=y.body,n=N.rootId,P(n)||(M.id=n),Jn=new oe(n)),Jn},re=function(n,e){Y(Xn,n)||(Xn[n]=e,oe.fire("add",{vframe:e}))},ie=[];function oe(n,e,t,r){(r=this).id=n,r.$c={},r.$cc=0,r.$rc=0,r.$g=r.$g||1,r.$e={},r.$f=[],r.pId=e,r.hId=t,re(n,r)}D(oe,{all:function(){return Xn},get:function(n){return Xn[n]}},mn),D(oe[E],mn,{mountView:function(n,e){var t,r,i,o,f,u=this,a=u.id,c=P(a),h=u.hId||u.pId;!u.$h&&c&&(u.$h=1,u.$i=c.innerHTML),u.unmountView(),u.$b=0,t=dn(n||x),i=t[q],c&&i&&(u[q]=n,o=t[_],ee(h,n,o),u.$j=t[q],D(o,e),r=u.$g,rn(i,function(n){if(r==u.$g){if(!n)return N.error(Error("id:"+a+" cannot load:"+i));f=qe(n),i=new n(a,u,o,c,f),u.$v=i,u.$a=Gn,Me(i),(o=X(i.init,[o,{node:c,deep:!i.tmpl}],i))||(o={then:function(n){return n()}}),r=++u.$g,o.then(function(){r==u.$g&&(i.$b(),i.tmpl||(u.$h=0,i.$f||i.endUpdate()))})}}))},unmountView:function(){var n,e,t=this,r=t.$v,i=t.id;t.$f=[],r&&(Qn||(e=1,Qn={id:i}),t.$b=1,t.unmountZone(0,1),ne(t,Qn),(t.$v=0)<r.$a&&(r.$a=0,delete he[i],delete se[i],r.fire("destroy",0,1,1),Ce(r,1),Me(r,1),r.owner=0),r.$a--,(n=P(i))&&t.$h&&(n.innerHTML=t.$i),e&&(Qn=0)),t.$g++},mountVframe:function(n,e,t,r){var i,o=this,f=o.id,u=o.$c;return ne(o,{id:n}),(i=Xn[n])||(Y(u,n)||(o.$n=0,o.$cc++),u[n]=n,(i=ie.pop())?oe.call(i,n,f,e):i=new oe(n,f,e)),i.mountView(t,r),i},mountZone:function(n,e){var t,r,i=this,o=[];n=n||i.id;var f=p("#"+n+" ["+A+"]");i.$d=1;for(var u,a,c={},h=0,s=f;h<s.length;h++)if(!(t=s[h]).$a){r=W(t),Y(c,r)||(t.$a=1,o.push([r,t.getAttribute(A),t.getAttribute("mxo")]));for(var d=0,v=p("#"+r+" ["+A+"]");d<v.length;d++)u=v[d],c[r=W(u)]=1}for(var l=0,$=o;l<$.length;l++)r=(a=$[l])[0],t=a[1],u=a[2],i.mountVframe(r,u,t);i.$d=0,e||Yn(i)},unmountVframe:function(n,e){var t,r,i,o;if(n=n?this.$c[n]:this.id,t=Xn[n]){var f=t.$cr,u=t.pId;t.unmountView(),i=f,(o=Xn[r=n])&&(delete Xn[r],oe.fire("remove",{vframe:o,fcc:i}),(r=P(r))&&(r.$a=0)),t.id=t.pId=t.hId=t.$c=t.$e=0,t.off("alter"),t.off("created"),ie.push(t),(t=Xn[u])&&Y(t.$c,n)&&(delete t.$c[n],t.$n=0,t.$cc--,e||Yn(t))}},unmountZone:function(n,e){var t;for(t in this.$c)(!n||t!=n&&B(t,n))&&this.unmountVframe(t,1);e||Yn(this)},parent:function(n,e){for(e=this,n=n>>>0||1;e&&n--;)e=Xn[e.pId];return e},host:function(n){return n=Xn[(n=this).hId||n.pId]},children:function(n){return(n=this).$n||(n.$n=F(n.$c))},invoke:function(n,e){var t,r,i,o,f,u=this.$f;return(r=this.$v)&&r.$f?t=(i=r[n])&&X(i,e,r):((o=u[f=T+n])&&(o.r=e===o.a),o={n:n,a:e,k:f},u.push(o),u[f]=o),t}}),gn.Vframe=oe;var fe=new tn(30,10),ue=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,ae={},ce={},he={},se={},de=0,ve=function(n,e){var t,r,i,o,f,u,a,c,h=[],s=n,d=n.getAttribute("mx-"+e),v=[],l=S,$=0;if(d&&((f=fe.get(d))||(f={v:(f=d.match(ue)||w)[1],n:f[2],i:f[3]},fe.set(d,f)),f=D({},f,{r:d})),f&&!f.v||ce[e]){if((i=se[r=s.$b])&&1==i[s.$d]&&(u=1,l=r),!u){for(v.push(s);s!=M&&(s=s.parentNode);){if(Xn[r=s.id]||(i=se[r=s.$b])&&1==i[s.$d]){l=r;break}v.push(s)}for(var p=0,g=v;p<g.length;p++)d=g[p],(r=se[l])||(r=se[l]={}),r[i=d.$d||(d.$d=++de)]=1,d.$b=l}var m=f&&!f.v;s=n.id,Xn[s]&&($=l=s);do{if((t=Xn[l])&&(u=t.$v)){if(o=(i=u.$so)[e])for(s=o.length;s--;)i={r:r=o[s],v:l,n:r},r?!$&&(a=n,(c=r)&&a&&1===a.nodeType&&(a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector).call(a,c))&&h.push(i):$&&h.unshift(i);if(m&&(f.v?h.push(D({},f,{v:l})):f.v=l),u.tmpl&&!$){f&&!f.v&&(f.v=l);break}$=0}}while(t&&(l=t.pId))}return f&&h.push(f),h},le=function(n){for(var e,t,r,i,o,f,u,a=n.target,c=n.type,h=[];a!=M;){if((e=ve(a,c)).length){h=[];for(var s=0,d=e;s<d.length;s++){var v=d[s],l=v.v,$=(v.r,v.n),p=v.i;if(f!=l){if(f&&n.isPropagationStopped())break;f=l}(i=(r=Xn[l])&&r.$v)?(o=i[$+T+c])&&(n.eventTarget=a,u=p?pn(p,i.$d):{},n[_]=u,X(o,n,i)):n.stopPropagation()}}if((t=he[o=a.$b])&&(t=t[a.$d])&&t[c]||n.isPropagationStopped()){h.length&&h.push(o);break}f=a.id,Xn[f]&&h.push(f),h.push(a),a=a.parentNode||M}if(o=h.length)for(t=S;o--;)(i=h[o]).nodeType?((e=he[t])||(e=he[t]={}),(u=e[f=i.$d||(i.$d=++de)])||(u=e[f]={}),u[c]=1):t=i},$e=function(n,e,t,r){var i;if(n){t=t||{};var o,f=x,u=void 0,a=void 0,c=void 0,h=void 0,s={},d="<"+n,v=x,l=[],$=void 0;if(e)for(var p=0,g=e;p<g.length;p++)c=(h=g[p]).a,h.b==ge&&(c=Ne(c)),v+=c,$&&h.b==ge&&$.b==ge?$.a+=h.a:(h.d&&(s[h.d]=(s[h.d]||0)+1),(h.e||pe[h.b])&&(u=1),$=h,l.push(h));for(a in t)!1!==(c=t[a])&&c!=C&&(!0===c&&(c=x),"id"==a?f=c:a==A&&c&&!f?f=dn(c)[q]:a!=I||f?"mxv"==a&&(u=1):f=c,t[a]=c,d+=" "+a+'="'+Ne(c)+'"');o=d,i={a:d+=r?"/>":">"+v+"</"+n+">",c:v,d:f,b:n,e:u,f:o,g:t,h:l,i:s,j:r}}else i={b:ge,a:e};return i},pe={input:[k,"checked"],textarea:[k],option:["selected"]},ge=f;var me=function(n,e){var t=W(e);n.$c[t]?n.unmountVframe(t,1):n.unmountZone(t,1)},be={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},we={mxv:1,mxa:1},ye=function(n,e,t,r){var i,o,f=t.g,u=e.g;if(e)for(i in u)Y(f,i)||("id"==i?r.d.push([n,x]):(r.c=1,n.removeAttribute(i)));for(i in f)Y(we,i)||(o=f[i],e&&u[i]===o||("id"==i?r.d.push([n,o]):(r.c=1,n.setAttribute(i,o))))},xe=function(n,e,t){var r,i=n.b;if(i==ge)r=y.createTextNode(n.a);else{r=y.createElementNS(be[i]||e.namespaceURI,i),ye(r,0,n,t);for(var o=0,f=n.h;o<f.length;o++)i=f[o],r.appendChild(xe(i,e,t))}return r},ke=function(n,e,t,r,i,o){if(e){if(e.e||e.c!=t.c){var f=void 0,u=0,a=e.h,c=t.h,h=void 0,s=void 0,d=a.length,v=c.length,l=t.i,$=n.childNodes,p=void 0,g={};for(f=d;f--;)(p=(h=a[f]).d)&&(p=g[p]||(g[p]=[])).push($[f]);for(f=0;f<v;f++)if(s=c[f],h=a[f],(p=g[s.d])&&(p=p.pop())){for(;p!=$[f];)n.appendChild($[f]),a.push(a[f]),a.splice(f,1),h=a[f];l[h.d]&&l[h.d]--,Ie($[f],n,h,s,r,i,o)}else h?g[h.d]&&l[h.d]?(a.splice(f,0,s),d++,r.c=1,r.n.push([8,n,xe(s,n,r),$[f]])):Ie($[f],n,h,s,r,i,o):(r.n.push([1,n,xe(s,n,r)]),r.c=1);for(f=v;f<d;f++)u=$[f],me(i,u),r.n.push([2,n,u])}}else for(r.c=1,e=xe(t,n,r),n.innerHTML="";e.firstChild;)n.appendChild(e.firstChild)},Ie=function(n,e,t,r,i,o,f,u){var a=t.g,c=r.g;if(function(n,e,t){var r,i,o=e.b,f=pe[o],u=t.g,a=0;if(f)for(var c=0,h=f;c<h.length;c++)r=h[c],i=Y(u,r)?r!=k||u[r]:r==k&&x,n[r]!=i&&(a=1,n[r]=i);return a}(n,t,r)||(u=t.e)||t.a!=r.a)if(t.b==r.b){if(t.b==ge)i.c=1,n.nodeValue=r.a;else if(!a[I]||a[I]!=c[I]){var h=c[A],s=r.c,d=t.f!=r.f,v=void 0,l=void 0,$=Xn[n.id],p=void 0,g=void 0,m=h&&dn(h),b=void 0,w=void 0,y=void 0;h&&$&&$.$j==m[q]&&a.id==c.id&&(g=$.$v)?(w=s!=t.c,((y=h!=$[q])||w||u||d)&&((p=g.$f&&g.$g)?(b=m[_],ee($.hId||$.pId,h,b),$[q]=h,m={node:n,attr:d,deep:!g.tmpl,inner:w,query:y,keys:f},X(p,[b,m],g)&&i.v.push(g),v=m.deep):v=l=1)):(v=1,l=$),l&&(i.c=1,$.unmountVframe(0,1)),d&&ye(n,t,r,i),!v||r.j&&t.j||ke(n,t,r,i,o,f)}}else me(o,n),i.n.push([4,e,xe(r,e,i),n]),i.c=1},je=/^(\$?)([^<]*)<([^>]+)>(?:&(.+))?$/,Ve=function(n,e,t){return n.a?t=n:((t=function(n){X(t.a,n,this)}).a=[n],t.b=1),t.a=t.a.concat(e.a||e),t},Ce=function(n,e){var t,r,i=n.$r;for(t in i)r=i[t],(e||r.x)&&Se(i,t,1)},Se=function(n,e,t,r){var i,o,f=n[e];return f&&f!=r&&((i=(o=f.e).destroy)&&t&&X(i,w,o),delete n[e]),o},Me=function(n,e){var t,r,i,o,f,u,a=n.$eo,c=n.$so,h=n.$el,s=n.id;for(t in a)i=c[r=t],o=e,void 0,f=0|ae[r],u=o?-1:1,f&&o!==f||g(M,r,le,o),ae[r]=f+u,i&&(ce[r]=(0|ce[r])+u);for(var d=0,v=h;d<v.length;d++)t=v[d],g(t.e,t.n,$,e,{i:s,v:n,f:t.f,m:t.m,e:t.e})},Te={win:u,doc:y},Ee=function(n,e,t){for(var r,i,o,f,u={},a=0,c=n;a<c.length;a++)for(r in i=c[a])o=i[r],f=u[r],"ctor"!=r?(je.test(r)&&(f?o=Ve(f,o):o.b=1),u[r]=o):t.push(o);for(r in u)Y(e,r)||(e[r]=u[r])};function _e(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=this._||(this._=[]);return Ee(n,this[E],t),this}var qe=function(n){if(!n[T]){n[T]=[];var e=n[E],t=void 0,r=void 0,i=void 0,o=void 0,f={},u=[],a={},c=void 0,h=void 0,s=void 0,d=void 0,v=void 0,l=void 0,$=void 0;for(s in(r=e.mixins)&&Ee(r,e,n[T]),e)if(t=e[s],r=s.match(je)){if(h=r[1],i=r[2],o=r[3],l={},$=r[4])for(var p=0,g=$=$.split(j);p<g.length;p++)l[d=g[p]]=!0;for(var m=0,b=o=o.split(j);m<b.length;m++){if(d=b[m],c=Te[i],v=1,h){if(c){u.push({f:t,e:c,n:d,m:l});continue}v=2,(c=a[d])||(c=a[d]=[]),c[i]||(c[i]=1,c.push(i))}f[d]=f[d]|v,(c=e[d=i+T+d])?c.b&&(t.b?e[d]=Ve(t,c):Y(e,s)&&(e[d]=t)):e[d]=t}}x="$b",k=(w=e)[y="render"],w[y]=w[x]=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];0<(I=this).$a&&(I.$a++,I.fire("rendercall"),Ce(I),X(k,n,I))},e.$eo=f,e.$el=u,e.$so=a,e.$g=e.assign}var w,y,x,k,I;return n[T]},Ae=function(n){var e,t,r,i=n.$l;if(i.f&&(i.p&&(e=Vn[q]),!e&&i.k)){r=Vn[_];for(var o=0,f=i.k;o<f.length&&(t=f[o],!(e=Y(r,t)));o++);}return e},Ue={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},He=/[&<>"'\`]/g,Le=function(n){return""+(null==n?"":n)},Oe=function(n){return"&"+Ue[n]+";"},Ne=function(n){return Le(n).replace(He,Oe)},Pe=function(n,e,t,r){for(r=n[T];--r;)if(n[t=T+r]===e)return t;return n[t=T+n[T]++]=e,t},Ze={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},Re=function(n){return Ze[n]},Be=/[!')(*]/g,De=function(n){return encodeURIComponent(Le(n)).replace(Be,Re)},ze=/[\\'"]/g,Fe=function(n){return Le(n).replace(ze,"\\$&")},Je=function(e,t){var n,r,i=e.$h,o=e.$i,f=e.id,u=Xn[f],a={d:[],v:[],n:[]},c=P(f),h=e.$j,s=e.$d,d=function(n){t.i<t.length?Je(updater,t):(a=t.slice(),t.i=t.length=0,n&&e.fire("domready"),X(a))};if(t.i=t.length,e.$i=0,e.$h={},o&&0<e.$a&&(n=e.tmpl)){e.fire("dompatch"),delete he[f],delete se[f],r=n(h,$e,f,s,Le,De,Pe,Fe,V,D),ke(c,e.$n,r,a,u,i),e.$n=r;for(var v=0,l=a.d;v<l.length;v++)(r=l[v])[0].id=r[1];for(var $=0,p=a.n;$<p.length;$++)1==(r=p[$])[0]?r[1].appendChild(r[2]):2==r[0]?r[1].removeChild(r[2]):r[1].replaceChild(r[2],r[3]);u.$d=n=a.c||!e.$f;for(var g=0,m=a.v;g<m.length;g++)(r=m[g]).$b();n&&e.endUpdate(f),a.c&&b(y,"htmlchanged",{vId:f}),d(1)}else d()};function Qe(n,e,t,r,i){var o;(i=this).owner=e,i.id=n,i.$l={k:[]},i.$r={},i.$a=1,i.$i=1,i.$j={id:n},i.$d=((o={})[T]=1,o),i.$o=[],i.$h={},(n=Qe._)&&X(n,[t,{node:r,deep:!i.tmpl}],i)}D(Qe,{merge:_e,extend:function n(e,t){var c=this,r=(e=e||{}).ctor,h=[];function s(n,e,t,r,i,o,f,u,a){c.call(f=this,n,e,t,r,i),o=s._,u=[t,{node:r,deep:!f.tmpl}],o&&X(o,u,f),(a=h.concat(i)).length&&X(a,u,f)}return r&&h.push(r),s.merge=_e,s.extend=n,un(s,c,e,t)}}),D(Qe[E],mn,{init:e,beginUpdate:function(n,e){0<(e=this).$a&&e.$f&&e.owner.unmountZone(n,1)},endUpdate:function(n,e,t,r,i){0<(t=this).$a&&(n=n||t.id,e?i=e:(i=t.$f,t.$f=1),(r=t.owner).mountZone(n,e),i||c(t.wrapAsync(function(){!function(n,e,t){for(e=n.$f;e.length;)(t=e.shift()).r||n.invoke(t.n,t.a),delete e[t.k]}(r)}),0))},wrapAsync:function(t,r){var i=this,o=i.$a;return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(0<o&&o==i.$a)return t.apply(r||i,n)}},observeLocation:function(n,e){var t;(t=this.$l).f=1,l(n)&&(e=n[q],n=n[_]),t.p=e,n&&(t.k=(n+x).split(j))},observeState:function(n){this.$os=(n+x).split(j)},capture:function(n,e,t,r){return r=this.$r,e?(Se(r,n,1,e),r[n]={e:e,x:t}):e=(r=r[n])&&r.e,e},release:function(n,e){return Se(this.$r,n,e)},leaveTip:function(r,i){var o=this,f=function(n){var e="a",t="b";n.type!=h&&(e="b",t="a"),f[e]?(n.prevent(),n.reject()):i()&&(n.prevent(),f[t]=1,o.leaveConfirm(function(){f[t]=0,n.resolve()},function(){f[t]=0,n.reject()},r))},n=function(n){i()&&(n.msg=r)};Fn.on(h,f),Fn.on(s,n),o.on("unload",f),o.on("destroy",function(){Fn.off(h,f),Fn.off(s,n)})},render:e,get:function(n,e){return e=this.$j,n&&(e=e[n]),e},set:function(n,e){var t=this;return t.$i=R(n,t.$j,t.$h,e)||t.$i,t},digest:function(n,e,t){var r=this.set(n,e),i=r.$o;t&&i.push(t),i.i||Je(r,i)},snapshot:function(){return this.$p=r(this.$j),this},altered:function(){if(this.$p)return this.$p!=r(this.$j)},translate:function(n){return nn(this.$j,n)},parse:function(n){return pn(n,this.$d)}}),gn.View=Qe;var Ge=Date.now;function Ke(){this.id=L("b"),this.$={}}D(Ke[E],{get:function(n,e){var t=this.$;if(n){for(var r=V(n)?n.slice():(n+x).split("."),i=void 0;(i=r.shift())&&t;)t=t[i];i&&(t=a)}return e!==a&&o(e)!=o(t)&&(t=e),t},set:function(n,e){var t;l(n)||((t={})[n]=e,n=t),D(this.$,n)}});function We(n,e,t){(t=this[n])&&(delete this[n],X(t,e,t.e))}var Xe=function(n,e,t,r,i){if(n.$d)return n;if(n.$e)return n.enqueue(Xe.bind(n,n,e,t,r,i));n.$e=1,V(e)||(e=[e]);for(var a,c,h,s,d,v,l,$,p,o=n.constructor,f=0,u=o.$f,g=(a=t,c=o,h=n,s=e.length,d=r,v=o.$c,l=[],$=C,p=0,function(n,e){p++;var t,r,i=this,o=i.$b,f=o.k;if(l[n+1]=i,e?($=e,t=1):v.has(f)||(f&&v.set(f,i),o.t=Ge(),(r=o.a)&&X(r,i,i),(r=o.x)&&c.clear(r),t=1),!h.$d){var u=p==s;u&&(h.$e=0,2==d&&(l[0]=$,X(a,l,h))),1==d&&X(a,[e||C,i,u,n],h)}t&&c.fire("end",{bag:i,error:e})}),m=0,b=e;m<b.length;m++){var w=b[m];if(w){var y=o.get(w,i),x=y.e,k=x.$b.k,I=g.bind(x,f++),j=void 0;k&&u[k]?u[k].push(I):y.u?(k&&((j=[I]).e=x,u[k]=j,I=We.bind(u,k)),o.$s(x,I)):I()}}return n};function Ye(){var n=this;n.id=L("s"),n.$g=[]}D(Ye[E],{all:function(n,e){return Xe(this,n,e,2)},save:function(n,e){return Xe(this,n,e,2,1)},one:function(n,e){return Xe(this,n,e,1)},enqueue:function(n){var e=this;return e.$d||(e.$g.push(n),e.dequeue(e.$h)),e},dequeue:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t,r=this;r.$e||r.$d||(r.$e=1,c(function(){r.$e=0,r.$d||(t=r.$g.shift())&&X(t,r.$h=n)},0))},destroy:function(n){(n=this).$d=1,n.$g=0}});var nt=function(n,e){return[r(e),r(n)].join(T)},et=function(n,e,t,r){(r=n&&n.$b)&&e[r.n]&&t.del(r.k)},tt=D({add:function(n){var e,t=this.$b;V(n)||(n=[n]);for(var r=0,i=n;r<i.length;r++)if(e=i[r]){var o=e.name,f=e.cache;e.cache=0|f,t[o]=e}},create:function(n){var e=this.meta(n),t=0|n.cache||e.cache,r=new Ke;r.set(e),r.$b={n:e.name,a:e.after,x:e.cleans,k:t&&nt(e,n)},l(n)&&r.set(n);var i=e.before;return i&&X(i,r,r),this.fire("begin",{bag:r}),r},meta:function(n){return this.$b[n.name||n]||n},get:function(n,e){var t,r;return e||(t=this.cached(n)),t||(t=this.create(n),r=1),{e:t,u:r}},clear:function(n){this.$c.each(et,ln((n+x).split(j)))},cached:function(n){var e,t,r=this.$c,i=this.meta(n),o=0|n.cache||i.cache;if(o&&(t=nt(i,n)),t){var f=this.$f[t];f?e=f.e:(e=r.get(t))&&Ge()-e.$b.t>o&&(r.del(t),e=0)}return e}},mn);return Ye.extend=function(n,e,t){function r(){Ye.call(this)}return r.$s=n,r.$c=new tn(e,t),r.$f={},r.$b={},un(r,Ye,C,tt)},gn.Service=Ye,D(e[E],mn),e.extend=function n(e,t){var r=this,i=e&&e.ctor;function o(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];r.apply(this,n),i&&i.apply(this,n)}return o.extend=n,un(o,r,e,t)},gn.Base=e,gn.default=gn});