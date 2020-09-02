<template>
  <div class="content text-left">
    <div class="container">
      <h2 class="text-center my-3">確認訂單並付款</h2>
      <div class="row justify-content-center">
        <div class="col-5">
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="sumbitForm">
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
                  <label for="customerOrderPayment">購買方式</label>
                  <select class="form-control " :class="classes" id="customerOrderPayment " v-model="costomerInfo.payment" name="購買方式">
                    <option selected disabled="disabled">請選擇付款方式</option>
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
                <button type="submit" class="btn btn-primary px-5" :disabled="invalid">確認送出</button>
              </div>
            </form>
          </validation-observer>
        </div>
        <div class="col-4 ">
          <div class="cart-money-list shadow p-3 ">
              <h3>訂單金額</h3>
              <hr>
              <table class="w-100 ">
                  <tbody>
                      <tr v-for="(item) in cart " :key="item.product.id ">
                          <td class="py-2 ">{{item.product.title}}</td>
                          <td class="py-2 ">{{item.quantity}}間</td>
                          <td class="text-right py-2 ">${{item.product.price | moneyFilter}}</td>
                      </tr>
                  </tbody>
              </table>
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
      costomerInfo: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
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
    sumbitForm () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.post(api, this.costomerInfo)
        .then(res => {
          console.log('success', res);
        })
        .catch(res => {
          console.log('error:', res);
        })
    }
  },
  created () {
    this.getCartData();
  }
}

</script>
<style lang='scss'>
.cart-money-list {
    border-top: 3px solid #007bff;
    border-radius: 3px;
}
</style>
