<template>
  <div class="dropdown">
    <div class="text-white dropdown-toggle position-relative p-2 cursor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <font-awesome-icon class="h5" :icon="['fas', 'shopping-cart']"/>
      <span class="cart-count text-center">{{cart.length}}</span>
    </div>
    <div class="dropdown-menu p-2 cart-dropdown" aria-labelledby="dropdownMenuButton" style="z-index:1030;">
      <h5 class="text-primary">已預訂的房間</h5>
      <table class="w-100">
          <tbody>
              <tr v-for="(item) in cartHotelsData" :key="item.title">
                  <td class="cart-ellipsis py-2">{{item.title}}</td>
                  <td class="py-2" style="width: 40px;">{{item.roomCount.total}}{{item.unit}}</td>
                  <td class="text-right py-2">${{
                    item.roomCount.doubleRoomCount * item.price +
                    item.roomCount.tripleRoomCount * item.options.roomPrice.tripleRoomPrice +
                    item.roomCount.quadrupleRoomCount * item.options.roomPrice.quadrupleRoomPrice | moneyFilter}}</td>
              </tr>
          </tbody>
      </table>
      <div v-if="cartHotelsData.length === 0">
        購物車無旅館，請多逛逛哦~
      </div>
      <router-link to="/cart" class="btn btn-primary w-100 mt-2 text-white" v-if="cartHotelsData.length != 0">結帳去</router-link>
    </div>
  </div>
</template>

<script>
import { bitToRoomCount } from '@/room-count-transform.js';
export default {
  data () {
    return {
      cart: [],
      cartHotelsData: [],
    }
  },
  methods: {
    getCartData () {
      this.cartHotelsData = [];
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api)
        .then(res => {
          this.cart = res.data.data;
          this.cart.forEach((item, index) => {
            let hotelApi = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${item.product.id}`;
            this.$http.get(hotelApi)
              .then(res => {
                res.data.data.roomCount = bitToRoomCount(item.quantity);
                this.cartHotelsData.push(res.data.data);
              })
              .catch(res => {
                console.log('error:', res);
              })
          });
        })
        .catch(res => {
          console.log('error:', res);
        })
    },
  },
  created () {
    this.getCartData();
    this.$bus.$on('updateCart', () => {
      this.getCartData();
    });
  },
}

</script>
<style lang='scss'>
.cart-icon {
    cursor: pointer;
}

.cart-count {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 18px;
    padding: 1px;
    position: absolute;
    right: 8px;
    top: -3px;
    z-index: 30;
    border-radius: 50%;
    background-color: #dc3545;
    font-size: 1rem;
}

.cart-dropdown {
    left: -100px;
    width: 250px;
}

.cart-ellipsis {
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
