<template>
  <div class="content">
    <div class="container mt-5">
      <div class="row">
        <div class="col-6">
          <h2 class="text-left mb-3">
            {{hotel.title}}
            <font-awesome-icon class="h6 text-warning" v-if="hotel.options.hotelRating > 0" :icon="['fas', 'star']"/>
            <font-awesome-icon class="h6 text-warning" v-if="hotel.options.hotelRating > 1" :icon="['fas', 'star']"/>
            <font-awesome-icon class="h6 text-warning" v-if="hotel.options.hotelRating > 2" :icon="['fas', 'star']"/>
            <font-awesome-icon class="h6 text-warning" v-if="hotel.options.hotelRating > 3" :icon="['fas', 'star']"/>
            <font-awesome-icon class="h6 text-warning" v-if="hotel.options.hotelRating > 4" :icon="['fas', 'star']"/>
          </h2>
          <div class="thumb">
            <!-- swiper1 -->
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide class="slide-1" :style='`background-image:url(${hotel.imageUrl[0]})`'></swiper-slide>
              <swiper-slide class="slide-2" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
              <swiper-slide class="slide-3" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
              <swiper-slide class="slide-4" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
              <swiper-slide class="slide-5" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide class="slide-1" :style='`background-image:url(${hotel.imageUrl[0]})`'></swiper-slide>
              <swiper-slide class="slide-2" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
              <swiper-slide class="slide-3" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
              <swiper-slide class="slide-4" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
              <swiper-slide class="slide-5" style="background-image:url('https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');"></swiper-slide>
            </swiper>
          </div>
          <p class="text-left mt-3">
            {{hotel.description}}
          </p>
          <div>
            <h3 class="my-3">飯店設施</h3>
            <div class="text-left text-primary">
              <span class="mr-3" style="white-space:nowrap"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'utensils']"/>提供早餐</span>
              <span class="mr-3" style="white-space:nowrap"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'wifi']"/>免費無線網路</span>
              <span class="mr-3" style="white-space:nowrap"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'parking']"/>有停車場</span>
              <span class="mr-3" style="white-space:nowrap"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'smoking-ban']"/>禁止吸菸</span>
              <span class="mr-3" style="white-space:nowrap"><font-awesome-icon class="mr-2 text-secondary" :icon="['fas', 'dog']"/>寵物可入住</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <h3 class="mb-3">空房查詢</h3>
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
                <td>
                  <font-awesome-icon class="text-primary" :icon="['fas', 'user']"/>
                  <font-awesome-icon class="text-primary" :icon="['fas', 'user']"/>
                </td>
                <td>$10000</td>
                <td>
                  <div class="input-group align-items-center justify-content-center">
                      <div class="input-group-prepend ml-2">
                          <button class="btn btn-outline-primary" @click="addCount(index)">-</button>
                      </div>
                      <input type="text" class="form-control text-center hotel-room-count">
                      <div class="input-group-append mr-2">
                          <button class="btn btn-outline-primary" @click="reduceCount(index)">+</button>
                      </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">頂級三人房</th>
                <td>
                  <font-awesome-icon class="text-primary" :icon="['fas', 'user']"/>
                  <font-awesome-icon class="text-primary" :icon="['fas', 'user']"/>
                </td>
                <td>$10000</td>
                <td>
                  <div class="input-group align-items-center justify-content-center">
                      <div class="input-group-prepend ml-2">
                          <button class="btn btn-outline-primary" @click="addCount(index)">-</button>
                      </div>
                      <input type="text" class="form-control text-center hotel-room-count">
                      <div class="input-group-append mr-2">
                          <button class="btn btn-outline-primary" @click="reduceCount(index)">+</button>
                      </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">豪華四人房</th>
                <td>
                  <font-awesome-icon class="text-primary" :icon="['fas', 'user']"/>
                  <font-awesome-icon class="text-primary" :icon="['fas', 'user']"/>
                </td>
                <td>$10000</td>
                <td>
                  <div class="input-group align-items-center justify-content-center">
                      <div class="input-group-prepend ml-2">
                          <button class="btn btn-outline-primary" @click="addCount(index)">-</button>
                      </div>
                      <input type="text" class="form-control text-center hotel-room-count">
                      <div class="input-group-append mr-2">
                          <button class="btn btn-outline-primary" @click="reduceCount(index)">+</button>
                      </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right">
            <a href="#" class="btn btn-outline-primary mr-3" @click.prevent="addHotelToCart(index)">加入購物車</a>
            <a href="#" class="btn btn-primary" @click="goHotel(item)">現在預定</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>住客評論</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      hotelID: '',
      hotel: {
        imageUrl: [],
        options: {
          hotelRating: ''
        }
      },
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        slidesPerView: 1,
        spaceBetween: 10,
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
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
      this.$http.get(api)
        .then(res => {
          this.hotel = res.data.data;
          console.log(this.hotel);
          // this.isLoading = false;
        })
        .catch(res => {
          console.log('error:', res);
          // this.isLoading = false;
        })
    }
  },
  created () {
    this.getHotelID();
    this.getHotelData();
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
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
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
  .hotel-room-count {
    max-width: 60px;
  }
</style>
