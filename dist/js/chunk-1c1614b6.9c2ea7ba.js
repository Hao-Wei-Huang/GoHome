(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c1614b6"],{1799:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{attrs:{"aria-label":"Page navigation example"}},[i("ul",{staticClass:"pagination"},[i("li",{staticClass:"page-item",class:{disabled:1===e.pages.current_page}},[i("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(t){return t.preventDefault(),e.switchPage(e.pages.current_page-1)}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]),e._l(e.pages.total_pages,(function(t){return i("li",{key:t,staticClass:"page-item",class:{active:t===e.pages.current_page}},[i("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),e.switchPage(t)}}},[e._v(e._s(t))])])})),i("li",{staticClass:"page-item",class:{disabled:e.pages.current_page===e.pages.total_pages}},[i("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(t){return t.preventDefault(),e.switchPage(e.pages.current_page+1)}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])])],2)])])},a=[],s={data:function(){return{}},props:["pages"],methods:{switchPage:function(e){this.$emit("switchedpage",e)}}},l=s,r=i("2877"),d=Object(r["a"])(l,o,a,!1,null,null,null);t["a"]=d.exports},"61bc":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content mt-3"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-right"},[i("button",{staticClass:"btn btn-primary",on:{click:e.createHotelData}},[i("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fas","plus"]}}),e._v("新增產品")],1)]),i("table",{staticClass:"table mt-4 hotel-table"},[e._m(0),i("tbody",e._l(e.hotels,(function(t,o){return i("tr",{key:t.title},[i("th",{attrs:{scope:"row"}},[e._v(e._s(t.category))]),i("td",[e._v(e._s(t.title))]),i("td",{staticClass:"text-right"},[e._v(e._s(t.origin_price))]),i("td",{staticClass:"text-right"},[e._v(e._s(t.price))]),i("td",{staticClass:"text-right"},[e._v(" "+e._s(t.options.availableRoomCount)+" ")]),t.enabled?i("td",{key:t.title,staticClass:"text-center",staticStyle:{"font-size":"1.3rem"}},[i("font-awesome-icon",{staticClass:"text-success",attrs:{icon:["fas","check"]}})],1):i("td",{staticClass:"text-center",staticStyle:{"font-size":"1.3rem"}},[i("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","times"]}})],1),i("td",{staticClass:"text-left"},e._l(Number(t.options.hotelRating),(function(e){return i("font-awesome-icon",{key:e,staticClass:"h6 text-warning",attrs:{icon:["fas","star"]}})})),1),i("td",[i("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(t){return e.editHotelData(o)}}},[i("font-awesome-icon",{attrs:{icon:["fas","edit"]}})],1),i("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(t){return e.removeHotelData(o)}}},[i("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)])])})),0)]),i("pagination",{attrs:{pages:e.pagination},on:{switchedpage:e.getHotelData}})],1),i("backend-modal",{on:{comfirmmodifiedhotel:e.comfirmModifiedHotel}})],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",{staticClass:"bg-primary text-white"},[i("tr",[i("th",{staticStyle:{width:"100px"},attrs:{scope:"col"}},[e._v("分類")]),i("th",{attrs:{scope:"col"}},[e._v("產品名稱")]),i("th",{staticStyle:{width:"120px"},attrs:{scope:"col"}},[e._v("原價")]),i("th",{staticStyle:{width:"120px"},attrs:{scope:"col"}},[e._v("售價")]),i("th",{staticStyle:{width:"100px"},attrs:{scope:"col"}},[e._v("空房數")]),i("th",{attrs:{scope:"col",width:"100px"}},[e._v("是否啟用")]),i("th",{attrs:{scope:"col",width:"150px"}},[e._v("評價")]),i("th",{staticStyle:{width:"130px"},attrs:{scope:"col"}},[e._v("編輯")])])])}],s=(i("99af"),i("1799")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"modal fade text-left",attrs:{id:"modifiedHotelModal",tabindex:"-1",role:"dialog","aria-labelledby":"modifiedHotelModal","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-lg"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header bg-info text-white"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v(e._s(e.modalTitle))]),e._m(0)]),i("div",{staticClass:"modal-body"},[i("div",{staticClass:"container-fluid"},[i("validation-observer",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.invalid;return[i("form",[i("div",{staticClass:"form-row"},[i("div",{staticClass:"col-5"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"modifiedHotelModalFile"}},[e._v("上傳照片")]),i("input",{staticClass:"form-control-file",attrs:{type:"file",id:"modifiedHotelModalFile"},on:{change:e.uploadFile}})]),i("div",{staticClass:"form-group"},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.imageUrl,expression:"imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"modifiedHotelModalImgUrl",name:"圖片網址"},domProps:{value:e.imageUrl},on:{input:function(t){t.target.composing||(e.imageUrl=t.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-danger rounded-right",attrs:{type:"button",disabled:""==e.imageUrl},on:{click:e.removeImage}},[e._v("刪除")])])])]),e._l(e.modifiedHotel.imageUrl,(function(t){return i("a",{key:t,attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),e.showImage(t)}}},[i("img",{staticClass:"w-25 m-2",attrs:{src:t,alt:"飯店圖片"}})])}))],2),i("div",{staticClass:"col-7"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelName"}},[e._v("飯店名稱")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.title,expression:"modifiedHotel.title"}],staticClass:"form-control",class:a,attrs:{type:"text",id:"modifiedHotelModalHotelName",name:"飯店名稱"},domProps:{value:e.modifiedHotel.title},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel,"title",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.enabled,expression:"modifiedHotel.enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"modifiedHotelModalIsLaunch",name:"啟用"},domProps:{checked:Array.isArray(e.modifiedHotel.enabled)?e._i(e.modifiedHotel.enabled,null)>-1:e.modifiedHotel.enabled},on:{change:function(t){var i=e.modifiedHotel.enabled,o=t.target,a=!!o.checked;if(Array.isArray(i)){var s=null,l=e._i(i,s);o.checked?l<0&&e.$set(e.modifiedHotel,"enabled",i.concat([s])):l>-1&&e.$set(e.modifiedHotel,"enabled",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.modifiedHotel,"enabled",a)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"modifiedHotelModalIsLaunch"}},[e._v("是否啟用")])])]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-row"},[i("div",{staticClass:"form-group col-4"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelAddressCity"}},[e._v("縣市")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.address.city,expression:"modifiedHotel.options.address.city"}],staticClass:"form-control",class:a,attrs:{id:"modifiedHotelModalHotelAddressCity",name:"縣市"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.modifiedHotel.options.address,"city",t.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[e._v("請選擇")]),i("option",{attrs:{value:"台北市"}},[e._v("台北市")]),i("option",{attrs:{value:"桃園市"}},[e._v("桃園市")]),i("option",{attrs:{value:"台中市"}},[e._v("台中市")]),i("option",{attrs:{value:"嘉義縣"}},[e._v("嘉義縣")]),i("option",{attrs:{value:"台南市"}},[e._v("台南市")]),i("option",{attrs:{value:"高雄市"}},[e._v("高雄市")]),i("option",{attrs:{value:"屏東縣"}},[e._v("屏東縣")])]),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1),i("div",{staticClass:"form-group col-8"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelAddressRoad"}},[e._v("地址")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.address.road,expression:"modifiedHotel.options.address.road"}],staticClass:"form-control",class:a,attrs:{type:"text",id:"modifiedHotelModalHotelAddressRoad",name:"地址"},domProps:{value:e.modifiedHotel.options.address.road},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options.address,"road",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)])]),i("div",{staticClass:"col-12"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelAddressUrl"}},[e._v("gooogle map url")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.address.googleMapUrl,expression:"modifiedHotel.options.address.googleMapUrl"}],staticClass:"form-control",class:a,attrs:{type:"text",id:"modifiedHotelModalHotelAddressUrl",name:"gooogle map url"},domProps:{value:e.modifiedHotel.options.address.googleMapUrl},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options.address,"googleMapUrl",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelCategory"}},[e._v("分類")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.category,expression:"modifiedHotel.category"}],staticClass:"form-control",class:a,attrs:{type:"text",id:"modifiedHotelModalHotelCategory",name:"分類"},domProps:{value:e.modifiedHotel.category},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel,"category",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelUnit"}},[e._v("單位")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.unit,expression:"modifiedHotel.unit"}],staticClass:"form-control",class:a,attrs:{type:"text",id:"modifiedHotelModalHotelUnit",name:"單位"},domProps:{value:e.modifiedHotel.unit},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel,"unit",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelOriginPrice"}},[e._v("雙人房原價")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.modifiedHotel.origin_price,expression:"modifiedHotel.origin_price",modifiers:{number:!0}}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalHotelOriginPrice",name:"原價"},domProps:{value:e.modifiedHotel.origin_price},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel,"origin_price",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelPrice"}},[e._v("雙人房售價")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.modifiedHotel.price,expression:"modifiedHotel.price",modifiers:{number:!0}}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalHotelPrice",name:"售價"},domProps:{value:e.modifiedHotel.price},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel,"price",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelTripleRoomOriginPrice"}},[e._v("三人房原價")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.modifiedHotel.options.roomPrice.tripleRoomOriginPrice,expression:"modifiedHotel.options.roomPrice.tripleRoomOriginPrice",modifiers:{number:!0}}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalHotelTripleRoomOriginPrice",name:"原價"},domProps:{value:e.modifiedHotel.options.roomPrice.tripleRoomOriginPrice},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options.roomPrice,"tripleRoomOriginPrice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelTripleRoomPrice"}},[e._v("三人房售價")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.modifiedHotel.options.roomPrice.tripleRoomPrice,expression:"modifiedHotel.options.roomPrice.tripleRoomPrice",modifiers:{number:!0}}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalHotelTripleRoomPrice",name:"售價"},domProps:{value:e.modifiedHotel.options.roomPrice.tripleRoomPrice},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options.roomPrice,"tripleRoomPrice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelQuadrupleRoomOriginPrice"}},[e._v("四人房原價")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.modifiedHotel.options.roomPrice.quadrupleRoomOriginPrice,expression:"modifiedHotel.options.roomPrice.quadrupleRoomOriginPrice",modifiers:{number:!0}}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalHotelQuadrupleRoomOriginPrice",name:"原價"},domProps:{value:e.modifiedHotel.options.roomPrice.quadrupleRoomOriginPrice},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options.roomPrice,"quadrupleRoomOriginPrice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelQuadrupleRoomPrice"}},[e._v("四人房售價")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.modifiedHotel.options.roomPrice.quadrupleRoomPrice,expression:"modifiedHotel.options.roomPrice.quadrupleRoomPrice",modifiers:{number:!0}}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalHotelQuadrupleRoomPrice",name:"售價"},domProps:{value:e.modifiedHotel.options.roomPrice.quadrupleRoomPrice},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options.roomPrice,"quadrupleRoomPrice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalAvailableRoomCount"}},[e._v("空房數")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.availableRoomCount,expression:"modifiedHotel.options.availableRoomCount"}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalAvailableRoomCount",name:"空房數"},domProps:{value:e.modifiedHotel.options.availableRoomCount},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options,"availableRoomCount",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelModalHotelRating"}},[e._v("評價")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.hotelRating,expression:"modifiedHotel.options.hotelRating"}],staticClass:"form-control",class:a,attrs:{type:"number",id:"modifiedHotelModalHotelRating",name:"評價"},domProps:{value:e.modifiedHotel.options.hotelRating},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel.options,"hotelRating",t.target.value)}}}),i("small",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-12"},[i("hr")]),i("div",{staticClass:"col-12"},[i("h6",{staticClass:"mb-2"},[e._v("飯店設施")]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.facilities.isBreakfast,expression:"modifiedHotel.options.facilities.isBreakfast"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"breakfast",value:"breakfast"},domProps:{checked:Array.isArray(e.modifiedHotel.options.facilities.isBreakfast)?e._i(e.modifiedHotel.options.facilities.isBreakfast,"breakfast")>-1:e.modifiedHotel.options.facilities.isBreakfast},on:{change:function(t){var i=e.modifiedHotel.options.facilities.isBreakfast,o=t.target,a=!!o.checked;if(Array.isArray(i)){var s="breakfast",l=e._i(i,s);o.checked?l<0&&e.$set(e.modifiedHotel.options.facilities,"isBreakfast",i.concat([s])):l>-1&&e.$set(e.modifiedHotel.options.facilities,"isBreakfast",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.modifiedHotel.options.facilities,"isBreakfast",a)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"breakfast"}},[e._v("提供早餐")])]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.facilities.isWifi,expression:"modifiedHotel.options.facilities.isWifi"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"wifi",value:"wifi"},domProps:{checked:Array.isArray(e.modifiedHotel.options.facilities.isWifi)?e._i(e.modifiedHotel.options.facilities.isWifi,"wifi")>-1:e.modifiedHotel.options.facilities.isWifi},on:{change:function(t){var i=e.modifiedHotel.options.facilities.isWifi,o=t.target,a=!!o.checked;if(Array.isArray(i)){var s="wifi",l=e._i(i,s);o.checked?l<0&&e.$set(e.modifiedHotel.options.facilities,"isWifi",i.concat([s])):l>-1&&e.$set(e.modifiedHotel.options.facilities,"isWifi",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.modifiedHotel.options.facilities,"isWifi",a)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"wifi"}},[e._v("免費無線網路")])]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.facilities.isParking,expression:"modifiedHotel.options.facilities.isParking"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"parking",value:"parking"},domProps:{checked:Array.isArray(e.modifiedHotel.options.facilities.isParking)?e._i(e.modifiedHotel.options.facilities.isParking,"parking")>-1:e.modifiedHotel.options.facilities.isParking},on:{change:function(t){var i=e.modifiedHotel.options.facilities.isParking,o=t.target,a=!!o.checked;if(Array.isArray(i)){var s="parking",l=e._i(i,s);o.checked?l<0&&e.$set(e.modifiedHotel.options.facilities,"isParking",i.concat([s])):l>-1&&e.$set(e.modifiedHotel.options.facilities,"isParking",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.modifiedHotel.options.facilities,"isParking",a)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"parking"}},[e._v("有停車場")])]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.facilities.isSmokeBan,expression:"modifiedHotel.options.facilities.isSmokeBan"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"smokeBan",value:"smokeban"},domProps:{checked:Array.isArray(e.modifiedHotel.options.facilities.isSmokeBan)?e._i(e.modifiedHotel.options.facilities.isSmokeBan,"smokeban")>-1:e.modifiedHotel.options.facilities.isSmokeBan},on:{change:function(t){var i=e.modifiedHotel.options.facilities.isSmokeBan,o=t.target,a=!!o.checked;if(Array.isArray(i)){var s="smokeban",l=e._i(i,s);o.checked?l<0&&e.$set(e.modifiedHotel.options.facilities,"isSmokeBan",i.concat([s])):l>-1&&e.$set(e.modifiedHotel.options.facilities,"isSmokeBan",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.modifiedHotel.options.facilities,"isSmokeBan",a)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"smokeBan"}},[e._v("禁止吸菸")])]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.options.facilities.isPen,expression:"modifiedHotel.options.facilities.isPen"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"pet",value:"pet"},domProps:{checked:Array.isArray(e.modifiedHotel.options.facilities.isPen)?e._i(e.modifiedHotel.options.facilities.isPen,"pet")>-1:e.modifiedHotel.options.facilities.isPen},on:{change:function(t){var i=e.modifiedHotel.options.facilities.isPen,o=t.target,a=!!o.checked;if(Array.isArray(i)){var s="pet",l=e._i(i,s);o.checked?l<0&&e.$set(e.modifiedHotel.options.facilities,"isPen",i.concat([s])):l>-1&&e.$set(e.modifiedHotel.options.facilities,"isPen",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(e.modifiedHotel.options.facilities,"isPen",a)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"pet"}},[e._v("寵物入住")])])]),i("div",{staticClass:"col-12"},[i("hr")]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelHotelContent"}},[e._v("飯店描述")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.content,expression:"modifiedHotel.content"}],staticClass:"form-control",class:a,attrs:{id:"modifiedHotelHotelContent",rows:"3",placeholder:"請描述飯店相關地理位置及優勢",name:"描述"},domProps:{value:e.modifiedHotel.content},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel,"content",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"form-group"},[i("validation-provider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,a=t.classes;return[i("label",{attrs:{for:"modifiedHotelDescription"}},[e._v("詳細說明")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.modifiedHotel.description,expression:"modifiedHotel.description"}],staticClass:"form-control",class:a,attrs:{id:"modifiedHotelDescription",rows:"3",placeholder:"細節補充說明",name:"詳述"},domProps:{value:e.modifiedHotel.description},on:{input:function(t){t.target.composing||e.$set(e.modifiedHotel,"description",t.target.value)}}}),i("span",{staticClass:"invalid-feedback"},[e._v(e._s(o[0]))])]}}],null,!0)})],1)])])])]),i("div",{staticClass:"text-right"},[i("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[e._v("取消")]),i("button",{staticClass:"btn btn-success",attrs:{type:"submit","data-dismiss":"modal",disabled:o},on:{click:e.comfirmModifiedHotel}},[e._v("確認")])])])]}}])})],1)]),i("div",{staticClass:"modal-footer"})])])]),i("div",{staticClass:"modal fade",attrs:{id:"removeHotelModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header bg-danger text-white"},[i("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v(e._s(e.modalTitle))]),e._m(1)]),i("div",{staticClass:"modal-body"},[e._v(" "+e._s(e.modalContent)+" ")]),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[e._v("取消")]),i("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:e.comfirmModifiedHotel}},[e._v("確認")])])])])])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],d=(i("4160"),i("a434"),i("159b"),{data:function(){return{modifiedHotel:{id:"",title:"",category:"",content:"",imageUrl:[],enabled:"",origin_price:"",price:"",unit:"",options:{roomPrice:{},facilities:{},address:{city:""}}},imageUrl:"",modalTitle:"",modalContent:"",type:""}},methods:{comfirmModifiedHotel:function(){switch(this.type){case"edit":var e=document.querySelector("#modifiedHotelModal").dataset.index,t=JSON.parse(JSON.stringify(this.modifiedHotel));this.$emit("comfirmmodifiedhotel",e,t,this.type);break;case"creation":var i=JSON.parse(JSON.stringify(this.modifiedHotel));console.log(i),this.$emit("comfirmmodifiedhotel",0,i,this.type);break;case"removal":var o=document.querySelector("#removeHotelModal").dataset.index,a=JSON.parse(JSON.stringify(this.modifiedHotel));this.$emit("comfirmmodifiedhotel",o,a,this.type);break}},showImage:function(e){this.imageUrl=e},uploadFile:function(){var e=this,t=document.querySelector("#modifiedHotelModalFile").files[0],i=new FormData;i.append("file",t);var o="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/storage");this.$http.post(o,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.modifiedHotel.imageUrl.push(t.data.data.path)})).catch((function(e){console.log("error:",e)}))},removeImage:function(){var e=this;this.modifiedHotel.imageUrl.forEach((function(t,i){t===e.imageUrl&&(e.modifiedHotel.imageUrl.splice(i,1),e.imageUrl="")}))}},created:function(){},mounted:function(){var e=this;this.$bus.$on("createHotelData",(function(){e.modalTitle="新增飯店資訊",e.type="creation",$("#modifiedHotelModal").modal("show")})),this.$bus.$on("editHotelData",(function(t,i){e.modifiedHotel=i,e.modalTitle="編輯飯店資訊",e.type="edit",document.querySelector("#modifiedHotelModal").dataset.index=t,$("#modifiedHotelModal").modal("show")})),this.$bus.$on("removeHotelData",(function(t,i){e.modalTitle="確定刪除".concat(i.title,"?"),e.modalContent="有".concat(i.options.hotelRating,"顆星的評價喔,不再考慮嗎?"),e.type="removal",document.querySelector("#removeHotelModal").dataset.index=t,$("#removeHotelModal").modal("show")})),$("#modifiedHotelModal").on("hidden.bs.modal",(function(){e.modifiedHotel={id:"",title:"",category:"",content:"",imageUrl:[],enabled:"",origin_price:"",price:"",unit:"",options:{roomPrice:{},facilities:{},address:{city:""}}},e.imageUrl=""}))}}),n=d,c=i("2877"),m=Object(c["a"])(n,l,r,!1,null,null,null),f=m.exports,u={components:{pagination:s["a"],"backend-modal":f},data:function(){return{hotels:[],pagination:{},isLoading:!1}},methods:{getHotelData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/products");this.isLoading=!0,this.$http.get(i,{params:{page:t}}).then((function(t){e.hotels=t.data.data,e.pagination=t.data.meta.pagination,e.isLoading=!1})).catch((function(t){e.isLoading=!1}))},editHotelData:function(e){var t=this,i="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/product/").concat(this.hotels[e].id);this.$http.get(i).then((function(i){t.$bus.$emit("editHotelData",e,i.data.data)})).catch((function(e){}))},createHotelData:function(){console.log(this.$bus),this.$bus.$emit("createHotelData")},removeHotelData:function(e){var t=JSON.parse(JSON.stringify(this.hotels[e]));this.$bus.$emit("removeHotelData",e,t)},comfirmModifiedHotel:function(e,t,i){var o=this;switch(i){case"edit":var a="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/product/").concat(this.hotels[e].id);this.$http.patch(a,t).then((function(e){o.getHotelData(s["a"].current_page)})).catch((function(e){}));break;case"creation":var l="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/product");delete t.id,this.$http.post(l,t).then((function(e){o.getHotelData(s["a"].current_page)})).catch((function(e){console.log(e)}));break;case"removal":var r="".concat("https://course-ec-api.hexschool.io/api/").concat("c62ed506-1fb9-4a50-912d-1c0feaaff93a","/admin/ec/product/").concat(this.hotels[e].id);this.$http.delete(r).then((function(e){o.getHotelData(s["a"].current_page)})).catch((function(e){}));break}}},created:function(){this.getHotelData()}},p=u,v=Object(c["a"])(p,o,a,!1,null,null,null);t["default"]=v.exports},"99af":function(e,t,i){"use strict";var o=i("23e7"),a=i("d039"),s=i("e8b5"),l=i("861d"),r=i("7b0b"),d=i("50c4"),n=i("8418"),c=i("65f0"),m=i("1dde"),f=i("b622"),u=i("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=u>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),H=m("concat"),b=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:s(e)},_=!h||!H;o({target:"Array",proto:!0,forced:_},{concat:function(e){var t,i,o,a,s,l=r(this),m=c(l,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(s=-1===t?l:arguments[t],b(s)){if(a=d(s.length),f+a>v)throw TypeError(g);for(i=0;i<a;i++,f++)i in s&&n(m,f,s[i])}else{if(f>=v)throw TypeError(g);n(m,f++,s)}return m.length=f,m}})}}]);
//# sourceMappingURL=chunk-1c1614b6.9c2ea7ba.js.map