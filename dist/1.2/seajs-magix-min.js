(function(e,t,r,n,a,i){i=0,a=function(e){return e.id||(e.id="mx_n_"+ ++i)},n("magix/magix",function(){var r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,n=/\/[^\/]*$/,a=/[#?].*$/,i="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,f=0,u="/",m="vframe",v="\n",h=t.console,l=h&&h.error,d=function(){},g={tagName:m,rootId:"magix_vf_root",progress:d,coded:1,execError:function(e){l&&h.error(e)}},p=g.hasOwnProperty,x=function(e,t){return e&&p.call(e,t)},y=function(t){return function(r,n,a){switch(arguments.length){case 0:a=t;break;case 1:a=O._o(r)?C(t,r):x(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],a=n):t[r]=a=n}return a}},w=function(e,t){return t.f-e.f||t.t-e.t},b=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5)):r=new b(e,t),r},C=function(e,t,r){for(var n in t)r&&x(r,n)||(e[n]=t[n]);return e};C(b.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,x(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,a=n.c,i=s+e,o=a[i];if(!x(a,i)){if(a.length>=n.b){a.sort(w);for(var c=n.b-n.x;c--;)o=a.pop(),delete a[o.k],o.m&&E(o.m,o.o,o)}o={},a.push(o),a[i]=o}return o.o=e,o.k=i,o.v=t,o.f=1,o.t=f++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=i,delete t[e],r.m&&(E(r.m,r.o,r),r.m=i))},has:function(e){return e=s+e,x(this.c,e)}});var M=b(60),P=b(),E=function(e,t,r,n,a,i){for(O._a(e)||(e=[e]),t&&(O._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{i=e[n],a=i&&i.apply(r,t)}catch(o){g.execError(o)}return a},O={mix:C,has:x,safeExec:E,noop:d,config:y(g),start:function(e){var t=this;C(g,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,a){g=C(g,a,e),g["!tnc"]=g.tagName!=m,r.on("!ul",n.locChged),r.on("changed",n.locChged),n.on("progress",g.progress),t.use(g.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)x(e,r)&&t.push(r);return t},local:y({}),path:function(e,t){var o=e+v+t,s=P.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(a,i).replace(n,i)+u,t.charAt(0)==u){var f=c.test(e)?8:0,m=e.indexOf(u,f);s=e.substring(0,m)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");P.set(o,s)}return s},pathToObject:function(e,t){var r=e+v+t,n=M.get(r);if(!n){n={};var f={},m=i;a.test(e)?m=e.replace(a,i):~e.indexOf("=")||(m=e);var h=e.replace(m,i);if(m&&c.test(m)){var l=m.indexOf(u,8);m=~l?m.substring(l):u}h.replace(o,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(a){}f[r]=n}),n[s]=m,n.params=f,M.set(r,n)}return n},objectToPath:function(e,t,r){var n,a=e[s],i=[],o=e.params;for(var c in o)n=o[c],(!r||n||x(r,c))&&(t&&(n=encodeURIComponent(n)),i.push(c+"="+n));return i.length&&(a=a+"?"+i.join("&")),a},listToMap:function(e,t){var r,n,a,i={};if(O._s(e)&&(e=e.split(",")),e&&(a=e.length))for(r=0;a>r;r++)n=e[r],i[t?n[t]:n]=t?n:1;return i},cache:b},T=Object.prototype.toString;return C(O,{use:function(e,t){e?seajs.use(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==T.call(e)},_s:function(e){return"[object String]"==T.call(e)},_n:function(e){return"[object Number]"==T.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var a=function(){};return a.prototype=t.prototype,e.prototype=new a,O.mix(e.prototype,r),O.mix(e,n),e.prototype.constructor=e,e}})}),n("magix/router",["magix/magix","magix/event"],function(e){var r,n,a,i,o,s,c=e("magix/magix"),f=e("magix/event"),u="",m="pathname",v="view",h=c.has,l=c.mix,d=c.keys,g=c.config(),p=c.cache(),x=c.cache(40),y={params:{},href:u},w=/#.*$/,b=/^[^#]*#?!?/,C="params",M=function(e,t,r){if(e){r=this[C],e=(e+u).split(",");for(var n=0;e.length>n&&!(t=h(r,e[n]));n++);}return t},P=function(){return this[m]},E=function(){return this[v]},O=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},T=function(e){var r=c.pathToObject(e,i),n=r[m];return n&&s&&(r[m]=c.path(t.location[m],n)),r},I=l({viewInfo:function(e,t){var r,a;if(!n){n={rs:g.routes||{},nf:g.notFoundView};var i=g.defaultView;n.dv=i;var o=g.defaultPathname||u;r=n.rs,n.f=c._f(r),n.f||r[o]||!i||(r[o]=i),n[m]=o}return e||(e=n[m]),r=n.rs,a=n.f?r.call(g,e,t):r[e],{view:a||n.nf||n.dv,pathname:e}},start:function(){var e=t.history;a=g.nativeHistory,i=g.coded,o=a&&e.pushState,s=a&&!o,o?I.useState():I.useHash(),I.route()},parseQH:function(e,r){e=e||t.location.href;var n=p.get(e);if(!n){var i=e.replace(w,u),o=e.replace(b,u),s=T(i),c=T(o),f={};l(f,s[C]),l(f,c[C]),n={get:O,set:O,href:e,refHref:y.href,srcQuery:i,srcHash:o,query:s,hash:c,params:f},p.set(e,n)}if(r&&!n[v]){var h;h=n.hash[m]||a&&n.query[m];var d=I.viewInfo(h,n);l(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,a=r+"\n"+n,i=x.get(a);if(!i){var o,s,c;i={},i[v]=c,i[m]=c,i[C]={};var f,u,h=[m,v];for(f=1;f>=0;f--)u=h[f],s=e[u],c=t[u],s!=c&&(i[u]={from:s,to:c},o=1);var l=e[C],g=t[C];for(h=d(l).concat(d(g)),f=h.length-1;f>=0;f--)u=h[f],s=l[u],c=g[u],s!=c&&(i[C][u]={from:s,to:c},o=1);i.occur=o,i.isParam=M,i.isPathname=P,i.isView=E,x.set(a,i)}return i},route:function(){var e=I.parseQH(0,1),t=!y.get,n=I.getChged(y,e);y=e,n.occur&&(r=e,I.fire("changed",{location:e,changed:n,force:t}))},navigate:function(e,t,n){if(!t&&c._o(e)&&(t=e,e=u),t&&(e=c.objectToPath({params:t,pathname:e},i)),e){var a=T(e),f={};if(f[C]=l({},a[C]),f[m]=a[m],f[m]){if(s){var v=r.query[C];for(var d in v)h(v,d)&&!h(f[C],d)&&(f[C][d]=u)}}else{var g=l({},r[C]);f[C]=l(g,f[C]),f[m]=r[m]}var p,x=c.objectToPath(f,i,r.query[C]);p=x!=r[o?"srcQuery":"srcHash"],p&&(o?(I.poped=1,history[n?"replaceState":"pushState"](u,u,x),I.route()):(l(f,r,f),f.srcHash=x,f.hash={params:f[C],pathname:f[m]},I.fire("!ul",{loc:r=f}),x="#!"+x,n?location.replace(x):location.hash=x))}}},f);return I.useState=function(){var e=I,t=location.href;$(WIN).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},I.useHash=function(){$(WIN).on("hashchange",I.route)},I}),n("magix/body",["magix/magix"],function(n){var i,o=n("magix/magix"),s=o.has,c=o.mix,f={},u={},m=String.fromCharCode(26),v="mx-ei",h="mx-owner",l="addEventListener",d="removeEventListener",g=r.body,p=g[l],x="parentNode",y={},w="on",b=",",C=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},M=function(){this.returnValue=!1},P=function(){this.cancelBubble=!0},E={special:function(e){c(f,e)},process:function(r){if(r=r||t.event,r&&!r[w]){var n=r.target||r.srcElement||g;for(r[w]=1;n&&1!=n.nodeType;)n=n[x];for(var o,c,f=n,u=r.type,l=y[u]||(y[u]=RegExp(b+u+"(?:,|$)")),d="mx-"+u,$=[];f&&1==f.nodeType&&(o=C(f,d),c=C(f,v),!o&&!l.test(c));)$.push(f),f=f[x];if(o){var E,O=o.split(m);if(O.length>1&&(E=O[0],o=O.pop()),E=E||C(f,h),!E)for(var T=f,I=i.all();T;){if(s(I,T.id)){C(f,h,E=T.id);break}T=T[x]}if(!E)throw Error("bad:"+o);var _=i.get(E),k=_&&_.view;k&&(p||(r.preventDefault=M,r.stopPropagation=P),k.pEvt({info:o,se:r,st:u,tId:a(n),cId:a(f)}))}else{for(var A;$.length;)A=$.shift(),c=C(A,v)||w,l.test(c)||(c=c+b+u,C(A,v,c));A=e}f=n=e}},act:function(t,r,n){var a=u[t]||0,o=a>0?1:0,s=E.process;if(a+=r?-o:o,!a){n&&(i=n);var c=f[t];c?E.lib(g,t,s,r):p?g[r?d:l](t,s,!1):g[w+t]=r?e:s,r||(a=1)}u[t]=a}},O={focus:2,blur:2,mouseenter:2,mouseleave:2};return E.special(O),E.lib=function(e,t,r,n){var a=O[t];1==a?$(e)[n?"off":"on"](t,r):$(e)[(n?"un":"")+"delegate"]("[mx-"+t+"]",t,r)},E}),n("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e){return"~"+e},n=t.safeExec,a={fire:function(e,t,a,i){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,m=c.length,v=m-1;m--;)f=i?m:v-m,u=c[f],(u.d||u.r)&&(c.splice(f,1),v--),u.d||n(u.f,t,s);a=a||0>v}a&&delete s[o]},on:function(e,t,n){var a=r(e),i=this[a]||(this[a]=[]),o={f:t};isNaN(n)?(o.r=n,i.push(o)):i.splice(0|n,0,o)},off:function(e,t){var n=r(e),a=this[n];if(a)if(t){for(var i,o=a.length-1;o>=0;o--)if(i=a[o],i.f==t&&!i.d){i.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,a),a}),n("magix/vframe",["magix/magix","magix/event","magix/view"],function(t){var n,i,o,s,c,f,u,m,v,h,l,d=t("magix/magix"),g=t("magix/event"),p=t("magix/view"),x=d.safeExec,y=[],$=d.mix,w=d.config(),b=d.has,C="querySelectorAll",M="alter",P="created",E=function(e){return"object"==typeof e?e:r.getElementById(e)},O=function(e,t,i){return t=E(e),t&&(i=o?r[C]("#"+a(t)+s):t.getElementsByTagName(n)),i||y},T=function(e,t,r){if(e=E(e),t=E(t),e&&t)if(e!==t)try{r=f?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},I=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.ns={},t.owner=l,l.add(e,t)};return I.root=function(t,a,m){if(!u){n=w.tagName,i=w["!tnc"],c=i?"mx-vframe":"mx-defer",o=i&&r[C],s=" "+n+"[mx-vframe]";var d=r.body;f=d.contains,v=a,h=m,l=t;var g=w.rootId,p=E(g);p||(p=r.createElement(n),p.id=g,d.appendChild(p),p=e),u=new I(g)}return u},$($(I.prototype,g),{mountView:function(e,t){var r=this,n=E(r.id);if(r._a||(r._a=1,r._t=n.innerHTML),r.unmountView(),e){var a=d.pathToObject(e),i=a.pathname,o=--r.sign;d.use(i,function(e){if(o==r.sign){p.prepare(e);var s=new e({owner:r,id:r.id,$:E,$c:T,path:i,vom:l,location:v});r.view=s;var c=function(){r.mountZoneVframes()};s.on("interact",function(e){e.tmpl||(n.innerHTML=r._t,c()),s.on("primed",function(){r.viewPrimed=1,r.fire("viewMounted")}),s.on("rendered",c),s.on("prerender",function(){r.unmountZoneVframes(0,1)||r.cAlter()})},0),t=t||{},s.load($(t,a.params,t),h)}})}},unmountView:function(){var e=this,t=e.view;if(t){m||(m={}),e.unmountZoneVframes(0,1),e.cAlter(m),e.view=0,t.oust();var r=E(e.id);r&&e._a&&(r.innerHTML=e._t),e.viewInited=0,e.viewPrimed&&(e.viewPrimed=0,e.fire("viewUnmounted")),m=0}e.sign--},mountVframe:function(e,t,r){var n=this;n.fcc&&n.cAlter();var a=l.get(e);return a||(a=new I(e),a.pId=n.id,b(n.cM,e)||n.cC++,n.cM[e]=1),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var o=O(n),s=o.length,f={};if(s)for(var u,m,v,h,l=0;s>l;l++)if(u=o[l],m=a(u),!b(f,m)&&(v=u.getAttribute("mx-view"),h=!u.getAttribute(c),h=h!=i,h||v)){r.mountVframe(m,v,t);for(var d,g=O(u),p=0,x=g.length;x>p;p++)d=g[p],f[a(d)]=1}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=l.get(e);if(n){var a=n.fcc;n.unmountView(),l.remove(e,a);var i=l.get(n.pId);i&&b(i.cM,e)&&(delete i.cM[e],i.cC--,t||i.cCreated())}},unmountZoneVframes:function(e,t){var r,n,a=this,i=a.cM;for(n in i)(!e||T(n,e))&&a.unmountVframe(n,r=1);return t||a.cCreated(),r},invokeView:function(e,t){var r,n=this;if(n.viewInited){var a=n.view,i=a&&a[e];i&&(r=x(i,t||y,a))}return r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(P,e),t.fire(P,e)),l.vfCreated();var n=t.id,a=l.get(t.pId);a&&!b(a.rM,n)&&(a.rM[n]=a.cM[n],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(t.fcc=0,!t.fca&&r){var n=t.view,a=t.id;n&&(t.fca=1,n.fire(M,e),t.fire(M,e));var i=l.get(t.pId);i&&b(i.rM,a)&&(i.rC--,delete i.rM[a],i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(h),n={location:v,changed:h,prevent:function(){this.cs=y},to:function(e){e=e||y,d._s(e)&&(e=e.split(",")),this.cs=e}};r&&x(t.locationChange,n,t);for(var a,i=n.cs||d.keys(e.cM),o=0,s=i.length;s>o;o++)a=l.get(i[o]),a&&a.locChged()}}}),I}),n("magix/view",function(n){var a=n("magix/magix"),i=n("magix/event"),o=n("magix/body"),s=n("magix/router"),c=a.safeExec,f=a.has,u=",",m=[],v=a.noop,h=a.mix,l=window,d=0,g="~",p="destroy",x=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&e.apply(t,arguments)}},y=function(e){var t=e&&e[p];t&&c(t,m,e)},w=function(e){l.clearTimeout(e),l.clearInterval(e)},b=function(e,t){var r=this,n=r.$res;for(var a in n){var i=n[a];(!e||i.mr)&&r.destroyManaged(a,t)}},C=a.cache(40),M="<",P=">",E=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,O=String.fromCharCode(26),T={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},I=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,_=/(\w+):([^,]+)/g,k=/([$\w]+)<([\w,]+)>/,A=function(e){var t=this;h(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.addNode(t.id),t.sign=1,c(A.ms,[e],t)},q=A.prototype,V={$host:t,$root:r};A.ms=[],A.prepare=function(e){if(!e[g]){e[g]=1;var t,r,n,a,i,o,s=e.prototype,c={},f=[];for(var m in s)if(t=s[m],r=m.match(k))for(n=r[1],a=r[2],a=a.split(u),i=a.length-1;i>-1;i--)r=a[i],o=V[n],o?f.push({n:n,t:r,h:o,f:t}):(c[r]=1,s[n+M+r+P]=t);else"render"==m&&t!=v&&(s[m]=x(t));s.$evts=c,s.$sevts=f}},A.mixin=function(e,t){t&&A.ms.push(t),h(q,e)},h(h(q,i),{render:v,locationChange:v,init:v,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),c(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,c(e.render,m,e);var a=!t&&!e.rendered;a&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("prerender"),b(0,1))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=1),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),b(1,1)),e.sign},wrapMxEvent:function(e){return(e+"").replace(E,"$&"+this.id+O)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var n=t.ks;a._o(e)&&(t.pn=e.pathname,e=e.keys),e&&(t.ks=n.concat((e+"").split(u)))},olChg:function(e){var t=this,r=t.$ol,n=1;return r.f&&(n=0,r.pn&&(n=e.pathname),n||(n=e.isParam(r.ks))),n},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("destroy",0,1,1),b(),e.dEvts(1)),e.sign--},parentView:function(){var t=this,r=t.vom,n=t.owner,a=r.get(n.pId),i=e;return a&&a.viewInited&&(i=a.view),i},pEvt:function(e){var t=this;if(t.sign>0){var r=e.info,n=e.se,a=C.get(r);a||(a=r.match(I),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(_,function(e,t,r){a.p[t]=r}),C.set(r,a));var i=a.n+M+e.st+P,o=t[i];if(o){var s=T[a.f];s&&s.call(T,n),c(o,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:n,halt:T.halt,prevent:T.prevent,stop:T.stop,params:a.p},t)}}},dEvts:function(e){var t=this,r=t.$evts,n=t.vom;for(var a in r)o.act(a,e,n);for(r=t.$sevts,a=r.length;a-->0;)n=r[a],o.lib(n.h,n.t,n.f,e,t)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,r=this;for(var n in r.$ns)if(t=r.$c(e,n))break;if(!t)for(var a in r.cM){var i=r.owner.get(a);if(t=i.inside(e))break}return t},navigate:s.navigate,manage:function(e,t,r){var n=this,i=arguments,o=1,s=n.$res;1==i.length?(t=e,e="res_"+d++,o=0):n.destroyManaged(e);var c;c=a._n(t)?w:y;var f={hk:o,res:t,ol:r,mr:t&&t.$reqs,oust:c};return s[e]=f,t},getManaged:function(t,r){var n=this,a=n.$res,i=e;if(f(a,t)){var o=a[t];i=o.res,r&&delete a[t]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,a=n.$res,i=a[e];return!i||t&&i.ol||(r=i.res,i.oust(r),i.hk&&t||delete a[e]),r}});var j={},N="?t="+Math.random(),S={},L={};return A.prototype.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(f(S,e))t(S[e]);else{var a=e.indexOf("/"),i=e.substring(0,a);j[i]||(j[i]=seajs.data.paths[i]);var o=j[i]+e.substring(a+1)+".html",s=L[o],u=function(r){t(S[e]=r)};s?s.push(u):(s=L[o]=[u],$.ajax({url:o+N,success:function(e){c(s,e),delete L[o]},error:function(e,t){c(s,t),delete L[o]}}))}},A.extend=function(e,t,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),t&&c(t,arguments,this)};return i.extend=n.extend,a.extend(i,n,e,r)},A}),n("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),a=r.has,i=r.mix,o=0,s=0,c=0,f=0,u={},m={},v={},h=r.mix({all:function(){return u},add:function(e,t){a(u,e)||(o++,u[e]=t,h.fire("add",{vframe:t}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],h.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&h.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,i(m,n),!r){i(v,e.changed);var a=t.root(h,m,v);v.view?a.mountView(n.view):a.locChged()}}},n);return h}),n("magix/mmanager",["magix/magix","magix/event"],function(t){var r=t("magix/magix"),n=t("magix/event"),a=r.has,i=r.safeExec,o=r._a,s=r.mix,c="mr",f=String.fromCharCode(26),u=12e5,m=function(e,t,r){t=[];for(r in e)t.push(r,c,e[r]);return t},v=function(e,t,r){for(var n,a=[t.name],i={},o=e.length-1;o>-1;o--)n=e[o],i[n]?e.splice(o,1):a.push(i[n]=m(t[n]),m(r[n]));return a.join(f)},h=function(e){var t=e.cache;if(t){var r=0|e.cacheTime;t=r?r:t===!0?u:0|t}return t},l=Date.now||function(){return+new Date},d=l(),g=function(e){throw Error(e)},p=function(e,t){var n=this;n.$mClass=e,n.$mCache=r.cache(),n.$mCacheKeys={},n.$mMetas={},t=t?o(t)?t:[t]:[],n.$sKeys=["postParams","urlParams"].concat(t),n.id="mm"+d--,i(p.ms,arguments,n)},x=[].slice,y=function(e,t,r,n){return function(){return e.apply(t,[r,n].concat(x.call(arguments)))}},$=function(e,t){var r=t.b,n=t.a,a=n[r];if(a){var o=a.q;delete n[r],i(o,e,a.e)}},w=function(t,r,n){var a,o=this,s=r.a,c=r.c,f=r.d,u=r.g,m=r.i,v=r.j,h=r.k,d=r.l,g=r.m,p=r.n,x=r.o;r.b++,delete c[o.id];var y=o.$mm,$=y.key,w=y.meta;if(f[t]=o,n)r.e=1,a=1,r.f=n,u.msg=n,u[t]=n,v.fire("fail",{model:o,meta:w,msg:n});else{if(!$||$&&!m.has($)){$&&m.set($,o),y.done=l();var b=y.after;b&&i(b,[o,w]),v.fire("done",{model:o,meta:w})}y.used>0&&(o.fromCache=1),y.used++}if(!s.$oust){if(h==M.ONE){var C=d?g[t]:g;C&&(p[t]=i(C,[a?u:e,o,u],s))}else if(h==M.ORDER){x[t]={m:o,e:a,s:n};for(var P,E,O=x.i||0;P=x[O];O++)E=d?g[O]:g,P.e&&(u.msg=P.s,u[O]=P.s),p[O]=i(E,[P.e?u:e,P.m,u].concat(p),s);x.i=O}r.b==r.h&&(r.e||(u=e),h==M.ALL?(f.unshift(u),p[0]=u,p[1]=i(g,f,s)):p.unshift(u),s.$ntId=setTimeout(function(){s.doNext(p)},30))}},b=function(e){return function(){var t=new P(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=x.call(r,0,-1)),t[e].apply(t,r)}},C=function(e,t){return function(r,n){var a=x.call(arguments,1);return this.send(r,a.length>1?a:n,e,t)}};s(p,{create:function(e,t){return new p(e,t)},mixin:function(e,t){t&&p.ms.push(t),s(p.prototype,e)},ms:[]});var M={ALL:1,ONE:2,ORDER:4},P=function(e){var t=this;t.$host=e,t.$reqs={},t.id=c+d--,t.$queue=[]};return s(P.prototype,{send:function(e,t,r,n){var i=this;if(i.$busy)return i.next(function(){this.send(e,t,r,n)}),i;i.$busy=1;var s=i.$host,c=s.$mCache,f=s.$mCacheKeys,u=i.$reqs;o(e)||(e=[e]);var m=e.length,v=[],h=o(t);h&&(v=Array(t.length));for(var l,d={a:i,b:0,c:i.$reqs,d:Array(m),g:{},h:m,i:c,j:s,k:r,l:h,m:t,n:v,o:[]},p=0;e.length>p;p++)if(l=e[p]){var x=s.getModel(l,n),b=x.cKey,C=x.entity,M=y(w,C,p,d);M.id=i.id,b&&a(f,b)?f[b].q.push(M):x.update?(u[C.id]=C,b&&(f[b]={q:[M],e:C},M=$),C.request(M,{a:f,b:b})):M()}else g("empty model");return i},fetchAll:function(e,t){return this.send(e,t,M.ALL)},saveAll:function(e,t){return this.send(e,t,M.ALL,1)},fetchOrder:C(M.ORDER),saveOrder:C(M.ORDER,1),saveOne:C(M.ONE,1),fetchOne:C(M.ONE),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&a(n,c)){for(var f,u=n[c],m=u.q,v=[],h=[],l=0;m.length>l;l++)f=m[l],f.id!=e.id?v.push(f):h.push(f);v.length?(i(h,"abort",u.e),u.q=v):s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),s(s(p.prototype,n),{registerModels:function(e){var t=this,r=t.$mMetas;o(e)||(e=[e]);for(var n,a,i=0;e.length>i;i++)n=e[i],n&&(a=n.name,a?r[a]&&g("already exist:"+a):g("miss name"),n.cache=h(n),r[a]=n)},registerMethods:function(e){s(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),a=h(e)||n.cache,o=new r.$mClass;o.set(n),o.$mm=t={used:0};var s=e.before||n.before;s&&i(s,[o,n]);var c=e.after||n.after;return t.after=c,a&&(t.key=v(r.$sKeys,n,e)),t.meta=n,e.name&&o.set(e),o.setUrlParams(n.urlParams),o.setPostParams(n.postParams),o.setUrlParams(e.urlParams),o.setPostParams(e.postParams),r.fire("inited",{model:o,meta:n}),o},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,a=r[n];return a||g("Unfound:"+n),a},getModel:function(e,t){var r,n,a=this;return t||(r=a.getCachedModel(e)),r||(n=1,r=a.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:b("saveAll"),fetchAll:b("fetchAll"),saveOrder:b("saveOrder"),fetchOrder:b("fetchOrder"),saveOne:b("saveOne"),fetchOne:b("fetchOne"),createMRequest:function(e){var t=new P(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),a=0;n.length>a;a++){var i=n[a],o=i.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,a=n.$mCache,i=e,o=n.getModelMeta(t),s=h(t)||o.cache;if(s&&(r=v(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,f=c[r];f?i=f.e:(i=a.get(r),i&&s>0&&l()-i.$mm.done>s&&(n.clearCacheByKey(r),i=0))}return i}}),p}),n("magix/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r){var n=this,a=function(){a.superclass.constructor.apply(this,arguments),r&&t.safeExec(r,arguments,this)};return t.mix(a,n,{prototype:!0}),t.extend(a,n,e)},n=+new Date,a=encodeURIComponent,i=t.has,o=t._o,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET);var n,i="$"+e,o=r[i],s=[];for(var f in o){n=o[f],t._a(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+a(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var a=this,s="$"+r;a[s]||(a[s]={});var c=a[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&i(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t,r){var n=this,a=arguments.length,i=2==a,o=n.$attrs;if(a){for(var c=(e+"").split(".");o&&c[0];)o=o[c.shift()];c[0]&&(o=r)}return i&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,a){r.$abt||(o(a)||(a={data:a}),r.set(a),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),c}),r.createElement("vframe")})(null,this,document,define);