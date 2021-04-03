<template>
  <div>
    <loading :active.sync="isLoading" >
      <font-awesome-icon class="h1 text-primary ld ld-bounce" :icon="['fas', 'home']"/>
    </loading>
    <section class="py-3 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-3 text-left sticky-top">
            <nav class="navbar navbar-expand-md navbar-light bg-primary p-0 flex-md-column align-items-md-stretch">
              <h4 class="px-3 py-2 text-white">找旅館</h4>
              <button class="navbar-toggler p-2 mr-2" type="button" data-toggle="collapse" data-target="#seachedData" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon class="text-white" :icon="['fas', 'search']"/>
              </button>
              <div class="collapse navbar-collapse text-white" id="seachedData" ref="seachedData">
                <form class="bg-primary p-3 w-100" @submit.prevent="searchRoom">
                  <div class="form-row flex-column">
                    <div class="form-group" >
                      <label for="destination" class="">目的地</label>
                      <select class="form-control mt-1 cursor rounded-0 border-0" id="destination" name="縣市" v-model="tempSearch.destination" >
                        <option disabled value="">請選擇</option>
                        <option value="台北市">台北市</option>
                        <option value="台中市">台中市</option>
                        <option value="嘉義縣">嘉義縣</option>
                        <option value="台南市">台南市</option>
                        <option value="高雄市">高雄市</option>
                        <option value="屏東縣">屏東縣</option>
                      </select>
                    </div>
                    <date-picker mode='range' color="teal" v-model="tempSearch.range" :popover="{ placement: 'bottom', visibility: 'click' }" :min-date="new Date()">
                      <div>
                        <div class="form-group">
                          <label for="checkinDate">入住時間</label>
                          <div class="position-relative mt-1">
                            <font-awesome-icon class="position-absolute text-primary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                            <input type="text" class="form-control pl-4 bg-white cursor rounded-0 border-0" id="checkinDate" v-model="checkinDate" aria-describedby="pickerDate" readonly>
                          </div>
                        </div>
                      </div>
                    </date-picker>
                    <date-picker  mode='range' color="teal" v-model="tempSearch.range" :popover="{ placement: 'bottom', visibility: 'click' }" :min-date="new Date()">
                      <div class="form-group">
                        <label for="checkoutDate">退房時間</label>
                        <div class="position-relative mt-1">
                          <font-awesome-icon class="position-absolute text-primary mr-1 calendar-icon" :icon="['far', 'calendar-alt']"/>
                          <input type="text" class="form-control pl-4 bg-white cursor rounded-0 border-0" id="checkoutDate" v-model="checkoutDate" aria-describedby="pickerDate" readonly>
                        </div>
                      </div>
                    </date-picker>
                    <button class="btn btn-outline-secondary w-100 rounded-0 btn-search">搜尋</button>
                  </div>
                </form>
              </div>
            </nav>
          </div>
          <div class="col-md-8 col-lg-9">
            <ul class="product-list">
              <template>
                <li class="row no-gutters mb-3 bg-shadow cursor" v-for="item in destinationHotels" :key="item.title" @click="goHotel(item)">
                  <div class="col-4 col-lg-3 bg-lg-image bg-cover" :style="`background-image: url(${item.imageUrl[0]});}`">
                  </div>
                  <div class="col-8 col-lg-9">
                    <div class="d-flex flex-column p-3 text-left">
                      <h2 class="h5 h4-md">
                        <span class="d-block d-inline">{{ item.title }}</span>
                        <font-awesome-icon class="h6 text-warning" v-for="hotelRating in Number(item.options.hotelRating)" :key="hotelRating" :icon="['fas', 'star']"/>
                      </h2>
                      <div class="mt-2 text-primary"><font-awesome-icon class="text-secondary mr-1" :icon="['fas', 'map-marker-alt']"/>{{ item.options.address.city }}{{ item.options.address.road }}</div>
                      <p class="mt-2 flex-grow-1 ellipsis">{{ item.content }}</p>
                      <div class="text-right ">
                        <h5 class="h6 h5-md text-line-through text-danger">${{ item.origin_price | moneyFilter }}</h5>
                        <h4 class="h5 h4-md text-primary mb-2">每晚最低房價 : ${{ item.price | moneyFilter }}</h4>
                        <div class="d-flex align-items-center">
                          <span class="badge badge-secondary mr-auto">{{ item.category }}</span>
                          <a href="#" class="btn btn-primary rounded-0">現在預定</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotels: [],
      isLoading: false,
      search: {
        destination: '台北市',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000)
        }
      },
      tempSearch: {
        destination: '台北市',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000)
        }
      }
    }
  },
  methods: {
    getHotels () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.$http.get(api)
        .then(res => {
          this.hotels = res.data.data
          this.isLoading = false
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = false
        })
    },
    goHotel (item) {
      const tempSearch = JSON.parse(JSON.stringify(this.search))
      tempSearch.range.start = this.search.range.start.getTime()
      tempSearch.range.end = this.search.range.end.getTime()
      this.$router.push({ path: `/product/${item.id}`, query: { search: tempSearch } })
    },
    searchRoom () {
      this.search.destination = this.tempSearch.destination
      this.search.range.start = this.tempSearch.range.start
      this.search.range.end = this.tempSearch.range.end
      this.$refs.seachedData.classList.remove('show')
      // document.querySelector('#seachedData').classList.remove('show')
    },
    getSearchDate () {
      if (this.$route.query.search && this.$route.query.search.destination) {
        this.search.destination = this.$route.query.search.destination
        this.search.range.start = new Date(this.$route.query.search.range.start)
        this.search.range.end = new Date(this.$route.query.search.range.end)
        this.tempSearch.destination = this.$route.query.search.destination
        this.tempSearch.range.start = new Date(this.$route.query.search.range.start)
        this.tempSearch.range.end = new Date(this.$route.query.search.range.end)
      }
    }
  },
  created () {
    this.getHotels()
    this.getSearchDate()
  },
  computed: {
    checkinDate () {
      return this.tempSearch.range.start.getFullDate()
    },
    checkoutDate () {
      return this.tempSearch.range.end.getFullDate()
    },
    destinationHotels () {
      return this.hotels.filter(item => item.options.address.city === this.search.destination)
    }
  }
}
</script>
<style lang="scss">
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.calendar-icon{
  top:0.7rem;
  left:0.3rem;
}
</style>
