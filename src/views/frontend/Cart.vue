<template>
  <div class="content text-left">
    <loading :active.sync="isLoading" ></loading>
    <div class="container">
      <div class="row text-md-center text-left my-5">
        <div class="col-md-4">
          <div class="alert alert-success alert-rounded" role="alert">
            <span class="circle mr-2 text-center">1</span>選擇旅館
          </div>
        </div>
        <div class="col-md-4">
          <div class="alert alert-muted alert-rounded" role="alert">
            <span class="circle mr-2 text-center">2</span>確認訂單並付款
          </div>
        </div>
        <div class="col-md-4">
          <div class="alert alert-muted alert-rounded" role="alert">
            <span class="circle mr-2 text-center">3</span>完成訂房
          </div>
        </div>
      </div>
      <div class="row flex-column align-items-center">
        <div class="col-lg-8 col-sm-10">
          <div class="card bg-co-primary">
            <div class="card-header">
              <h2>
                <button class="btn btn-link btn-block text-left text-white" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  顯示訂房細節
                </button>
              </h2>
            </div>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
            <div class="card mb-3 bg-shadow pb-2 pb-md-0" v-for="(item,index) in cartHotelsData" :key="item.id">
              <div class="row">
                <div class="col-md-5">
                  <div class="bg-md-image h-100" :style='`background-image:url(${item.imageUrl[0]})`'></div>
                </div>
                <div class="col-md-7">
                  <div class="card-body d-flex flex-column justify-content-center h-100">
                    <h5 class="card-title d-flex">{{item.title}}<button class="btn btn-outline-danger ml-auto align-self-center" @click="removeCartHotel(index)"><font-awesome-icon :icon="['fas', 'trash']"/></button></h5>
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
              </div>
            </div>
          </div>
          <h3 class="d-flex justify-content-between my-4">金額: <span>TWD <span class="text-success">{{computeAmount | moneyFilter}}</span></span></h3>
          <hr class="bg-success">
        </div>
        <div class="col-lg-8 col-sm-10">
          <h3>顧客資訊</h3>
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="sumbitForm" class="mt-4">
              <div class="form-row">
                <div class="col-6">
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{errors,classes}">
                      <label for="customerOrderName">收件人姓名*</label>
                      <input type="text" class="form-control" :class="classes" id="customerOrderName " v-model="costomerInfo.name" name="姓名">
                      <span class="invalid-feedback">{{errors[0]}}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group ">
                    <validation-provider rules="required|email" v-slot="{errors,classes}">
                      <label for="customerOrderEmail ">電子信箱*</label>
                      <input type="tel " class="form-control " :class="classes" id="customerOrderEmail " placeholder=" " v-model="costomerInfo.email" name="email">
                      <span class="invalid-feedback">{{errors[0]}}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group ">
                    <validation-provider rules="required|min:8" v-slot="{errors,classes}">
                      <label for="customerOrderTel ">電話*</label>
                      <input type="number " class="form-control " :class="classes" id="customerOrderTel " placeholder=" " v-model="costomerInfo.tel" name="電話">
                      <span class="invalid-feedback">{{errors[0]}}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-6">
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
                </div>
                <div class="col-12">
                  <div class="form-group ">
                    <validation-provider rules="required" v-slot="{errors,classes}">
                      <label for="customerOrderAddress ">地址*</label>
                      <input type="text" class="form-control " :class="classes" id="customerOrderAddress " placeholder=" " v-model="costomerInfo.address" name="地址">
                      <span class="invalid-feedback">{{errors[0]}}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group ">
                    <label for="customerOrderMessage">留言</label>
                    <textarea class="form-control " id="customerOrderMessage " rows="3 " v-model="costomerInfo.message"></textarea>
                  </div>
                </div>
                <div class="col-12 d-flex">
                  <router-link to="/products" class="btn btn-outline-primary mr-auto">再去逛逛</router-link>
                  <button type="submit" class="btn btn-danger" :disabled="invalid">確認送出訂單</button>
                </div>
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
                res.data.data.roomCount = bitToRoomCount(item.quantity);
                this.cartHotelsData.push(res.data.data);
                this.isLoading = false;
              })
              .catch(res => {
                console.log('error:', res);
                this.isLoading = false;
              })
          });
        })
        .catch(res => {
          console.log('error:', res);
        })
    },
    removeCartHotel (index) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${this.cartHotelsData[index].id}`;
      let hotel = {
        product: this.cartHotelsData[index].id,
      };
      this.isLoading = true;
      this.$http.delete(api, hotel)
        .then(res => {
          this.cartHotelsData.splice(index, 1);
          this.$bus.$emit('updateCart');
          this.isLoading = false;
        })
        .catch(error => {
          console.log('error:', error);
          this.isLoading = false;
        });
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
          this.$bus.$emit('updateCart');
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
            this.$bus.$emit('updateCart');
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
.alert-rounded{
  border-radius: 30px;
}
.circle{
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #13c5bd;
  color: #fff;
}
</style>
