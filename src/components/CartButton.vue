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