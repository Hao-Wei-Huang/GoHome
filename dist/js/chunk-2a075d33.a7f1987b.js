(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a075d33"],{"28e0":function(t,e,s){},"36f6":function(t,e,s){"use strict";var a=s("28e0"),r=s.n(a);r.a},8418:function(t,e,s){"use strict";var a=s("c04e"),r=s("9bf2"),o=s("5c6c");t.exports=function(t,e,s){var n=a(e);n in t?r.f(t,n,o(0,s)):t[n]=s}},"99af":function(t,e,s){"use strict";var a=s("23e7"),r=s("d039"),o=s("e8b5"),n=s("861d"),i=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),m=s("b622"),f=s("2d00"),v=m("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",_=f>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=u("concat"),h=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},y=!_||!b;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,s,a,r,o,n=i(this),u=d(n,0),m=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?n:arguments[e],h(o)){if(r=c(o.length),m+r>p)throw TypeError(g);for(s=0;s<r;s++,m++)s in o&&l(u,m,o[s])}else{if(m>=p)throw TypeError(g);l(u,m++,o)}return u.length=m,u}})},bbf8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content text-left"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"text-center my-3"},[t._v("訂購人資訊")]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-5"},[s("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[s("form",{on:{submit:function(e){return e.preventDefault(),t.sumbitForm(e)}}},[s("div",{staticClass:"form-group"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"customerOrderName"}},[t._v("收件人姓名*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.costomerInfo.name,expression:"costomerInfo.name"}],staticClass:"form-control",class:r,attrs:{type:"text",id:"customerOrderName ",name:"姓名"},domProps:{value:t.costomerInfo.name},on:{input:function(e){e.target.composing||t.$set(t.costomerInfo,"name",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group "},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"customerOrderEmail "}},[t._v("Email address*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.costomerInfo.email,expression:"costomerInfo.email"}],staticClass:"form-control ",class:r,attrs:{type:"tel ",id:"customerOrderEmail ",placeholder:" ",name:"email"},domProps:{value:t.costomerInfo.email},on:{input:function(e){e.target.composing||t.$set(t.costomerInfo,"email",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group "},[s("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"customerOrderTel "}},[t._v("電話*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.costomerInfo.tel,expression:"costomerInfo.tel"}],staticClass:"form-control ",class:r,attrs:{type:"number ",id:"customerOrderTel ",placeholder:" ",name:"電話"},domProps:{value:t.costomerInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.costomerInfo,"tel",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group "},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"customerOrderAddress "}},[t._v("地址*")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.costomerInfo.address,expression:"costomerInfo.address"}],staticClass:"form-control ",class:r,attrs:{type:"text",id:"customerOrderAddress ",placeholder:" ",name:"地址"},domProps:{value:t.costomerInfo.address},on:{input:function(e){e.target.composing||t.$set(t.costomerInfo,"address",e.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group "},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("label",{attrs:{for:"customerOrderPayment"}},[t._v("購買方式")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.costomerInfo.payment,expression:"costomerInfo.payment"}],staticClass:"form-control ",class:r,attrs:{id:"customerOrderPayment ",name:"購買方式"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.costomerInfo,"payment",e.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",disabled:"disabled"}},[t._v("請選擇付款方式")]),s("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),s("option",{attrs:{value:"ATM"}},[t._v("ATM")]),s("option",{attrs:{value:"Credit"}},[t._v("Credit")]),s("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),s("option",{attrs:{value:"GooglePay"}},[t._v("GooglePay")])]),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(a[0]))])]}}],null,!0)})],1),s("div",{staticClass:"form-group "},[s("label",{attrs:{for:"customerOrderMessage "}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.costomerInfo.message,expression:"costomerInfo.message"}],staticClass:"form-control ",attrs:{id:"customerOrderMessage ",rows:"3 "},domProps:{value:t.costomerInfo.message},on:{input:function(e){e.target.composing||t.$set(t.costomerInfo,"message",e.target.value)}}})]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary px-5",attrs:{type:"submit",disabled:a}},[t._v("確認送出")])])])]}}])})],1),s("div",{staticClass:"col-4 "},[s("div",{staticClass:"cart-money-list shadow p-3 "},[s("h3",[t._v("訂單金額")]),s("hr"),s("table",{staticClass:"w-100 "},[s("tbody",t._l(t.cart,(function(e){return s("tr",{key:e.product.id},[s("td",{staticClass:"py-2 "},[t._v(t._s(e.product.title))]),s("td",{staticClass:"py-2 "},[t._v(t._s(e.quantity)+"間")]),s("td",{staticClass:"text-right py-2 "},[t._v("$"+t._s(t._f("moneyFilter")(e.product.price)))])])})),0)])])])])])])},r=[],o=(s("99af"),{data:function(){return{cart:[],costomerInfo:{name:"",email:"",tel:"",address:"",payment:"",message:""}}},methods:{getCartData:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping");this.$http.get(e).then((function(e){t.cart=e.data.data})).catch((function(t){console.log("error:",t)}))},sumbitForm:function(){var t="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/orders");this.$http.post(t,this.costomerInfo).then((function(t){console.log("success",t)})).catch((function(t){console.log("error:",t)}))}},created:function(){this.getCartData()}}),n=o,i=(s("36f6"),s("2877")),c=Object(i["a"])(n,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2a075d33.a7f1987b.js.map