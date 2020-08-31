<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container  align-items-end ">
        <a class="navbar-brand" href="#"><img src="../../../public/logo_transparent.png" alt="" width="100"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul class="navbar-nav nav-menu">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-white h5">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link text-white h5">去訂房</router-link>
            </li>
            <li class="nav-item">
              <cart-menu></cart-menu>
            </li>
            <li class="nav-item">
              <router-link to="/admin" class="nav-link text-white h5">後台管理</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="bg-primary p-4 mt-5 text-white">
      <div class="container d-flex justify-content-center">
        <div>本平台提供訂房之服務</div>
        <ul class="text-left">
          <li>聯絡我們 : <a href="tel:+886-2-24341341" class="text-white">02-2434-1341</a></li>
          <li>地址 : <a href="https://goo.gl/maps/SVxJXsa8UjMXaauN7" target="_blank" class="text-white">台北市大安區員林路一段8號</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue';
import cartMenu from '@/components/CartMenu.vue';
export default {
  components: {
    'cart-menu': cartMenu,
  }
};
</script>
<style lang="scss">
.nav-menu{
  a{
    &:hover{
      color: #13c5bd !important;
    }
  }
}
</style>
