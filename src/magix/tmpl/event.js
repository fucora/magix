/**
 * 根据名称生成事件数组的key
 * @param  {Strig} name 事件名称
 * @return {String} 包装后的key
 */
var genKey=function(name){
    return '~'+name;
};

var safeExec=Magix.safeExec;
/**
 * 多播事件对象
 * @name Event
 * @namespace
 */
var Event={
    /**
     * @lends Event
     */
    /**
     * 触发事件
     * @param {String} name 事件名称
     * @param {Object} data 事件对象
     * @param {Boolean} remove 事件触发完成后是否移除这个事件的所有监听
     * @param {Boolean} lastToFirst 是否从后向前触发事件的监听列表
     */
    fire:function(name,data,remove,lastToFirst){
        var key=genKey(name),
            me=this,
            list=me[key];
        if(list){
            if(!data)data={};
            if(!data.type)data.type=name;
            var end=list.length,len=end-1,idx,fn;
            while(end--){
                idx=lastToFirst?end:len-end;
                fn=list[idx];
                if(fn.d){
                    list.splice(idx,1);
                    len--;
                }
                safeExec(fn,data,me);
            }
        }
        if(remove){
            delete me[key];
        }
    },
    /**
     * 绑定事件
     * @param  {String}   name 事件名称
     * @param  {Function} fn   事件回调
     * @param {Interger|Boolean} insertOrRemove 事件监听插入的位置或触发后是否移除监听
     */
    on:function(name,fn,insertOrRemove){
        var key=genKey(name);
        if(!this[key])this[key]=[];
        if(Magix.isNumeric(insertOrRemove)){
            this[key].splice(insertOrRemove,0,fn);
        }else{
            fn.d=insertOrRemove;
            this[key].push(fn);
        }
    },
    /**
     * 解除事件绑定
     * @param  {String}   name 事件名称
     * @param  {Function} fn   事件回调
     */
    un:function(name,fn){
        if(!Magix.isArray(name)){
            name=[name];
        }
        for(var x=0,u=name.length;x<u;x++){
            var key=genKey(name[x]),
                list=this[key];
            if(list){
                if(fn){
                    for(var i=0,j=list.length;i<j;i++){
                        if(list[i]==fn){
                            list.splice(i,1);
                            break;
                        }
                    }
                }else{
                    delete this[key];
                }
            }
        }
    }
};