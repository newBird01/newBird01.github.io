(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{535:function(e,a,r){"use strict";r.r(a);var s=r(26),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"express-koa-egg-对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#express-koa-egg-对比"}},[e._v("#")]),e._v(" Express Koa  Egg 对比")]),e._v(" "),r("h2",{attrs:{id:"express"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#express"}},[e._v("#")]),e._v(" Express")]),e._v(" "),r("p",[e._v("开箱即用，封装了 路由  静态服务  bodyparse cookie-parser multiparty express-session")]),e._v(" "),r("p",[e._v("回调函数作为处理")]),e._v(" "),r("h2",{attrs:{id:"koa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#koa"}},[e._v("#")]),e._v(" Koa")]),e._v(" "),r("p",[e._v("没有任何中间件，更轻量，只是对请求，响应，实例和上下文做了封装")]),e._v(" "),r("p",[e._v("执行async await")]),e._v(" "),r("p",[e._v("只是对请求响应上下文和实例做了封装")]),e._v(" "),r("p",[e._v("上下文对 request 和response做了代理处理")]),e._v(" "),r("p",[e._v("没有捆绑中间件。")]),e._v(" "),r("p",[e._v("洋葱模型作为中间件处理方式")]),e._v(" "),r("p",[e._v("app.on('error', err => {\nlog.error('server error', err)\n});")]),e._v(" "),r("h2",{attrs:{id:"egg"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#egg"}},[e._v("#")]),e._v(" Egg")]),e._v(" "),r("p",[e._v("基于koa，统一的目录结构，支持koa的中间件和")]),e._v(" "),r("p",[e._v("统一的路由，中间件，扩展，定时任务")]),e._v(" "),r("p",[e._v("load() {\n// app > plugin > core\nthis.loadApplicationExtend();\nthis.loadRequestExtend();\nthis.loadResponseExtend();\nthis.loadContextExtend();\nthis.loadHelperExtend();")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("this.loadCustomLoader();\n\n// app > plugin\nthis.loadCustomApp();\n// app > plugin\nthis.loadService();\n// app > plugin > core\nthis.loadMiddleware();\n// app\nthis.loadController();\n// app\nthis.loadRouter(); // Dependent on controllers\n")])])]),r("p",[e._v("}")]),e._v(" "),r("p",[e._v("at module.exports (/Users/zepeng/外包/videoServe/app/middleware/apiAuth.js:2:11)\nat AppWorkerLoader.loadMiddleware (/Users/zepeng/外包/videoServe/node_modules/egg-core/lib/loader/mixin/middleware.js:75:12)\nat AppWorkerLoader.load (/Users/zepeng/外包/videoServe/node_modules/egg/lib/loader/app_worker_loader.js:39:10)\nat new Application (/Users/zepeng/外包/videoServe/node_modules/egg/lib/application.js:66:19)\nat Object."),r("anonymous",[e._v(" (/Users/zepeng/外包/videoServe/node_modules/egg-cluster/lib/app_worker.js:21:13)")])],1)])}),[],!1,null,null,null);a.default=o.exports}}]);