<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': pages.current_page === 1}">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="switchPage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="(item) in pages.total_pages" :key="item" class="page-item" :class="{'active': item === pages.current_page}">
          <a class="page-link" href="#" @click.prevent="switchPage(item)">{{item}}</a>
        </li>
        <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="switchPage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['pages'],
  methods: {
    switchPage (switchedPage) {
      this.$emit('switchedpage', switchedPage);
    }
  },
}

</script>
<style lang='scss'>
</style>
