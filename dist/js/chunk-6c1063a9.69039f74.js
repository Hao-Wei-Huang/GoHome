(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c1063a9"],{"81b1":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("section",{staticClass:"mt-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-9"},[s("div",{staticClass:"product-list"},t._l(t.hotels,(function(a){return s("div",{key:a.title,staticClass:"row mb-3 bg-shadow"},[s("div",{staticClass:"col-3 bg-lg-image cursor",style:"background-image: url("+a.imageUrl[0]+");}",on:{click:function(s){return t.goHotel(a)}}}),s("div",{staticClass:"col-9"},[s("div",{staticClass:"d-flex flex-column py-3 text-left"},[s("h5",[t._v(" "+t._s(a.title)+" "),t._l(Number(a.options.hotelRating),(function(t){return s("font-awesome-icon",{key:t,staticClass:"h6 text-warning",attrs:{icon:["fas","star"]}})}))],2),s("p",{staticClass:"mt-2 flex-grow-1 ellipsis"},[t._v(t._s(a.content))]),s("div",{staticClass:"text-right "},[s("h5",{staticClass:"hotel-origin-price"},[t._v("$"+t._s(t._f("moneyFilter")(a.origin_price)))]),s("h4",{staticClass:"hotel-price text-secondary mb-2"},[t._v("每晚平均房價:$ "+t._s(t._f("moneyFilter")(a.price)))]),s("div",{staticClass:"d-flex align-items-center"},[s("span",{staticClass:"badge badge-secondary mr-auto"},[t._v(t._s(a.category))]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(s){return t.goHotel(a)}}},[t._v("現在預定")])])])])])])})),0)])])])])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-3"},[s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[s("a",{attrs:{href:"#"}},[t._v("公寓")])]),s("li",{staticClass:"list-group-item"},[s("a",{attrs:{href:"#"}},[t._v("度假住宿")])]),s("li",{staticClass:"list-group-item"},[s("a",{attrs:{href:"#"}},[t._v("私人別墅")])]),s("li",{staticClass:"list-group-item"},[s("a",{attrs:{href:"#"}},[t._v("山中小屋")])])])])}],c=(s("99af"),{data:function(){return{hotels:[],cart:[],isLoading:!1}},methods:{getAllHotelsData:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/products");this.isLoading=!0,this.$http.get(a).then((function(a){t.hotels=a.data.data,t.isLoading=!1})).catch((function(a){console.log("error:",a),t.isLoading=!1}))},getCartData:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data})).catch((function(t){console.log("error:",t)}))},goHotel:function(t){this.$router.push("/product/".concat(t.id))}},created:function(){this.getAllHotelsData(),this.getCartData()}}),o=c,n=(s("b60a"),s("2877")),r=Object(n["a"])(o,i,e,!1,null,null,null);a["default"]=r.exports},"99af":function(t,a,s){"use strict";var i=s("23e7"),e=s("d039"),c=s("e8b5"),o=s("861d"),n=s("7b0b"),r=s("50c4"),l=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),h=s("2d00"),g=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",C=h>=51||!e((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=d("concat"),m=function(t){if(!o(t))return!1;var a=t[g];return void 0!==a?!!a:c(t)},_=!C||!b;i({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,i,e,c,o=n(this),d=u(o,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(c=-1===a?o:arguments[a],m(c)){if(e=r(c.length),f+e>p)throw TypeError(v);for(s=0;s<e;s++,f++)s in c&&l(d,f,c[s])}else{if(f>=p)throw TypeError(v);l(d,f++,c)}return d.length=f,d}})},b60a:function(t,a,s){"use strict";var i=s("bdc6"),e=s.n(i);e.a},bdc6:function(t,a,s){}}]);
//# sourceMappingURL=chunk-6c1063a9.69039f74.js.map