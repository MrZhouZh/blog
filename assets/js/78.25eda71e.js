(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{452:function(v,_,e){"use strict";e.r(_);var o=e(2),t=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"http-相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-相关"}},[v._v("#")]),v._v(" HTTP 相关")]),v._v(" "),_("h3",{attrs:{id:"http-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[v._v("#")]),v._v(" HTTP 缓存")]),v._v(" "),_("p",[v._v("强缓存和协商缓存是两种缓存控制方式.")]),v._v(" "),_("p",[_("strong",[v._v("强缓存")]),v._v("：通过设置 "),_("code",[v._v("Cache-Control")]),v._v(" 和 "),_("code",[v._v("Expires")]),v._v(" 响应头来控制强缓存。"),_("code",[v._v("Cache-Control")]),v._v(" 是 "),_("code",[v._v("HTTP/1.1")]),v._v(" 新提供的字段，取代了 "),_("code",[v._v("Expires")]),v._v("，用来控制页面缓存。它是一个复合字段，常用的有以下几个指令：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("private")]),v._v("：表示只能作为私有缓存，不能在用户之间共享。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("public")]),v._v("：表示可以在用户之间共享，适用于静态资源。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("max-age")]),v._v("：表示从缓存开始后，过了多少秒后会失效。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("no-store")]),v._v("：表示不允许缓存该请求或者响应的任何内容。")])])]),v._v(" "),_("p",[_("code",[v._v("Expires")]),v._v(" 字段是一个绝对时间，是过期的日期和时间，如果本地时间大于 "),_("code",[v._v("Expires")]),v._v(" 时间就说明缓存已经过期。它已经被 "),_("code",[v._v("Cache-Control")]),v._v(" 替代。")]),v._v(" "),_("p",[_("strong",[v._v("协商缓存")]),v._v("：协商缓存是指浏览器每次在请求资源时，都会向服务器发送请求，根据服务器返回的响应判断是否要从缓存中读取资源，从而避免了强缓存的缺陷。常用的控制方法有以下两种：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("Last-Modified / If-Modified-Since")]),v._v("：服务器在响应头中加上Last-Moidified字段表示该资源在服务器上的最后修改时间。当客户端再次请求时，在请求头 "),_("code",[v._v("If-Modified-Since")]),v._v(" 字段带上上次服务器响应的Last-Modified时间，如果服务器判断没有修改，就会返回 "),_("em",[v._v("304 Not Modified")]),v._v(" 状态码。使用场景通常是对于静态资源且目标资源文件大小小于1MB的资源，否则存在重复读写的问题。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("ETag / If-None-Match")]),v._v("： "),_("code",[v._v("ETag")]),v._v(" 是服务器响应头中表示资源版本的字段，它是一个字符串")])])]),v._v(" "),_("p",[_("strong",[v._v("启发式缓存")]),v._v(": 如果响应中未显示 "),_("code",[v._v("Expires")]),v._v(", "),_("code",[v._v("Cache-Control:max-age")]),v._v(" 或"),_("code",[v._v("Cache-Control:s-maxage")]),v._v(", 并且响应中不包含其他有关缓存的限制, 缓存可以使用启发式方法计算新鲜度寿命. 通常会根据响应头中的2个时间字段 "),_("code",[v._v("Date")]),v._v(" 减去 "),_("code",[v._v("Last-Modified")]),v._v(" 值的 "),_("strong",[v._v("10%")]),v._v(" 作为缓存时间")])])}),[],!1,null,null,null);_.default=t.exports}}]);