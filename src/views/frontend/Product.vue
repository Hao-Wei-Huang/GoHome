<template>
  <div class="text-left">
    <loading :active.sync="isLoading" >
      <font-awesome-icon class="h1 text-primary ld ld-bounce" :icon="['fas', 'home']"/>
    </loading>
    <div class="container mt-3 mt-md-5">
      <div class="row flex-row-reverse">
        <div class="col-md-8 col-lg-9" v-if="hotel.imageUrl">
          <section>
            <h2 class="h3 h2-md mb-2">
              {{ hotel.title }}
              <font-awesome-icon class="h6 text-warning" v-for="hotelRating in Number(hotel.options.hotelRating)" :key="hotelRating" :icon="['fas', 'star']"/>
            </h2>
            <div class="h5 mb-2 text-primary"><font-awesome-icon class="text-secondary mr-1" :icon="['fas', 'map-marker-alt']"/>{{ hotel.options.address.city }}{{ hotel.options.address.road }}</div>
            <div class="thumb bg-white">
              <!-- swiper1 Top-->
              <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                <swiper-slide class="bg-cover" v-for="item in hotel.imageUrl" :key="item" :style='`background-image:url(${item})`'></swiper-slide>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                <swiper-slide class="bg-cover" v-for="item in hotel.imageUrl" :key="item" :style='`background-image:url(${item})`'></swiper-slide>
              </swiper>
            </div>
          </section>
          <section class="mt-4">
            <p>
              {{ hotel.description }}
            </p>
          </section>
          <section class="mt-5">
            <h3 class="h4 h3-md mb-3">飯店設施</h3>
            <div class="text-primary">
              <span class="mr-3" v-if="hotel.options.facilities.isBreakfast"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'utensils']"/>提供早餐</span>
              <span class="mr-3" v-if="hotel.options.facilities.isWifi"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'wifi']"/>免費無線網路</span>
              <span class="mr-3" v-if="hotel.options.facilities.isParking"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'parking']"/>有停車場</span>
              <span class="mr-3" v-if="hotel.options.facilities.isSmokeBan"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'smoking-ban']"/>禁止吸菸</span>
              <span class="mr-3" v-if="hotel.options.facilities.isPen"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'dog']"/>寵物可入住</span>
            </div>
          </section>
          <section class="mt-5">
            <h3 class="h4 h3-md mb-3">空房資訊</h3>
            <table class="table">
              <thead>
                <tr class="bg-primary text-white">
                  <th scope="col">房型</th>
                  <th scope="col" class="d-none d-md-table-cell">人數</th>
                  <th scope="col">價格</th>
                  <th scope="col">房間數量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">奢華雙人房</th>
                  <td class="d-none d-md-table-cell">
                    <font-awesome-icon class="text-primary" v-for="item in 2" :key="item" :icon="['fas', 'user']"/>
                  </td>
                  <td class="text-right h5"><div class="h6 text-line-through text-danger">${{ hotel.origin_price | moneyFilter }}</div>${{ hotel.price | moneyFilter }}</td>
                  <td>
                    <div class="input-group align-items-center justify-content-center">
                        <div class="input-group-prepend ml-2">
                            <button class="btn btn-outline-primary" @click="room.doubleRoomCount -= 1" :disabled="room.doubleRoomCount <= 0">-</button>
                        </div>
                        <input type="text" class="form-control text-center hotel-room-count" readonly v-model="room.doubleRoomCount">
                        <div class="input-group-append mr-2">
                            <button class="btn btn-outline-primary" @click="room.doubleRoomCount += 1">+</button>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">頂級三人房</th>
                  <td class="d-none d-md-table-cell">
                    <font-awesome-icon class="text-primary" v-for="item in 3" :key="item" :icon="['fas', 'user']"/>
                  </td>
                  <td class="text-right h5"><div class="h6 text-line-through text-danger">${{ hotel.options.roomPrice.tripleRoomOriginPrice | moneyFilter }}</div>${{ hotel.options.roomPrice.tripleRoomPrice | moneyFilter }}</td>
                  <td>
                    <div class="input-group align-items-center justify-content-center">
                        <div class="input-group-prepend ml-2">
                            <button class="btn btn-outline-primary" @click="room.tripleRoomCount -= 1" :disabled="room.tripleRoomCount <= 0">-</button>
                        </div>
                        <input type="text" class="form-control text-center hotel-room-count" readonly v-model="room.tripleRoomCount">
                        <div class="input-group-append mr-2">
                            <button class="btn btn-outline-primary" @click="room.tripleRoomCount += 1">+</button>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">豪華四人房</th>
                  <td class="d-none d-md-table-cell">
                    <font-awesome-icon class="text-primary" v-for="item in 4" :key="item" :icon="['fas', 'user']"/>
                  </td>
                  <td class="text-right h5"><div class="h6 text-line-through text-danger">${{ hotel.options.roomPrice.quadrupleRoomOriginPrice | moneyFilter }}</div>${{ hotel.options.roomPrice.quadrupleRoomPrice | moneyFilter }}</td>
                  <td>
                    <div class="input-group align-items-center justify-content-center">
                        <div class="input-group-prepend ml-2">
                            <button class="btn btn-outline-primary" @click="room.quadrupleRoomCount -= 1" :disabled="room.quadrupleRoomCount <= 0">-</button>
                        </div>
                        <input type="text" class="form-control text-center hotel-room-count" readonly v-model="room.quadrupleRoomCount">
                        <div class="input-group-append mr-2">
                            <button class="btn btn-outline-primary" @click="room.quadrupleRoomCount += 1">+</button>
                        </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-right">
              <a href="#" class="btn btn-primary" @click.prevent="addHotelToCart">加入購物車</a>
            </div>
          </section>
        </div>
        <div class="col-md-4 col-lg-3 text-left mb-3" v-if="hotel.options">
          <section class="text-left d-md-block d-none text-white">
            <h4 class="bg-primary px-3 py-2">找旅館</h4>
            <form class="bg-primary p-3" @submit.prevent="goHotels">
              <div class="form-group" >
                <label for="destination" class="">目的地</label>
                <select class="form-control mt-1 cursor rounded-0 border-0" id="destination" name="縣市" v-model="search.destination" >
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
                      <font-awesome-icon class="calendar-icon position-absolute text-primary mr-1" :icon="['far', 'calendar-alt']"/>
                      <input type="text" class="form-control pl-4 bg-white cursor rounded-0 border-0" id="checkinDate" v-model="checkinDate" aria-describedby="pickerDate" readonly>
                    </div>
                  </div>
                </div>
              </date-picker>
              <date-picker  mode='range' color="teal" v-model="search.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                <div class="form-group">
                  <label for="checkoutDate">退房時間</label>
                  <div class="position-relative mt-1">
                    <font-awesome-icon class="calendar-icon position-absolute text-primary mr-1" :icon="['far', 'calendar-alt']"/>
                    <input type="text" class="form-control pl-4 bg-white cursor rounded-0 border-0" id="checkoutDate" v-model="checkoutDate" aria-describedby="pickerDate" readonly>
                  </div>
                </div>
              </date-picker>
              <button class="btn btn-outline-secondary w-100 rounded-0">搜尋</button>
            </form>
          </section>
          <section class="mt-3">
            <div class="h5 mb-2 text-primary"><font-awesome-icon class="mr-1" :icon="['fas', 'street-view']"/>{{ hotel.options.address.city }}{{ hotel.options.address.road }}</div>
            <iframe :src="hotel.options.address.googleMapUrl" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </section>
          <section class="text-left mt-3">
            <h3 class="h4 h3-md">住客評價</h3>
            <div class="media mt-3">
              <img src="https://randomuser.me/api/portraits/men/27.jpg" alt="頭像載入中" class="portrait">
              <div class="media-body ml-2">
                <h5 class="mt-0 text-primary">凱凱<font-awesome-icon class="text-success ml-1" :icon="['fas', 'thumbs-up']"/></h5>
                <p>飯店舒適，服務人員相當貼心，就像回到家一樣，如果有機會下次會再來住。</p>
              </div>
            </div>
            <div class="media mt-3">
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="頭像載入中" class="portrait">
              <div class="media-body ml-2">
                <h5 class="mt-0 text-primary">珍妮<font-awesome-icon class="text-co-primary ml-1" :icon="['far', 'kiss-wink-heart']"/></h5>
                <p>CP值超高，很適合情侶來住，晚上夜景相當漂亮，飯店也很乾淨，可以感受到老闆的用心。</p>
              </div>
            </div>
            <div class="media mt-3">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="頭像載入中" class="portrait">
              <div class="media-body ml-2">
                <h5 class="mt-0 text-primary">潔西卡<font-awesome-icon class="text-danger ml-1" :icon="['fas', 'heart']"/></h5>
                <p>服務人員熱情接待，全程到我們到房間及介紹附近知名景點讓我們能玩的很盡興，食物也很好吃。</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="relative-hotels py-3 py-md-5">
        <h3 class="h4 h3-md mb-3">其他人還看過這些飯店</h3>
        <swiper class="swiper row p-1" :options="swiperOption" v-if="hotels.length">
          <swiper-slide class="col-sm-6 col-md-4 col-lg-3 cursor" v-for="item in relativeHotels" :key="item.id">
            <div class="text-left bg-shadow h-100" @click="goHotel(item.id)">
              <div class="bg-md-image bg-cover" :style="`background-image: url(${item.imageUrl[0]});}`"></div>
              <div class="p-3">
                <h5 class="mr-1">{{ item.title }}</h5>
                <div>
                  <font-awesome-icon class="text-warning" v-for="hotelRating in Number(item.options.hotelRating)" :key="hotelRating" :icon="['fas', 'star']"/>
                </div>
                <span><font-awesome-icon class="text-secondary mr-1" :icon="['fas', 'map-marker-alt']"/>{{ item.options.address.city }}{{ item.options.address.road }}</span>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"><font-awesome-icon class="text-info h4" :icon="['fas', 'chevron-circle-left']"/></div>
          <div class="swiper-button-next" slot="button-next"><font-awesome-icon class="text-info h4" :icon="['fas', 'chevron-circle-right']"/></div>
        </swiper>
      </section>
    </div>
  </div>
