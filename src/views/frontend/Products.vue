<template>
  <div class="content">
    <loading :active.sync="isLoading" ></loading>
    <section class="mt-3 mt-md-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-3 text-left px-0 px-md-3 sticky-top">
            <nav class="navbar navbar-expand-md navbar-light bg-co-primary p-0 flex-md-column align-items-md-stretch">
              <h4 class="p-2 text-white">找旅館</h4>
              <button class="navbar-toggler p-2 mr-2" type="button" data-toggle="collapse" data-target="#seachedData" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon class="text-white" :icon="['fas', 'search']"/>
              </button>
              <div class="collapse navbar-collapse" id="seachedData">
                <form class="bg-info p-3 w-100" @submit.prevent="searchRoom">
                  <div class="form-row flex-column">
                    <div class="form-group" >
                      <label for="destination" class="">目的地</label>
                      <select class="form-control mt-1" id="destination" name="縣市" v-model="tempSearch.destination" >
                        <option disabled value="">請選擇</option>
                        <option value="台北市">台北市</option>
                        <option value="台中市">台中市</option>
                        <option value="嘉義縣">嘉義縣</option>
                        <option value="台南市">台南市</option>
                        <option value="高雄市">高雄市</option>
                        <option value="屏東縣">屏東縣</option>
                      </select>
                    </div>
                    <date-picker mode='range' color="teal" v-model="tempSearch.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
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
                    <date-picker  mode='range' color="teal" v-model="tempSearch.range" :popover="{ placement: 'top', visibility: 'click' }" :min-date="new Date()">
                      <div class="form-group">
                        <label for="checkoutDate">退房時間</label>
                        <div class="position-relative mt-1">
                          <font-awesome-icon class="text-secondary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                          <input type="text" class="form-control pl-4 bg-white" id="checkoutDate" v-model="checkoutDate" aria-describedby="pickerDate" readonly>
                        </div>
                      </div>
                    </date-picker>
                    <button class="btn btn-primary w-100">搜尋</button>
                  </div>
                </form>
              </div>
            </nav>
          </div>
          <div class="col-md-8 col-lg-9">
            <div class="product-list">
              <template  v-for="(item) in hotels">
                <div class="row mb-3 bg-shadow" v-if="item.options.address.city === search.destination" :key="item.title">
                  <div class="col-3 bg-lg-image cursor" :style="`background-image: url(${item.imageUrl[0]});}`"  @click="goHotel(item)">
                  </div>
                  <div class="col-9">
                    <div class="d-flex flex-column py-3 text-left">
                      <h5>
                        {{ item.title }}
                        <font-awesome-icon class="h6 text-warning" v-for="hotelRating in Number(item.options.hotelRating)" :key="hotelRating" :icon="['fas', 'star']"/>
                      </h5>
                      <div class="mt-2 text-primary"><font-awesome-icon class="text-secondary mr-1" :icon="['fas', 'map-marker-alt']"/>{{item.options.address.city}}{{item.options.address.road}}</div>
                      <p class="mt-2 flex-grow-1 ellipsis">{{ item.content }}</p>
                      <div class="text-right ">
                        <h5 class="hotel-origin-price text-danger">${{ item.origin_price | moneyFilter }}</h5>
                        <h4 class="hotel-price text-primary mb-2">每晚最低房價 : ${{ item.price | moneyFilter }}</h4>
                        <div class="d-flex align-items-center">
                          <span class="badge badge-secondary mr-auto">{{ item.category }}</span>
                          <a href="#" class="btn btn-primary" @click="goHotel(item)">現在預定</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      cart: [],
      isLoading: false,
      search: {
        destination: '台北市',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000),
        },
      },
      tempSearch: {
        destination: '台北市',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000),
        },
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
        .catch(res => {
          console.log('error:', res);
        })
    },
    goHotel (item) {
      // this.$router.push(`/product/${item.id}`);
      let tempSearch = JSON.parse(JSON.stringify(this.search));
      tempSearch.range.start = this.search.range.start.getTime();
      tempSearch.range.end = this.search.range.end.getTime();
      this.$router.push({ path: `/product/${item.id}`, query: { search: tempSearch } });
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
    searchRoom () {
      this.search.destination = this.tempSearch.destination;
      this.search.range.start = this.tempSearch.range.start;
      this.search.range.end = this.tempSearch.range.end;
    },
    getSearchDate () {
      if (this.$route.query.search) {
        this.search.destination = this.$route.query.search.destination;
        this.search.range.start = new Date(this.$route.query.search.range.start);
        this.search.range.end = new Date(this.$route.query.search.range.end);
        this.tempSearch.destination = this.$route.query.search.destination;
        this.tempSearch.range.start = new Date(this.$route.query.search.range.start);
        this.tempSearch.range.end = new Date(this.$route.query.search.range.end);
      }
    }
  },
  created () {
    this.getAllHotelsData();
    this.getCartData();
    this.getSearchDate();
  },
  computed: {
    checkinDate () {
      return this.formateDate(this.tempSearch.range.start);
    },
    checkoutDate () {
      return this.formateDate(this.tempSearch.range.end);
    }
  },
};
</script>
<style lang="scss">
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.hotel-origin-price{
  text-decoration:line-through;
}
.cursor{
  cursor: pointer;
}
.calendar-icon{
  position: absolute;
  top:0.7rem;
  left:0.3rem;
}
</style>
