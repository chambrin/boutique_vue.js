<template>
<div class="d-flex felx-row flex-wrap">
  <shop-products-item v-for="product in products" :key="product.id" :product="product"> </shop-products-item>
  <shop-products-item> </shop-products-item>
  <shop-products-item> </shop-products-item>
  <shop-products-item> </shop-products-item>
  <shop-products-item> </shop-products-item>
  <shop-products-item> </shop-products-item>
  <shop-products-item> </shop-products-item>
  <shop-products-item> </shop-products-item>
</div>
</template>









<script>
import ShopProductsItem from "./ShopProductItem.vue";

export default {
  components: {
    ShopProductsItem,
  },
  props: [ 'products' ]
};
</script>

<style>
</style>