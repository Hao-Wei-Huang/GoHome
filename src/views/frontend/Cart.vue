<template>
  <div class="content text-left">
    <loading :active.sync="isLoading" ></loading>
    <div class="container">
      <h2 class="text-center my-3">選擇旅館</h2>
      <div class="row flex-column align-items-center">
        <div class="col-8">
          <div class="card mb-3 bg-shadow" v-for="(item,index) in cartHotelsData" :key="item.id">
            <div class="row no-gutters">
              <div class="col-md-4">
                <div class="bg-md-image h-100" :style='`background-image:url(${item.imageUrl[0]})`'></div>
              </div>
              <div class="col-md-6">
                <div class="card-body d-flex flex-column justify-content-center h-100">
                  <h5 class="card-title">{{item.title}}</h5>
                  <h6 class="mb-1">奢華雙人房</h6>
                  <div class="input-group mb-3 align-items-center">
                    ${{item.price | moneyFilter}} x
                    <div class="input-group-prepend ml-2">
                      <button class="btn btn-outline-primary" @click="reduceCount(index,'doubleRoom')" :disabled="item.roomCount.doubleRoomCount <= 0">-</button>
                    </div>
                    <input type="text" class="form-control text-center hotel-room-count" v-model="item.roomCount.doubleRoomCount">
                    <div class="input-group-append mr-2">
                      <button class="btn btn-outline-primary" @click="addCount(index,'doubleRoom')">+</button>
                    </div>
                    {{item.unit}}
                  </div>
                  <h6 class="mb-1">頂級三人房</h6>
                  <div class="input-group mb-3 align-items-center">
                      ${{item.options.roomPrice.tripleRoomPrice | moneyFilter}} x
                    <div class="input-group-prepend ml-2">
                      <button class="btn btn-outline-primary" @click="reduceCount(index,'tripleRoom')" :disabled="item.roomCount.tripleRoomCount <= 0">-</button>
                    </div>
                    <input type="text" class="form-control text-center hotel-room-count" v-model="item.roomCount.tripleRoomCount">
                    <div class="input-group-append mr-2">
                      <button class="btn btn-outline-primary" @click="addCount(index,'tripleRoom')">+</button>
                    </div>
                    {{item.unit}}
                  </div>
                  <h6 class="mb-1">豪華四人房</h6>
                  <div class="input-group mb-3 align-items-center">
                      ${{item.options.roomPrice.quadrupleRoomPrice | moneyFilter}} x
                    <div class="input-group-prepend ml-2">
                      <button class="btn btn-outline-primary" @click="reduceCount(index,'quadrupleRoom')" :disabled="item.roomCount.quadrupleRoomCount <= 0">-</button>
                    </div>
                    <input type="text" class="form-control text-center hotel-room-count" v-model="item.roomCount.quadrupleRoomCount">
                    <div class="input-group-append mr-2">
                      <button class="btn btn-outline-primary" @click="addCount(index,'quadrupleRoom')">+</button>
                    </div>
                    {{item.unit}}
                  </div>
                </div>
              </div>
              <div class="col-md-2 d-flex align-items-center">
                <button class="btn btn-outline-danger" @click="removeCartHotel(index)">刪除</button>
              </div>
            </div>
          </div>
          <h3 class="d-flex justify-content-between my-4">金額: <span>TWD <span class="text-success">{{computeAmount | moneyFilter}}</span></span></h3>
          <hr class="bg-success">
        </div>
        <div class="col-8">
          <h3>顧客資訊</h3>
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="sumbitForm" class="mt-4 w-75">
              <div class="form-group">
                <validation-provider rules="required" v-slot="{errors,classes}">
                  <label for="customerOrderName">收件人姓名*</label>
                  <input type="text" class="form-control" :class="classes" id="customerOrderName " v-model="costomerInfo.name" name="姓名">
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group ">
                <validation-provider rules="required|email" v-slot="{errors,classes}">
                  <label for="customerOrderEmail ">Email address*</label>
                  <input type="tel " class="form-control " :class="classes" id="customerOrderEmail " placeholder=" " v-model="costomerInfo.email" name="email">
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group ">
                <validation-provider rules="required|min:8" v-slot="{errors,classes}">
                  <label for="customerOrderTel ">電話*</label>
                  <input type="number " class="form-control " :class="classes" id="customerOrderTel " placeholder=" " v-model="costomerInfo.tel" name="電話">
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group ">
                <validation-provider rules="required" v-slot="{errors,classes}">
                  <label for="customerOrderAddress ">地址*</label>
                  <input type="text" class="form-control " :class="classes" id="customerOrderAddress " placeholder=" " v-model="costomerInfo.address" name="地址">
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group ">
                <validation-provider rules="required" v-slot="{errors,classes}">
                  <label for="customerOrderPayment">購買方式*</label>
                  <select class="form-control " :class="classes" id="customerOrderPayment " v-model="costomerInfo.payment" name="購買方式">
                    <option selected disabled="disabled" value="">請選擇付款方式</option>
                    <option value="WebATM">WebATM</option>
                    <option value="ATM">ATM</option>
                    <option value="Credit">Credit</option>
                    <option value="ApplePay">ApplePay</option>
                    <option value="GooglePay">GooglePay</option>
                  </select>
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group ">
                <label for="customerOrderMessage ">留言</label>
                <textarea class="form-control " id="customerOrderMessage " rows="3 " v-model="costomerInfo.message"></textarea>
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-danger w-100" :disabled="invalid">確認送出訂單</button>
              </div>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { roomCountToBit, bitToRoomCount } from '@/room-count-transform.js';
