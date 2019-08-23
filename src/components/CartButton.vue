<template>
  <b-button class="cart-btn" to="/cart" variant="primary">
    <span class="mdi mdi-cart"></span>
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