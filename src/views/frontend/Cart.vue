<template>
  <div class="content text-left">
    <loading :active.sync="isLoading" ></loading>
    <div class="container">
      <h2 class="text-center my-3">我的購物車</h2>
        <div class="row">
          <div class="col-8">
            <div class="card mb-3 bg-shadow" v-for="(item,index) in cart" :key="item.product.title">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <div class="bg-md-image" :style='`background-image:url(${item.product.imageUrl[0]})`'></div>
                </div>
                <div class="col-md-6">
                  <div class="card-body d-flex flex-column justify-content-center h-100">
                    <h5 class="card-title">{{item.product.title}}</h5>
                    <div class="input-group mb-3 align-items-center">
                        ${{item.product.price}} x
                      <div class="input-group-prepend ml-2">
                        <button class="btn btn-outline-primary" @click="reduceCount(index)">-</button>
                      </div>
                      <input type="text" class="form-control text-center hotel-room-count" v-model="item.quantity">
                      <div class="input-group-append mr-2">
                        <button class="btn btn-outline-primary" @click="addCount(index)">+</button>
                      </div>
                        間
                    </div>
                  </div>
                </div>
                <div class="col-md-2 d-flex align-items-center">
                  <button class="btn btn-outline-danger" @click="removeCartHotel(index)">刪除</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="cart-money-list bg-shadow p-3">
              <h3>訂單金額</h3>
              <hr>
              <table class="w-100">
                <tbody>
                  <tr v-for="(item) in cart" :key="item.product.id">
                    <td class="py-2">{{item.product.title}}</td>
                    <td class="py-2">{{item.quantity}}間</td>
                    <td class="text-right py-2">${{item.product.price | moneyFilter}}</td>
                  </tr>
                </tbody>
              </table>
              <router-link to="/customer" class="btn btn-danger mt-3 w-100">下一步</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [],
      isLoading: false,
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
    removeCartHotel (index) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${this.cart[index].product.id}`;
      let hotel = {
        product: this.cart[index].product.id,
      };
      this.isLoading = true;
      this.$http.delete(api, hotel)
        .then(res => {
          this.cart.splice(index, 1);
          this.isLoading = false;
        })
        .catch(res => {
          console.log('error:', res);
          this.isLoading = false;
        })
    },
    addCount (index) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      let quantity = this.cart[index].quantity + 1;
      let hotel = {
        product: this.cart[index].product.id,
        quantity
      };
      this.isLoading = true;
      this.$http.patch(api, hotel)
        .then(res => {
          this.$set(this.cart, index, res.data.data);
          this.isLoading = false;
        })
        .catch(res => {
          console.log('error:', res);
          this.isLoading = false;
        });
    },
    reduceCount (index) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      let quantity = this.cart[index].quantity - 1;
      this.isLoading = true;
      if (quantity === 0) {
        this.removeCartHotel(index);
      } else {
        let hotel = {
          product: this.cart[index].product.id,
          quantity
        };
        this.$http.patch(api, hotel)
          .then(res => {
            this.$set(this.cart, index, res.data.data);
            this.isLoading = false;
          })
          .catch(res => {
            console.log('error:', res);
            this.isLoading = false;
          });
      }
    }
  },
  created () {
    this.getCartData();
  },
};
</script>

<style lang="scss">
.hotel-room-count {
    max-width: 60px;
}

.cart-money-list {
    border-top: 3px solid #13c5bd;
    border-radius: 3px;
}
</style>
