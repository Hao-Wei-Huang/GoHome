<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div class="container align-items-md-end">
        <h1>
          <router-link to="/" class="logo navbar-brand d-block bg-cover text-hide">Go Home</router-link>
        </h1>
        <cart-menu class="ml-auto mr-3 d-block d-md-none"></cart-menu>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav" ref="navbarNav" @click="closeNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-white h5">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link text-white h5">去訂房</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/epidemic_discount" class="nav-link text-white h5">疫情優惠</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/customer_service" class="nav-link text-white h5">客服中心</router-link>
            </li>
            <li class="nav-item d-md-block d-none">
              <cart-menu></cart-menu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view class="sticky-footer"></router-view>
    <footer class="bg-primary p-4 text-white">
      <div class="container d-flex justify-content-center flex-column flex-md-row align-items-start">
        <div>本平台提供訂房之服務</div>
        <ul class="text-left ml-md-3">
          <li>聯絡我們 : <a href="tel:+886-2-24341341" class="text-white">02-2434-1341</a></li>
          <li>地址 : <a href="https://goo.gl/maps/SVxJXsa8UjMXaauN7" target="_blank" class="text-white">台北市大安區員林路一段8號</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import CartMenu from '@/components/CartMenu.vue'
export default {
  components: {
    CartMenu
  },
  methods: {
    closeNav () {
      this.$refs.navbarNav.classList.remove('show')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import '~@/assets/scss/utils/variables';
.logo{
  background-image: url('~@/../public/logo.png');
  width: 100px;
  height: 84px;
}
.nav-link{
  &.active{
    color: $secondary !important;
  }
  &:hover{
    color: $secondary !important;
  }
}
</style>
