<template>
  <div class="content">
    <div class="banner d-flex align-items-center justify-content-center">
      <div>
        <div>
          <form class="bg-light-info p-3" @submit.prevent="goHotels(search)">
            <h2 class="text-white mb-2">
              新的旅程從訂房開始<font-awesome-icon :icon="['far', 'paper-plane']" />
            </h2>
            <div class="form-row flex-column flex-md-row align-items-md-center ">
              <div class="form-group mb-2 mb-md-0 mr-1" >
                <select class="form-control" id="destination" name="縣市" v-model="search.destination" >
                  <option disabled value="">前往哪裡旅遊</option>
                  <option value="台北市">台北市</option>
                  <option value="台中市">台中市</option>
                  <option value="嘉義縣">嘉義縣</option>
                  <option value="台南市">台南市</option>
                  <option value="高雄市">高雄市</option>
                  <option value="屏東縣">屏東縣</option>
                </select>
              </div>
              <date-picker mode='range' color="teal" v-model="search.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                <div class="form-group mb-2 mb-md-0 mr-1">
                  <div class="position-relative">
                    <font-awesome-icon class="text-secondary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                    <input type="text" class="form-control pl-4 bg-white" id="checkinDate" v-model="checkinDate" aria-describedby="pickerDate" readonly>
                  </div>
                </div>
              </date-picker>
              <date-picker  mode='range' color="teal" v-model="search.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                <div class="form-group mb-2 mb-md-0 mr-1">
                  <div class="position-relative">
                    <font-awesome-icon class="text-secondary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                    <input type="text" class="form-control pl-4 bg-white" id="checkoutDate" v-model="checkoutDate" aria-describedby="pickerDate" readonly>
                  </div>
                </div>
              </date-picker>
              <button class="btn btn-primary">搜尋</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container-md">
      <section class="mt-5">
        <h2 class="mb-5">台灣之美</h2>
        <div class="row py-5  position-relative tourist-attraction">
          <div class="col-md-6 bg-image" style="position: absolute; top:0; bottom:0; background-image: url('https://images.unsplash.com/photo-1593251909033-7609592eac50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80');">
          </div>
          <div class="col-md-6 ml-md-auto" style="z-index:2;">
            <div class="d-flex flex-column justify-content-between text-md-dark text-white">
              <h3>台北 101</h3>
              <p class="text-left">
                台北 101是全臺灣最著名的也是最高的指標建築，裡面囊括世界知名品牌設櫃，包括服飾、珠寶、名牌包、各地美食，在88樓以上還設有景觀台，可以眺望整個大台北的美景，此外周遭也有需多著名商圈，西門町、東區、信義商圈、士林夜市及饒河夜市等等。
              </p>
              <button type="button" class="btn btn-primary align-self-end" @click="goHotels({
                    destination: '台北市',
                    range: {
                      start: new Date(),
                      end: new Date(new Date().getTime() + 86400000),
                    },
                  })">現在就預定飯店
              </button>
            </div>
          </div>
        </div>
        <div class="row flex-row-reverse py-5 position-relative tourist-attraction">
          <div class="col-md-6 bg-image" style="position: absolute; top:0; bottom:0; background-image: url('https://i.imgur.com/Qsg6sSV.jpg');">
          </div>
          <div class="col-md-6 mr-md-auto" style="z-index:2;">
            <div class="d-flex flex-column justify-content-between text-md-dark text-white">
              <h3>台中國家歌劇院</h3>
              <p class="text-left">
                台中新的地標及文藝中心，請日本建築大師<span style="text-decoration:underline;">伊東豊雄</span>設計，使用無樑柱的<em>曲牆建築工法</em>。每日有許多館內導覽場次，供一般民眾了解，也有許多劇場提供大家觀看，結合育教娛樂，適合親子出遊、情侶遊玩的好地方，周遭還有秋紅谷生態公園、勤美術館、草悟道及一中商圈等等。
              </p>
              <button type="button" class="btn btn-primary align-self-end" @click="goHotels({
                    destination: '台中市',
                    range: {
                      start: new Date(),
                      end: new Date(new Date().getTime() + 86400000),
                    },
                  })">現在就預定飯店
              </button>
            </div>
          </div>
        </div>
        <div class="row py-5 position-relative tourist-attraction">
          <div class="col-md-6 bg-image" style="position: absolute; top:0; bottom:0; background-image: url('https://i.imgur.com/5EisI0X.jpg');">
          </div>
          <div class="col-md-6 ml-md-auto" style="z-index:2;">
            <div class="d-flex flex-column justify-content-between text-md-dark text-white">
              <h3>台南北門鹽田</h3>
              <p class="text-left">
                古早時代，鹽田撐起台南一家子的經濟，隨著科技發展，現今鹽田變成親子同樂的好去處，吹著海風，鏟著腳下鹽巴，伴著孩子的嘻笑聲，好不熱鬧阿!附近有烏腳病醫療紀念館、水晶教堂。台南市區又是另一番風景，有古蹟安平古堡、赤崁樓、億載金城，台南也是美食故鄉有牛肉湯、蝦仁飯、鮮魚湯及鱔魚意麵等多樣平民美食。
              </p>
              <button type="button" class="btn btn-primary align-self-end" @click="goHotels({
                    destination: '台南市',
                    range: {
                      start: new Date(),
                      end: new Date(new Date().getTime() + 86400000),
                    },
                  })">現在就預定飯店
              </button>
            </div>
          </div>
        </div>
        <div class="row flex-row-reverse py-5 position-relative tourist-attraction">
          <div class="col-md-6 bg-image" style="position: absolute; top:0; bottom:0; background-image: url('https://i.imgur.com/G6de4Lw.jpg');">
          </div>
          <div class="col-md-6 mr-md-auto" style="z-index:2;">
            <div class="d-flex flex-column justify-content-between text-md-dark text-white">
              <h3>高雄愛河璀璨之心</h3>
              <p class="text-left">
                愛河在重整完畢後，搖身一變變成當地著名的景點之一，河堤邊變成大家茶餘飯後散步的好場所，也吸引需多觀光客來愛河賞夜景。高雄也有許多必逛夜市瑞豐夜市、仁武夜市、凱旋青年夜市，著名景點像大魯閣草衙道、85大樓、夢時代、崗山之眼及衛武營等等。
              </p>
              <button type="button" class="btn btn-primary align-self-end" @click="goHotels({
                    destination: '高雄市',
                    range: {
                      start: new Date(),
                      end: new Date(new Date().getTime() + 86400000),
                    },
                  })">現在就預定飯店
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <h2 class="mb-5">人氣飯店推薦</h2>
        <div class="row">
          <swiper class="swiper" :options="swiperOption" v-if="hotels.length > 0">
            <template v-for="item in hotels">
              <swiper-slide class="col-6 col-md-4 col-lg-3  cursor" v-if="item.options.hotelRating === '5'" :key="item.id">
                <div class="text-left bg-shadow h-100" @click="goHotel(item.id)">
                  <div class="bg-md-image" :style="`background-image: url(${item.imageUrl[0]});}`"></div>
                  <div class="p-3">
                    <div class="d-flex align-items-end">
                      <h5 class="mr-1">{{item.title}}</h5>
                      <font-awesome-icon class="text-warning" v-for="hotelRating in Number(item.options.hotelRating)" :key="hotelRating" :icon="['fas', 'star']"/>
                    </div>
                    <span><font-awesome-icon class="text-secondary mr-1" :icon="['fas', 'map-marker-alt']"/>{{item.options.address.city}}{{item.options.address.road}}</span>
                  </div>
                </div>
              </swiper-slide>
            </template>
            <div class="swiper-button-prev" slot="button-prev"><font-awesome-icon class="text-info h4" :icon="['fas', 'chevron-circle-left']"/></div>
            <div class="swiper-button-next" slot="button-next"><font-awesome-icon class="text-info h4" :icon="['fas', 'chevron-circle-right']"/></div>
          </swiper>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
