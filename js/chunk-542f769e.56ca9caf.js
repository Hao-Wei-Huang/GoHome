(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-542f769e"],{"294f":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"content mt-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"login mx-auto p-4 border-top border-info rounded"},[a("h2",{staticClass:"text-info"},[t._v("請登入後台")]),a("form",{staticClass:"text-left"},[a("div",{staticClass:"form-group "},[a("label",{attrs:{for:"loginEmail "}},[t._v("Email address*")]),a("div",{staticClass:"position-relative"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control pl-4",attrs:{type:"email",id:"loginEmail","aria-describedby":"emailHelp ",required:""},domProps:{value:t.email},on:{input:function(i){i.target.composing||(t.email=i.target.value.trim())},blur:function(i){return t.$forceUpdate()}}}),a("font-awesome-icon",{staticClass:"login-icon text-primary",attrs:{icon:["far","envelope"]}}),a("i",{staticClass:"login-icon far fa-envelope"})],1)]),a("div",{staticClass:"form-group "},[a("label",{attrs:{for:"loginPassword "}},[t._v("Password*")]),a("div",{staticClass:"position-relative"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form-control pl-4",attrs:{type:"password",id:"loginPassword",required:""},domProps:{value:t.password},on:{input:function(i){i.target.composing||(t.password=i.target.value.trim())},blur:function(i){return t.$forceUpdate()}}}),a("font-awesome-icon",{staticClass:"login-icon text-primary",attrs:{icon:["fas","lock"]}})],1)]),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn-login btn btn-primary",attrs:{type:"submit"},on:{click:function(i){return i.preventDefault(),t.login(i)}}},[t._v("登入")])])])])])])},e=[],o=(a("99af"),{data:function(){return{email:"",password:"",isLoading:!1}},methods:{login:function(){var t=this,i="".concat("https://course-ec-api.hexschool.io/api/","auth/login"),a={email:this.email,password:this.password};this.isLoading=!0,this.$http.post(i,a).then((function(i){var a=i.data.token,s=i.data.expired;document.cookie="adminToken=".concat(a,"; expires=").concat(new Date(1e3*s),"; path=/"),t.isLoading=!1,t.$router.push("/admin")})).catch((function(i){t.email="",t.password="",t.isLoading=!1,alert(i)}))}}}),n=o,r=(a("4600"),a("2877")),l=Object(r["a"])(n,s,e,!1,null,null,null);i["default"]=l.exports},4600:function(t,i,a){"use strict";var s=a("ae10"),e=a.n(s);e.a},ae10:function(t,i,a){}}]);
//# sourceMappingURL=chunk-542f769e.56ca9caf.js.map