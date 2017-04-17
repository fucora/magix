/*3.2.2 Licensed MIT*/define("magix",["$"],function(n){var t,e=function(){},r=function(n,t){if(n)if(f(n))require(n,t);else try{t(require(n))}catch(e){require([n],t)}else t&&t()},i=function(){},o=function(n,t,e,r,o){return i[x]=t[x],o=new i,O(o,e),O(n,r),o.constructor=n,n[x]=o,n},a=n.isPlainObject,f=n.isArray,u=function(t,e){n(t).html(e),m.triggerHandler({type:"htmlchange",target:t})},c=0,s="",$=[],h=$.slice,d=",",l=null,v=window,p=document,m=n(p),g="#",w=JSON.stringify,y="\x1e",b="object",x="prototype",k="/",V=/[#?].*$/,q=/([^=&?\/#]+)=?([^&#?]*)/g,I=/(?!^)=|&/,T=function(n){return(n||"mx_")+c++},A=T(),S={rootId:T(),defaultView:A,error:function(n){throw n}},H=S.hasOwnProperty,U=function(n){return typeof n==b?n:p.getElementById(n)},E=function(n,t,e){if(n=U(n),t=U(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},O=Object.assign||function(n,t,e){for(e in t)n[e]=t[e];return n},j=function(t,e){e&&!j[t]&&(j[t]=1,n("head").append("<style>"+e+"</style>"))},M=function(n,t,e,r,i,o){for(t=t||$,f(n)||(n=[n]),f(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(a){S.error(a)}return i},P=function(n,t){return n&&H.call(n,t)},Z=function(n,t){return t.f-n.f||t.t-n.t},C=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};O(C[x],{get:function(n){var t=this,e=t.c,r=e[y+n];return r&&(r.f++,r.t=c++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=y+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(Z);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=c++},del:function(n){n=y+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=s,delete t[n],r&&M(r,e.o,e))},has:function(n){return P(this.c,y+n)}});var L,F=new C,R=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}L[t]=e},B=function(n){var t,e=F.get(n);return e||(L={},t=n.replace(V,s),n==t&&I.test(t)&&(t=s),n.replace(t,s).replace(q,R),F.set(n,e={a:t,b:L})),{path:e.a,params:O({},e.b)}},D=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+s,(!e||r||P(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},N=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},J=Object.keys||function(n,t,e){t=[];for(e in n)P(n,e)&&t.push(e);return t},K={config:function(n,t){return t=S,n&&(t=a(n)?O(t,n):t[n]),t},boot:function(n){O(S,n),r(S.ini,function(t){O(S,t),O(S,n),r(S.exts,function(){kn.on("changed",Mn),un()})})},toMap:N,toTry:M,toUrl:D,parseUrl:B,mix:O,has:P,keys:J,inside:E,node:U,applyStyle:j,guid:T,Cache:C},Q="on",_={fire:function(n,t,e,r){var i,o,a,f,u=y+n,c=this,$=c[u];if(t||(t={}),t.type||(t.type=n),$)for(i=$.length,o=i-1;i--;)a=r?i:o-i,f=$[a],f.f?(f.x=1,M(f.f,t,c),f.x=s):f.x||($.splice(a,1),o--);$=c[Q+n],$&&M($,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=y+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=y+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t){r.f=s;break}}else delete o[i],delete o[Q+n]}};K.Event=_;var z,G,W,X,Y,nn,tn,en,rn=n.isFunction,on=g+"!",an=function(n,t){n=on+n,t?ln.replace(n):ln.hash=n},fn=function(n,t,e,r,i){n=D(n,t,i),n!=e.srcHash&&an(n,r)},un=function(){var t,e,r=bn().srcHash;n(v).on("hashchange",function(n,i,o){return e?void an(r):(i=bn(),t=i.srcHash,void(t!=r&&(o=function(){n.p=1,r=t,e=s,an(t),xn()},n={backward:function(){n.p=1,e=s},forward:o,prevent:function(){e=1,an(r)}},kn.fire("change",n),e||n.p||o())))}),v.onbeforeunload=function(n){n=n||v.event;var t={};if(kn.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},xn()},cn="path",sn="view",$n="params",hn=new C,dn=new C,ln=v.location,vn={params:{},href:s},pn=/(?:^.*\/\/[^\/]+|#.*$)/gi,mn=/^[^#]*#?!?/,gn=function(n,t){return t=this[$n],t[n]||s},wn=function(n,t){if(X||(X=S.routes||{},Y=S.unmatchView,tn=S.defaultView,en=S.defaultPath||k,nn=rn(X),nn||X[en]||(X[en]=tn)),!n[sn]){var e=n.hash[cn]||z&&n.query[cn]||en;t=nn?X.call(S,e,n):X[e]||Y||tn,n[cn]=e,n[sn]=t}},yn=function(n,t){var e=n.href,r=t.href,i=e+y+r,o=dn.get(i);if(!o){var a,f,u,c;o={force:!e},o[$n]=c={};var s,$,h=n[$n],d=t[$n],l=[cn,sn].concat(J(h),J(d));for(s=l.length-1;s>=0;s--)$=l[s],1==s&&(h=n,d=t,c=o),f=h[$],u=d[$],f!=u&&(c[$]={from:f,to:u},a=1);dn.set(i,o={a:a,b:o})}return o},bn=function(n){n=n||ln.href;var t,e,r,i,o,a=hn.get(n);return a||(t=n.replace(pn,s),e=n.replace(mn,s),r=B(t),i=B(e),o=O({},r[$n]),O(o,i[$n]),a={get:gn,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},wn(a),hn.set(n,a)),a},xn=function(){var n=bn(),t=yn(vn,vn=n);return t.a&&(W=vn[$n],kn.fire("changed",G=t.b)),G},kn=O({parse:bn,diff:xn,to:function(n,t,e){!t&&a(n)&&(t=n,n=s);var r=B(n),i=r[$n],o=r[cn],f=vn[cn],u=vn.query[$n];if(O(i,t),o){if(!z)for(f in u)P(i,f)||(i[f]=s)}else W&&(o=f,i=O(O({},W),i));fn(o,W=i,vn,e,u)}},_);K.Router=kn;var Vn,qn,In,Tn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=Hn[n.pId],e&&!P(e.$r,t)&&(e.$r[t]=1,e.$rc++,Tn(e)))},An=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=Hn[n.pId],r&&P(r.$r,e)&&(r.$rc--,delete r.$r[e],An(r,t)))},Sn=function(n,e){return Vn||(t=p.body,n=S.rootId,e=U(n),e||(t.id=n),Vn=new Pn(n)),Vn},Hn={},Un=function(n,t){P(Hn,n)||(Hn[n]=t,Pn.fire("add",{vframe:t}),n=U(n),n&&(n.vframe=t))},En=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},On=function(n,t,e){e=Hn[n],e&&(delete Hn[n],Pn.fire("remove",{vframe:e,fcc:t}),n=U(n),n&&(n.vframe=l))},jn=function(n,t){if(n&&n.$g!=In&&(t=n.$v)&&t.$s>0){var e=yt(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;o<i;)jn(Hn[r[o++]])}},Mn=function(n){var t,e=Sn();(t=n.view)?e.mountView(t.to):(In=c++,jn(e))},Pn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,Un(n,e)};O(Pn,O({all:function(){return Hn},get:function(n){return Hn[n]}},_)),O(O(Pn[x],_),{mountView:function(n,t){var e,i,o,a=this,f=a.id,u=U(f);if(!a.$a&&u&&(a.$a=1,a.$t=u.innerHTML),a.unmountView(),a.$d=0,u&&n){a.path=n,e=B(n),o=e.path,i=++a.$s;var c,s,$=e.params,h=Hn[a.pId];if(h=h&&h.$v,h=h&&h.updater,h&&n.indexOf(y)>0)for(c in $)s=$[c],s.charAt(0)==y&&($[c]=h.get(s));O($,t),r(o,function(n){if(i==a.$s){if(!n)return S.error(Error("id:"+f+" cannot load:"+o));gt(n),o=new n({owner:a,id:f},$),a.$v=o,a.$g=In,vt(o),o.init($),o.render(),o.$t||o.$p||o.endUpdate()}})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(qn||(t=1,qn={id:e.id}),e.$d=1,e.unmountZone(),An(e,qn),e.$v=0,bt(r),n=U(e.id),n&&e.$a&&u(n,e.$t),t&&(qn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return An(i),r=Hn[n],r||(P(i.$c,n)||(i.$cl=s,i.$cc++),i.$c[n]=n,r=new Pn(n,i.id)),r.mountView(t,e),r},mountZone:function(t,e){var r,i,o,a=this,f=[];t=t||a.id;var u=n(g+t+" [mx-view]");for(a.$h=1,r=0;r<u.length;r++)i=u[r],o=i.id||(i.id=T()),i.$m||(i.$m=1,f.push([o,i.getAttribute("mx-view")]));for(;f.length;)i=f.shift(),a.mountVframe(i[0],i[1],e);a.$h=0,Tn(a)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=Hn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),On(n,r),e.id=e.pId=s,e=Hn[i],e&&P(e.$c,n)&&(delete e.$c[n],e.$cl=s,e.$cc--,t||Tn(e)))},unmountZone:function(n){var t,e=this,r=e.$c;for(t in r)(!n||t!=n&&E(t,n))&&e.unmountVframe(t,1)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=Hn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=J(n.$c))},invoke:function(n,t){var e,r,i,o,a,f=this,u=f.$il;return(r=f.$v)&&r.$p?e=(i=r[n])&&M(i,t,r):(o=u[a=y+n],o&&(o.r=Vt(t)==Vt(o.a)),o={n:n,a:t,k:a},u.push(o),u[a]=o),e}}),K.Vframe=Pn;var Zn=function(n,t,e,r){t=n.data,e=n.currentTarget,n.eventTarget=e,r=t.i,(t.e||Dn(e,r)==r)&&M(t.f,n,t.v)},Cn=function(t,e,r,i,o,a){a&&(e+="."+a.i),i?n(t).off(e,o,r):n(t).on(e,o,a,r)},Ln="parentNode",Fn=new C(30,10),Rn=/(?:([\w\-]+)\u001e)?([^\(]+)\(([\s\S]*)?\)/,Bn={},Dn=function(n,t,e,r,i,o){for(;n=n[Ln];)if(r=Hn[e=n.id],r&&(t==e||(o=r.$v)&&o.$p&&o.$t)){i=e;break}return i},Nn=function(n){for(var e,r,i,o,a,f,u,c,s=n.target,h=n.type,d="mx-"+h,l=[];s!=t&&1==s.nodeType&&((e=s.getAttribute(d))&&(l=[],f=Fn.get(e),f||(f=e.match(Rn)||$,f={v:f[1],n:f[2],i:f[3]},f.p=f.i&&M(Function("return "+f.i))||{},Fn.set(e,f)),a=f.v,a||(a=Dn(s)),a?(i=Hn[a],o=i&&i.$v,o&&(u=f.n+y+h,c=o[u],c&&(n.eventTarget=s,n.params=f.p,M(c,n,o)))):S.error(Error("bad "+d+":"+e))),!((r=s.$)&&r[h]||n.mxStop||n.isPropagationStopped()));)l.push(s),s=s[Ln]||t;for(;s=l.pop();)r=s.$||(s.$={}),r[h]=1},Jn=function(n,e){var r=0|Bn[n];(!r||e&&1==r)&&Cn(t,n,Nn,e),Bn[n]=r+(e?-1:1)},Kn=/\\|'/g,Qn=/\r|\n/g,_n=/<%([@=!])?([\s\S]+?)%>|$/g,zn=function(n){var t=0,e="$p+='";return n.replace(_n,function(r,i,o,a){return e+=n.slice(t,a).replace(Kn,"\\$&").replace(Qn,"\\n"),t=a+r.length,"@"==i?e+="'\n$s=$i();\n$p+=$s;\n$$[$s]="+o+";\n$p+='":"="==i?e+="'+\n(($t=("+o+"))==null?'':$e($t))+\n'":"!"==i?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":o&&(e+="';\n"+o+"\n$p+='"),r}),e+="';\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){return (''+v).replace($er,$ef)},$i=function(){return '"+y+"'+$g++},$s;\n"+e+"return $p;\n",Function("$g","$$",e)},Gn=new C,Wn=function(n,t){var e=Gn.get(n);return e||(e=zn(n),Gn.set(n,e)),e(1,t)},Xn=/\d+\u001d/g,Yn=/([\w\-:]+)(?:=(["'])([\s\S]*?)\2)?/g,nt={amp:"&",lt:"<",gt:">",quot:'"',"#x27":"'","#x60":"`"},tt=/&([^;]+?);/g,et=function(n,t){return nt[t]||n},rt=function(n){return!n||typeof n!=b},it=function(n,t,e,r,i,o,a){var f,u,c,s=n.id||(n.id=T());if(i){var $=st(Wn(e.attr,r),a),h={};$.replace(Yn,function(n,t,e,r){h[t]=r});for(var d,l,v,p,m,g=e.attrs.length-1;g>=0;g--)d=e.attrs[g],l=d.n,m=d.f,d.v?(f=1,u=h[l]):(v=d.p?n[m||l]:n.getAttribute(l),p=d.b?P(h,l):h[l]||"",v!=p&&(d.p?(d.q&&(p=p.replace(tt,et)),n[m||l]=p):p?n.setAttribute(l,p):n.removeAttribute(l)))}f&&(c=Hn[s],c&&c[u?"unmountView":"unmountVframe"]()),o&&t.setHTML(s,Wn(e.tmpl,r)),f&&u&&t.owner.mountVframe(s,u)},ot=function(t,e,r){var i=Hn[t.$i],o=i&&i.$v;if(o){var a=o.tmpl,f=a.html,u=a.subs,c=o.id;if(t.$rd&&e)for(var s,$,h,d,l,v,p,m,g=u.length-1;g>=0;g--){if(h=0,d=0,$=u[g],l=1,p=$.mask,s=$.pKeys)for(v=s.length;--v>=0;)if(P(e,s[v])){l=0;break}if(l){for(s=$.keys,v=s.length,l=0;--v>=0;)if(P(e,s[v])){if(l=1,!p||h&&d){h=$.tmpl,d=$.attr;break}m=p.charAt(v),h=h||1&m,d=d||2&m}if(l){var w=n(st($.path,c));for(v=0;v<w.length;)it(w[v++],o,$,r,d,h,c,t)}}}else{var y,b,x=function(n){return y[n].tmpl};if(u){if(!u.$)for(u.$=y={},b=u.length;b>0;){var k=u[--b];k.s&&(y[k.s]=k,k.tmpl=k.tmpl.replace(Xn,x),delete k.s)}y=u.$}t.$rd=1;var V=f.replace(Xn,x);o.setHTML(t.$t,Wn(V,r))}}},at=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={}},ft=at.prototype;O(ft,{to:function(n,t){return t=this,t.$t=n,t},get:function(n){var t=this.$data;return n&&(t=t[n]),t},gain:function(n){for(var t,e=this.$data,r=n.split(".");e&&r.length;)t=r.shift(),e=e[t];return e},set:function(n){var t,e,r=this,i=r.$data,o=r.$keys;for(var a in n)e=n[a],t=i[a],rt(e)&&t==e||(o[a]=1),i[a]=e;return r},digest:function(n){var t=this;n&&t.set(n),n=t.$data;var e=t.$keys;return ot(t,e,n),t.$keys={},t},snapshot:function(){var n=this;return n.$ss=w(n.$data),n},altered:function(){var n=this;if(n.$ss)return n.$ss!=w(n.$data)}});var ut=/^(\$?)([^<]*?)<([^>]+)>$/,ct=/\u001f/g,st=function(n,t){return(n+s).replace(ct,t||this.id)},$t=function(n,t,e){return n.$l?e=n:(e=function(n){M(e.$l,n,this)},e.$l=[n],e.$m=1),e.$l=e.$l.concat(t.$l||t),e},ht=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&dt(i,e,1)},dt=function(n,t,e){var r,i,o=n[t];return o&&(i=o.e,r=i.destroy,r&&e&&M(r,$,i),delete n[t]),i},lt=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),ht(e),M(t,h.call(arguments),e))}},vt=function(n,t){var e,r,i=n.$eo,o=n.id;for(e in i)Jn(e,t);for(i=n.$el,e=i.length;e--;)r=i[e],Cn(r.e||g+o,r.n,Zn,t,r.s,{i:o,v:n,f:r.f,e:r.e})},pt=[],mt={win:v,doc:p},gt=function(n){if(!n[y]){n[y]=1;var t,e,r,i,o,a,f,u,c=n[x],s={},$=[];for(f in c)if(t=c[f],e=f.match(ut))for(a=e[1],r=e[2],i=e[3].split(d);u=i.pop();)a?(o=mt[r],$.push({f:t,s:o?l:r,n:u,e:o})):(s[u]=1,u=r+y+u,o=c[u],o?o.$m&&(t.$m?c[u]=$t(o,t):P(c,f)&&(c[u]=t)):c[u]=t);lt(c),c.$eo=s,c.$el=$,c.$t=!!c.tmpl}},wt=function(n,t,e){for(var r=0;r<n.length&&!(e=P(t,n[r]));r++);return e},yt=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=G[cn]),t||(t=wt(e.k,G[$n]))),t},bt=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),ht(n,1),vt(n,1)),n.$s--},xt=function(n,t){t=this,O(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.updater=new at(t.id),M(pt,n,t)},kt=xt[x];O(xt,{merge:function(n,t){t=n&&n.ctor,t&&pt.push(t),O(kt,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var a=function(n,t){e.call(this,n,t),M(i,t,this)},f=n.mixins;if(f){for(var u,c,s,$,h=f.length,d=0,l={};d<h;){u=f[d++];for(c in u)s=u[c],$=l[c],"ctor"==c?i.push(s):ut.test(c)?($?s=$t($,s):s.$m=1,l[c]=s):$?S.error(Error("mixins duplicate:"+c)):l[c]=s}n=O(l,n)}return a.extend=e.extend,o(a,e,n,t)}}),O(O(kt,_),{render:e,init:e,wrapEvent:st,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&(t.owner.unmountZone(n),t.fire("prerender",{id:n}))},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(n=n||t.id,t.fire("rendered",{id:n}),r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(t.wrapAsync(function(){En(e)}),0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,a(n)&&(t=n.path,n=n.params),e.p=t,n&&(e.k=r.concat((n+s).split(d)))},capture:function(n,t,e,r,i){return r=this.$r,t?(dt(r,n,1),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return dt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){i.prevent();var o="a",a="b";"change"!=i.type&&(o="b",a="a"),r[o]?i.backward():t()?(r[a]=1,e.leaveConfirm(n,function(){r[a]=0,i.forward()},function(){r[a]=0,i.backward()})):i.forward()},i=function(e){t()&&(e.msg=n)};kn.on("change",r),kn.on("pageunload",i),e.on("destroy",function(){kn.off("change",r),kn.off("pageunload",i)}),e.onviewunload=r},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t,e=this,r=e.$sd;if(r&&(t=P(r,n)))return r[n];var i=e.owner.parent();return i?i.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=U(n),e&&u(e,st(t,r.id))),r.endUpdate(n)}}),K.View=xt;var Vt=n.type,qt=n.proxy,It=n.now||Date.now,Tt=function(){this.id=T("b"),this.$={}};O(Tt[x],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,u=a;if(i){for(var c,$=f(n)?h.call(n):(n+s).split(".");(c=$.shift())&&u;)u=u[c];c&&(u=e)}var d;return o&&(d=Vt(t))!=Vt(u)&&(S.error(Error("type neq:"+n+" is not a(n) "+d)),u=t),u},set:function(n,t){var e,r=this;a(n)||(e={},e[n]=t,n=e),O(r.$,n)}});var At=1,St=2,Ht=function(n,t,e){e=this[n],e&&(delete this[n],M(e,t,e.e))},Ut=function(n,t,e,r,i,o){var a=[],f=l,u=0;return function(c,s){var $,h=this;u++;var d=h.$m,v=d.k;a[c+1]=h;var p={bag:h,error:s};if(s)f=s,t.fire("fail",p),$=1;else if(!o.has(v)){v&&o.set(v,h),d.t=It();var m=d.a;m&&M(m,h,h),d.x&&t.clear(d.x),t.fire("done",p),$=1}if(!e.$o){var g=u==r;g&&(e.$b=0,i==St&&(a[0]=f,M(n,a,e))),i==At&&M(n,[s?s:l,h,g,c],e)}$&&t.fire("end",p)}},Et=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){Et(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;f(t)||(t=[t]);for(var u,c=t.length,s=Ut(e,o,n,c,r,o.$c),$=0;$<c;$++)if(u=t[$]){var h,d=o.get(u,i),l=d.e,v=l.$m.k,p=qt(s,l,$);v&&a[v]?a[v].push(p):d.u?(v&&(h=[p],h.e=l,a[v]=h,p=qt(Ht,a,v)),o.$s(l,p)):p()}return n},Ot=function(){var n=this;n.id=T("s"),n.$q=[]};O(Ot[x],{all:function(n,t){return Et(this,n,t,St)},save:function(n,t){return Et(this,n,t,St,1)},one:function(n,t){return Et(this,n,t,At)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=h.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&M(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var jt=function(n,t,e){return e=[w(t),w(n)],e.join(y)},Mt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},Pt=O({add:function(n){var t=this,e=t.$m;f(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=0|n.cache||e.cache,i=new Tt;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&jt(e,n)},a(n)&&i.set(n);var o=e.before;return o&&M(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Mt,N((n+s).split(d)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=0|n.cache||o.cache;if(a&&(e=jt(o,n)),e){var f=r.$r,u=f[e];u?t=u.e:(t=i.get(e),t&&It()-t.$m.t>a&&(i.del(e),t=0))}return t}},_);Ot.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new C(t,e),i.$r={},i.$m={},o(i,r,l,Pt)},K.Service=Ot;var Zt=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=Zt,o(i,e,n,t)};return O(e[x],_),e.extend=Zt,K.Base=e,define(A,function(){return xt.extend()}),K});