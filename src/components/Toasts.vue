<template>
  <div aria-live="polite" aria-atomic="true"  style="position: fixed; top: 20px; right: 10px; min-width: 300px; z-index: 110000;">
    <!-- Then put toasts within -->
    <div class="toast fade show mb-2 border border-primary" role="alert" aria-live="assertive" aria-atomic="true" v-for="(item,index) in messages" :key="index">
      <div class="toast-header">
        <font-awesome-icon v-if="item.status === 'success'" class="h4 text-success mr-3" :icon="['fas', 'check-circle']"/>
        <font-awesome-icon v-else-if="item.status === 'warning'" class="h4 text-warning mr-3" :icon="['fas', 'exclamation-triangle']"/>
        <strong class="mr-auto">GoHome Notify</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" @click="closeToasts(index)">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        {{item.message}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toasts',
  data () {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage (status, message) {
      // 時間戳記
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push(
        {
          message,
          status,
          timestamp,
        });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessageWithTiming (timestamp) {
      setTimeout(() => {
        this.messages.forEach((item, index) => {
          if (item.timestamp === timestamp) {
            this.messages.splice(index, 1);
          }
        });
      }, 5000);
    },
    closeToasts (index) {
      this.messages.splice(index, 1);
    }
  },
  created () {
    this.$bus.$on('pushmessage', (status, message) => {
      this.updateMessage(status, message);
    });
  }
}
</script>

<style lang='scss'>
</style>
