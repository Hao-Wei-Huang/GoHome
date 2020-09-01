(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0bad7a2"],{2355:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content text-left"},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("div",{staticClass:"container"},[i("h2",{staticClass:"text-center my-3"},[t._v("我的購物車")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},t._l(t.cart,(function(a,e){return i("div",{key:a.product.title,staticClass:"card mb-3 bg-shadow"},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"bg-md-image",style:"background-image:url("+a.product.imageUrl[0]+")"})]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"card-body d-flex flex-column justify-content-center h-100"},[i("h5",{staticClass:"card-title"},[t._v(t._s(a.product.title))]),i("div",{staticClass:"input-group mb-3 align-items-center"},[t._v(" $"+t._s(a.product.price)+" x "),i("div",{staticClass:"input-group-prepend ml-2"},[i("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return t.reduceCount(e)}}},[t._v("-")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],staticClass:"form-control text-center hotel-room-count",attrs:{type:"text"},domProps:{value:a.quantity},on:{input:function(i){i.target.composing||t.$set(a,"quantity",i.target.value)}}}),i("div",{staticClass:"input-group-append mr-2"},[i("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return t.addCount(e)}}},[t._v("+")])]),t._v(" 間 ")])])]),i("div",{staticClass:"col-md-2 d-flex align-items-center"},[i("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return t.removeCartHotel(e)}}},[t._v("刪除")])])])])})),0),i("div",{staticClass:"col-4"},[i("div",{staticClass:"cart-money-list bg-shadow p-3"},[i("h3",[t._v("訂單金額")]),i("hr"),i("table",{staticClass:"w-100"},[i("tbody",t._l(t.cart,(function(a){return i("tr",{key:a.product.id},[i("td",{staticClass:"py-2"},[t._v(t._s(a.product.title))]),i("td",{staticClass:"py-2"},[t._v(t._s(a.quantity)+"間")]),i("td",{staticClass:"text-right py-2"},[t._v("$"+t._s(t._f("moneyFilter")(a.product.price)))])])})),0)]),i("router-link",{staticClass:"btn btn-danger mt-3 w-100",attrs:{to:"/customer"}},[t._v("下一步")])],1)])])])],1)},c=[],n=(i("99af"),i("a434"),{data:function(){return{cart:[],isLoading:!1}},methods:{getCartData:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data})).catch((function(t){console.log("error:",t)}))},removeCartHotel:function(t){var a=this,i="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping/").concat(this.cart[t].product.id),e={product:this.cart[t].product.id};this.isLoading=!0,this.$http.delete(i,e).then((function(i){a.cart.splice(t,1),a.isLoading=!1})).catch((function(t){console.log("error:",t),a.isLoading=!1}))},addCount:function(t){var a=this,i="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping"),e=this.cart[t].quantity+1,c={product:this.cart[t].product.id,quantity:e};this.isLoading=!0,this.$http.patch(i,c).then((function(i){a.$set(a.cart,t,i.data.data),a.isLoading=!1})).catch((function(t){console.log("error:",t),a.isLoading=!1}))},reduceCount:function(t){var a=this,i="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping"),e=this.cart[t].quantity-1;if(this.isLoading=!0,0===e)this.removeCartHotel(t);else{var c={product:this.cart[t].product.id,quantity:e};this.$http.patch(i,c).then((function(i){a.$set(a.cart,t,i.data.data),a.isLoading=!1})).catch((function(t){console.log("error:",t),a.isLoading=!1}))}}},created:function(){this.getCartData()}}),o=n,s=(i("ed1e"),i("2877")),r=Object(s["a"])(o,e,c,!1,null,null,null);a["default"]=r.exports},6971:function(t,a,i){},8418:function(t,a,i){"use strict";var e=i("c04e"),c=i("9bf2"),n=i("5c6c");t.exports=function(t,a,i){var o=e(a);o in t?c.f(t,o,n(0,i)):t[o]=i}},"99af":function(t,a,i){"use strict";var e=i("23e7"),c=i("d039"),n=i("e8b5"),o=i("861d"),s=i("7b0b"),r=i("50c4"),d=i("8418"),u=i("65f0"),l=i("1dde"),p=i("b622"),f=i("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=f>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),C=l("concat"),b=function(t){if(!o(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},y=!m||!C;e({target:"Array",proto:!0,forced:y},{concat:function(t){var a,i,e,c,n,o=s(this),l=u(o,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?o:arguments[a],b(n)){if(c=r(n.length),p+c>v)throw TypeError(g);for(i=0;i<c;i++,p++)i in n&&d(l,p,n[i])}else{if(p>=v)throw TypeError(g);d(l,p++,n)}return l.length=p,l}})},a434:function(t,a,i){"use strict";var e=i("23e7"),c=i("23cb"),n=i("a691"),o=i("50c4"),s=i("7b0b"),r=i("65f0"),d=i("8418"),u=i("1dde"),l=i("ae40"),p=u("splice"),f=l("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,a){var i,e,u,l,p,f,C=s(this),b=o(C.length),y=c(t,b),x=arguments.length;if(0===x?i=e=0:1===x?(i=0,e=b-y):(i=x-2,e=v(h(n(a),0),b-y)),b+i-e>g)throw TypeError(m);for(u=r(C,e),l=0;l<e;l++)p=y+l,p in C&&d(u,l,C[p]);if(u.length=e,i<e){for(l=y;l<b-e;l++)p=l+e,f=l+i,p in C?C[f]=C[p]:delete C[f];for(l=b;l>b-e+i;l--)delete C[l-1]}else if(i>e)for(l=b-e;l>y;l--)p=l+e-1,f=l+i-1,p in C?C[f]=C[p]:delete C[f];for(l=0;l<i;l++)C[l+y]=arguments[l+2];return C.length=b-e+i,u}})},ed1e:function(t,a,i){"use strict";var e=i("6971"),c=i.n(e);c.a}}]);
//# sourceMappingURL=chunk-d0bad7a2.01f844d6.js.map