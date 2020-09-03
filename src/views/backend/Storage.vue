<template>
  <div content mt-3>
    <div class="container">
      <table class="table mt-4">
        <thead class="bg-primary text-white">
            <tr>
                <th scope="col" style="width: 300px;">縮圖</th>
                <th scope="col">網址</th>
                <th scope="col" style="width: 130px;">編輯</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in storage" :key="item.id">
            <th scope="row"><div class="bg-md-image" :style="`background-image:url(${item.path})`"></div></th>
            <td style="word-break: break-all;">{{item.path}}</td>
            <td>
              <button type="button" class="btn btn-outline-danger" @click="removeImage(item.id)"><font-awesome-icon :icon="['fas', 'trash']"/></button>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :pages="pagination" @switchedpage="getStorage"></pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      storage: [],
      pagination: {}
    };
  },
  methods: {
    getStorage (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http.get(api, { params: { page } })
        .then(res => {
          this.storage = res.data.data;
          this.pagination = res.data.meta.pagination;
        })
        .catch(error => {
          console.log('error:', error);
        });
    },
    removeImage (id) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${id}`;
      this.$http.delete(api)
        .then(res => {
          this.getStorage();
        })
        .catch(error => {
          console.log('error:', error);
        });
    }
  },
  created () {
    this.getStorage();
  }
}

</script>
<style lang='scss'>
</style>
