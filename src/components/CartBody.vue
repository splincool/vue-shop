<template>
  <b-row> 
    <b-col>
      <!-- Clear all button section -->
      <b-row>
        <b-col sm="2" offset-sm="10" class="text-center">
          <ClearAllButton />
        </b-col>
      </b-row>

      <!-- Cart data with items section -->
      <b-row v-for="(item, index) in sortCartItemsByDate" 
        :key="index"
        class="py-4 align-items-center"
      >
        <b-col sm="1"><img :src="item.cartItemData.artworkUrl100"></b-col>
        <b-col sm="5">{{item.cartItemData.trackName}}</b-col>
        <b-col sm="1">        
          <input type="number"
            class="amount-input text-center" 
            :value="item.amount" 
            @input="updateAmount($event, item.cartItemData.trackId)" 
          />
        </b-col>
        <b-col sm="2" class="text-center">x ${{item.cartItemData.trackPrice}}</b-col>
        <b-col sm="2" class="text-center">${{(item.cartItemData.trackPrice * item.amount).toFixed(2)}}</b-col>
        <b-col sm="1" class="text-center">
          <DeleteItemButton :item="item"/>
        </b-col>
      </b-row>

      <!-- Total price section -->
      <b-row class="font-weight-bold mb-3">
        <b-col sm="9" class="text-right">Total:</b-col>
        <b-col sm="2" class="text-center">
          ${{totalCartPrice}}
        </b-col>
      </b-row>

    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import ClearAllButton from '@/components/ClearAllButton.vue'
import DeleteItemButton from '@/components/DeleteItemButton.vue'
export default {
  name: 'cartBody',
  computed: {
    ...mapGetters([
      'sortCartItemsByDate',
      'totalCartPrice',
    ])
  },
  methods: {
    updateAmount (e, id) {
      this.$store.commit('changeAmount', {
        id,
        amount: e.target.value
      })
    }
  },
  components: {
    ClearAllButton,
    DeleteItemButton
  }
}
</script>

<style scoped>
  .amount-input {
    width: 60px;
  }
</style>