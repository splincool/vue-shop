import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: [],
    cartItemsCount: 0
  },
  mutations: {
    addToCart (state, payload) {
      const cartItemIndex = state.cartItems.findIndex(item => item.id === payload.trackId)
      if (cartItemIndex < 0) {
        state.cartItems.unshift({
          id: payload.trackId,
          cartItem: payload,
          amount: 1
        })
      } else {
        state.cartItems[cartItemIndex].amount += 1
      }
    }
  },
  getters: {
    cartItemsCount: state => {
      let count = 0
      for (let i of state.cartItems) {
        count += i.amount
      }
      return count
    }
  },
  actions: {
    
  }
})
