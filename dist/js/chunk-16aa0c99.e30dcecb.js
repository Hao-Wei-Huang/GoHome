(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16aa0c99"],{"0323":function(t,a,e){"use strict";function n(t,a,e){return t|a<<5|e<<10}function o(t){var a=31,e=992,n=31744,o={};return o.doubleRoomCount=t&a,o.tripleRoomCount=(t&e)>>5,o.quadrupleRoomCount=(t&n)>>10,o.total=o.doubleRoomCount+o.tripleRoomCount+o.quadrupleRoomCount,o}e.d(a,"b",(function(){return n})),e.d(a,"a",(function(){return o}))},"5b62":function(t,a,e){t.exports=e.p+"img/logo.2f0e5769.png"},"755e":function(t,a,e){"use strict";var n=e("fd60"),o=e.n(n);o.a},"933b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary"},[n("div",{staticClass:"container  align-items-md-end "},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{attrs:{src:e("5b62"),alt:"",width:"100"}})]),n("cart-menu",{staticClass:"ml-auto mr-3 d-block d-md-none"}),t._m(0),n("div",{staticClass:"collapse navbar-collapse flex-grow-0",attrs:{id:"navbarNav"},on:{click:function(a){return t.closeNav("#navbarNav")}}},[n("ul",{staticClass:"navbar-nav nav-menu"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link text-white h5",attrs:{to:"/"}},[t._v("首頁")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link text-white h5",attrs:{to:"/products"}},[t._v("去訂房")])],1),n("li",{staticClass:"nav-item d-md-block d-none"},[n("cart-menu")],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link text-white h5",attrs:{to:"/admin"}},[t._v("後台管理")])],1)])])],1)]),n("router-view"),t._m(1)],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"bg-primary p-4 mt-md-5 mt-3 text-white"},[e("div",{staticClass:"container d-flex justify-content-center flex-column flex-md-row align-items-center"},[e("div",[t._v("本平台提供訂房之服務")]),e("ul",{staticClass:"text-left"},[e("li",[t._v("聯絡我們 : "),e("a",{staticClass:"text-white",attrs:{href:"tel:+886-2-24341341"}},[t._v("02-2434-1341")])]),e("li",[t._v("地址 : "),e("a",{staticClass:"text-white",attrs:{href:"https://goo.gl/maps/SVxJXsa8UjMXaauN7",target:"_blank"}},[t._v("台北市大安區員林路一段8號")])])])])])}],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("div",{staticClass:"text-white dropdown-toggle position-relative p-2 cursor",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("font-awesome-icon",{staticClass:"h5",attrs:{icon:["fas","shopping-cart"]}}),e("span",{staticClass:"cart-count text-center"},[t._v(t._s(t.cart.length))])],1),e("div",{staticClass:"dropdown-menu p-2 cart-dropdown",staticStyle:{"z-index":"1030"},attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("h5",{staticClass:"text-primary"},[t._v("已預訂的房間")]),e("table",{staticClass:"w-100"},[e("tbody",t._l(t.cartHotelsData,(function(a){return e("tr",{key:a.title},[e("td",{staticClass:"cart-ellipsis py-2"},[t._v(t._s(a.title))]),e("td",{staticClass:"py-2",staticStyle:{width:"40px"}},[t._v(t._s(a.roomCount.total)+t._s(a.unit))]),e("td",{staticClass:"text-right py-2"},[t._v("$"+t._s(t._f("moneyFilter")(a.roomCount.doubleRoomCount*a.price+a.roomCount.tripleRoomCount*a.options.roomPrice.tripleRoomPrice+a.roomCount.quadrupleRoomCount*a.options.roomPrice.quadrupleRoomPrice)))])])})),0)]),0===t.cartHotelsData.length?e("div",[t._v(" 購物車無旅館，請多逛逛哦~ ")]):t._e(),0!=t.cartHotelsData.length?e("router-link",{staticClass:"btn btn-primary w-100 mt-2 text-white",attrs:{to:"/cart"}},[t._v("結帳去")]):t._e()],1)])},s=[],i=(e("99af"),e("4160"),e("159b"),e("0323")),c={data:function(){return{cart:[],cartHotelsData:[]}},methods:{getCartData:function(){var t=this;this.cartHotelsData=[];var a="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.cart.forEach((function(a,e){var n="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/product/").concat(a.product.id);t.$http.get(n).then((function(e){e.data.data.roomCount=Object(i["a"])(a.quantity),t.cartHotelsData.push(e.data.data)})).catch((function(t){console.log("error:",t)}))}))})).catch((function(t){console.log("error:",t)}))}},created:function(){var t=this;this.getCartData(),this.$bus.$on("updateCart",(function(){t.getCartData()}))}},l=c,u=(e("755e"),e("2877")),d=Object(u["a"])(l,r,s,!1,null,null,null),p=d.exports,v={components:{"cart-menu":p},methods:{closeNav:function(t){document.querySelector(t).classList.remove("show")}}},f=v,m=(e("9a65"),Object(u["a"])(f,n,o,!1,null,null,null));a["default"]=m.exports},"99af":function(t,a,e){"use strict";var n=e("23e7"),o=e("d039"),r=e("e8b5"),s=e("861d"),i=e("7b0b"),c=e("50c4"),l=e("8418"),u=e("65f0"),d=e("1dde"),p=e("b622"),v=e("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",C=v>=51||!o((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=d("concat"),g=function(t){if(!s(t))return!1;var a=t[f];return void 0!==a?!!a:r(t)},_=!C||!b;n({target:"Array",proto:!0,forced:_},{concat:function(t){var a,e,n,o,r,s=i(this),d=u(s,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(r=-1===a?s:arguments[a],g(r)){if(o=c(r.length),p+o>m)throw TypeError(h);for(e=0;e<o;e++,p++)e in r&&l(d,p,r[e])}else{if(p>=m)throw TypeError(h);l(d,p++,r)}return d.length=p,d}})},"9a65":function(t,a,e){"use strict";var n=e("d372"),o=e.n(n);o.a},d372:function(t,a,e){},fd60:function(t,a,e){}}]);
//# sourceMappingURL=chunk-16aa0c99.e30dcecb.js.map