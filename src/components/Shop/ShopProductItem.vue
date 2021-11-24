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
 props: ['product']
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