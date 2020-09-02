<template>
  <div class="content">
    <div class="container">
      <h2 class="text-center my-3">確認訂單並付款</h2>
      <div class="row flex-column align-items-center">
        <div class="col-6 text-left">
          <section class="bg-shadow p-3">
            <h3 class="mb-3">旅館訂單資訊</h3>
            <table class="w-100 h5">
              <tbody>
                <tr class="border-top border-muted">
                  <th class="py-3" style="width:180px">訂單編號</th>
                  <td style="word-break: break-all;">{{order.id}}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">訂單成立時間</th>
                  <td>{{order.created.datetime}}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">付款狀態</th>
                  <td>
                    <span v-if="order.paid" class="text-success">已付款</span>
                    <span v-else class="text-muted">未付款</span>
                  </td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">旅館項目</th>
                  <td>
                    <div v-for="product in order.products" :key="product.product.title">
                      {{product.product.title}} : {{computedRoomCount(product.quantity)}}{{product.product.unit}}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th class="py-3">總計:</th>
                  <td class="text-right h4">TWD <span class="text-success">{{amount | moneyFilter}}</span></td>
                </tr>
              </tbody>
            </table>
            <router-link to="/products" v-if="isCheckout" class="btn btn-success w-100 mt-3">繼續逛逛</router-link>
            <button type="button" v-else class="btn btn-danger w-100 mt-3" @click="checkout">前往前帳</button>
          </section>
        </div>
        <div class="col-6 text-left">
          <section class="p-3">
            <h3 class="mb-3">顧客資訊</h3>
            <table class="w-100 h5">
              <tbody>
                <tr class="border-top border-muted">
                  <th class="py-3" style="width:180px">姓名</th>
                  <td style="word-break: break-all;">{{order.user.name}}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">信箱帳號</th>
                  <td>{{order.user.email}}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">電話</th>
                  <td>{{order.user.tel}}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">付款方式</th>
                  <td>{{order.payment}}</td>
                </tr>
                <tr class="border-top border-muted">
                  <th class="py-3">留言</th>
                  <td>{{order.message}}</td>
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
import { bitToRoomCount } from '@/room-count-transform.js';
export default {
  data () {
    return {
      order: {
        user: {},
        created: {},
      },
      orderId: '',
      amount: '',
      isCheckout: false,
    };
  },
  methods: {
    getOrderId () {
      this.orderId = this.$route.params.orderId;
      this.amount = this.$route.params.amount;
    },
    getOrder () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.$http.get(api)
        .then(res => {
          this.order = res.data.data;
        })
        .catch(error => {
          console.log('error:', error);
        })
    },
    computedRoomCount (quantity) {
      let roomCount = bitToRoomCount(quantity);
      return roomCount.doubleRoomCount + roomCount.tripleRoomCount + roomCount.quadrupleRoomCount;
    },
    checkout () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;
      this.$http.post(api)
        .then(res => {
          this.getOrder();
          this.isCheckout = true;
        })
        .catch(error => {
          console.log('error:', error);
        })
    }
  },
  created () {
    this.getOrderId();
    this.getOrder();
  },
}

</script>
<style lang='scss'>
</style>
