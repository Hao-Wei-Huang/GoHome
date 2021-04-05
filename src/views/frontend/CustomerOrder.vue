<template>
  <div>
    <loading :active.sync="isLoading" >
      <font-awesome-icon class="h1 text-primary ld ld-bounce" :icon="['fas', 'home']"/>
    </loading>
    <div class="container">
      <div class="row text-md-center text-left my-3 my-md-5">
        <div class="col-md-4">
          <div class="alert alert-dark alert-rounded" role="alert">
            <span class="circle mr-2 text-center">1</span>選擇旅館
          </div>
        </div>
        <div class="col-md-4">
          <div class="alert alert-success alert-rounded order-comfirmation" role="alert">
            <span class="circle mr-2 text-center">2</span>確認訂單並付款
          </div>
        </div>
        <div class="col-md-4">
          <div class="alert alert-muted alert-rounded finished-reservation" role="alert">
            <span class="circle mr-2 text-center">3</span>完成訂房
          </div>
        </div>
      </div>
      <div class="row flex-column align-items-center mb-3 mb-md-5">
        <div class="col-lg-6 col-md-8">
          <section class="border p-3">
            <h3 class="h4 h3-md mb-3">旅館訂單資訊</h3>
            <table class="w-100 h6 h5-md text-left">
              <tbody>
                <tr class="border-top border-muted">
                  <th style="width:180px">訂單編號</th>
                  <td class="py-3" style="word-break: break-all;">{{ order.id }}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">訂單成立時間</th>
                  <td>{{ order.created.datetime }}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">付款狀態</th>
                  <td>
                    <span v-if="order.paid" class="text-success"><font-awesome-icon class="text-success mr-2" :icon="['fas', 'check-circle']"/>已付款</span>
                    <span v-else class="text-muted">未付款</span>
                  </td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">旅館項目</th>
                  <td>
                    <div v-for="product in order.products" :key="product.product.title">
                      {{ product.product.title }} : {{ computedRoomCount(product.quantity) }}{{ product.product.unit }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="py-3">總計:</th>
                  <td class="text-right h5 h4-md">TWD <span class="text-success">{{ amount | moneyFilter }}</span></td>
                </tr>
              </tbody>
            </table>
            <router-link to="/products" v-if="isCheckout" class="btn btn-success w-100 mt-3">繼續逛逛</router-link>
            <button type="button" v-else class="btn btn-danger w-100 mt-3" @click="checkout">前往前帳</button>
          </section>
        </div>
        <div class="col-lg-6 col-md-8 text-left mt-5">
          <section class="p-3 border">
            <h3 class="h4 h3-md mb-3">顧客資訊</h3>
            <table class="w-100 h6 h5-md text-left">
              <tbody>
                <tr class="border-top border-muted">
                  <th class="py-3" style="width:180px">姓名</th>
                  <td style="word-break: break-all;">{{ order.user.name }}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">信箱帳號</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">付款方式</th>
                  <td>{{ order.payment }}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">留言</th>
                  <td>{{ order.message }}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bitToRoomCount } from '@/room-count-transform.js'
export default {
  data () {
    return {
      order: {
        user: {},
        created: {}
      },
      orderId: '',
      amount: '',
      isCheckout: false,
      isLoading: false
    }
  },
  methods: {
    getOrderId () {
      this.orderId = this.$route.params.orderId
      this.amount = this.$route.params.amount
    },
    getOrder () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.$http.get(api)
        .then(res => {
          this.order = res.data.data
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
        })
    },
    computedRoomCount (quantity) {
      const roomCount = bitToRoomCount(quantity)
      return roomCount.doubleRoomCount + roomCount.tripleRoomCount + roomCount.quadrupleRoomCount
    },
    checkout () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.$http.post(api)
        .then(res => {
          this.isLoading = false
          this.getOrder()
          this.isCheckout = true
          // document.querySelector('.order-comfirmation').classList.remove('alert-success')
          // document.querySelector('.order-comfirmation').classList.add('alert-dark')
          // document.querySelector('.finished-reservation').classList.remove('alert-muted')
          // document.querySelector('.finished-reservation').classList.add('alert-success')
          this.$bus.$emit('updateCart')
          this.$router.push('/finished_customer_order')
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
        })
    }
  },
  created () {
    this.getOrderId()
    this.getOrder()
  }
}

</script>
<style lang='scss'>
</style>
