(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fcfcc11"],{"81b1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("section",{staticClass:"mt-3 mt-md-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-lg-3 text-left px-0 px-md-3 sticky-top"},[a("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-co-primary p-0 flex-md-column align-items-md-stretch"},[a("h4",{staticClass:"p-2 text-white"},[t._v("找旅館")]),a("button",{staticClass:"navbar-toggler p-2 mr-2",attrs:{type:"button","data-toggle":"collapse","data-target":"#seachedData","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("font-awesome-icon",{staticClass:"text-white",attrs:{icon:["fas","search"]}})],1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"seachedData"}},[a("form",{staticClass:"bg-info p-3 w-100",on:{submit:function(e){return e.preventDefault(),t.searchRoom(e)}}},[a("div",{staticClass:"form-row flex-column"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"destination"}},[t._v("目的地")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tempSearch.destination,expression:"tempSearch.destination"}],staticClass:"form-control mt-1",attrs:{id:"destination",name:"縣市"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.tempSearch,"destination",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("請選擇")]),a("option",{attrs:{value:"台北市"}},[t._v("台北市")]),a("option",{attrs:{value:"台中市"}},[t._v("台中市")]),a("option",{attrs:{value:"嘉義縣"}},[t._v("嘉義縣")]),a("option",{attrs:{value:"台南市"}},[t._v("台南市")]),a("option",{attrs:{value:"高雄市"}},[t._v("高雄市")]),a("option",{attrs:{value:"屏東縣"}},[t._v("屏東縣")])])]),a("date-picker",{attrs:{mode:"range",color:"teal",popover:{placement:"top",visibility:"click"},"min-date":new Date},model:{value:t.tempSearch.range,callback:function(e){t.$set(t.tempSearch,"range",e)},expression:"tempSearch.range"}},[a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"checkinDate"}},[t._v("入住時間")]),a("div",{staticClass:"position-relative mt-1"},[a("font-awesome-icon",{staticClass:"text-secondary mr-1 calendar-icon",attrs:{icon:["far","calendar-alt"]}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkinDate,expression:"checkinDate"}],staticClass:"form-control pl-4 bg-white",attrs:{type:"text",id:"checkinDate","aria-describedby":"pickerDate",readonly:""},domProps:{value:t.checkinDate},on:{input:function(e){e.target.composing||(t.checkinDate=e.target.value)}}})],1)])])]),a("date-picker",{attrs:{mode:"range",color:"teal",popover:{placement:"top",visibility:"click"},"min-date":new Date},model:{value:t.tempSearch.range,callback:function(e){t.$set(t.tempSearch,"range",e)},expression:"tempSearch.range"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"checkoutDate"}},[t._v("退房時間")]),a("div",{staticClass:"position-relative mt-1"},[a("font-awesome-icon",{staticClass:"text-secondary mr-1 calendar-icon",attrs:{icon:["far","calendar-alt"]}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutDate,expression:"checkoutDate"}],staticClass:"form-control pl-4 bg-white",attrs:{type:"text",id:"checkoutDate","aria-describedby":"pickerDate",readonly:""},domProps:{value:t.checkoutDate},on:{input:function(e){e.target.composing||(t.checkoutDate=e.target.value)}}})],1)])]),a("button",{staticClass:"btn btn-primary w-100"},[t._v("搜尋")])],1)])])])]),a("div",{staticClass:"col-md-8 col-lg-9"},[a("div",{staticClass:"product-list"},[t._l(t.hotels,(function(e){return[e.options.address.city===t.search.destination?a("div",{key:e.title,staticClass:"row mb-3 bg-shadow"},[a("div",{staticClass:"col-3 bg-lg-image cursor",style:"background-image: url("+e.imageUrl[0]+");}",on:{click:function(a){return t.goHotel(e)}}}),a("div",{staticClass:"col-9"},[a("div",{staticClass:"d-flex flex-column py-3 text-left"},[a("h5",[t._v(" "+t._s(e.title)+" "),t._l(Number(e.options.hotelRating),(function(t){return a("font-awesome-icon",{key:t,staticClass:"h6 text-warning",attrs:{icon:["fas","star"]}})}))],2),a("div",{staticClass:"mt-2 text-primary"},[a("font-awesome-icon",{staticClass:"text-secondary mr-1",attrs:{icon:["fas","map-marker-alt"]}}),t._v(t._s(e.options.address.city)+t._s(e.options.address.road))],1),a("p",{staticClass:"mt-2 flex-grow-1 ellipsis"},[t._v(t._s(e.content))]),a("div",{staticClass:"text-right "},[a("h5",{staticClass:"hotel-origin-price text-danger"},[t._v("$"+t._s(t._f("moneyFilter")(e.origin_price)))]),a("h4",{staticClass:"hotel-price text-primary mb-2"},[t._v("每晚最低房價 : $"+t._s(t._f("moneyFilter")(e.price)))]),a("div",{staticClass:"d-flex align-items-center"},[a("span",{staticClass:"badge badge-secondary mr-auto"},[t._v(t._s(e.category))]),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(a){return t.goHotel(e)}}},[t._v("現在預定")])])])])])]):t._e()]}))],2)])])])])],1)},i=[],n=(a("99af"),a("ac1f"),a("841c"),a("404b")),r=a.n(n),o={components:{"date-picker":r.a},data:function(){return{hotels:[],cart:[],isLoading:!1,search:{destination:"台北市",range:{start:new Date,end:new Date((new Date).getTime()+864e5)}},tempSearch:{destination:"台北市",range:{start:new Date,end:new Date((new Date).getTime()+864e5)}}}},methods:{getAllHotelsData:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/products");this.isLoading=!0,this.$http.get(e).then((function(e){t.hotels=e.data.data,t.isLoading=!1})).catch((function(e){console.log("error:",e),t.isLoading=!1}))},getCartData:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/ec/shopping");this.$http.get(e).then((function(e){t.cart=e.data.data})).catch((function(t){console.log("error:",t)}))},goHotel:function(t){var e=JSON.parse(JSON.stringify(this.search));e.range.start=this.search.range.start.getTime(),e.range.end=this.search.range.end.getTime(),this.$router.push({path:"/product/".concat(t.id),query:{search:e}})},formateDate:function(t){var e=["日","一","二","三","四","五","六"],a=t.getMonth()+1,s=t.getDate(),i=t.getDay();return a<10&&(a="0"+a),s<10&&(s="0"+s),"".concat(t.getFullYear(),"-").concat(a,"-").concat(s," 星期").concat(e[i])},searchRoom:function(){this.search.destination=this.tempSearch.destination,this.search.range.start=this.tempSearch.range.start,this.search.range.end=this.tempSearch.range.end},getSearchDate:function(){this.$route.query.search&&(this.search.destination=this.$route.query.search.destination,this.search.range.start=new Date(this.$route.query.search.range.start),this.search.range.end=new Date(this.$route.query.search.range.end),this.tempSearch.destination=this.$route.query.search.destination,this.tempSearch.range.start=new Date(this.$route.query.search.range.start),this.tempSearch.range.end=new Date(this.$route.query.search.range.end))}},created:function(){this.getAllHotelsData(),this.getCartData(),this.getSearchDate()},computed:{checkinDate:function(){return this.formateDate(this.tempSearch.range.start)},checkoutDate:function(){return this.formateDate(this.tempSearch.range.end)}}},c=o,l=(a("b60a"),a("2877")),d=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports},b60a:function(t,e,a){"use strict";var s=a("bdc6"),i=a.n(s);i.a},bdc6:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0fcfcc11.e1e04943.js.map