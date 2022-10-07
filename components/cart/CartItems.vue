<template>
  <table class="table table-hover table-striped table-bordered">
    <thead>
      <th class="text-center">Ürün Adı</th>
      <th class="text-center">Adet</th>
      <th class="text-center">Fiyat</th>
      <th class="text-center">Tutar</th>
      <th class="text-center">Sil</th>
    </thead>
    <tbody>
      <CartItem v-for="item in cart" :item="item" :key="item.id" />
    </tbody>
  </table>
</template>

<script>
import CartItem from "@/components/cart/CartItem";
export default {
  components: {
    CartItem,
  },
  props: {
    cart: {
      type: Array,
      required: false,
    },
  },
};
</script>

