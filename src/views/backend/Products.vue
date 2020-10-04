<template>
  <div class="content mt-3">
    <loading :active.sync="isLoading" >
      <font-awesome-icon class="h1 text-primary ld ld-bounce" :icon="['fas', 'home']"/>
    </loading>
    <div class="container">
      <div class="text-right">
        <button class="btn btn-primary" @click="createHotelData"><font-awesome-icon class="mr-1" :icon="['fas', 'plus']"/>新增產品</button>
      </div>
      <table class="table mt-4 hotel-table">
          <thead class="bg-primary text-white">
              <tr>
                  <th scope="col" style="width: 100px;">分類</th>
                  <th scope="col">產品名稱</th>
                  <th scope="col" style="width:120px;">原價</th>
                  <th scope="col" style="width:120px;">售價</th>
                  <th scope="col" style="width:100px;">空房數</th>
                  <th scope="col" width="100px">是否啟用</th>
                  <th scope="col" width="150px">評價</th>
                  <th scope="col" style="width: 130px;">編輯</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in hotels" :key="item.title">
                  <th scope="row">{{item.category}}</th>
                  <td>{{item.title}}</td>
                  <td class="text-right">{{item.origin_price}}</td>
                  <td class="text-right">{{item.price}}</td>
                  <td class="text-right">
                      {{item.options.availableRoomCount}}
                  </td>
                  <!-- v-if v-else -->
                  <td class="text-center" style="font-size: 1.3rem;" v-if="item.enabled" :key="item.title"><font-awesome-icon class="text-success" :icon="['fas', 'check']"/></td>
                  <td class="text-center" style="font-size: 1.3rem;" v-else><font-awesome-icon class="text-danger" :icon="['fas', 'times']"/></td>
                  <!-- v-if v-else end -->
                  <td class="text-left">
                    <font-awesome-icon class="h6 text-warning" v-for="contant in Number(item.options.hotelRating)" :key="contant" :icon="['fas', 'star']"/>
                  </td>
                  <td>
                      <button type="button" class="btn btn-outline-success" @click="editHotelData(index)"><font-awesome-icon :icon="['fas', 'edit']"/></button>
                      <button type="button" class="btn btn-outline-danger" @click="removeHotelData(index)"><font-awesome-icon :icon="['fas', 'trash']"/></button>
                  </td>
              </tr>
          </tbody>
      </table>
      <pagination :pages="pagination" @switchedpage="getHotelData"></pagination>
    </div>
    <backend-modal @comfirmmodifiedhotel="comfirmModifiedHotel"></backend-modal>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import backendModal from '@/components/BackendModal.vue'
// import { roomCountToBit, bitToRoomCount } from '@/room-count-transform.js';
export default {
  components: {
    pagination,
    'backend-modal': backendModal
  },
  data () {
    return {
      hotels: [],
      pagination: {},
      isLoading: false
    }
  },
  methods: {
    getHotelData (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`
      this.isLoading = true
      this.$http.get(api, { params: { page } })
        .then(response => {
          this.hotels = response.data.data
          this.pagination = response.data.meta.pagination
          this.isLoading = false
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
          this.isLoading = false
        })
    },
    editHotelData (index) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.hotels[index].id}`
      this.$http.get(api)
        .then(response => {
          this.$bus.$emit('editHotelData', index, response.data.data)
        })
        .catch(res => {})
    },
    createHotelData () {
      console.log(this.$bus)
      this.$bus.$emit('createHotelData')
    },
    removeHotelData (index) {
      const tempHotel = JSON.parse(JSON.stringify(this.hotels[index]))
      this.$bus.$emit('removeHotelData', index, tempHotel)
    },
    comfirmModifiedHotel (index, modifiedHotel, type) {
      switch (type) {
        case 'edit':
        {
          const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.hotels[index].id}`
          this.$http.patch(api, modifiedHotel)
            .then(response => {
              this.getHotelData(pagination.current_page)
            })
            .catch(error => {
              this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
            })
          break
        }
        case 'creation':
        {
          const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`
          delete modifiedHotel.id
          this.$http.post(api, modifiedHotel)
            .then(response => {
              this.getHotelData(pagination.current_page)
            })
            .catch(error => {
              this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
            })
          break
        }
        case 'removal':
        {
          const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.hotels[index].id}`
          this.$http.delete(api)
            .then(response => {
              this.getHotelData(pagination.current_page)
            })
            .catch(error => {
              this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
            })
          break
        }
      }
    }
  },
  created () {
    this.getHotelData()
  }
}

</script>
<style lang='scss'>
</style>
