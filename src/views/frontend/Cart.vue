<template>
  <div class="text-left">
    <loading :active.sync="isLoading" >
      <font-awesome-icon class="h1 text-primary ld ld-bounce" :icon="['fas', 'home']"/>
    </loading>
    <div class="container" v-if="cart.length">
      <div class="row text-md-center text-left my-3 my-md-5">
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
      <div class="row flex-column align-items-center pb-3 pb-md-5">
        <div class="col-lg-8 col-sm-10">
          <div class="card bg-light rounded-0">
            <div class="card-header border-0">
              <h2>
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#roomsDetail" aria-expanded="true">
                  顯示訂房細節
                </button>
              </h2>
            </div>
          </div>
          <div id="roomsDetail" class="collapse" aria-labelledby="headingOne">
            <div class="border" v-for="(item,index) in cartHotelsData" :key="item.id">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <div class="bg-md-image bg-cover h-100" :style='`background-image:url(${item.imageUrl[0]})`'></div>
                </div>
                <div class="col-md-7">
                  <div class="d-flex flex-column justify-content-center h-100 p-3">
                    <h5 class="d-flex">{{ item.title }}<button class="btn btn-outline-danger ml-auto align-self-center" @click="removeCartHotel(index)"><font-awesome-icon :icon="['fas', 'trash']"/></button></h5>
                    <h6 class="mb-1">奢華雙人房</h6>
                    <div class="input-group mb-3 align-items-center">
                      ${{ item.price | moneyFilter }} x
                      <div class="input-group-prepend ml-2">
                        <button class="btn btn-outline-primary" @click="reduceCount(index,'doubleRoom')" :disabled="item.room.doubleRoomCount <= 0">-</button>
                      </div>
                      <input type="text" class="form-control text-center hotel-room-count" v-model="item.room.doubleRoomCount" readonly>
                      <div class="input-group-append mr-2">
                        <button class="btn btn-outline-primary" @click="addCount(index,'doubleRoom')">+</button>
                      </div>
                      {{ item.unit }}
                    </div>
                    <h6 class="mb-1">頂級三人房</h6>
                    <div class="input-group mb-3 align-items-center">
                        ${{ item.options.roomPrice.tripleRoomPrice | moneyFilter }} x
                      <div class="input-group-prepend ml-2">
                        <button class="btn btn-outline-primary" @click="reduceCount(index,'tripleRoom')" :disabled="item.room.tripleRoomCount <= 0">-</button>
                      </div>
                      <input type="text" class="form-control text-center hotel-room-count" v-model="item.room.tripleRoomCount" readonly>
                      <div class="input-group-append mr-2">
                        <button class="btn btn-outline-primary" @click="addCount(index,'tripleRoom')">+</button>
                      </div>
                      {{ item.unit }}
                    </div>
                    <h6 class="mb-1">豪華四人房</h6>
                    <div class="input-group align-items-center">
                        ${{ item.options.roomPrice.quadrupleRoomPrice | moneyFilter }} x
                      <div class="input-group-prepend ml-2">
                        <button class="btn btn-outline-primary" @click="reduceCount(index,'quadrupleRoom')" :disabled="item.room.quadrupleRoomCount <= 0">-</button>
                      </div>
                      <input type="text" class="form-control text-center hotel-room-count" v-model="item.room.quadrupleRoomCount" readonly>
                      <div class="input-group-append mr-2">
                        <button class="btn btn-outline-primary" @click="addCount(index,'quadrupleRoom')">+</button>
                      </div>
                      {{ item.unit }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 class="d-flex justify-content-between my-4 h4 h3-md">金額: <span>TWD <span class="text-success">{{ amount | moneyFilter }}</span></span></h3>
          <hr class="bg-success">
        </div>
        <div class="col-lg-8 col-sm-10">
          <h3 class="h4 h3-md">顧客資訊</h3>
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="sumbitForm" class="mt-4">
              <div class="form-row">
                <div class="col-6">
                  <div class="form-group">
                    <validation-provider rules="required" v-slot="{errors,classes}">
                      <label for="customerOrderName">收件人姓名*</label>
                      <input type="text" class="form-control" :class="classes" id="customerOrderName" v-model="costomerInfo.name" name="姓名">
                      <span class="invalid-feedback">{{errors[0]}}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group ">
                    <validation-provider rules="required|email" v-slot="{errors,classes}">
                      <label for="customerOrderEmail">電子信箱*</label>
                      <input type="tel " class="form-control " :class="classes" id="customerOrderEmail" placeholder=" " v-model="costomerInfo.email" name="email">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group ">
                    <validation-provider rules="required|min:8" v-slot="{errors,classes}">
                      <label for="customerOrderTel">電話*</label>
                      <input type="number " class="form-control " :class="classes" id="customerOrderTel" placeholder=" " v-model="costomerInfo.tel" name="電話">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
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
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group ">
                    <validation-provider rules="required" v-slot="{errors,classes}">
                      <label for="customerOrderAddress">地址*</label>
                      <input type="text" class="form-control " :class="classes" id="customerOrderAddress" placeholder=" " v-model="costomerInfo.address" name="地址">
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group ">
                    <label for="customerOrderMessage">留言</label>
                    <textarea class="form-control " id="customerOrderMessage" rows="3 " v-model="costomerInfo.message"></textarea>
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
    <div class="container d-flex flex-column justify-content-center align-items-center sticky-footer"  v-if="!cart.length && isHttpConnect">
      <p class="h3 mb-4">尚未選擇旅館，GoHome 平台內有許多特色民宿與豪華酒店，請多參觀謝謝</p>
      <router-link to="/products" class="btn btn-outline-primary">再去逛逛</router-link>
    </div>
  </div>
</template>

<script>
import roomCountTransformation from '@/assets/js/room-count-transformation.js'
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
        message: ''
      },
      isLoading: false,
      isHttpConnect: false
    }
  },
  methods: {
    async getCartData () {
      this.isLoading = true
      const tempCartHotels = []
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      await this.$http.get(api)
        .then(res => {
          this.cart = res.data.data
          this.isHttpConnect = true
          this.isLoading = false
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = false
        })

      for (let i = 0; i < this.cart.length; i++) {
        const hotelApi = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${this.cart[i].product.id}`
        await this.$http.get(hotelApi)
          .then(res => {
            res.data.data.room = roomCountTransformation.decode(this.cart[i].quantity)
            tempCartHotels.push(res.data.data)
          })
          .catch(error => {
            this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          })
      }
      this.cartHotelsData = tempCartHotels
    },
    removeCartHotel (index) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${this.cartHotelsData[index].id}`
      const hotel = {
        product: this.cartHotelsData[index].id
      }
      this.$http.delete(api, hotel)
        .then(res => {
          this.getCartData()
          this.$bus.$emit('updateCart')
          this.isLoading = false
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = false
        })
    },
    addCount (index, roomType) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const room = this.cartHotelsData[index].room
      switch (roomType) {
        case 'doubleRoom': {
          room.doubleRoomCount += 1
          break
        }
        case 'tripleRoom': {
          room.tripleRoomCount += 1
          break
        }
        case 'quadrupleRoom': {
          room.quadrupleRoomCount += 1
          break
        }
      };
      this.isLoading = true
      const quantity = roomCountTransformation.encode(room)
      const hotel = {
        product: this.cartHotelsData[index].id,
        quantity
      }
      this.$http.patch(api, hotel)
        .then(res => {
          this.cartHotelsData[index].room = roomCountTransformation.decode(res.data.data.quantity)
          this.$bus.$emit('updateCart')
          this.isLoading = false
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = false
        })
    },
    reduceCount (index, roomType) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const room = this.cartHotelsData[index].room
      switch (roomType) {
        case 'doubleRoom': {
          room.doubleRoomCount -= 1
          break
        }
        case 'tripleRoom': {
          room.tripleRoomCount -= 1
          break
        }
        case 'quadrupleRoom': {
          room.quadrupleRoomCount -= 1
          break
        }
      };
      const quantity = roomCountTransformation.encode(room)
      if (quantity === 0) {
        this.removeCartHotel(index)
      } else {
        this.isLoading = true
        const hotel = {
          product: this.cartHotelsData[index].id,
          quantity
        }
        this.$http.patch(api, hotel)
          .then(res => {
            this.cartHotelsData[index].room = roomCountTransformation.decode(res.data.data.quantity)
            this.$bus.$emit('updateCart')
            this.isLoading = false
          })
          .catch(error => {
            this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
            this.isLoading = false
          })
      }
    },
    sumbitForm () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.$http.post(api, this.costomerInfo)
        .then(res => {
          this.$router.push({
            name: 'Customer Order',
            params: {
              orderId: res.data.data.id,
              amount: this.amount
            }
          })
          this.$bus.$emit('updateCart')
          this.isLoading = true
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = true
        })
    }
  },
  created () {
    this.getCartData()
  },
  computed: {
    amount () {
      if (this.cartHotelsData.length) {
        return this.cartHotelsData.reduce((accumulator, item) => {
          return accumulator +
          item.room.doubleRoomCount * item.price +
          item.room.tripleRoomCount * item.options.roomPrice.tripleRoomPrice +
          item.room.quadrupleRoomCount * item.options.roomPrice.quadrupleRoomPrice
        }, 0)
      } else {
        return 0
      }
    }
  }
}
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
  background-color:#208838;
  color: #fff;
}
</style>
