<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3 justify-content-between">
    <b-navbar-brand>
      <router-link to="/" class="logo-link">Media shop</router-link>
    </b-navbar-brand>
    <CartButton />
  </b-navbar>
</template>

<script>
import CartButton from './Cart/CartButton.vue'
export default {
  name: 'navbar',
  components: {
    CartButton
  }
}
</script>

<style scoped>
.logo-link {
  font-size: 26px;
  color: #fff;
  text-decoration: none;
}
</style>