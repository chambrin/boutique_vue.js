<template>
<div class="d-flex felx-row flex-wrap">
  <shop-products-item v-for="product in products" :key="product.id" :product="product"> </shop-products-item>
  <shop-products-list :products="products" class="p-3"></shop-products-list>
  <shop-product-item v-for="product in products" :key="product.id" :product="product"></shop-product-item>
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