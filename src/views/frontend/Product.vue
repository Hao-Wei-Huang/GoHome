<template>
  <div class="content">
    <loading :active.sync="isLoading" ></loading>
    <div class="container mt-5">
      <div class="row">
        <div class="col-4">
          <iframe :src="hotel.options.address.googleMapUrl" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <section class="text-left mt-5">
            <h3>住客評論</h3>
          </section>
        </div>
        <div class="col-8">
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
              <span class="mr-3" style="white-space:nowrap" v-if="hotel.options.facilities.isBreakfast"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'utensils']"/>提供早餐</span>
              <span class="mr-3" style="white-space:nowrap" v-if="hotel.options.facilities.isWifi"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'wifi']"/>免費無線網路</span>
              <span class="mr-3" style="white-space:nowrap" v-if="hotel.options.facilities.isParking"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'parking']"/>有停車場</span>
              <span class="mr-3" style="white-space:nowrap" v-if="hotel.options.facilities.isSmokeBan"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'smoking-ban']"/>禁止吸菸</span>
              <span class="mr-3" style="white-space:nowrap" v-if="hotel.options.facilities.isPen"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'dog']"/>寵物可入住</span>
            </div>
          </section>
          <section class="mt-5">
            <h3 class="mb-3">空房資訊</h3>
            <table class="table">
              <thead>
                <tr class="bg-primary text-white">
                  <th scope="col">房型</th>
                  <th scope="col">人數</th>
                  <th scope="col">價格</th>
                  <th scope="col">房間數量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">奢華雙人房</th>
                  <td class="text-left">
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
                  <td class="text-left">
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
                  <td class="text-left">
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
      </div>
    </div>
  </div>
</template>

<script>
import { roomCountToBit } from '@/room-count-transform.js';
export default {
  name: 'carrousel',
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
      }
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
        })
        .catch(error => {
          console.log('error:', error);
          this.isLoading = false;
        });
    },
    checkout () {
      this.addHotelToCart(true);
    },
  },
  created () {
    this.getHotelID();
    this.getHotelData();
    this.getCartData();
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
</style>
