<template>
    <div class="row">
        <ProductCard v-for="product in products" :key="product.Index" :product="product" />
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  import ProductCard from "./ProductCard";
  export default {
    components: {
      ProductCard
    },
  
    computed: {
      ...mapState({
        products: 'products'
      }),
    },
  
    methods: {
      // ...mapActions(["getProducts"])
    }
  };
  </script>
  
  <style>
  </style>