<template>
  <div class="content">
    <loading :active.sync="isLoading" ></loading>
    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <ul class="list-group">
              <li class="list-group-item"><a href="#">公寓</a></li>
              <li class="list-group-item"><a href="#">度假住宿</a></li>
              <li class="list-group-item"><a href="#">私人別墅</a></li>
              <li class="list-group-item"><a href="#">山中小屋</a></li>
            </ul>
          </div>
          <div class="col-9">
            <div class="product-list">
              <div class="row mb-3 bg-shadow"  v-for="(item) in hotels" :key="item.title">
                <div class="col-3 bg-lg-image cursor" :style="`background-image: url(${item.imageUrl[0]});}`"  @click="goHotel(item)">
                </div>
                <div class="col-9">
                  <div class="d-flex flex-column py-3 text-left">
                    <h5>
                      {{ item.title }}
                      <font-awesome-icon class="h6 text-warning" v-for="hotelRating in Number(item.options.hotelRating)" :key="hotelRating" :icon="['fas', 'star']"/>
                    </h5>
                    <p class="mt-2 flex-grow-1 ellipsis">{{ item.content }}</p>
                    <div class="text-right ">
                      <h5 class="hotel-origin-price">${{ item.origin_price | moneyFilter }}</h5>
                      <h4 class="hotel-price text-secondary mb-2">每晚平均房價:$ {{ item.price | moneyFilter }}</h4>
                      <div class="d-flex align-items-center">
                        <span class="badge badge-secondary mr-auto">{{ item.category }}</span>
                        <a href="#" class="btn btn-primary" @click="goHotel(item)">現在預定</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      cart: [],
      isLoading: false,
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
      this.$router.push(`/product/${item.id}`);
    }
  },
  created () {
    this.getAllHotelsData();
    this.getCartData();
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
</style>
