<template>
  <div class="cart-container card shadow">
    <h3 class="text-center">Sepet</h3>

    <Alert v-if="cart.length == 0 || !cart" />

    <CartItems v-else :cart="cart" />
    
    <CartFooter />
  </div>
</template>

<script>
import Alert from "@/components/cart/Alert";
import CartItems from "@/components/cart/CartItems";
import CartFooter from "@/components/cart/CartFooter";

export default {
  components: {
    Alert,
    CartItems,
    CartFooter,
  },
  props: {
    cart: {
      type: Array,
      required: false,
    },
  },
};
</script>
