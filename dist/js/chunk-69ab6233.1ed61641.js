(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69ab6233"],{"10b6":function(t,a,e){"use strict";var s=e("2cb8"),c=e.n(s);c.a},1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.switchPage(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchPage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.switchPage(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},c=[],n={data:function(){return{}},props:["pages"],methods:{switchPage:function(t){this.$emit("switchedpage",t)}}},i=n,r=e("2877"),o=Object(r["a"])(i,s,c,!1,null,null,null);a["a"]=o.exports},"2cb8":function(t,a,e){},8418:function(t,a,e){"use strict";var s=e("c04e"),c=e("9bf2"),n=e("5c6c");t.exports=function(t,a,e){var i=s(a);i in t?c.f(t,i,n(0,e)):t[i]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),c=e("d039"),n=e("e8b5"),i=e("861d"),r=e("7b0b"),o=e("50c4"),l=e("8418"),u=e("65f0"),p=e("1dde"),d=e("b622"),f=e("2d00"),h=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",_=f>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=p("concat"),b=function(t){if(!i(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},w=!_||!m;s({target:"Array",proto:!0,forced:w},{concat:function(t){var a,e,s,c,n,i=r(this),p=u(i,0),d=0;for(a=-1,s=arguments.length;a<s;a++)if(n=-1===a?i:arguments[a],b(n)){if(c=o(n.length),d+c>g)throw TypeError(v);for(e=0;e<c;e++,d++)e in n&&l(p,d,n[e])}else{if(d>=g)throw TypeError(v);l(p,d++,n)}return p.length=d,p}})},d2e2:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content mt-3"},[e("div",{staticClass:"container"},[e("table",{staticClass:"table mt-4 text-left"},[t._m(0),e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(t._s(a.created.datetime))]),e("td",t._l(a.products,(function(a){return e("div",{key:a.product.title},[e("span",[t._v(t._s(a.product.title)+" 數量 : "+t._s(a.quantity)+t._s(a.product.unit))])])})),0),e("td",[t._v(t._s(a.payment))]),e("td",{staticClass:"text-right"},[t._v("$"+t._s(a.amount))]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:a.id},on:{change:function(e){return t.setOrderPayment(a)}}}),a.paid?e("label",{staticClass:"custom-control-label text-success",attrs:{for:a.id}},[t._v("已付款")]):e("label",{staticClass:"custom-control-label text-muted",attrs:{for:a.id}},[t._v("尚未付款")])])])])})),0)]),e("pagination",{attrs:{pages:t.pagination},on:{switchedpage:t.getOrders}})],1)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"bg-primary text-white"},[e("tr",[e("th",{staticStyle:{width:"160px"},attrs:{scope:"col"}},[t._v("下單時間")]),e("th",{attrs:{scope:"col"}},[t._v("購買款項")]),e("th",{staticStyle:{width:"120px"},attrs:{scope:"col"}},[t._v("付款方式")]),e("th",{attrs:{scope:"col"}},[t._v("應付金額")]),e("th",{staticStyle:{width:"150px"},attrs:{scope:"col"}},[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),i={components:{pagination:n["a"]},data:function(){return{orders:[],pagination:{},isPaid:""}},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/orders");this.$http.get(e,{params:{page:a}}).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination})).catch((function(t){console.log("error:",t)}))},setOrderPayment:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/orders/").concat(t.id,"/paid");t.paid&&(e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e).then((function(t){a.getOrders(a.pagination.current_page)})).catch((function(t){console.log("error:",t)}))}},created:function(){this.getOrders()}},r=i,o=(e("10b6"),e("2877")),l=Object(o["a"])(r,s,c,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-69ab6233.1ed61641.js.map