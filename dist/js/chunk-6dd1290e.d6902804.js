(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dd1290e"],{"0323":function(t,e,s){"use strict";function r(t,e,s){return t|e<<5|s<<10}function o(t){var e=31,s=992,r=31744,o={};return o.doubleRoomCount=t&e,o.tripleRoomCount=(t&s)>>5,o.quadrupleRoomCount=(t&r)>>10,o}s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return o}))},"7e8a":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"text-center my-3"},[t._v("確認訂單並付款")]),s("div",{staticClass:"row flex-column align-items-center"},[s("div",{staticClass:"col-6 text-left"},[s("section",{staticClass:"bg-shadow p-3"},[s("h3",{staticClass:"mb-3"},[t._v("旅館訂單資訊")]),s("table",{staticClass:"w-100 h5"},[s("tbody",[s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3",staticStyle:{width:"180px"}},[t._v("訂單編號")]),s("td",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.order.id))])]),s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3"},[t._v("訂單成立時間")]),s("td",[t._v(t._s(t.order.created.datetime))])]),s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3"},[t._v("付款狀態")]),s("td",[t.order.paid?s("span",{staticClass:"text-success"},[t._v("已付款")]):s("span",{staticClass:"text-muted"},[t._v("未付款")])])]),s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3"},[t._v("旅館項目")]),s("td",t._l(t.order.products,(function(e){return s("div",{key:e.product.title},[t._v(" "+t._s(e.product.title)+" : "+t._s(t.computedRoomCount(e.quantity))+t._s(e.product.unit)+" ")])})),0)]),s("tr",[s("th",{staticClass:"py-3"},[t._v("總計:")]),s("td",{staticClass:"text-right h4"},[t._v("TWD "),s("span",{staticClass:"text-success"},[t._v(t._s(t._f("moneyFilter")(t.amount)))])])])])]),t.isCheckout?s("router-link",{staticClass:"btn btn-success w-100 mt-3",attrs:{to:"/products"}},[t._v("繼續逛逛")]):s("button",{staticClass:"btn btn-danger w-100 mt-3",attrs:{type:"button"},on:{click:t.checkout}},[t._v("前往前帳")])],1)]),s("div",{staticClass:"col-6 text-left"},[s("section",{staticClass:"p-3"},[s("h3",{staticClass:"mb-3"},[t._v("顧客資訊")]),s("table",{staticClass:"w-100 h5"},[s("tbody",[s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3",staticStyle:{width:"180px"}},[t._v("姓名")]),s("td",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.order.user.name))])]),s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3"},[t._v("信箱帳號")]),s("td",[t._v(t._s(t.order.user.email))])]),s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3"},[t._v("電話")]),s("td",[t._v(t._s(t.order.user.tel))])]),s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3"},[t._v("付款方式")]),s("td",[t._v(t._s(t.order.payment))])]),s("tr",{staticClass:"border-top border-muted"},[s("th",{staticClass:"py-3"},[t._v("留言")]),s("td",[t._v(t._s(t.order.message))])])])])])])])])])},o=[],a=(s("99af"),s("0323")),c={data:function(){return{order:{user:{},created:{}},orderId:"",amount:"",isCheckout:!1}},methods:{getOrderId:function(){this.orderId=this.$route.params.orderId,this.amount=this.$route.params.amount},getOrder:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/orders/").concat(this.orderId);this.$http.get(e).then((function(e){t.order=e.data.data})).catch((function(t){console.log("error:",t)}))},computedRoomCount:function(t){var e=Object(a["a"])(t);return e.doubleRoomCount+e.tripleRoomCount+e.quadrupleRoomCount},checkout:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/orders/").concat(this.orderId,"/paying");this.$http.post(e).then((function(e){t.getOrder(),t.isCheckout=!0})).catch((function(t){console.log("error:",t)}))}},created:function(){this.getOrderId(),this.getOrder()}},i=c,d=s("2877"),n=Object(d["a"])(i,r,o,!1,null,null,null);e["default"]=n.exports},"99af":function(t,e,s){"use strict";var r=s("23e7"),o=s("d039"),a=s("e8b5"),c=s("861d"),i=s("7b0b"),d=s("50c4"),n=s("8418"),u=s("65f0"),l=s("1dde"),p=s("b622"),h=s("2d00"),b=p("isConcatSpreadable"),C=9007199254740991,f="Maximum allowed index exceeded",v=h>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=l("concat"),_=function(t){if(!c(t))return!1;var e=t[b];return void 0!==e?!!e:a(t)},y=!v||!m;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,s,r,o,a,c=i(this),l=u(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?c:arguments[e],_(a)){if(o=d(a.length),p+o>C)throw TypeError(f);for(s=0;s<o;s++,p++)s in a&&n(l,p,a[s])}else{if(p>=C)throw TypeError(f);n(l,p++,a)}return l.length=p,l}})}}]);
//# sourceMappingURL=chunk-6dd1290e.d6902804.js.map