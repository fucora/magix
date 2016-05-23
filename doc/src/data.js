define("data",function(){return {"Cache":{"id":"m1","desc":" Magix.Cache 类","name":"Cache","isa":"CONSTRUCTOR","isClass":true,"params":[{"type":"Integer","desc":"最大值","name":"max"},{"type":"Integer","desc":"缓冲区大小","name":"buffer"},{"type":"Function","desc":"当缓存的元素被删除时调用","name":"remove"}],"example":" var c=Magix.cache(5,2);//创建一个可缓存5个，且缓存区为2个的缓存对象\r\n c.set('key1',{});//缓存\r\n c.get('key1');//获取\r\n c.del('key1');//删除\r\n c.has('key1');//判断\r\n //注意：缓存通常配合其它方法使用，在Magix中，对路径的解析等使用了缓存。在使用缓存优化性能时，可以达到节省CPU和内存的双赢效果","methods":[{"id":"m33","desc":" 获取缓存的值","params":[{"type":"String","desc":"","name":"key"}],"returns":"{Object} 初始设置的缓存对象","memberOf":"Cache","name":"get"},{"id":"m34","desc":" 获取引用值，仅启动cnum模块时该方法才存在","params":[{"type":"String","desc":"缓存key","name":"key"},{"type":"Boolean","desc":"是否是增长","name":"increase"}],"isOptional":true,"needModule":"cnum","memberOf":"Cache","name":"num"},{"id":"m35","desc":" 循环缓存 需启用ceach或service模块","params":[{"type":"Function","desc":"回调","name":"cb"},{"type":"Object","desc":"回调时传递的额外参数","name":"ops"}],"isOptional":true,"needModule":"ceach|service","memberOf":"Cache","name":"each"},{"id":"m36","desc":" 设置缓存","params":[{"type":"String","desc":"缓存的key","name":"key"},{"type":"Object","desc":"缓存的对象","name":"value"}],"memberOf":"Cache","name":"set"},{"id":"m37","desc":" 删除缓存","params":[{"type":"String","desc":"缓存key","name":"key"}],"memberOf":"Cache","name":"del"},{"id":"m38","desc":" 检测缓存中是否有给定的key","params":[{"type":"String","desc":"缓存key","name":"key"}],"returns":"{Boolean}","memberOf":"Cache","name":"has"}]},"Magix":{"id":"m5","desc":" Magix对象，提供常用方法","name":"Magix","isNamespace":true,"methods":[{"id":"m52","desc":" 设置或获取配置信息","params":[{"type":"Object","desc":"配置信息对象,更多信息请参考Magix.boot方法","name":"[cfg]"}],"returns":"{Object} 配置信息对象","example":" Magix.config({\r\n      rootId:'J_app_main'\r\n });\r\n var config=Magix.config();\r\n S.log(config.rootId);","memberOf":"Magix","name":"config"},{"id":"m53","desc":" 应用初始化入口","params":[{"type":"Object","desc":"初始化配置参数对象","name":"cfg"},{"type":"String","desc":"默认加载的view","name":"cfg.defaultView"},{"type":"String","desc":"当无法从地址栏取到path时的默认值。比如使用hash保存路由信息，而初始进入时并没有hash,此时defaultPath会起作用","name":"cfg.defaultPath"},{"type":"String","desc":"404时加载的view","name":"cfg.unfoundView"},{"type":"Object","desc":"pathname与view映射关系表","name":"cfg.routes"},{"type":"String","desc":"根view的id","name":"cfg.rootId"},{"type":"Array","desc":"需要加载的扩展","name":"cfg.exts"},{"type":"Boolean","desc":"是否对地址栏中的参数进行编码或解码，默认true","name":"cfg.coded"},{"type":"Function","desc":"发布版以try catch执行一些用户重写的核心流程，当出错时，允许开发者通过该配置项进行捕获。注意：您不应该在该方法内再次抛出任何错误！","name":"cfg.error"}],"example":" Magix.boot({\r\n      rootId:'J_app_main',】\r\n      defaultView:'app/views/layouts/default',//默认加载的view\r\n      defaultPath:'/home',\r\n      routes:{\r\n          \"/home\":\"app/views/layouts/default\"\r\n      }\r\n });","memberOf":"Magix","name":"boot"},{"id":"m54","desc":" 把列表转化成hash对象","params":[{"type":"Array","desc":"源数组","name":"list"},{"type":"String","desc":"以数组中对象的哪个key的value做为hahs的key","name":"key"}],"returns":"{Object}","example":" var map=Magix.toMap([1,2,3,5,6]);\r\n //=> {1:1,2:1,3:1,4:1,5:1,6:1}\r\n var map=Magix.toMap([{id:20},{id:30},{id:40}],'id');\r\n //=>{20:{id:20},30:{id:30},40:{id:40}}","memberOf":"Magix","name":"toMap"},{"id":"m55","desc":" 以try cache方式执行方法，忽略掉任何异常","params":[{"type":"Array","desc":"函数数组","name":"fns"},{"type":"Array","desc":"参数数组","name":"args"},{"type":"Object","desc":"在待执行的方法内部，this的指向","name":"context"}],"returns":"{Object} 返回执行的最后一个方法的返回值","memberOf":"Magix","name":"toTry"},{"id":"m56","desc":" 转换成字符串路径","params":[{"type":"String","desc":"路径","name":"path"},{"type":"Object","desc":"参数对象","name":"params"},{"type":"Object","desc":"保留空白值的对象","name":"[keo]"}],"returns":"{String} 字符串路径","example":" var str=Magix.toUrl('/xxx/',{a:'b',c:'d'});\r\n //str==/xxx/?a=b&c=d\r\n var str=Magix.toUrl('/xxx/',{a:'',c:2});\r\n //str==/xxx/?a=&c=2\r\n var str=Magix.toUrl('/xxx/',{a:'',c:2},{c:1});\r\n //str==/xxx/?c=2\r\n var str=Magix.toUrl('/xxx/',{a:'',c:2},{a:1,c:1});\r\n //str==/xxx/?a=&c=2","memberOf":"Magix","name":"toUrl"},{"id":"m57","desc":" 把路径字符串转换成对象","params":[{"type":"String","desc":"路径字符串","name":"path"}],"returns":"{Object} 解析后的对象","example":" var obj=Magix.parseUrl('/xxx/?a=b&c=d');\r\n //obj={path:'/xxx/',params:{a:'b',c:'d'}}","memberOf":"Magix","name":"parseUrl"},{"id":"m58","desc":" 把src对象的值混入到aim对象上","params":[{"type":"Object","desc":"要mix的目标对象","name":"aim"},{"type":"Object","desc":"mix的来源对象","name":"src"}],"example":"   var o1={\r\n       a:10\r\n   };\r\n   var o2={\r\n       b:20,\r\n       c:30\r\n   };\r\n   Magix.mix(o1,o2);//{a:10,b:20,c:30}","returns":"{Object}","memberOf":"Magix","name":"mix"},{"id":"m59","desc":" 检测某个对象是否拥有某个属性","params":[{"type":"Object","desc":"检测对象","name":"owner"},{"type":"String","desc":"属性","name":"prop"}],"example":"   var obj={\r\n       key1:undefined,\r\n       key2:0\r\n   }\r\n   Magix.has(obj,'key1');//true\r\n   Magix.has(obj,'key2');//true\r\n   Magix.has(obj,'key3');//false","returns":"{Boolean} 是否拥有prop属性","memberOf":"Magix","name":"has"},{"id":"m60","desc":" 获取对象的keys","memberOf":"Magix","name":"keys"},{"id":"m61","desc":" 判断一个节点是否在另外一个节点内，如果比较的2个节点是同一个节点，也返回true","params":[{"type":"String|HTMLElement","desc":"节点或节点id","name":"node"},{"type":"String|HTMLElement","desc":"容器","name":"container"}],"returns":"{Boolean}","memberOf":"Magix","name":"inside"},{"id":"m62","desc":" document.getElementById的简写","params":[{"type":"String","desc":"","name":"id"}],"returns":"{HTMLElement|Null}","memberOf":"Magix","name":"node"},{"id":"m63","desc":" 应用样式","params":[{"type":"String","desc":"样式的名称前缀","name":"prefix"},{"type":"String","desc":"样式字符串","name":"css"}],"memberOf":"Magix","name":"applyStyle"},{"id":"m64","desc":" 返回全局唯一ID","params":[{"type":"String","desc":"前缀","name":"[prefix]"}],"returns":"{String}","memberOf":"Magix","name":"guid"}]},"Event":{"id":"m6","desc":" 多播事件对象","name":"Event","isNamespace":true,"methods":[{"id":"m68","desc":" 触发事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Object","desc":"事件对象","name":"data"},{"type":"Boolean","desc":"事件触发完成后是否移除这个事件的所有监听","name":"remove"},{"type":"Boolean","desc":"是否从后向前触发事件的监听列表","name":"lastToFirst"}],"memberOf":"Event","name":"fire"},{"id":"m69","desc":" 绑定事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"example":"  var T=Magix.mix({},Event);\r\n  T.on('done',function(e){\r\n      alert(1);\r\n  });\r\n  T.on('done',function(e){\r\n      alert(2);\r\n      T.off('done',arguments.callee);\r\n  });\r\n  T.fire('done',{data:'test'});\r\n  T.fire('done',{data:'test2'});\r\n  //!!不需要insert,场景不大，目前发现的主要在Router的changed事件，比如外部监听这种情况下写在插件里可以提前绑定，因为插件先加载。","memberOf":"Event","name":"on"},{"id":"m70","desc":" 解除事件绑定","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"memberOf":"Event","name":"off"}]},"Router":{"id":"m7","desc":" 路由对象，操作URL","name":"Router","isNamespace":true,"inherits":[{"alias":"Event.on","as":"on"},{"alias":"Event.fire","as":"fire"},{"alias":"Event.off","as":"off"}],"isOptional":true,"needModule":"router","events":[{"id":"m75","desc":" 当location.href有改变化后触发","name":"changed","isStatic":true,"params":[{"type":"Object","desc":"事件对象","name":"e"},{"type":"Function","desc":"检测是否是某个参数发生的改变","name":"e.isParam"},{"type":"Object","desc":"如果path发生改变时，记录从(from)什么值变成(to)什么值的对象","name":"e.path"},{"type":"Object","desc":"如果view发生改变时，记录从(from)什么值变成(to)什么值的对象","name":"e.view"},{"type":"Object","desc":"如果参数发生改变时，记录从(from)什么值变成(to)什么值的对象","name":"e.params"},{"type":"Boolean","desc":"标识是否是第一次强制触发的changed，对于首次加载完Magix，会强制触发一次changed","name":"e.force"}],"memberOf":"Router"}],"methods":[{"id":"m76","desc":" 执行url的更新","params":[{"type":"String","desc":"路径名","name":"path"},{"type":"Object","desc":"参数","name":"params"},{"type":"Object","desc":"上次的location","name":"loc"},{"type":"Boolean","desc":"是否使用replace更新url","name":"replace"}],"memberOf":"Router","name":"update"},{"id":"m77","desc":" 解析href的query和hash，默认href为location.href","params":[{"type":"String","desc":"href","name":"[href]"}],"returns":"{Object} 解析的对象","memberOf":"Router","name":"parse"},{"id":"m78","desc":" 根据location.href路由并派发相应的事件,同时返回当前href与上一个href差异对象","example":" var diff=Magix.Router.diff();\r\n if(diff.isParam('page,rows')){\r\n     console.log('page or rows changed');\r\n }","memberOf":"Router","name":"diff"},{"id":"m79","desc":" 导航到新的地址","params":[{"type":"Object|String","desc":"path或参数字符串或参数对象","name":"pn"},{"type":"String|Object","desc":"参数对象","name":"[params]"},{"type":"Boolean","desc":"是否替换当前历史记录","name":"[replace]"}],"example":" var R=Magix.Router;\r\n R.to('/list?page=2&rows=20');//改变path和相关的参数，地址栏上的其它参数会进行丢弃，不会保留\r\n R.to('page=2&rows=20');//只修改参数，地址栏上的其它参数会保留\r\n R.to({//通过对象修改参数，地址栏上的其它参数会保留\r\n     page:2,\r\n     rows:20\r\n });\r\n R.to('/list',{//改变path和相关参数，丢弃地址栏上原有的其它参数\r\n     page:2,\r\n     rows:20\r\n });\r\n //凡是带path的修改地址栏，都会把原来地址栏中的参数丢弃","memberOf":"Router","name":"to"},{"id":"m170","desc":" 绑定事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"example":"  var T=Magix.mix({},Event);\r\n  T.on('done',function(e){\r\n      alert(1);\r\n  });\r\n  T.on('done',function(e){\r\n      alert(2);\r\n      T.off('done',arguments.callee);\r\n  });\r\n  T.fire('done',{data:'test'});\r\n  T.fire('done',{data:'test2'});\r\n  //!!不需要insert,场景不大，目前发现的主要在Router的changed事件，比如外部监听这种情况下写在插件里可以提前绑定，因为插件先加载。","memberOf":"Event","name":"on","isStatic":true},{"id":"m171","desc":" 触发事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Object","desc":"事件对象","name":"data"},{"type":"Boolean","desc":"事件触发完成后是否移除这个事件的所有监听","name":"remove"},{"type":"Boolean","desc":"是否从后向前触发事件的监听列表","name":"lastToFirst"}],"memberOf":"Event","name":"fire","isStatic":true},{"id":"m172","desc":" 解除事件绑定","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"memberOf":"Event","name":"off","isStatic":true}]},"Vframe":{"id":"m11","desc":" Vframe类","name":"Vframe","isa":"CONSTRUCTOR","isClass":true,"inherits":[{"alias":"Event.on","as":"on"},{"alias":"Event.fire","as":"fire"},{"alias":"Event.off","as":"off"},{"alias":"Event.on","as":"#on"},{"alias":"Event.fire","as":"#fire"},{"alias":"Event.off","as":"#off"}],"params":[{"type":"String","desc":"vframe id","name":"id"}],"properties":[{"type":"String","desc":"vframe id","name":"id","id":"m12"},{"type":"String","desc":"当前view的路径名，包括参数","name":"path","id":"m13"},{"type":"String","desc":"父vframe的id，如果是根节点则为undefined","name":"pId","id":"m14"}],"events":[{"id":"m83","desc":" 注册vframe对象时触发","name":"add","isStatic":true,"params":[{"type":"Object","desc":"","name":"e"},{"type":"Vframe","desc":"","name":"e.vframe"}],"memberOf":"Vframe"},{"id":"m84","desc":" 删除vframe对象时触发","name":"remove","isStatic":true,"params":[{"type":"Object","desc":"","name":"e"},{"type":"Vframe","desc":"","name":"e.vframe"},{"type":"Boolean","desc":"是否派发过created事件","name":"e.fcc"}],"memberOf":"Vframe"},{"id":"m97","desc":" 子孙view修改时触发","name":"alter","params":[{"type":"Object","desc":"","name":"e"}],"memberOf":"Vframe"},{"id":"m98","desc":" 子孙view创建完成时触发","name":"created","params":[{"type":"Object","desc":"","name":"e"}],"memberOf":"Vframe"}],"methods":[{"id":"m85","desc":" 获取vframe节点","returns":"{Vframe} vframe对象","memberOf":"Vframe","name":"root","isStatic":true},{"id":"m86","desc":" 获取所有的vframe对象","returns":"{Object}","memberOf":"Vframe","name":"all","isStatic":true},{"id":"m87","desc":" 根据vframe的id获取vframe对象","params":[{"type":"String","desc":"vframe的id","name":"id"}],"returns":"{Vframe|undefined} vframe对象","memberOf":"Vframe","name":"get","isStatic":true},{"id":"m99","desc":" 加载对应的view","params":[{"type":"String","desc":"形如:app/views/home?type=1&page=2 这样的view路径","name":"viewPath"},{"type":"Object|Null","desc":"调用view的init方法时传递的参数","name":"viewInitParams"}],"memberOf":"Vframe","name":"mountView"},{"id":"m100","desc":" 销毁对应的view","memberOf":"Vframe","name":"unmountView"},{"id":"m101","desc":" 加载vframe","params":[{"type":"String","desc":"节点id","name":"id"},{"type":"String","desc":"view路径","name":"viewPath"},{"type":"Object","desc":"传递给view init方法的参数","name":"viewInitParams"}],"returns":"{Vframe} vframe对象","example":" //html\r\n &lt;div id=\"magix_vf_defer\"&gt;&lt;/div&gt;\r\n //js\r\n view.owner.mountVframe('magix_vf_defer','app/views/list',{page:2})\r\n //注意：动态向某个节点渲染view时，该节点无须是vframe标签","memberOf":"Vframe","name":"mountVframe"},{"id":"m102","desc":" 加载当前view下面的子view，因为view的持有对象是vframe，所以是加载vframes","params":[{"type":"HTMLElement|String","desc":"节点对象或id","name":"zoneId"},{"type":"Object","desc":"传递给view init方法的参数","name":"viewInitParams"}],"memberOf":"Vframe","name":"mountZone"},{"id":"m103","desc":" 销毁vframe","params":[{"type":"String","desc":"节点id","name":"[id]"}],"memberOf":"Vframe","name":"unmountVframe"},{"id":"m104","desc":" 销毁某个区域下面的所有子vframes","params":[{"type":"HTMLElement|String","desc":"节点对象或id","name":"[zoneId]"}],"memberOf":"Vframe","name":"unmountZone"},{"id":"m105","desc":" 获取父vframe","params":[{"type":"Integer","desc":"层级，默认1,取当前vframe的父级","name":"level"}],"returns":"{Vframe}","isOptional":true,"needModule":"linkage","memberOf":"Vframe","name":"parent"},{"id":"m106","desc":" 获取当前vframe的所有子vframe的id。返回数组中，vframe在数组中的位置并不固定","returns":"{Array[String]}","isOptional":true,"needModule":"linkage","memberOf":"Vframe","name":"children"},{"id":"m107","desc":" 调用view的方法","params":[{"type":"String","desc":"方法名","name":"name"},{"type":"Array","desc":"参数","name":"args"}],"returns":"{Object}","isOptional":true,"needModule":"linkage","memberOf":"Vframe","name":"invoke"},{"id":"m173","desc":" 绑定事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"example":"  var T=Magix.mix({},Event);\r\n  T.on('done',function(e){\r\n      alert(1);\r\n  });\r\n  T.on('done',function(e){\r\n      alert(2);\r\n      T.off('done',arguments.callee);\r\n  });\r\n  T.fire('done',{data:'test'});\r\n  T.fire('done',{data:'test2'});\r\n  //!!不需要insert,场景不大，目前发现的主要在Router的changed事件，比如外部监听这种情况下写在插件里可以提前绑定，因为插件先加载。","memberOf":"Event","name":"on","isStatic":true},{"id":"m174","desc":" 触发事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Object","desc":"事件对象","name":"data"},{"type":"Boolean","desc":"事件触发完成后是否移除这个事件的所有监听","name":"remove"},{"type":"Boolean","desc":"是否从后向前触发事件的监听列表","name":"lastToFirst"}],"memberOf":"Event","name":"fire","isStatic":true},{"id":"m175","desc":" 解除事件绑定","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"memberOf":"Event","name":"off","isStatic":true},{"id":"m176","desc":" 绑定事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"example":"  var T=Magix.mix({},Event);\r\n  T.on('done',function(e){\r\n      alert(1);\r\n  });\r\n  T.on('done',function(e){\r\n      alert(2);\r\n      T.off('done',arguments.callee);\r\n  });\r\n  T.fire('done',{data:'test'});\r\n  T.fire('done',{data:'test2'});\r\n  //!!不需要insert,场景不大，目前发现的主要在Router的changed事件，比如外部监听这种情况下写在插件里可以提前绑定，因为插件先加载。","memberOf":"Event","name":"on"},{"id":"m177","desc":" 触发事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Object","desc":"事件对象","name":"data"},{"type":"Boolean","desc":"事件触发完成后是否移除这个事件的所有监听","name":"remove"},{"type":"Boolean","desc":"是否从后向前触发事件的监听列表","name":"lastToFirst"}],"memberOf":"Event","name":"fire"},{"id":"m178","desc":" 解除事件绑定","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"memberOf":"Event","name":"off"}]},"View":{"id":"m17","desc":" View类","name":"View","isa":"CONSTRUCTOR","isClass":true,"inherits":[{"alias":"Event.on","as":"#on"},{"alias":"Event.fire","as":"#fire"},{"alias":"Event.off","as":"#off"}],"params":[{"type":"Object","desc":"创建view时，需要附加到view对象上的其它属性","name":"ops"}],"properties":[{"type":"String","desc":"当前view与页面vframe节点对应的id","name":"id","id":"m18"},{"type":"Vframe","desc":"拥有当前view的vframe对象","name":"owner","id":"m19"}],"example":" 关于事件:\r\n 示例：\r\n   html写法：\r\n   &lt;input type=\"button\" mx-click=\"test({id:100,name:'xinglie'})\" value=\"test\" /&gt;\r\n   &lt;a href=\"http://etao.com\" mx-click=\"test({com:'etao.com'})\"&gt;http://etao.com&lt;/a&gt;\r\n   view写法：\r\n     'test&lt;click&gt;':function(e){\r\n          e.preventDefault();\r\n          //e.current 处理事件的dom节点(即带有mx-click属性的节点)\r\n          //e.target 触发事件的dom节点(即鼠标点中的节点，在current里包含其它节点时，current与target有可能不一样)\r\n          //e.params  传递的参数\r\n          //e.params.com,e.params.id,e.params.name\r\n      },\r\n      'test&lt;mousedown&gt;':function(e){\r\n       }\r\n  //上述示例对test方法标注了click与mousedown事件，也可以合写成：\r\n  'test&lt;click,mousedown&gt;':function(e){\r\n      alert(e.type);//可通过type识别是哪种事件类型\r\n  }","methods":[{"id":"m110","desc":" 扩展View","params":[{"type":"Object","desc":"扩展到原型上的方法","name":"props"}],"example":" define('app/tview',function(require){\r\n     var Magix=require('magix');\r\n     Magix.View.merge({\r\n         ctor:function(){\r\n             this.$attr='test';\r\n         },\r\n         test:function(){\r\n             alert(this.$attr);\r\n         }\r\n     });\r\n });\r\n //加入Magix.start的exts中\r\n  Magix.start({\r\n      //...\r\n      exts:['app/tview']\r\n  });\r\n //这样完成后，所有的view对象都会有一个$attr属性和test方法\r\n //当前上述功能也可以用继承实现，但继承层次太多时，可以考虑使用扩展来消除多层次的继承","memberOf":"View","name":"merge","isStatic":true},{"id":"m111","desc":" 继承","params":[{"type":"Object","desc":"原型链上的方法或属性对象","name":"[props]"},{"type":"Object","desc":"静态对象或方法","name":"[statics]"}],"memberOf":"View","name":"extend","isStatic":true},{"id":"m127","desc":" 渲染view，供最终view开发者覆盖","memberOf":"View","name":"render"},{"id":"m128","desc":" 通知当前view即将开始进行html的更新","params":[{"type":"String","desc":"哪块区域需要更新，默认整个view","name":"[id]"}],"memberOf":"View","name":"beginUpdate"},{"id":"m129","desc":" 通知当前view结束html的更新","params":[{"type":"String","desc":"哪块区域结束更新，默认整个view","name":"[id]"}],"memberOf":"View","name":"endUpdate"},{"id":"m130","desc":" 包装异步回调","params":[{"type":"Function","desc":"异步回调的function","name":"fn"}],"returns":"{Function}","example":" render:function(){\r\n     setTimeout(this.wrapAsync(function(){\r\n         //codes\r\n     }),50000);\r\n }\r\n //为什么要包装一次？\r\n //Magix是单页应用，有可能异步回调执行时，当前view已经被销毁。比如上例中的setTimeout，50s后执行回调，如果你的回调中去操作了DOM，则会出错，为了避免这种情况的出现，可以调用view的wrapAsync包装一次。(该示例中最好的做法是在view销毁时清除setTimeout，但有时候你很难控制回调的执行，所以最好包装一次)\r\n //\r\n //","memberOf":"View","name":"wrapAsync"},{"id":"m131","desc":" 监视地址栏中的参数或path，有变动时，才调用当前view的render方法。通常情况下location有变化不会引起当前view的render被调用，所以你需要指定地址栏中哪些参数有变化时才引起render调用，使得view只关注与自已需要刷新有关的参数","params":[{"type":"Array|String","desc":"数组字符串","name":"params"},{"type":"Boolean","desc":"是否监视path","name":"isObservePath"}],"isOptional":true,"needModule":"router","example":" return View.extend({\r\n      init:function(){\r\n          this.observe('page,rows');//关注地址栏中的page rows2个参数的变化，当其中的任意一个改变时，才引起当前view的render被调用\r\n          this.observe(null,true);//关注path的变化\r\n          //也可以写成下面的形式\r\n          //this.observe('page,rows',true);\r\n      },\r\n      render:function(){\r\n          var loc=Magix.Router.parse();\r\n          console.log(loc);//获取地址解析出的对象\r\n          var diff=Magix.Router.diff();\r\n          console.log(diff);//获取当前地址与上一个地址差异对象\r\n      }\r\n });","memberOf":"View","name":"observe"},{"id":"m132","desc":" 让view帮你管理资源，强烈建议对组件等进行托管","params":[{"type":"String","desc":"资源标识key","name":"key"},{"type":"Object","desc":"要托管的资源","name":"res"},{"type":"Boolean","desc":"调用render方法时是否销毁托管的资源","name":"destroyWhenCalleRender"}],"returns":"{Object} 返回托管的资源","isOptional":true,"needModule":"resource","example":" View.extend({\r\n     ctor:function(){\r\n     },\r\n     render:function(){\r\n         var me=this;\r\n         var dropdown=new Dropdown();\r\n         me.capture('dropdown',dropdown,true);\r\n     }\r\n });","memberOf":"View","name":"capture"},{"id":"m133","desc":" 释放管理的资源","params":[{"type":"String","desc":"托管时的key","name":"key"},{"type":"Boolean","desc":"是否销毁资源","name":"destroy"}],"returns":"{Object} 返回托管的资源，无论是否销毁","isOptional":true,"needModule":"resource","memberOf":"View","name":"release"},{"id":"m134","desc":" 离开提示","params":[{"type":"String","desc":"提示消息","name":"msg"},{"type":"Function","desc":"是否提示的回调","name":"fun"}],"isOptional":true,"needModule":"tiprouter","memberOf":"View","name":"leaveTip"},{"id":"m135","desc":" 向子(孙)view公开数据","params":[{"type":"String","desc":"key","name":"key"},{"type":"Object","desc":"数据","name":"data"}],"isOptional":true,"needModule":"share","memberOf":"View","name":"share"},{"id":"m136","desc":" 获取祖先view上公开的数据","params":[{"type":"String","desc":"key","name":"key"}],"returns":"{Object}","isOptional":true,"needModule":"share","example":" //父view\r\n render:function(){\r\n     this.share('x',{a:20});\r\n }\r\n //子view\r\n render:function(){\r\n     var d=this.getShared('x');\r\n }","memberOf":"View","name":"getShared"},{"id":"m137","desc":" 设置view的html内容","params":[{"type":"String","desc":"更新节点的id","name":"id"},{"type":"Strig","desc":"html字符串","name":"html"}],"example":" render:function(){\r\n     this.setHTML(this.id,this.tmpl);//渲染界面，当界面复杂时，请考虑用其它方案进行更新\r\n }","memberOf":"View","name":"setHTML"},{"id":"m179","desc":" 绑定事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"example":"  var T=Magix.mix({},Event);\r\n  T.on('done',function(e){\r\n      alert(1);\r\n  });\r\n  T.on('done',function(e){\r\n      alert(2);\r\n      T.off('done',arguments.callee);\r\n  });\r\n  T.fire('done',{data:'test'});\r\n  T.fire('done',{data:'test2'});\r\n  //!!不需要insert,场景不大，目前发现的主要在Router的changed事件，比如外部监听这种情况下写在插件里可以提前绑定，因为插件先加载。","memberOf":"Event","name":"on"},{"id":"m180","desc":" 触发事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Object","desc":"事件对象","name":"data"},{"type":"Boolean","desc":"事件触发完成后是否移除这个事件的所有监听","name":"remove"},{"type":"Boolean","desc":"是否从后向前触发事件的监听列表","name":"lastToFirst"}],"memberOf":"Event","name":"fire"},{"id":"m181","desc":" 解除事件绑定","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"memberOf":"Event","name":"off"}],"events":[{"id":"m123","desc":" 当view调用setHTML刷新前触发","name":"prerender","params":[{"type":"Object","desc":"","name":"e"},{"type":"String","desc":"指示哪块区域要进行更新","name":"e.id"}],"memberOf":"View"},{"id":"m124","desc":" 每次调用setHTML更新view内容完成后触发","name":"rendered","params":[{"type":"Object","desc":"view 完成渲染后触发","name":"e"},{"type":"String","desc":"指示哪块区域完成的渲染","name":"e.id"}],"memberOf":"View"},{"id":"m125","desc":" view销毁时触发","name":"destroy","params":[{"type":"Object","desc":"","name":"e"}],"memberOf":"View"},{"id":"m126","desc":" 异步更新ui的方法(render)被调用前触发","name":"rendercall","params":[{"type":"Object","desc":"","name":"e"}],"memberOf":"View"}]},"Bag":{"id":"m20","desc":" Bag类","name":"Bag","isOptional":true,"needModule":"service","isa":"CONSTRUCTOR","isClass":true,"properties":[{"type":"String","desc":"bag唯一标识","name":"id","id":"m21"}],"methods":[{"id":"m140","desc":" 获取属性","params":[{"type":"String","desc":"要获取数据的key","name":"[key]"},{"type":"Object","desc":"当根据key取到的值为falsy时，使用默认值替代，防止代码出错","name":"[dValue]"}],"returns":"{Object}","example":" new Serice().one({\r\n     name:'Test'\r\n },function(error,bag){\r\n     var obj=bag.get();//获取所有数据\r\n     var list=bag.get('list',[]);//获取list数据，如果不存在list则使用空数组\r\n     var count=bag.get('data.info.count',0);//获取data下面info下count的值，您无须关心data下是否有info属性\r\n     console.log(list);\r\n });","memberOf":"Bag","name":"get"},{"id":"m141","desc":" 设置属性","params":[{"type":"String|Object","desc":"属性对象或属性key","name":"key"},{"type":"Object","desc":"属性值","name":"[val]"}],"memberOf":"Bag","name":"set"}]},"Service":{"id":"m23","desc":" 接口请求服务类","name":"Service","isa":"CONSTRUCTOR","isClass":true,"isOptional":true,"needModule":"service","inherits":[{"alias":"Event.on","as":"on"},{"alias":"Event.fire","as":"fire"},{"alias":"Event.off","as":"off"}],"example":" var S=Service.extend(function(bag,callback){\r\n     $.ajax({\r\n         url:bag.get('url'),\r\n         success:function(data){\r\n             callback(null,data);\r\n         },\r\n         error:function(msg){\r\n             callback(msg);\r\n         }\r\n     })\r\n });\r\n S.add({\r\n     name:'test',\r\n     url:'/test'\r\n });\r\n var s=new S();\r\n s.all('test',function(err,bag){\r\n     console.log(err,bag);\r\n });","methods":[{"id":"m26","lends":"Service","params":[{"type":"Function","desc":"接口服务同步数据方法","name":"sync"},{"type":"Integer","desc":"最大缓存数","name":"cacheMax"},{"type":"Integer","desc":"缓存缓冲区大小","name":"cacheBuffer"}],"returns":"{Function} 返回新的接口类","memberOf":"Service","name":"extend","isStatic":true},{"id":"m152","desc":" 获取attrs，所有请求完成回调done","params":[{"type":"Object|Array","desc":"获取attrs时的描述信息，如:{name:'Home',cacheKey:'key',urlParams:{a:'12'},formParams:{b:2}}","name":"attrs"},{"type":"Function","desc":"完成时的回调","name":"done"}],"returns":"{Service}","example":"new Service().all([{\r\nname:'Test1'\r\n},{\r\nname:'Test2'\r\n}],function(err,bag1,bag2){\r\nconsole.log(arguments);\r\n});","memberOf":"Service","name":"all"},{"id":"m153","desc":" 保存attrs，所有请求完成回调done","params":[{"type":"Object|Array","desc":"保存attrs时的描述信息，如:{name:'Home',urlParams:{a:'12'},formParams:{b:2}}","name":"attrs"},{"type":"Function","desc":"完成时的回调","name":"done"}],"returns":"{Service}","memberOf":"Service","name":"save"},{"id":"m154","desc":" 获取attrs，其中任意一个成功均立即回调，回调会被调用多次","params":[{"type":"Object|Array","desc":"获取attrs时的描述信息，如:{name:'Home',cacheKey:'key',urlParams:{a:'12'},formParams:{b:2}}","name":"attrs"},{"type":"Function","desc":"完成时的回调","name":"callback"}],"returns":"{Service}","example":"  //代码片断：\r\n  var s=new Service().one([\r\n      {name:'M1'},\r\n      {name:'M2'},\r\n      {name:'M3'}\r\n  ],function(err,bag){//m1,m2,m3，谁快先调用谁，且被调用三次\r\n      if(err){\r\n          alert(err.msg);\r\n      }else{\r\n          alert(bag.get('name'));\r\n      }\r\n  });","memberOf":"Service","name":"one"},{"id":"m155","desc":" 前一个all,one或save任务做完后的下一个任务","params":[{"type":"Function","desc":"当前面的任务完成后调用该回调","name":"callback"}],"returns":"{Service}","example":"  var r=new Service().all([\r\n      {name:'M1'},\r\n      {name:'M2'}\r\n  ],function(err,bag1,bag2){\r\n      r.dequeue(['args1','args2']);\r\n  });\r\n  r.enqueue(function(args1,args2){\r\n      alert([args1,args2]);\r\n  });","memberOf":"Service","name":"enqueue"},{"id":"m156","desc":" 做下一个任务","params":[{"type":"Array","desc":"传递的参数","name":"preArgs"}],"example":" var r=new Service();\r\n r.all('Name',function(e,bag){\r\n     r.dequeue([e,bag]);\r\n });\r\n r.enqueue(function(e,result){//result为m\r\n     r.all('NextName',function(e,bag){\r\n         r.dequeue([e,bag]);\r\n     });\r\n });\r\n r.enqueue(function(e,bag){//m===queue m;\r\n     console.log(e,bag);\r\n     r.dequeue([e,bag]);\r\n });\r\n r.enqueue(function(e,bag){\r\n     console.log(e,bag);\r\n });\r\n //当出错时，e为出错的信息","memberOf":"Service","name":"dequeue"},{"id":"m157","desc":" 销毁当前请求，不可以继续发起新请求，而且不再调用相应的回调","memberOf":"Service","name":"destroy"},{"id":"m164","desc":" 添加元信息","params":[{"type":"Object","desc":"信息属性","name":"attrs"}],"memberOf":"Service","name":"add","isStatic":true},{"id":"m165","desc":" 创建bag对象","params":[{"type":"Object","desc":"bag描述信息对象","name":"attrs"}],"returns":"{Bag}","memberOf":"Service","name":"create","isStatic":true},{"id":"m166","desc":" 获取bag注册时的元信息","params":[{"type":"String|Object","desc":"名称","name":"attrs"}],"returns":"{Object}","memberOf":"Service","name":"meta","isStatic":true},{"id":"m167","desc":" 获取bag对象，优先从缓存中获取","params":[{"type":"Object","desc":"bag描述信息对象","name":"attrs"},{"type":"Boolean","desc":"是否是创建新的Bag对象，如果否，则尝试从缓存中获取","name":"createNew"}],"returns":"{Object}","memberOf":"Service","name":"get","isStatic":true},{"id":"m168","desc":" 根据name清除缓存的attrs","params":[{"type":"String|Array","desc":"字符串或数组","name":"names"}],"memberOf":"Service","name":"clear","isStatic":true},{"id":"m169","desc":" 从缓存中获取bag对象","params":[{"type":"Object","desc":"","name":"attrs"}],"returns":"{Bag}","memberOf":"Service","name":"cached","isStatic":true},{"id":"m182","desc":" 绑定事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"example":"  var T=Magix.mix({},Event);\r\n  T.on('done',function(e){\r\n      alert(1);\r\n  });\r\n  T.on('done',function(e){\r\n      alert(2);\r\n      T.off('done',arguments.callee);\r\n  });\r\n  T.fire('done',{data:'test'});\r\n  T.fire('done',{data:'test2'});\r\n  //!!不需要insert,场景不大，目前发现的主要在Router的changed事件，比如外部监听这种情况下写在插件里可以提前绑定，因为插件先加载。","memberOf":"Event","name":"on","isStatic":true},{"id":"m183","desc":" 触发事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Object","desc":"事件对象","name":"data"},{"type":"Boolean","desc":"事件触发完成后是否移除这个事件的所有监听","name":"remove"},{"type":"Boolean","desc":"是否从后向前触发事件的监听列表","name":"lastToFirst"}],"memberOf":"Event","name":"fire","isStatic":true},{"id":"m184","desc":" 解除事件绑定","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"memberOf":"Event","name":"off","isStatic":true}],"events":[{"id":"m148","desc":" 当Service发送请求前触发","name":"begin","isStatic":true,"params":[{"type":"Object","desc":"事件对象","name":"e"},{"type":"Bag","desc":"bag对象","name":"e.bag"}],"memberOf":"Service"},{"id":"m149","desc":" 当Service结束请求时触发(成功或失败均触发)","name":"end","isStatic":true,"params":[{"type":"Object","desc":"事件对象","name":"e"},{"type":"Bag","desc":"bag对象","name":"e.bag"},{"type":"String","desc":"当请求出错时，msg是出错的消息","name":"e.msg"}],"memberOf":"Service"},{"id":"m150","desc":" 当Service发送请求失败时触发","name":"fail","isStatic":true,"params":[{"type":"Object","desc":"事件对象","name":"e"},{"type":"Bag","desc":"bag对象","name":"e.bag"},{"type":"String","desc":"当请求出错时，msg是出错的消息","name":"e.msg"}],"memberOf":"Service"},{"id":"m151","desc":" 当Service发送请求成功时触发","name":"done","isStatic":true,"params":[{"type":"Object","desc":"事件对象","name":"e"},{"type":"Bag","desc":"bag对象","name":"e.bag"}],"memberOf":"Service"}]},"Base":{"id":"m25","desc":" 组件基类","name":"Base","isa":"CONSTRUCTOR","isClass":true,"inherits":[{"alias":"Event.fire","as":"#fire"},{"alias":"Event.on","as":"#on"},{"alias":"Event.off","as":"#off"}],"isOptional":true,"needModule":"base","methods":[{"id":"m185","desc":" 触发事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Object","desc":"事件对象","name":"data"},{"type":"Boolean","desc":"事件触发完成后是否移除这个事件的所有监听","name":"remove"},{"type":"Boolean","desc":"是否从后向前触发事件的监听列表","name":"lastToFirst"}],"memberOf":"Event","name":"fire"},{"id":"m186","desc":" 绑定事件","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"example":"  var T=Magix.mix({},Event);\r\n  T.on('done',function(e){\r\n      alert(1);\r\n  });\r\n  T.on('done',function(e){\r\n      alert(2);\r\n      T.off('done',arguments.callee);\r\n  });\r\n  T.fire('done',{data:'test'});\r\n  T.fire('done',{data:'test2'});\r\n  //!!不需要insert,场景不大，目前发现的主要在Router的changed事件，比如外部监听这种情况下写在插件里可以提前绑定，因为插件先加载。","memberOf":"Event","name":"on"},{"id":"m187","desc":" 解除事件绑定","params":[{"type":"String","desc":"事件名称","name":"name"},{"type":"Function","desc":"事件回调","name":"fn"}],"memberOf":"Event","name":"off"}]}}})