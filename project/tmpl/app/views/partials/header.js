/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var Router = Magix.Router;
Magix.applyStyle('@header.css');
var CSSNames = 'names@header.css';
var Menus = [{
    url: '/home/index',
    text: '首页'
}, {
    url: '/coms/index',
    text: '组件',
    subMenus: [{
        url: '/coms/dropdown',
        text: '下拉框',
        icon: '&#xe606;'
    }, {
        url: '/coms/dialog',
        text: '弹出框',
        icon: '&#xe600;'
    }, {
        url: '/coms/menu',
        text: '菜单',
        icon: '&#xe60a;'
    }, {
        url: '/coms/tree',
        text: '树',
        icon: '&#xe60a;'
    }, {
        url: '/coms/calendar',
        text: '日历',
        icon: '&#xe60a;'
    }, {
        url: '/coms/popover',
        text: '提示信息',
        icon: '&#xe60a;'
    }, {
        url: '/coms/pagination',
        text: '分页',
        icon: '&#xe60a;'
    }, {
        url: '/coms/table',
        text: '表格',
        icon: '&#xe600;'
    }, {
        url: '/coms/colorpicker',
        text: '颜色选择器',
        icon: '&#xe600;'
    }, {
        url: '/coms/clipboard',
        text: '复制到剪切板',
        icon: '&#xe600;'
    }]
}, {
    url: '/demos/index',
    text: '经验',
    subMenus: [{
        url: '/demos/api-cache',
        text: '接口-缓存',
        icon: '&#xe600;'
    }, {
        url: '/demos/api-monitor',
        text: '接口-监视调用',
        icon: '&#xe600;'
    }, {
        url: '/demos/form-addition',
        text: '表单-动态增加',
        icon: '&#xe600;'
    }, {
        url: '/demos/form-validation',
        text: '表单-验证',
        icon: '&#xe600;'
    }, {
        url: '/demos/view-subs',
        text: 'view拆分',
        icon: '&#xe600;'
    }, {
        url: '/demos/table-settings',
        text: '表格-字段设置',
        icon: '&#xe600;'
    }, {
        url: '/demos/autocomplete',
        text: '自动完成',
        icon: '&#xe600;'
    }, {
        url: '/demos/sdk',
        text: 'SDK下载',
        icon: '&#xe600;'
    }, {
        url: '/demos/editable',
        text: '就地编辑',
        icon: '&#xe600;'
    }, {
        url: '/demos/tags',
        text: 'tags标签',
        icon: '&#xe600;'
    }, {
        url: '/demos/more-links',
        text: '更多操作',
        icon: '&#xe600;'
    }]
}];
var MenusMap = Magix.toMap(Menus, 'url');
module.exports = Magix.View.extend({
    tmpl: '@header.html',
    ctor: function() {
        var me = this;
        me.observe(null, true);
    },
    render: function() {
        var me = this;
        me.data.set({
            viewId: me.id
        }).digest();
        me.mountMenus();
    },
    mountMenus: function() {
        var loc = Router.parse();
        var href = loc.path.substring(0, loc.path.indexOf('/', 1));
        href += '/index';
        var me = this;
        var vf = Magix.Vframe.get('sidebar_' + this.id);
        if (href != me.$lastHref) {
            me.$lastHref = href;
            $('.' + CSSNames['top-nav'] + ' a').removeClass(CSSNames.on);
            $('#' + this.id + ' a[href="#!' + href + '"]').addClass(CSSNames.on);
            if (vf) {
                var info = MenusMap[href];
                vf.invoke('updateMenu', [info ? info.subMenus : null, loc.path]);
            }
        } else if (vf) {
            vf.invoke('updateUrl', [loc.path]);
        }
    }
});