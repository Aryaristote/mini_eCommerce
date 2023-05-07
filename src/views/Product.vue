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
        <button class="btn btn-primary ml-2" @click="showData">Add To Cart</button>

        <p class="mt-4">{{ item.description }}</p>
      </div>
    </div>
    <div v-else>
      <small>This product does not exist...</small>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from "vuex"
  
  export default {
    props: ["id"],

    computed: {
      ...mapState(["items"]),
      ...mapGetters(["getItemById"]),
      item() {
        return this.getItemById(parseInt(this.$route.params.id))// get item with id 1
      }
    },
  }
</script>
