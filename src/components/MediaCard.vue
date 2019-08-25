<template>
  <b-card
    :img-src="item.artworkUrl200"
    :img-alt="item.trackName"
    img-top
    tag="article"
    style="max-width: 160px; min-width: 160px"
    class="mb-3"
  >
    <b-card-text>{{item.trackName}}</b-card-text>
    <div class="d-flex justify-content-between" slot="footer">
      <b-card-text class="price align-self-center">${{(item.trackPrice).toFixed(2)}}</b-card-text>
      <b-button href="#" variant="primary" @click="addToCart">
        <span class="mdi mdi-cart-plus"></span>
      </b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'mediaCard',
  props: {
    item: Object
  },  
  methods: {
    addToCart () {
      this.$store.commit('addToCart', this.item)
      this.$store.dispatch('saveToLocalStorage')
    }
  }
}
</script>

<style scoped>
  .price {
    margin-bottom: 0px;
  }
</style>