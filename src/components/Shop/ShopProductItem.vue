<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
      <div class="d-flex flex-row justify-content-center">
        <img :src="product.img" alt="photo du earo 17" style="height:150px;">
      </div>
      <h3> {{ product.title }} </h3>
      <hr>
      <div>
        <p> {{ product.description }} </p>
      </div>
      <div>
        <span> {{ product.price }} </span>
        <button class="btn btn-primary btn-sm float-right">Commander</button>
      </div>
      

  </div>
</template>

<script>


export default {
  data() {
    return {
      product: {
        img:'https://cdn.comparez-malin.fr/cache/product/img/gigabyte/2021/26910/gigabyte-aero-17-2021-2.jpg',
        title:'AERO 17',
        description: 'AERO 17',
        price: '4 229€',
      }
    }
  }
}






</script>

<style>
.product-container{
  height: 400px;
  
}

p {
  font-size: 12px;
}
</style>