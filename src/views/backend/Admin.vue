<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container  align-items-end ">
        <a class="navbar-brand" href="#">後台管理</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul class="navbar-nav nav-menu">
            <li class="nav-item">
              <router-link to="/admin" class="nav-link text-white h5">產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/customer_order" class="nav-link text-white h5">訂單列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/storage" class="nav-link text-white h5">圖片儲存列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/cupon" class="nav-link text-white h5">優惠卷</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/login" class="nav-link text-white h5">登入</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view :token='token' v-if="checkSuccess"></router-view>
  </div>
</template>
<script>
export default {
  name: 'Admin',
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)adminToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http.post(api, { api_token: this.token })
        .then(response => {
          this.checkSuccess = true
        })
        .catch(error => {
          this.$router.push('/login')
          console.log(error)
        })
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
<style lang="scss">
#app {
  text-align: center;
}
.nav-menu{
  a{
    &:hover{
      color: #13c5bd !important;
    }
  }
}
</style>
