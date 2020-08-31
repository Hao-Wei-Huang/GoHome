<template>
  <div class="dropdown">
    <div class="text-white dropdown-toggle position-relative p-2 cursor" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <font-awesome-icon class="h5" :icon="['fas', 'shopping-cart']"/>
      <span class="cart-count text-center">{{cart.length}}</span>
    </div>
    <div class="dropdown-menu p-2 cart-dropdown" aria-labelledby="dropdownMenuButton">
      <h5 class="text-primary">已預訂的房間</h5>
      <table class="w-100">
          <tbody>
              <tr v-for="(item) in cart" :key="item.id">
                  <td class="ellipsis py-2">{{item.product.title}}</td>
                  <td class="py-2" style="width: 40px;">{{item.quantity}}間</td>
                  <td class="text-right py-2">${{item.product.price | moneyFilter}}</td>
              </tr>
          </tbody>
      </table>
      <router-link to="/cart" class="btn btn-primary w-100 mt-2 text-white">結帳去</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: []
    }
  },
  methods: {
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
  },
  created () {
    this.getCartData();
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

.ellipsis {
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
