<template>
  <b-button class="cart-btn d-flex align-items-start" to="/cart" variant="outline-light">
    <span class="mdi mdi-cart mdi-24px"></span>
    <b-badge variant="light">{{cartItemsCount}}</b-badge>
  </b-button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cartButton',
  computed: {
    ...mapGetters([
      'cartItemsCount'
    ])
  }
}
</script>

<style>
  @media only screen and (max-width: 1000px) {
    .cart-btn.btn-outline-light:hover {
      color: #f8f9fa;
      background-color: transparent;
    }
  }
</style>