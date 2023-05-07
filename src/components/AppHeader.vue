<template>
  <!-- <div> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">JKK</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link active" href="#">Home <span class="sr-only"></span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link" href="#">Product</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/cart" class="nav-link">
        Cart 0
      </router-link>
      </div>
    </nav>
  <!-- </div> -->
</template>

<script>

export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
