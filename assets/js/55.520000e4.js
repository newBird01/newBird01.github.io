(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{485:function(e,a,t){"use strict";t.r(a);var o=t(26),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"http缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[e._v("#")]),e._v(" HTTP缓存")]),e._v(" "),t("h2",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[e._v("#")]),e._v(" 强缓存")]),e._v(" "),t("h3",{attrs:{id:"expires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" Expires")]),e._v(" "),t("p",[e._v("Expires 是 HTTP/1 的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效")]),e._v(" "),t("p",[e._v("服务端设置 "),t("code",[e._v("Expires: Wed, 22 Oct 2018 08:41:00 GMT")]),e._v("，")]),e._v(" "),t("p",[e._v("不会向服务器发送请求，直接从缓存中（from disk cache或from memory cache。）读取资源  200的状态码")]),e._v(" "),t("h3",{attrs:{id:"catch-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#catch-control"}},[e._v("#")]),e._v(" catch-control")]),e._v(" "),t("p",[e._v("Cache-Control 是HTTP1.1的产物，")]),e._v(" "),t("p",[e._v("服务端设置 "),t("code",[e._v("Cache-Control:max-age=300;public")]),e._v(" 客户端和代理服务器都可缓存")]),e._v(" "),t("p",[e._v("服务端设置 "),t("code",[e._v("Cache-Control:max-age=300;private")]),e._v("只能被客户端缓存")]),e._v(" "),t("p",[e._v("服务端设置 "),t("code",[e._v("Cache-Control:no-store")]),e._v(" 不缓存")]),e._v(" "),t("p",[e._v("服务端设置 "),t("code",[e._v("Cache-Control:max-age=0;no-catch")]),e._v(" 表示客户端可以缓存资源，每次使用缓存资源前都必须重新验证其有效性。这意味着每次都会发起 HTTP 请求，但当缓存内容仍有效时可以跳过 HTTP 响应体的下载。")]),e._v(" "),t("p",[e._v("服务端设置 "),t("code",[e._v("Cache-Control:max-age=300;public")])]),e._v(" "),t("p",[e._v("不会向服务器发送请求，直接从缓存中（from disk cache或from memory cache。）读取资源  200的状态码")]),e._v(" "),t("h2",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[e._v("#")]),e._v(" 协商缓存")]),e._v(" "),t("h3",{attrs:{id:"last-modified和if-modified-since"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified和if-modified-since"}},[e._v("#")]),e._v(" last-modified和If-Modified-Since")]),e._v(" "),t("p",[e._v("客户端第一次请求 服务端，服务端设置响应头"),t("code",[e._v("Last-Modified: Fri, 22 Jul 2016 01:47:00 GMT")])]),e._v(" "),t("p",[e._v("客户端下次请求服务端，请求头携带 "),t("code",[e._v("If-Modified-Since")]),e._v("。 服务端会根据 If-Modified-Since 中的值与服务器中这个资源的最后修改时间对比，如果没有变化，返回304和空的响应体，直接从缓存读取，如果If-Modified-Since的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和200")]),e._v(" "),t("p",[e._v("Last-Modified 存在一些弊端")]),e._v(" "),t("ul",[t("li",[e._v("如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源")]),e._v(" "),t("li",[e._v("因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源")])]),e._v(" "),t("h3",{attrs:{id:"etag和if-none-match"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etag和if-none-match"}},[e._v("#")]),e._v(" Etag和If-None-Match")]),e._v(" "),t("p",[e._v("客户端第一次请求 服务端，服务端设置响应头"),t("code",[e._v("Etag:ewerewrew")])]),e._v(" "),t("p",[e._v("浏览器在下一次加载资源向服务器发送请求时，会将上一次返回的Etag值放到request header里的If-None-Match里，服务器只需要比较客户端传来的If-None-Match跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。")]),e._v(" "),t("p",[e._v("Etag要优于Last-Modified。")])])}),[],!1,null,null,null);a.default=r.exports}}]);