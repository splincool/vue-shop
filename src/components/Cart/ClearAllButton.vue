<template>
  <div 
    @click="clearAll" 
    class="d-flex justify-content-end clear-all"
  >
    <span>Clear all</span>
    <span class="mdi mdi-close mdi-18px"></span>
  </div>
</template>

<script>
export default {
  name: 'clearAllButton',
  methods: {
    clearAll () {
      this.$store.commit('deleteAllFromCart')
    }
  }
}
</script>

<style scoped>
  .clear-all {
    cursor: pointer;
  }
</style>