import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: [],
    isLoading: true
  },
  mutations: {
    addToCart (state, payload) {
      const cartItemIndex = state.cartItems.findIndex(item => item.id === payload.trackId)
      if (cartItemIndex < 0) {
        state.cartItems.unshift({
          id: payload.trackId,
          cartItemData: payload,
          amount: 1,
          timeAdded: new Date()
        })
      } else {
        state.cartItems[cartItemIndex].amount += 1
        state.cartItems[cartItemIndex].timeAdded = new Date()
      }
    },
    changeAmount (state, payload) {
      const cartItemIndex = state.cartItems.findIndex(item => item.id === payload.id)
      state.cartItems[cartItemIndex].amount = payload.amount
    },
    deleteItemFromCart (state, payload) {
      state.cartItems = state.cartItems.filter(item => {
        return item.id != payload
      })
    },
    deleteAllFromCart (state) {
      state.cartItems = []
    },
    setDataFromLocalStorage (state, payload) {
      state.cartItems = payload.cartItems
    },
    setLoading (state, payload) {
      state.isLoading = payload
    }
  },
  getters: {
    cartItemsCount: state => {
      let count = 0
      for (let i of state.cartItems) {
        count += Number(i.amount)
      }
      return count
    },
    sortCartItemsByDate: state => {
      return state.cartItems.sort((a,b) => {
        var dateA = new Date(a.timeAdded).getTime();
        var dateB = new Date(b.timeAdded).getTime();
        return dateB > dateA ? 1 : -1; 
      })
    },
    totalCartPrice: state => {
      var totalPrice = state.cartItems.reduce((a, b) => {
        return a + (b.amount * b.cartItemData.trackPrice);
      }, 0);
      return totalPrice.toFixed(2)
    }
  },
  actions: {
    saveToLocalStorage ({state}) {
      if (localStorage) {
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      }
    },
    downloadFromLocalStorage ({commit}) {
      if (localStorage) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems'))
        if (cartItems) {
          commit('setDataFromLocalStorage', {cartItems})
        }
      }
    }
  }
})
