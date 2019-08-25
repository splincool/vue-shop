<template>
  <b-button 
    @click="deleteItem(item.cartItemData.trackId)" 
    variant="outline-secondary"
  >
    <span class="mdi mdi-trash-can-outline"></span>
  </b-button>
</template>

<script>
export default {
  name: 'deleteItemButton',
  props: {
    item: Object
  },
  methods: {
    deleteItem (id) {
      this.$store.commit('deleteItemFromCart', id)
      this.$store.dispatch('saveToLocalStorage')
    }
  }
}
</script>