<template>
  <b-card
    :title="item.trackName"
    :img-src="largeImage(item.artworkUrl100)"
    :img-alt="item.trackName"
    img-top
    tag="article"
    style="max-width: 300px; min-width: 200px"
    class="mb-3"
  >
    <b-card-text>
      {{item.trackPrice}}
    </b-card-text>
    <b-button href="#" variant="primary" @click="addToCart">
      <span class="mdi mdi-cart-plus"></span>
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'mediaCard',
  props: {
    item: Object
  },  
  methods: {
    largeImage (url) {
      return url.replace('100x100', '300x300')
    },
    addToCart () {
      this.$store.commit('addToCart', this.item)
    }
  }
}
</script>