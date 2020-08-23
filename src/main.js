import Vue from 'vue'; // node_modules(外部套件)
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import '@/assets/scss/all.scss';
import 'popper.js';
import 'bootstrap';
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faStar, faUtensils, faWifi, faParking, faSmokingBan, faDog, faUser } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
window.$ = $;

Vue.component('loading', Loading);
// 加到vue的原型裡
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);

library.add(faShoppingCart, faStar, faPaperPlane, faUtensils, faWifi, faParking, faSmokingBan, faDog, faUser);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.filter('moneyFilter', num => {
  var parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
