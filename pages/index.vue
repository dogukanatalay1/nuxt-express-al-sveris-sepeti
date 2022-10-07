<template>
  <div class="container">
    <h3 class="title text-center mt-3">Bordo Ticaret</h3>
    <div class="d-flex pt-3 justify-content-center" style="height: 100%">
      <Products :products="products" />
      <Cart :cart="cart" />
    </div>
  </div>
</template>

<script>
import Products from "@/components/product/Products";
import Cart from "@/components/cart/Cart";
export default {
  components: { Cart, Products },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>

<style>

.title{
  font-size: 40px;
}

.product-container,
.cart-container {
  padding: 1em;
  flex: 1 !important;
}
.container {
  height: 90vh;
}
body {
  background-color: #faf3df;
}
.price-container {
  background-color: blue !important;
  font-size: 12px;
}
.total-price-container {
  color: #d15385 !important;
  font-size: 20px;
}
.custom-alert {
  background-color: #faf3df !important;
  font-size: 12px;
}
.bg-custom-color {
  background-color: #faf3df !important;
}
</style>
