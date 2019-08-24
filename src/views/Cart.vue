<template>
  <b-row>
    <b-col>
      <b-row v-for="(item, index) in $store.getters.sortCartItemsByDate" 
        :key="index"
        class="py-4 align-items-center"
      >
        <b-col sm="1"><img :src="item.cartItemData.artworkUrl100"></b-col>
        <b-col sm="7">{{item.cartItemData.trackName}}</b-col>
        <b-col sm="1">        
          <input type="number"
            class="amount-input text-center" 
            :value="item.amount" 
            @input="updateAmount($event, item.cartItemData.trackId)" 
          />
          <!-- <b-form-input  type="number" :value="item.amount" @input="updateAmount($event, item.cartItemData.trackId)" placeholder="Enter your name"></b-form-input> -->
        </b-col>
        <b-col sm="1" class="text-center"> x ${{item.cartItemData.trackPrice}}</b-col>
        <b-col sm="1" class="text-center">${{(item.cartItemData.trackPrice * item.amount).toFixed(2)}}</b-col>
        <b-col sm="1" class="text-center">
          <b-button 
            @click="deleteItem(item.cartItemData.trackId)" 
            variant="outline-secondary">
              <span class="mdi mdi-trash-can-outline"></span>
          </b-button>
        </b-col>
      </b-row>
      <b-row class="font-weight-bold">
        <b-col sm="10" class="text-right">Total:</b-col>
        <b-col sm="1" class="text-center">
          ${{$store.getters.totalCartPrice}}
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'cart',
  // computed: {
  //   items () {
  //     var items = []
  //     items = this.$store.getters.sortCartItemsByDate.map(item => {
  //       return {
  //         title: item.cartItemData.trackName,
  //         amount: item.amount,
  //         price: item.cartItemData.trackPrice,
  //         total_price: item.cartItemData.trackPrice * item.amount
  //       }
  //     })
  //     return items
  //   }
  // },
  methods: {
    updateAmount (e, id) {
      this.$store.commit('changeAmount', {
        id,
        amount: e.target.value
      })
    },
    deleteItem (id) {
      this.$store.commit('deleteFromCart', id)
      this.$store.dispatch('saveToLocalStorage')
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
<style scoped>
  .amount-input {
    width: 60px;
  }
</style>