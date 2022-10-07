import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      cart: [],
      totalPrice: 0.0
    },

    mutations: {
      setProducts(state, products) {
        state.products = products
      },
      setCart(state, cart) {
        state.cart = cart
      },
      setTotalPrice(state, totalPrice) {
        state.totalPrice = totalPrice
      },
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.$axios.get("/")
          .then(response => {
            vuexContext.commit("setProducts", response.data.products)
            vuexContext.commit("setCart", response.data.cart.items)
            vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
          })
      },
      addToCart(vuexContext, product) {
        this.$axios.post("/add-to-cart", {
          product: product
        })
          .then(response => {
            vuexContext.commit("setCart", response.data.cart.items)
            vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
          })
      },
      removeProduct(vuexContext, product) {
        this.$axios.post("/remove-product", {
          product: product
        })
          .then(response => {
            vuexContext.commit("setCart", response.data.cart.items)
            vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
          })
      },
      changeCount(vuexContext, product) {
        this.$axios.post("/change-count", {
          product: product
        })
          .then(response => {
            vuexContext.commit("setCart", response.data.cart.items)
            vuexContext.commit("setTotalPrice", response.data.cart.totalPrice)
          })
      }
    },

    getters: {
      getProducts(state) {
        return state.products
      },
      getCart(state) {
        return state.cart
      },
      getTotalPrice(state) {
        return state.totalPrice
      }
    }
  })
}

export default createStore




