<template>
  <shop-products-list :products="products" class="p-3">

  </shop-products-list>
</template>

<script>
    import ShopProductsList from './ShopProductsList.vue'
    import {evnentBus} from '../../main'


export default {
    components: {
        ShopProductsList,
    },
    data() {
        return {
            products: []
        }      
    }, 
     created() {
        this.products = evnentBus.products;
        evnentBus.$on('update:products' , (products) => {
            this.products = products;
        })
    },
};
</script>

<style>
</style>