<template>
    <div class="home container"><br><br>
      <div>
        <h2>Your cart {{ cart.length === 0 ? "is empty" : ": "+cart.length }}</h2>
        <table class="table" v-if="cart.length">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Rate</th>
              <th scope="col">Count </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.product.id">
              <th scope="row">{{item.product.id}}</th>
              <td>{{item.product.title}}</td>
              <td>{{item.quantity}}</td>
              <td>{{item.product.price}}</td>
              <td>{{item.product.rating.rate}}</td>
              <td>{{item.product.rating.count}}</td>
              <td>
                <button type="button" class="btn btn-warning">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="alert alert-danger" role="alert">
          Please add some products
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ProductList from '@/components/ProductList.vue'
  
  export default {
    name: 'HomeView',
    components: {
      ProductList
    },
    computed: {
      cart (){
        return this.$store.state.cart  
      }
    }
  }
  </script>
  