export default {
  data () {
    return {
      cart: [],
      cartHotelsData: [],
      costomerInfo: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      isLoading: false,
    }
  },
  methods: {
    getCartData () {
      // this.cartHotelsData = [];
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.isLoading = true;
      this.$http.get(api)
        .then(res => {
          this.cart = res.data.data;
          this.cart.forEach((item, index) => {
            let hotelApi = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${item.product.id}`;
            this.$http.get(hotelApi)
              .then(res => {
                this.isLoading = false;
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
    removeCartHotel (index) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${this.cart[index].product.id}`;
      let hotel = {
        product: this.cartHotelsData[index].id,
      };
      this.isLoading = true;
      this.$http.delete(api, hotel)
        .then(res => {
          this.cartHotelsData.splice(index, 1);
          this.isLoading = false;
        })
        .catch(error => {
          console.log('error:', error);
          this.isLoading = false;
        })
    },
    addCount (index, roomType) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      let roomCount = this.cartHotelsData[index].roomCount;
      switch (roomType) {
        case 'doubleRoom': {
          roomCount.doubleRoomCount += 1;
          break;
        }
        case 'tripleRoom': {
          roomCount.tripleRoomCount += 1;
          break;
        }
        case 'quadrupleRoom': {
          roomCount.quadrupleRoomCount += 1;
          break;
        }
      };
      let quantity = roomCountToBit(roomCount.doubleRoomCount, roomCount.tripleRoomCount, roomCount.quadrupleRoomCount);
      let hotel = {
        product: this.cartHotelsData[index].id,
        quantity
      };
      this.isLoading = true;
      this.$http.patch(api, hotel)
        .then(res => {
          this.cartHotelsData[index].roomCount = bitToRoomCount(res.data.data.quantity);
          this.isLoading = false;
        })
        .catch(error => {
          console.log('error:', error);
          this.isLoading = false;
        });
    },
    reduceCount (index, roomType) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      let roomCount = this.cartHotelsData[index].roomCount;
      switch (roomType) {
        case 'doubleRoom': {
          roomCount.doubleRoomCount -= 1;
          break;
        }
        case 'tripleRoom': {
          roomCount.tripleRoomCount -= 1;
          break;
        }
        case 'quadrupleRoom': {
          roomCount.quadrupleRoomCount -= 1;
          break;
        }
      };
      let quantity = roomCountToBit(roomCount.doubleRoomCount, roomCount.tripleRoomCount, roomCount.quadrupleRoomCount);
      if (quantity === 0) {
        this.removeCartHotel(index);
      } else {
        let hotel = {
          product: this.cartHotelsData[index].id,
          quantity
        };
        this.isLoading = true;
        this.$http.patch(api, hotel)
          .then(res => {
            this.cartHotelsData[index].roomCount = bitToRoomCount(res.data.data.quantity);
            this.isLoading = false;
          })
          .catch(error => {
            console.log('error:', error);
            this.isLoading = false;
          });
      }
    },
    sumbitForm () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.post(api, this.costomerInfo)
        .then(res => {
          this.$router.push({
            name: 'Customer Order',
            params: {
              orderId: res.data.data.id,
              amount: this.computeAmount,
            }
          });
        })
        .catch(error => {
          console.log('error:', error);
        })
    }
  },
  created () {
    this.getCartData();
  },
  computed: {
    computeAmount () {
      if (this.cartHotelsData.length) {
        return this.cartHotelsData.reduce((accumulator, item) => {
          return accumulator +
          item.roomCount.doubleRoomCount * item.price +
          item.roomCount.tripleRoomCount * item.options.roomPrice.tripleRoomPrice +
          item.roomCount.quadrupleRoomCount * item.options.roomPrice.quadrupleRoomPrice
        }, 0);
      } else {
        return 0;
      }
    }
  }
};
</script>

<style lang="scss">
.hotel-room-count {
    max-width: 60px;
}
</style>
