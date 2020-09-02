<template>
  <div id="app">
    <toasts></toasts>
    <router-view/>
  </div>
</template>

<script>
import toasts from '@/components/Toasts.vue';
export default {
  components: {
    toasts,
  },
  data () {
    return {};
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
