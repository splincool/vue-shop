<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="mb-3">
    <b-navbar-brand>
      <router-link to="/" class="logo-link">Media shop</router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item href="#">
            <CartButton />
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import CartButton from './CartButton.vue'
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