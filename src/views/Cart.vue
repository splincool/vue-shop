<template>
  <b-row>
    <b-col>
      <!-- Cart header section -->
      <b-row class="font-weight-bold mb-3 mt-1">
        <b-col sm="12">
          <CartHeader />
        </b-col>
      </b-row>

      <!-- Cart data section -->
      <CartBody v-if="cartItemsCount" />

      <!-- No data message -->
      <b-row v-else>
        <b-col>
          There are no items in your cart
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import CartHeader from '@/components/Cart/CartHeader.vue'
import CartBody from '@/components/Cart/CartBody.vue'
export default {
  name: 'cart',
  computed: {
    ...mapGetters([
      'cartItemsCount'
    ])
  },
  components: {
    CartHeader,
    CartBody
  }
}
</script>

<style scoped>
  .cart-header {
    border-bottom: solid thin #b3b3b3;
  }
</style>