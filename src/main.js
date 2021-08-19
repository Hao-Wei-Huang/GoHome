// node_modules(外部套件)
import Vue from 'vue'
// loading-overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import '@loadingio/loading.css/dist/loading.css'
// vee-validate
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
// 匯入語系檔案
import zhTW from 'vee-validate/dist/locale/zh_TW.json'
// axios
import VueAxios from 'vue-axios'
import axios from 'axios'
// jquery
import $ from 'jquery'
// bootsrap
import 'popper.js'
import 'bootstrap'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faShoppingCart, faStar, faUtensils, faWifi, faParking, faSmokingBan, faDog, faUser, faEdit, faTrash, faCheck, faTimes, faPlus, faMapMarkerAlt, faCheckCircle, faExclamationTriangle, faThumbsUp, faHeart, faChevronCircleLeft, faChevronCircleRight, faSearch, faStreetView, faHome, faPhoneAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane, faEnvelope, faCalendarAlt, faKissWinkHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// v-calendar
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
// toasts
import Toasts from '@/components/Toasts.vue'
// filter
import moneyFilter from '@/filters/money.js'
// coustomer
import '@/assets/scss/all.scss'
import App from './App.vue'
import router from './router'
// production mode
Vue.config.productionTip = false
window.$ = $
// bus
Vue.prototype.$bus = new Vue()
/* plugin */
// axios
Vue.use(VueAxios, axios)
// swiper
Vue.use(VueAwesomeSwiper)
/* component */
// vee-valide
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
// fontawesome
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
// loading
Vue.component('Loading', Loading)
// v-calendar
Vue.component('DatePicker', DatePicker)
// toast
Vue.component('Toasts', Toasts)
Vue.axios.defaults.withCredentials = true
// vee-valide setting
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
localize('tw', zhTW)
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

// fontawesome setting
library.add(faShoppingCart, faStar, faPaperPlane, faCheckCircle, faExclamationTriangle, faChevronCircleLeft, faChevronCircleRight, faSearch)
// login icon
library.add(faEnvelope, faLock)
// hotel product icon
library.add(faUtensils, faWifi, faParking, faSmokingBan, faDog, faUser, faMapMarkerAlt, faCalendarAlt, faThumbsUp, faKissWinkHeart, faHeart, faStreetView, faHome, faPhoneAlt, faLightbulb)
// backend
library.add(faEdit, faTrash, faCheck, faTimes, faPlus)

/* filters */
Vue.filter('moneyFilter', moneyFilter)

/* Prototype */
// eslint-disable-next-line no-extend-native
Date.prototype.getFullDate = function () {
  const dayList = ['日', '一', '二', '三', '四', '五', '六']
  let month = this.getMonth() + 1
  let day = this.getDate()
  const dayIndex = this.getDay()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return `${this.getFullYear()}-${month}-${day} 星期${dayList[dayIndex]}`
}

// AOS init
AOS.init({
  duration: 800,
  offset: 100
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
