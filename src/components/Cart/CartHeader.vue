<template>
  <div class="cart-header d-flex align-items-center">
    <span class="mdi mdi-cart mdi-24px mr-2"></span>
    <h3 class="cart-header-text">your cart</h3> <!-- 300 -->
  </div>
</template>

<script>
export default {
  name: 'cartHeader'
}
</script>

<style scoped>
  .cart-header-text {
    font-size: 28px;
    font-weight: 300;
  }
</style>