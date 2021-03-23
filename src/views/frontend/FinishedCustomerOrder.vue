<template>
  <div class="finished-order-banner d-flex justify-content-center align-items-center bg-cover">
      <div class="bg-light-primary p-3 p-md-5 text-white">
        <h2 class="h3 h2-md">完成訂房</h2>
        <p class="h5 h4-md mt-2 line-height-l">
          <font-awesome-icon class="text-success mr-2" :icon="['fas', 'check-circle']"/>已付款，感謝您的訂房!<br>
          期待您的入住
        </p>
        <button type="button" class="btn btn-outline-secondary mt-3" @click="goHotels (search)">再去逛逛</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: {
        destination: '台北市',
        range: {
          start: new Date(),
          end: new Date(new Date().getTime() + 86400000)
        }
      }
    }
  },
  methods: {
    goHotels (search) {
      if (this.$route.path === '/products') {
        return
      }
      const tempSearch = JSON.parse(JSON.stringify(search))
      tempSearch.range.start = search.range.start.getTime()
      tempSearch.range.end = search.range.end.getTime()
      this.$router.push({ path: '/products', query: { search: tempSearch } })
    }
  }
}

</script>
<style lang='scss'>
.finished-order-banner{
  height: calc(100vh - 110px);
  background-image: url("https://images.unsplash.com/photo-1584116831190-7a5b2765a30a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1914&q=80");
}
.bg-light-primary{
  background: rgba(31,28,63,0.7);
}
</style>