</template>

<script>
import roomCountTransformation from '@/assets/js/room-count-transformation.js'
export default {
  data () {
    return {
      hotelID: '',
      hotel: {},
      hotels: [],
      cart: [],
      isLoading: false,
      room: {
        doubleRoomCount: 0,
        tripleRoomCount: 0,
        quadrupleRoomCount: 0,
        total: 0
      },
      search: {
        destination: '台北市',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000)
        }
      },
      swiperOptionTop: {
        loop: true,
        loopAdditionalSlides: 30,
        slidesPerView: 1,
        spaceBetween: 10
      },
      swiperOptionThumbs: {
        loop: true,
        loopAdditionalSlides: 30,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 6,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        grabCursor: true,
        breakpoints: {
          992: {
            slidesPerView: 6,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 0
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          0: {
            slidesPerView: 3,
            spaceBetween: 0
          }
        }
      },
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      }
    }
  },
  methods: {
    getRouterParam () {
      // hotel ID
      this.hotelID = this.$route.params.id
      // searched destination and date
      if (this.$route.query.search && this.$route.query.search.destination) {
        this.search.destination = this.$route.query.search.destination
        this.search.range.start = new Date(this.$route.query.search.range.start)
        this.search.range.end = new Date(this.$route.query.search.range.end)
      }
    },
    getHotel () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${this.hotelID}`
      this.$http.get(api)
        .then(res => {
          this.hotel = res.data.data
          // Init swiper component after geting hotel data.
          this.initSwiper()
          this.isLoading = false
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = false
        })
    },
    getHotels () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.hotels = res.data.data
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
        })
    },
    getCartData () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api)
        .then(res => {
          this.cart = res.data.data
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
        })
    },
    addHotelToCart () {
      let quantity = 0
      let isAddedHotel = false

      this.room.total = this.room.doubleRoomCount + this.room.tripleRoomCount + this.room.quadrupleRoomCount
      // Check if the room count of the hotel equal 0.
      if (this.room.total === 0) {
        this.$bus.$emit('pushmessage', 'warning', '請選擇房型')
        return
      }
      // Encode the different types of room count to an interger.
      quantity = roomCountTransformation.encode(this.room)
      for (let i = 0; i < this.cart.length; i++) {
        // Check if this hotel is added to cart.
        if (this.cart[i].product.id === this.hotelID) {
          isAddedHotel = true
          // Check if the room count is equal with old one
          if (this.cart[i].quantity === quantity) {
            this.$bus.$emit('pushmessage', 'success', '該旅館已經成功加入購物車')
            return
          }
        }
      }

      const hotel = {
        product: this.hotelID,
        quantity
      }
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      // Check if the hotel is added to the cart.
      // true : Update the hotel order in the cart.
      // false : Create the hotel order in the cart.
      if (isAddedHotel) {
        this.$http.patch(api, hotel)
          .then(res => {
            // Deliver message to toast component.
            this.$bus.$emit('pushmessage', 'success', '該旅館已經成功加入購物車')
            // Notify cart menu to update.
            this.$bus.$emit('updateCart')
            this.getCartData()
            this.isLoading = false
          })
          .catch(error => {
            this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
            this.isLoading = false
          })
      } else {
        this.$http.post(api, hotel)
          .then(res => {
            // Deliver message to toast component
            this.$bus.$emit('pushmessage', 'success', '該旅館已經成功加入購物車')
            // Notify cart menu to update.
            this.$bus.$emit('updateCart')
            this.getCartData()
            this.isLoading = false
          })
          .catch(error => {
            this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
            this.isLoading = false
          })
      }
      return true
    },
    goHotel (id) {
      this.$router.push(`/product/${id}`)
    },
    goHotels () {
      if (this.search.destination === '') {
        this.$bus.$emit('pushmessage', 'warning', '請選擇旅館地點')
        return
      }
      const tempSearch = JSON.parse(JSON.stringify(this.search))
      tempSearch.range.start = this.search.range.start.getTime()
      tempSearch.range.end = this.search.range.end.getTime()
      this.$router.push({ path: '/products', query: { search: tempSearch } })
    },
    initSwiper () {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  },
  created () {
    this.getRouterParam()
    this.getHotel()
    this.getHotels()
    this.getCartData()
  },
  computed: {
    checkinDate () {
      return this.search.range.start.getFullDate()
    },
    checkoutDate () {
      return this.search.range.end.getFullDate()
    },
    relativeHotels () {
      // The hotel data is not gotten.
      if (!this.hotel.options || !this.hotels.length) {
        return
      }
      const cities = ['台北市', '台中市', '嘉義縣', '台南市', '高雄市', '屏東縣']
      const choseCites = []
      const cityIndex = cities.indexOf(this.hotel.options.address.city)
      choseCites.push(this.hotel.options.address.city)
      // Check if the city is last one.
      if (cities.length - 1 === cityIndex) {
        choseCites.push(cities[cityIndex - 1])
      } else {
        choseCites.push(cities[cityIndex + 1])
      }
      return this.hotels.filter(item => {
        return ((item.options.address.city === choseCites[0] || item.options.address.city === choseCites[1]) && (item.id !== this.hotel.id))
      })
    }
  },
  watch: {
    $route () {
      this.getRouterParam()
      this.getHotel()
      this.getHotels()
      this.getCartData()
    }
  }
}

</script>
<style lang='scss'>
.thumb {
  height: 480px;
}
.swiper {
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
  top:0.7rem;
  left:0.3rem;
}
.portrait{
  width: 64px;
  border-radius: 50%;
}
.relative-hotels .swiper-button-prev{
  left: 0px;
  &::after{
    display: none;
  }
}
.relative-hotels .swiper-button-next{
  right: 0px;
  &::after{
    display: none;
  }
}
</style>
