<template>
  <div class="cart">
    <div v-for="(item, index) in $store.getters.cartItems" :key="index">
        {{item.id}} - {{item.cartItem.trackName}} - {{item.amount}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'cart',
  components: {
    // HelloWorld
  }
}
</script>
