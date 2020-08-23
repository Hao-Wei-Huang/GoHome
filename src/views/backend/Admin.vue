<template>
  <div id="app">
    <div id="nav">
      <router-link to="/admin">首頁</router-link>|
      <router-link to="/admin/customer">顧客資訊</router-link>|
      <router-link to="/admin/cupon">優惠卷</router-link>|
      <router-link to="/admin/login">登入</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Admin',
  data () {
    return {
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
