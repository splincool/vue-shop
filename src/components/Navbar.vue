<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <router-link to="/" class="logo-link">Media shop</router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item href="#">
            <b-button class="cart-btn" to="/cart" variant="primary">
              <span class="mdi mdi-cart"></span>
              <b-badge variant="light">9</b-badge>
            </b-button>
            <!-- <router-link to="/cart">
            </router-link> -->
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.logo-link {
  color: #fff;
  text-decoration: none;
}
</style>