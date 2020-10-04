<template>
    <div>
    <div class="modal fade text-left" id="modifiedHotelModal" tabindex="-1" role="dialog" aria-labelledby="modifiedHotelModal" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-white">
                    <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <validation-observer v-slot="{invalid}">
                            <form>
                                <div class="form-row">
                                    <div class="col-5">
                                      <div class="form-group">
                                        <label for="modifiedHotelModalFile">上傳照片</label>
                                        <input type="file" class="form-control-file" id="modifiedHotelModalFile" @change="uploadFile">
                                      </div>
                                      <div class="form-group">
                                        <div class="input-group">
                                          <input type="text" class="form-control" id="modifiedHotelModalImgUrl" v-model="imageUrl" name="圖片網址">
                                          <div class="input-group-append">
                                            <button class="btn btn-outline-danger rounded-right" type="button" @click="removeImage" :disabled="imageUrl == ''">刪除</button>
                                          </div>
                                        </div>
                                      </div>
                                      <a href="#" v-for="item in modifiedHotel.imageUrl" :key="item" @click.prevent="showImage(item)"><img class="w-25 m-2" :src="item" alt="飯店圖片"></a>
                                    </div>
                                    <div class="col-7">
                                        <div class="row">
                                          <div class="col-6">
                                            <div class="form-group">
                                                <validation-provider rules="required" v-slot="{errors,classes}">
                                                    <label for="modifiedHotelModalHotelName">飯店名稱</label>
                                                    <input type="text" class="form-control" :class="classes" id="modifiedHotelModalHotelName" v-model="modifiedHotel.title" name="飯店名稱">
                                                    <span class="invalid-feedback">{{ errors[0] }}</span>
                                                </validation-provider>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="form-group form-check">
                                              <input type="checkbox" class="form-check-input" id="modifiedHotelModalIsLaunch" v-model="modifiedHotel.enabled" name="啟用">
                                              <label class="form-check-label" for="modifiedHotelModalIsLaunch">是否啟用</label>
                                            </div>
                                          </div>
                                          <div class="col-12">
                                            <div class="form-row">
                                              <div class="form-group col-4">
                                                <validation-provider rules="required" v-slot="{errors,classes}">
                                                  <label for="modifiedHotelModalHotelAddressCity">縣市</label>
                                                  <select class="form-control" :class="classes" id="modifiedHotelModalHotelAddressCity" name="縣市" v-model="modifiedHotel.options.address.city">
                                                    <option disabled value="">請選擇</option>
                                                    <option value="台北市">台北市</option>
                                                    <option value="桃園市">桃園市</option>
                                                    <option value="台中市">台中市</option>
                                                    <option value="嘉義縣">嘉義縣</option>
                                                    <option value="台南市">台南市</option>
                                                    <option value="高雄市">高雄市</option>
                                                    <option value="屏東縣">屏東縣</option>
                                                  </select>
                                                  <span class="invalid-feedback">{{ errors[0] }}</span>
                                                </validation-provider>
                                              </div>
                                              <div class="form-group col-8">
                                                <validation-provider rules="required" v-slot="{errors,classes}">
                                                  <label for="modifiedHotelModalHotelAddressRoad">地址</label>
                                                  <input type="text" class="form-control" :class="classes" id="modifiedHotelModalHotelAddressRoad" v-model="modifiedHotel.options.address.road" name="地址">
                                                  <span class="invalid-feedback">{{ errors[0] }}</span>
                                                </validation-provider>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-12">
                                            <validation-provider rules="required" v-slot="{errors,classes}">
                                              <label for="modifiedHotelModalHotelAddressUrl">gooogle map url</label>
                                              <input type="text" class="form-control" :class="classes" id="modifiedHotelModalHotelAddressUrl" v-model="modifiedHotel.options.address.googleMapUrl" name="gooogle map url">
                                              <span class="invalid-feedback">{{ errors[0] }}</span>
                                            </validation-provider>
                                          </div>
                                          <div class="col-6">
                                            <div class="form-group">
                                              <validation-provider rules="required" v-slot="{errors,classes}">
                                                <label for="modifiedHotelModalHotelCategory">分類</label>
                                                <input type="text" class="form-control" :class="classes" id="modifiedHotelModalHotelCategory" v-model="modifiedHotel.category" name="分類">
                                                <span class="invalid-feedback">{{ errors[0] }}</span>
                                              </validation-provider>
                                            </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelUnit">單位</label>
                                                      <input type="text" class="form-control" :class="classes" id="modifiedHotelModalHotelUnit" v-model="modifiedHotel.unit" name="單位">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelOriginPrice">雙人房原價</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalHotelOriginPrice" v-model.number="modifiedHotel.origin_price" name="原價">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelPrice">雙人房售價</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalHotelPrice" v-model.number="modifiedHotel.price" name="售價">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelTripleRoomOriginPrice">三人房原價</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalHotelTripleRoomOriginPrice" v-model.number="modifiedHotel.options.roomPrice.tripleRoomOriginPrice" name="原價">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelTripleRoomPrice">三人房售價</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalHotelTripleRoomPrice" v-model.number="modifiedHotel.options.roomPrice.tripleRoomPrice" name="售價">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelQuadrupleRoomOriginPrice">四人房原價</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalHotelQuadrupleRoomOriginPrice" v-model.number="modifiedHotel.options.roomPrice.quadrupleRoomOriginPrice" name="原價">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelQuadrupleRoomPrice">四人房售價</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalHotelQuadrupleRoomPrice" v-model.number="modifiedHotel.options.roomPrice.quadrupleRoomPrice" name="售價">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalAvailableRoomCount">空房數</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalAvailableRoomCount" v-model="modifiedHotel.options.availableRoomCount" name="空房數">
                                                      <span class="invalid-feedback">{{ errors[0] }}</span>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-6">
                                              <div class="form-group">
                                                  <validation-provider rules="required" v-slot="{errors,classes}">
                                                      <label for="modifiedHotelModalHotelRating">評價</label>
                                                      <input type="number" class="form-control" :class="classes" id="modifiedHotelModalHotelRating" v-model="modifiedHotel.options.hotelRating" name="評價">
                                                      <small class="invalid-feedback">{{ errors[0] }}</small>
                                                  </validation-provider>
                                              </div>
                                          </div>
                                          <div class="col-12">
                                            <hr>
                                          </div>
                                          <div class="col-12">
                                            <h6 class="mb-2">飯店設施</h6>
                                            <div class="form-check form-check-inline">
                                              <input class="form-check-input" type="checkbox" id="breakfast" value="breakfast" v-model="modifiedHotel.options.facilities.isBreakfast">
                                              <label class="form-check-label" for="breakfast">提供早餐</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                              <input class="form-check-input" type="checkbox" id="wifi" value="wifi" v-model="modifiedHotel.options.facilities.isWifi">
                                              <label class="form-check-label" for="wifi">免費無線網路</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                              <input class="form-check-input" type="checkbox" id="parking" value="parking" v-model="modifiedHotel.options.facilities.isParking">
                                              <label class="form-check-label" for="parking">有停車場</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                              <input class="form-check-input" type="checkbox" id="smokeBan" value="smokeban" v-model="modifiedHotel.options.facilities.isSmokeBan">
                                              <label class="form-check-label" for="smokeBan">禁止吸菸</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                              <input class="form-check-input" type="checkbox" id="pet" value="pet" v-model="modifiedHotel.options.facilities.isPen">
                                              <label class="form-check-label" for="pet">寵物入住</label>
                                            </div>
                                          </div>
                                          <div class="col-12">
                                            <hr>
                                          </div>
                                          <div class="col-12">
                                            <div class="form-group">
                                                <validation-provider rules="required" v-slot="{errors,classes}">
                                                    <label for="modifiedHotelHotelContent">飯店描述</label>
                                                    <textarea class="form-control" :class="classes" id="modifiedHotelHotelContent" rows="3" placeholder="請描述飯店相關地理位置及優勢" v-model="modifiedHotel.content" name="描述"></textarea>
                                                    <span class="invalid-feedback">{{ errors[0] }}</span>
                                                </validation-provider>
                                            </div>
                                          </div>
                                          <div class="col-12">
                                            <div class="form-group">
                                                <validation-provider rules="required" v-slot="{errors,classes}">
                                                    <label for="modifiedHotelDescription">詳細說明</label>
                                                    <textarea class="form-control" :class="classes" id="modifiedHotelDescription" rows="3" placeholder="細節補充說明" v-model="modifiedHotel.description" name="詳述"></textarea>
                                                    <span class="invalid-feedback">{{ errors[0] }}</span>
                                                </validation-provider>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">取消</button>
                                    <button type="submit" class="btn btn-success" data-dismiss="modal" @click="comfirmModifiedHotel" :disabled="invalid">確認</button>
                                </div>
                            </form>
                        </validation-observer>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="removeHotelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {{ modalContent }}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="comfirmModifiedHotel">確認</button>
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
      modifiedHotel: {
        id: '',
        title: '',
        category: '',
        content: '',
        imageUrl: [],
        enabled: '',
        origin_price: '',
        price: '',
        unit: '',
        options: {
          roomPrice: {},
          facilities: {},
          address: {
            city: ''
          }
        }
      },
      imageUrl: '',
      modalTitle: '',
      modalContent: '',
      type: ''
    }
  },
  methods: {
    comfirmModifiedHotel () {
      switch (this.type) {
        case 'edit':
        {
          const index = document.querySelector('#modifiedHotelModal').dataset.index
          const tempHotel = JSON.parse(JSON.stringify(this.modifiedHotel))
          this.$emit('comfirmmodifiedhotel', index, tempHotel, this.type)
          break
        }
        case 'creation':
        {
          const tempHotel = JSON.parse(JSON.stringify(this.modifiedHotel))
          console.log(tempHotel)
          this.$emit('comfirmmodifiedhotel', 0, tempHotel, this.type)
          break
        }
        case 'removal':
        {
          const index = document.querySelector('#removeHotelModal').dataset.index
          const tempHotel = JSON.parse(JSON.stringify(this.modifiedHotel))
          this.$emit('comfirmmodifiedhotel', index, tempHotel, this.type)
          break
        }
      }
    },
    showImage (imageUrl) {
      this.imageUrl = imageUrl
    },
    uploadFile () {
      const uploadedFile = document.querySelector('#modifiedHotelModalFile').files[0]
      const formData = new FormData()
      formData.append('file', uploadedFile)
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          this.modifiedHotel.imageUrl.push(res.data.data.path)
        })
        .catch(error => {
          this.$bus.$emit('pushmessage', 'warning', `連線錯誤 : ${error}`)
        })
    },
    removeImage () {
      this.modifiedHotel.imageUrl.forEach((item, index) => {
        if (item === this.imageUrl) {
          this.modifiedHotel.imageUrl.splice(index, 1)
          this.imageUrl = ''
        }
      })
    }
  },
  created () {

  },
  mounted () {
    // Receive data from vue through bus
    this.$bus.$on('createHotelData', () => {
      this.modalTitle = '新增飯店資訊'
      this.type = 'creation'
      // eslint-disable-next-line no-undef
      $('#modifiedHotelModal').modal('show')
    })
    // Receive data from vue through bus
    this.$bus.$on('editHotelData', (index, modifiedHotel) => {
      this.modifiedHotel = modifiedHotel
      this.modalTitle = '編輯飯店資訊'
      this.type = 'edit'
      document.querySelector('#modifiedHotelModal').dataset.index = index
      // eslint-disable-next-line no-undef
      $('#modifiedHotelModal').modal('show')
    })
    // Receive data from table component through bus
    this.$bus.$on('removeHotelData', (index, modifiedHotel) => {
      this.modalTitle = `確定刪除${modifiedHotel.title}?`
      this.modalContent = `有${modifiedHotel.options.hotelRating}顆星的評價喔,不再考慮嗎?`
      this.type = 'removal'
      document.querySelector('#removeHotelModal').dataset.index = index
      // eslint-disable-next-line no-undef
      $('#removeHotelModal').modal('show')
    })
    // reset modal
    // eslint-disable-next-line no-undef
    $('#modifiedHotelModal').on('hidden.bs.modal', () => {
      this.modifiedHotel = {
        id: '',
        title: '',
        category: '',
        content: '',
        imageUrl: [],
        enabled: '',
        origin_price: '',
        price: '',
        unit: '',
        options: {
          roomPrice: {},
          facilities: {},
          address: {
            city: ''
          }
        }
      }
      this.imageUrl = ''
    })
  }
}

</script>
<style lang='scss'>
</style>