export default {
  components: {
    'date-picker': DatePicker,
  },
  data () {
    return {
      hotels: [],
      popularHotels: [],
      search: {
        destination: '',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000),
        },
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
          300: {
            slidesPerView: 2,
            spaceBetween: 0
          },
        }
      }
    };
  },
  methods: {
    getAllHotelsData () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
      this.isLoading = true;
      this.$http.get(api)
        .then(res => {
          this.hotels = res.data.data;
          this.getPopularHotels();
        })
        .catch(res => {
          console.log('error:', res);
        })
    },
    getPopularHotels () {
      this.popularHotels = this.hotels.filter((item, index) => {
        return item.options.hotelRating === '5';
      });
    },
    goHotel (id) {
      this.$router.push(`/product/${id}`);
    },
    goHotels (search) {
      console.log(search);
      if (search.destination === '') {
        this.$bus.$emit('pushmessage', 'warning', '請選擇旅館地點');
        return
      }
      let tempSearch = JSON.parse(JSON.stringify(search));
      tempSearch.range.start = search.range.start.getTime();
      tempSearch.range.end = search.range.end.getTime();
      this.$router.push({ path: '/products', query: { search: tempSearch } });
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
  },
  created () {
    this.getAllHotelsData();
  },
  computed: {
    checkinDate () {
      return this.formateDate(this.search.range.start);
    },
    checkoutDate () {
      return this.formateDate(this.search.range.end);
    }
  },
};
</script>
<style lang="scss">
@import "../../assets/scss/mixin";
@import "../../assets/scss/grid";
.banner {
  background-image: url("https://images.unsplash.com/photo-1502514841534-dceabea28dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80");
  height: calc(100vh - 110px);
  @include bg-cover();
}
.calendar-icon{
  position: absolute;
  top:0.7rem;
  left:0.3rem;
}
.bg-light-info{
  background: rgba(250,147,9,0.7);
}
.swiper-button-prev::after {
  display: none;
}

.swiper-button-next::after {
  display: none;
}
.tourist-attraction::after {
  content: '';
  position: absolute;
  width: 100%;
  top:0;
  bottom: 0;
  background-color: rgba(0, 0, 0,0.3);
}
@include pad{
  .text-md-dark {
    color: #333 !important;
  }
  .tourist-attraction::after {
    content: '';
    display: none;
  }
}

</style>
