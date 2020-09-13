<template>
  <div class="content">
    <loading :active.sync="isLoading" ></loading>
    <div class="container mt-md-5 mt-3">
      <div class="row flex-row-reverse">
        <!-- <div class="col-md-3 text-left px-0 px-md-3 mb-3">
          <nav class="navbar navbar-expand-md navbar-light bg-co-primary p-0 flex-md-column align-items-md-stretch">
            <h4 class="p-2 text-white">找旅館</h4>
            <button class="navbar-toggler p-2 mr-2" type="button" data-toggle="collapse" data-target="#seachedData" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <font-awesome-icon class="text-white" :icon="['fas', 'search']"/>
            </button>
            <div class="collapse navbar-collapse" id="seachedData">
            <form class="bg-info p-3 w-100" @submit.prevent="goHotels">
              <div class="form-group" >
                <label for="destination" class="">目的地</label>
                <select class="form-control mt-1" id="destination" name="縣市" v-model="search.destination" >
                  <option disabled value="">請選擇</option>
                  <option value="台北市">台北市</option>
                  <option value="台中市">台中市</option>
                  <option value="嘉義縣">嘉義縣</option>
                  <option value="台南市">台南市</option>
                  <option value="高雄市">高雄市</option>
                  <option value="屏東縣">屏東縣</option>
                </select>
              </div>
              <date-picker mode='range' color="teal" v-model="search.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                <div>
                  <div class="form-group">
                    <label for="checkinDate">入住時間</label>
                    <div class="position-relative mt-1">
                      <font-awesome-icon class="text-secondary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                      <input type="text" class="form-control pl-4 bg-white" id="checkinDate" v-model="checkinDate" aria-describedby="pickerDate" readonly>
                    </div>
                  </div>
                </div>
              </date-picker>
              <date-picker  mode='range' color="teal" v-model="search.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                <div class="form-group">
                  <label for="checkoutDate">退房時間</label>
                  <div class="position-relative mt-1">
                    <font-awesome-icon class="text-secondary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                    <input type="text" class="form-control pl-4 bg-white" id="checkoutDate" v-model="checkoutDate" aria-describedby="pickerDate" readonly>
                  </div>
                </div>
              </date-picker>
              <button class="btn btn-primary w-100">搜尋</button>
            </form>
            </div>
          </nav>
        </div> -->
        <div class="col-md-8 col-lg-9">
          <section>
            <h2 class="text-left mb-3">
              {{hotel.title}}
              <font-awesome-icon class="h6 text-warning" v-for="hotelRating in Number(hotel.options.hotelRating)" :key="hotelRating" :icon="['fas', 'star']"/>
              <div class="h5 mt-2 text-primary"><font-awesome-icon class="text-secondary mr-1" :icon="['fas', 'map-marker-alt']"/>{{hotel.options.address.city}}{{hotel.options.address.road}}</div>
            </h2>
            <div class="thumb">
              <!-- swiper1 -->
              <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop" v-if="hotel.imageUrl.length > 0">
                <swiper-slide v-for="item in hotel.imageUrl" :key="item" :style='`background-image:url(${item})`'></swiper-slide>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs" v-if="hotel.imageUrl.length > 0">
                <swiper-slide v-for="item in hotel.imageUrl" :key="item" :style='`background-image:url(${item})`'></swiper-slide>
              </swiper>
            </div>
          </section>
          <section class="mt-4">
            <p class="text-left">
              {{hotel.description}}
            </p>
          </section>
          <section class="mt-5">
            <h3 class="mb-3">飯店設施</h3>
            <div class="text-left text-primary">
              <span class="mr-3" v-if="hotel.options.facilities.isBreakfast"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'utensils']"/>提供早餐</span>
              <span class="mr-3" v-if="hotel.options.facilities.isWifi"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'wifi']"/>免費無線網路</span>
              <span class="mr-3" v-if="hotel.options.facilities.isParking"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'parking']"/>有停車場</span>
              <span class="mr-3" v-if="hotel.options.facilities.isSmokeBan"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'smoking-ban']"/>禁止吸菸</span>
              <span class="mr-3" v-if="hotel.options.facilities.isPen"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'dog']"/>寵物可入住</span>
              <!-- <div class="col">
                <span class="mr-3" style="white-space:nowrap;"  v-if="hotel.options.facilities.isBreakfast"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'utensils']"/>提供早餐</span>
              </div>
              <div class="col">
                <span class="mr-3" style="white-space:nowrap;" v-if="hotel.options.facilities.isWifi"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'wifi']"/>免費無線網路</span>
              </div>
              <div class="col">
                <span class="mr-3" style="white-space:nowrap;" v-if="hotel.options.facilities.isParking"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'parking']"/>有停車場</span>
              </div>
              <div class="col">
                <span class="mr-3" style="white-space:nowrap;" v-if="hotel.options.facilities.isSmokeBan"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'smoking-ban']"/>禁止吸菸</span>
              </div>
              <div class="col">
                <span class="mr-3" style="white-space:nowrap;"  v-if="hotel.options.facilities.isPen"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'dog']"/>寵物可入住</span>
              </div> -->
            </div>
          </section>
          <section class="mt-5">
            <h3 class="mb-3">空房資訊</h3>
            <table class="table">
              <thead>
                <tr class="bg-primary text-white">
                  <th scope="col">房型</th>
                  <th scope="col" class="d-none d-md-block">人數</th>
                  <th scope="col">價格</th>
                  <th scope="col">房間數量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">奢華雙人房</th>
                  <td class="text-left d-none d-md-block">
                    <font-awesome-icon class="text-primary" v-for="item in 2" :key="item" :icon="['fas', 'user']"/>
                  </td>
                  <td class="text-right h5"><div class="h6 text-line-through text-danger">${{hotel.origin_price | moneyFilter}}</div>${{hotel.price | moneyFilter}}</td>
                  <td>
                    <div class="input-group align-items-center justify-content-center">
                        <div class="input-group-prepend ml-2">
                            <button class="btn btn-outline-primary" @click="doubleRoomCount -= 1" :disabled="doubleRoomCount <= 0">-</button>
                        </div>
                        <input type="text" class="form-control text-center hotel-room-count" readonly v-model="doubleRoomCount">
                        <div class="input-group-append mr-2">
                            <button class="btn btn-outline-primary" @click="doubleRoomCount += 1">+</button>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">頂級三人房</th>
                  <td class="text-left d-none d-md-block">
                    <font-awesome-icon class="text-primary" v-for="item in 3" :key="item" :icon="['fas', 'user']"/>
                  </td>
                  <td class="text-right h5"><div class="h6 text-line-through text-danger">${{hotel.options.roomPrice.tripleRoomOriginPrice | moneyFilter}}</div>${{hotel.options.roomPrice.tripleRoomPrice | moneyFilter}}</td>
                  <td>
                    <div class="input-group align-items-center justify-content-center">
                        <div class="input-group-prepend ml-2">
                            <button class="btn btn-outline-primary" @click="tripleRoomCount -= 1" :disabled="tripleRoomCount <= 0">-</button>
                        </div>
                        <input type="text" class="form-control text-center hotel-room-count" readonly v-model="tripleRoomCount">
                        <div class="input-group-append mr-2">
                            <button class="btn btn-outline-primary" @click="tripleRoomCount += 1">+</button>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">豪華四人房</th>
                  <td class="text-left d-none d-md-block">
                    <font-awesome-icon class="text-primary" v-for="item in 4" :key="item" :icon="['fas', 'user']"/>
                  </td>
                  <td class="text-right h5"><div class="h6 text-line-through text-danger">${{hotel.options.roomPrice.quadrupleRoomOriginPrice | moneyFilter}}</div>${{hotel.options.roomPrice.quadrupleRoomPrice | moneyFilter}}</td>
                  <td>
                    <div class="input-group align-items-center justify-content-center">
                        <div class="input-group-prepend ml-2">
                            <button class="btn btn-outline-primary" @click="quadrupleRoomCount -= 1" :disabled="quadrupleRoomCount <= 0">-</button>
                        </div>
                        <input type="text" class="form-control text-center hotel-room-count" readonly v-model="quadrupleRoomCount">
                        <div class="input-group-append mr-2">
                            <button class="btn btn-outline-primary" @click="quadrupleRoomCount += 1">+</button>
                        </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-right">
              <a href="#" class="btn btn-outline-primary mr-3" @click.prevent="addHotelToCart()">加入購物車</a>
              <a href="#" class="btn btn-primary" @click.prevent="checkout">現在預定</a>
            </div>
          </section>
        </div>
        <div class="col-md-4 col-lg-3 text-left mb-3">
          <section class="text-left d-md-block d-none">
            <h4 class="bg-co-primary p-2 text-white">找旅館</h4>
            <form class="bg-info p-3" @submit.prevent="goHotels">
              <div class="form-group" >
                <label for="destination" class="">目的地</label>
                <select class="form-control mt-1" id="destination" name="縣市" v-model="search.destination" >
                  <option disabled value="">請選擇</option>
                  <option value="台北市">台北市</option>
                  <option value="台中市">台中市</option>
                  <option value="嘉義縣">嘉義縣</option>
                  <option value="台南市">台南市</option>
                  <option value="高雄市">高雄市</option>
                  <option value="屏東縣">屏東縣</option>
                </select>
              </div>
              <date-picker mode='range' color="teal" v-model="search.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                <div>
                  <div class="form-group">
                    <label for="checkinDate">入住時間</label>
                    <div class="position-relative mt-1">
                      <font-awesome-icon class="text-secondary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                      <input type="text" class="form-control pl-4 bg-white" id="checkinDate" v-model="checkinDate" aria-describedby="pickerDate" readonly>
                    </div>
                  </div>
                </div>
              </date-picker>
              <date-picker  mode='range' color="teal" v-model="search.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                <div class="form-group">
                  <label for="checkoutDate">退房時間</label>
                  <div class="position-relative mt-1">
                    <font-awesome-icon class="text-secondary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                    <input type="text" class="form-control pl-4 bg-white" id="checkoutDate" v-model="checkoutDate" aria-describedby="pickerDate" readonly>
                  </div>
                </div>
              </date-picker>
              <button class="btn btn-primary w-100">搜尋</button>
            </form>
          </section>
          <iframe :src="hotel.options.address.googleMapUrl" class="mt-3" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <section class="text-left mt-3">
            <h4>住客評價</h4>
            <div class="media mt-3">
              <img src="https://randomuser.me/api/portraits/men/27.jpg" alt="" class="portrait">
              <div class="media-body ml-2">
                <h5 class="mt-0 text-primary">凱凱<font-awesome-icon class="text-success ml-1" :icon="['fas', 'thumbs-up']"/></h5>
                <p>飯店舒適，服務人員相當貼心，就像回到家一樣，如果有機會下次會再來住。</p>
              </div>
            </div>
            <div class="media mt-3">
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="" class="portrait">
              <div class="media-body ml-2">
                <h5 class="mt-0 text-primary">珍妮<font-awesome-icon class="text-co-primary ml-1" :icon="['far', 'kiss-wink-heart']"/></h5>
                <p>CP值超高，很適合情侶來住，晚上夜景相當漂亮，飯店也很乾淨，可以感受到老闆的用心。</p>
              </div>
            </div>
            <div class="media mt-3">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" class="portrait">
              <div class="media-body ml-2">
                <h5 class="mt-0 text-primary">潔西卡<font-awesome-icon class="text-danger ml-1" :icon="['fas', 'heart']"/></h5>
                <p>服務人員熱情接待，全程到我們到房間及介紹附近知名景點讓我們能玩的很盡興，食物也很好吃。</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { roomCountToBit } from '@/room-count-transform.js';
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: 'carrousel',
  components: {
    'date-picker': DatePicker,
  },
  data () {
    return {
      hotelID: '',
      hotel: {
        imageUrl: [],
        options: {
          hotelRating: '',
          roomPrice: {},
          facilities: {},
          address: {},
        }
      },
      cart: [],
      isLoading: false,
      doubleRoomCount: 0,
      tripleRoomCount: 0,
      quadrupleRoomCount: 0,
      swiperOptionTop: {
        loop: true,
        // loopedSlides: 6, // looped slides should be the same
        loopAdditionalSlides: 30,
        slidesPerView: 1,
        spaceBetween: 10,
      },
      swiperOptionThumbs: {
        loop: true,
        loopAdditionalSlides: 30,
        // loopedSlides: 6, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 6,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        grabCursor: true
      },
      search: {
        destination: '台北市',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000),
        },
      },
    };
  },
  methods: {
    getHotelID () {
      this.hotelID = this.$route.params.id;
    },
    getHotelData () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${this.hotelID}`;
      this.isLoading = true;
      this.$http.get(api)
        .then(res => {
          this.hotel = res.data.data;
          this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper
            const swiperThumbs = this.$refs.swiperThumbs.$swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
          })
          this.isLoading = false;
        })
        .catch(res => {
          console.log('error:', res);
          this.isLoading = false;
        })
    },
    getCartData () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api)
        .then(res => {
          this.cart = res.data.data;
        })
        .catch(error => {
          console.log('error:', error);
        })
    },
    addHotelToCart (isCheckout = false) {
      let quantity = 0;
      let isCart = false;

      // 數量皆為0
      if ((this.doubleRoomCount | this.tripleRoomCount | this.quadrupleRoomCount) === 0) {
        if (isCheckout && this.cart.length) {
          this.$router.push('/cart');
        } else {
          this.$bus.$emit('pushmessage', 'warning', '請選擇房型');
        }
        return '';
      }
      // 判斷是否已經加入購物車
      this.cart.forEach((item, cartIndex) => {
        if (item.product.id === this.hotelID) {
          if (!isCheckout) {
            this.$bus.$emit('pushmessage', 'warning', '該旅館已經加入購物車囉');
          }
          isCart = true;
        }
      });
      if (isCart) {
        if (isCheckout) {
          this.$router.push('/cart');
        }
        return '';
      }

      quantity = roomCountToBit(this.doubleRoomCount, this.tripleRoomCount, this.quadrupleRoomCount);
      let hotel = {
        product: this.hotelID,
        quantity
      };
      this.isLoading = true;
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.post(api, hotel)
        .then(res => {
          if (isCheckout) {
            this.$router.push('/cart');
          } else {
            this.$bus.$emit('pushmessage', 'success', '該旅館已經成功加入購物車');
          }
          this.getCartData();
          this.isLoading = false;
          this.$bus.$emit('updateCart');
        })
        .catch(error => {
          console.log('error:', error);
          this.isLoading = false;
        });
    },
    checkout () {
      this.addHotelToCart(true);
    },
    formateDate (date) {
      const dayList = ['日', '一', '二', '三', '四', '五', '六'];
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let dayIndex = date.getDay();
      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
      return `${date.getFullYear()}-${month}-${day} 星期${dayList[dayIndex]}`;
    },
    getSearchDate () {
      if (this.$route.query.search) {
        this.search.destination = this.$route.query.search.destination;
        this.search.range.start = new Date(this.$route.query.search.range.start);
        this.search.range.end = new Date(this.$route.query.search.range.end);
      }
    },
    goHotels () {
      if (this.search.destination === '') {
        this.$bus.$emit('pushmessage', 'warning', '請選擇旅館地點');
        return
      }
      let tempSearch = JSON.parse(JSON.stringify(this.search));
      tempSearch.range.start = this.search.range.start.getTime();
      tempSearch.range.end = this.search.range.end.getTime();
      this.$router.push({ path: '/products', query: { search: tempSearch } });
    },
  },
  created () {
    this.getHotelID();
    this.getHotelData();
    this.getCartData();
    this.getSearchDate();
  },
  computed: {
    checkinDate () {
      return this.formateDate(this.search.range.start);
    },
    checkoutDate () {
      return this.formateDate(this.search.range.end);
    }
  },
}

</script>
<style lang='scss'>
  .thumb {
    height: 480px;
    background-color:#fff;
  }
  .swiper {
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.6;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
.hotel-room-count {
  max-width: 60px;
}
.calendar-icon{
position: absolute;
top:0.7rem;
left:0.3rem;
}
.portrait{
  width: 64px;
  border-radius: 50%;
}
</style>
