(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-774d28a2"],{"03cf":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"finished-order-banner d-flex justify-content-center align-items-center bg-cover"},[n("div",{staticClass:"bg-light-primary p-3 p-md-5 text-white"},[n("h2",{staticClass:"h3 h2-md"},[t._v("完成訂房")]),n("p",{staticClass:"h5 h4-md mt-2 line-height-l"},[n("font-awesome-icon",{staticClass:"text-success mr-2",attrs:{icon:["fas","check-circle"]}}),t._v("已付款，感謝您的訂房!"),n("br"),t._v(" 期待您的入住 ")],1),n("button",{staticClass:"btn btn-outline-secondary mt-3",attrs:{type:"button"},on:{click:function(e){t.goHotels(t.search)}}},[t._v("再去逛逛")])])])},a=[],c={data:function(){return{search:{destination:"台北市",range:{start:new Date,end:new Date((new Date).getTime()+864e5)}}}},methods:{goHotels:function(t){var e=JSON.parse(JSON.stringify(t));e.range.start=t.range.start.getTime(),e.range.end=t.range.end.getTime(),this.$router.push({path:"/products",query:{search:e}})}}},r=c,i=(n("fc3f"),n("2877")),o=Object(i["a"])(r,s,a,!1,null,null,null);e["default"]=o.exports},c1cd:function(t,e,n){},fc3f:function(t,e,n){"use strict";var s=n("c1cd"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-774d28a2.b4ff825e.js.map