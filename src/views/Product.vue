<template>
  <div class="container">
    <div class="row pt-5" v-if="item">
      <div class="col-4">
        <img src="https://via.placeholder.com/150x100" class="w-100" style="overflow:hidden">
      </div>
      <div class="col-8">
        <h1 class="display-4"> {{ item.title }} </h1>
        <h3><b>$ {{ item.price}}</b></h3>

        <input type="text" class="text-center col-1 mr-2 p-1">
        <button class="btn btn-primary ml-2" :class="btnSTatus ? 'disabled' : ''" @click="checkAddItem">Add To Cart</button>

        <p class="mt-4">{{ item.description }}</p>
      </div>
    </div>
    <div v-else class="alert alert-danger" role="alert">
      This product is no longer available, Please Go back to the Home page
    </div>
    <hr>
    <div>
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Congrat, The item  has been added to the cart: </h4>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex"
  
  export default {
  props: ["id"],

  data() {
    return {
      btnSTatus: false,
    }
  },

    computed: {
      ...mapState(["items"]),
      ...mapGetters(["getItemById"]),
      item() {
        return this.getItemById(parseInt(this.$route.params.id))// get item with id 1
      },
      products() {
        return this.$store.state.cart
      }
    },

  methods: {
    checkAddItem() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1,
      })
      return this.btnSTatus = !this.btnSTatus
    },
  },
}
</script>
