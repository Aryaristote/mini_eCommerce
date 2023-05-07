<template>
  <div class="card m-2 mb-4" style="width: 19rem">
    <router-link :to="{name: 'product', params: { id: product.id },}" style="color: black; text-decoration: none">
      <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap">
      <div class="card-body">
        <h6 class="card-title">{{ product.title }}</h6>
        <h7><b>Price: $ {{ product.price }}</b></h7><br>
        <!-- Should have a content for product description  -->
        <small class="card-text my-4">Some quick example text to build on the card title and make up the bulk of the card's content.</small><br>
      </div>
    </router-link>
    <button class="btn btn-primary mt-2" @click="addToCart()">Add To Cart</button>
  </div>
</template>

<script>

export default {
  props: ['product'],

  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1,
      })
    }
  }
}
</script>
