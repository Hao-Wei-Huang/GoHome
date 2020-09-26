// node_modules(外部套件)
import Vue from 'vue';
// loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// vee-validate
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
// 匯入語系檔案
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
// axios
import VueAxios from 'vue-axios';
import axios from 'axios';
// jquery
import $ from 'jquery';
// bootsrap
import 'popper.js';
import 'bootstrap';
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faShoppingCart, faStar, faUtensils, faWifi, faParking, faSmokingBan, faDog, faUser, faEdit, faTrash, faCheck, faTimes, faPlus, faMapMarkerAlt, faCheckCircle, faExclamationTriangle, faThumbsUp, faHeart, faChevronCircleLeft, faChevronCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faEnvelope, faCalendarAlt, faKissWinkHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// coustomer
import moneyFilter from '@/filters/money.js';
import '@/assets/scss/all.scss';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
window.$ = $;
Vue.prototype.$bus = new Vue();
Vue.component('Loading', Loading);
// 加到vue的原型裡
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
// vee-valide
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

library.add(faShoppingCart, faStar, faPaperPlane, faCheckCircle, faExclamationTriangle, faChevronCircleLeft, faChevronCircleRight, faSearch);
// login icon
library.add(faEnvelope, faLock);
// hotel product icon
library.add(faUtensils, faWifi, faParking, faSmokingBan, faDog, faUser, faMapMarkerAlt, faCalendarAlt, faThumbsUp, faKissWinkHeart, faHeart);
// backend
library.add(faEdit, faTrash, faCheck, faTimes, faPlus);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

// filters
Vue.filter('moneyFilter', moneyFilter);

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize('tw', zhTW);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
