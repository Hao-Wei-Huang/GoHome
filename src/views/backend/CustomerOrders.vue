<template>
    <div class="content mt-3">
        <loading :active.sync="isLoading" >
          <font-awesome-icon class="h1 text-primary ld ld-bounce" :icon="['fas', 'home']"/>
        </loading>
        <div class="container">
          <table class="table mt-4 text-left">
            <thead class="bg-primary text-white">
              <tr>
                <th scope="col" style="width: 160px;">下單時間</th>
                <th scope="col">購買款項</th>
                <th scope="col" style="width:120px;">付款方式</th>
                <th scope="col">應付金額</th>
                <th scope="col" style="width:150px;">是否付款</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in orders" :key="item.id">
                  <th scope="row">{{ item.created.datetime }}</th>
                  <td>
                    <div v-for="product in item.products" :key="product.product.title">
                      <span>{{ product.product.title }} 數量 : {{ product.quantity }}{{ product.product.unit }}</span>
                    </div>
                  </td>
                  <td>{{ item.payment }}</td>
                  <td class="text-right">${{ item.amount }}</td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" :id="item.id" @change="setOrderPayment(item)" v-model="item.paid">
                      <label class="custom-control-label text-success" v-if="item.paid" :for="item.id">已付款</label>
                      <label class="custom-control-label text-muted" v-else :for="item.id">尚未付款</label>
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
          <pagination :pages="pagination" @switchedpage="getOrders"></pagination>
        </div>
    </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      orders: [],
      pagination: {},
      isPaid: '',
      isLoading: false
    }
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders`
      this.$http.get(api, { params: { page } })
        .then(res => {
          this.orders = res.data.data
          this.pagination = res.data.meta.pagination
          this.isLoading = false
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = false
        })
    },
    setOrderPayment (order) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${order.id}/paid`
      if (order.paid) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${order.id}/unpaid`
      }
      this.$http.patch(api)
        .then(res => {
          this.getOrders(this.pagination.current_page)
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
        })
    }
  },
  created () {
    this.getOrders()
  }
}

</script>
<style lang='scss'>
// swith color
.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  background-color: #28a745;
  border-color:#28a745;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
